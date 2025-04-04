var n = e(147018),
    o = e(926515),
    i = e(992051),
    a = e(539459),
    s = e(354848),
    u = e(673743),
    c = e(144748),
    f = e(276321),
    l = e(865312),
    p = e(251069),
    v = e(859209),
    h = e(641236),
    d = e(874652),
    y = e(84297),
    g = a.PROPER,
    L = a.CONFIGURABLE,
    m = y.IteratorPrototype,
    x = y.BUGGY_SAFARI_ITERATORS,
    S = h('iterator'),
    k = 'keys',
    M = 'values',
    T = 'entries',
    b = function () {
        return this;
    };
t.exports = function (t, r, e, a, h, y, A) {
    u(e, r, a);
    var O,
        w,
        C,
        I = function (t) {
            if (t === h && E) return E;
            if (!x && t && t in G) return G[t];
            switch (t) {
                case k:
                case M:
                case T:
                    return function () {
                        return new e(this, t);
                    };
            }
            return function () {
                return new e(this);
            };
        },
        P = r + ' Iterator',
        R = !1,
        G = t.prototype,
        j = G[S] || G['@@iterator'] || (h && G[h]),
        E = (!x && j) || I(h),
        D = ('Array' === r && G.entries) || j;
    if (
        (D && (O = c(D.call(new t()))) !== Object.prototype && O.next && (!i && c(O) !== m && (f ? f(O, m) : s(O[S]) || v(O, S, b)), l(O, P, !0, !0), i && (d[P] = b)),
        g &&
            h === M &&
            j &&
            j.name !== M &&
            (!i && L
                ? p(G, 'name', M)
                : ((R = !0),
                  (E = function () {
                      return o(j, this);
                  }))),
        h)
    )
        if (
            ((w = {
                values: I(M),
                keys: y ? E : I(k),
                entries: I(T)
            }),
            A)
        )
            for (C in w) (!x && !R && C in G) || v(G, C, w[C]);
        else
            n(
                {
                    target: r,
                    proto: !0,
                    forced: x || R
                },
                w
            );
    return (!i || A) && G[S] !== E && v(G, S, E, { name: h }), (d[r] = E), w;
};
