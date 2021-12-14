// Получить индекс массы с заданными параметрами высоты и веса

export const getBMI = (weight, height) => {
  return (weight / (height ** 2)).toFixed(1);
};

// console.log(getBMI(45, 1.6));
// console.log(getBMI(45, 1.75));
// console.log(getBMI(55, 1.6));
// console.log(getBMI(55, 1.75));
// console.log(getBMI(75, 1.6));
// console.log(getBMI(75, 1.75));
