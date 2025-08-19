n.d(t, {
    $q: () => m,
    F6: () => p,
    HI: () => g,
    ZL: () => _,
    eW: () => h,
    p9: () => f,
});
var r = n(442837),
    i = n(704215),
    l = n(266454),
    a = n(70956),
    o = n(709054),
    s = n(276444),
    c = n(870041),
    u = n(533525),
    d = n(388032);
function p(e) {
    let t = (e - Date.now()) / a.Z.Millis.HOUR;
    return t > 24
        ? d.intl.formatToPlainString(d.t["g9s+dH"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? d.intl.formatToPlainString(d.t.k9v339, { numHours: Math.floor(t) })
          : d.intl.formatToPlainString(d.t["/d0GmZ"], { numMinutes: Math.floor(60 * t) });
}
let m = () => (0, l.zu)(i.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    f = () => {
        (0, l.Q3)(i.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    g = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            r = void 0 === t.redeemed_at,
            i = new Date(o.default.extractTimestamp(t.id)),
            l = new Date();
        return n && r && l >= i;
    },
    _ = () => {
        (0, l.Q3)(i.z.REFERRAL_PROGRAM_POPOVER);
    },
    h = () => {
        let e = c.ZP.useExperiment({ location: "useIsReferralProgramPopoverShowable" }),
            t = (0, u.b)("useIsReferralProgramPopoverShowable", e.cohort === c.xI.Control),
            n = (0, l.zu)(i.z.REFERRAL_PROGRAM_POPOVER),
            a = (0, r.e7)([s.Z], () => s.Z.getReferralsRemaining());
        return t && !1 === n && null !== a && a > 0 && e.cohort !== c.xI.Control;
    };
