var i = n(570596),
    r = n(548828),
    a = n(28886),
    s = n(858698),
    o = n(749915),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? o(e) : t;
    if (r(n)) return a(i(n, e));
    throw new l(s(e) + ' is not iterable');
};
