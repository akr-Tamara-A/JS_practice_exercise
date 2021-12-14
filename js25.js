// Получить н-е число Фибоначчи

export const getNthFibElement = (num) => {
  const fibNth = (((1 + Math.sqrt(5)) / 2) ** num - ((1 - Math.sqrt(5)) / 2) ** num) / (Math.sqrt(5));
  return fibNth.toFixed(2);
};

// console.log(getNthFibElement(3)); // 2
// console.log(getNthFibElement(4)); // 3
// console.log(getNthFibElement(7)); // 13
// console.log(getNthFibElement(8)); // 21
// console.log(getNthFibElement(18)); // 2584
