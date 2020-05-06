export {};

// 型の互換性
// string→anyは互換性あり
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); //undefined

fooCompatible = barCompatible;

console.log(typeof fooCompatible); //string

// string→numberは互換性なし
let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

// string→stringは互換性あり
let fooString: string;
let barString: string = 'string';

fooString = barString;

// string型→stringリテラル型は互換性がある
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// number型¬numberリテラル型は互換性がある
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}
// PersonクラスとAnimalインターフェースと依存関係はない
// オブジェクトを代入できるかの判定は、そのオブジェクトの型に関係はない。
//代入される側の型にあるメンバは、代入する側の型にあるメンバに存在する必要がある
let me: Animal;
me = new Person(43, 'はむ');
