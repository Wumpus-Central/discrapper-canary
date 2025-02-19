n.d(t, { E: () => A }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(446108),
    f = n(956664),
    p = n(921948),
    _ = n(823023),
    h = n(981631),
    m = n(217702),
    g = n(388032),
    E = n(952219),
    v = n(167969),
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
function O(e) {
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
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class A extends (r = o.PureComponent) {
    render() {
        let e;
        let t = this.props,
            { className: n, imageClassName: r, readyState: o, src: a, placeholder: l, placeholderVersion: u, alt: p, width: m, height: v, maxWidth: b = m, maxHeight: y = v, minWidth: S, minHeight: N, mediaLayoutType: A, limitResponsiveWidth: w = !0, accessory: D, zoomable: x, original: L, children: M, renderAccessory: k, onClick: j, tabIndex: U, dataSafeSrc: G, useFullWidth: B = !1 } = t,
            Z = T(t, ['className', 'imageClassName', 'readyState', 'src', 'placeholder', 'placeholderVersion', 'alt', 'width', 'height', 'maxWidth', 'maxHeight', 'minWidth', 'minHeight', 'mediaLayoutType', 'limitResponsiveWidth', 'accessory', 'zoomable', 'original', 'children', 'renderAccessory', 'onClick', 'tabIndex', 'dataSafeSrc', 'useFullWidth']);
        if (1 === m && 1 === v) return null;
        let F = (0, f.Tj)({
                width: m,
                height: v,
                maxWidth: b,
                maxHeight: y,
                minWidth: S,
                minHeight: N
            }),
            V = 0 !== F.width ? F.width / F.height : 1;
        '' !== a && o !== h.zo9.ERROR
            ? (e = M({
                  src: a,
                  size: F,
                  alt: p,
                  className: r,
                  mediaLayoutType: A
              }))
            : o !== h.zo9.LOADING &&
              (e = (0, i.jsx)(C, {
                  size: F,
                  mediaLayoutType: A,
                  alt: p
              })),
            (e = (0, i.jsx)(_.N, {
                readyState: o,
                aspectRatio: V,
                placeholder: l,
                placeholderVersion: u,
                placeholderStyle: P(F, A),
                children: e
            }));
        let H = null != k ? k() : null;
        return (
            (H = null != H ? H : D),
            (0, i.jsx)(c.tEY, {
                ringTarget: this._containerRef,
                focusTarget: this._clickableRef,
                children: (0, i.jsxs)(
                    'div',
                    I(
                        O(
                            {
                                className: s()(
                                    E.imageWrapper,
                                    {
                                        [E.imageZoom]: x,
                                        [E.imageWrapperBackground]: o !== h.zo9.READY,
                                        [E.clickable]: null != j
                                    },
                                    n
                                ),
                                style: R(F, w, B, A)
                            },
                            Z
                        ),
                        {
                            children: [
                                null != L &&
                                    (0, i.jsx)('a', {
                                        tabIndex: -1,
                                        onClick: j,
                                        'aria-hidden': !0,
                                        className: E.originalLink,
                                        href: L,
                                        ref: this._containerRef,
                                        'data-role': 'img',
                                        'data-safe-src': null != G ? G : a
                                    }),
                                null != j
                                    ? (0, i.jsx)(c.P3F, {
                                          className: E.clickableWrapper,
                                          tabIndex: null != U ? U : 0,
                                          onClick: j,
                                          'aria-label': null != p ? p : g.NW.string(g.t.X4IxWF),
                                          'aria-describedby': d.r5,
                                          innerRef: this._clickableRef,
                                          focusProps: { enabled: !1 },
                                          children: e
                                      })
                                    : e,
                                null != H
                                    ? (0, i.jsx)('div', {
                                          className: E.imageAccessory,
                                          children: H
                                      })
                                    : null
                            ]
                        }
                    )
                )
            })
        );
    }
    constructor(...e) {
        super(...e), y(this, '_containerRef', o.createRef()), y(this, '_clickableRef', o.createRef());
    }
}
function C(e) {
    let { size: t, mediaLayoutType: n, alt: r } = e,
        o = (0, u.ZP)();
    return (0, i.jsx)('div', {
        className: E.imageErrorWrapper,
        style: w(t, n),
        children: (0, i.jsx)('img', {
            src: (0, l.ap)(o) ? b : v,
            className: E.imageError,
            alt: null != r ? r : g.NW.string(g.t.X4IxWF)
        })
    });
}
function R(e, t, n, r) {
    return r === m.hV.MOSAIC
        ? {
              display: 'block',
              maxHeight: 'inherit',
              margin: 'auto',
              width: !n && e.width <= m.mT ? e.width : '100%',
              height: '100%'
          }
        : r === m.hV.RESPONSIVE
          ? {
                maxWidth: t ? e.width : void 0,
                width: '100%',
                aspectRatio: ''.concat(e.width, ' / ').concat(e.height)
            }
          : e;
}
function P(e, t) {
    switch (t) {
        case m.hV.MOSAIC:
            return {
                display: 'block',
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
                maxWidth: 1 === (0, p.Z)() ? 'calc(100% + 1px)' : '100%'
            };
        case m.hV.RESPONSIVE:
            return D(e);
        default:
            return e;
    }
}
function w(e, t) {
    switch (t) {
        case m.hV.MOSAIC:
            return {
                width: '100%',
                height: '100%',
                aspectRatio: ''.concat(e.width, ' / ').concat(e.height),
                display: 'flex',
                maxHeight: 'inherit'
            };
        case m.hV.RESPONSIVE:
            return I(O({}, D(e)), { display: 'flex' });
        default:
            return e;
    }
}
function D(e) {
    let { width: t, height: n } = e;
    return {
        maxWidth: t,
        maxHeight: n,
        width: '100%',
        display: 'block',
        aspectRatio: ''.concat(t, ' / ').concat(n)
    };
}
y(A, 'defaultProps', {
    readyState: h.zo9.READY,
    zoomable: !0,
    children: (e) => {
        let { src: t, size: n, alt: r, className: o, mediaLayoutType: a } = e;
        return (0, i.jsx)('img', {
            className: null != o ? o : void 0,
            alt: null != r ? r : g.NW.string(g.t.X4IxWF),
            src: t,
            style: P(n, a)
        });
    },
    minWidth: 0,
    minHeight: 0
});
