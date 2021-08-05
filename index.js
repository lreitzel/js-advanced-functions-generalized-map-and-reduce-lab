// Add your functions here
function map(src, callback) {
    const r = [];
  
    for (let i = 0; i < src.length; i++) {
      const theElement = src[i];
      r.push(callback(theElement));
    }
  
    return r;
}

function reduce(arr, callback, initValue) {
    if (initValue) {
        let total = initValue
        for (let i = 0; i < arr.length; i++) {
            total = callback(arr[i], total)
        }
        return total;
    } else {
        let total = arr[0]
        for (let i = 1; i < arr.length; i++) {
            total = callback(arr[i], total)
        }
        return total;
    }
}