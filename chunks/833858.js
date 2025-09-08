n.d(t, {
    Fe: () => p,
    O8: () => b,
    V: () => g,
    tV: () => E,
}),
    n(35282);
var r = n(970683),
    i = n(505905),
    a = n(981631),
    o = n(388032),
    s = n(33346),
    l = n(857042),
    c = n(558532),
    u = n(105196),
    d = n(346554),
    f = n(933045),
    _ = n(444305);
function p(e) {
    return null == e ? [null, null] : e.split(":");
}
let h = () => ({
        [i.tN.CHILLING]: {
            title: o.intl.string(o.t["vkpn7+"]),
            icon: l,
        },
        [i.tN.GAMING]: {
            title: o.intl.string(o.t.lZslwM),
            icon: c,
        },
        [i.tN.FOCUSING]: {
            title: o.intl.string(o.t.b6AscH),
            icon: d,
        },
        [i.tN.BRB]: {
            title: o.intl.string(o.t["30yqZW"]),
            icon: s,
        },
        [i.tN.EATING]: {
            title: o.intl.string(o.t.UVSEhY),
            icon: u,
        },
        [i.tN.IN_TRANSIT]: {
            title: o.intl.string(o.t["l0q9/f"]),
            icon: f,
        },
        [i.tN.WATCHING]: {
            title: o.intl.string(o.t.di6IFx),
            icon: _,
        },
    }),
    m = () => ({
        [i.tN.IN_TRANSIT]: {
            title: "Here",
            icon: r.s_,
        },
    }),
    g = (e) => {
        switch (e) {
            case "original":
            default:
                return h();
            case "illocons":
                return m();
        }
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "original";
        if ((null == e ? void 0 : e.type) !== a.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
        let n = p(e.state),
            r = n[0];
        if (r === i.tN.CUSTOM) return null;
        let o = g(n.length > 1 ? n[1] : t);
        return r in o ? o[r] : null;
    },
    b = function (e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "original";
        return (null == e ? void 0 : e.type) !== a.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null
            ? null
            : p(e.state)[0] === i.tN.CUSTOM
              ? null == e
                  ? void 0
                  : e.details
              : null == (t = E(e, n))
                ? void 0
                : t.title;
    };
