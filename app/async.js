exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData : function(url) {
    return fetch(url)
      .then(res => {
        return res.json().then(data => {
          return data.people.map(person => {
            return person.name;
          }).sort();
        })
      })
  }
};
