n.d(t, {
    $q: () => u,
    F6: () => c,
    HI: () => p,
    p9: () => d
});
var r = n(704215),
    i = n(605236),
    l = n(70956),
    a = n(709054),
    o = n(304480),
    s = n(388032);
function c(e) {
    let t = (e - Date.now()) / l.Z.Millis.HOUR;
    return t > 24 ? s.intl.formatToPlainString(s.t['g9s+dH'], { numDays: Math.floor(t / 24) }) : t >= 1 ? s.intl.formatToPlainString(s.t.k9v339, { numHours: Math.floor(t) }) : s.intl.formatToPlainString(s.t['/d0GmZ'], { numMinutes: Math.floor(60 * t) });
}
let u = () => (0, i.un)(r.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    d = () => {
        (0, i.EW)(r.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    p = (e) => {
        let { trialOffer: t } = e,
            n = o.Z.useExperiment({ location: 'useIsReferralProgramBadgeShowable' });
        if (!1 === n.enabled || null == t) return !1;
        let r = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            l = new Date(a.default.extractTimestamp(t.id));
        l.setDate(l.getDate() + n.nDelayDays);
        let s = new Date() >= l;
        return r && i && s;
    };
