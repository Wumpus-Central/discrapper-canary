var i = n(855986),
    r = n(166403),
    s = n(197630),
    l = n(103411);
n.d(
    t,
    {},
    {
        x: function (e) {
            let { location: t, preventFetch: n = !0 } = e,
                a = (0, l.m)(n),
                { referralRewardType: o, useAltReferralCardArt: c } = (0, s.xR)(t),
                d = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
                u = null != d && !d.isPurchasedExternally,
                h = null != d && d.hasPremiumNitroMonthly,
                C = !0 === a && o === s.xb.ORBS,
                E = !0 === a && o === s.xb.DISCOUNT && u && h;
            return { isEligibleForIncentive: C || E, referralRewardType: o, useAltReferralCardArt: c };
        },
    },
);
