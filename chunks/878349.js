n.d(t, { Z: () => b }), n(47120);
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
    f = n(505339),
    m = n(546240),
    g = n(952009);
function b(e) {
    let { checked: t, labelText: n, tooltipText: l, canToggle: b, iconAltText: _, onChange: C, tooltipColor: v, className: y, id: x = 'fancybutton-toggle', collapseWhenChecked: j = !0, onClick: O, disabled: N } = e,
        E = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
        [P, I] = i.useState(!1),
        S = (0, d.ZP)(),
        Z = (0, s.wj)(S) || t ? g : m,
        { width: T = 0, ref: A } = (0, u.Z)(),
        { width: w = 0, ref: R } = (0, u.Z)();
    return (0, r.jsxs)(c.DY3, {
        text: (0, r.jsx)(h.X, {
            textColor: 'always-white',
            tooltipText: l
        }),
        position: 'top',
        color: null != v ? v : N ? c.ua7.Colors.BLACK : c.ua7.Colors.BRAND,
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
                        I(!0), null == C || C(e);
                    }
                    'function' == typeof O && O();
                },
                id: x,
                type: 'checkbox',
                disabled: N
            }),
            (0, r.jsxs)('label', {
                htmlFor: x,
                className: o()(f.label, y, {
                    [f.transition]: P,
                    [f.labelChecked]: t,
                    [f.labelUnchecked]: !t && !b
                }),
                style: j ? { width: t ? T : T + w } : void 0,
                children: [
                    t
                        ? (0, r.jsx)(c.ZX5, {
                              className: f.shine,
                              shinePaused: E
                          })
                        : null,
                    (0, r.jsx)('img', {
                        ref: A,
                        src: Z,
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
