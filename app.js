'use strict';
const FibSeq = [];
function fib(n) {
  if (n === 0) {
    FibSeq.push(0);
  } else if (n === 1) {
    FibSeq.push(1);
  } else {
    FibSeq.push(FibSeq[n - 1] + FibSeq[n - 2]);
  }
  return FibSeq[n];
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}