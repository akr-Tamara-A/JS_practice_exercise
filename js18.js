// Получить строку из полей связанного списка

export const linkedListToString = (linkedList) => {
  const res = [];

  let currentNode = linkedList;

  while (currentNode != null) {
    res.push(currentNode.category);

    currentNode = currentNode.next;
  }

  return res.join('/');
};

const categories = {
  category: 'Компьютеры',
  next: {
    category: 'Ноутбуки',
    next: {
      category: 'Все игровые',
      next: {
        category: 'Игровые',
        next: null,
      }
    }
  }
};

// console.log(linkedListToString(categories));
