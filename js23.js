// Получить квадраты любого количества чисел

export const getQuadro = (...arg) => {
  return arg.map(elem => elem ** 2);
};

// console.log(getQuadro(4, 7, 24, 3, 18, -4));
