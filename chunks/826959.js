var r = n(67867),
    i = n(952256),
    o = n(571240),
    a = n(982665),
    s = n(223944),
    l = n(474883),
    c = n(729605),
    u = n(256110),
    d = n(360518),
    f = n(469624),
    p = n(780524),
    _ = f('slice'),
    h = d('species'),
    m = Array,
    g = Math.max;
r(
    {
        target: 'Array',
        proto: !0,
        forced: !_
    },
    {
        slice: function (e, t) {
            var n,
                r,
                d,
                f = c(this),
                _ = l(f),
                E = s(e, _),
                v = s(void 0 === t ? _ : t, _);
            if (i(f) && (o((n = f.constructor)) && (n === m || i(n.prototype)) ? (n = void 0) : a(n) && null === (n = n[h]) && (n = void 0), n === m || void 0 === n)) return p(f, E, v);
            for (d = 0, r = new (void 0 === n ? m : n)(g(v - E, 0)); E < v; E++, d++) E in f && u(r, d, f[E]);
            return (r.length = d), r;
        }
    }
);
