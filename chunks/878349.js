n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
function _(e) {
    let { checked: t, labelText: n, tooltipText: a, canToggle: _, iconAltText: C, onChange: x, tooltipColor: v, className: E, id: I = 'fancybutton-toggle', collapseWhenChecked: b = !0, onClick: Z, disabled: N } = e,
        T = (0, s.e7)([h.Z], () => h.Z.useReducedMotion),
        [S, j] = l.useState(!1),
        A = (0, u.ZP)(),
        y = (0, o.wj)(A) || t ? g : f,
        { width: P = 0, ref: R } = (0, d.Z)(),
        { width: M = 0, ref: L } = (0, d.Z)();
    return (0, i.jsxs)(c.DY3, {
        text: (0, i.jsx)(p.X, {
            textColor: 'always-white',
            tooltipText: a
        }),
        position: 'top',
        color: null != v ? v : N ? c.ua7.Colors.BLACK : c.ua7.Colors.BRAND,
        'aria-label': a,
        tooltipClassName: m.tooltip,
        className: m.tooltipContainer,
        children: [
            (0, i.jsx)('input', {
                className: m.visuallyHidden,
                checked: t,
                onChange: function () {
                    if (_) {
                        let e = !t;
                        j(!0), null == x || x(e);
                    }
                    'function' == typeof Z && Z();
                },
                id: I,
                type: 'checkbox',
                disabled: N
            }),
            (0, i.jsxs)('label', {
                htmlFor: I,
                className: r()(m.label, E, {
                    [m.transition]: S,
                    [m.labelChecked]: t,
                    [m.labelUnchecked]: !t && !_
                }),
                style: b ? { width: t ? P : P + M } : void 0,
                children: [
                    t
                        ? (0, i.jsx)(c.ZX5, {
                              className: m.shine,
                              shinePaused: T
                          })
                        : null,
                    (0, i.jsx)('img', {
                        ref: R,
                        src: y,
                        alt: C
                    }),
                    (0, i.jsx)('span', {
                        ref: L,
                        children: (0, i.jsx)(c.Text, {
                            className: r()(m.burstText, {
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
