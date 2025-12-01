n.d(t, {
    O8: () => b,
    V: () => g,
    tV: () => E,
});
var r = n(970683),
    i = n(797156),
    a = n(505905),
    o = n(981631),
    s = n(388032),
    l = n(829290),
    c = n(136779);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = () => ({
        [a.tN.BRB]: {
            title: s.intl.string(s.t.fFTJTI),
            icon: c,
        },
        [a.tN.CHILLING]: {
            title: s.intl.string(s.t.vybY9c),
            icon: r.s_,
        },
        [a.tN.GAMING]: {
            title: s.intl.string(s.t.wvWdTV),
            icon: r.mB,
        },
        [a.tN.WATCHING]: {
            title: s.intl.string(s.t.s8xFaG),
            icon: l,
        },
        [a.tN.FOCUSING]: {
            title: s.intl.string(s.t.D5eCTx),
            icon: r.FG,
        },
    }),
    m = () => ({
        [a.tN.BRB]: {
            title: s.intl.string(s.t.fFTJTI),
            emoji: {
                id: void 0,
                name: "\uD83E\uDDFB",
            },
        },
        [a.tN.CHILLING]: {
            title: s.intl.string(s.t.vybY9c),
            emoji: {
                id: void 0,
                name: "\uD83C\uDF68",
            },
        },
        [a.tN.GAMING]: {
            title: s.intl.string(s.t.wvWdTV),
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
            title: s.intl.string(s.t.D5eCTx),
            emoji: {
                id: void 0,
                name: "\uD83E\uDDE0",
            },
        },
    }),
    h = () =>
        p(d({}, m()), {
            [a.tN.CHILLING]: {
                title: s.intl.string(s.t.IeolFa),
                emoji: {
                    id: void 0,
                    name: "\uD83D\uDCAD",
                },
            },
        }),
    g = (e) => {
        switch (e) {
            case "illocons":
                return _();
            case "twemoji":
            default:
                return m();
            case "twemojimild":
                return h();
        }
    },
    E = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "twemoji";
        if ((null == t ? void 0 : t.type) !== o.IIU.HANG_STATUS || (null == t ? void 0 : t.state) == null) return null;
        let r = (0, i.F)(e, t.state),
            s = r[0];
        if (s === a.tN.CUSTOM) return null;
        let l = g(r.length > 1 ? r[1] : n);
        return s in l ? l[s] : null;
    },
    b = function (e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "twemoji";
        return (null == t ? void 0 : t.type) !== o.IIU.HANG_STATUS || (null == t ? void 0 : t.state) == null
            ? null
            : (0, i.F)(e, t.state)[0] === a.tN.CUSTOM
              ? null == t
                  ? void 0
                  : t.details
              : null == (n = E(e, t, r))
                ? void 0
                : n.title;
    };
