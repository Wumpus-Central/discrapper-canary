n.d(t, { E: () => T }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(780384),
    u = n(481060),
    c = n(410030),
    d = n(446108),
    f = n(956664),
    _ = n(921948),
    p = n(823023),
    h = n(981631),
    m = n(217702),
    g = n(388032),
    E = n(798022),
    v = n(167969),
    y = n(557256);
function I(e, t, n) {
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
class T extends (i = a.PureComponent) {
    render() {
        let e;
        let { className: t, imageClassName: n, readyState: i, src: a, placeholder: s, placeholderVersion: l, alt: c, width: _, height: m, maxWidth: v = _, maxHeight: y = m, minWidth: I, minHeight: T, mediaLayoutType: N, limitResponsiveWidth: C = !0, accessory: R, zoomable: O, original: D, children: L, renderAccessory: x, onClick: P, tabIndex: w, dataSafeSrc: M, useFullWidth: k = !1, ...U } = this.props;
        if (1 === _ && 1 === m) return null;
        let G = (0, f.Tj)({
                width: _,
                height: m,
                maxWidth: v,
                maxHeight: y,
                minWidth: I,
                minHeight: T
            }),
            B = 0 !== G.width ? G.width / G.height : 1;
        '' !== a && i !== h.zo9.ERROR
            ? (e = L({
                  src: a,
                  size: G,
                  alt: c,
                  className: n,
                  mediaLayoutType: N
              }))
            : i !== h.zo9.LOADING &&
              (e = (0, r.jsx)(b, {
                  size: G,
                  mediaLayoutType: N,
                  alt: c
              })),
            (e = (0, r.jsx)(p.N, {
                readyState: i,
                aspectRatio: B,
                placeholder: s,
                placeholderVersion: l,
                placeholderStyle: A(G, N),
                children: e
            }));
        let Z = null != x ? x() : null;
        return (
            (Z = null != Z ? Z : R),
            (0, r.jsx)(u.tEY, {
                ringTarget: this._containerRef,
                focusTarget: this._clickableRef,
                children: (0, r.jsxs)('div', {
                    className: o()(
                        E.imageWrapper,
                        {
                            [E.imageZoom]: O,
                            [E.imageWrapperBackground]: i !== h.zo9.READY,
                            [E.clickable]: null != P
                        },
                        t
                    ),
                    style: S(G, C, k, N),
                    ...U,
                    children: [
                        null != D &&
                            (0, r.jsx)('a', {
                                tabIndex: -1,
                                onClick: P,
                                'aria-hidden': !0,
                                className: E.originalLink,
                                href: D,
                                ref: this._containerRef,
                                'data-role': 'img',
                                'data-safe-src': null != M ? M : a
                            }),
                        null != P
                            ? (0, r.jsx)(u.P3F, {
                                  className: E.clickableWrapper,
                                  tabIndex: null != w ? w : 0,
                                  onClick: P,
                                  'aria-label': null != c ? c : g.intl.string(g.t.X4IxWF),
                                  'aria-describedby': d.r5,
                                  innerRef: this._clickableRef,
                                  focusProps: { enabled: !1 },
                                  children: e
                              })
                            : e,
                        null != Z
                            ? (0, r.jsx)('div', {
                                  className: E.imageAccessory,
                                  children: Z
                              })
                            : null
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e), I(this, '_containerRef', a.createRef()), I(this, '_clickableRef', a.createRef());
    }
}
function b(e) {
    let { size: t, mediaLayoutType: n, alt: i } = e,
        a = (0, c.ZP)();
    return (0, r.jsx)('div', {
        className: E.imageErrorWrapper,
        style: N(t, n),
        children: (0, r.jsx)('img', {
            src: (0, l.ap)(a) ? y : v,
            className: E.imageError,
            alt: null != i ? i : g.intl.string(g.t.X4IxWF)
        })
    });
}
function S(e, t, n, i) {
    return i === m.hV.MOSAIC
        ? {
              display: 'block',
              maxHeight: 'inherit',
              margin: 'auto',
              width: !n && e.width <= m.mT ? e.width : '100%',
              height: '100%'
          }
        : i === m.hV.RESPONSIVE
          ? {
                maxWidth: t ? e.width : void 0,
                width: '100%',
                aspectRatio: ''.concat(e.width, ' / ').concat(e.height)
            }
          : e;
}
function A(e, t) {
    switch (t) {
        case m.hV.MOSAIC:
            return {
                display: 'block',
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
                maxWidth: 1 === (0, _.Z)() ? 'calc(100% + 1px)' : '100%'
            };
        case m.hV.RESPONSIVE:
            return C(e);
        default:
            return e;
    }
}
function N(e, t) {
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
            return {
                ...C(e),
                display: 'flex'
            };
        default:
            return e;
    }
}
function C(e) {
    let { width: t, height: n } = e;
    return {
        maxWidth: t,
        maxHeight: n,
        width: '100%',
        display: 'block',
        aspectRatio: ''.concat(t, ' / ').concat(n)
    };
}
I(T, 'defaultProps', {
    readyState: h.zo9.READY,
    zoomable: !0,
    children: (e) => {
        let { src: t, size: n, alt: i, className: a, mediaLayoutType: s } = e;
        return (0, r.jsx)('img', {
            className: null != a ? a : void 0,
            alt: null != i ? i : g.intl.string(g.t.X4IxWF),
            src: t,
            style: A(n, s)
        });
    },
    minWidth: 0,
    minHeight: 0
});
