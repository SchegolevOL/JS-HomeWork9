let arr1 = [-1,0,1,11,15,16,17];
let arr2 = [0,3,4,5,6,7,8,9,10,11,12,13,14];
let arr3 = FuncSummArr1(arr1, arr2);


console.log(`Array:  ${arr3}`);


function FuncSummArr1(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  // В одну строчку
  while (arr1.length + arr2.length != i + j) {
    arr1[i] < arr2[j] && i != arr1.length
      ? res.push(arr1[i++])
      : j != arr2.length
      ? res.push(arr2[j++])
      : res.push(arr1[i++]);
  }

  return res;
}
