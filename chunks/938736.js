n.d(t, {
    $s: function () {
        return I;
    },
    AV: function () {
        return h;
    },
    Hg: function () {
        return N;
    },
    Kn: function () {
        return b;
    },
    Nq: function () {
        return g;
    },
    TW: function () {
        return x;
    },
    pn: function () {
        return f;
    },
    uv: function () {
        return C;
    },
    vx: function () {
        return E;
    },
    wG: function () {
        return S;
    }
});
var i = n(442837),
    r = n(704215),
    s = n(605236),
    a = n(276444),
    l = n(822070),
    o = n(520540),
    c = n(533525),
    d = n(796634),
    u = n(981631),
    m = n(388032);
let g = '40%',
    h = 8,
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
    x = (e) => {
        let t = C(e);
        return null != t && t !== u.g2L.NOT_ELIGIBLE;
    },
    f = (e) => {
        let t = x(e),
            n = (0, c.b)('PremiumManagementSettings'),
            r = (0, i.e7)([a.Z], () => a.Z.getRecipientStatus());
        if (!t) return !1;
        if (!n) return !!(r.size > 0) || !1;
        return !0;
    },
    E = (e) => {
        let t = _(e),
            n = (0, s.wE)(r.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !n;
    },
    _ = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, i.e7)([a.Z], () => a.Z.getIsSenderEligibleForIncentive());
        return t && n && r;
    },
    C = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, i.e7)([a.Z], () => a.Z.getIsFetchingReferralIncentiveEligibility()),
            s = (0, i.e7)([a.Z], () => a.Z.getSenderIncentiveState());
        return r ? u.g2L.NOT_ELIGIBLE : n && t ? s : u.g2L.NOT_ELIGIBLE;
    },
    T = (e) => {
        let t = C(e);
        return t === u.g2L.COOLDOWN || t === u.g2L.UNAPPLIED || t === u.g2L.QUALIFIED;
    },
    S = (e) => {
        let t = T(e),
            n = (0, s.wE)(r.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !n;
    },
    b = (e) => {
        let t = x(e),
            n = (0, c.b)(e),
            i = (0, s.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && n && !i;
    },
    I = (e) => {
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
    N = (e) => {
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
                let s = {
                    discountRate: g,
                    learnMoreLink: t,
                    subscriptionInterval: m.intl.string(m.t.FPybU1)
                };
                if (i.redeemed <= 1) return m.intl.format(m.t.nysttb, s);
                return m.intl.format(m.t.nHuzUF, s);
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
