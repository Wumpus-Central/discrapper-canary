"use strict";
n.d(t, { cg: () => O, nq: () => R, hb: () => b });
var i = n(989349),
    r = n.n(i),
    s = n(607399),
    a = n(702841),
    o = n(753390),
    l = n(86379),
    u = n(287809),
    c = n(166403),
    d = n(354670),
    _ = n(469778),
    f = n(723702),
    h = n(927578),
    p = n(478097),
    E = n(196042),
    m = n(422936),
    g = n(234419),
    A = n(64700),
    I = n(27867),
    T = n(962644),
    S = n(35587),
    N = n(374200),
    y = n(788868),
    C = n(652215);
function v(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: i, previousPremiumSubscription: a } = e;
    if (!t) return !1;
    if (null != i && i.status === C.Dmq.ENDED) {
        let e = i.endedAt,
            t = i.hasPremiumAtLeast(y.PremiumTypes.TIER_2);
        if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != a && a.status === C.Dmq.ENDED) {
        let e = a.endedAt,
            t = a.hasPremiumAtLeast(y.PremiumTypes.TIER_2);
        if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(y.PremiumTypes.TIER_2),
            t = u.default.getCurrentUser(),
            i = !!n?.hasActiveTrial && h.Ay.isPremiumExactly(t, y.PremiumTypes.TIER_0),
            r = (0, f.isAndroid)() && n.paymentGateway !== C.kM_.GOOGLE;
        if (e || i || r) return !1;
    }
    return !(s.Fr && _.A.isFractionalPremiumActive());
}
function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, l.dw)(),
        { promotion: n } = (0, S.Eu)(),
        i = (0, E.si)("bogo eligibility hook"),
        {
            mostRecentSubscription: r,
            premiumSubscription: o,
            previousPremiumSubscription: u,
        } = (0, a.cf)([c.A], () => ({
            mostRecentSubscription: c.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
        })),
        d = (0, g.V)(),
        _ = (0, m.O)(),
        h = new Date(n?.endDate ?? 0).valueOf(),
        T = Date.now(),
        N = T > h;
    !(function (e) {
        let { delay: t, disable: n = !1 } = e,
            i = (0, I.A)();
        A.useEffect(() => {
            if (t <= 0 || n) return;
            let e = setTimeout(() => {
                i();
            }, t);
            return () => clearTimeout(e);
        }, [t, n, i]);
    })({ delay: N ? -1 : h - T });
    let y = !s.Fr || (0, f.isAndroid)(),
        C = v({
            experimentEnabled: i,
            premiumSubscription: o,
            mostRecentSubscription: r,
            previousPremiumSubscription: u,
        }),
        O = y && C && null == d && null != n && !t && null == _,
        R = (0, p.GU)("bogo marketing eligibility hook");
    return !N && (e ? R : O);
}
async function R() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.default.getCurrentUser(),
        n = !t?.isClaimed(),
        i = (0, l.cx)(),
        r = (0, E.RK)("bogo eligibility async check"),
        a = (0, p.BI)("bogo marketing eligibility async check"),
        _ = !s.Fr || (0, f.isAndroid)();
    if (
        n ||
        i ||
        !r ||
        (e && !a) ||
        !_ ||
        (d.A.hasFetchedOffer() && (d.A.hasAnyUnexpiredOffer() || d.A.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !c.A.hasFetchedMostRecentPremiumTypeSubscription() &&
        u.default.getCurrentUser()?.hasPurchasedFlag(y.lA.PREMIUM_TIER_2) &&
        (await (0, o.I8)()),
        c.A.hasFetchedSubscriptions() || (await (0, o.hP)());
    let h = c.A.getMostRecentPremiumTypeSubscription();
    return v({
        experimentEnabled: r,
        premiumSubscription: c.A.getPremiumTypeSubscription(),
        mostRecentSubscription: h,
        previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
    });
}
async function b() {
    if (!(await R(!1))) return;
    let e = N.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, T.hS)());
}
