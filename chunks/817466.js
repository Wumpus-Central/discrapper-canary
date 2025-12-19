n.d(t, { Z: () => T });
var a = n(780384),
    r = n(410030),
    i = n(291175),
    l = n(804413),
    s = n(474936),
    o = n(337968),
    c = n(511581),
    d = n(980775),
    u = n(151741),
    m = n(541078),
    p = n(615975),
    h = n(299283),
    f = n(110314),
    x = n(52704),
    b = n(239783),
    g = n(154637),
    v = n(717480),
    j = n(113609),
    y = n(459448),
    C = n(988866),
    _ = n(353234);
let S = {
        [s.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: " #D76C1F, #F79C53",
            light: " #8E2A0B, #D4681C",
        },
        [s.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: " #8F9E9E, #C0CBD1",
            light: " #53555F, #697979",
        },
        [s.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: " #ED8200, #FFCE46",
            light: " #744400, #CC7000",
        },
        [s.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: " #36AAFF, #7BE7CB",
            light: " #006394, #0089EB",
        },
        [s.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: " #8670FF, #C2BDFF",
            light: " #5423CC, #8670FF",
        },
        [s.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: " #009423, #67FF33",
            light: " #005C15, #009E25",
        },
        [s.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: " #E83068, #FF8F70",
            light: " #881141, #DD1852",
        },
        [s.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: " #829AE8, #DDB4FF, #A2D6FF",
            light: " #6881D4, #956CB8, #5491A0",
        },
    },
    E = {
        [s.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: o.Z,
            light: x.Z,
        },
        [s.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: c.Z,
            light: b.Z,
        },
        [s.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: d.Z,
            light: g.Z,
        },
        [s.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: u.Z,
            light: v.Z,
        },
        [s.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: m.Z,
            light: j.Z,
        },
        [s.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: p.Z,
            light: y.Z,
        },
        [s.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: h.Z,
            light: C.Z,
        },
        [s.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: f.Z,
            light: _.Z,
        },
    };
function T() {
    let e = (0, l.Z)(),
        t = (0, a.wj)((0, r.ZP)());
    if (!e) return null;
    let n = S[e],
        o = E[e],
        c = {
            currentBadge: (0, i.fv)(e),
            currentBadgeTextGradient: t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light,
            levelUpVideoSrc: t ? (null == o ? void 0 : o.dark) : null == o ? void 0 : o.light,
        },
        d = s.Qh.indexOf(e);
    if (d > 0) {
        let e = s.Qh[d - 1],
            n = S[e];
        (c.prevBadge = (0, i.fv)(e)),
            (c.prevBadgeTextGradient = t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light);
    }
    return c;
}
