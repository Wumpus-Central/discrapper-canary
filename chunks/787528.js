n.d(t, {
    J: () => S,
    u: () => I
});
var r = n(848572),
    i = n(586502),
    a = n(474936),
    o = n(749472),
    s = n(860691),
    l = n(110149),
    c = n(64649),
    u = n(166870),
    d = n(79914),
    f = n(634071),
    _ = n(557821),
    p = n(379060),
    h = n(904344),
    m = n(871597),
    g = n(259869),
    E = n(993341),
    b = n(289248),
    y = n(340113),
    O = n(438802);
let v = {
        [a.VU.PREMIUM_TENURE_1_MONTH]: {
            standard: o,
            ambient: p.Z
        },
        [a.VU.PREMIUM_TENURE_3_MONTH]: {
            standard: _,
            ambient: h.Z
        },
        [a.VU.PREMIUM_TENURE_6_MONTH]: {
            standard: c,
            ambient: m.Z
        },
        [a.VU.PREMIUM_TENURE_12_MONTH]: {
            standard: d,
            ambient: g.Z
        },
        [a.VU.PREMIUM_TENURE_24_MONTH]: {
            standard: s,
            ambient: E.Z
        },
        [a.VU.PREMIUM_TENURE_36_MONTH]: {
            standard: l,
            ambient: b.Z
        },
        [a.VU.PREMIUM_TENURE_60_MONTH]: {
            standard: f,
            ambient: y.Z
        },
        [a.VU.PREMIUM_TENURE_72_MONTH]: {
            standard: u,
            ambient: O.Z
        }
    },
    I = () => {
        let e = (0, r.Rw)(),
            t = (0, i.Z)();
        return null != e ? S(e.id, { ambient: t }) : null;
    };
function S(e) {
    let { ambient: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = v[e];
    return t ? n.ambient : n.standard;
}
