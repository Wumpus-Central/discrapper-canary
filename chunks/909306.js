var r = n(730179),
    i = n(474334);
e.exports = function (e, t, n, a) {
    var o = e.length;
    for ((n = r(n)) < 0 && (n = -n > o ? 0 : o + n), (a = void 0 === a || a > o ? o : r(a)) < 0 && (a += o), a = n > a ? 0 : i(a); n < a; ) e[n++] = t;
    return e;
};
