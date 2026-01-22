n.d(t, {
    Au: () => b,
    hy: () => g,
    vt: () => E,
});
var r = n(492917),
    i = n(358957),
    a = n(708455),
    s = n(652215),
    o = n(985018),
    l = n(628580),
    c = n(610263);
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
        [a.Kk.BRB]: {
            title: o.intl.string(o.t.fFTJTI),
            icon: c,
        },
        [a.Kk.CHILLING]: {
            title: o.intl.string(o.t.vybY9c),
            icon: r.uPL,
        },
        [a.Kk.GAMING]: {
            title: o.intl.string(o.t.wvWdTV),
            icon: r.Zbm,
        },
        [a.Kk.WATCHING]: {
            title: o.intl.string(o.t.s8xFaG),
            icon: l,
        },
        [a.Kk.FOCUSING]: {
            title: o.intl.string(o.t.D5eCTx),
            icon: r.IDW,
        },
    }),
    h = () => ({
        [a.Kk.BRB]: {
            title: o.intl.string(o.t.fFTJTI),
            emoji: {
                id: void 0,
                name: "\uD83E\uDDFB",
            },
        },
        [a.Kk.CHILLING]: {
            title: o.intl.string(o.t.vybY9c),
            emoji: {
                id: void 0,
                name: "\uD83C\uDF68",
            },
        },
        [a.Kk.GAMING]: {
            title: o.intl.string(o.t.wvWdTV),
            emoji: {
                id: void 0,
                name: "\u2694️",
            },
        },
        [a.Kk.WATCHING]: {
            title: o.intl.string(o.t.s8xFaG),
            emoji: {
                id: void 0,
                name: "\uD83C\uDF7F",
            },
        },
        [a.Kk.FOCUSING]: {
            title: o.intl.string(o.t.D5eCTx),
            emoji: {
                id: void 0,
                name: "\uD83E\uDDE0",
            },
        },
    }),
    m = () =>
        p(d({}, h()), {
            [a.Kk.CHILLING]: {
                title: o.intl.string(o.t.IeolFa),
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
                return h();
            case "twemojimild":
                return m();
        }
    },
    E = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "twemoji";
        if ((null == t ? void 0 : t.type) !== s.$pd.HANG_STATUS || (null == t ? void 0 : t.state) == null) return null;
        let r = (0, i.e)(e, t.state),
            o = r[0];
        if (o === a.Kk.CUSTOM) return null;
        let l = g(r.length > 1 ? r[1] : n);
        return o in l ? l[o] : null;
    },
    b = function (e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "twemoji";
        return (null == t ? void 0 : t.type) !== s.$pd.HANG_STATUS || (null == t ? void 0 : t.state) == null
            ? null
            : (0, i.e)(e, t.state)[0] === a.Kk.CUSTOM
              ? null == t
                  ? void 0
                  : t.details
              : null == (n = E(e, t, r))
                ? void 0
                : n.title;
    };
