r.d(n, {
    DF: function () {
        return i;
    },
    ZP: function () {
        return _;
    },
    _F: function () {
        return a;
    }
});
var i,
    a,
    s = r(200651);
r(192379);
var o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(493773),
    d = r(921944),
    f = r(44669);
function _(e) {
    let {
        className: n,
        header: r,
        headerClassName: i,
        content: a,
        contentClassName: o,
        buttonCTA: _,
        secondaryButtonCTA: h,
        onClick: p,
        onSecondaryClick: m,
        buttonProps: g = {
            color: u.Button.Colors.BRAND,
            look: u.Button.Looks.FILLED
        },
        secondaryButtonProps: E = { color: u.Button.Colors.BRAND_INVERTED },
        onComponentMount: v,
        asset: I,
        markAsDismissed: T,
        caretPosition: b = 'caretTopCenter',
        buttonLayout: y = 0
    } = e;
    (0, c.Z)(() => {
        null == v || v();
    });
    let S = null != h,
        A = (e) => {
            p(e), null == T || T(d.L.PRIMARY);
        },
        N = () => {
            null == m || m(), null == T || T(d.L.SECONDARY);
        };
    return (0, s.jsxs)('div', {
        className: l()(n, f.upsellTooltipWrapper, f[b]),
        children: [
            I,
            null == r
                ? null
                : (0, s.jsx)(u.Heading, {
                      className: l()(i, f.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: r
                  }),
            (0, s.jsx)(u.Text, {
                color: 'always-white',
                className: l()(o, f.content),
                variant: 'text-sm/normal',
                children: a
            }),
            null != _ || S
                ? (0, s.jsxs)('div', {
                      className: l()(f.upsellButtonsContainer, {
                          [f.upsellButtonsAdjacent]: 0 === y,
                          [f.upsellButtonsStacked]: 1 === y
                      }),
                      children: [
                          S
                              ? (0, s.jsx)(u.Button, {
                                    ...E,
                                    fullWidth: 1 === y,
                                    onClick: N,
                                    children: h
                                })
                              : null,
                          null == _
                              ? null
                              : (0, s.jsx)(u.Button, {
                                    ...g,
                                    fullWidth: !S || 1 === y,
                                    onClick: A,
                                    children: _
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
    (_.CaretPosition = i),
    (_.ButtonLayout = a);
