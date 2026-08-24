"use strict";
n.d(t, { cg: () => L, nq: () => y, hb: () => D });
var i = n(989349),
    r = n.n(i),
    a = n(607399),
    s = n(702841),
    l = n(277984),
    o = n(86379),
    d = n(287809),
    c = n(166403),
    u = n(354670),
    _ = n(469778),
    E = n(723702),
    A = n(158045),
    h = n(478097),
    I = n(196042),
    f = n(724651),
    p = n(732280),
    T = n(582128),
    m = n(265431),
    g = n(962644),
    S = n(35587),
    N = n(412260),
    C = n(202541),
    O = n(652215);
function R(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: i, previousPremiumSubscription: s } = e;
    if (!t) return !1;
    if (null != i && i.status === O.Dmq.ENDED) {
        let e = i.endedAt,
            t = i.hasPremiumAtLeast(C.PremiumTypes.TIER_2);
        if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != s && s.status === O.Dmq.ENDED) {
        let e = s.endedAt,
            t = s.hasPremiumAtLeast(C.PremiumTypes.TIER_2);
        if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(C.PremiumTypes.TIER_2),
            t = d.default.getCurrentUser(),
            i = !!n?.hasActiveTrial && A.Ay.isPremiumExactly(t, C.PremiumTypes.TIER_0),
            r = (0, E.isAndroid)() && n.paymentGateway !== O.kM_.GOOGLE;
        if (e || i || r) return !1;
    }
    return !(a.Fr && _.A.isFractionalPremiumActive());
}
function L() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, o.dw)(),
        { promotion: n } = (0, S.Eu)(),
        i = (0, I.si)("bogo eligibility hook"),
        {
            mostRecentSubscription: r,
            premiumSubscription: l,
            previousPremiumSubscription: d,
        } = (0, s.cf)([c.A], () => ({
            mostRecentSubscription: c.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
        })),
        u = (0, p.V)(),
        _ = (0, f.O)(),
        A = new Date(n?.endDate ?? 0).valueOf(),
        g = Date.now(),
        N = g > A;
    !(function (e) {
        let { delay: t, disable: n = !1 } = e,
            i = (0, m.A)();
        T.useEffect(() => {
            if (t <= 0 || n) return;
            let e = setTimeout(() => {
                i();
            }, t);
            return () => clearTimeout(e);
        }, [t, n, i]);
    })({ delay: N ? -1 : A - g });
    let C = !a.Fr || (0, E.isAndroid)(),
        O = R({
            experimentEnabled: i,
            premiumSubscription: l,
            mostRecentSubscription: r,
            previousPremiumSubscription: d,
        }),
        L = C && O && null == u && null != n && !t && null == _,
        y = (0, h.GU)("bogo marketing eligibility hook");
    return !N && (e ? y : L);
}
async function y() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d.default.getCurrentUser(),
        n = !t?.isClaimed(),
        i = (0, o.cx)(),
        r = (0, I.RK)("bogo eligibility async check"),
        s = (0, h.BI)("bogo marketing eligibility async check"),
        _ = !a.Fr || (0, E.isAndroid)();
    if (
        n ||
        i ||
        !r ||
        (e && !s) ||
        !_ ||
        (u.A.hasFetchedOffer() && (u.A.hasAnyUnexpiredOffer() || u.A.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !c.A.hasFetchedMostRecentPremiumTypeSubscription() &&
        d.default.getCurrentUser()?.hasPurchasedFlag(C.lA.PREMIUM_TIER_2) &&
        (await (0, l.I8)()),
        c.A.hasFetchedSubscriptions() || (await (0, l.hP)());
    let A = c.A.getMostRecentPremiumTypeSubscription();
    return R({
        experimentEnabled: r,
        premiumSubscription: c.A.getPremiumTypeSubscription(),
        mostRecentSubscription: A,
        previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
    });
}
async function D() {
    if (!(await y(!1))) return;
    let e = N.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, g.hS)());
}
