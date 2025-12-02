n.d(t, { Z: () => N });
var a = n(780384),
    l = n(410030),
    i = n(291175),
    r = n(804413),
    s = n(474936),
    o = n(538092),
    c = n(533577),
    d = n(799974),
    u = n(264511),
    m = n(345614),
    p = n(925773),
    h = n(298342),
    x = n(761822),
    f = n(131664),
    g = n(389457),
    b = n(673252),
    v = n(869708),
    j = n(288829),
    _ = n(943323),
    y = n(958657),
    C = n(605493);
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
            light: f.Z,
        },
        [s.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: c.Z,
            light: g.Z,
        },
        [s.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: d.Z,
            light: b.Z,
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
            light: _.Z,
        },
        [s.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: h.Z,
            light: y.Z,
        },
        [s.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: x.Z,
            light: C.Z,
        },
    };
function N() {
    let e = (0, r.Z)(),
        t = (0, a.wj)((0, l.ZP)());
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
