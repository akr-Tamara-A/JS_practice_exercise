// Получить число от 1 до 9999 прописью

const numsPhrases = {
  // 1-9
  units: { 
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
  },
  // 11-19
  teens: {
    1: 'одиннадцать',
    2: 'двенадцать',
    3: 'тринадцать',
    4: 'четырнадцать',
    5: 'пятнадцать',
    6: 'шестьнадцать',
    7: 'семьнадцать',
    8: 'восемьнадцать',
    9: 'девятьнадцать',
  },
  // 10-20
  dozens: {
    1: 'десять',
    2: 'двадцать',
    3: 'тридцать',
    4: 'сорок',
    5: 'пятьдесят',
    6: 'шестьдесят',
    7: 'семьдесят',
    8: 'восемьдесят',
    9: 'девяносто',
  },
  // 100-900
  hundreds: {
    1: 'сто',
    2: 'двести',
    3: 'триста',
    4: 'четыреста',
    5: 'пятьсот',
    6: 'шестьсот',
    7: 'семьсот',
    8: 'восемьсот',
    9: 'девятьсот',
  },
  // 1000-9000
  thousand: {
    1: 'одна',
    2: 'две',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
  },
}

export const getPhraseByNum = (num) => {
  if (!Number.isInteger(num) || (num <= 0 || num > 9999)) return false;

  const numArr = num.toString().split('').reverse();
  const numSliced = {
    thousands: numArr[3],
    hundreds: numArr[2],
    dozens: numArr[1],
    unit: numArr[0],
  };

  const getUnits = () => {
    return numsPhrases.units[numSliced.unit];  // 1-9
  }
  const getTeens = () => {
    return numsPhrases.teens[numSliced.unit];  // 11-19
  }
  const getDozens = () => {
    return numsPhrases.dozens[numSliced.dozens];  // 10, .., 90
  }
  const getHundreds = () => {
    return numsPhrases.hundreds[numSliced.hundreds];  // 100, ..., 900
  }
  const getThousand = () => {
    let thousand;
    if (numSliced.thousands % 10 == 1) thousand = 'тысяча';
    if (numSliced.thousands % 10 >= 2 && numSliced.thousands % 10 <= 4) thousand = 'тысячи';
    if (numSliced.thousands % 10 >= 5) thousand = 'тысяч';
    return numsPhrases.thousand[numSliced.thousands] + ' ' + thousand;  // 1000, ..., 9000
  }

  let res = ['', '', '', ''];

  if (numSliced.thousands !== undefined) {
    res[0] = getThousand();
  }
  if (numSliced.hundreds !== undefined) {
    res[1] = getHundreds();
  }
  if (numSliced.dozens !== undefined) {
    if (numSliced.dozens > 1) {
      res[2] = getDozens();
    }
    if ((numSliced.dozens == 1 && numSliced.unit == 0)) {
      res[2] = getDozens();
    }
    if (numSliced.dozens == 1 && numSliced.unit > 0) {
      res[2] = getTeens();
    }
  }
  if (numSliced.unit !== 0 && (numSliced.dozens == undefined || numSliced.dozens != 1)) {
    res[3] = getUnits();
  }

  return res.join(' ').trim().replace('   ', ' ').replace('  ', ' ');
};

// console.log(getPhraseByNum(5)); // пять
// console.log(getPhraseByNum(10)); // десять
// console.log(getPhraseByNum(15)); // пятьнадцать
// console.log(getPhraseByNum(30)); // тридцать
// console.log(getPhraseByNum(35)); // тридцать пять 
// console.log(getPhraseByNum(300)); // триста
// console.log(getPhraseByNum(900)); // девятьсот
// console.log(getPhraseByNum(104)); // 
// console.log(getPhraseByNum(114)); // 
// console.log(getPhraseByNum(120)); // 
// console.log(getPhraseByNum(125)); // 
// console.log(getPhraseByNum(830)); // 
// console.log(getPhraseByNum(828)); // 
// console.log(getPhraseByNum(2003)); // 
// console.log(getPhraseByNum(2013)); // 
// console.log(getPhraseByNum(2203)); // 
// console.log(getPhraseByNum(3050)); // 
// console.log(getPhraseByNum(3200)); // 
// console.log(getPhraseByNum(3650)); // 
// console.log(getPhraseByNum(4828)); // 
// console.log(getPhraseByNum(6110)); // 