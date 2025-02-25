n.d(t, {
    BD: () => m,
    DF: () => _,
    ZP: () => b,
    _F: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(493773),
    l = n(921944),
    c = n(835273);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var _ = (function (e) {
        return (e.TOP_CENTER = 'caretTopCenter'), (e.TOP_RIGHT = 'caretTopRight'), (e.TOP_LEFT = 'caretTopLeft'), (e.BOTTOM_CENTER = 'caretBottomCenter'), (e.BOTTOM_LEFT = 'caretBottomLeft'), (e.BOTTOM_RIGHT = 'caretBottomRight'), (e.LEFT_CENTER = 'caretLeftCenter'), (e.LEFT_TOP = 'caretLeftTop'), (e.RIGHT_CENTER = 'caretRightCenter'), (e.RIGHT_TOP = 'caretRightTop'), e;
    })({}),
    h = (function (e) {
        return (e[(e.ADJACENT = 0)] = 'ADJACENT'), (e[(e.STACKED = 1)] = 'STACKED'), e;
    })({}),
    m = (function (e) {
        return (e.BRAND = 'brand'), (e.PRIMARY = 'primary'), e;
    })({});
let g = Object.freeze({
        brand: c.colorBrand,
        primary: c.colorPrimary
    }),
    E = Object.freeze({
        brand: 'always-white',
        primary: 'header-primary'
    }),
    v = Object.freeze({
        brand: 'always-white',
        primary: 'text-normal'
    });
function b(e) {
    let {
        color: t = 'brand',
        className: n,
        header: i,
        headerClassName: u,
        content: f,
        contentClassName: _,
        buttonCTA: h,
        secondaryButtonCTA: m,
        onClick: b,
        onSecondaryClick: y,
        buttonProps: O = {
            color: a.zxk.Colors.BRAND,
            look: a.zxk.Looks.FILLED
        },
        secondaryButtonProps: S = { color: a.zxk.Colors.BRAND_INVERTED },
        onComponentMount: I,
        asset: T,
        markAsDismissed: N,
        caretPosition: A = 'caretTopCenter',
        buttonLayout: C = 0
    } = e;
    (0, s.ZP)(() => {
        null == I || I();
    });
    let R = null != m,
        P = (e) => {
            b(e), null == N || N(l.L.PRIMARY);
        },
        D = () => {
            null == y || y(), null == N || N(l.L.SECONDARY);
        };
    return (0, r.jsxs)('div', {
        className: o()(n, g[t], c.upsellTooltipWrapper, c[A]),
        children: [
            T,
            null == i
                ? null
                : (0, r.jsx)(a.X6q, {
                      color: E[t],
                      className: o()(u, c.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: i
                  }),
            (0, r.jsx)(a.Text, {
                color: v[t],
                className: o()(_, c.content),
                variant: 'text-sm/normal',
                children: f
            }),
            null != h || R
                ? (0, r.jsxs)('div', {
                      className: o()(c.upsellButtonsContainer, {
                          [c.upsellButtonsAdjacent]: 0 === C,
                          [c.upsellButtonsStacked]: 1 === C
                      }),
                      children: [
                          R
                              ? (0, r.jsx)(
                                    a.zxk,
                                    p(d({}, S), {
                                        fullWidth: 1 === C,
                                        onClick: D,
                                        children: m
                                    })
                                )
                              : null,
                          null == h
                              ? null
                              : (0, r.jsx)(
                                    a.zxk,
                                    p(d({}, O), {
                                        fullWidth: !R || 1 === C,
                                        onClick: P,
                                        children: h
                                    })
                                )
                      ]
                  })
                : null
        ]
    });
}
(b.CaretPosition = _), (b.ButtonLayout = h);
