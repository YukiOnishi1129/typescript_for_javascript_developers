export {};

// readonly修飾子
// 読み取り専用
class VisaCard {
  // publicを付けなくてもいい変則ルールがある
  //   constructor(readonly owner: string) {}

  // readonlyでもpublicを記載した方が分かりやすいため、記載した方がいい
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard);
// myVisaCard.owner = 'はむ';
