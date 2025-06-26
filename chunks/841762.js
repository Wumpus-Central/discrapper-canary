n.d(t, { Z: () => c }), n(388685);
var i = n(255367),
    s = n(73800),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(900609);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        i,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                s = {},
                r = Object.keys(e);
            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (s[n] = e[n]);
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    }
    return s;
}
function u(e) {
    var t,
        n,
        { alt: r } = e,
        l = h(e, ['alt']);
    let [u, c] = s.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u &&
                (0, i.jsx)(a.$jN, {
                    type: a.$jN.Type.LOW_MOTION,
                    className: o.loader
                }),
            (0, i.jsx)(
                'img',
                ((t = d({}, l)),
                (n = n =
                    {
                        alt: r,
                        onLoad: () => c(!1)
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
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
function c(e) {
    var { src: t, backgroundSrc: n, alt: s, aspectRatio: r, className: a, imageChildClassName: c } = e,
        g = h(e, ['src', 'backgroundSrc', 'alt', 'aspectRatio', 'className', 'imageChildClassName']);
    return (0, i.jsxs)('div', {
        className: l()(o.container, a),
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: s,
                className: o.backgroundImage
            }),
            (0, i.jsx)('div', { className: o.backgroundImageFilter }),
            (0, i.jsx)('div', {
                style: { aspectRatio: r },
                className: o.imageContainer,
                children: (0, i.jsx)(
                    u,
                    d(
                        {
                            src: t,
                            alt: s,
                            className: l()(o.image, c)
                        },
                        g
                    )
                )
            })
        ]
    });
}
