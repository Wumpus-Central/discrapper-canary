var r = n(42848),
    i = 4294967294,
    a = Math.floor,
    o = Math.min;
e.exports = function (e, t, n, s) {
    var l = 0,
        c = null == e ? 0 : e.length;
    if (0 === c) return 0;
    for (var u = (t = n(t)) != t, d = null === t, f = r(t), _ = void 0 === t; l < c; ) {
        var p = a((l + c) / 2),
            h = n(e[p]),
            m = void 0 !== h,
            g = null === h,
            E = h == h,
            b = r(h);
        if (u) var y = s || E;
        else y = _ ? E && (s || m) : d ? E && m && (s || !g) : f ? E && m && !g && (s || !b) : !g && !b && (s ? h <= t : h < t);
        y ? (l = p + 1) : (c = p);
    }
    return o(c, i);
};
