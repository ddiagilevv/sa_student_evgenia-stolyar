const grid = [
    [1, 2, 11, 22, 51],
    [3, 4, 33, 44, 61, 84],
    [5, 6, 55, 66, 71, 97, 123],
    [7, 8, 77, 88]
];

for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[row].length; col++){
        console.log(`grid[${row}][${col}] = ${grid[row][col]}`);
    }
    console.log(" ");
}
