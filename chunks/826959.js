var i = n(67867),
    r = n(952256),
    a = n(571240),
    s = n(982665),
    o = n(223944),
    l = n(474883),
    u = n(729605),
    c = n(256110),
    d = n(360518),
    f = n(469624),
    _ = n(780524),
    p = f('slice'),
    h = d('species'),
    m = Array,
    g = Math.max;
i(
    {
        target: 'Array',
        proto: !0,
        forced: !p
    },
    {
        slice: function (e, t) {
            var n,
                i,
                d,
                f = u(this),
                p = l(f),
                E = o(e, p),
                v = o(void 0 === t ? p : t, p);
            if (r(f) && (a((n = f.constructor)) && (n === m || r(n.prototype)) ? (n = void 0) : s(n) && null === (n = n[h]) && (n = void 0), n === m || void 0 === n)) return _(f, E, v);
            for (d = 0, i = new (void 0 === n ? m : n)(g(v - E, 0)); E < v; E++, d++) E in f && c(i, d, f[E]);
            return (i.length = d), i;
        }
    }
);
