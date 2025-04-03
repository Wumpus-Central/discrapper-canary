var r = a(147018),
    n = a(926515),
    _ = a(992051),
    o = a(539459),
    i = a(354848),
    c = a(673743),
    s = a(144748),
    E = a(276321),
    l = a(865312),
    u = a(251069),
    I = a(859209),
    R = a(641236),
    d = a(874652),
    A = a(84297),
    f = o.PROPER,
    p = o.CONFIGURABLE,
    N = A.IteratorPrototype,
    T = A.BUGGY_SAFARI_ITERATORS,
    L = R('iterator'),
    h = 'keys',
    O = 'values',
    D = 'entries',
    g = function () {
        return this;
    };
t.exports = function (t, e, a, o, R, A, P) {
    c(a, e, o);
    var m,
        y,
        v,
        C = function (t) {
            if (t === R && U) return U;
            if (!T && t && t in b) return b[t];
            switch (t) {
                case h:
                case O:
                case D:
                    return function () {
                        return new a(this, t);
                    };
            }
            return function () {
                return new a(this);
            };
        },
        S = e + ' Iterator',
        G = !1,
        b = t.prototype,
        M = b[L] || b['@@iterator'] || (R && b[R]),
        U = (!T && M) || C(R),
        w = ('Array' === e && b.entries) || M;
    if (
        (w && (m = s(w.call(new t()))) !== Object.prototype && m.next && (!_ && s(m) !== N && (E ? E(m, N) : i(m[L]) || I(m, L, g)), l(m, S, !0, !0), _ && (d[S] = g)),
        f &&
            R === O &&
            M &&
            M.name !== O &&
            (!_ && p
                ? u(b, 'name', O)
                : ((G = !0),
                  (U = function () {
                      return n(M, this);
                  }))),
        R)
    )
        if (
            ((y = {
                values: C(O),
                keys: A ? U : C(h),
                entries: C(D)
            }),
            P)
        )
            for (v in y) (!T && !G && v in b) || I(b, v, y[v]);
        else
            r(
                {
                    target: e,
                    proto: !0,
                    forced: T || G
                },
                y
            );
    return (!_ || P) && b[L] !== U && I(b, L, U, { name: R }), (d[e] = U), y;
};
