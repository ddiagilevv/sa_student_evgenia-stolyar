console.log('1 3 5 7 8 6 ...');

const matrix = [
    [1, 2, 11, 22],   // 00 10 20 30  31 21 11 01 02 12 22 32 
    [3, 4, 33, 44],   // 33 23 13 03 02 12 22 32 31 
    [5, 6, 55, 66], 
    [7, 8, 77, 88]  
]; 

const rows = matrix.length;
const cols = matrix[0].length;

function isEven(number){ 
    if (number % 2 === 0) { 
        return true;
    }
    else if (number % 2 === 1) { 
        return false;
    } 
    else {
        return null;
    }
};

console.log('вывод элементов на экран по вертикали (1 3 5 7 8 6 ...)');

for(let col = 0; col < matrix[0].length; col++){
    if (isEven(col)) {
        for(let row = 0; row < matrix.length; row++){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    } else {
        for(let row = matrix.length - 1; row >= 0; row--){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    }    
}

console.log('вывод элементов на экран по вертикали (1 3 5 7 8 6 ...)');

for(let col = 0; col < matrix[0].length; col++){
    if (isEven(col)) {
        for(let row = 0; row < matrix.length; row++){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    } else {
        for(let row = matrix.length - 1; row >= 0; row--){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    }    
}

console.log('вывод элементов на экран по вертикали (88 66 44 22 11 33 ...)');

for(let col = matrix[0].length - 1; col >= 0; col--){
    if (isEven(col)) {
        for(let row = 0; row < matrix.length; row++){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    } else {
        for(let row = matrix.length - 1; row >= 0; row--){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    }    
}