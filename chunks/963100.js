var r = n(20624),
    i = n(232520),
    s = n(186320),
    o = n(24011),
    a = n(26352),
    u = n(9556);
e.exports = function (e, t, n, c) {
    var l = -1,
        d = i,
        f = !0,
        p = e.length,
        h = [],
        m = t.length;
    if (!p) return h;
    (n && (t = o(t, a(n))), c ? ((d = s), (f = !1)) : t.length >= 200 && ((d = u), (f = !1), (t = new r(t))));
    e: for (; ++l < p;) {
        var g = e[l],
            v = null == n ? g : n(g);
        if (((g = c || 0 !== g ? g : 0), f && v == v)) {
            for (var y = m; y--;) if (t[y] === v) continue e;
            h.push(g);
        } else d(t, v, c) || h.push(g);
    }
    return h;
};
