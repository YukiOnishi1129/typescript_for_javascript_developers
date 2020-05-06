export {};
// 継承
class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    // nameの初期化は親クラスで実施
    super(name);
    // speedは自分のクラスで実施
    this.speed = speed;
  }
  // オーバーライド
  run(): string {
    // 親クラスのメソッドを呼び出す
    // const parentMessage = super.run();
    // console.log(parentMessage);
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('ミッキー'));
console.log(new Lion('しんば', 80).run());
