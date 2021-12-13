// Получение колличества слов в предложении

export const getWordsStat = (str) => {
  const res = {};
  const arr = str.toLowerCase().split(/[,. :!?]/g);
  arr.forEach(word => {
    if (!res[word]) {
      res[word] = 1;
    } else {
      res[word]++;
    }
  });

  return res;
};

// console.log(getWordsStat('Ехал грека через реку реку реку'));
// console.log(getWordsStat('Косой косарь косил косой косой'));
