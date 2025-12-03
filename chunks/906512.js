n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(142497),
    g = n(338327),
    m = n(496675),
    p = n(63063),
    f = n(981631),
    h = n(190378),
    b = n(388032),
    x = n(275657),
    j = n(438825),
    _ = n(236140),
    v = n(37069),
    O = n(518513),
    C = n(40271);
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
            iconSrc: O,
            name: "Learn Latin",
            position: [-280, -30],
            faded: !0,
        },
        {
            iconSrc: C,
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
        let { icon: t, color: n, size: i = 24, header: l, body: a } = e;
        return (0, r.jsxs)("div", {
            className: x.featureCard,
            children: [
                (0, r.jsx)("div", {
                    className: x.featureIcon,
                    children: (0, r.jsx)(t, {
                        color: null != n ? n : "currentColor",
                        width: i,
                        height: i,
                        size: "custom",
                    }),
                }),
                (0, r.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: x.featureHeader,
                    children: l,
                }),
                (0, r.jsx)(u.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: a,
                }),
            ],
        });
    },
    I = (e) => {
        let { iconSrc: t, name: n, position: i, faded: l, rightAlign: s, imageCoordinates: o } = e,
            c = {
                [s ? "right" : "left"]: o[0] + i[0],
                top: o[1] + i[1],
            };
        return (0, r.jsxs)("div", {
            className: a()(x.guildDetails, { [x.faded]: l }),
            style: c,
            children: [
                (0, r.jsx)("div", {
                    className: x.guildIcon,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        width: 24,
                        height: 24,
                    }),
                }),
                (0, r.jsx)(u.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    children: n,
                }),
            ],
        });
    },
    S = (e) => {
        let { guild: t } = e,
            [n, l] = i.useState(0),
            [a, v] = i.useState(0),
            [O, C] = i.useState(),
            S = (0, s.e7)([m.Z], () => m.Z.can(f.Plq.ADMINISTRATOR, t)),
            T = null == O ? void 0 : O.offsetWidth,
            P = null == O ? void 0 : O.offsetHeight;
        return (
            i.useEffect(() => {
                null != T && l(T / 2), null != P && v(P / 2);
            }, [T, P, l, v]),
            i.useEffect(() => {
                (0, d.Kw)(h.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
            }, []),
            (0, r.jsxs)("div", {
                className: x.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.banner,
                        ref: (e) => C(e),
                        children: [
                            N.map((e) => {
                                var t, i;
                                return (0, r.jsx)(
                                    I,
                                    ((t = y({}, e)),
                                    (i = i =
                                        {
                                            imageCoordinates: [n, a],
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
                                className: x.image,
                                width: 256,
                            }),
                            (0, r.jsx)("img", {
                                alt: "",
                                src: _,
                                className: x.sparkles,
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.Heading, {
                        variant: "heading-xl/semibold",
                        children: b.intl.string(b.t["M/gBcA"]),
                    }),
                    (0, r.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: x.body,
                        children: b.intl.format(b.t["52EgsM"], {
                            helpdeskArticle: p.Z.getArticleURL(f.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                    }),
                    (0, r.jsx)(c.u, {
                        text: S ? null : b.intl.string(b.t["pjG+T3"]),
                        "aria-label": S ? void 0 : b.intl.string(b.t["pjG+T3"]),
                        children: (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: x.button,
                            children: (0, r.jsx)(u.Button, {
                                variant: "primary",
                                text: b.intl.string(b.t.LhlgY9),
                                onClick: () => {
                                    g.Z.open();
                                },
                                disabled: !S,
                            }),
                        }),
                    }),
                    (0, r.jsx)("hr", { className: x.separator }),
                    (0, r.jsx)(u.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: b.intl.string(b.t.OzLWLE),
                    }),
                    (0, r.jsx)(u.Text, {
                        color: "text-default",
                        className: x.body,
                        variant: "text-sm/normal",
                        children: b.intl.format(b.t.rjhrqC, {
                            helpdeskArticle: p.Z.getArticleURL(f.BhN.GUILD_COMMUNITY_FEATURE),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: x.features,
                        children: [
                            {
                                icon: u.IeX,
                                color: o.Z.unsafe_rawColors.GREEN_360.css,
                                header: b.intl.string(b.t.oVQF2y),
                                body: b.intl.format(b.t.A6G7ak, {
                                    featureHook: (e, t) =>
                                        (0, r.jsx)(
                                            "strong",
                                            {
                                                className: x.featuredText,
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            },
                            {
                                icon: u.IeX,
                                color: o.Z.unsafe_rawColors.PARTNER.css,
                                header: b.intl.string(b.t["0rJl9y"]),
                                body: b.intl.format(b.t.XsCNky, {
                                    infoHook: () =>
                                        (0, r.jsx)(c.u, {
                                            text: b.intl.string(b.t.kPJlTh),
                                            "aria-label": b.intl.string(b.t.kPJlTh),
                                            children: (0, r.jsx)(u.d3s, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: x.infoIcon,
                                            }),
                                        }),
                                    featureHook: (e, t) =>
                                        (0, r.jsx)(
                                            "strong",
                                            {
                                                className: x.featuredText,
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            },
                            {
                                icon: u.d3s,
                                color: o.Z.unsafe_rawColors.RED_360.css,
                                header: b.intl.string(b.t.W2kLJC),
                                body: b.intl.string(b.t.hyNkHz),
                            },
                        ].map((e, t) => (0, r.jsx)(E, y({}, e), t)),
                    }),
                ],
            })
        );
    };
