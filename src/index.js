
module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  
  for(var i=0; i<matrix.length; i++) {
    if (i%2 !==0) {
      matrix[i].reverse();
    }
    
    }
    return matrix.join().split(',').map(Number);
}
