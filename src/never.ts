export {};

// errorを返す場合の型定義
// never: 呼び元に戻ってこない(データを代入することはできない)
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// never型を返す関数であれば、never型の変数に代入できる
let bar: never = error('only me');
