n.d(t, { x: () => a });
var i = n(17928),
    l = n(166403),
    r = n(197630),
    s = n(103411);
function a(e) {
    let { location: t, preventFetch: n = !0 } = e,
        a = (0, s.m)(n),
        { referralRewardType: o, useAltReferralCardArt: d } = (0, r.xR)(t),
        c = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        u = null != c && !c.isPurchasedExternally,
        A = null != c && c.hasPremiumNitroMonthly,
        E = !0 === a && o === r.xb.ORBS,
        h = !0 === a && o === r.xb.DISCOUNT && u && A;
    return { isEligibleForIncentive: E || h, referralRewardType: o, useAltReferralCardArt: d };
}
