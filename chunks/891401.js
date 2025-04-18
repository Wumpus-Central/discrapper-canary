n.d(t, { Z: () => b }), n(49124);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(411149),
    u = n(680783),
    m = n(944486),
    x = n(145634);
function h(e) {
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
function p(e, t) {
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
function b() {
    return (0, a.jsx)('div', {
        className: x.container,
        children: (0, a.jsx)(f, {})
    });
}
function f() {
    let e = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
        t = (0, u.Z)(e),
        n = null == t ? void 0 : t.wallpaperId,
        l = (0, o.e7)([d.Z], () => {
            var e, t;
            return null != (t = null == (e = d.Z.getWallpaperById(n)) ? void 0 : e.primaryColor) ? t : '#000000';
        }),
        b = (0, o.e7)([d.Z], () => {
            var e, t;
            return null != (t = null == (e = d.Z.getWallpaperById(n)) ? void 0 : e.secondaryColor) ? t : '#000000';
        }),
        f = r.useCallback(() => {}, []),
        v = r.useCallback(() => {}, []);
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(s.X6, {
                className: x.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            (0, a.jsx)(s.X6, {
                className: x.subheader,
                variant: 'heading-md/semibold',
                children: 'ChatWallpaperMetadataRecord'
            }),
            (0, a.jsx)('pre', {
                className: x.code,
                children: null != t ? JSON.stringify(t, null, 2) : 'None'
            }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(c.ua7, {
                            text: 'The most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    s.X6,
                                    p(
                                        h(
                                            {
                                                className: i()(x.subheader, x.hasTooltip),
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
                            value: l,
                            onChange: f
                        }),
                        (0, a.jsx)(c.ua7, {
                            text: 'The second most prominent color in the wallpaper. This will be used to adjust the color tokens.',
                            children: (e) =>
                                (0, a.jsx)(
                                    s.X6,
                                    p(
                                        h(
                                            {
                                                className: i()(x.subheader, x.hasTooltip),
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
                            value: b,
                            onChange: v
                        })
                    ]
                })
        ]
    });
}
