r.d(n, {
    GG: function () {
        return v;
    },
    Rw: function () {
        return b;
    },
    j_: function () {
        return g;
    },
    kG: function () {
        return m;
    },
    y3: function () {
        return I;
    }
});
var i = r(724458);
var a = r(913527),
    s = r.n(a),
    o = r(442837),
    l = r(291175),
    u = r(621853),
    c = r(594174),
    d = r(78839),
    f = r(111361),
    _ = r(471309),
    h = r(494450),
    p = r(474936);
let m = () => {
        let e = (0, o.e7)([c.default], () => c.default.getCurrentUser());
        return (0, h.l)(null == e ? void 0 : e.id);
    },
    g = () => {
        let { version: e } = (0, _.Z)();
        return 2 === e ? Object.values(p.q4) : Object.values(p.Ph);
    },
    E = (e) =>
        (0, o.e7)([u.Z], () => {
            if (null == e) return null;
            let n = u.Z.getUserProfile(e);
            return null == n ? void 0 : n.premiumSince;
        }),
    v = () => {
        let e = (0, o.e7)([c.default], () => c.default.getCurrentUser());
        return E(null == e ? void 0 : e.id);
    },
    I = () => {
        let e = g(),
            n = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
            r = (0, o.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
        if (!(0, f.M5)(n, p.p9.TIER_2) || null == r || null == r.premiumSince) return null;
        let i = s()(),
            a = s()(r.premiumSince).add(1, 'day'),
            l = i.diff(a, 'months');
        return e.reduce((e, n) => {
            let { id: r, tenureReqNumMonths: i } = n;
            return l >= i ? r : e;
        }, null);
    },
    T = () => {
        let e = m(),
            n = (0, o.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
        return null == e || null == n || null == n.premiumSince ? null : (0, l.RZ)(e, n.premiumSince);
    },
    b = () => {
        let e = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
            n = y(null == e ? void 0 : e.id),
            r = T();
        return null == n
            ? null
            : {
                  ...n,
                  earnedOnDate: r
              };
    },
    y = (e) => {
        let n = (0, h.l)(e);
        return null == n ? null : p.np[n];
    };
