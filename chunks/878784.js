n.d(u, { rG: () => h, Lh: () => b, Wo: () => o, p3: () => P, bu: () => G, $F: () => A, Xb: () => g });
var l,
    t = n(989349),
    r = n.n(t),
    i = n(17928),
    d = n(439174),
    a = n(841595),
    s = n(287809),
    m = n(166403),
    f = n(474090);
function c(e) {
    return (0, i.bG)([a.A], () => {
        let u,
            n = null != e ? a.A.getUserProfile(e) : null,
            l = n?.premiumSince;
        return null == n || null == l
            ? null
            : (n?.badges?.forEach((e) => {
                  let n = (0, d.cZ)(e.id);
                  null != n && (u = n);
              }),
              u);
    });
}
var p = n(788868),
    o = (((l = {}).UPCOMING = "upcoming"), (l.EARNED = "earned"), l);
function b() {
    let e = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    return c(e?.id) ?? null;
}
let h = (e) =>
    (0, i.bG)([a.A], () => {
        if (null == e) return null;
        let u = a.A.getUserProfile(e);
        return u?.premiumSince;
    });
function g() {
    let e = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        u = (0, f.YE)(e, p.PremiumTypes.TIER_2),
        n = (0, i.bG)([m.A], () => {
            let e = m.A.getPremiumSubscription();
            return null != e && u ? e.premiumSince : null;
        }, [u]),
        l = h(e?.id);
    return n ?? l;
}
let G = () => {
        let e = Object.values(p.VD),
            u = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
            n = (0, i.bG)([m.A], () => m.A.getPremiumTypeSubscription());
        if (!(0, f.YE)(u, p.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let l = r()(),
            t = r()(n.premiumSince).add(1, "day"),
            d = l.diff(t, "months");
        return e.reduce((e, u) => {
            let { id: n, tenureReqNumMonths: l } = u;
            return d >= l ? n : e;
        }, null);
    },
    A = () => {
        let e,
            u,
            n = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
            l = P(n?.id),
            t =
                ((e = b()),
                (u = (0, i.bG)([m.A], () => m.A.getPremiumTypeSubscription())),
                null == e || null == u || null == u.premiumSince ? null : (0, d.Xr)(e, u.premiumSince)),
            r = g();
        return null != l
            ? { ...l, earnedOnDate: t, status: "earned" }
            : null != r
              ? { ...Object.values(p.VD)[0], status: "upcoming" }
              : null;
    },
    P = (e) => {
        let u = c(e);
        return null == u ? null : p.VD[u];
    };
