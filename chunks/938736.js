s.d(t, {
    $s: function () {
        return j;
    },
    AV: function () {
        return x;
    },
    Hg: function () {
        return O;
    },
    Kn: function () {
        return E;
    },
    Nq: function () {
        return f;
    },
    TW: function () {
        return C;
    },
    pn: function () {
        return _;
    },
    uv: function () {
        return v;
    },
    vx: function () {
        return m;
    },
    wG: function () {
        return A;
    }
});
var n = s(442837),
    r = s(704215),
    i = s(605236),
    a = s(276444),
    o = s(822070),
    l = s(520540),
    c = s(533525),
    u = s(796634),
    d = s(981631),
    p = s(388032);
let f = '40%',
    x = 8,
    g = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: s, numSentUsers: n, helpdeskArticle: r } = e;
        return t
            ? p.intl.format(p.t['3OYZMT'], { helpdeskArticle: r })
            : s
              ? p.intl.format(p.t.EkWiZm, {
                    numFriends: u.Q - n,
                    helpdeskArticle: r
                })
              : p.intl.format(p.t.FjrXCg, {
                    numFriends: u.Q,
                    helpdeskArticle: r
                });
    },
    C = (e) => {
        let t = v(e);
        return null != t && t !== d.g2L.NOT_ELIGIBLE;
    },
    _ = (e) => {
        let t = C(e),
            s = (0, c.b)('PremiumManagementSettings'),
            r = (0, n.e7)([a.Z], () => a.Z.getRecipientStatus());
        if (!t) return !1;
        if (!s) return !!(r.size > 0) || !1;
        return !0;
    },
    m = (e) => {
        let t = h(e),
            s = (0, i.wE)(r.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !s;
    },
    h = (e) => {
        let { enabled: t } = l.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: s } = o.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, n.e7)([a.Z], () => a.Z.getIsSenderEligibleForIncentive());
        return t && s && r;
    },
    v = (e) => {
        let { enabled: t } = l.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: s } = o.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, n.e7)([a.Z], () => a.Z.getIsFetchingReferralIncentiveEligibility()),
            i = (0, n.e7)([a.Z], () => a.Z.getSenderIncentiveState());
        return r ? d.g2L.NOT_ELIGIBLE : s && t ? i : d.g2L.NOT_ELIGIBLE;
    },
    L = (e) => {
        let t = v(e);
        return t === d.g2L.COOLDOWN || t === d.g2L.UNAPPLIED || t === d.g2L.QUALIFIED;
    },
    A = (e) => {
        let t = L(e),
            s = (0, i.wE)(r.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !s;
    },
    E = (e) => {
        let t = C(e),
            s = (0, c.b)(e),
            n = (0, i.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && s && !n;
    },
    j = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: s, referralsStatuses: n } = e;
        switch (t) {
            case d.g2L.NOT_ELIGIBLE:
                return s ? p.intl.string(p.t.M47CJS) : p.intl.string(p.t.USo4s7);
            case d.g2L.ELIGIBLE:
                if (n.sent < 2) return p.intl.formatToPlainString(p.t.md2GU1, { discountRate: f });
                if (n.redeemed === u.Q) return p.intl.string(p.t.SRJkUV);
                return p.intl.formatToPlainString(p.t.O8mswM, { discountRate: f });
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
                return n.redeemed === u.Q ? p.intl.string(p.t.SRJkUV) : p.intl.string(p.t.MoKnzc);
        }
    },
    O = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: s, referralsStatuses: n, isWithinCountdownRange: r } = e;
        switch (s) {
            case d.g2L.NOT_ELIGIBLE:
                return g({
                    hasSentAll: n.sent >= u.Q,
                    hasSentAtLeastOne: n.sent >= 1,
                    numSentUsers: n.sent,
                    helpdeskArticle: t
                });
            case d.g2L.ELIGIBLE:
                let i = {
                    discountRate: f,
                    learnMoreLink: t,
                    subscriptionInterval: p.intl.string(p.t.FPybU1)
                };
                if (n.redeemed <= 1) return p.intl.format(p.t.nysttb, i);
                return p.intl.format(p.t.nHuzUF, i);
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
                if (n.redeemed < u.Q) return p.intl.format(p.t.HGO89v, { learnMoreLink: t });
                if (!r)
                    return p.intl.format(p.t.iGlQKi, {
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: p.intl.formatToPlainString(p.t['7r7VxM'], { time: 6 })
                    });
                return p.intl.format(p.t.Kq6hc3, { learnMoreLink: t });
        }
    };
