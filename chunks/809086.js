n.d(t, {
    Z: () => u,
    e: () => m
});
var r = n(200651);
n(192379);
var i = n(468194),
    s = n(477690),
    a = n(166081),
    l = n(841762);
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
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let d = (0, i.Mg)(s.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function u(e) {
    var { listing: t, imageSize: n, alt: i } = e,
        s = c(e, ['listing', 'imageSize', 'alt']);
    let l = (0, a.U)(t, n);
    return (0, r.jsx)(
        'img',
        o(
            {
                src: l,
                alt: i
            },
            s
        )
    );
}
function m(e) {
    var { listing: t, aspectRatio: n = 16 / 9, height: i } = e,
        s = c(e, ['listing', 'aspectRatio', 'height']);
    let u = (i - 2 * d) * n,
        m = (0, a.U)(t, u),
        g = (0, a.U)(t, u, { shouldAnimate: !1 });
    return (0, r.jsx)(
        l.Z,
        o(
            {
                src: m,
                backgroundSrc: g,
                aspectRatio: n
            },
            s
        )
    );
}
