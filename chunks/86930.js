var r = n(570596),
    i = n(548828),
    o = n(28886),
    a = n(858698),
    s = n(749915),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? s(e) : t;
    if (i(n)) return o(r(n, e));
    throw new l(a(e) + ' is not iterable');
};
