/**
 * 百钱买百鸡
 * 
 * 使用枚举算法实现百钱买百鸡
 */

function buyAHundredChicken() {
  // 定义公鸡为x, 母鸡为y, 小鸡为z。
  let x, y, z;

  for (x = 0; x < 20; x++) {
    for (y = 0; y < 33; y++) {
      z = 100 - x - y; // 公鸡母鸡小鸡个数一共为100
      if (5 * x + 3 * y + z / 3 == 100) { // 公鸡母鸡小鸡钱数一共100
        console.log(`公鸡：${x}，母鸡：${y}，小鸡：${z}`);
      }
    }
  }
}
// console.log(1/0);
buyAHundredChicken();
