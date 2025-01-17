r.d(n, {
    E: function () {
        return S;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(780384),
    d = r(481060),
    f = r(410030),
    _ = r(446108),
    h = r(956664),
    p = r(921948),
    m = r(823023),
    g = r(981631),
    E = r(217702),
    v = r(388032),
    I = r(319378),
    T = r(167969),
    b = r(557256);
function y(e, n, r) {
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
class S extends (i = o.PureComponent) {
    render() {
        let e;
        let { className: n, imageClassName: r, readyState: i, src: a, placeholder: o, placeholderVersion: l, alt: c, width: f, height: p, maxWidth: E = f, maxHeight: T = p, minWidth: b, minHeight: y, mediaLayoutType: S, limitResponsiveWidth: R = !0, accessory: O, zoomable: D, original: L, children: x, renderAccessory: w, onClick: P, tabIndex: M, dataSafeSrc: k, useFullWidth: U = !1, ...B } = this.props;
        if (1 === f && 1 === p) return null;
        let G = (0, h.Tj)({
                width: f,
                height: p,
                maxWidth: E,
                maxHeight: T,
                minWidth: b,
                minHeight: y
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
              (e = (0, s.jsx)(A, {
                  size: G,
                  mediaLayoutType: S,
                  alt: c
              })),
            (e = (0, s.jsx)(m.N, {
                readyState: i,
                aspectRatio: Z,
                placeholder: o,
                placeholderVersion: l,
                placeholderStyle: C(G, S),
                children: e
            }));
        let F = null != w ? w() : null;
        return (
            (F = null != F ? F : O),
            (0, s.jsx)(d.FocusRing, {
                ringTarget: this._containerRef,
                focusTarget: this._clickableRef,
                children: (0, s.jsxs)('div', {
                    className: u()(
                        I.imageWrapper,
                        {
                            [I.imageZoom]: D,
                            [I.imageWrapperBackground]: i !== g.zo9.READY,
                            [I.clickable]: null != P
                        },
                        n
                    ),
                    style: N(G, R, U, S),
                    ...B,
                    children: [
                        null != L &&
                            (0, s.jsx)('a', {
                                tabIndex: -1,
                                onClick: P,
                                'aria-hidden': !0,
                                className: I.originalLink,
                                href: L,
                                ref: this._containerRef,
                                'data-role': 'img',
                                'data-safe-src': null != k ? k : a
                            }),
                        null != P
                            ? (0, s.jsx)(d.Clickable, {
                                  className: I.clickableWrapper,
                                  tabIndex: null != M ? M : 0,
                                  onClick: P,
                                  'aria-label': null != c ? c : v.intl.string(v.t.X4IxWF),
                                  'aria-describedby': _.r5,
                                  innerRef: this._clickableRef,
                                  focusProps: { enabled: !1 },
                                  children: e
                              })
                            : e,
                        null != F
                            ? (0, s.jsx)('div', {
                                  className: I.imageAccessory,
                                  children: F
                              })
                            : null
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e), y(this, '_containerRef', o.createRef()), y(this, '_clickableRef', o.createRef());
    }
}
function A(e) {
    let { size: n, mediaLayoutType: r, alt: i } = e,
        a = (0, f.ZP)();
    return (0, s.jsx)('div', {
        className: I.imageErrorWrapper,
        style: R(n, r),
        children: (0, s.jsx)('img', {
            src: (0, c.ap)(a) ? b : T,
            className: I.imageError,
            alt: null != i ? i : v.intl.string(v.t.X4IxWF)
        })
    });
}
function N(e, n, r, i) {
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
function C(e, n) {
    switch (n) {
        case E.hV.MOSAIC:
            return {
                display: 'block',
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
                maxWidth: 1 === (0, p.Z)() ? 'calc(100% + 1px)' : '100%'
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
y(S, 'defaultProps', {
    readyState: g.zo9.READY,
    zoomable: !0,
    children: (e) => {
        let { src: n, size: r, alt: i, className: a, mediaLayoutType: o } = e;
        return (0, s.jsx)('img', {
            className: null != a ? a : void 0,
            alt: null != i ? i : v.intl.string(v.t.X4IxWF),
            src: n,
            style: C(r, o)
        });
    },
    minWidth: 0,
    minHeight: 0
});
