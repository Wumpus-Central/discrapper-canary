n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(305347),
    c = n(172751),
    u = n(131085),
    d = n(741666);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { className: t, guildTag: n, guildBadge: a, guildId: f, guildName: p, guildIcon: m, guildIconSize: g } = e,
        E = i.useRef(null),
        [b, y] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = E.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && y(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, r.jsxs)("div", {
            className: o()(d.container, t),
            children: [
                (0, r.jsxs)("div", {
                    className: d.guildPrefixContainer,
                    children: [
                        (0, r.jsx)(l.Ft, {
                            guildId: f,
                            guildName: p,
                            guildIcon: m,
                            iconSize: g,
                            className: d.guildPrefixIcon,
                            animate: !1,
                        }),
                        (0, r.jsx)("div", {
                            className: d.details,
                            children: (0, r.jsx)(s.ua7, {
                                text: p,
                                color: s.ua7.Colors.PRIMARY,
                                shouldShow: b,
                                children: (e) =>
                                    (0, r.jsx)(
                                        "span",
                                        h(_({ ref: E }, e), {
                                            className: d.guildName,
                                            children: p,
                                        }),
                                    ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d.tagContainer,
                    children: (0, r.jsx)(c.m0, {
                        guildId: f,
                        className: d.tag,
                        guildTag: n,
                        guildBadge: a,
                        badgeSize: u.Gg.SIZE_16,
                        textColor: "interactive-normal",
                        textVariant: "text-sm/semibold",
                        badgeClassName: d.badge,
                    }),
                }),
            ],
        })
    );
}
