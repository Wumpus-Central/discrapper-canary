e.exports = function (e, n) {
    return 1 === n
        ? function (n, r) {
              return n[e](r);
          }
        : function (n, r, i) {
              return n[e](r, i);
          };
};
