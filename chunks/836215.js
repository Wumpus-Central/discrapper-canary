var r = n(98405),
    i = n(967333),
    a = n(861567),
    o = n(914331),
    s = n(201390),
    l = n(146063),
    c = n(77826),
    u = Array,
    d = Math.max,
    _ = Math.min;
(r(
    {
        target: 'Array',
        proto: !0
    },
    {
        toSpliced: function (e, t) {
            var n,
                r,
                i,
                f,
                p = l(this),
                h = o(p),
                m = s(e, h),
                g = arguments.length,
                E = 0;
            for (0 === g ? (n = r = 0) : 1 === g ? ((n = 0), (r = h - m)) : ((n = g - 2), (r = _(d(c(t), 0), h - m))), f = u((i = a(h + n - r))); E < m; E++) f[E] = p[E];
            for (; E < m + n; E++) f[E] = arguments[E - m + 2];
            for (; E < i; E++) f[E] = p[E + r - n];
            return f;
        }
    }
),
    i('toSpliced'));
