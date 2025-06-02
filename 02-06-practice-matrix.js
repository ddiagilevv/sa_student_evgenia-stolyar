const matrix = [
    [1, 2, 11, 22, 51, 77, 43],
    [3, 4, 33, 44, 61, 84, 87],
    [5, 6, 55, 66, 71, 97, 123],
    [7, 8, 77, 88, 64, 93, 98]
]; 

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

console.log('вывод матрицы на экран');

for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[row].length; col++){
        console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
    }
    console.log(" ");
}

console.log('обход матрицы змейкой'); 

for(let row = 0; row < matrix.length; row++){
    if (isEven(row)) {
        for(let col = 0; col < matrix[row].length; col++){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    } else {
        for(let col = matrix[row].length - 1; col >= 0; col--){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    }    
}

console.log('обход матрицы змейкой снизу вверх'); 

for(let row = matrix.length - 1; row >= 0; row--){
    if (isEven(row)) {
        for(let col = 0; col < matrix[row].length; col++){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    } else {
        for(let col = matrix[row].length - 1; col >= 0; col--){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    }    
}

console.log('обход матрицы змейкой снизу вверх инвертированный'); 

for(let row = matrix.length - 1; row >= 0; row--){
    if (!isEven(row)) { // ! - означает отрицание
        for(let col = 0; col < matrix[row].length; col++){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    } else {
        for(let col = matrix[row].length - 1; col >= 0; col--){
            console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
        }
    }    
}

const squaredMatrix = [
    [1, 2, 11, 22],   00 10 20 30  31 21 11 01 02 12 22 32 
    [3, 4, 33, 44], 
    [5, 6, 55, 66], 
    [7, 8, 77, 88]  
]; 

console.log('вывод элементов на экран по диагонали');

for(let row = 0; row < matrix.length; row++){
        let col = row;
        console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
    
    console.log(" ");
}

console.log('вывод элементов на экран по диагонали с другой стороны');

for(let row = 0; row < matrix.length; row++){
        let col = matrix.length - row - 1;
        console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
    
    console.log(" ");
}

console.log('1 3 5 7 8 6 ...');