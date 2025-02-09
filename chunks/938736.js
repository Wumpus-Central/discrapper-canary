n.d(t, {
    $s: () => N,
    AV: () => _,
    Hg: () => I,
    Kn: () => T,
    Nq: () => g,
    TW: () => f,
    pn: () => h,
    uv: () => C,
    vx: () => x,
    wG: () => v
});
var i = n(442837),
    r = n(704215),
    a = n(605236),
    s = n(276444),
    l = n(822070),
    o = n(520540),
    c = n(533525),
    d = n(796634),
    u = n(981631),
    m = n(388032);
let g = '40%',
    _ = 8,
    p = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: i, helpdeskArticle: r } = e;
        return t
            ? m.intl.format(m.t['3OYZMT'], { helpdeskArticle: r })
            : n
              ? m.intl.format(m.t.EkWiZm, {
                    numFriends: d.Q - i,
                    helpdeskArticle: r
                })
              : m.intl.format(m.t.FjrXCg, {
                    numFriends: d.Q,
                    helpdeskArticle: r
                });
    },
    f = (e) => {
        let t = C(e);
        return null != t && t !== u.g2L.NOT_ELIGIBLE;
    },
    h = (e) => {
        let t = f(e),
            n = (0, c.b)('PremiumManagementSettings'),
            r = (0, i.e7)([s.Z], () => s.Z.getRecipientStatus());
        return !!t && (!!n || r.size > 0);
    },
    x = (e) => {
        let t = E(e),
            n = (0, a.wE)(r.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !n;
    },
    E = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, i.e7)([s.Z], () => s.Z.getIsSenderEligibleForIncentive());
        return t && n && r;
    },
    C = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, i.e7)([s.Z], () => s.Z.getIsFetchingReferralIncentiveEligibility()),
            a = (0, i.e7)([s.Z], () => s.Z.getSenderIncentiveState());
        return r ? u.g2L.NOT_ELIGIBLE : n && t ? a : u.g2L.NOT_ELIGIBLE;
    },
    b = (e) => {
        let t = C(e);
        return t === u.g2L.COOLDOWN || t === u.g2L.UNAPPLIED || t === u.g2L.QUALIFIED;
    },
    v = (e) => {
        let t = b(e),
            n = (0, a.wE)(r.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !n;
    },
    T = (e) => {
        let t = f(e),
            n = (0, c.b)(e),
            i = (0, a.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && n && !i;
    },
    N = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: n, referralsStatuses: i } = e;
        switch (t) {
            case u.g2L.NOT_ELIGIBLE:
                return n ? m.intl.string(m.t.M47CJS) : m.intl.string(m.t.USo4s7);
            case u.g2L.ELIGIBLE:
                if (i.sent < 2) return m.intl.formatToPlainString(m.t.md2GU1, { discountRate: g });
                if (i.redeemed === d.Q) return m.intl.string(m.t.SRJkUV);
                return m.intl.formatToPlainString(m.t.O8mswM, { discountRate: g });
            case u.g2L.QUALIFIED:
            case u.g2L.COOLDOWN:
            case u.g2L.UNAPPLIED:
                return i.redeemed === d.Q ? m.intl.string(m.t.SRJkUV) : m.intl.string(m.t.MoKnzc);
        }
    },
    I = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: n, referralsStatuses: i, isWithinCountdownRange: r } = e;
        switch (n) {
            case u.g2L.NOT_ELIGIBLE:
                return p({
                    hasSentAll: i.sent >= d.Q,
                    hasSentAtLeastOne: i.sent >= 1,
                    numSentUsers: i.sent,
                    helpdeskArticle: t
                });
            case u.g2L.ELIGIBLE:
                let a = {
                    discountRate: g,
                    learnMoreLink: t,
                    subscriptionInterval: m.intl.string(m.t.FPybU1)
                };
                if (i.redeemed <= 1) return m.intl.format(m.t.nysttb, a);
                return m.intl.format(m.t.nHuzUF, a);
            case u.g2L.QUALIFIED:
            case u.g2L.COOLDOWN:
            case u.g2L.UNAPPLIED:
                if (i.redeemed < d.Q) return m.intl.format(m.t.HGO89v, { learnMoreLink: t });
                if (!r)
                    return m.intl.format(m.t.iGlQKi, {
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: m.intl.formatToPlainString(m.t['7r7VxM'], { time: 6 })
                    });
                return m.intl.format(m.t.Kq6hc3, { learnMoreLink: t });
        }
    };
