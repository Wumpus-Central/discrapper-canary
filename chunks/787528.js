n.d(t, {
    J: () => v,
    u: () => O,
});
var r = n(474936),
    i = n(749472),
    o = n(860691),
    a = n(110149),
    s = n(64649),
    l = n(166870),
    c = n(79914),
    u = n(634071),
    d = n(557821),
    f = n(111301),
    p = n(841264),
    _ = n(678579),
    m = n(545556),
    h = n(684868),
    g = n(971605),
    E = n(16222),
    b = n(347842);
let y = {
        [r.VU.PREMIUM_TENURE_1_MONTH]: {
            standard: i,
            ambient: f.Z,
        },
        [r.VU.PREMIUM_TENURE_3_MONTH]: {
            standard: d,
            ambient: p.Z,
        },
        [r.VU.PREMIUM_TENURE_6_MONTH]: {
            standard: s,
            ambient: _.Z,
        },
        [r.VU.PREMIUM_TENURE_12_MONTH]: {
            standard: c,
            ambient: m.Z,
        },
        [r.VU.PREMIUM_TENURE_24_MONTH]: {
            standard: o,
            ambient: h.Z,
        },
        [r.VU.PREMIUM_TENURE_36_MONTH]: {
            standard: a,
            ambient: g.Z,
        },
        [r.VU.PREMIUM_TENURE_60_MONTH]: {
            standard: u,
            ambient: E.Z,
        },
        [r.VU.PREMIUM_TENURE_72_MONTH]: {
            standard: l,
            ambient: b.Z,
        },
    },
    O = function (e) {
        let { ambient: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return null != e ? v(e, { ambient: t }) : null;
    };
function v(e) {
    let { ambient: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = y[e];
    return t ? n.ambient : n.standard;
}
