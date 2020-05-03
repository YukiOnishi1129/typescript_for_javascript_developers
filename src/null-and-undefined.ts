export {};

// nullを代入しても型推論でnullは出てこない
// 手動でnull型を定義する必要がある
let absence: null = null;
// absence = 'hello';

// undefinedを代入しても型推論でnullは出てこない
// 手動でundefined型を定義する必要がある
let data: undefined = undefined;
// data = 1;
