n.d(t, { E: () => A });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(446108),
    d = n(956664),
    f = n(921948),
    _ = n(823023),
    p = n(981631),
    h = n(217702),
    m = n(388032),
    g = n(402187),
    E = n(167969),
    b = n(557256);
function y(e, t, n) {
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
function v(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = i.forwardRef((e, t) => {
    let n;
    var {
            className: a,
            imageClassName: s,
            readyState: c = p.zo9.READY,
            src: f,
            placeholder: h,
            placeholderVersion: E,
            alt: b,
            width: y,
            height: O,
            maxWidth: T = y,
            maxHeight: A = O,
            minWidth: P = 0,
            minHeight: w = 0,
            mediaLayoutType: D,
            limitResponsiveWidth: L = !0,
            accessory: x,
            zoomable: M = !0,
            original: k,
            children: j = (e) => {
                let { src: t, size: n, alt: i, className: a, mediaLayoutType: o } = e;
                return (0, r.jsx)('img', {
                    className: null != a ? a : void 0,
                    alt: null != i ? i : m.intl.string(m.t.X4IxWF),
                    src: t,
                    style: R(n, o)
                });
            },
            renderAccessory: U,
            onClick: G,
            tabIndex: B,
            dataSafeSrc: F,
            useFullWidth: V = !1,
            srcIsAnimated: Z
        } = e,
        H = S(e, ['className', 'imageClassName', 'readyState', 'src', 'placeholder', 'placeholderVersion', 'alt', 'width', 'height', 'maxWidth', 'maxHeight', 'minWidth', 'minHeight', 'mediaLayoutType', 'limitResponsiveWidth', 'accessory', 'zoomable', 'original', 'children', 'renderAccessory', 'onClick', 'tabIndex', 'dataSafeSrc', 'useFullWidth', 'srcIsAnimated']);
    let Y = i.useRef(null),
        W = i.useRef(null);
    if (1 === y && 1 === O) return null;
    let K = (0, d.Tj)({
            width: y,
            height: O,
            maxWidth: T,
            maxHeight: A,
            minWidth: P,
            minHeight: w
        }),
        z = 0 !== K.width ? K.width / K.height : 1;
    '' !== f && c !== p.zo9.ERROR
        ? (n = j({
              src: f,
              size: K,
              alt: b,
              className: s,
              mediaLayoutType: D
          }))
        : c !== p.zo9.LOADING &&
          (n = (0, r.jsx)(N, {
              size: K,
              mediaLayoutType: D,
              alt: b
          })),
        (n = (0, r.jsx)(_.N, {
            readyState: c,
            aspectRatio: z,
            placeholder: h,
            placeholderVersion: E,
            placeholderStyle: R(K, D),
            children: n
        }));
    let q = null != U ? U() : null;
    return (
        (q = null != q ? q : x),
        (0, r.jsx)(l.tEY, {
            ringTarget: Y,
            focusTarget: W,
            children: (0, r.jsxs)(
                'div',
                I(
                    v(
                        {
                            ref: t,
                            className: o()(
                                g.imageWrapper,
                                {
                                    [g.imageZoom]: M,
                                    [g.imageWrapperBackground]: c !== p.zo9.READY,
                                    [g.clickable]: null != G
                                },
                                a
                            ),
                            style: C(K, L, V, D)
                        },
                        H
                    ),
                    {
                        children: [
                            null != k &&
                                (0, r.jsx)('a', {
                                    tabIndex: -1,
                                    onClick: G,
                                    'aria-hidden': !0,
                                    className: g.originalLink,
                                    href: k,
                                    ref: Y,
                                    'data-role': 'img',
                                    'data-safe-src': null != F ? F : f
                                }),
                            null != G
                                ? (0, r.jsx)(l.P3F, {
                                      className: g.clickableWrapper,
                                      tabIndex: null != B ? B : 0,
                                      onClick: G,
                                      'aria-label': null != b ? b : m.intl.string(m.t.X4IxWF),
                                      'aria-describedby': u.r5,
                                      innerRef: W,
                                      focusProps: { enabled: !1 },
                                      children: n
                                  })
                                : n,
                            null != q
                                ? (0, r.jsx)('div', {
                                      className: g.imageAccessory,
                                      children: q
                                  })
                                : null
                        ]
                    }
                )
            )
        })
    );
});
function N(e) {
    let { size: t, mediaLayoutType: n, alt: i } = e,
        a = (0, c.ZP)();
    return (0, r.jsx)('div', {
        className: g.imageErrorWrapper,
        style: P(t, n),
        children: (0, r.jsx)('img', {
            src: (0, s.ap)(a) ? b : E,
            className: g.imageError,
            alt: null != i ? i : m.intl.string(m.t.X4IxWF)
        })
    });
}
function C(e, t, n, r) {
    return r === h.hV.MOSAIC
        ? {
              display: 'block',
              maxHeight: 'inherit',
              margin: 'auto',
              width: !n && e.width <= h.mT ? e.width : '100%',
              height: '100%'
          }
        : r === h.hV.RESPONSIVE
          ? {
                maxWidth: t ? e.width : void 0,
                width: '100%',
                aspectRatio: ''.concat(e.width, ' / ').concat(e.height)
            }
          : e;
}
function R(e, t) {
    switch (t) {
        case h.hV.MOSAIC:
            return {
                display: 'block',
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
                maxWidth: 1 === (0, f.Z)() ? 'calc(100% + 1px)' : '100%'
            };
        case h.hV.RESPONSIVE:
            return w(e);
        default:
            return e;
    }
}
function P(e, t) {
    switch (t) {
        case h.hV.MOSAIC:
            return {
                width: '100%',
                height: '100%',
                aspectRatio: ''.concat(e.width, ' / ').concat(e.height),
                display: 'flex',
                maxHeight: 'inherit'
            };
        case h.hV.RESPONSIVE:
            return I(v({}, w(e)), { display: 'flex' });
        default:
            return e;
    }
}
function w(e) {
    let { width: t, height: n } = e;
    return {
        maxWidth: t,
        maxHeight: n,
        width: '100%',
        display: 'block',
        aspectRatio: ''.concat(t, ' / ').concat(n)
    };
}
A.displayName = 'Image';
