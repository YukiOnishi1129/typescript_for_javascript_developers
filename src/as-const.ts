export {};

// constアサーション

let name = 'Atsushi ';

name = 'Ham';

// 「as const」をすると、変数にデータのリテラル型が付与される。
// 'Ham'以外代入できない変数になる
let nickname = 'Ham' as const;

// nickname = 'Hamtaro';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// オブジェクトにconstアサーションを設定すると、プロパティはreadOnlyになる
// profile.name = 'Ham';
// profile.height = 160;
