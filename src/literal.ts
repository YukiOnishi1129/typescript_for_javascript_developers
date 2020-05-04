export {};

// Literal型は3つ
// 文字列
// 数値
// 真偽値

// 文字列のLiteral型
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// 型は文字列だけど、想定でない値が来たときの判別
// dayOfTheWeek = '31';

// 数値のLiteral型
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;

// 真偽値のLiteral型
let TRUE: true = true;
// falseは設定できない
// TRUE = false;
