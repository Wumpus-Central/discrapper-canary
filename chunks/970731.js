n.d(t, {
    DF: () => _,
    ZP: () => m,
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
    })({});
function m(e) {
    let {
        className: t,
        header: n,
        headerClassName: i,
        content: u,
        contentClassName: f,
        buttonCTA: _,
        secondaryButtonCTA: h,
        onClick: m,
        onSecondaryClick: g,
        buttonProps: E = {
            color: a.zxk.Colors.BRAND,
            look: a.zxk.Looks.FILLED
        },
        secondaryButtonProps: v = { color: a.zxk.Colors.BRAND_INVERTED },
        onComponentMount: b,
        asset: y,
        markAsDismissed: O,
        caretPosition: S = 'caretTopCenter',
        buttonLayout: I = 0
    } = e;
    (0, s.ZP)(() => {
        null == b || b();
    });
    let T = null != h,
        N = (e) => {
            m(e), null == O || O(l.L.PRIMARY);
        },
        A = () => {
            null == g || g(), null == O || O(l.L.SECONDARY);
        };
    return (0, r.jsxs)('div', {
        className: o()(t, c.upsellTooltipWrapper, c[S]),
        children: [
            y,
            null == n
                ? null
                : (0, r.jsx)(a.X6q, {
                      className: o()(i, c.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: n
                  }),
            (0, r.jsx)(a.Text, {
                color: 'always-white',
                className: o()(f, c.content),
                variant: 'text-sm/normal',
                children: u
            }),
            null != _ || T
                ? (0, r.jsxs)('div', {
                      className: o()(c.upsellButtonsContainer, {
                          [c.upsellButtonsAdjacent]: 0 === I,
                          [c.upsellButtonsStacked]: 1 === I
                      }),
                      children: [
                          T
                              ? (0, r.jsx)(
                                    a.zxk,
                                    p(d({}, v), {
                                        fullWidth: 1 === I,
                                        onClick: A,
                                        children: h
                                    })
                                )
                              : null,
                          null == _
                              ? null
                              : (0, r.jsx)(
                                    a.zxk,
                                    p(d({}, E), {
                                        fullWidth: !T || 1 === I,
                                        onClick: N,
                                        children: _
                                    })
                                )
                      ]
                  })
                : null
        ]
    });
}
(m.CaretPosition = _), (m.ButtonLayout = h);
