var r = n(98405),
    i = n(967333),
    a = n(861567),
    o = n(914331),
    s = n(201390),
    l = n(146063),
    c = n(77826),
    u = Array,
    d = Math.max,
    f = Math.min;
r(
    {
        target: "Array",
        proto: !0,
    },
    {
        toSpliced: function (e, t) {
            var n,
                r,
                i,
                p,
                _ = l(this),
                m = o(_),
                h = s(e, m),
                g = arguments.length,
                E = 0;
            for (
                0 === g ? (n = r = 0) : 1 === g ? ((n = 0), (r = m - h)) : ((n = g - 2), (r = f(d(c(t), 0), m - h))),
                    p = u((i = a(m + n - r)));
                E < h;
                E++
            )
                p[E] = _[E];
            for (; E < h + n; E++) p[E] = arguments[E - h + 2];
            for (; E < i; E++) p[E] = _[E + r - n];
            return p;
        },
    },
),
    i("toSpliced");
