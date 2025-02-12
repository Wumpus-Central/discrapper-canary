n.d(t, {
    DF: () => c,
    ZP: () => f,
    _F: () => d
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(493773),
    l = n(921944),
    u = n(987524),
    c = (function (e) {
        return (e.TOP_CENTER = 'caretTopCenter'), (e.TOP_RIGHT = 'caretTopRight'), (e.TOP_LEFT = 'caretTopLeft'), (e.BOTTOM_CENTER = 'caretBottomCenter'), (e.BOTTOM_LEFT = 'caretBottomLeft'), (e.BOTTOM_RIGHT = 'caretBottomRight'), (e.LEFT_CENTER = 'caretLeftCenter'), (e.LEFT_TOP = 'caretLeftTop'), (e.RIGHT_CENTER = 'caretRightCenter'), (e.RIGHT_TOP = 'caretRightTop'), e;
    })({}),
    d = (function (e) {
        return (e[(e.ADJACENT = 0)] = 'ADJACENT'), (e[(e.STACKED = 1)] = 'STACKED'), e;
    })({});
function f(e) {
    let {
        className: t,
        header: n,
        headerClassName: r,
        content: c,
        contentClassName: d,
        buttonCTA: f,
        secondaryButtonCTA: _,
        onClick: p,
        onSecondaryClick: h,
        buttonProps: m = {
            color: s.zxk.Colors.BRAND,
            look: s.zxk.Looks.FILLED
        },
        secondaryButtonProps: g = { color: s.zxk.Colors.BRAND_INVERTED },
        onComponentMount: E,
        asset: v,
        markAsDismissed: y,
        caretPosition: I = 'caretTopCenter',
        buttonLayout: T = 0
    } = e;
    (0, o.ZP)(() => {
        null == E || E();
    });
    let b = null != _,
        S = (e) => {
            p(e), null == y || y(l.L.PRIMARY);
        },
        A = () => {
            null == h || h(), null == y || y(l.L.SECONDARY);
        };
    return (0, i.jsxs)('div', {
        className: a()(t, u.upsellTooltipWrapper, u[I]),
        children: [
            v,
            null == n
                ? null
                : (0, i.jsx)(s.X6q, {
                      className: a()(r, u.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: n
                  }),
            (0, i.jsx)(s.Text, {
                color: 'always-white',
                className: a()(d, u.content),
                variant: 'text-sm/normal',
                children: c
            }),
            null != f || b
                ? (0, i.jsxs)('div', {
                      className: a()(u.upsellButtonsContainer, {
                          [u.upsellButtonsAdjacent]: 0 === T,
                          [u.upsellButtonsStacked]: 1 === T
                      }),
                      children: [
                          b
                              ? (0, i.jsx)(s.zxk, {
                                    ...g,
                                    fullWidth: 1 === T,
                                    onClick: A,
                                    children: _
                                })
                              : null,
                          null == f
                              ? null
                              : (0, i.jsx)(s.zxk, {
                                    ...m,
                                    fullWidth: !b || 1 === T,
                                    onClick: S,
                                    children: f
                                })
                      ]
                  })
                : null
        ]
    });
}
(f.CaretPosition = c), (f.ButtonLayout = d);
