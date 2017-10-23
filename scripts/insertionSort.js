const insertionSort = array => {
  array.forEach( element =>{
    for (let j = 0; j <= array.length; j++){
      if (array[j + 1] < array[j]){
        [ array[j + 1], array[j] ] = [ array[j], array[j + 1] ];
      }
    }
  })
  return array;
}

module.exports = insertionSort;