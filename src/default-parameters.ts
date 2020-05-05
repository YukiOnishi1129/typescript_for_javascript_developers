export {};

// デフォルトパラメータ
// 関数に値が渡されない場合(undefined)、デフォルトで設定するパラメーター

const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
