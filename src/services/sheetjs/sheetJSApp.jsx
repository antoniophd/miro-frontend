/* xlsx.js (C) 2013-present  SheetJS -- http://sheetjs.com */
/* Notes:
   - usage: `ReactDOM.render( <SheetJSApp />, document.getElementById('app') );`
   - xlsx.full.min.js is loaded in the head of the HTML page
   - this script should be referenced with type="text/babel"
   - babel.js in-browser transpiler should be loaded before this script
*/

import React from "react";
import XLSX from "xlsx/xlsx";
import OutTable from "./outTable";
import DragDropFile from "./dragDropFile";
import DataInput from "./dataInput";

class SheetJSApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [] /* Array of Arrays e.g. [["a","b"],[1,2]] */,
            cols: [] /* Array of column objects e.g. { name: "C", K: 2 } */
        };
        this.handleFile = this.handleFile.bind(this);
    }
    handleFile(file /*:File*/) {
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = e => {
            /* Parse data */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, {
                type: rABS ? "binary" : "array",
                cellDates: true
            });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws, {
                header: 1,
                raw: false
            });
            /* Update state */
            this.setState({ data: data, cols: make_cols(ws["!ref"]) });
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    }
    render() {
        return (
            <DragDropFile handleFile={this.handleFile}>
                <div className="row">
                    <div className="col-xs-12">
                        <DataInput handleFile={this.handleFile} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <OutTable
                            data={this.state.data}
                            cols={this.state.cols}
                        />
                    </div>
                </div>
            </DragDropFile>
        );
    }
}

// if (typeof module !== "undefined") module.exports = SheetJSApp;
export default SheetJSApp;

/* generate an array of column objects */
const make_cols = refstr => {
    let o = [],
        C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i)
        o[i] = { name: XLSX.utils.encode_col(i), key: i };
    return o;
};