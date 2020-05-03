export {};
// tuple型は型推論で表示されるものではない。
// indexを指定して型を定義する場合はtuple型を使用する
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'];
console.log(profile);
