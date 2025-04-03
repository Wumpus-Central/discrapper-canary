var e = n(67867),
    o = n(952256),
    i = n(571240),
    u = n(982665),
    s = n(223944),
    c = n(474883),
    f = n(729605),
    a = n(256110),
    p = n(360518),
    v = n(469624),
    l = n(780524),
    y = v('slice'),
    h = p('species'),
    x = Array,
    d = Math.max;
e(
    {
        target: 'Array',
        proto: !0,
        forced: !y
    },
    {
        slice: function (t, r) {
            var n,
                e,
                p,
                v = f(this),
                y = c(v),
                g = s(t, y),
                b = s(void 0 === r ? y : r, y);
            if (o(v) && (i((n = v.constructor)) && (n === x || o(n.prototype)) ? (n = void 0) : u(n) && null === (n = n[h]) && (n = void 0), n === x || void 0 === n)) return l(v, g, b);
            for (p = 0, e = new (void 0 === n ? x : n)(d(b - g, 0)); g < b; g++, p++) g in v && a(e, p, v[g]);
            return (e.length = p), e;
        }
    }
);
