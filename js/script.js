let arr1 = [-1, 4, 7, 7, 9, 10, 10, 20, 30, 30, 30, 41,44];
let arr2 = [0, 3, 4, 5, 6, 7, 11, 20, 20, 50,60,100,100,120,120,150];
let arr3 = FuncSummArr(arr1, arr2);

console.log(`Array:  ${arr3}`);

// function FuncSummArr(arr1, arr2) {
//   let arr = [];
//   let lengthArr1 = arr1.length;
//   let lengthArr2 = arr2.length;
//   let i = 0;
//   let j = 0;
//   while (lengthArr1 + lengthArr2 != 0) {
//     if (arr1[i] < arr2[j] && lengthArr1 != 0) {
//       arr.push(arr1[i]);
//       i++;
//       lengthArr1--;
//     } else if (lengthArr2 != 0) {
//       arr.push(arr2[j]);
//       j++;
//       lengthArr2--;
//     }
//   }
//   return arr;
// }

function FuncSummArr(arr1, arr2) {
  let res = [];
  let i = -1;
  let j = -1;
  // В одну строчку
  while ((arr1.length + arr2.length)!= (i + j)+1) res.push(arr1[i+1] < arr2[j+1] && i!=arr1.length ? arr1[++i] : arr2[++j]) ;  
  return res;
}

