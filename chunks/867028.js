var i = r(273511),
    a = r(327192);
e.exports = i
    ? {}.toString
    : function () {
          return '[object ' + a(this) + ']';
      };
