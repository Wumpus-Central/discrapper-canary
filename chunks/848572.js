n.d(t, {
    GG: function () {
        return p;
    },
    Rw: function () {
        return _;
    },
    j_: function () {
        return h;
    },
    kG: function () {
        return g;
    },
    y3: function () {
        return x;
    }
}),
    n(724458);
var i = n(913527),
    r = n.n(i),
    s = n(442837),
    a = n(291175),
    l = n(621853),
    o = n(594174),
    c = n(78839),
    d = n(111361),
    u = n(471309),
    m = n(474936);
let g = () => {
        var e;
        let t;
        let n = (0, s.e7)([o.default, l.Z], () => {
            let e = o.default.getCurrentUser();
            return null != e ? l.Z.getUserProfile(e.id) : null;
        });
        if (null == n || null == n.premiumSince) return;
        let i = null == n ? void 0 : n.premiumSince;
        return (
            null == n ||
                null === (e = n.badges) ||
                void 0 === e ||
                e.forEach((e) => {
                    let n = (0, a.gn)(e.id);
                    null != n && null != i && (t = n);
                }),
            t
        );
    },
    h = () => {
        let { version: e } = (0, u.Z)();
        return 2 === e ? Object.values(m.q4) : Object.values(m.Ph);
    },
    p = () =>
        (0, s.e7)([o.default, l.Z], () => {
            let e = o.default.getCurrentUser();
            if (null == e) return null;
            let t = l.Z.getUserProfile(e.id);
            return null == t ? void 0 : t.premiumSince;
        }),
    x = () => {
        let e = h(),
            t = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
            n = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        if (!(0, d.M5)(t, m.p9.TIER_2) || null == n || null == n.premiumSince) return null;
        let i = r()(),
            a = r()(n.premiumSince).add(1, 'day'),
            l = i.diff(a, 'months');
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: i } = t;
            return l >= i ? n : e;
        }, null);
    },
    f = () => {
        let e = g(),
            t = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, a.RZ)(e, t.premiumSince);
    },
    _ = () => {
        let e = g(),
            t = f();
        return null == e
            ? null
            : {
                  ...m.np[e],
                  earnedOnDate: t
              };
    };
