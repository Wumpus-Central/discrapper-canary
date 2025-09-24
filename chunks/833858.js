n.d(t, {
    O8: () => y,
    V: () => E,
    tV: () => b,
});
var r = n(970683),
    i = n(797156),
    a = n(505905),
    o = n(981631),
    s = n(388032),
    l = n(829290),
    c = n(136779),
    u = n(33346),
    d = n(857042),
    f = n(558532),
    _ = n(346554),
    p = n(444305);
let h = () => ({
        [a.tN.CHILLING]: {
            title: s.intl.string(s.t["vkpn7+"]),
            icon: d,
        },
        [a.tN.GAMING]: {
            title: s.intl.string(s.t.lZslwM),
            icon: f,
        },
        [a.tN.FOCUSING]: {
            title: s.intl.string(s.t.b6AscH),
            icon: _,
        },
        [a.tN.BRB]: {
            title: s.intl.string(s.t["30yqZW"]),
            icon: u,
        },
        [a.tN.WATCHING]: {
            title: s.intl.string(s.t.di6IFx),
            icon: p,
        },
    }),
    m = () => ({
        [a.tN.BRB]: {
            title: s.intl.string(s.t.fFTJTE),
            icon: c,
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
            icon: l,
        },
        [a.tN.FOCUSING]: {
            title: s.intl.string(s.t.D5eCT0),
            icon: r.Nl,
        },
    }),
    g = () => ({
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
    E = (e) => {
        switch (e) {
            case "original":
            default:
                return h();
            case "illocons":
                return m();
            case "twemoji":
                return g();
        }
    },
    b = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "original";
        if ((null == t ? void 0 : t.type) !== o.IIU.HANG_STATUS || (null == t ? void 0 : t.state) == null) return null;
        let r = (0, i.F)(e, t.state),
            s = r[0];
        if (s === a.tN.CUSTOM) return null;
        let l = E(r.length > 1 ? r[1] : n);
        return s in l ? l[s] : null;
    },
    y = function (e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "original";
        return (null == t ? void 0 : t.type) !== o.IIU.HANG_STATUS || (null == t ? void 0 : t.state) == null
            ? null
            : (0, i.F)(e, t.state)[0] === a.tN.CUSTOM
              ? null == t
                  ? void 0
                  : t.details
              : null == (n = b(e, t, r))
                ? void 0
                : n.title;
    };
