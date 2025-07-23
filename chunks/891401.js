(a.d(t, { Z: () => O }), a(49124));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(392711),
    o = a(793030),
    c = a(442837),
    d = a(704215),
    u = a(755721),
    m = a(481060),
    x = a(411149),
    p = a(151480),
    h = a(461762),
    b = a(680783),
    f = a(605236),
    v = a(675478),
    j = a(944486),
    g = a(388032),
    _ = a(145634);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
function O() {
    return (0, n.jsxs)(m.Ttm, {
        className: _.container,
        children: [(0, n.jsx)(N, {}), (0, n.jsx)(T, {})]
    });
}
function N() {
    var e, t;
    let a = (0, c.e7)([j.Z], () => j.Z.getChannelId()),
        l = (0, b.Z)(a),
        s = null == l ? void 0 : l.wallpaperId,
        d = (0, h.Z)(s),
        f = r.useCallback(
            (e) => {
                null != s && (0, p.i)(s, { opacity: e });
            },
            [s]
        ),
        v = r.useCallback(
            (e) => {
                E(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        O = r.useCallback(
            (e) => {
                P(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        N = r.useCallback(
            (e) => {
                S(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        T = r.useCallback(() => E(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        w = r.useCallback(() => P(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        I = r.useCallback(() => S(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        R = r.useCallback(
            (e) => {
                null != s && (0, p.i)(s, { token_mix_amount: Math.round(e) });
            },
            [s]
        ),
        k = r.useCallback(() => {
            null != s && (0, p.i)(s, null);
        }, [s]),
        Z = null != (e = null == d ? void 0 : d.opacity) ? e : 1,
        A = null != (t = null == d ? void 0 : d.token_mix_amount) ? t : 100;
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(o.X6, {
                className: _.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            null == d &&
                (0, n.jsx)('p', {
                    className: _.explanation,
                    children: 'Open a DM with a wallpaper to customize.'
                }),
            null != d &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(o.X6, {
                            className: _.subheader,
                            variant: 'heading-md/semibold',
                            children: 'ChatWallpaperMetadataRecord'
                        }),
                        (0, n.jsx)('pre', {
                            className: _.code,
                            children: JSON.stringify(x.Z.getWallpaperById(s), null, 2)
                        }),
                        (0, n.jsx)(m.ua7, {
                            text: 'The opacity of the wallpaper.',
                            children: (e) =>
                                (0, n.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Opacity' }
                                    )
                                )
                        }),
                        (0, n.jsx)(
                            m.iRW,
                            {
                                className: _.slider,
                                initialValue: Z,
                                defaultValue: 1,
                                minValue: 0,
                                maxValue: 1,
                                onValueChange: f
                            },
                            'opacity-'.concat(Z)
                        ),
                        (0, n.jsx)(m.ua7, {
                            text: 'The most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, n.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Primary Color' }
                                    )
                                )
                        }),
                        (0, n.jsxs)('div', {
                            className: _.colorInputContainer,
                            children: [
                                (0, n.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: d.primary_color,
                                        onChange: v
                                    },
                                    'primaryColor-'.concat(d.primary_color)
                                ),
                                (0, n.jsx)(m.M0o, {
                                    color: 'currentColor',
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, n.jsx)(m.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: T,
                                    className: _.removeButton
                                })
                            ]
                        }),
                        (0, n.jsx)(m.ua7, {
                            text: 'The second most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, n.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Secondary Color' }
                                    )
                                )
                        }),
                        (0, n.jsxs)('div', {
                            className: _.colorInputContainer,
                            children: [
                                (0, n.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: d.secondary_color,
                                        onChange: O
                                    },
                                    'secondaryColor-'.concat(d.secondary_color)
                                ),
                                (0, n.jsx)(m.M0o, {
                                    color: 'currentColor',
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, n.jsx)(m.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: w,
                                    className: _.removeButton
                                })
                            ]
                        }),
                        (0, n.jsx)(m.ua7, {
                            text: 'Controls how much the primary/secondary colors are mixed into the tokens.',
                            children: (e) =>
                                (0, n.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Token Mix Amount' }
                                    )
                                )
                        }),
                        (0, n.jsx)(
                            m.iRW,
                            {
                                className: _.slider,
                                initialValue: A,
                                defaultValue: 100,
                                minValue: 0,
                                maxValue: 100,
                                onValueChange: R
                            },
                            'tokenMixAmount-'.concat(A)
                        ),
                        (0, n.jsx)(m.ua7, {
                            text: 'The color used for hyperlinks.',
                            children: (e) =>
                                (0, n.jsx)(
                                    o.X6,
                                    C(
                                        y(
                                            {
                                                className: i()(_.subheader, _.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Link Color' }
                                    )
                                )
                        }),
                        (0, n.jsxs)('div', {
                            className: _.colorInputContainer,
                            children: [
                                (0, n.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: d.link_color,
                                        onChange: N
                                    },
                                    'linkColor-'.concat(d.link_color)
                                ),
                                (0, n.jsx)(m.M0o, {
                                    color: 'currentColor',
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, n.jsx)(m.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: I,
                                    className: _.removeButton
                                })
                            ]
                        }),
                        (0, n.jsx)(u.zx, {
                            className: _.resetButton,
                            onClick: k,
                            children: 'Reset'
                        })
                    ]
                })
        ]
    });
}
function T() {
    let e = r.useCallback(() => {
            (0, v.Z1)(d.z.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, f.Fo)(d.z.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.X6, {
                className: _.header,
                variant: 'heading-lg/semibold',
                children: 'Tenure Badges'
            }),
            (0, n.jsxs)('p', {
                children: [
                    'Level Up DC:\xA0',
                    null != a &&
                        (0, n.jsxs)('b', {
                            children: ['Dismissed (', a.toLocaleDateString(), ')']
                        }),
                    null == a && (0, n.jsx)('b', { children: 'Not Dismissed' })
                ]
            }),
            (0, n.jsx)('div', {
                className: _.tenureBadgeControls,
                children: (0, n.jsx)(m.zxk, {
                    variant: 'primary',
                    text: 'Reset Level Up DC',
                    onClick: e
                })
            })
        ]
    });
}
let E = (0, s.debounce)(function (e, t) {
        null != e && (0, p.i)(e, { primary_color: t });
    }, 200),
    S = (0, s.debounce)(function (e, t) {
        null != e && (0, p.i)(e, { link_color: t });
    }, 200),
    P = (0, s.debounce)(function (e, t) {
        null != e && (0, p.i)(e, { secondary_color: t });
    }, 200);
