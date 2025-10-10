n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(692547),
    c = n(28664),
    d = n(481060),
    u = n(142497),
    g = n(338327),
    m = n(496675),
    p = n(63063),
    f = n(981631),
    h = n(190378),
    x = n(388032),
    b = n(275657),
    j = n(438825),
    _ = n(236140),
    v = n(37069),
    C = n(518513),
    O = n(40271);
function y(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let N = [
        {
            iconSrc: n(348986),
            name: "Pokemon GO Paris",
            position: [-230, -100],
        },
        {
            iconSrc: n(930065),
            name: "Python",
            position: [-180, -100],
            faded: !0,
            rightAlign: !0,
        },
        {
            iconSrc: C,
            name: "Learn Latin",
            position: [-280, -30],
            faded: !0,
        },
        {
            iconSrc: O,
            name: "r/leagueoflegends",
            position: [-320, -30],
            rightAlign: !0,
        },
        {
            iconSrc: n(345669),
            name: "Sneaker Fans",
            position: [-250, 40],
        },
        {
            iconSrc: v,
            name: "Hogwarts School",
            position: [-270, 40],
            faded: !0,
            rightAlign: !0,
        },
    ],
    E = (e) => {
        let { icon: t, color: n, size: i = 24, header: l, body: s } = e;
        return (0, r.jsxs)("div", {
            className: b.featureCard,
            children: [
                (0, r.jsx)("div", {
                    className: b.featureIcon,
                    children: (0, r.jsx)(t, {
                        color: null != n ? n : "currentColor",
                        width: i,
                        height: i,
                        size: "custom",
                    }),
                }),
                (0, r.jsx)(d.X6q, {
                    variant: "heading-md/semibold",
                    className: b.featureHeader,
                    children: l,
                }),
                (0, r.jsx)(d.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: s,
                }),
            ],
        });
    },
    I = (e) => {
        let { iconSrc: t, name: n, position: i, faded: l, rightAlign: a, imageCoordinates: o } = e,
            c = {
                [a ? "right" : "left"]: o[0] + i[0],
                top: o[1] + i[1],
            };
        return (0, r.jsxs)("div", {
            className: s()(b.guildDetails, { [b.faded]: l }),
            style: c,
            children: [
                (0, r.jsx)("div", {
                    className: b.guildIcon,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        width: 24,
                        height: 24,
                    }),
                }),
                (0, r.jsx)(d.X6q, {
                    variant: "heading-deprecated-12/semibold",
                    children: n,
                }),
            ],
        });
    },
    S = (e) => {
        let { guild: t } = e,
            [n, l] = i.useState(0),
            [s, v] = i.useState(0),
            [C, O] = i.useState(),
            S = (0, a.e7)([m.Z], () => m.Z.can(f.Plq.ADMINISTRATOR, t)),
            T = null == C ? void 0 : C.offsetWidth,
            P = null == C ? void 0 : C.offsetHeight;
        return (
            i.useEffect(() => {
                null != T && l(T / 2), null != P && v(P / 2);
            }, [T, P, l, v]),
            i.useEffect(() => {
                (0, u.Kw)(h.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
            }, []),
            (0, r.jsxs)("div", {
                className: b.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.banner,
                        ref: (e) => O(e),
                        children: [
                            N.map((e) => {
                                var t, i;
                                return (0, r.jsx)(
                                    I,
                                    ((t = y({}, e)),
                                    (i = i =
                                        {
                                            imageCoordinates: [n, s],
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    t),
                                    e.name,
                                );
                            }),
                            (0, r.jsx)("img", {
                                alt: "",
                                src: j,
                                className: b.image,
                                width: 256,
                            }),
                            (0, r.jsx)("img", {
                                alt: "",
                                src: _,
                                className: b.sparkles,
                            }),
                        ],
                    }),
                    (0, r.jsx)(d.X6q, {
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t["M/gBcH"]),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: b.body,
                        children: x.intl.format(x.t["52EgsL"], {
                            helpdeskArticle: p.Z.getArticleURL(f.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                    }),
                    (0, r.jsx)(c.u, {
                        text: S ? null : x.intl.string(x.t["pjG+T0"]),
                        "aria-label": S ? void 0 : x.intl.string(x.t["pjG+T0"]),
                        children: (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: b.button,
                            children: (0, r.jsx)(d.zxk, {
                                variant: "primary",
                                text: x.intl.string(x.t.LhlgY2),
                                onClick: () => {
                                    g.Z.open();
                                },
                                disabled: !S,
                            }),
                        }),
                    }),
                    (0, r.jsx)("hr", { className: b.separator }),
                    (0, r.jsx)(d.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: x.intl.string(x.t.OzLWLC),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: "header-secondary",
                        className: b.body,
                        variant: "text-sm/normal",
                        children: x.intl.format(x.t.rjhrqK, {
                            helpdeskArticle: p.Z.getArticleURL(f.BhN.GUILD_COMMUNITY_FEATURE),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: b.features,
                        children: [
                            {
                                icon: d.IeX,
                                color: o.Z.unsafe_rawColors.GREEN_360.css,
                                header: x.intl.string(x.t.oVQF29),
                                body: x.intl.format(x.t.A6G7am, {
                                    featureHook: (e, t) =>
                                        (0, r.jsx)(
                                            "strong",
                                            {
                                                className: b.featuredText,
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            },
                            {
                                icon: d.IeX,
                                color: o.Z.unsafe_rawColors.PARTNER.css,
                                header: x.intl.string(x.t["0rJl9/"]),
                                body: x.intl.format(x.t.XsCNk5, {
                                    infoHook: () =>
                                        (0, r.jsx)(c.u, {
                                            text: x.intl.string(x.t.kPJlTk),
                                            "aria-label": x.intl.string(x.t.kPJlTk),
                                            children: (0, r.jsx)(d.d3s, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: b.infoIcon,
                                            }),
                                        }),
                                    featureHook: (e, t) =>
                                        (0, r.jsx)(
                                            "strong",
                                            {
                                                className: b.featuredText,
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            },
                            {
                                icon: d.d3s,
                                color: o.Z.unsafe_rawColors.RED_360.css,
                                header: x.intl.string(x.t.W2kLJC),
                                body: x.intl.string(x.t.hyNkHx),
                            },
                        ].map((e, t) => (0, r.jsx)(E, y({}, e), t)),
                    }),
                ],
            })
        );
    };
