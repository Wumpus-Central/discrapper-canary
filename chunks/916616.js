r.d(n, {
    E: function () {
        return S;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(780384),
    d = r(481060),
    f = r(410030),
    p = r(446108),
    h = r(956664),
    _ = r(921948),
    m = r(823023),
    g = r(981631),
    E = r(217702),
    v = r(388032),
    y = r(319378),
    b = r(167969),
    I = r(557256);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class S extends (i = s.PureComponent) {
    render() {
        let e;
        let { className: n, imageClassName: r, readyState: i, src: a, placeholder: s, placeholderVersion: l, alt: c, width: f, height: _, maxWidth: E = f, maxHeight: b = _, minWidth: I, minHeight: T, mediaLayoutType: S, limitResponsiveWidth: R = !0, accessory: O, zoomable: D, original: L, children: x, renderAccessory: w, onClick: P, tabIndex: M, dataSafeSrc: k, useFullWidth: U = !1, ...B } = this.props;
        if (1 === f && 1 === _) return null;
        let G = (0, h.Tj)({
                width: f,
                height: _,
                maxWidth: E,
                maxHeight: b,
                minWidth: I,
                minHeight: T
            }),
            Z = 0 !== G.width ? G.width / G.height : 1;
        '' !== a && i !== g.zo9.ERROR
            ? (e = x({
                  src: a,
                  size: G,
                  alt: c,
                  className: r,
                  mediaLayoutType: S
              }))
            : i !== g.zo9.LOADING &&
              (e = (0, o.jsx)(A, {
                  size: G,
                  mediaLayoutType: S,
                  alt: c
              })),
            (e = (0, o.jsx)(m.N, {
                readyState: i,
                aspectRatio: Z,
                placeholder: s,
                placeholderVersion: l,
                placeholderStyle: N(G, S),
                children: e
            }));
        let F = null != w ? w() : null;
        return (
            (F = null != F ? F : O),
            (0, o.jsx)(d.FocusRing, {
                ringTarget: this._containerRef,
                focusTarget: this._clickableRef,
                children: (0, o.jsxs)('div', {
                    className: u()(
                        y.imageWrapper,
                        {
                            [y.imageZoom]: D,
                            [y.imageWrapperBackground]: i !== g.zo9.READY,
                            [y.clickable]: null != P
                        },
                        n
                    ),
                    style: C(G, R, U, S),
                    ...B,
                    children: [
                        null != L &&
                            (0, o.jsx)('a', {
                                tabIndex: -1,
                                onClick: P,
                                'aria-hidden': !0,
                                className: y.originalLink,
                                href: L,
                                ref: this._containerRef,
                                'data-role': 'img',
                                'data-safe-src': null != k ? k : a
                            }),
                        null != P
                            ? (0, o.jsx)(d.Clickable, {
                                  className: y.clickableWrapper,
                                  tabIndex: null != M ? M : 0,
                                  onClick: P,
                                  'aria-label': null != c ? c : v.intl.string(v.t.X4IxWF),
                                  'aria-describedby': p.r5,
                                  innerRef: this._clickableRef,
                                  focusProps: { enabled: !1 },
                                  children: e
                              })
                            : e,
                        null != F
                            ? (0, o.jsx)('div', {
                                  className: y.imageAccessory,
                                  children: F
                              })
                            : null
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e), T(this, '_containerRef', s.createRef()), T(this, '_clickableRef', s.createRef());
    }
}
function A(e) {
    let { size: n, mediaLayoutType: r, alt: i } = e,
        a = (0, f.ZP)();
    return (0, o.jsx)('div', {
        className: y.imageErrorWrapper,
        style: R(n, r),
        children: (0, o.jsx)('img', {
            src: (0, c.ap)(a) ? I : b,
            className: y.imageError,
            alt: null != i ? i : v.intl.string(v.t.X4IxWF)
        })
    });
}
function C(e, n, r, i) {
    return i === E.hV.MOSAIC
        ? {
              display: 'block',
              maxHeight: 'inherit',
              margin: 'auto',
              width: !r && e.width <= E.mT ? e.width : '100%',
              height: '100%'
          }
        : i === E.hV.RESPONSIVE
          ? {
                maxWidth: n ? e.width : void 0,
                width: '100%',
                aspectRatio: ''.concat(e.width, ' / ').concat(e.height)
            }
          : e;
}
function N(e, n) {
    switch (n) {
        case E.hV.MOSAIC:
            return {
                display: 'block',
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
                maxWidth: 1 === (0, _.Z)() ? 'calc(100% + 1px)' : '100%'
            };
        case E.hV.RESPONSIVE:
            return O(e);
        default:
            return e;
    }
}
function R(e, n) {
    switch (n) {
        case E.hV.MOSAIC:
            return {
                width: '100%',
                height: '100%',
                aspectRatio: ''.concat(e.width, ' / ').concat(e.height),
                display: 'flex',
                maxHeight: 'inherit'
            };
        case E.hV.RESPONSIVE:
            return {
                ...O(e),
                display: 'flex'
            };
        default:
            return e;
    }
}
function O(e) {
    let { width: n, height: r } = e;
    return {
        maxWidth: n,
        maxHeight: r,
        width: '100%',
        display: 'block',
        aspectRatio: ''.concat(n, ' / ').concat(r)
    };
}
T(S, 'defaultProps', {
    readyState: g.zo9.READY,
    zoomable: !0,
    children: (e) => {
        let { src: n, size: r, alt: i, className: a, mediaLayoutType: s } = e;
        return (0, o.jsx)('img', {
            className: null != a ? a : void 0,
            alt: null != i ? i : v.intl.string(v.t.X4IxWF),
            src: n,
            style: N(r, s)
        });
    },
    minWidth: 0,
    minHeight: 0
});
