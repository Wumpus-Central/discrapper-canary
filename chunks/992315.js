a.d(t, { A: () => l });
var s = a(649032),
    r = a(26508),
    n = a(398523),
    i = a(881373),
    o = a(612669),
    d = a(23003);
function l(e) {
    let t = (0, i.YS)({ location: "bento_box" }).functionalityEnabled,
        { enabled: a } = n.Ay.useConfig({ location: "bento_box" }),
        l = (0, o.O9)(),
        c = (0, r.DK)(s.W.NITRO, "useBentoBoxes");
    return [
        ...(t || a ? [d.NI.THREE_P_PROMOTIONS] : []),
        ...(c && e ? [d.NI.COMBINED_ORBS] : []),
        ...(l ? [d.NI.PREMIUM_GROUP] : []),
        d.NI.DISPLAY_NAME_STYLES,
        d.NI.CUSTOM_THEMES,
        d.NI.SERVER_PROFILES,
        d.NI.REFERRAL_PROGRAM,
    ];
}
