n.d(t, {
    Z: function () {
        return o;
    }
});
var A = n(200651);
n(192379);
var r = n(866442),
    a = n(481060),
    l = n(388032),
    i = n(399178);
function o(e) {
    let { locked: t, role: n, textVariant: o = 'text-xs/medium' } = e,
        s = (0, a.useToken)(a.tokens.colors.INTERACTIVE_NORMAL).hex();
    return (0, A.jsx)('div', {
        className: i.roleTagContainer,
        children: (0, A.jsxs)('div', {
            className: i.roleTag,
            children: [
                (0, A.jsx)('div', {
                    className: i.roleColor,
                    style: { backgroundColor: (0, r.Rf)(n.color) }
                }),
                (0, A.jsx)(a.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, A.jsxs)(a.Text, {
                    variant: o,
                    color: 'text-normal',
                    children: [(0, A.jsx)(a.HiddenVisually, { children: l.intl.string(l.t.RnyseH) }), n.name]
                }),
                !0 === t &&
                    (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(a.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, A.jsx)(a.LockIcon, {
                                size: 'md',
                                color: s
                            })
                        ]
                    })
            ]
        })
    });
}
