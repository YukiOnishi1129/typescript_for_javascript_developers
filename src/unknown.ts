export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnKnown: unknown = kansu();

let sumAny = numberAny + 10;
// unknown: 不明の型
// jsの場合、unknown型に下記のように数値型を足したりすると、その瞬間にエラーになる
// TypfeScriptだとコーディング中に判明する
// let sumUnKnown = numberUnKnown + 10;

// console.log(typeof numberUnKnown);

// typeofで変数の型を判別し、該当する場合処理を実行するようにする
// タイプガード
if (typeof numberUnKnown === 'number') {
  let sumUnKnown = numberUnKnown + 10;
}
