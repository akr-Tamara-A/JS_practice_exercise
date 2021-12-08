// Получить изображение клавиши по её коду

export const directionByKeyCode = (key) => {
  switch (key) {
    case 87:
      return 'вверх ' + '\u2191;';
    case 65:
      return 'влево ' + '\u2190;';
    case 68:
      return 'вправо ' + '\u2192;';
    case 83:
      return 'вниз ' + '\u2193;';
  }
};

// const directionByKeyCode2 = (key) => ({
//   '65': `вверх \u2190;`,
//   '87': `вверх \u2191;`,
//   '68': `вверх \u2192;`,
//   '83': `вверх \u2193;`,
// })[key];

// console.log(directionByKeyCode2(87));
// console.log(directionByKeyCode2(83));
// console.log(directionByKeyCode2(65));
// console.log(directionByKeyCode2(68));
