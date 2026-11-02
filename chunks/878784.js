n.d(u, { rG: () => g, Lh: () => b, Wo: () => p, p3: () => S, bu: () => A, $F: () => G, Xb: () => h });
var t,
    r = n(582128),
    l = n(17928),
    i = n(439174),
    s = n(321191),
    a = n(287809),
    c = n(166403),
    f = n(474090);
function d(e) {
    return (0, l.bG)([s.A, a.default], () => {
        let u,
            n = null != e ? s.A.getUserProfile(e) : null,
            t = n?.premiumSince;
        if (null == n || null == t) return null;
        if (
            (n?.badges?.forEach((e) => {
                let n = (0, i.cZ)(e.id);
                null != n && (u = n);
            }),
            null != u)
        )
            return u;
        let r = a.default.getCurrentUser();
        return e === r?.id && r?.hasPaidTier2Subscription() ? (0, i.UO)(t) : null;
    });
}
var m = n(202541),
    p = (((t = {}).UPCOMING = "upcoming"), (t.WITHHELD = "withheld"), (t.EARNED = "earned"), t);
function o(e) {
    if (null == e) return e;
    let u = e instanceof Date ? e : new Date(e);
    return Number.isNaN(u.getTime()) ? null : u;
}
function b() {
    let e = (0, l.bG)([a.default], () => a.default.getCurrentUser());
    return d(e?.id) ?? null;
}
function g(e) {
    let u = (0, l.bG)([s.A], () => {
        if (null == e) return null;
        let u = s.A.getUserProfile(e);
        return u?.premiumSince;
    });
    return (0, r.useMemo)(() => o(u), [u]);
}
function h() {
    let e = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
        u = (0, f.YE)(e, m.PremiumTypes.TIER_2),
        n = (0, l.bG)(
            [c.A],
            () => {
                let e = c.A.getPremiumSubscription();
                return null != e && u ? e.premiumSince : null;
            },
            [u],
        ),
        t = g(e?.id),
        i = n ?? t;
    return (0, r.useMemo)(() => o(i), [i]);
}
function A() {
    let e = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
        u = (0, l.bG)([c.A], () => c.A.getPremiumTypeSubscription());
    return (0, f.YE)(e, m.PremiumTypes.TIER_2) ? (0, i.UO)(u?.premiumSince) : null;
}
function G() {
    let e,
        u,
        n = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
        t = S(n?.id),
        r =
            ((e = b()),
            (u = (0, l.bG)([c.A], () => c.A.getPremiumTypeSubscription())),
            null == e || null == u || null == u.premiumSince ? null : (0, i.Xr)(e, u.premiumSince)),
        s = h();
    if (null != t) return { ...t, earnedOnDate: r, status: "earned" };
    if (null == s) return null;
    if (!n?.hasPaidTier2Subscription()) {
        let e = (0, i.UO)(s);
        if (null != e) return { ...m.VD[e], earnedOnDate: (0, i.Xr)(e, s), status: "withheld" };
    }
    return { ...Object.values(m.VD)[0], status: "upcoming" };
}
function S(e) {
    let u = d(e);
    return null == u ? null : m.VD[u];
}
