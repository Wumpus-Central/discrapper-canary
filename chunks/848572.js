n.d(t, {
    GG: function () {
        return f;
    },
    Rw: function () {
        return g;
    },
    j_: function () {
        return M;
    },
    kG: function () {
        return N;
    },
    y3: function () {
        return b;
    }
}),
    n(724458);
var s = n(913527),
    a = n.n(s),
    r = n(442837),
    i = n(291175),
    l = n(621853),
    u = n(594174),
    c = n(78839),
    d = n(111361),
    _ = n(471309),
    o = n(494450),
    E = n(474936);
let N = () => {
        let e = (0, r.e7)([u.default], () => u.default.getCurrentUser());
        return (0, o.l)(null == e ? void 0 : e.id);
    },
    M = () => {
        let { version: e } = (0, _.Z)();
        return 2 === e ? Object.values(E.q4) : Object.values(E.Ph);
    },
    T = (e) =>
        (0, r.e7)([l.Z], () => {
            if (null == e) return null;
            let t = l.Z.getUserProfile(e);
            return null == t ? void 0 : t.premiumSince;
        }),
    f = () => {
        let e = (0, r.e7)([u.default], () => u.default.getCurrentUser());
        return T(null == e ? void 0 : e.id);
    },
    b = () => {
        let e = M(),
            t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
            n = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        if (!(0, d.M5)(t, E.p9.TIER_2) || null == n || null == n.premiumSince) return null;
        let s = a()(),
            i = a()(n.premiumSince).add(1, 'day'),
            l = s.diff(i, 'months');
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: s } = t;
            return l >= s ? n : e;
        }, null);
    },
    R = () => {
        let e = N(),
            t = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, i.RZ)(e, t.premiumSince);
    },
    g = () => {
        let e = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
            t = m(null == e ? void 0 : e.id),
            n = R();
        return null == t
            ? null
            : {
                  ...t,
                  earnedOnDate: n
              };
    },
    m = (e) => {
        let t = (0, o.l)(e);
        return null == t ? null : E.np[t];
    };
