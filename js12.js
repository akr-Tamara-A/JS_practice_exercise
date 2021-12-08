//

export const sortByProp = (arr, prop) => {
  return arr.sort((a, b) => {
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
  });
};

const users = [
  {name: 'Василий', lang: 'JavaScript', age: 32},
  {name: 'Яна', lang: 'Java', age: 35},
  {name: 'Олег', lang: 'Python', age: 19},
  {name: 'Наталья', lang: 'C#', age: 20},
  {name: 'Ольга', lang: 'PHP', age: 29},
];

// console.log(sortByProp(users, 'age'));
// console.log(sortByProp(users, 'lang'));
