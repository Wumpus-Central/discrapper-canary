var r = n(721653),
    i = n(158655),
    o = n(85357);
function a(e) {
    var t = i(e);
    return 1 == t.length && t[0][2]
        ? o(t[0][0], t[0][1])
        : function (n) {
              return n === e || r(n, e, t);
          };
}
e.exports = a;
