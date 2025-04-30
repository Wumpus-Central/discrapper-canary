var r = n(721653),
    i = n(158655),
    a = n(85357);
e.exports = function (e) {
    var t = i(e);
    return 1 == t.length && t[0][2]
        ? a(t[0][0], t[0][1])
        : function (n) {
              return n === e || r(n, e, t);
          };
};
