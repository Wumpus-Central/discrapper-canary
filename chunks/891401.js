n.d(t, { Z: () => C }), n(49124);
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
    b = n(605236),
    f = n(675478),
    v = n(944486),
    g = n(388032),
    j = n(145634);
function _(e) {
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
function y(e, t) {
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
function C() {
    return (0, a.jsxs)(u.Ttm, {
        className: j.container,
        children: [(0, a.jsx)(N, {}), (0, a.jsx)(O, {})]
    });
}
function N() {
    var e, t;
    let n = (0, c.e7)([v.Z], () => v.Z.getChannelId()),
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
                E(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        C = r.useCallback(
            (e) => {
                S(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        N = r.useCallback(
            (e) => {
                T(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        O = r.useCallback(() => E(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        P = r.useCallback(() => S(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        I = r.useCallback(() => T(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        w = r.useCallback(
            (e) => {
                null != s && (0, x.i)(s, { token_mix_amount: Math.round(e) });
            },
            [s]
        ),
        k = r.useCallback(() => {
            null != s && (0, x.i)(s, null);
        }, [s]),
        R = null != (e = null == d ? void 0 : d.opacity) ? e : 1,
        A = null != (t = null == d ? void 0 : d.token_mix_amount) ? t : 100;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(o.X6, {
                className: j.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            null == d &&
                (0, a.jsx)('p', {
                    className: j.explanation,
                    children: 'Open a DM with a wallpaper to customize.'
                }),
            null != d &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(o.X6, {
                            className: j.subheader,
                            variant: 'heading-md/semibold',
                            children: 'ChatWallpaperMetadataRecord'
                        }),
                        (0, a.jsx)('pre', {
                            className: j.code,
                            children: JSON.stringify(m.Z.getWallpaperById(s), null, 2)
                        }),
                        (0, a.jsx)(u.ua7, {
                            text: 'The opacity of the wallpaper.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    y(
                                        _(
                                            {
                                                className: i()(j.subheader, j.hasTooltip),
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
                                className: j.slider,
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
                                    y(
                                        _(
                                            {
                                                className: i()(j.subheader, j.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Primary Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: j.colorInputContainer,
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
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, a.jsx)(u.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: O,
                                    className: j.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(u.ua7, {
                            text: 'The second most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    y(
                                        _(
                                            {
                                                className: i()(j.subheader, j.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Secondary Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: j.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: d.secondary_color,
                                        onChange: C
                                    },
                                    'secondaryColor-'.concat(d.secondary_color)
                                ),
                                (0, a.jsx)(u.M0o, {
                                    color: 'currentColor',
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, a.jsx)(u.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: P,
                                    className: j.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(u.ua7, {
                            text: 'Controls how much the primary/secondary colors are mixed into the tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    y(
                                        _(
                                            {
                                                className: i()(j.subheader, j.hasTooltip),
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
                                className: j.slider,
                                initialValue: A,
                                defaultValue: 100,
                                minValue: 0,
                                maxValue: 100,
                                onValueChange: w
                            },
                            'tokenMixAmount-'.concat(A)
                        ),
                        (0, a.jsx)(u.ua7, {
                            text: 'The color used for hyperlinks.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    y(
                                        _(
                                            {
                                                className: i()(j.subheader, j.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Link Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: j.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: d.link_color,
                                        onChange: N
                                    },
                                    'linkColor-'.concat(d.link_color)
                                ),
                                (0, a.jsx)(u.M0o, {
                                    color: 'currentColor',
                                    tooltip: g.intl.string(g.t.N86XcH),
                                    icon: (0, a.jsx)(u.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: I,
                                    className: j.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(u.zxk, {
                            className: j.resetButton,
                            onClick: k,
                            children: 'Reset'
                        })
                    ]
                })
        ]
    });
}
function O() {
    let e = r.useCallback(() => {
            (0, f.Z1)(d.z.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, b.Fo)(d.z.NITRO_TENURE_BADGE_LEVEL_UP),
        n = null != t ? new Date(t) : null;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.X6, {
                className: j.header,
                variant: 'heading-lg/semibold',
                children: 'Tenure Badges'
            }),
            (0, a.jsxs)('p', {
                children: [
                    'Level Up DC:\xA0',
                    null != n &&
                        (0, a.jsxs)('b', {
                            children: ['Dismissed (', n.toLocaleDateString(), ')']
                        }),
                    null == n && (0, a.jsx)('b', { children: 'Not Dismissed' })
                ]
            }),
            (0, a.jsx)('div', {
                className: j.tenureBadgeControls,
                children: (0, a.jsx)(u.zxk, {
                    onClick: e,
                    children: 'Reset Level Up DC'
                })
            })
        ]
    });
}
let E = (0, s.debounce)(function (e, t) {
        null != e && (0, x.i)(e, { primary_color: t });
    }, 200),
    T = (0, s.debounce)(function (e, t) {
        null != e && (0, x.i)(e, { link_color: t });
    }, 200),
    S = (0, s.debounce)(function (e, t) {
        null != e && (0, x.i)(e, { secondary_color: t });
    }, 200);
