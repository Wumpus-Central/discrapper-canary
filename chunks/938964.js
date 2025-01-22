var i = r(721653),
    a = r(158655),
    o = r(85357);
function s(e) {
    var n = a(e);
    return 1 == n.length && n[0][2]
        ? o(n[0][0], n[0][1])
        : function (r) {
              return r === e || i(r, e, n);
          };
}
e.exports = s;
