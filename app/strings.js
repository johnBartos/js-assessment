exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var i = 0, result = '', num;
    while (i < str.length) {
      num = 1;
      result += str.charAt(i);

      while (i < str.length && str.charAt(i) === str.charAt(i + 1)) {
        if (num < amount) {
          result += str.charAt(i);
          num += 1;
        }
        i += 1;
      }

      i += 1;
    }

    return result;
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  }
};
