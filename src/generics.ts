export {};
// ジェネリクス
// 型が異なるが似たような処理を記載している場合、共通化できないか？
// const echo = (arg: number): number => {
//   return arg;
// };
// const echo = (arg: string): string => {
//   return arg;
// };

// <>：ジェネリクスの宣言(Tが抽象的な型を宣言：stringにもなるしnumberにもなる)
// <T>のTは型変数
const echo = <T>(arg: T): T => {
  return arg;
};
// 使い方
// 関数<型>(引数)：型は開発者が指定する必要がある
console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

// クラスのジェネリクス
class Mirror<T> {
  // プロパティの型を抽象的な型に定義
  constructor(public value: T) {}

  // メソッドの戻り値の型を抽象的な型に定義
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, Generics!').echo());
console.log(new Mirror<boolean>(true).echo());
