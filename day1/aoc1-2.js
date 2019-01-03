let input = '+1, -2, +3, +1';
let inputArr = input.split(',');
let zero = 0;
let arrT = [];
for (i = 0; i < inputArr.length; i++) {
  inputArr[i] = parseInt(inputArr[i]);
}
for (i = 0; i < inputArr.length; i++) {
  zero += inputArr[i]
  arrT.push(zero)
}
// for (i = 0; i < 10; i++) {
//   for (j = i + 1; j < 10; j++) {
//     if (arrT[i % arrT.length] === arrT[j % arrT.length]) {
//       console.log(arrT[j % arrT.length])
//     }
//   }
// }
console.log(arrT)