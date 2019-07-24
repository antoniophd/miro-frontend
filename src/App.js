import React from 'react';
import './App.css';
import SheetJSApp from './services/sheetjs';
import { Doughnut, Bar } from 'react-chartjs-2';
import {labelData} from './fixtures/data';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
        <SheetJSApp />
        </div>
        <div className="col-sm">
        <Doughnut data={labelData} options={{ maintainAspectRatio: false }}
            />
        </div>
        <div className="col-sm">
        <Bar data={labelData} options={{ maintainAspectRatio: false }}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
