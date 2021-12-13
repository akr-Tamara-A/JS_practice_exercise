// Найти заданное количество шагов между двумя числами

export const stepsBetween = (num1, num2, steps) => {
  const step = (num2 - num1) / steps;

  let currentNum = num1;
  const res = [];

  while (currentNum <= num2) {
    res.push(currentNum);
    currentNum += step;
  }

  return res;
};

// console.log(stepsBetween(0, 10, 2)); // [0, 5, 10]
// console.log(stepsBetween(20, 40, 5)); // [20, 24, 28, 32, 36, 40]
// console.log(stepsBetween(0, 1, 4)); // [0, .25, .5, .75, 1]


