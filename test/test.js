const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')
const insertionSort = require('../insertionSort')

describe("Sorting Suite", function() {
  it("can sort an array", function() {
    assert.equal(bubbleSort([2,1,4,0,5]), [0,1,2,3,4,5])
  });

  it("can sort an unsorted array", function() {
    assert.equal(insertionSort([3,2,1,4]))
  });
});
