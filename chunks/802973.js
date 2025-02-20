e.exports = function (e, t) {
    return 1 === t
        ? function (t, n) {
              return t[e](n);
          }
        : function (t, n, r) {
              return t[e](n, r);
          };
};
