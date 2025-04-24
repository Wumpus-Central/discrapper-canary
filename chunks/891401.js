n.d(t, { Z: () => v }), n(49124);
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
    x = n(680783),
    h = n(944486),
    p = n(145634);
function b(e) {
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
function f(e, t) {
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
function v() {
    return (0, a.jsx)('div', {
        className: p.container,
        children: (0, a.jsx)(j, {})
    });
}
function j() {
    let e = (0, c.e7)([h.Z], () => h.Z.getChannelId()),
        t = (0, x.Z)(e),
        n = null == t ? void 0 : t.wallpaperId,
        {
            opacity: l,
            primaryColor: s,
            secondaryColor: v,
            tokenMixAmount: j,
            linkColor: C
        } = (0, c.cj)(
            [u.Z],
            () => {
                var e, t, a, r, l, i, s, o, c, d;
                let m = u.Z.getWallpaperById(n);
                return {
                    opacity: null != (i = null == m || null == (e = m.default) ? void 0 : e.opacity) ? i : 1,
                    primaryColor: null != (s = null == m || null == (t = m.default) ? void 0 : t.primary_color) ? s : '#000000',
                    secondaryColor: null != (o = null == m || null == (a = m.default) ? void 0 : a.secondary_color) ? o : '#000000',
                    tokenMixAmount: null != (c = null == m || null == (r = m.default) ? void 0 : r.token_mix_amount) ? c : 100,
                    linkColor: null != (d = null == m || null == (l = m.default) ? void 0 : l.link_color) ? d : '#000000'
                };
            },
            [n]
        ),
        O = r.useCallback(
            (e) => {
                null != n && (0, m.i)(n, { opacity: e });
            },
            [n]
        ),
        N = r.useCallback(
            (e) => {
                g(null == t ? void 0 : t.wallpaperId, e.target.value);
            },
            [null == t ? void 0 : t.wallpaperId]
        ),
        E = r.useCallback(
            (e) => {
                y(null == t ? void 0 : t.wallpaperId, e.target.value);
            },
            [null == t ? void 0 : t.wallpaperId]
        ),
        T = r.useCallback(
            (e) => {
                _(null == t ? void 0 : t.wallpaperId, e.target.value);
            },
            [null == t ? void 0 : t.wallpaperId]
        ),
        S = r.useCallback(
            (e) => {
                null != n && (0, m.i)(n, { token_mix_amount: Math.round(e) });
            },
            [n]
        ),
        P = r.useCallback(() => {
            null != n && (0, m.i)(n, null);
        }, [n]);
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(o.X6, {
                className: p.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            null == t &&
                (0, a.jsx)('p', {
                    className: p.explanation,
                    children: 'Open a DM with a wallpaper to customize.'
                }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(o.X6, {
                            className: p.subheader,
                            variant: 'heading-md/semibold',
                            children: 'ChatWallpaperMetadataRecord'
                        }),
                        (0, a.jsx)('pre', {
                            className: p.code,
                            children: JSON.stringify(u.Z.getWallpaperById(n), null, 2)
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'The opacity of the wallpaper.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    f(
                                        b(
                                            {
                                                className: i()(p.subheader, p.hasTooltip),
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
                                className: p.slider,
                                initialValue: l,
                                defaultValue: 1,
                                minValue: 0,
                                maxValue: 1,
                                onValueChange: O
                            },
                            'opacity-'.concat(l)
                        ),
                        (0, a.jsx)(d.ua7, {
                            text: 'The most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    f(
                                        b(
                                            {
                                                className: i()(p.subheader, p.hasTooltip),
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
                            value: s,
                            onChange: N
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'The second most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    f(
                                        b(
                                            {
                                                className: i()(p.subheader, p.hasTooltip),
                                                variant: 'heading-md/semibold'
                                            },
                                            e
                                        ),
                                        { children: 'Secondary Color' }
                                    )
                                )
                        }),
                        (0, a.jsx)('input', {
                            type: 'color',
                            value: v,
                            onChange: E
                        }),
                        (0, a.jsx)(d.ua7, {
                            text: 'Controls how much the primary/secondary colors are mixed into the tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    f(
                                        b(
                                            {
                                                className: i()(p.subheader, p.hasTooltip),
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
                                className: p.slider,
                                initialValue: j,
                                defaultValue: 100,
                                minValue: 0,
                                maxValue: 100,
                                onValueChange: S
                            },
                            'tokenMixAmount-'.concat(j)
                        ),
                        (0, a.jsx)(d.ua7, {
                            text: 'The color used for hyperlinks.',
                            children: (e) =>
                                (0, a.jsx)(
                                    o.X6,
                                    f(
                                        b(
                                            {
                                                className: i()(p.subheader, p.hasTooltip),
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
                            value: C,
                            onChange: T
                        }),
                        (0, a.jsx)(d.zxk, {
                            className: p.resetButton,
                            onClick: P,
                            children: 'Reset'
                        })
                    ]
                })
        ]
    });
}
let g = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { primary_color: t });
    }, 200),
    _ = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { link_color: t });
    }, 200),
    y = (0, s.debounce)(function (e, t) {
        null != e && (0, m.i)(e, { secondary_color: t });
    }, 200);
