//

export const sortByDesc = (arr) => {
  return arr.sort(function (a, b) {
    return b - a;
  });
};

// console.log(sortByDesc([18, 11, 34, 2, 45, 12])); // 45, 34, 18, 12, 11, 2