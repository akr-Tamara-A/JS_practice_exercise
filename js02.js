// Расставить теги

export const getAutoTags = (base = 'https://mysite.local/tags/') => {
  return (str, tags, url = base) => {
    tags = '(' + tags.join('|') + ')';
    return str.replace(new RegExp(tags, 'gi'), `<a href="${url}$1">@$1</a>`);
  }
};

// const autoTags = getAutoTags();
// console.log(autoTags('интересно изучать js', ['html', 'js']));
// console.log(autoTags('надо знать html и css', ['html', 'js']));