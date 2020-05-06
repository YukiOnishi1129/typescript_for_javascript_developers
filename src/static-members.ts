export {};

// 静的メンバ
// いつも決まった変化しないメンバ(インスタンスを作らなくてもアクセスできるメンバ)

// メンバの前にstaticを定義する
class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // "Hey, guys! Are you insterested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName} Are you insterested in TypeScript? Let's dive into TypeScript!`;
  }
}

let me = new Me();
// staticメンバはインスタンスからはアクセスできない
// console.log(me.isProgramer);

// 静的メンバへのアクセスは、「クラス.メンバ」
console.log(Me.isProgramer);
console.log(Me.work());
