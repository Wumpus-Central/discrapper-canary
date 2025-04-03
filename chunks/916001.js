r.d(t, { Z: () => i });
var n = r(200651);
r(192379);
var A = r(866442),
    a = r(481060),
    o = r(388032),
    l = r(838997);
function i(e) {
    let { locked: t, role: r, textVariant: i = 'text-xs/medium' } = e,
        s = (0, a.dQu)(a.TVs.colors.INTERACTIVE_NORMAL).hex();
    return (0, n.jsx)('div', {
        className: l.roleTagContainer,
        children: (0, n.jsxs)('div', {
            className: l.roleTag,
            children: [
                (0, n.jsx)('div', {
                    className: l.roleColor,
                    style: { backgroundColor: (0, A.Rf)(r.color) }
                }),
                (0, n.jsx)(a.LZC, {
                    size: 8,
                    horizontal: !0
                }),
                (0, n.jsxs)(a.Text, {
                    variant: i,
                    color: 'text-normal',
                    children: [(0, n.jsx)(a.nn4, { children: o.NW.string(o.t.RnyseH) }), r.name]
                }),
                !0 === t &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(a.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, n.jsx)(a.mBM, {
                                size: 'md',
                                color: s
                            })
                        ]
                    })
            ]
        })
    });
}
