var i = r(67867),
    a = r(952256),
    o = r(571240),
    s = r(982665),
    l = r(223944),
    u = r(474883),
    c = r(729605),
    d = r(256110),
    f = r(360518),
    p = r(469624),
    h = r(780524),
    _ = p('slice'),
    m = f('species'),
    g = Array,
    E = Math.max;
i(
    {
        target: 'Array',
        proto: !0,
        forced: !_
    },
    {
        slice: function (e, n) {
            var r,
                i,
                f,
                p = c(this),
                _ = u(p),
                v = l(e, _),
                y = l(void 0 === n ? _ : n, _);
            if (a(p) && (o((r = p.constructor)) && (r === g || a(r.prototype)) ? (r = void 0) : s(r) && null === (r = r[m]) && (r = void 0), r === g || void 0 === r)) return h(p, v, y);
            for (f = 0, i = new (void 0 === r ? g : r)(E(y - v, 0)); v < y; v++, f++) v in p && d(i, f, p[v]);
            return (i.length = f), i;
        }
    }
);
