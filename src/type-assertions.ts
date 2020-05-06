export {};

// 型アサーション(このデータの型はこうだよと示す)

let name: any = 'Ham';
// 変数ではなくデータに型を定義する
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length;

length = 'foo';
