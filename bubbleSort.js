do {
var swapped;
var bubbleSort = function(array) {
  swapped = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      swapped = true;
      var temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}
} while (swapped);



module.exports = bubbleSort
