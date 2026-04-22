var r = n(544664),
    i = n(446928),
    s = n(412184),
    a = n(314220),
    o = n(383972),
    l = n(762760);
e.exports = function (e, t, n) {
    var u = -1,
        d = i,
        c = e.length,
        _ = !0,
        f = [],
        E = f;
    if (n) (_ = !1), (d = s);
    else if (c >= 200) {
        var h = t ? null : o(e);
        if (h) return l(h);
        (_ = !1), (d = a), (E = new r());
    } else E = t ? [] : f;
    n: for (; ++u < c; ) {
        var p = e[u],
            m = t ? t(p) : p;
        if (((p = n || 0 !== p ? p : 0), _ && m == m)) {
            for (var g = E.length; g--; ) if (E[g] === m) continue n;
            t && E.push(m), f.push(p);
        } else d(E, m, n) || (E !== f && E.push(m), f.push(p));
    }
    return f;
};
