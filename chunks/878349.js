n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(780384),
    c = n(481060),
    u = n(393238),
    d = n(410030),
    p = n(607070),
    h = n(466794),
    f = n(70547),
    m = n(546240),
    g = n(952009);
function b(e) {
    let { checked: t, labelText: n, tooltipText: l, canToggle: b, iconAltText: _, onChange: y, tooltipColor: C, className: x, id: v = 'fancybutton-toggle', collapseWhenChecked: j = !0, onClick: O, disabled: E } = e,
        I = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
        [S, P] = i.useState(!1),
        Z = (0, d.ZP)(),
        N = (0, s.wj)(Z) || t ? g : m,
        { width: T = 0, ref: A } = (0, u.ZP)(),
        { width: w = 0, ref: R } = (0, u.ZP)();
    return (0, r.jsxs)(c.DY3, {
        text: (0, r.jsx)(h.X, {
            textColor: 'always-white',
            tooltipText: l
        }),
        position: 'top',
        color: null != C ? C : E ? c.ua7.Colors.BLACK : c.ua7.Colors.BRAND,
        'aria-label': l,
        tooltipClassName: f.tooltip,
        className: f.tooltipContainer,
        children: [
            (0, r.jsx)('input', {
                className: f.visuallyHidden,
                checked: t,
                onChange: function () {
                    if (b) {
                        let e = !t;
                        P(!0), null == y || y(e);
                    }
                    'function' == typeof O && O();
                },
                id: v,
                type: 'checkbox',
                disabled: E
            }),
            (0, r.jsxs)('label', {
                htmlFor: v,
                className: o()(f.label, x, {
                    [f.transition]: S,
                    [f.labelChecked]: t,
                    [f.labelUnchecked]: !t && !b
                }),
                style: j ? { width: t ? T : T + w } : void 0,
                children: [
                    t
                        ? (0, r.jsx)(c.ZX5, {
                              className: f.shine,
                              shinePaused: I
                          })
                        : null,
                    (0, r.jsx)('img', {
                        ref: A,
                        src: N,
                        alt: _
                    }),
                    (0, r.jsx)('span', {
                        ref: R,
                        children: (0, r.jsx)(c.Text, {
                            className: o()(f.burstText, {
                                [f.visuallyHidden]: t && j,
                                [f.burstTextChecked]: t
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
