// const square = function (x) {
//   return x * x;
// };
// console.log(square(9));

// // const squarrow = (x) => {
// //   return x * x;
// // };

// const squarrow = x => x * x;

// console.log(squarrow(5));
const verboseGet = (name) => {
  return name.split(' ')[0];
}
const getFirstName = name => name.split(' ')[0];

console.log(getFirstName('Mike Smith'));
console.log(verboseGet('Dave Smith'));