export {};

class Mahotsukai {}
class Souryo {}

// TypeScriptは単一継承(1つのクラスしか継承できない)

class Taro extends Mahotsukai {}

interface Kenja {
  // シグネチャー
  ionazun(): void;
}

interface Senshi {
  // シグネチャー
  kougeki(): void;
}

// 複数のインターフェースを継承することは許可されている(多重継承のようなことができる)
// インターフェース：全てのメソッドが抽象メソッド
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();

console.log(jiro.ionazun());
