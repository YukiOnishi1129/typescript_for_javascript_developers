export {};

let numbers1: number[] = [1, 2, 3];
// array型のもう一つの書き方(非推奨)
// Array<>のArray:interface
// <>:ジェネリクス
let numbers2: Array<number> = [1, 2, 3];
console.log(numbers1);
// console.log(numbers2);

let strings2: Array<string> = ['ToKyo', 'Osaka', 'Kyoto'];

let string1: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

console.log(string1);

// 二次元配列のアノテーション
let nijigenHairetu: number[][] = [
  [50, 100],
  [150, 300],
];

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
console.log(hairetsu);
