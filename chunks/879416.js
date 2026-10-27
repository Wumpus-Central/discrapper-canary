n.d(t, { x: () => a });
var i = n(17928),
    s = n(166403),
    r = n(197630),
    l = n(103411);
function a(e) {
    let { location: t, preventFetch: n = !0 } = e,
        a = (0, l.m)(n),
        { referralRewardType: o, useAltReferralCardArt: c } = (0, r.xR)(t),
        d = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        u = null != d && !d.isPurchasedExternally,
        h = null != d && d.hasPremiumNitroMonthly,
        C = !0 === a && o === r.xb.ORBS,
        A = !0 === a && o === r.xb.DISCOUNT && u && h;
    return { isEligibleForIncentive: C || A, referralRewardType: o, useAltReferralCardArt: c };
}
