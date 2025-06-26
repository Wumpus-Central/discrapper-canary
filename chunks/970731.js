n.d(t, {
    DF: () => p,
    ZP: () => b,
    _F: () => h
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(493773),
    l = n(921944),
    c = n(519254);
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
function _(e, t) {
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
var p = (function (e) {
        return (e.TOP_CENTER = 'caretTopCenter'), (e.TOP_RIGHT = 'caretTopRight'), (e.TOP_LEFT = 'caretTopLeft'), (e.BOTTOM_CENTER = 'caretBottomCenter'), (e.BOTTOM_LEFT = 'caretBottomLeft'), (e.BOTTOM_RIGHT = 'caretBottomRight'), (e.LEFT_CENTER = 'caretLeftCenter'), (e.LEFT_TOP = 'caretLeftTop'), (e.RIGHT_CENTER = 'caretRightCenter'), (e.RIGHT_TOP = 'caretRightTop'), e;
    })({}),
    h = (function (e) {
        return (e[(e.ADJACENT = 0)] = 'ADJACENT'), (e[(e.STACKED = 1)] = 'STACKED'), e;
    })({});
let m = Object.freeze({
        brand: c.colorBrand,
        primary: c.colorPrimary
    }),
    g = Object.freeze({
        brand: 'always-white',
        primary: 'header-primary'
    }),
    E = Object.freeze({
        brand: 'always-white',
        primary: 'text-default'
    });
function b(e) {
    let {
        color: t = 'brand',
        className: n,
        header: i,
        headerClassName: u,
        content: f,
        contentClassName: p,
        buttonCTA: h,
        secondaryButtonCTA: b,
        onClick: y,
        onSecondaryClick: O,
        buttonProps: v = {
            color: o.zxk.Colors.BRAND,
            look: o.zxk.Looks.FILLED
        },
        secondaryButtonProps: I = { color: o.zxk.Colors.BRAND_INVERTED },
        onComponentMount: T,
        asset: S,
        markAsDismissed: A,
        caretPosition: N = 'caretTopCenter',
        buttonLayout: C = 0
    } = e;
    (0, s.ZP)(() => {
        null == T || T();
    });
    let R = null != b,
        P = (e) => {
            y(e), null == A || A(l.L.PRIMARY);
        },
        w = () => {
            null == O || O(), null == A || A(l.L.SECONDARY);
        };
    return (0, r.jsxs)('div', {
        className: a()(n, m[t], c.upsellTooltipWrapper, c[N]),
        children: [
            S,
            null == i
                ? null
                : (0, r.jsx)(o.X6q, {
                      color: g[t],
                      className: a()(u, c.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: i
                  }),
            (0, r.jsx)(o.Text, {
                color: E[t],
                className: a()(p, c.content),
                variant: 'text-sm/normal',
                children: f
            }),
            null != h || R
                ? (0, r.jsxs)('div', {
                      className: a()(c.upsellButtonsContainer, {
                          [c.upsellButtonsAdjacent]: 0 === C,
                          [c.upsellButtonsStacked]: 1 === C
                      }),
                      children: [
                          R
                              ? (0, r.jsx)(
                                    o.zxk,
                                    _(d({}, I), {
                                        fullWidth: 1 === C,
                                        onClick: w,
                                        children: b
                                    })
                                )
                              : null,
                          null == h
                              ? null
                              : (0, r.jsx)(
                                    o.zxk,
                                    _(d({}, v), {
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
(b.CaretPosition = p), (b.ButtonLayout = h);
