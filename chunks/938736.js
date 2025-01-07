n.d(t, {
    $s: function () {
        return N;
    },
    AV: function () {
        return f;
    },
    Hg: function () {
        return I;
    },
    Kn: function () {
        return T;
    },
    Nq: function () {
        return m;
    },
    TW: function () {
        return _;
    },
    pn: function () {
        return h;
    },
    uv: function () {
        return b;
    },
    vx: function () {
        return x;
    },
    wG: function () {
        return v;
    }
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
    g = n(388032);
let m = '40%',
    f = 8,
    p = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: i, helpdeskArticle: r } = e;
        return t
            ? g.intl.format(g.t['3OYZMT'], { helpdeskArticle: r })
            : n
              ? g.intl.format(g.t.EkWiZm, {
                    numFriends: d.Q - i,
                    helpdeskArticle: r
                })
              : g.intl.format(g.t.FjrXCg, {
                    numFriends: d.Q,
                    helpdeskArticle: r
                });
    },
    _ = (e) => {
        let t = b(e);
        return null != t && t !== u.g2L.NOT_ELIGIBLE;
    },
    h = (e) => {
        let t = _(e),
            n = (0, c.b)('PremiumManagementSettings'),
            r = (0, i.e7)([s.Z], () => s.Z.getRecipientStatus());
        if (!t) return !1;
        if (!n) return !!(r.size > 0) || !1;
        return !0;
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
    b = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, i.e7)([s.Z], () => s.Z.getIsFetchingReferralIncentiveEligibility()),
            a = (0, i.e7)([s.Z], () => s.Z.getSenderIncentiveState());
        return r ? u.g2L.NOT_ELIGIBLE : n && t ? a : u.g2L.NOT_ELIGIBLE;
    },
    C = (e) => {
        let t = b(e);
        return t === u.g2L.COOLDOWN || t === u.g2L.UNAPPLIED || t === u.g2L.QUALIFIED;
    },
    v = (e) => {
        let t = C(e),
            n = (0, a.wE)(r.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !n;
    },
    T = (e) => {
        let t = _(e),
            n = (0, c.b)(e),
            i = (0, a.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && n && !i;
    },
    N = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: n, referralsStatuses: i } = e;
        switch (t) {
            case u.g2L.NOT_ELIGIBLE:
                return n ? g.intl.string(g.t.M47CJS) : g.intl.string(g.t.USo4s7);
            case u.g2L.ELIGIBLE:
                if (i.sent < 2) return g.intl.formatToPlainString(g.t.md2GU1, { discountRate: m });
                if (i.redeemed === d.Q) return g.intl.string(g.t.SRJkUV);
                return g.intl.formatToPlainString(g.t.O8mswM, { discountRate: m });
            case u.g2L.QUALIFIED:
            case u.g2L.COOLDOWN:
            case u.g2L.UNAPPLIED:
                return i.redeemed === d.Q ? g.intl.string(g.t.SRJkUV) : g.intl.string(g.t.MoKnzc);
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
                    discountRate: m,
                    learnMoreLink: t,
                    subscriptionInterval: g.intl.string(g.t.FPybU1)
                };
                if (i.redeemed <= 1) return g.intl.format(g.t.nysttb, a);
                return g.intl.format(g.t.nHuzUF, a);
            case u.g2L.QUALIFIED:
            case u.g2L.COOLDOWN:
            case u.g2L.UNAPPLIED:
                if (i.redeemed < d.Q) return g.intl.format(g.t.HGO89v, { learnMoreLink: t });
                if (!r)
                    return g.intl.format(g.t.iGlQKi, {
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: g.intl.formatToPlainString(g.t['7r7VxM'], { time: 6 })
                    });
                return g.intl.format(g.t.Kq6hc3, { learnMoreLink: t });
        }
    };
