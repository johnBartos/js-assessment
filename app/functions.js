exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(...arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return (x) => str + ', ' + x;
  },

  makeClosures : function(arr, fn) {
    return arr.map(e => {
      return () => fn(e);
    })
  },

  partial : function(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments : function() {
    return Array.prototype.slice.call(arguments, 0).reduce((p, c) => p + c);
  },

  callIt : function(fn) {
    return fn.apply(null, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {
    return fn.bind(null, ...Array.prototype.slice.call(arguments, 1));
  },

  curryIt : function(fn) {
    const args = Array.prototype.slice.call(arguments, 0);
    if (fn.length >= args.length) {
      return function(x) {
        return fn.apply(null, args);
      }
    }
    else {
      return function() {
        return fn.apply(null, args.concat(Array.prototype.slice.call(arguments, 0)));
      }
    }
  }
};
