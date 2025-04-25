n.d(t, { Z: () => g }), n(49124);
var a = n(200651),
    r = n(192379),
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
    p = n(944486),
    b = n(388032),
    f = n(145634);
function v(e) {
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
function j(e, t) {
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
function g() {
    return (0, a.jsx)('div', {
        className: f.container,
        children: (0, a.jsx)(_, {})
    });
}
function _() {
    var e, t;
    let n = (0, c.e7)([p.Z], () => p.Z.getChannelId()),
        l = (0, h.Z)(n),
        s = null == l ? void 0 : l.wallpaperId,
        g = (0, x.Z)(s),
        _ = r.useCallback(
            (e) => {
                null != s && (0, m.i)(s, { opacity: e });
            },
            [s]
        ),
        E = r.useCallback(
            (e) => {
                y(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        N = r.useCallback(
            (e) => {
                C(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        T = r.useCallback(() => C(null == l ? void 0 : l.wallpaperId, void 0), [null == l ? void 0 : l.wallpaperId]),
        S = r.useCallback(
            (e) => {
                O(null == l ? void 0 : l.wallpaperId, e.target.value);
            },
            [null == l ? void 0 : l.wallpaperId]
        ),
        P = r.useCallback(
            (e) => {
                null != s && (0, m.i)(s, { token_mix_amount: Math.round(e) });
            },
            [s]
        ),
        w = r.useCallback(() => {
            null != s && (0, m.i)(s, null);
        }, [s]),
        k = null != (e = null == g ? void 0 : g.opacity) ? e : 1,
        I = null != (t = null == g ? void 0 : g.token_mix_amount) ? t : 100;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(o.X6, {
                className: f.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            null == g &&
                (0, a.jsx)('p', {
                    className: f.explanation,
                    children: 'Open a DM with a wallpaper to customize.'
                }),
            null != g &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(o.X6, {
                            className: f.subheader,
                            variant: 'heading-md/semibold',
                            children: 'ChatWallpaperMetadataRecord'
                        }),
                        (0, a.jsx)('pre', {
                            className: f.code,
                            children: JSON.stringify(u.Z.getWallpaperById(s), null, 2)
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'The opacity of the wallpaper.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    j(
                                        v(
                                            {
                                                className: i()(f.subheader, f.hasTooltip),
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
                                className: f.slider,
                                initialValue: k,
                                defaultValue: 1,
                                minValue: 0,
                                maxValue: 1,
                                onValueChange: _
                            },
                            'opacity-'.concat(k)
                        ),
                        (0, a.jsx)(d.ua7, {
                            text: 'The most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    j(
                                        v(
                                            {
                                                className: i()(f.subheader, f.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Primary Color' }
                                    )
                                )
                        }),
                        (0, a.jsx)('input', {
                            type: 'color',
                            value: g.primary_color,
                            onChange: E
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'The second most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    j(
                                        v(
                                            {
                                                className: i()(f.subheader, f.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Secondary Color' }
                                    )
                                )
                        }),
                        (0, a.jsxs)('div', {
                            className: f.colorInputContainer,
                            children: [
                                (0, a.jsx)(
                                    'input',
                                    {
                                        type: 'color',
                                        value: g.secondary_color,
                                        onChange: N
                                    },
                                    'secondaryColor-'.concat(g.secondary_color)
                                ),
                                (0, a.jsx)(d.M0o, {
                                    color: 'currentColor',
                                    tooltip: b.intl.string(b.t.N86XcH),
                                    icon: (0, a.jsx)(d.P$X, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    onClick: T,
                                    className: f.removeButton
                                })
                            ]
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'Controls how much the primary/secondary colors are mixed into the tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    j(
                                        v(
                                            {
                                                className: i()(f.subheader, f.hasTooltip),
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
                                className: f.slider,
                                initialValue: I,
                                defaultValue: 100,
                                minValue: 0,
                                maxValue: 100,
                                onValueChange: P
                            },
                            'tokenMixAmount-'.concat(I)
                        ),
                        (0, a.jsx)(d.ua7, {
                            text: 'The color used for hyperlinks.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    j(
                                        v(
                                            {
                                                className: i()(f.subheader, f.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Link Color' }
                                    )
                                )
                        }),
                        (0, a.jsx)('input', {
                            type: 'color',
                            value: g.link_color,
                            onChange: S
                        }),
                        (0, a.jsx)(d.zxk, {
                            className: f.resetButton,
                            onClick: w,
                            children: 'Reset'
                        })
                    ]
                })
        ]
    });
}
let y = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { primary_color: t });
    }, 200),
    O = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { link_color: t });
    }, 200),
    C = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { secondary_color: t });
    }, 200);
