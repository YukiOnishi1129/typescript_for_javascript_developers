export {};

// オーバーロード
// 同じ関数で重複して定義するとエラーとなる
// シグネチャーを定義する必要あり(型だけ定義してるもの)

// シグネチャー
function double(value: number): number;
function double(value: string): string;

// 実態(実態は1つしか記載できない)
function double(value: any): any {
  // タイプガードを実施
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

// 引数はシグネチャーで定義した(numberとstring)だけOK
// それ以外の型だとエラーとなる
console.log(double(100));
console.log(double('Go'));
// シグネチャーで定義していないboolean型はエラーとなる
// console.log(double(false));
