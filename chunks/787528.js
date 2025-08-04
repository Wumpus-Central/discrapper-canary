n.d(t, {
    J: () => I,
    u: () => v
});
var r = n(586502),
    i = n(474936),
    a = n(749472),
    o = n(860691),
    s = n(110149),
    l = n(64649),
    c = n(166870),
    u = n(79914),
    d = n(634071),
    f = n(557821),
    _ = n(111301),
    p = n(841264),
    h = n(678579),
    m = n(545556),
    g = n(684868),
    E = n(971605),
    b = n(16222),
    y = n(347842);
let O = {
        [i.VU.PREMIUM_TENURE_1_MONTH]: {
            standard: a,
            ambient: _.Z
        },
        [i.VU.PREMIUM_TENURE_3_MONTH]: {
            standard: f,
            ambient: p.Z
        },
        [i.VU.PREMIUM_TENURE_6_MONTH]: {
            standard: l,
            ambient: h.Z
        },
        [i.VU.PREMIUM_TENURE_12_MONTH]: {
            standard: u,
            ambient: m.Z
        },
        [i.VU.PREMIUM_TENURE_24_MONTH]: {
            standard: o,
            ambient: g.Z
        },
        [i.VU.PREMIUM_TENURE_36_MONTH]: {
            standard: s,
            ambient: E.Z
        },
        [i.VU.PREMIUM_TENURE_60_MONTH]: {
            standard: d,
            ambient: b.Z
        },
        [i.VU.PREMIUM_TENURE_72_MONTH]: {
            standard: c,
            ambient: y.Z
        }
    },
    v = (e) => {
        let t = (0, r.Z)();
        return null != e ? I(e, { ambient: t }) : null;
    };
function I(e) {
    let { ambient: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = O[e];
    return t ? n.ambient : n.standard;
}
