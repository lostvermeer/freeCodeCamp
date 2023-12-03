function sum(arr, n) {
    // Only change code below this line
    if (n==0){
        return 0;
    } else 
        console.log(">"+arr[n])
        return sum(arr, n-1) + arr[n-1];
    // Only change code above this line
  } 
let s = 0;
s += sum([1,1,1,1,1], 5);
console.log(">>>"+s)