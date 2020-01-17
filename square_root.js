/**
 * 平方根
 */

function squareRoot(num) {
  let x0, x1;

  // num 必须大于零
  if (num <= 0) {
    console.error('请输入合法的数字');
  } else {
    // 设定一个初始值作为num的平方根，这里是 num / 2。与真正的平方根有很大的误差。
    x0 = num / 2;
    // 求平方根的迭代公式；利用迭代公式求出新值
    x1 = (x0 + num / x0) / 2;

    do {
      x0 = x1;
      // 求平方根的迭代公式；利用迭代公式求出新值
      x1 = (x0 + num / x0) / 2;
    } while (Math.abs(x1 - x0) > 1e-6); // 迭代完成的条件，精确度。
  }

  return `${num}的平方根是：${x1}`;
}

console.log(squareRoot(16));
