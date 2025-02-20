var r = n(926515),
    i = n(526988),
    o = n(24033),
    a = n(938507),
    s = n(11697),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? s(e) : t;
    if (i(n)) return o(r(n, e));
    throw l(a(e) + ' is not iterable');
};
