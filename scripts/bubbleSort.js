let didNotSwap = true;

const bubbleSort = array => {
  array.forEach( element => {
    for (let i = 0; i < array.length; i++){
    if(array[i] > array[i + 1]){
      let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        didNotSwap = false;
      }
    }
    if (didNotSwap){
      return array;
    }
  })
  return array;
}

export default bubbleSort