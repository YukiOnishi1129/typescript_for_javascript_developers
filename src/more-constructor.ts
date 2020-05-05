export {};

class Person {
  // constructorの引数にアクセス修飾子を付与すると、クラスのプロパティとして扱われる
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむさん', 43);
console.log(me);
