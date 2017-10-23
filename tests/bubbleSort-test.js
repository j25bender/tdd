import { assert } from 'chai';
const bubbleSort = require('../scripts/bubbleSort.js');
const { populateRandomArray, sortCheck } = require('../scripts/randomNumberArray.js');

describe('Bubble Sort Test', () => {
  
    it('should be a function', () => {
      assert.isFunction(bubbleSort);
    });
  
    it('should sort an array with 10 items', () => {
      let tenOne = populateRandomArray(0, 100, 10);
      assert.equal(sortCheck(bubbleSort(tenOne)),true);
    });
  
    it('should sort an array with 100 items', () => {
      let tenTwo = populateRandomArray(0, 1000, 100);
      assert.equal(sortCheck(bubbleSort(tenTwo)),true);
    });
   
    it('should sort an array with 1,000 items', () => {
      let tenThree = populateRandomArray(0, 10000, 1000);
      assert.equal(sortCheck(bubbleSort(tenThree)),true);
    }); 
  
    it('should sort an array with 10,000 items', () => {
      let tenFour = populateRandomArray(0, 100000, 10000);
      assert.equal(sortCheck(bubbleSort(tenFour)),true);
    });
  
    it('should sort an array with negative numbers', () => {
      let negativeArray = populateRandomArray(-100, 1000, 100);
      assert.equal(sortCheck(bubbleSort(negativeArray)),true);
    });
  
    it('should sort an array with letters', () => {
      let lettersArray = ['g', 'n', 'b', 'e', 'r', 'y', 'z', 't', 'a', 'm'];
      assert.deepEqual(bubbleSort(lettersArray), ['a', 'b', 'e', 'g', 'm', 'n', 'r', 't', 'y', 'z'])
    });
  });
