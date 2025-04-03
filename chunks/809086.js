r.d(t, {
    Z: () => f,
    e: () => b
});
var n = r(200651);
r(192379);
var o = r(468194),
    c = r(477690),
    l = r(166081),
    i = r(841762);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function a(e, t) {
    if (null == e) return {};
    var r,
        n,
        o = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = {},
                c = Object.keys(e);
            for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    }
    return o;
}
let s = (0, o.Mg)(c.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function f(e) {
    var { listing: t, imageSize: r, alt: o } = e,
        c = a(e, ['listing', 'imageSize', 'alt']);
    let i = (0, l.U)(t, r);
    return (0, n.jsx)(
        'img',
        u(
            {
                src: i,
                alt: o
            },
            c
        )
    );
}
function b(e) {
    var { listing: t, aspectRatio: r = 16 / 9, height: o } = e,
        c = a(e, ['listing', 'aspectRatio', 'height']);
    let f = (o - 2 * s) * r,
        b = (0, l.U)(t, f),
        d = (0, l.U)(t, f, { shouldAnimate: !1 });
    return (0, n.jsx)(
        i.Z,
        u(
            {
                src: b,
                backgroundSrc: d,
                aspectRatio: r
            },
            c
        )
    );
}
