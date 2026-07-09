n.d(u, { rG: () => g, Lh: () => o, Wo: () => b, p3: () => h, bu: () => G, $F: () => S, Xb: () => A });
var l,
    r = n(989349),
    t = n.n(r),
    i = n(17928),
    c = n(439174),
    m = n(321191),
    d = n(287809),
    s = n(166403),
    a = n(474090);
function p(e) {
    return (0, i.bG)([m.A], () => {
        let u,
            n = null != e ? m.A.getUserProfile(e) : null,
            l = n?.premiumSince;
        return null == n || null == l
            ? null
            : (n?.badges?.forEach((e) => {
                  let n = (0, c.cZ)(e.id);
                  null != n && (u = n);
              }),
              u);
    });
}
var f = n(202541),
    b = (((l = {}).UPCOMING = "upcoming"), (l.EARNED = "earned"), l);
function o() {
    let e = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return p(e?.id) ?? null;
}
function g(e) {
    return (0, i.bG)([m.A], () => {
        if (null == e) return null;
        let u = m.A.getUserProfile(e);
        return u?.premiumSince;
    });
}
function A() {
    let e = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        u = (0, a.YE)(e, f.PremiumTypes.TIER_2),
        n = (0, i.bG)([s.A], () => {
            let e = s.A.getPremiumSubscription();
            return null != e && u ? e.premiumSince : null;
        }, [u]),
        l = g(e?.id);
    return n ?? l;
}
function G() {
    let e = Object.values(f.VD),
        u = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        n = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription());
    if (!(0, a.YE)(u, f.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
    let l = t()(),
        r = t()(n.premiumSince).add(1, "day"),
        c = l.diff(r, "months");
    return e.reduce((e, u) => {
        let { id: n, tenureReqNumMonths: l } = u;
        return c >= l ? n : e;
    }, null);
}
function S() {
    let e,
        u,
        n = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        l = h(n?.id),
        r =
            ((e = o()),
            (u = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription())),
            null == e || null == u || null == u.premiumSince ? null : (0, c.Xr)(e, u.premiumSince)),
        t = A();
    return null != l
        ? { ...l, earnedOnDate: r, status: "earned" }
        : null != t
          ? { ...Object.values(f.VD)[0], status: "upcoming" }
          : null;
}
function h(e) {
    let u = p(e);
    return null == u ? null : f.VD[u];
}
