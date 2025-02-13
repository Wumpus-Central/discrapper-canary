n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(866442),
    a = n(481060),
    r = n(388032),
    s = n(935919);
function o(e) {
    let { locked: t, role: n, textVariant: o = 'text-xs/medium' } = e,
        c = (0, a.dQu)(a.TVs.colors.INTERACTIVE_NORMAL).hex();
    return (0, i.jsx)('div', {
        className: s.roleTagContainer,
        children: (0, i.jsxs)('div', {
            className: s.roleTag,
            children: [
                (0, i.jsx)('div', {
                    className: s.roleColor,
                    style: { backgroundColor: (0, l.Rf)(n.color) }
                }),
                (0, i.jsx)(a.LZC, {
                    size: 8,
                    horizontal: !0
                }),
                (0, i.jsxs)(a.Text, {
                    variant: o,
                    color: 'text-normal',
                    children: [(0, i.jsx)(a.nn4, { children: r.intl.string(r.t.RnyseH) }), n.name]
                }),
                !0 === t &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, i.jsx)(a.mBM, {
                                size: 'md',
                                color: c
                            })
                        ]
                    })
            ]
        })
    });
}
