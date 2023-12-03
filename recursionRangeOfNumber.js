function rangeOfNumbers(startNum, endNum) {
  let dif = endNum - startNum;
  if (dif < 0) {
    return [];
  } else {
    let arr = rangeOfNumbers(startNum+1, endNum);
    arr.unshift(startNum);
    return arr;
  }
};

console.log(rangeOfNumbers(1,10));