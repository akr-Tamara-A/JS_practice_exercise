// Получить ряд Фибоначчи заданной длины

export const getFibonachi = (num) => {
  const res = [0, 1];

  for (let i = 2; i < num; i++) {
    res[i] = res[i - 2] + res[i - 1];
  }

  return res;
};

// console.log(getFibonachi(5));
// console.log(getFibonachi(15));
