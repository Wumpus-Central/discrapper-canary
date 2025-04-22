n.d(t, { Z: () => j }), n(49124);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(793030),
    c = n(442837),
    d = n(374558),
    u = n(481060),
    m = n(411149),
    x = n(151480),
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
function j() {
    return (0, a.jsx)('div', {
        className: f.container,
        children: (0, a.jsx)(_, {})
    });
}
function _() {
    let e = (0, c.e7)([p.Z], () => p.Z.getChannelId()),
        t = (0, h.Z)(e),
        n = null == t ? void 0 : t.wallpaperId,
        l = (0, c.e7)([m.Z], () => {
            var e, t;
            return null != (t = null == (e = m.Z.getWallpaperById(n)) ? void 0 : e.default.primary_color) ? t : '#000000';
        }),
        o = (0, c.e7)([m.Z], () => {
            var e, t;
            return null != (t = null == (e = m.Z.getWallpaperById(n)) ? void 0 : e.default.secondary_color) ? t : '#000000';
        }),
        j = r.useCallback(
            (e) => {
                y(null == t ? void 0 : t.wallpaperId, e.target.value);
            },
            [null == t ? void 0 : t.wallpaperId]
        ),
        _ = r.useCallback(
            (e) => {
                C(null == t ? void 0 : t.wallpaperId, e.target.value);
            },
            [null == t ? void 0 : t.wallpaperId]
        ),
        O = r.useCallback(() => {
            (null == t ? void 0 : t.wallpaperId) != null && (0, x.i)(t.wallpaperId, { primaryColor: void 0 });
        }, [null == t ? void 0 : t.wallpaperId]),
        E = r.useCallback(() => {
            (null == t ? void 0 : t.wallpaperId) != null && (0, x.i)(t.wallpaperId, { secondaryColor: void 0 });
        }, [null == t ? void 0 : t.wallpaperId]);
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(s.X6, {
                className: f.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            (0, a.jsx)(s.X6, {
                className: f.subheader,
                variant: 'heading-md/semibold',
                children: 'ChatWallpaperMetadataRecord'
            }),
            (0, a.jsx)('pre', {
                className: f.code,
                children: null != t ? JSON.stringify(t, null, 2) : 'None'
            }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(u.ua7, {
                            text: 'The most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    s.X6,
                                    g(
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
                        (0, a.jsxs)('div', {
                            className: f.colorInputContainer,
                            children: [
                                (0, a.jsx)('input', {
                                    type: 'color',
                                    value: l,
                                    onChange: j
                                }),
                                (0, a.jsx)(d.M0, {
                                    size: d.tT.SIZE_24,
                                    color: d.YX.TERTIARY,
                                    tooltip: b.intl.string(b.t.N86XcH),
                                    icon: (0, a.jsx)(u.Dio, { name: 'close' }),
                                    onClick: O
                                })
                            ]
                        }),
                        (0, a.jsx)(u.ua7, {
                            text: 'The second most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    s.X6,
                                    g(
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
                                (0, a.jsx)('input', {
                                    type: 'color',
                                    value: o,
                                    onChange: _
                                }),
                                (0, a.jsx)(d.M0, {
                                    size: d.tT.SIZE_24,
                                    color: d.YX.TERTIARY,
                                    tooltip: b.intl.string(b.t.N86XcH),
                                    icon: (0, a.jsx)(u.Dio, { name: 'close' }),
                                    onClick: E
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
let y = (0, o.debounce)(function (e, t) {
        null != e && (0, x.i)(e, { primaryColor: t });
    }, 200),
    C = (0, o.debounce)(function (e, t) {
        null != e && (0, x.i)(e, { secondaryColor: t });
    }, 200);
