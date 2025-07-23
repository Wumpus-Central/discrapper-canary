n.d(t, {
    DF: () => h,
    ZP: () => y,
    _F: () => m
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(493773),
    c = n(921944),
    u = n(519254);
function d(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
var h = (function (e) {
        return ((e.TOP_CENTER = 'caretTopCenter'), (e.TOP_RIGHT = 'caretTopRight'), (e.TOP_LEFT = 'caretTopLeft'), (e.BOTTOM_CENTER = 'caretBottomCenter'), (e.BOTTOM_LEFT = 'caretBottomLeft'), (e.BOTTOM_RIGHT = 'caretBottomRight'), (e.LEFT_CENTER = 'caretLeftCenter'), (e.LEFT_TOP = 'caretLeftTop'), (e.RIGHT_CENTER = 'caretRightCenter'), (e.RIGHT_TOP = 'caretRightTop'), e);
    })({}),
    m = (function (e) {
        return ((e[(e.ADJACENT = 0)] = 'ADJACENT'), (e[(e.STACKED = 1)] = 'STACKED'), e);
    })({});
let g = Object.freeze({
        brand: u.colorBrand,
        primary: u.colorPrimary
    }),
    E = Object.freeze({
        brand: 'always-white',
        primary: 'header-primary'
    }),
    b = Object.freeze({
        brand: 'always-white',
        primary: 'text-default'
    });
function y(e) {
    let {
        color: t = 'brand',
        className: n,
        header: i,
        headerClassName: d,
        content: f,
        contentClassName: h,
        buttonCTA: m,
        secondaryButtonCTA: y,
        onClick: O,
        onSecondaryClick: v,
        buttonProps: I = {
            color: o.zx.Colors.BRAND,
            look: o.zx.Looks.FILLED
        },
        secondaryButtonProps: T = { color: o.zx.Colors.BRAND_INVERTED },
        onComponentMount: S,
        asset: A,
        markAsDismissed: N,
        caretPosition: C = 'caretTopCenter',
        buttonLayout: R = 0
    } = e;
    (0, l.ZP)(() => {
        null == S || S();
    });
    let P = null != y,
        w = (e) => {
            (O(e), null == N || N(c.L.PRIMARY));
        },
        D = () => {
            (null == v || v(), null == N || N(c.L.SECONDARY));
        };
    return (0, r.jsxs)('div', {
        className: a()(n, g[t], u.upsellTooltipWrapper, u[C]),
        children: [
            A,
            null == i
                ? null
                : (0, r.jsx)(s.X6q, {
                      color: E[t],
                      className: a()(d, u.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: i
                  }),
            (0, r.jsx)(s.Text, {
                color: b[t],
                className: a()(h, u.content),
                variant: 'text-sm/normal',
                children: f
            }),
            null != m || P
                ? (0, r.jsxs)('div', {
                      className: a()(u.upsellButtonsContainer, {
                          [u.upsellButtonsAdjacent]: 0 === R,
                          [u.upsellButtonsStacked]: 1 === R
                      }),
                      children: [
                          P
                              ? (0, r.jsx)(
                                    o.zx,
                                    p(_({}, T), {
                                        fullWidth: 1 === R,
                                        onClick: D,
                                        children: y
                                    })
                                )
                              : null,
                          null == m
                              ? null
                              : (0, r.jsx)(
                                    o.zx,
                                    p(_({}, I), {
                                        fullWidth: !P || 1 === R,
                                        onClick: w,
                                        children: m
                                    })
                                )
                      ]
                  })
                : null
        ]
    });
}
((y.CaretPosition = h), (y.ButtonLayout = m));
