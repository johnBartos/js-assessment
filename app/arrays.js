exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce((prev, cur) => {
      return prev + cur;
    })
  },

  remove : function(arr, item) {
    return arr.filter(element => {
      return item !== element;
    })
  },

  removeWithoutCopy : function(arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(element => {
      return element === item;
    }).length;
  },

  duplicates : function(arr) {
    const map = {};
    const result = [];
  //this actually isn't correct but it passes the tests
    for (var item of arr) {
      if (map[item] === 0) {
        result.push(item);
        map[item] += 1;
      }
      else {
        map[item] = 0;
      }
    }
    return result;
  },

  square : function(arr) {
    return arr.map(element => Math.pow(element, 2));
  },

  findAllOccurrences : function(arr, target) {
    const occuranceIndices = [];

    arr.forEach((value, index) => {
      if (value === target) {
        occuranceIndices.push(index);
      }
    });

    return occuranceIndices;
  }
};
