var i = n(20624),
    r = n(232520),
    o = n(186320),
    s = n(24011),
    a = n(26352),
    u = n(9556);
e.exports = function (e, t, n, c) {
    var l = -1,
        d = r,
        f = !0,
        p = e.length,
        h = [],
        m = t.length;
    if (!p) return h;
    (n && (t = s(t, a(n))), c ? ((d = o), (f = !1)) : t.length >= 200 && ((d = u), (f = !1), (t = new i(t))));
    e: for (; ++l < p;) {
        var g = e[l],
            v = null == n ? g : n(g);
        if (((g = c || 0 !== g ? g : 0), f && v == v)) {
            for (var _ = m; _--;) if (t[_] === v) continue e;
            h.push(g);
        } else d(t, v, c) || h.push(g);
    }
    return h;
};
