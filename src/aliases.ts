export {};
// 型の別名を定義
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMOjiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43,
};

// typeofで変数、配列、オブジェクトに定義してある型の定義を取得する
type Profiles2 = typeof example1;
