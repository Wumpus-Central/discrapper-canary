r.d(t, { Z: () => i });
var A = r(200651);
r(192379);
var n = r(866442),
    o = r(481060),
    a = r(388032),
    l = r(439857);
function i(e) {
    let { locked: t, role: r, textVariant: i = 'text-xs/medium' } = e,
        s = (0, o.dQu)(o.TVs.colors.INTERACTIVE_NORMAL).hex();
    return (0, A.jsx)('div', {
        className: l.roleTagContainer,
        children: (0, A.jsxs)('div', {
            className: l.roleTag,
            children: [
                (0, A.jsx)('div', {
                    className: l.roleColor,
                    style: { backgroundColor: (0, n.Rf)(r.color) }
                }),
                (0, A.jsx)(o.LZC, {
                    size: 8,
                    horizontal: !0
                }),
                (0, A.jsxs)(o.Text, {
                    variant: i,
                    color: 'text-normal',
                    children: [(0, A.jsx)(o.nn4, { children: a.NW.string(a.t.RnyseH) }), r.name]
                }),
                !0 === t &&
                    (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(o.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, A.jsx)(o.mBM, {
                                size: 'md',
                                color: s
                            })
                        ]
                    })
            ]
        })
    });
}
