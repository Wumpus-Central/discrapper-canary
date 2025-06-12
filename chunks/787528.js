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
    _ = n(557821),
    f = n(379060),
    p = n(904344),
    h = n(871597),
    m = n(259869),
    g = n(993341),
    E = n(289248),
    b = n(340113),
    y = n(438802);
let O = {
        [i.VU.PREMIUM_TENURE_1_MONTH]: {
            standard: a,
            ambient: f.Z
        },
        [i.VU.PREMIUM_TENURE_3_MONTH]: {
            standard: _,
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
