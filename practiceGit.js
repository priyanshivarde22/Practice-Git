function medianof2Arr(arr1) {
    var concat = arr1;
    concat = concat.sort(
        function (a, b) { return a - b });
  
    console.log(concat);
    var length = concat.length;
  
    if (length % 2 == 1) {
  
        // If length is odd
        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]
  
    }
    else {
        console.log((concat[length / 2] 
            + concat[(length / 2) - 1]) / 2);
              
        return (concat[length / 2] 
            + concat[(length / 2) - 1]) / 2;
    }
}
  
arr1 = [1, 4, 7, 9]
  
medianof2Arr(arr1)