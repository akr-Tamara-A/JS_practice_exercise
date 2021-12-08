//

export const sortByOddity = (arr) => {
  return arr.sort(function (a, b) {
    return b % 2 ? 1 : -1;
  });
};

console.log(sortByOddity([18, 11, 34, 2, 45, 12])); // 45, 34, 18, 12, 11, 2