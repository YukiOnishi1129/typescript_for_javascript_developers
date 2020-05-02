export {};
// export を記載しないとモジュールとして扱われない(モジュールシステム)
// →グローバル空間にある「name」を使用して上書いてしまう危険性があるので、エラーになってしまう。

let name = 'TypeScript';

// boolean型のみ代入できる
let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
