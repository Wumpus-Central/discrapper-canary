var i = r(42848),
    a = 4294967294,
    o = Math.floor,
    s = Math.min;
function l(e, n, r, l) {
    var u = 0,
        c = null == e ? 0 : e.length;
    if (0 === c) return 0;
    for (var d = (n = r(n)) != n, f = null === n, p = i(n), h = void 0 === n; u < c; ) {
        var _ = o((u + c) / 2),
            m = r(e[_]),
            g = void 0 !== m,
            E = null === m,
            v = m == m,
            y = i(m);
        if (d) var b = l || v;
        else b = h ? v && (l || g) : f ? v && g && (l || !E) : p ? v && g && !E && (l || !y) : !E && !y && (l ? m <= n : m < n);
        b ? (u = _ + 1) : (c = _);
    }
    return s(c, a);
}
e.exports = l;
