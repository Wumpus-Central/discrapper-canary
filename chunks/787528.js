n.d(t, {
    J: () => v,
    u: () => O,
});
var r = n(474936),
    i = n(749472),
    a = n(860691),
    o = n(110149),
    s = n(64649),
    l = n(166870),
    c = n(79914),
    u = n(634071),
    d = n(557821),
    f = n(396587),
    p = n(73187),
    _ = n(150285),
    m = n(818546),
    h = n(507804),
    g = n(987658),
    E = n(522990),
    b = n(582971);
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
            standard: a,
            ambient: h.Z,
        },
        [r.VU.PREMIUM_TENURE_36_MONTH]: {
            standard: o,
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
