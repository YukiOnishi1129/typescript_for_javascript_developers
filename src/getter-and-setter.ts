export {};

// * owner
//      * 所有者
//      * 初期化時に変更できる
//      * 途中で変更できない
//      * 参照できる

// * secretNumber
//      * 個人番号
//      * 初期化時に変更できる
//      * 途中で変更できる
//      * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // getterに設定する場合、プロパティの名前は同一のものは定義できないので、リネームする必要あり
  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber:${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234);
// getterの呼び出しに()は不要
card.owner;
console.log(card.owner);

// setterの場合、代入で変更できる
card.secretNumber = 12345678;
console.log(card.debugPrint());
