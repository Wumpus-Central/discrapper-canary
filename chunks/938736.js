n.d(t, {
    $s: () => O,
    AV: () => p,
    Hg: () => v,
    Kn: () => C,
    Nq: () => g,
    TW: () => f,
    pn: () => b,
    uv: () => _,
    vx: () => N,
    wG: () => j
});
var r = n(442837),
    i = n(704215),
    s = n(605236),
    a = n(276444),
    l = n(822070),
    o = n(520540),
    c = n(533525),
    d = n(796634),
    u = n(981631),
    m = n(388032);
let g = '40%',
    p = 8,
    h = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: r, helpdeskArticle: i } = e;
        return t
            ? m.NW.format(m.t['3OYZMT'], { helpdeskArticle: i })
            : n
              ? m.NW.format(m.t.EkWiZm, {
                    numFriends: d.Q - r,
                    helpdeskArticle: i
                })
              : m.NW.format(m.t.FjrXCg, {
                    numFriends: d.Q,
                    helpdeskArticle: i
                });
    },
    f = (e) => {
        let t = _(e);
        return null != t && t !== u.g2L.NOT_ELIGIBLE;
    },
    b = (e) => {
        let t = f(e),
            n = (0, c.b)('PremiumManagementSettings'),
            i = (0, r.e7)([a.Z], () => a.Z.getRecipientStatus());
        return !!t && (!!n || i.size > 0);
    },
    N = (e) => {
        let t = x(e),
            n = (0, s.wE)(i.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !n;
    },
    x = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            i = (0, r.e7)([a.Z], () => a.Z.getIsSenderEligibleForIncentive());
        return t && n && i;
    },
    _ = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            i = (0, r.e7)([a.Z], () => a.Z.getIsFetchingReferralIncentiveEligibility()),
            s = (0, r.e7)([a.Z], () => a.Z.getSenderIncentiveState());
        return i ? u.g2L.NOT_ELIGIBLE : n && t ? s : u.g2L.NOT_ELIGIBLE;
    },
    E = (e) => {
        let t = _(e);
        return t === u.g2L.COOLDOWN || t === u.g2L.UNAPPLIED || t === u.g2L.QUALIFIED;
    },
    j = (e) => {
        let t = E(e),
            n = (0, s.wE)(i.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !n;
    },
    C = (e) => {
        let t = f(e),
            n = (0, c.b)(e),
            r = (0, s.wE)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && n && !r;
    },
    O = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: n, referralsStatuses: r } = e;
        switch (t) {
            case u.g2L.NOT_ELIGIBLE:
                return n ? m.NW.string(m.t.M47CJS) : m.NW.string(m.t.USo4s7);
            case u.g2L.ELIGIBLE:
                if (r.sent < 2) return m.NW.formatToPlainString(m.t.md2GU1, { discountRate: g });
                if (r.redeemed === d.Q) return m.NW.string(m.t.SRJkUV);
                return m.NW.formatToPlainString(m.t.O8mswM, { discountRate: g });
            case u.g2L.QUALIFIED:
            case u.g2L.COOLDOWN:
            case u.g2L.UNAPPLIED:
                return r.redeemed === d.Q ? m.NW.string(m.t.SRJkUV) : m.NW.string(m.t.MoKnzc);
        }
    },
    v = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: n, referralsStatuses: r, isWithinCountdownRange: i } = e;
        switch (n) {
            case u.g2L.NOT_ELIGIBLE:
                return h({
                    hasSentAll: r.sent >= d.Q,
                    hasSentAtLeastOne: r.sent >= 1,
                    numSentUsers: r.sent,
                    helpdeskArticle: t
                });
            case u.g2L.ELIGIBLE:
                let s = {
                    discountRate: g,
                    learnMoreLink: t,
                    subscriptionInterval: m.NW.string(m.t.FPybU1)
                };
                if (r.redeemed <= 1) return m.NW.format(m.t.nysttb, s);
                return m.NW.format(m.t.nHuzUF, s);
            case u.g2L.QUALIFIED:
            case u.g2L.COOLDOWN:
            case u.g2L.UNAPPLIED:
                if (r.redeemed < d.Q) return m.NW.format(m.t.HGO89v, { learnMoreLink: t });
                if (!i)
                    return m.NW.format(m.t.iGlQKi, {
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: m.NW.formatToPlainString(m.t['7r7VxM'], { time: 6 })
                    });
                return m.NW.format(m.t.Kq6hc3, { learnMoreLink: t });
        }
    };
