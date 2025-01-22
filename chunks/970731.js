r.d(n, {
    DF: function () {
        return i;
    },
    ZP: function () {
        return p;
    },
    _F: function () {
        return a;
    }
});
var i,
    a,
    o = r(200651);
r(192379);
var s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(493773),
    d = r(921944),
    f = r(44669);
function p(e) {
    let {
        className: n,
        header: r,
        headerClassName: i,
        content: a,
        contentClassName: s,
        buttonCTA: p,
        secondaryButtonCTA: h,
        onClick: _,
        onSecondaryClick: m,
        buttonProps: g = {
            color: u.Button.Colors.BRAND,
            look: u.Button.Looks.FILLED
        },
        secondaryButtonProps: E = { color: u.Button.Colors.BRAND_INVERTED },
        onComponentMount: v,
        asset: y,
        markAsDismissed: b,
        caretPosition: I = 'caretTopCenter',
        buttonLayout: T = 0
    } = e;
    (0, c.Z)(() => {
        null == v || v();
    });
    let S = null != h,
        A = (e) => {
            _(e), null == b || b(d.L.PRIMARY);
        },
        C = () => {
            null == m || m(), null == b || b(d.L.SECONDARY);
        };
    return (0, o.jsxs)('div', {
        className: l()(n, f.upsellTooltipWrapper, f[I]),
        children: [
            y,
            null == r
                ? null
                : (0, o.jsx)(u.Heading, {
                      className: l()(i, f.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: r
                  }),
            (0, o.jsx)(u.Text, {
                color: 'always-white',
                className: l()(s, f.content),
                variant: 'text-sm/normal',
                children: a
            }),
            null != p || S
                ? (0, o.jsxs)('div', {
                      className: l()(f.upsellButtonsContainer, {
                          [f.upsellButtonsAdjacent]: 0 === T,
                          [f.upsellButtonsStacked]: 1 === T
                      }),
                      children: [
                          S
                              ? (0, o.jsx)(u.Button, {
                                    ...E,
                                    fullWidth: 1 === T,
                                    onClick: C,
                                    children: h
                                })
                              : null,
                          null == p
                              ? null
                              : (0, o.jsx)(u.Button, {
                                    ...g,
                                    fullWidth: !S || 1 === T,
                                    onClick: A,
                                    children: p
                                })
                      ]
                  })
                : null
        ]
    });
}
!(function (e) {
    (e.TOP_CENTER = 'caretTopCenter'), (e.TOP_RIGHT = 'caretTopRight'), (e.TOP_LEFT = 'caretTopLeft'), (e.BOTTOM_CENTER = 'caretBottomCenter'), (e.BOTTOM_LEFT = 'caretBottomLeft'), (e.BOTTOM_RIGHT = 'caretBottomRight'), (e.LEFT_CENTER = 'caretLeftCenter'), (e.LEFT_TOP = 'caretLeftTop'), (e.RIGHT_CENTER = 'caretRightCenter'), (e.RIGHT_TOP = 'caretRightTop');
})(i || (i = {})),
    !(function (e) {
        (e[(e.ADJACENT = 0)] = 'ADJACENT'), (e[(e.STACKED = 1)] = 'STACKED');
    })(a || (a = {})),
    (p.CaretPosition = i),
    (p.ButtonLayout = a);
