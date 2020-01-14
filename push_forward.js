/**
 * 顺推算法
 * 
 * 使用顺推法实现斐波那契数列
 */

function fibonacci(n) {
  // 定义一个数组，用来存放对应的斐波那契数值
  let fibonacciArr = [1, 1];

  // 顺推每个月的总数
  for (let i = 2; i < n; i++) {
    fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
  }

  return fibonacciArr;
}

console.log(fibonacci(12).toString());
