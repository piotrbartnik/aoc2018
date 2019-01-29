let input = document.getElementsByTagName('pre');
let boxIDs = input[0].innerText.trim().split('\n');
boxIDs = boxIDs.map(x=>x.split('').sort().join(''))
let result= []
result[0] = boxIDs.reduce((acc, val) => {
  let letters = val.split('').reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
  }, {});

  let has2 = false, has3 = false;
  for (let a of Object.values(letters)) {
      if (a === 2) has2 = true;
      if (a === 3) has3 = true;
  }
  if (has2) ++acc[0];
  if (has3) ++acc[1];

  return acc;
}, [ 0, 0 ]).reduce((acc, val) => acc * val, 1);