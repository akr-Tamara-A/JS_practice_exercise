// Создание строки lorem заданной длины 

const loremText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, aliquam optio? 
  Libero, saepe quibusdam? Labore rerum sunt ratione tenetur delectus molestias, 
  ea corporis culpa sequi similique cum dolorem. Rem, eligendi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
  Nobis, aliquam optio? Libero, saepe quibusdam? Labore rerum sunt ratione tenetur delectus molestias, 
  ea corporis culpa sequi similique cum dolorem. Rem, eligendi?`;

export const createLorem = (n) => {
  if (!Number.isInteger(n) || (n <= 0 || n > 455)) return false;
  return loremText.slice(0, n);
};

// console.log(createLorem(38));
