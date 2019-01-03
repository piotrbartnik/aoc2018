let input = document.getElementsByTagName('pre');
let inputArr = input[0].innerText.split('\n');
let zero = 0;
for (i=0;i<inputArr.length;i++){
  inputArr[i] = parseInt(inputArr[i]);
}
let sum = 0
let set = new Set([0])
let length = inputArr.length-1

for(let x = 0 ; ; x = ((x+1) % length)){
    sum += inputArr[x]

    if(set.has(sum)){
        console.log(sum)
        break
    }else{
        set.add(sum)
    }
}