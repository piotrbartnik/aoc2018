let input = document.getElementsByTagName('pre');
let inputArr = input[0].innerText.split('\n');
let zero = 0;
for (i=0;i<inputArr.length;i++){
  inputArr[i] = parseInt(inputArr[i]);
}
for (i=0;i<inputArr.length-1;i++) {
  zero += inputArr[i]
}
console.log(zero);
