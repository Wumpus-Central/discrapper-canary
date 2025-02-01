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
            if (!y && e && e in P) return P[e];
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
        x = t + ' Iterator',
        L = !1,
        P = e.prototype,
        w = P[I] || P['@@iterator'] || (p && P[p]),
        M = (!y && w) || D(p),
        k = ('Array' === t && P.entries) || w;
    if (
        (k && (C = u(k.call(new e()))) !== Object.prototype && C.next && (a || u(C) === v || (c ? c(C, v) : o(C[I]) || _(C, I, A)), d(C, x, !0, !0), a && (h[x] = A)),
        g &&
            p === b &&
            w &&
            w.name !== b &&
            (!a && E
                ? f(P, 'name', b)
                : ((L = !0),
                  (M = function () {
                      return r(w, this);
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
            for (O in R) (!y && !L && O in P) || _(P, O, R[O]);
        else
            i(
                {
                    target: t,
                    proto: !0,
                    forced: y || L
                },
                R
            );
    }
    return (!a || N) && P[I] !== M && _(P, I, M, { name: p }), (h[t] = M), R;
};
