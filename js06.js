// Замена буквы в строке на другую

export const myReplace = (str, charOld, charNew) => {
  return str.replace( new RegExp(charOld, 'g'), charNew);
};

// console.log(myReplace('Ехал Грека через реку', 'Е', 'А'));
// console.log(myReplace('Ехал Грека через реку', 'е', 'о'));
// console.log(myReplace('Ехал Грека через реку', 'р', 'л'));
