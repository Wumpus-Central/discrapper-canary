var r = n(20624),
    i = n(232520),
    s = n(186320),
    o = n(24011),
    a = n(26352),
    u = n(9556);
e.exports = function (e, t, n, l) {
    var c = -1,
        f = i,
        d = !0,
        h = e.length,
        p = [],
        m = t.length;
    if (!h) return p;
    (n && (t = o(t, a(n))), l ? ((f = s), (d = !1)) : t.length >= 200 && ((f = u), (d = !1), (t = new r(t))));
    e: for (; ++c < h;) {
        var g = e[c],
            v = null == n ? g : n(g);
        if (((g = l || 0 !== g ? g : 0), d && v == v)) {
            for (var y = m; y--;) if (t[y] === v) continue e;
            p.push(g);
        } else f(t, v, l) || p.push(g);
    }
    return p;
};
