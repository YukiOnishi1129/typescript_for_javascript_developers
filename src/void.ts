export {};

// 関数に型を定義した場合、returnで該当の方の値を返す必要がある
// function returnNothing(): undefined {
//   console.log("I don't return anything!");
//   return undefined;
// }

// voidまたはanyであれば、returnで返す必要はない
// void: 関数にreturnを記述しない場合に使用する型d
function returnNothing(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing());
