// Подстановка числительного

export const genetive = (n, word) => {
  if (!Number.isInteger(n) && n <= 0) return false;

  let res = word.many2;
  if (n == 1 || n == 11 || n % 10 == 1) res = word.singular;
  if ( (n >= 2 && n <= 4) || (n > 20 && (n % 10 >= 2 && n % 10 <= 4))) res = word.many1;
  
  return n + ' ' + res; 
};

const words = {
  'singular': 'товар',
  'many1': 'товара',
  'many2': 'товаров',
}

// console.log(genetive(1, words));
// console.log(genetive(4, words));
// console.log(genetive(9, words));
// console.log(genetive(11, words));
// console.log(genetive(14, words));
// console.log(genetive(19, words));
// console.log(genetive(21, words));
// console.log(genetive(33, words));
// console.log(genetive(39, words));