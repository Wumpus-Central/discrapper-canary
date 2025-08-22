n.d(t, { Z: () => N }), n(49124);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n(793030),
    c = n(442837),
    d = n(704215),
    u = n(755721),
    m = n(481060),
    x = n(411149),
    h = n(151480),
    p = n(461762),
    f = n(680783),
    v = n(605236),
    b = n(675478),
    j = n(944486),
    g = n(388032),
    _ = n(715639);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N() {
    return (0, a.jsxs)(m.Ttm, {
        className: _.container,
        children: [(0, a.jsx)(E, {}), (0, a.jsx)(O, {})],
    });
}
function E() {
    var e, t;
    let n = (0, c.e7)([j.Z], () => j.Z.getChannelId()),
        l = (0, f.Z)(n),
        s = null == l ? void 0 : l.wallpaperId,
        d = (0, p.Z)(s),
        v = r.useCallback(
            (e) => {
                null != s && (0, h.i)(s, { opacity: e });
            },
            [s],
        ),
        b = r.useCallback(
            (e) => {
                T(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId],
        ),
        N = r.useCallback(
            (e) => {
                P(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId],
        ),
        E = r.useCallback(
            (e) => {
                S(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId],
        ),
        O = r.useCallback(() => T(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        w = r.useCallback(() => P(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        k = r.useCallback(() => S(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        I = r.useCallback(
            (e) => {
                null != s && (0, h.i)(s, { token_mix_amount: Math.round(e) });
            },
            [s],
        ),
        R = r.useCallback(() => {
            null != s && (0, h.i)(s, null);
        }, [s]),
        Z = null != (e = null == d ? void 0 : d.opacity) ? e : 1,
        A = null != (t = null == d ? void 0 : d.token_mix_amount) ? t : 100;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(o.X6, {
                className: _.header,
                variant: "heading-lg/semibold",
                children: "DM Wallpapers",
            }),
            null == d &&
                (0, a.jsx)("p", {
                    className: _.explanation,
                    children: "Open a DM with a wallpaper to customize.",
                }),
            null != d &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(o.X6, {
                            className: _.subheader,
                            variant: "heading-md/semibold",
                            children: "ChatWallpaperMetadataRecord",
                        }),
                        (0, a.jsx)("pre", {
                            className: _.code,
                            children: JSON.stringify(x.Z.getWallpaperById(s), null, 2),
                        }),
                        (0, a.jsx)(m.ua7, {
                            text: "The opacity of the wallpaper.",
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: "heading-md/semibold",
                                            },
                                            e,
                                        ),
                                        { children: "Opacity" },
                                    ),
                                ),
                        }),
                        (0, a.jsx)(
                            m.iRW,
                            {
                                className: _.slider,
                                initialValue: Z,
                                defaultValue: 1,
                                minValue: 0,
                                maxValue: 1,
                                onValueChange: v,
                            },
                            "opacity-".concat(Z),
                        ),
                        (0, a.jsx)(m.ua7, {
                            text: "The most prominent color in the wallpaper. This will be used to adjust the color tokens.",
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: "heading-md/semibold",
                                            },
                                            e,
                                        ),
                                        { children: "Primary Color" },
                                    ),
                                ),
                        }),
                        (0, a.jsxs)("div", {
                            className: _.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    "input",
                                    {
                                        type: "color",
                                        value: d.primary_color,
                                        onChange: b,
                                    },
                                    "primaryColor-".concat(d.primary_color),
                                ),
                                (0, a.jsx)(m.M0o, {
                                    color: "currentColor",
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, a.jsx)(m.P$X, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    onClick: O,
                                    className: _.removeButton,
                                }),
                            ],
                        }),
                        (0, a.jsx)(m.ua7, {
                            text: "The second most prominent color in the wallpaper. This will be used to adjust the color tokens.",
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: "heading-md/semibold",
                                            },
                                            e,
                                        ),
                                        { children: "Secondary Color" },
                                    ),
                                ),
                        }),
                        (0, a.jsxs)("div", {
                            className: _.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    "input",
                                    {
                                        type: "color",
                                        value: d.secondary_color,
                                        onChange: N,
                                    },
                                    "secondaryColor-".concat(d.secondary_color),
                                ),
                                (0, a.jsx)(m.M0o, {
                                    color: "currentColor",
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, a.jsx)(m.P$X, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    onClick: w,
                                    className: _.removeButton,
                                }),
                            ],
                        }),
                        (0, a.jsx)(m.ua7, {
                            text: "Controls how much the primary/secondary colors are mixed into the tokens.",
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: "heading-md/semibold",
                                            },
                                            e,
                                        ),
                                        { children: "Token Mix Amount" },
                                    ),
                                ),
                        }),
                        (0, a.jsx)(
                            m.iRW,
                            {
                                className: _.slider,
                                initialValue: A,
                                defaultValue: 100,
                                minValue: 0,
                                maxValue: 100,
                                onValueChange: I,
                            },
                            "tokenMixAmount-".concat(A),
                        ),
                        (0, a.jsx)(m.ua7, {
                            text: "The color used for hyperlinks.",
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: "heading-md/semibold",
                                            },
                                            e,
                                        ),
                                        { children: "Link Color" },
                                    ),
                                ),
                        }),
                        (0, a.jsxs)("div", {
                            className: _.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    "input",
                                    {
                                        type: "color",
                                        value: d.link_color,
                                        onChange: E,
                                    },
                                    "linkColor-".concat(d.link_color),
                                ),
                                (0, a.jsx)(m.M0o, {
                                    color: "currentColor",
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, a.jsx)(m.P$X, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    onClick: k,
                                    className: _.removeButton,
                                }),
                            ],
                        }),
                        (0, a.jsx)(u.zx, {
                            className: _.resetButton,
                            onClick: R,
                            children: "Reset",
                        }),
                    ],
                }),
        ],
    });
}
function O() {
    let e = r.useCallback(() => {
            (0, b.Z1)(d.z.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, v.Fo)(d.z.NITRO_TENURE_BADGE_LEVEL_UP),
        n = null != t ? new Date(t) : null;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.X6, {
                className: _.header,
                variant: "heading-lg/semibold",
                children: "Tenure Badges",
            }),
            (0, a.jsxs)("p", {
                children: [
                    "Level Up DC:\xA0",
                    null != n &&
                        (0, a.jsxs)("b", {
                            children: ["Dismissed (", n.toLocaleDateString(), ")"],
                        }),
                    null == n && (0, a.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, a.jsx)("div", {
                className: _.tenureBadgeControls,
                children: (0, a.jsx)(m.zxk, {
                    variant: "primary",
                    text: "Reset Level Up DC",
                    onClick: e,
                }),
            }),
        ],
    });
}
let T = (0, s.debounce)(function (e, t) {
        null != e && (0, h.i)(e, { primary_color: t });
    }, 200),
    S = (0, s.debounce)(function (e, t) {
        null != e && (0, h.i)(e, { link_color: t });
    }, 200),
    P = (0, s.debounce)(function (e, t) {
        null != e && (0, h.i)(e, { secondary_color: t });
    }, 200);
