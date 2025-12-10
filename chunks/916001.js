n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(866442),
    a = n(481060),
    o = n(388032),
    s = n(229928);
function l(e) {
    let { locked: t, role: n, textVariant: l = "text-xs/medium" } = e,
        c = (0, a.dQu)(a.TVs.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, r.jsx)("div", {
        className: s.roleTagContainer,
        children: (0, r.jsxs)("div", {
            className: s.roleTag,
            children: [
                (0, r.jsx)("div", {
                    className: s.roleColor,
                    style: { backgroundColor: (0, i.Rf)(n.color) },
                }),
                (0, r.jsx)(a.LZC, {
                    size: 8,
                    horizontal: !0,
                }),
                (0, r.jsxs)(a.Text, {
                    variant: l,
                    color: "text-default",
                    children: [(0, r.jsx)(a.nn4, { children: o.intl.string(o.t.RnyseL) }), n.name],
                }),
                !0 === t &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.LZC, {
                                size: 8,
                                horizontal: !0,
                            }),
                            (0, r.jsx)(a.mBM, {
                                size: "md",
                                color: c,
                            }),
                        ],
                    }),
            ],
        }),
    });
}
