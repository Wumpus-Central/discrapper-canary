r.d(n, {
    GG: function () {
        return v;
    },
    Rw: function () {
        return I;
    },
    j_: function () {
        return g;
    },
    kG: function () {
        return m;
    },
    y3: function () {
        return y;
    }
});
var i = r(724458);
var a = r(913527),
    o = r.n(a),
    s = r(442837),
    l = r(291175),
    u = r(621853),
    c = r(594174),
    d = r(78839),
    f = r(111361),
    p = r(943180),
    h = r(494450),
    _ = r(474936);
let m = () => {
        let e = (0, s.e7)([c.default], () => c.default.getCurrentUser());
        return (0, h.l)(null == e ? void 0 : e.id);
    },
    g = () => {
        let { version: e } = (0, p.D)();
        return 2 === e ? Object.values(_.q4) : Object.values(_.Ph);
    },
    E = (e) =>
        (0, s.e7)([u.Z], () => {
            if (null == e) return null;
            let n = u.Z.getUserProfile(e);
            return null == n ? void 0 : n.premiumSince;
        }),
    v = () => {
        let e = (0, s.e7)([c.default], () => c.default.getCurrentUser());
        return E(null == e ? void 0 : e.id);
    },
    y = () => {
        let e = g(),
            n = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
            r = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
        if (!(0, f.M5)(n, _.p9.TIER_2) || null == r || null == r.premiumSince) return null;
        let i = o()(),
            a = o()(r.premiumSince).add(1, 'day'),
            l = i.diff(a, 'months');
        return e.reduce((e, n) => {
            let { id: r, tenureReqNumMonths: i } = n;
            return l >= i ? r : e;
        }, null);
    },
    b = () => {
        let e = m(),
            n = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
        return null == e || null == n || null == n.premiumSince ? null : (0, l.RZ)(e, n.premiumSince);
    },
    I = () => {
        let e = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
            n = T(null == e ? void 0 : e.id),
            r = b();
        return null == n
            ? null
            : {
                  ...n,
                  earnedOnDate: r
              };
    },
    T = (e) => {
        let n = (0, h.l)(e);
        return null == n ? null : _.np[n];
    };
