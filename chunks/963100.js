var a = t(20624),
    n = t(232520),
    o = t(186320),
    c = t(24011),
    s = t(26352),
    i = t(9556);
e.exports = function (e, r, t, u) {
    var f = -1,
        l = n,
        p = !0,
        h = e.length,
        y = [],
        d = r.length;
    if (!h) return y;
    (t && (r = c(r, s(t))), u ? ((l = o), (p = !1)) : r.length >= 200 && ((l = i), (p = !1), (r = new a(r))));
    e: for (; ++f < h;) {
        var v = e[f],
            g = null == t ? v : t(v);
        if (((v = u || 0 !== v ? v : 0), p && g == g)) {
            for (var w = d; w--;) if (r[w] === g) continue e;
            y.push(v);
        } else l(r, g, u) || y.push(v);
    }
    return y;
};
