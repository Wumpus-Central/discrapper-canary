a.d(t, { A: () => d });
var r = a(649032),
    s = a(26508),
    n = a(398523),
    i = a(881373),
    o = a(612669),
    l = a(23003);
function d(e) {
    let t = (0, i.YS)({ location: "bento_box" }).functionalityEnabled,
        { enabled: a } = n.Ay.useConfig({ location: "bento_box" }),
        d = (0, o.O9)(),
        c = (0, s.DK)(r.W.NITRO, "useBentoBoxes"),
        p = c && e;
    return [
        ...(t || a ? [l.NI.THREE_P_PROMOTIONS] : []),
        ...(p ? [l.NI.COMBINED_ORBS] : []),
        ...(!p && e ? [l.NI.ORB_MULTIPLIER] : []),
        ...(d ? [l.NI.PREMIUM_GROUP] : []),
        ...(!p && c ? [l.NI.ORB_REWARDS] : []),
        l.NI.DISPLAY_NAME_STYLES,
        l.NI.CUSTOM_THEMES,
        l.NI.SERVER_PROFILES,
        l.NI.REFERRAL_PROGRAM,
    ];
}
