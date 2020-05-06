export {};

// 名前空間
// 競合するクラス名を使用することができる

// このPersonクラスはJapaneseの名前空間に属するものだと定義
namespace Japanese {
  // 名前空間をネストすることができる
  // その場合exportして外からアクセスできるようにする
  export namespace Tokyo {
    // exportしないと使用できない
    // 外の空間からアクセスできるようにする
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

// このPersonクラスはEnglishの名前空間に属するものだと定義
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me);

const meOsaka = new Japanese.Osaka.Person('関西');
console.log(me);

const michel = new English.Person('Michel', 'Joseph', 'Jackson');
console.log(michel);
