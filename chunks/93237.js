n.d(t, {
    $q: () => _,
    F6: () => f,
    HI: () => h,
    ZL: () => m,
    eW: () => E,
    p9: () => p,
});
var r = n(442837),
    i = n(704215),
    o = n(266454),
    a = n(70956),
    s = n(709054),
    l = n(276444),
    c = n(870041),
    u = n(533525),
    d = n(388032);
function f(e) {
    let t = (e - Date.now()) / a.Z.Millis.HOUR;
    return t > 24
        ? d.intl.formatToPlainString(d.t["g9s+dH"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? d.intl.formatToPlainString(d.t.k9v339, { numHours: Math.floor(t) })
          : d.intl.formatToPlainString(d.t["/d0GmZ"], { numMinutes: Math.floor(60 * t) });
}
let _ = () => (0, o.zu)(i.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    p = () => {
        (0, o.Q3)(i.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    h = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            r = void 0 === t.redeemed_at,
            i = new Date(s.default.extractTimestamp(t.id)),
            o = new Date() >= i;
        return n && r && o;
    },
    m = () => {
        (0, o.Q3)(i.z.REFERRAL_PROGRAM_POPOVER);
    },
    g = () => (0, o.zu)(i.z.REFERRAL_PROGRAM_POPOVER),
    E = () => {
        let e = (0, u.b)("useIsReferralProgramPopoverShowable"),
            t = g(),
            n = (0, r.e7)([l.Z], () => l.Z.getReferralsRemaining()),
            i = c.ZP.useExperiment({ location: "useIsReferralProgramPopoverShowable" });
        return e && !1 === t && null !== n && n > 0 && i.cohort !== c.xI.Control;
    };
