export {};

// 予めオブジェクトにプロパティを定義していない場合、オプショナルで設定すれば行けるけど、
// あとで新たにプロパティを追加したい場合、毎回オプショナルで定義しなければならず、メンテナンスの工数がかかる
// let profile: { name?: string } = {};

// profile.name = 'Ham';
// profile.age = 43;

// インデックスシグネチャ
// キーに該当する箇所をアノテーションするための署名
// オブジェクトの添字に対する型注釈

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
// let profile: { [index: string]: string | number } = {};
let profile: Profile = {
  name: 'Ham',
  underTwenty: true,
};

profile.name = 'Ham';
profile.age = 43;
// 新たにプロパティを追加してもエラーが発生しない(汎用性が高くなる)
profile.nationality = 'Japan';
