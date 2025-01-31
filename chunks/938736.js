n.d(t, {
    $s: () => S,
    AV: () => g,
    Hg: () => b,
    Kn: () => I,
    Nq: () => h,
    TW: () => x,
    pn: () => p,
    uv: () => f,
    vx: () => E,
    wG: () => N
});
var i = n(442837),
    s = n(704215),
    r = n(605236),
    l = n(276444),
    a = n(822070),
    o = n(520540),
    c = n(533525),
    d = n(796634),
    u = n(981631),
    m = n(388032);
let h = '40%',
    g = 8,
    _ = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: i, helpdeskArticle: s } = e;
        return t
            ? m.intl.format(m.t['3OYZMT'], { helpdeskArticle: s })
            : n
              ? m.intl.format(m.t.EkWiZm, {
                    numFriends: d.Q - i,
                    helpdeskArticle: s
                })
              : m.intl.format(m.t.FjrXCg, {
                    numFriends: d.Q,
                    helpdeskArticle: s
                });
    },
    x = (e) => {
        let t = f(e);
        return null != t && t !== u.g2L.NOT_ELIGIBLE;
    },
    p = (e) => {
        let t = x(e),
            n = (0, c.b)('PremiumManagementSettings'),
            s = (0, i.e7)([l.Z], () => l.Z.getRecipientStatus());
        return !!t && (!!n || s.size > 0);
    },
    E = (e) => {
        let t = C(e),
            n = (0, r.wE)(s.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !n;
    },
    C = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = a.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            s = (0, i.e7)([l.Z], () => l.Z.getIsSenderEligibleForIncentive());
        return t && n && s;
    },
    f = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = a.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            s = (0, i.e7)([l.Z], () => l.Z.getIsFetchingReferralIncentiveEligibility()),
            r = (0, i.e7)([l.Z], () => l.Z.getSenderIncentiveState());
        return s ? u.g2L.NOT_ELIGIBLE : n && t ? r : u.g2L.NOT_ELIGIBLE;
    },
    T = (e) => {
        let t = f(e);
        return t === u.g2L.COOLDOWN || t === u.g2L.UNAPPLIED || t === u.g2L.QUALIFIED;
    },
    N = (e) => {
        let t = T(e),
            n = (0, r.wE)(s.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !n;
    },
    I = (e) => {
        let t = x(e),
            n = (0, c.b)(e),
            i = (0, r.wE)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && n && !i;
    },
    S = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: n, referralsStatuses: i } = e;
        switch (t) {
            case u.g2L.NOT_ELIGIBLE:
                return n ? m.intl.string(m.t.M47CJS) : m.intl.string(m.t.USo4s7);
            case u.g2L.ELIGIBLE:
                if (i.sent < 2) return m.intl.formatToPlainString(m.t.md2GU1, { discountRate: h });
                if (i.redeemed === d.Q) return m.intl.string(m.t.SRJkUV);
                return m.intl.formatToPlainString(m.t.O8mswM, { discountRate: h });
            case u.g2L.QUALIFIED:
            case u.g2L.COOLDOWN:
            case u.g2L.UNAPPLIED:
                return i.redeemed === d.Q ? m.intl.string(m.t.SRJkUV) : m.intl.string(m.t.MoKnzc);
        }
    },
    b = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: n, referralsStatuses: i, isWithinCountdownRange: s } = e;
        switch (n) {
            case u.g2L.NOT_ELIGIBLE:
                return _({
                    hasSentAll: i.sent >= d.Q,
                    hasSentAtLeastOne: i.sent >= 1,
                    numSentUsers: i.sent,
                    helpdeskArticle: t
                });
            case u.g2L.ELIGIBLE:
                let r = {
                    discountRate: h,
                    learnMoreLink: t,
                    subscriptionInterval: m.intl.string(m.t.FPybU1)
                };
                if (i.redeemed <= 1) return m.intl.format(m.t.nysttb, r);
                return m.intl.format(m.t.nHuzUF, r);
            case u.g2L.QUALIFIED:
            case u.g2L.COOLDOWN:
            case u.g2L.UNAPPLIED:
                if (i.redeemed < d.Q) return m.intl.format(m.t.HGO89v, { learnMoreLink: t });
                if (!s)
                    return m.intl.format(m.t.iGlQKi, {
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: m.intl.formatToPlainString(m.t['7r7VxM'], { time: 6 })
                    });
                return m.intl.format(m.t.Kq6hc3, { learnMoreLink: t });
        }
    };
