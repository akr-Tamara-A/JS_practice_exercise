// Получить случайное число в заданном диапазоне

export const randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// console.log(randNum(50, 76));
