export {};

// クラス
class Person {
  // プロパティの型定義
  name: string;
  age: number;
  // constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // メソッド
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
