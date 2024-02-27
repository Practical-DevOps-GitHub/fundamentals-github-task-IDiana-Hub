function min(arr, toReturn) {
  const minItem = Math.min(...arr);
  let minIndex = 0;
  for (let i = 0; i < arr.lenght; i++){
    if (arr[i]===minItem){
      minIndex=i;}
  }
  const result = toReturn==='value' ? arr[minIndex] : minIndex;
  return result;
}

min(min([1,-500,3,4,5], 'value');
min([1,-500,3,4,5], 'index');