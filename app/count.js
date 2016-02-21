exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var i = start;
    function *gen() {
      for (var i = start + 1; i <= end; i++) {
        var shouldStop = yield i;
        if (shouldStop) {
          break;
        }
      }
    }

    console.log(1)
    var g = gen();
    var interval = setInterval(() => {
      const next = g.next();
      if (next.done) {
        clearInterval(interval);
      }
      else {
        console.log(next.value)
      }
    }, 100);

    return {
      cancel() {
        clearInterval(interval)
      }
    }
  }
};
