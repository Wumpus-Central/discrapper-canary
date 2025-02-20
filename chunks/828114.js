var n = e(147018),
    o = e(926515),
    i = e(992051),
    u = e(539459),
    a = e(354848),
    c = e(673743),
    s = e(144748),
    f = e(276321),
    l = e(865312),
    p = e(251069),
    v = e(859209),
    d = e(641236),
    y = e(874652),
    g = e(84297),
    h = u.PROPER,
    x = u.CONFIGURABLE,
    L = g.IteratorPrototype,
    m = g.BUGGY_SAFARI_ITERATORS,
    S = d('iterator'),
    b = 'keys',
    F = 'values',
    O = 'entries',
    T = function () {
        return this;
    };
t.exports = function (t, r, e, u, d, g, R) {
    c(e, r, u);
    var k,
        A,
        C,
        P = function (t) {
            if (t === d && j) return j;
            if (!m && t && t in E) return E[t];
            switch (t) {
                case b:
                case F:
                case O:
                    return function () {
                        return new e(this, t);
                    };
            }
            return function () {
                return new e(this);
            };
        },
        w = r + ' Iterator',
        M = !1,
        E = t.prototype,
        I = E[S] || E['@@iterator'] || (d && E[d]),
        j = (!m && I) || P(d),
        G = ('Array' === r && E.entries) || I;
    if (
        (G && (k = s(G.call(new t()))) !== Object.prototype && k.next && (i || s(k) === L || (f ? f(k, L) : a(k[S]) || v(k, S, T)), l(k, w, !0, !0), i && (y[w] = T)),
        h &&
            d === F &&
            I &&
            I.name !== F &&
            (!i && x
                ? p(E, 'name', F)
                : ((M = !0),
                  (j = function () {
                      return o(I, this);
                  }))),
        d)
    ) {
        if (
            ((A = {
                values: P(F),
                keys: g ? j : P(b),
                entries: P(O)
            }),
            R)
        )
            for (C in A) (!m && !M && C in E) || v(E, C, A[C]);
        else
            n(
                {
                    target: r,
                    proto: !0,
                    forced: m || M
                },
                A
            );
    }
    return (!i || R) && E[S] !== j && v(E, S, j, { name: d }), (y[r] = j), A;
};
