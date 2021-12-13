// Получить минимальное нужное количество банкнот для заданной суммы

export const minNumOfBanknotes = (ammount) => {
  const banknotes = [5000, 2000, 1000, 200, 100];

  let rest;
  let res = {};
  
  banknotes.forEach((banknote) => {
    rest = ammount %  banknote;
    if ((ammount - rest) / banknote) {
      res[banknote] = (ammount - rest) / banknote;
      ammount = rest;
    }
  });

  return res;
};

// console.log(minNumOfBanknotes(63900));
// console.log(minNumOfBanknotes(6300));
// console.log(minNumOfBanknotes(11700));
// console.log(minNumOfBanknotes(1700));
