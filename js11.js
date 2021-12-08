//

export const sortByLength = (arr) => {
  return arr.sort((a, b) => {
    return b.length - a.length;
  })
};

// console.log(sortByLength(['книга', 'материя', 'кот', 'левиафан', 'рука']));
