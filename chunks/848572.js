n.d(t, {
    GG: () => v,
    Rw: () => T,
    SI: () => N,
    Vq: () => E,
    a1: () => y,
    y3: () => O
});
var r = n(913527),
    i = n.n(r),
    o = n(442837),
    a = n(291175),
    s = n(621853),
    l = n(594174),
    c = n(78839),
    u = n(111361),
    d = n(943180),
    f = n(494450),
    _ = n(474936);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var E = (function (e) {
    return (e.UPCOMING = 'upcoming'), (e.EARNED = 'earned'), e;
})({});
let b = () => {
        let e = (0, o.e7)([l.default], () => l.default.getCurrentUser());
        return (0, f.l)(null == e ? void 0 : e.id);
    },
    y = (e) =>
        (0, o.e7)([s.Z], () => {
            if (null == e) return null;
            let t = s.Z.getUserProfile(e);
            return null == t ? void 0 : t.premiumSince;
        }),
    v = () => {
        let e = (0, o.e7)([l.default], () => l.default.getCurrentUser());
        return y(null == e ? void 0 : e.id);
    },
    O = () => {
        let e = Object.values(_.vK),
            t = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
            n = (0, o.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        if (!(0, u.M5)(t, _.p9.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = i()(),
            a = i()(n.premiumSince).add(1, 'day'),
            s = r.diff(a, 'months');
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: r } = t;
            return s >= r ? n : e;
        }, null);
    },
    I = () => {
        let e = b(),
            t = (0, o.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, a.RZ)(e, t.premiumSince);
    },
    S = () => {
        let { enabled: e } = (0, d.D)(),
            t = v(),
            n = Object.values(_.vK);
        if (!e || null == t || null == n) return null;
        let r = i()().diff(t, 'days'),
            o = n[0],
            a = 30 * o.tenureReqNumMonths - r;
        return a <= 0
            ? null
            : g(h({}, o), {
                  daysLeft: a,
                  status: 'upcoming'
              });
    },
    T = () => {
        let e = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
            t = N(null == e ? void 0 : e.id),
            n = I(),
            r = S();
        return null != t
            ? g(h({}, t), {
                  earnedOnDate: n,
                  status: 'earned'
              })
            : null != r
              ? r
              : null;
    },
    N = (e) => {
        let t = (0, f.l)(e);
        return null == t ? null : _.vK[t];
    };
