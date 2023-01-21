let arra = ["Apples","Orange","Banana", 75, 59, 105];

console.log(arra);
console.log(arra[0]);
console.log(arra[3]);
console.log(arra[5]);
//Array is useful, it used to arrenge values in order, make group of values and check value one by one.
console.log("------------");
let num = [8, 9, 10, 11, 12, 13, 14, 15];

console.log(num[3]);
console.log(num);
console.log("------------");

let arr = [1, 5, 34, 2, 7, 9, 0, 32, 2, 1, 5, 34, 2, 7, 9, 0, 32, 2, 1, 5, 34, 2, 7, 9, 0, 32, 2];
let len = arr.length;

for(let i = 0; i < len; i ++){
  if(arr[i] < 7){
    console.log(arr[i]);
  }
}

console.log("------last");

let arry = [0, 3, 1, 5, 1, 7, 7.5, 8, 9, 19, 29, 30, 33, 45, 60];
let leng = arry.length;

for(let x = 0; x < leng; x ++){
  if(arry[x] > 7){
    console.log(arry[x]);
  }
}