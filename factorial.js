function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(3));

function factorialTwo(n, total = 1) {
  if (n === 1 || n === 0) {
    return total;
  }
  total = total * n;
  return factorialTwo(n - 1, total);
}

console.log(factorialTwo(5))
