var plotConfigTable = {
    north: function() {
        movePlayer("north");
    },
    east: function() {
        movePlayer("east");
    },
    south: function() {
        movePlayer("south");
    },
    west: function() {
        movePlayer("west");
    },
    look: describeLocation,
    backpack: showBackpack
};

function processUserInput(command) {
    commandTable[command]();
}
