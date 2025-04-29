n.d(t, {
    Z: () => d,
    e: () => m
});
var r = n(255367);
n(73800);
var i = n(468194),
    l = n(477690),
    s = n(166081),
    a = n(841762);
function o(e) {
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
let u = (0, i.Mg)(l.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function d(e) {
    var { listing: t, imageSize: n, alt: i } = e,
        l = c(e, ['listing', 'imageSize', 'alt']);
    let a = (0, s.U)(t, n);
    return (0, r.jsx)(
        'img',
        o(
            {
                src: a,
                alt: i
            },
            l
        )
    );
}
function m(e) {
    var { listing: t, aspectRatio: n = 16 / 9, height: i } = e,
        l = c(e, ['listing', 'aspectRatio', 'height']);
    let d = (i - 2 * u) * n,
        m = (0, s.U)(t, d),
        g = (0, s.U)(t, d, { shouldAnimate: !1 });
    return (0, r.jsx)(
        a.Z,
        o(
            {
                src: m,
                backgroundSrc: g,
                aspectRatio: n
            },
            l
        )
    );
}
