// Заменить слова в строке

export const autoReplace = (needles, change, haystack) => {
  if (!needles || !change || !haystack) return false;
  return haystack.replace( new RegExp(needles.join('|'), 'gi'), change);
};

// console.log(autoReplace(['салат', 'помидор'], 'еда', 'Помидор пошел в салат'));
// console.log(autoReplace(['салат', 'помидор'], 'еда', 'Колбаса пошла в салат'));
// console.log(autoReplace(['морда', 'кирпич', 'луна'], '***', 'Морда и кирпич - друзья под луной'));