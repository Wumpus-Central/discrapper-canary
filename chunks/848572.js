r.d(n, {
    GG: function () {
        return y;
    },
    Rw: function () {
        return S;
    },
    Vq: function () {
        return i;
    },
    j_: function () {
        return E;
    },
    kG: function () {
        return g;
    },
    y3: function () {
        return b;
    }
});
var i,
    a = r(724458);
var o = r(913527),
    s = r.n(o),
    l = r(442837),
    u = r(291175),
    c = r(621853),
    d = r(594174),
    f = r(78839),
    p = r(111361),
    h = r(943180),
    _ = r(494450),
    m = r(474936);
!(function (e) {
    (e.UPCOMING = 'upcoming'), (e.EARNED = 'earned');
})(i || (i = {}));
let g = () => {
        let e = (0, l.e7)([d.default], () => d.default.getCurrentUser());
        return (0, _.l)(null == e ? void 0 : e.id);
    },
    E = () => {
        let { version: e } = (0, h.D)();
        return 2 === e ? Object.values(m.q4) : Object.values(m.Ph);
    },
    v = (e) =>
        (0, l.e7)([c.Z], () => {
            if (null == e) return null;
            let n = c.Z.getUserProfile(e);
            return null == n ? void 0 : n.premiumSince;
        }),
    y = () => {
        let e = (0, l.e7)([d.default], () => d.default.getCurrentUser());
        return v(null == e ? void 0 : e.id);
    },
    b = () => {
        let e = E(),
            n = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
            r = (0, l.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription());
        if (!(0, p.M5)(n, m.p9.TIER_2) || null == r || null == r.premiumSince) return null;
        let i = s()(),
            a = s()(r.premiumSince).add(1, 'day'),
            o = i.diff(a, 'months');
        return e.reduce((e, n) => {
            let { id: r, tenureReqNumMonths: i } = n;
            return o >= i ? r : e;
        }, null);
    },
    I = () => {
        let e = g(),
            n = (0, l.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription());
        return null == e || null == n || null == n.premiumSince ? null : (0, u.RZ)(e, n.premiumSince);
    },
    T = () => {
        let { enabled: e, version: n } = (0, h.D)(),
            r = y(),
            i = E();
        if (!e || 2 !== n || null == r || null == i) return null;
        let a = s()().diff(r, 'days'),
            o = i[0],
            l = 30 * o.tenureReqNumMonths - a;
        return l <= 0
            ? null
            : {
                  ...o,
                  daysLeft: l,
                  status: 'upcoming'
              };
    },
    S = () => {
        let e = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
            n = A(null == e ? void 0 : e.id),
            r = I(),
            i = T();
        return null != n
            ? {
                  ...n,
                  earnedOnDate: r,
                  status: 'earned'
              }
            : null != i
              ? i
              : null;
    },
    A = (e) => {
        let n = (0, _.l)(e);
        return null == n ? null : m.np[n];
    };
