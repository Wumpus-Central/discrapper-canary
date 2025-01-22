var i = r(570596),
    a = r(548828),
    o = r(28886),
    s = r(858698),
    l = r(749915),
    u = TypeError;
e.exports = function (e, n) {
    var r = arguments.length < 2 ? l(e) : n;
    if (a(r)) return o(i(r, e));
    throw new u(s(e) + ' is not iterable');
};
