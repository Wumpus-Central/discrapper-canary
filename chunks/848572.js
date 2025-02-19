n.d(t, {
    GG: () => O,
    Rw: () => N,
    SI: () => A,
    Vq: () => E,
    a1: () => y,
    j_: () => b,
    y3: () => S
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
    p = n(474936);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
let v = () => {
        let e = (0, o.e7)([l.default], () => l.default.getCurrentUser());
        return (0, f.l)(null == e ? void 0 : e.id);
    },
    b = () => {
        let { isBadgeVersion2: e } = (0, d.D)();
        return e ? Object.values(p.q4) : Object.values(p.Ph);
    },
    y = (e) =>
        (0, o.e7)([s.Z], () => {
            if (null == e) return null;
            let t = s.Z.getUserProfile(e);
            return null == t ? void 0 : t.premiumSince;
        }),
    O = () => {
        let e = (0, o.e7)([l.default], () => l.default.getCurrentUser());
        return y(null == e ? void 0 : e.id);
    },
    S = () => {
        let e = b(),
            t = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
            n = (0, o.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        if (!(0, u.M5)(t, p.p9.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = i()(),
            a = i()(n.premiumSince).add(1, 'day'),
            s = r.diff(a, 'months');
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: r } = t;
            return s >= r ? n : e;
        }, null);
    },
    I = () => {
        let e = v(),
            t = (0, o.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, a.RZ)(e, t.premiumSince);
    },
    T = () => {
        let { enabled: e, version: t } = (0, d.D)(),
            n = O(),
            r = b();
        if (!e || 2 !== t || null == n || null == r) return null;
        let o = i()().diff(n, 'days'),
            a = r[0],
            s = 30 * a.tenureReqNumMonths - o;
        return s <= 0
            ? null
            : g(h({}, a), {
                  daysLeft: s,
                  status: 'upcoming'
              });
    },
    N = () => {
        let e = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
            t = A(null == e ? void 0 : e.id),
            n = I(),
            r = T();
        return null != t
            ? g(h({}, t), {
                  earnedOnDate: n,
                  status: 'earned'
              })
            : null != r
              ? r
              : null;
    },
    A = (e) => {
        let t = (0, f.l)(e);
        return null == t ? null : p.np[t];
    };
