exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const str = num.toString(2);
    return parseInt(str.charAt(str.length - bit));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    const bin = num.toString(2);
    return '00000000'.substr(bin.length) + bin;
  },

  multiply: function(a, b) {
    return parseFloat((a * b).toFixed(b.toString().split('.')[1].length));
  }
};
