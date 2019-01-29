let input = document.getElementsByTagName('pre');
let boxIDs = input[0].innerText.trim().split('\n');
let result= [];
for (let item of boxIDs) {
    let lettersA = item.split('');
    for (let i = boxIDs.indexOf(item) + 1; i < boxIDs.length; ++i) {
        let diff = [];
        let lettersB = boxIDs[i].split('');
        for (let l = 0; l < lettersA.length; ++l) {
            if (lettersA[l] !== lettersB[l]) {
                if (diff.push(lettersA[l]) >= 2)
                    break;
            }
        }
        if (diff.length === 1) {
            result[1] = item.replace(diff[0], '');
            break;
        }
    }    
}
console.log(result[1]);