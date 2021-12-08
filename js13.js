//

export const sortByEmail = (arr) => {
  return arr.sort((a, b) => {
    if (a.slice(a.indexOf('@') + 1) > b.slice(b.indexOf('@') + 1)) return 1;
    if (a.slice(a.indexOf('@') + 1) < b.slice(b.indexOf('@') + 1)) return -1;
  })
};

const emails = ['m@asite.loc', 'm@csite.loc', 'm@bsite.loc']

// console.log(sortByEmail(emails));