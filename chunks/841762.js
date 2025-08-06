(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(900609);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function h(e) {
    var { alt: t } = e,
        n = _(e, ['alt']);
    let [o, a] = i.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o &&
                (0, r.jsx)(s.$jN, {
                    type: s.$jN.Type.LOW_MOTION,
                    className: l.loader
                }),
            (0, r.jsx)(
                'img',
                f(u({}, n), {
                    alt: t,
                    onLoad: () => a(!1)
                })
            )
        ]
    });
}
function m(e) {
    var { src: t, backgroundSrc: n, alt: i, aspectRatio: o, className: s, imageChildClassName: c } = e,
        d = _(e, ['src', 'backgroundSrc', 'alt', 'aspectRatio', 'className', 'imageChildClassName']);
    return (0, r.jsxs)('div', {
        className: a()(l.container, s),
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: i,
                className: l.backgroundImage
            }),
            (0, r.jsx)('div', { className: l.backgroundImageFilter }),
            (0, r.jsx)('div', {
                style: { aspectRatio: o },
                className: l.imageContainer,
                children: (0, r.jsx)(
                    h,
                    u(
                        {
                            src: t,
                            alt: i,
                            className: a()(l.image, c)
                        },
                        d
                    )
                )
            })
        ]
    });
}
