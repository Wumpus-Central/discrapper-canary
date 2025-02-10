var i = n(67867),
    r = n(570596),
    a = n(414629),
    s = n(670622),
    o = n(735471),
    l = n(468154),
    u = n(646948),
    c = n(600385),
    d = n(414847),
    f = n(948634),
    _ = n(691244),
    p = n(360518),
    h = n(519723),
    m = n(594463),
    g = s.PROPER,
    E = s.CONFIGURABLE,
    v = m.IteratorPrototype,
    y = m.BUGGY_SAFARI_ITERATORS,
    I = p('iterator'),
    T = 'keys',
    b = 'values',
    S = 'entries',
    A = function () {
        return this;
    };
e.exports = function (e, t, n, s, p, m, N) {
    l(n, t, s);
    var C,
        R,
        O,
        D = function (e) {
            if (e === p && M) return M;
            if (!y && e && e in w) return w[e];
            switch (e) {
                case T:
                case b:
                case S:
                    return function () {
                        return new n(this, e);
                    };
            }
            return function () {
                return new n(this);
            };
        },
        L = t + ' Iterator',
        x = !1,
        w = e.prototype,
        P = w[I] || w['@@iterator'] || (p && w[p]),
        M = (!y && P) || D(p),
        k = ('Array' === t && w.entries) || P;
    if (
        (k && (C = u(k.call(new e()))) !== Object.prototype && C.next && (a || u(C) === v || (c ? c(C, v) : o(C[I]) || _(C, I, A)), d(C, L, !0, !0), a && (h[L] = A)),
        g &&
            p === b &&
            P &&
            P.name !== b &&
            (!a && E
                ? f(w, 'name', b)
                : ((x = !0),
                  (M = function () {
                      return r(P, this);
                  }))),
        p)
    ) {
        if (
            ((R = {
                values: D(b),
                keys: m ? M : D(T),
                entries: D(S)
            }),
            N)
        )
            for (O in R) (!y && !x && O in w) || _(w, O, R[O]);
        else
            i(
                {
                    target: t,
                    proto: !0,
                    forced: y || x
                },
                R
            );
    }
    return (!a || N) && w[I] !== M && _(w, I, M, { name: p }), (h[t] = M), R;
};
