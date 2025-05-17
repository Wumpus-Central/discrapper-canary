n.d(t, { Z: () => _ }), n(49124);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n(793030),
    c = n(442837),
    d = n(481060),
    u = n(411149),
    m = n(151480),
    x = n(461762),
    h = n(680783),
    p = n(553049),
    b = n(944486),
    f = n(388032),
    v = n(145634);
function j(e) {
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
function g(e, t) {
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
function _() {
    return (0, a.jsxs)('div', {
        className: v.container,
        children: [(0, a.jsx)(y, {}), (0, a.jsx)(p.Z, {})]
    });
}
function y() {
    var e, t;
    let n = (0, c.e7)([b.Z], () => b.Z.getChannelId()),
        l = (0, h.Z)(n),
        s = null == l ? void 0 : l.wallpaperId,
        p = (0, x.Z)(s),
        _ = r.useCallback(
            (e) => {
                null != s && (0, m.i)(s, { opacity: e });
            },
            [s]
        ),
        y = r.useCallback(
            (e) => {
                C(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        E = r.useCallback(
            (e) => {
                N(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        S = r.useCallback(
            (e) => {
                O(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        T = r.useCallback(() => C(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        P = r.useCallback(() => N(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        k = r.useCallback(() => O(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        w = r.useCallback(
            (e) => {
                null != s && (0, m.i)(s, { token_mix_amount: Math.round(e) });
            },
            [s]
        ),
        I = r.useCallback(() => {
            null != s && (0, m.i)(s, null);
        }, [s]),
        R = null != (e = null == p ? void 0 : p.opacity) ? e : 1,
        Z = null != (t = null == p ? void 0 : p.token_mix_amount) ? t : 100;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(o.X6, {
                className: v.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            null == p &&
                (0, a.jsx)('p', {
                    className: v.explanation,
                    children: 'Open a DM with a wallpaper to customize.'
                }),
            null != p &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(o.X6, {
                            className: v.subheader,
                            variant: 'heading-md/semibold',
                            children: 'ChatWallpaperMetadataRecord'
                        }),
                        (0, a.jsx)('pre', {
                            className: v.code,
                            children: JSON.stringify(u.Z.getWallpaperById(s), null, 2)
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'The opacity of the wallpaper.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    g(
                                        j(
                                            {
                                                className: i()(v.subheader, v.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Opacity' }
                                    )
                                )
                        }),
                        (0, a.jsx)(
                            d.iRW,
                            {
                                className: v.slider,
                                initialValue: R,
                                defaultValue: 1,
                                minValue: 0,
                                maxValue: 1,
                                onValueChange: _
                            },
                            'opacity-'.concat(R)
                        ),
                        (0, a.jsx)(d.ua7, {
                            text: 'The most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    g(
                                        j(
                                            {
                                                className: i()(v.subheader, v.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Primary Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: v.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: p.primary_color,
                                        onChange: y
                                    },
                                    'primaryColor-'.concat(p.primary_color)
                                ),
                                (0, a.jsx)(d.M0o, {
                                    color: 'currentColor',
                                    tooltip: f.intl.string(f.t.N86XcH),
                                    icon: (0, a.jsx)(d.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: T,
                                    className: v.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'The second most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    g(
                                        j(
                                            {
                                                className: i()(v.subheader, v.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Secondary Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: v.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: p.secondary_color,
                                        onChange: E
                                    },
                                    'secondaryColor-'.concat(p.secondary_color)
                                ),
                                (0, a.jsx)(d.M0o, {
                                    color: 'currentColor',
                                    tooltip: f.intl.string(f.t.N86XcH),
                                    icon: (0, a.jsx)(d.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: P,
                                    className: v.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'Controls how much the primary/secondary colors are mixed into the tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    g(
                                        j(
                                            {
                                                className: i()(v.subheader, v.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Token Mix Amount' }
                                    )
                                )
                        }),
                        (0, a.jsx)(
                            d.iRW,
                            {
                                className: v.slider,
                                initialValue: Z,
                                defaultValue: 100,
                                minValue: 0,
                                maxValue: 100,
                                onValueChange: w
                            },
                            'tokenMixAmount-'.concat(Z)
                        ),
                        (0, a.jsx)(d.ua7, {
                            text: 'The color used for hyperlinks.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    g(
                                        j(
                                            {
                                                className: i()(v.subheader, v.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Link Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: v.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: p.link_color,
                                        onChange: S
                                    },
                                    'linkColor-'.concat(p.link_color)
                                ),
                                (0, a.jsx)(d.M0o, {
                                    color: 'currentColor',
                                    tooltip: f.intl.string(f.t.N86XcH),
                                    icon: (0, a.jsx)(d.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: k,
                                    className: v.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(d.zxk, {
                            className: v.resetButton,
                            onClick: I,
                            children: 'Reset'
                        })
                    ]
                })
        ]
    });
}
let C = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { primary_color: t });
    }, 200),
    O = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { link_color: t });
    }, 200),
    N = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { secondary_color: t });
    }, 200);
