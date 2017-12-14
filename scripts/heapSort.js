let arr = [];
let lastIndex = arr.length - 1;

const buildHeap = (arr, i) => {
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2; 
  let parent = i;

  if (leftChild < lastIndex && arr[leftChild] > arr[parent]){
      parent = leftChild;
  }
  if (rightChild < lastIndex && arr[rightChild] > arr[parent]){
      parent = rightChild;
  }
    
  if (parent != i) {
    let temp = arr[i];

    arr[i] = arr[parent];
    arr[parent] = temp;
    buildHeap(arr, parent);
  }
}

const heapSort = (arr, i) => {
  lastIndex = arr.length;

  for(let i = Math.floor(lastIndex / 2); i >= 0; i--){
    buildHeap(arr, i);
  }
  
  for(i = arr.length - 1; i > 0; i--){
    let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      
      lastIndex--;
      buildHeap(arr, 0);
    }
    return arr;
}

module.exports = heapSort;