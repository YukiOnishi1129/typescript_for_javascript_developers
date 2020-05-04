export {};
// object: 制約が甘い
let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };

console.log(profile1);

// {}でプロパティごとに型を定義できる
let profile2: {
  name: string;
} = { name: 'Ham' };
// 定義していないプロパティは代入できない
// profile2 = { birthYear: 1976 };
