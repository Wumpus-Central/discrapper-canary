n.d(t, {
    $q: () => c,
    F6: () => l,
    HI: () => d,
    p9: () => u
});
var r = n(704215),
    i = n(266454),
    o = n(70956),
    a = n(709054),
    s = n(388032);
function l(e) {
    let t = (e - Date.now()) / o.Z.Millis.HOUR;
    return t > 24 ? s.intl.formatToPlainString(s.t['g9s+dH'], { numDays: Math.floor(t / 24) }) : t >= 1 ? s.intl.formatToPlainString(s.t.k9v339, { numHours: Math.floor(t) }) : s.intl.formatToPlainString(s.t['/d0GmZ'], { numMinutes: Math.floor(60 * t) });
}
let c = () => (0, i.zu)(r.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    u = () => {
        (0, i.Q3)(r.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    d = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            r = void 0 === t.redeemed_at,
            i = new Date(a.default.extractTimestamp(t.id)),
            o = new Date() >= i;
        return n && r && o;
    };
