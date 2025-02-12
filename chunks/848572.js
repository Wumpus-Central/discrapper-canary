n.d(t, {
    GG: () => E,
    Rw: () => T,
    SI: () => b,
    Vq: () => p,
    a1: () => g,
    j_: () => m,
    y3: () => v
}),
    n(724458);
var i = n(913527),
    r = n.n(i),
    a = n(442837),
    s = n(291175),
    o = n(621853),
    l = n(594174),
    u = n(78839),
    c = n(111361),
    d = n(943180),
    f = n(494450),
    _ = n(474936),
    p = (function (e) {
        return (e.UPCOMING = 'upcoming'), (e.EARNED = 'earned'), e;
    })({});
let h = () => {
        let e = (0, a.e7)([l.default], () => l.default.getCurrentUser());
        return (0, f.l)(null == e ? void 0 : e.id);
    },
    m = () => {
        let { isBadgeVersion2: e } = (0, d.D)();
        return e ? Object.values(_.q4) : Object.values(_.Ph);
    },
    g = (e) =>
        (0, a.e7)([o.Z], () => {
            if (null == e) return null;
            let t = o.Z.getUserProfile(e);
            return null == t ? void 0 : t.premiumSince;
        }),
    E = () => {
        let e = (0, a.e7)([l.default], () => l.default.getCurrentUser());
        return g(null == e ? void 0 : e.id);
    },
    v = () => {
        let e = m(),
            t = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
            n = (0, a.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription());
        if (!(0, c.M5)(t, _.p9.TIER_2) || null == n || null == n.premiumSince) return null;
        let i = r()(),
            s = r()(n.premiumSince).add(1, 'day'),
            o = i.diff(s, 'months');
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: i } = t;
            return o >= i ? n : e;
        }, null);
    },
    y = () => {
        let e = h(),
            t = (0, a.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, s.RZ)(e, t.premiumSince);
    },
    I = () => {
        let { enabled: e, version: t } = (0, d.D)(),
            n = E(),
            i = m();
        if (!e || 2 !== t || null == n || null == i) return null;
        let a = r()().diff(n, 'days'),
            s = i[0],
            o = 30 * s.tenureReqNumMonths - a;
        return o <= 0
            ? null
            : {
                  ...s,
                  daysLeft: o,
                  status: 'upcoming'
              };
    },
    T = () => {
        let e = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
            t = b(null == e ? void 0 : e.id),
            n = y(),
            i = I();
        return null != t
            ? {
                  ...t,
                  earnedOnDate: n,
                  status: 'earned'
              }
            : null != i
              ? i
              : null;
    },
    b = (e) => {
        let t = (0, f.l)(e);
        return null == t ? null : _.np[t];
    };
