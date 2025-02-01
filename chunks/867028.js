var i = n(273511),
    r = n(327192);
e.exports = i
    ? {}.toString
    : function () {
          return '[object ' + r(this) + ']';
      };
