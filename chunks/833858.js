n.d(t, {
    Fe: () => h,
    O8: () => O,
    V: () => b,
    tV: () => y,
}),
    n(35282);
var r = n(970683),
    i = n(505905),
    a = n(981631),
    o = n(388032),
    s = n(829290),
    l = n(136779),
    c = n(33346),
    u = n(857042),
    d = n(558532),
    f = n(346554),
    _ = n(444305);
let p = [null, null];
function h(e) {
    return null == e ? p : e.split(":");
}
let m = () => ({
        [i.tN.CHILLING]: {
            title: o.intl.string(o.t["vkpn7+"]),
            icon: u,
        },
        [i.tN.GAMING]: {
            title: o.intl.string(o.t.lZslwM),
            icon: d,
        },
        [i.tN.FOCUSING]: {
            title: o.intl.string(o.t.b6AscH),
            icon: f,
        },
        [i.tN.BRB]: {
            title: o.intl.string(o.t["30yqZW"]),
            icon: c,
        },
        [i.tN.WATCHING]: {
            title: o.intl.string(o.t.di6IFx),
            icon: _,
        },
    }),
    g = () => ({
        [i.tN.BRB]: {
            title: o.intl.string(o.t.fFTJTE),
            icon: l,
        },
        [i.tN.CHILLING]: {
            title: o.intl.string(o.t.vybY9f),
            icon: r.s_,
        },
        [i.tN.GAMING]: {
            title: o.intl.string(o.t.wvWdTU),
            icon: r.mB,
        },
        [i.tN.WATCHING]: {
            title: o.intl.string(o.t.s8xFaG),
            icon: s,
        },
        [i.tN.FOCUSING]: {
            title: o.intl.string(o.t.D5eCT0),
            icon: r.Nl,
        },
    }),
    E = () => ({
        [i.tN.BRB]: {
            title: o.intl.string(o.t.fFTJTE),
            emoji: {
                id: void 0,
                name: "\uD83D\uDCA8",
            },
        },
        [i.tN.CHILLING]: {
            title: o.intl.string(o.t.vybY9f),
            emoji: {
                id: void 0,
                name: "\uD83C\uDF68",
            },
        },
        [i.tN.GAMING]: {
            title: o.intl.string(o.t.wvWdTU),
            emoji: {
                id: void 0,
                name: "\u2694️",
            },
        },
        [i.tN.WATCHING]: {
            title: o.intl.string(o.t.s8xFaG),
            emoji: {
                id: void 0,
                name: "\uD83C\uDF7F",
            },
        },
        [i.tN.FOCUSING]: {
            title: o.intl.string(o.t.D5eCT0),
            emoji: {
                id: void 0,
                name: "\uD83E\uDDE0",
            },
        },
    }),
    b = (e) => {
        switch (e) {
            case "original":
            default:
                return m();
            case "illocons":
                return g();
            case "twemoji":
                return E();
        }
    },
    y = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "original";
        if ((null == e ? void 0 : e.type) !== a.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
        let n = h(e.state),
            r = n[0];
        if (r === i.tN.CUSTOM) return null;
        let o = b(n.length > 1 ? n[1] : t);
        return r in o ? o[r] : null;
    },
    O = function (e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "original";
        return (null == e ? void 0 : e.type) !== a.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null
            ? null
            : h(e.state)[0] === i.tN.CUSTOM
              ? null == e
                  ? void 0
                  : e.details
              : null == (t = y(e, n))
                ? void 0
                : t.title;
    };
