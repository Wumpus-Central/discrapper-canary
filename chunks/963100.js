var n = r(20624),
    i = r(232520),
    s = r(186320),
    o = r(24011),
    a = r(26352),
    u = r(9556);
e.exports = function (e, t, r, c) {
    var l = -1,
        f = i,
        d = !0,
        h = e.length,
        p = [],
        m = t.length;
    if (!h) return p;
    (r && (t = o(t, a(r))), c ? ((f = s), (d = !1)) : t.length >= 200 && ((f = u), (d = !1), (t = new n(t))));
    e: for (; ++l < h;) {
        var g = e[l],
            v = null == r ? g : r(g);
        if (((g = c || 0 !== g ? g : 0), d && v == v)) {
            for (var y = m; y--;) if (t[y] === v) continue e;
            p.push(g);
        } else f(t, v, c) || p.push(g);
    }
    return p;
};
