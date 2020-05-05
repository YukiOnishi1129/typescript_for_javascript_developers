export {};

// アクセス修飾子

// クラス
class Person {
  // プロパティの型定義
  public name: string;
  private age: number;
  protected nationality: string;
  // constructor
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  // メソッド
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// サブクラス
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  // メソッド
  profile(): string {
    // スーパークラスのprivateプロパティは、サブクラスからはアクセスできない
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, '日本');
console.log(taro.profile());
console.log(taro.name);
// privateのプロパティはクラス内以外では呼び出しできない
// console.log(taro.age);
let robot = new Android('Robot', 20, 'アメリカ');
// protectedのプロパティはクラス内もしくはサブクラス内以外では呼び出しできない
// console.log(taro.nationality);
// console.log(robot.nationality);
console.log(robot.profile());
