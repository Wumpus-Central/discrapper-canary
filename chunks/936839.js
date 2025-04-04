var e = n(505072),
    o = Math.max,
    i = Math.min;
t.exports = function (t, r) {
    var n = e(t);
    return n < 0 ? o(n + r, 0) : i(n, r);
};
