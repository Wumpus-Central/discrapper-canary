for (
    var n = e(175380),
        o = e(683570),
        s = e(675879),
        i = e(389150),
        u = e(61748),
        c = o("Symbol"),
        a = c.isWellKnownSymbol,
        f = o("Object", "getOwnPropertyNames"),
        p = s(c.prototype.valueOf),
        l = n("wks"),
        v = 0,
        y = f(c),
        h = y.length;
    v < h;
    v++
)
    try {
        var x = y[v];
        i(c[x]) && u(x);
    } catch (t) {}
t.exports = function (t) {
    if (a && a(t)) return !0;
    try {
        for (var r = p(t), e = 0, n = f(l), o = n.length; e < o; e++) if (l[n[e]] == r) return !0;
    } catch (t) {}
    return !1;
};
