const arr = [1, 3, 2, 1, 2, 1, 3, 2, 4, 5, 5, 3, 7];

for (let i = 0; i < arr.length; i++) {
  const element = array[i];
}

let arrRes = [];
const result = arr.reduce((acc, el) => {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});
console.log(result);
let arr1 = Object.entries(result);
arr1.forEach((elem) => {
  if (elem[1] % 2) {
    arrRes.push(elem[0]);
  }
});
console.log(arrRes);
