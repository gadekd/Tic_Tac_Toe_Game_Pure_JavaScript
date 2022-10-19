// Collecting tiles from the table
let tiles = document.querySelectorAll("#field");
let tileList = Array.from(tiles);

// Clear board to play again
function clearBoard() {
    for (var i = 0; i < tileList.length; i++) {
        tileList[i].textContent = "";
    }
}

console.log(tileList);