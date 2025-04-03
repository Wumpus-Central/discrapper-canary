var e = n(570596),
    o = n(548828),
    i = n(28886),
    u = n(858698),
    s = n(749915),
    c = TypeError;
t.exports = function (t, r) {
    var n = arguments.length < 2 ? s(t) : r;
    if (o(n)) return i(e(n, t));
    throw new c(u(t) + ' is not iterable');
};
