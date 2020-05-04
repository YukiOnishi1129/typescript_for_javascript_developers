export {};

// intersection型
// 既存の方を活かしつつ、新たな型を合理的に生成する

type Pirtcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pirtcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// intersection型(交差型)
// 複数の型を&で足していく
type TwoWayPlayer = Pirtcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 160,
  battingAverage: 0.286,
};
