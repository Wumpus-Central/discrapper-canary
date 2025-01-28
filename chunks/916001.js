A.d(t, {
    Z: function () {
        return o;
    }
});
var n = A(200651);
A(192379);
var r = A(866442),
    a = A(481060),
    i = A(388032),
    l = A(399178);
function o(e) {
    let { locked: t, role: A, textVariant: o = 'text-xs/medium' } = e,
        s = (0, a.useToken)(a.tokens.colors.INTERACTIVE_NORMAL).hex();
    return (0, n.jsx)('div', {
        className: l.roleTagContainer,
        children: (0, n.jsxs)('div', {
            className: l.roleTag,
            children: [
                (0, n.jsx)('div', {
                    className: l.roleColor,
                    style: { backgroundColor: (0, r.Rf)(A.color) }
                }),
                (0, n.jsx)(a.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, n.jsxs)(a.Text, {
                    variant: o,
                    color: 'text-normal',
                    children: [(0, n.jsx)(a.HiddenVisually, { children: i.intl.string(i.t.RnyseH) }), A.name]
                }),
                !0 === t &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(a.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, n.jsx)(a.LockIcon, {
                                size: 'md',
                                color: s
                            })
                        ]
                    })
            ]
        })
    });
}
