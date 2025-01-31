t.d(e, { Z: () => o });
var n = t(200651);
t(192379);
var a = t(866442),
    l = t(481060),
    r = t(388032),
    i = t(399178);
function o(A) {
    let { locked: e, role: t, textVariant: o = 'text-xs/medium' } = A,
        s = (0, l.dQu)(l.TVs.colors.INTERACTIVE_NORMAL).hex();
    return (0, n.jsx)('div', {
        className: i.roleTagContainer,
        children: (0, n.jsxs)('div', {
            className: i.roleTag,
            children: [
                (0, n.jsx)('div', {
                    className: i.roleColor,
                    style: { backgroundColor: (0, a.Rf)(t.color) }
                }),
                (0, n.jsx)(l.LZC, {
                    size: 8,
                    horizontal: !0
                }),
                (0, n.jsxs)(l.Text, {
                    variant: o,
                    color: 'text-normal',
                    children: [(0, n.jsx)(l.nn4, { children: r.intl.string(r.t.RnyseH) }), t.name]
                }),
                !0 === e &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, n.jsx)(l.mBM, {
                                size: 'md',
                                color: s
                            })
                        ]
                    })
            ]
        })
    });
}
