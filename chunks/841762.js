n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(604569);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    var { alt: t } = e,
        n = p(e, ["alt"]);
    let [a, o] = i.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a &&
                (0, r.jsx)(s.$jN, {
                    type: s.$jN.Type.LOW_MOTION,
                    className: l.loader,
                }),
            (0, r.jsx)(
                "img",
                f(u({}, n), {
                    alt: t,
                    onLoad: () => o(!1),
                }),
            ),
        ],
    });
}
function h(e) {
    var { src: t, backgroundSrc: n, alt: i, aspectRatio: a, className: s, imageChildClassName: c } = e,
        d = p(e, ["src", "backgroundSrc", "alt", "aspectRatio", "className", "imageChildClassName"]);
    return (0, r.jsxs)("div", {
        className: o()(l.container, s),
        children: [
            (0, r.jsx)("img", {
                src: n,
                alt: i,
                className: l.backgroundImage,
            }),
            (0, r.jsx)("div", { className: l.backgroundImageFilter }),
            (0, r.jsx)("div", {
                style: { aspectRatio: a },
                className: l.imageContainer,
                children: (0, r.jsx)(
                    m,
                    u(
                        {
                            src: t,
                            alt: i,
                            className: o()(l.image, c),
                        },
                        d,
                    ),
                ),
            }),
        ],
    });
}
