n.d(t, {
    Fe: () => E,
    O8: () => S,
    V: () => I,
    tV: () => T,
}),
    n(35282);
var r = n(970683),
    i = n(481060),
    a = n(505905),
    o = n(981631),
    s = n(388032),
    l = n(324349),
    c = n(829290),
    u = n(136779),
    d = n(33346),
    f = n(857042),
    _ = n(558532),
    p = n(105196),
    h = n(346554),
    m = n(444305);
let g = [null, null];
function E(e) {
    return null == e ? g : e.split(":");
}
let b = () => ({
        [a.tN.CHILLING]: {
            title: s.intl.string(s.t["vkpn7+"]),
            icon: f,
        },
        [a.tN.GAMING]: {
            title: s.intl.string(s.t.lZslwM),
            icon: _,
        },
        [a.tN.FOCUSING]: {
            title: s.intl.string(s.t.b6AscH),
            icon: h,
        },
        [a.tN.BRB]: {
            title: s.intl.string(s.t["30yqZW"]),
            icon: d,
        },
        [a.tN.EATING]: {
            title: s.intl.string(s.t.UVSEhY),
            icon: p,
        },
        [a.tN.WATCHING]: {
            title: s.intl.string(s.t.di6IFx),
            icon: m,
        },
    }),
    y = () => ({
        [a.tN.BRB]: {
            title: s.intl.string(s.t.fFTJTE),
            icon: u,
        },
        [a.tN.CHILLING]: {
            title: s.intl.string(s.t.vybY9f),
            icon: r.s_,
        },
        [a.tN.GAMING]: {
            title: s.intl.string(s.t.wvWdTU),
            icon: r.mB,
        },
        [a.tN.WATCHING]: {
            title: s.intl.string(s.t.s8xFaG),
            icon: c,
        },
        [a.tN.FOCUSING]: {
            title: s.intl.string(s.t.D5eCT0),
            icon: r.FG,
        },
    }),
    O = () => ({
        [a.tN.BRB]: {
            title: s.intl.string(s.t.fFTJTE),
            icon: i.GsA,
        },
        [a.tN.CHILLING]: {
            title: s.intl.string(s.t.vybY9f),
            icon: l,
        },
        [a.tN.GAMING]: {
            title: s.intl.string(s.t.wvWdTU),
            icon: i.iWm,
        },
        [a.tN.WATCHING]: {
            title: s.intl.string(s.t.s8xFaG),
            icon: i.FLu,
        },
        [a.tN.FOCUSING]: {
            title: s.intl.string(s.t.D5eCT0),
            icon: i.Xbz,
        },
    }),
    v = () => ({
        [a.tN.BRB]: {
            title: s.intl.string(s.t.fFTJTE),
            emoji: {
                id: void 0,
                name: "\uD83D\uDCA8",
            },
        },
        [a.tN.CHILLING]: {
            title: s.intl.string(s.t.vybY9f),
            emoji: {
                id: void 0,
                name: "\uD83C\uDF68",
            },
        },
        [a.tN.GAMING]: {
            title: s.intl.string(s.t.wvWdTU),
            emoji: {
                id: void 0,
                name: "\u2694️",
            },
        },
        [a.tN.WATCHING]: {
            title: s.intl.string(s.t.s8xFaG),
            emoji: {
                id: void 0,
                name: "\uD83C\uDF7F",
            },
        },
        [a.tN.FOCUSING]: {
            title: s.intl.string(s.t.D5eCT0),
            emoji: {
                id: void 0,
                name: "\uD83E\uDDE0",
            },
        },
    }),
    I = (e) => {
        switch (e) {
            case "original":
            default:
                return b();
            case "illocons":
                return y();
            case "icons":
                return O();
            case "twemoji":
                return v();
        }
    },
    T = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "original";
        if ((null == e ? void 0 : e.type) !== o.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
        let n = E(e.state),
            r = n[0];
        if (r === a.tN.CUSTOM) return null;
        let i = I(n.length > 1 ? n[1] : t);
        return r in i ? i[r] : null;
    },
    S = function (e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "original";
        return (null == e ? void 0 : e.type) !== o.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null
            ? null
            : E(e.state)[0] === a.tN.CUSTOM
              ? null == e
                  ? void 0
                  : e.details
              : null == (t = T(e, n))
                ? void 0
                : t.title;
    };
