let input = document.getElementsByTagName('pre');
let inputArr = input[0].innerText.trim().split('\n');
inputArr = inputArr.map(x=>x.split('').sort().join(''));

