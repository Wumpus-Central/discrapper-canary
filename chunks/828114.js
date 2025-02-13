var r = a(147018),
    n = a(926515),
    o = a(992051),
    _ = a(539459),
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
    f = _.PROPER,
    p = _.CONFIGURABLE,
    T = A.IteratorPrototype,
    N = A.BUGGY_SAFARI_ITERATORS,
    L = R('iterator'),
    h = 'keys',
    O = 'values',
    D = 'entries',
    g = function () {
        return this;
    };
t.exports = function (t, e, a, _, R, A, m) {
    c(a, e, _);
    var y,
        P,
        v,
        C = function (t) {
            if (t === R && U) return U;
            if (!N && t && t in b) return b[t];
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
        U = (!N && M) || C(R),
        w = ('Array' === e && b.entries) || M;
    if (
        (w && (y = s(w.call(new t()))) !== Object.prototype && y.next && (o || s(y) === T || (E ? E(y, T) : i(y[L]) || I(y, L, g)), l(y, S, !0, !0), o && (d[S] = g)),
        f &&
            R === O &&
            M &&
            M.name !== O &&
            (!o && p
                ? u(b, 'name', O)
                : ((G = !0),
                  (U = function () {
                      return n(M, this);
                  }))),
        R)
    ) {
        if (
            ((P = {
                values: C(O),
                keys: A ? U : C(h),
                entries: C(D)
            }),
            m)
        )
            for (v in P) (!N && !G && v in b) || I(b, v, P[v]);
        else
            r(
                {
                    target: e,
                    proto: !0,
                    forced: N || G
                },
                P
            );
    }
    return (!o || m) && b[L] !== U && I(b, L, U, { name: R }), (d[e] = U), P;
};
