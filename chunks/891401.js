n.d(t, { Z: () => E }), n(49124);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n(793030),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    m = n(411149),
    x = n(151480),
    h = n(461762),
    p = n(680783),
    b = n(553049),
    f = n(605236),
    v = n(291175),
    g = n(675478),
    j = n(944486),
    _ = n(474936),
    y = n(388032),
    C = n(145634);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function O(e, t) {
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
function E() {
    return (0, a.jsxs)(u.Ttm, {
        className: C.container,
        children: [(0, a.jsx)(T, {}), (0, a.jsx)(S, {}), (0, a.jsx)(b.Z, {})]
    });
}
function T() {
    var e, t;
    let n = (0, c.e7)([j.Z], () => j.Z.getChannelId()),
        l = (0, p.Z)(n),
        s = null == l ? void 0 : l.wallpaperId,
        d = (0, h.Z)(s),
        b = r.useCallback(
            (e) => {
                null != s && (0, x.i)(s, { opacity: e });
            },
            [s]
        ),
        f = r.useCallback(
            (e) => {
                P(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        v = r.useCallback(
            (e) => {
                k(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        g = r.useCallback(
            (e) => {
                I(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        _ = r.useCallback(() => P(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        E = r.useCallback(() => k(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        T = r.useCallback(() => I(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        S = r.useCallback(
            (e) => {
                null != s && (0, x.i)(s, { token_mix_amount: Math.round(e) });
            },
            [s]
        ),
        w = r.useCallback(() => {
            null != s && (0, x.i)(s, null);
        }, [s]),
        R = null != (e = null == d ? void 0 : d.opacity) ? e : 1,
        A = null != (t = null == d ? void 0 : d.token_mix_amount) ? t : 100;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(o.X6, {
                className: C.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            null == d &&
                (0, a.jsx)('p', {
                    className: C.explanation,
                    children: 'Open a DM with a wallpaper to customize.'
                }),
            null != d &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(o.X6, {
                            className: C.subheader,
                            variant: 'heading-md/semibold',
                            children: 'ChatWallpaperMetadataRecord'
                        }),
                        (0, a.jsx)('pre', {
                            className: C.code,
                            children: JSON.stringify(m.Z.getWallpaperById(s), null, 2)
                        }),
                        (0, a.jsx)(u.ua7, {
                            text: 'The opacity of the wallpaper.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    O(
                                        N(
                                            {
                                                className: i()(C.subheader, C.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Opacity' }
                                    )
                                )
                        }),
                        (0, a.jsx)(
                            u.iRW,
                            {
                                className: C.slider,
                                initialValue: R,
                                defaultValue: 1,
                                minValue: 0,
                                maxValue: 1,
                                onValueChange: b
                            },
                            'opacity-'.concat(R)
                        ),
                        (0, a.jsx)(u.ua7, {
                            text: 'The most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    O(
                                        N(
                                            {
                                                className: i()(C.subheader, C.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Primary Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: C.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: d.primary_color,
                                        onChange: f
                                    },
                                    'primaryColor-'.concat(d.primary_color)
                                ),
                                (0, a.jsx)(u.M0o, {
                                    color: 'currentColor',
                                    tooltip: y.intl.string(y.t.N86XcH),
                                    icon: (0, a.jsx)(u.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: _,
                                    className: C.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(u.ua7, {
                            text: 'The second most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    O(
                                        N(
                                            {
                                                className: i()(C.subheader, C.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Secondary Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: C.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: d.secondary_color,
                                        onChange: v
                                    },
                                    'secondaryColor-'.concat(d.secondary_color)
                                ),
                                (0, a.jsx)(u.M0o, {
                                    color: 'currentColor',
                                    tooltip: y.intl.string(y.t.N86XcH),
                                    icon: (0, a.jsx)(u.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: E,
                                    className: C.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(u.ua7, {
                            text: 'Controls how much the primary/secondary colors are mixed into the tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    O(
                                        N(
                                            {
                                                className: i()(C.subheader, C.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Token Mix Amount' }
                                    )
                                )
                        }),
                        (0, a.jsx)(
                            u.iRW,
                            {
                                className: C.slider,
                                initialValue: A,
                                defaultValue: 100,
                                minValue: 0,
                                maxValue: 100,
                                onValueChange: S
                            },
                            'tokenMixAmount-'.concat(A)
                        ),
                        (0, a.jsx)(u.ua7, {
                            text: 'The color used for hyperlinks.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    O(
                                        N(
                                            {
                                                className: i()(C.subheader, C.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Link Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: C.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: d.link_color,
                                        onChange: g
                                    },
                                    'linkColor-'.concat(d.link_color)
                                ),
                                (0, a.jsx)(u.M0o, {
                                    color: 'currentColor',
                                    tooltip: y.intl.string(y.t.N86XcH),
                                    icon: (0, a.jsx)(u.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: T,
                                    className: C.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(u.zxk, {
                            className: C.resetButton,
                            onClick: w,
                            children: 'Reset'
                        })
                    ]
                })
        ]
    });
}
function S() {
    var e;
    let t = r.useCallback(() => {
            (0, g.Z1)(d.z.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedVersion: n } = (0, f.H4)(d.z.NITRO_TENURE_BADGE_LEVEL_UP),
        l = (null != n ? n : 0) > 0 ? _.Qh[n - 1] : null,
        i = null != l ? (null == (e = (0, v.fv)(l)) ? void 0 : e.nameUnformatted) : null;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.X6, {
                className: C.header,
                variant: 'heading-lg/semibold',
                children: 'Tenure Badges'
            }),
            (0, a.jsxs)('p', {
                children: [
                    'Level Up DC:\xA0',
                    null != i &&
                        (0, a.jsxs)('b', {
                            children: ['Dismissed (', y.intl.string(i), ')']
                        }),
                    null == i && (0, a.jsx)('b', { children: 'Not Dismissed' })
                ]
            }),
            (0, a.jsx)('div', {
                className: C.tenureBadgeControls,
                children: (0, a.jsx)(u.zxk, {
                    onClick: t,
                    children: 'Reset Level Up DC'
                })
            })
        ]
    });
}
let P = (0, s.debounce)(function (e, t) {
        null != e && (0, x.i)(e, { primary_color: t });
    }, 200),
    I = (0, s.debounce)(function (e, t) {
        null != e && (0, x.i)(e, { link_color: t });
    }, 200),
    k = (0, s.debounce)(function (e, t) {
        null != e && (0, x.i)(e, { secondary_color: t });
    }, 200);
