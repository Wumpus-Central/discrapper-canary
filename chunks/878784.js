"use strict";
n.d(t, { rG: () => E, Lh: () => p, Wo: () => h, p3: () => I, bu: () => g, $F: () => A, Xb: () => m });
var i,
    r = n(989349),
    s = n.n(r),
    a = n(17928),
    o = n(439174),
    l = n(841595),
    u = n(287809),
    c = n(166403),
    d = n(474090);
function _(e) {
    return (0, a.bG)([l.A], () => {
        let t,
            n = null != e ? l.A.getUserProfile(e) : null,
            i = n?.premiumSince;
        return null == n || null == i
            ? null
            : (n?.badges?.forEach((e) => {
                  let n = (0, o.cZ)(e.id);
                  null != n && (t = n);
              }),
              t);
    });
}
var f = n(788868),
    h = (((i = {}).UPCOMING = "upcoming"), (i.EARNED = "earned"), i);
function p() {
    let e = (0, a.bG)([u.default], () => u.default.getCurrentUser());
    return _(e?.id) ?? null;
}
let E = (e) =>
    (0, a.bG)([l.A], () => {
        if (null == e) return null;
        let t = l.A.getUserProfile(e);
        return t?.premiumSince;
    });
function m() {
    let e = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, d.YE)(e, f.PremiumTypes.TIER_2),
        n = (0, a.bG)([c.A], () => {
            let e = c.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null;
        }, [t]),
        i = E(e?.id);
    return n ?? i;
}
let g = () => {
        let e = Object.values(f.VD),
            t = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
            n = (0, a.bG)([c.A], () => c.A.getPremiumTypeSubscription());
        if (!(0, d.YE)(t, f.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let i = s()(),
            r = s()(n.premiumSince).add(1, "day"),
            o = i.diff(r, "months");
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: i } = t;
            return o >= i ? n : e;
        }, null);
    },
    A = () => {
        let e,
            t,
            n = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
            i = I(n?.id),
            r =
                ((e = p()),
                (t = (0, a.bG)([c.A], () => c.A.getPremiumTypeSubscription())),
                null == e || null == t || null == t.premiumSince ? null : (0, o.Xr)(e, t.premiumSince)),
            s = m();
        return null != i
            ? { ...i, earnedOnDate: r, status: "earned" }
            : null != s
              ? { ...Object.values(f.VD)[0], status: "upcoming" }
              : null;
    },
    I = (e) => {
        let t = _(e);
        return null == t ? null : f.VD[t];
    };
