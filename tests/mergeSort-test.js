import { assert } from 'chai';
import mergeSort from '../scripts/mergeSort.js'
import { populateRandomArray, sortCheck } from '../scripts/randomNumberArray.js'

describe('Merge Sort Test', () => {
  
    it('should be a function', () => {
      assert.isFunction(mergeSort);
    });
  
    it('should sort an array with 10 items', () => {
      let tenOne = populateRandomArray(0, 100, 10);
      assert.equal(sortCheck(mergeSort(tenOne)),true);
    });
  
    it('should sort an array with 100 items', () => {
      let tenTwo = populateRandomArray(0, 1000, 100);
      assert.equal(sortCheck(mergeSort(tenTwo)),true);
    });
   
    it('should sort an array with 1,000 items', () => {
      let tenThree = populateRandomArray(0, 10000, 1000);
      assert.equal(sortCheck(mergeSort(tenThree)),true);
    }); 
  
    it('should sort an array with 10,000 items', () => {
      let tenFour = populateRandomArray(0, 100000, 10000);
      assert.equal(sortCheck(mergeSort(tenFour)),true);
    });
  
    it('should sort an array with 100,000 items', () => {
      let tenFive = populateRandomArray(0, 1000000, 100000);
      assert.equal(sortCheck(mergeSort(tenFive)),true);
    });

    it('should sort an array with 101,500 items', () => {
      let tenFive = populateRandomArray(0, 1000000, 101500);
      assert.equal(sortCheck(mergeSort(tenFive)),true);
    });
  
    it('should sort an array with negative numbers', () => {
      let negativeArray = populateRandomArray(-100, 1000, 100);
      assert.equal(sortCheck(mergeSort(negativeArray)),true);
    });
  
    it('should sort an array with letters', () => {
      let lettersArray = ['g', 'n', 'b', 'e', 'r', 'y', 'z', 't', 'a', 'm'];
      assert.deepEqual(mergeSort(lettersArray), ['a', 'b', 'e', 'g', 'm', 'n', 'r', 't', 'y', 'z'])
    });
  });
