function random(money, counts) {
  let res = [];
  const getRandomMoney = () => {
    let max = (money / counts) * 2;
    let currMoney = Math.random() * max;
    currMoney = currMoney < 0.01 ? 0.01 : Math.floor(money * 100) / 100;
    res.push(currMoney);
    money -= currMoney;
    counts--;
  };
  let rounds = counts;
  for (let i = 0; i < rounds; i++) {
    getRandomMoney();
  }
  return res;
}
