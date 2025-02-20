var r = n(67867),
    i = n(570596),
    o = n(414629),
    a = n(670622),
    s = n(735471),
    l = n(468154),
    c = n(646948),
    u = n(600385),
    d = n(414847),
    f = n(948634),
    p = n(691244),
    _ = n(360518),
    h = n(519723),
    m = n(594463),
    g = a.PROPER,
    E = a.CONFIGURABLE,
    v = m.IteratorPrototype,
    b = m.BUGGY_SAFARI_ITERATORS,
    y = _('iterator'),
    O = 'keys',
    S = 'values',
    I = 'entries',
    T = function () {
        return this;
    };
e.exports = function (e, t, n, a, _, m, N) {
    l(n, t, a);
    var A,
        C,
        R,
        P = function (e) {
            if (e === _ && M) return M;
            if (!b && e && e in x) return x[e];
            switch (e) {
                case O:
                case S:
                case I:
                    return function () {
                        return new n(this, e);
                    };
            }
            return function () {
                return new n(this);
            };
        },
        w = t + ' Iterator',
        D = !1,
        x = e.prototype,
        L = x[y] || x['@@iterator'] || (_ && x[_]),
        M = (!b && L) || P(_),
        k = ('Array' === t && x.entries) || L;
    if (
        (k && (A = c(k.call(new e()))) !== Object.prototype && A.next && (o || c(A) === v || (u ? u(A, v) : s(A[y]) || p(A, y, T)), d(A, w, !0, !0), o && (h[w] = T)),
        g &&
            _ === S &&
            L &&
            L.name !== S &&
            (!o && E
                ? f(x, 'name', S)
                : ((D = !0),
                  (M = function () {
                      return i(L, this);
                  }))),
        _)
    ) {
        if (
            ((C = {
                values: P(S),
                keys: m ? M : P(O),
                entries: P(I)
            }),
            N)
        )
            for (R in C) (!b && !D && R in x) || p(x, R, C[R]);
        else
            r(
                {
                    target: t,
                    proto: !0,
                    forced: b || D
                },
                C
            );
    }
    return (!o || N) && x[y] !== M && p(x, y, M, { name: _ }), (h[t] = M), C;
};
