var r = n(98405),
    i = n(967333),
    o = n(861567),
    a = n(914331),
    c = n(201390),
    u = n(146063),
    s = n(77826),
    f = Array,
    l = Math.max,
    d = Math.min;
r(
    {
        target: 'Array',
        proto: !0
    },
    {
        toSpliced: function (e, t) {
            var n,
                r,
                i,
                p,
                h = u(this),
                v = a(h),
                g = c(e, v),
                w = arguments.length,
                y = 0;
            for (0 === w ? (n = r = 0) : 1 === w ? ((n = 0), (r = v - g)) : ((n = w - 2), (r = d(l(s(t), 0), v - g))), p = f((i = o(v + n - r))); y < g; y++) p[y] = h[y];
            for (; y < g + n; y++) p[y] = arguments[y - g + 2];
            for (; y < i; y++) p[y] = h[y + r - n];
            return p;
        }
    }
),
    i('toSpliced');
