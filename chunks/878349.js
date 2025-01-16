n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(393238),
    u = n(410030),
    h = n(607070),
    p = n(466794),
    m = n(106638),
    f = n(546240),
    g = n(952009);
function C(e) {
    let { checked: t, labelText: n, tooltipText: r, canToggle: C, iconAltText: x, onChange: v, tooltipColor: _, className: I, id: E = 'fancybutton-toggle', collapseWhenChecked: b = !0, onClick: Z, disabled: N } = e,
        S = (0, s.e7)([h.Z], () => h.Z.useReducedMotion),
        [T, j] = l.useState(!1),
        A = (0, u.ZP)(),
        y = (0, o.wj)(A) || t ? g : f,
        { width: P = 0, ref: M } = (0, d.Z)(),
        { width: R = 0, ref: L } = (0, d.Z)();
    return (0, i.jsxs)(c.TooltipContainer, {
        text: (0, i.jsx)(p.X, {
            textColor: 'always-white',
            tooltipText: r
        }),
        position: 'top',
        color: null != _ ? _ : N ? c.Tooltip.Colors.BLACK : c.Tooltip.Colors.BRAND,
        'aria-label': r,
        tooltipClassName: m.tooltip,
        className: m.tooltipContainer,
        children: [
            (0, i.jsx)('input', {
                className: m.visuallyHidden,
                checked: t,
                onChange: function () {
                    if (C) {
                        let e = !t;
                        j(!0), null == v || v(e);
                    }
                    'function' == typeof Z && Z();
                },
                id: E,
                type: 'checkbox',
                disabled: N
            }),
            (0, i.jsxs)('label', {
                htmlFor: E,
                className: a()(m.label, I, {
                    [m.transition]: T,
                    [m.labelChecked]: t,
                    [m.labelUnchecked]: !t && !C
                }),
                style: b ? { width: t ? P : P + R } : void 0,
                children: [
                    t
                        ? (0, i.jsx)(c.Shine, {
                              className: m.shine,
                              shinePaused: S
                          })
                        : null,
                    (0, i.jsx)('img', {
                        ref: M,
                        src: y,
                        alt: x
                    }),
                    (0, i.jsx)('span', {
                        ref: L,
                        children: (0, i.jsx)(c.Text, {
                            className: a()(m.burstText, {
                                [m.visuallyHidden]: t && b,
                                [m.burstTextChecked]: t
                            }),
                            variant: 'text-sm/semibold',
                            children: n
                        })
                    })
                ]
            })
        ]
    });
}
