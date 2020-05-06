export {};
// 抽象クラス
// 抽象メソッドは必ずオーバーライドする
abstract class Animal {
  // 抽象メソッドは抽象クラスでのみ定義できる
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}
