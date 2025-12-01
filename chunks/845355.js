var r = n(42848),
    i = 4294967294,
    a = Math.floor,
    o = Math.min;
e.exports = function (e, t, n, s) {
    var l = 0,
        c = null == e ? 0 : e.length;
    if (0 === c) return 0;
    for (var u = (t = n(t)) != t, d = null === t, f = r(t), p = void 0 === t; l < c; ) {
        var _ = a((l + c) / 2),
            m = n(e[_]),
            h = void 0 !== m,
            g = null === m,
            E = m == m,
            b = r(m);
        if (u) var y = s || E;
        else
            y = p
                ? E && (s || h)
                : d
                  ? E && h && (s || !g)
                  : f
                    ? E && h && !g && (s || !b)
                    : !g && !b && (s ? m <= t : m < t);
        y ? (l = _ + 1) : (c = _);
    }
    return o(c, i);
};
