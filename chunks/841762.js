n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    u = n(867936);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e) {
    var t,
        n,
        { alt: l } = e,
        a = c(e, ['alt']);
    let [d, p] = i.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            d &&
                (0, r.jsx)(o.$jN, {
                    type: o.$jN.Type.LOW_MOTION,
                    className: u.loader
                }),
            (0, r.jsx)(
                'img',
                ((t = s({}, a)),
                (n = n =
                    {
                        alt: l,
                        onLoad: () => p(!1)
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            )
        ]
    });
}
function p(e) {
    var { src: t, backgroundSrc: n, alt: i, aspectRatio: l, className: o, imageChildClassName: p } = e,
        g = c(e, ['src', 'backgroundSrc', 'alt', 'aspectRatio', 'className', 'imageChildClassName']);
    return (0, r.jsxs)('div', {
        className: a()(u.container, o),
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: i,
                className: u.backgroundImage
            }),
            (0, r.jsx)('div', { className: u.backgroundImageFilter }),
            (0, r.jsx)('div', {
                style: { aspectRatio: l },
                className: u.imageContainer,
                children: (0, r.jsx)(
                    d,
                    s(
                        {
                            src: t,
                            alt: i,
                            className: a()(u.image, p)
                        },
                        g
                    )
                )
            })
        ]
    });
}
