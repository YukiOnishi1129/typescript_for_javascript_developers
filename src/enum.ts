export {};

// enum型
// 各要素にindexがふられている
// 先頭の要素に数値を設定すると、他の要素はその数値から+1ごとに増やした要素番号になる
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  Decemver,
}

Months.January; // 1
console.log(Months.January);
Months.February; // 2
console.log(Months.February);
console.log(Months.Decemver);

// const MonthJs = {
//   January: 0,
//   February: 1,
// };

// console.log(MonthJs.January);

// 文字列の列挙
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008800',
  BLUE = '#0000FF',
  //   YELLOW = '#FFFF00',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

// enum型は途中で値を追加することができる
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

COLORS.YELLOW;
