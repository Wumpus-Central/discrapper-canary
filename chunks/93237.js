n.d(t, {
    $q: () => f,
    F6: () => d,
    HI: () => _,
    ZL: () => m,
    eW: () => g,
    p9: () => p,
});
var r = n(442837),
    i = n(704215),
    a = n(266454),
    o = n(70956),
    s = n(709054),
    l = n(276444),
    c = n(533525),
    u = n(388032);
function d(e) {
    let t = (e - Date.now()) / o.Z.Millis.HOUR;
    return t > 24
        ? u.intl.formatToPlainString(u.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? u.intl.formatToPlainString(u.t.k9v33y, { numHours: Math.floor(t) })
          : u.intl.formatToPlainString(u.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
let f = () => (0, a.zu)(i.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    p = () => {
        (0, a.Q3)(i.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    _ = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            r = void 0 === t.redeemed_at,
            i = new Date(s.default.extractTimestamp(t.id)),
            a = new Date() >= i;
        return n && r && a;
    },
    m = () => {
        (0, a.Q3)(i.z.REFERRAL_PROGRAM_POPOVER);
    },
    h = () => (0, a.zu)(i.z.REFERRAL_PROGRAM_POPOVER),
    g = () => {
        let e = (0, c.b)(!1),
            t = h(),
            n = (0, r.e7)([l.Z], () => l.Z.getReferralsRemaining());
        return e && !1 === t && null !== n && n > 0;
    };
