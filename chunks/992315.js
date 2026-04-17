a.d(t, { A: () => o });
var s = a(649032),
    r = a(26508),
    n = a(881373),
    i = a(612669),
    l = a(23003);
function o(e) {
    let t = (0, n.YS)({ location: "bento_box" }).functionalityEnabled,
        a = (0, i.O9)(),
        o = (0, r.DK)(s.W.NITRO, "useBentoBoxes");
    return [
        ...(t ? [l.NI.THREE_P_PROMOTIONS] : []),
        ...(e ? [l.NI.ORB_MULTIPLIER] : []),
        ...(a ? [l.NI.PREMIUM_GROUP] : []),
        ...(o ? [l.NI.ORB_REWARDS] : []),
        l.NI.DISPLAY_NAME_STYLES,
        l.NI.CUSTOM_THEMES,
        l.NI.SERVER_PROFILES,
        l.NI.REFERRAL_PROGRAM,
    ];
}
