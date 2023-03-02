let arr1 = [-1, 4, 7, 7, 9, 10, 10, 20, 30, 30, 30, 41];
let arr2 = [0, 3, 4, 5, 6, 7, 11, 20, 20, 50];
let arr3 = [];
let lengthArr1 = arr1.length;
let lengthArr2 = arr2.length;
let i = 0;
let j = 0;
while (lengthArr1 || lengthArr2) {  
  if (arr1[i] < arr2[j] && lengthArr1 != 0) {
    arr3.push(arr1[i]);
    i++;
    lengthArr1--;
  }else if(lengthArr2!=0){
    arr3.push(arr2[j]);
    j++;
    lengthArr2--;
  }
}
console.log(arr3);