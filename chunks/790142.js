var i = r(67867),
    a = r(570596),
    o = r(414629),
    s = r(670622),
    l = r(735471),
    u = r(468154),
    c = r(646948),
    d = r(600385),
    f = r(414847),
    p = r(948634),
    h = r(691244),
    _ = r(360518),
    m = r(519723),
    g = r(594463),
    E = s.PROPER,
    v = s.CONFIGURABLE,
    y = g.IteratorPrototype,
    b = g.BUGGY_SAFARI_ITERATORS,
    I = _('iterator'),
    T = 'keys',
    S = 'values',
    A = 'entries',
    C = function () {
        return this;
    };
e.exports = function (e, n, r, s, _, g, N) {
    u(r, n, s);
    var R,
        O,
        D,
        x = function (e) {
            if (e === _ && k) return k;
            if (!b && e && e in P) return P[e];
            switch (e) {
                case T:
                case S:
                case A:
                    return function () {
                        return new r(this, e);
                    };
            }
            return function () {
                return new r(this);
            };
        },
        L = n + ' Iterator',
        w = !1,
        P = e.prototype,
        M = P[I] || P['@@iterator'] || (_ && P[_]),
        k = (!b && M) || x(_),
        U = ('Array' === n && P.entries) || M;
    if (
        (U && (R = c(U.call(new e()))) !== Object.prototype && R.next && (!o && c(R) !== y && (d ? d(R, y) : !l(R[I]) && h(R, I, C)), f(R, L, !0, !0), o && (m[L] = C)),
        E &&
            _ === S &&
            M &&
            M.name !== S &&
            (!o && v
                ? p(P, 'name', S)
                : ((w = !0),
                  (k = function () {
                      return a(M, this);
                  }))),
        _)
    ) {
        if (
            ((O = {
                values: x(S),
                keys: g ? k : x(T),
                entries: x(A)
            }),
            N)
        )
            for (D in O) (b || w || !(D in P)) && h(P, D, O[D]);
        else
            i(
                {
                    target: n,
                    proto: !0,
                    forced: b || w
                },
                O
            );
    }
    return (!o || N) && P[I] !== k && h(P, I, k, { name: _ }), (m[n] = k), O;
};
