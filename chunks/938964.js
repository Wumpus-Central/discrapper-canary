var i = n(721653),
    r = n(158655),
    a = n(85357);
function s(e) {
    var t = r(e);
    return 1 == t.length && t[0][2]
        ? a(t[0][0], t[0][1])
        : function (n) {
              return n === e || i(n, e, t);
          };
}
e.exports = s;
