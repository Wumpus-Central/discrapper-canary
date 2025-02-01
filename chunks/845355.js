var i = n(42848),
    r = 4294967294,
    a = Math.floor,
    s = Math.min;
function o(e, t, n, o) {
    var l = 0,
        u = null == e ? 0 : e.length;
    if (0 === u) return 0;
    for (var c = (t = n(t)) != t, d = null === t, f = i(t), _ = void 0 === t; l < u; ) {
        var p = a((l + u) / 2),
            h = n(e[p]),
            m = void 0 !== h,
            g = null === h,
            E = h == h,
            v = i(h);
        if (c) var y = o || E;
        else y = _ ? E && (o || m) : d ? E && m && (o || !g) : f ? E && m && !g && (o || !v) : !g && !v && (o ? h <= t : h < t);
        y ? (l = p + 1) : (u = p);
    }
    return s(u, r);
}
e.exports = o;
