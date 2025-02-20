var r = n(273511),
    i = n(327192);
e.exports = r
    ? {}.toString
    : function () {
          return '[object ' + i(this) + ']';
      };
