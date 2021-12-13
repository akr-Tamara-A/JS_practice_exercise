// Получение одноимённых свойст из объектов массива

export const getData = (arr, prop) => {
  const res = [];

  arr.forEach(elem => {
    if (prop in elem) {
      res.push(elem[prop]);
    }
  });

  return res;
};

// console.log(getData([
//   {name: 'Олег', age: 22,},
//   {name: 'Василий', age: 26,},
//   {name: 'Наталья', age: 35,},
//   {name: 'Игорь', age: 41,},
//   {name: 'Виктор', age: 18,},
// ], 'name'));

// console.log(getData([
//   {name: 'Олег', age: 22,},
//   {name: 'Василий', age: 26,},
//   {name: 'Наталья', age: 35,},
//   {name: 'Игорь', age: 41,},
//   {name: 'Виктор', age: 18,},
// ], 'age'));
