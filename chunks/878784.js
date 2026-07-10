"use strict";
n.d(t, { rG: () => I, Lh: () => h, Wo: () => A, p3: () => m, bu: () => p, $F: () => T, Xb: () => f });
var i,
    r = n(989349),
    a = n.n(r),
    s = n(17928),
    l = n(439174),
    o = n(543572),
    d = n(287809),
    c = n(166403),
    u = n(474090);
function _(e) {
    return (0, s.bG)([o.A], () => {
        let t,
            n = null != e ? o.A.getUserProfile(e) : null,
            i = n?.premiumSince;
        return null == n || null == i
            ? null
            : (n?.badges?.forEach((e) => {
                  let n = (0, l.cZ)(e.id);
                  null != n && (t = n);
              }),
              t);
    });
}
var E = n(202541),
    A = (((i = {}).UPCOMING = "upcoming"), (i.EARNED = "earned"), i);
function h() {
    let e = (0, s.bG)([d.default], () => d.default.getCurrentUser());
    return _(e?.id) ?? null;
}
function I(e) {
    return (0, s.bG)([o.A], () => {
        if (null == e) return null;
        let t = o.A.getUserProfile(e);
        return t?.premiumSince;
    });
}
function f() {
    let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, u.YE)(e, E.PremiumTypes.TIER_2),
        n = (0, s.bG)([c.A], () => {
            let e = c.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null;
        }, [t]),
        i = I(e?.id);
    return n ?? i;
}
function p() {
    let e = Object.values(E.VD),
        t = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        n = (0, s.bG)([c.A], () => c.A.getPremiumTypeSubscription());
    if (!(0, u.YE)(t, E.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
    let i = a()(),
        r = a()(n.premiumSince).add(1, "day"),
        l = i.diff(r, "months");
    return e.reduce((e, t) => {
        let { id: n, tenureReqNumMonths: i } = t;
        return l >= i ? n : e;
    }, null);
}
function T() {
    let e,
        t,
        n = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        i = m(n?.id),
        r =
            ((e = h()),
            (t = (0, s.bG)([c.A], () => c.A.getPremiumTypeSubscription())),
            null == e || null == t || null == t.premiumSince ? null : (0, l.Xr)(e, t.premiumSince)),
        a = f();
    return null != i
        ? { ...i, earnedOnDate: r, status: "earned" }
        : null != a
          ? { ...Object.values(E.VD)[0], status: "upcoming" }
          : null;
}
function m(e) {
    let t = _(e);
    return null == t ? null : E.VD[t];
}
