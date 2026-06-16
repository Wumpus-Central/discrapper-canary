"use strict";
n.d(t, { cg: () => R, nq: () => O, hb: () => b });
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
    h = n(723702),
    f = n(428262),
    p = n(478097),
    E = n(196042),
    m = n(422936),
    g = n(234419),
    A = n(64700),
    I = n(27867),
    T = n(962644),
    S = n(35587),
    y = n(374200),
    C = n(788868),
    N = n(652215);
function v(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: i, previousPremiumSubscription: a } = e;
    if (!t) return !1;
    if (null != i && i.status === N.Dmq.ENDED) {
        let e = i.endedAt,
            t = i.hasPremiumAtLeast(C.PremiumTypes.TIER_2);
        if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != a && a.status === N.Dmq.ENDED) {
        let e = a.endedAt,
            t = a.hasPremiumAtLeast(C.PremiumTypes.TIER_2);
        if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(C.PremiumTypes.TIER_2),
            t = u.default.getCurrentUser(),
            i = !!n?.hasActiveTrial && f.Ay.isPremiumExactly(t, C.PremiumTypes.TIER_0),
            r = (0, h.isAndroid)() && n.paymentGateway !== N.kM_.GOOGLE;
        if (e || i || r) return !1;
    }
    return !(s.Fr && _.A.isFractionalPremiumActive());
}
function R() {
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
        f = new Date(n?.endDate ?? 0).valueOf(),
        T = Date.now(),
        y = T > f;
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
    })({ delay: y ? -1 : f - T });
    let C = !s.Fr || (0, h.isAndroid)(),
        N = v({
            experimentEnabled: i,
            premiumSubscription: o,
            mostRecentSubscription: r,
            previousPremiumSubscription: u,
        }),
        R = C && N && null == d && null != n && !t && null == _,
        O = (0, p.GU)("bogo marketing eligibility hook");
    return !y && (e ? O : R);
}
async function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.default.getCurrentUser(),
        n = !t?.isClaimed(),
        i = (0, l.cx)(),
        r = (0, E.RK)("bogo eligibility async check"),
        a = (0, p.BI)("bogo marketing eligibility async check"),
        _ = !s.Fr || (0, h.isAndroid)();
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
        u.default.getCurrentUser()?.hasPurchasedFlag(C.lA.PREMIUM_TIER_2) &&
        (await (0, o.I8)()),
        c.A.hasFetchedSubscriptions() || (await (0, o.hP)());
    let f = c.A.getMostRecentPremiumTypeSubscription();
    return v({
        experimentEnabled: r,
        premiumSubscription: c.A.getPremiumTypeSubscription(),
        mostRecentSubscription: f,
        previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
    });
}
async function b() {
    if (!(await O(!1))) return;
    let e = y.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, T.hS)());
}
