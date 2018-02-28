module.exports = function solveSudoku(matrix) {
    solve(matrix);
    return matrix;
}

function solve(matrix) {
  for (var row = 0; row < 9; row++) {
    for (var column = 0; column < 9; column++) {
      if (matrix[row][column] === 0) {
        for (var number = 1; number <= 9; number++) {
          if (checkIndexes(matrix, row, column, number) && checkSquares(matrix, row, column, number)) {
            matrix[row][column] = number;
            if (solve(matrix)) { 
              return true; 
            } else {
              matrix[row][column] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}

function checkSquares(matrix, row, column, number) {
  var squareRow = Math.floor((row / 3)) * 3;
  var squareColumn = Math.floor((column / 3)) * 3;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if ((i != row) && (j != column) && (matrix[squareRow + i][squareColumn + j] == number)) {
        return false;
      }
    }
  }
  return true;
}

function checkIndexes(matrix, row, column, number) {
  for (var i = 0; i < 9; i++) {
    if ((i != row) && (matrix[i][column] == number)) {
      return false;
    }
  }
  for (var j = 0; j < 9; j++) {
    if ((j != column) && (matrix[row][j] == number)) {
      return false;
    }
  }
  return true;
}