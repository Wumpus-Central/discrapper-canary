var r = n(42848),
    i = 4294967294,
    o = Math.floor,
    a = Math.min;
function s(e, t, n, s) {
    var l = 0,
        c = null == e ? 0 : e.length;
    if (0 === c) return 0;
    for (var u = (t = n(t)) != t, d = null === t, f = r(t), p = void 0 === t; l < c; ) {
        var _ = o((l + c) / 2),
            h = n(e[_]),
            m = void 0 !== h,
            g = null === h,
            E = h == h,
            v = r(h);
        if (u) var b = s || E;
        else b = p ? E && (s || m) : d ? E && m && (s || !g) : f ? E && m && !g && (s || !v) : !g && !v && (s ? h <= t : h < t);
        b ? (l = _ + 1) : (c = _);
    }
    return a(c, i);
}
e.exports = s;
