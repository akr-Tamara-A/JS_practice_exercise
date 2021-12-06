// Добавление, удаление и переключение класса

export const classNames = {
  cname: "",
  add: function(str) {
    let currentClasses = this.cname.split(' ');
    let addedClasses = str.split(' ');
    this.cname = [...(new Set([...currentClasses, ...addedClasses]))].join(' ');
  },
  remove: function (str) {
    let currentClasses = this.cname.split(' ');
    let removedClasses = str.split(' ');
    this.cname = currentClasses.filter(elem => {
      for (let cls of removedClasses) {
        if (elem !== cls) return true;
      }
    }).join(' ');
  }, 
  toggle: function (str, flag) {
    let currentClasses = this.cname.split(' ');
    const isIncluded = currentClasses.includes(str);

    if (flag !== undefined && flag && !isIncluded) {
      this.cname = [...currentClasses, str].join(' ');
    }
    if (flag !== undefined && !flag && isIncluded) {
      this.cname = currentClasses.filter(cls => {
        if (cls !== str) return true;
      }).join(' ');
    }

  },
};

const btnClass = classNames;
btnClass.cname = 'btn';
btnClass.add('btn_primary');
btnClass.add('btn_wide');
btnClass.add('btn_left btn_top');
btnClass.remove('btn_top');
btnClass.toggle('btn_left', true);
btnClass.toggle('btn_left', false);
// console.log(btnClass.cname);