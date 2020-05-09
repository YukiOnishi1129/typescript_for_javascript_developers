export {};

// Nullable
// 最初、型が決まってない状態で定義する場合

// tsconfig.jsonのstrictNullChecksがtrueの場合、nullを定義できない
// strictNullChecksがfalseだと、どんなデータでもnullが設定できるようになる

// strictNullChecksを変更しない場合
// union型を使用する。(number | null でnumberかnullを定義できるようになる)

let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null,
};
