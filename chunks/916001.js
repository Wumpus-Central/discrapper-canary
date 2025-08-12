n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(866442),
    o = n(481060),
    a = n(388032),
    s = n(230442);
function l(e) {
    let { locked: t, role: n, textVariant: l = "text-xs/medium" } = e,
        c = (0, o.dQu)(o.TVs.colors.INTERACTIVE_NORMAL).hex();
    return (0, r.jsx)("div", {
        className: s.roleTagContainer,
        children: (0, r.jsxs)("div", {
            className: s.roleTag,
            children: [
                (0, r.jsx)("div", {
                    className: s.roleColor,
                    style: { backgroundColor: (0, i.Rf)(n.color) },
                }),
                (0, r.jsx)(o.LZC, {
                    size: 8,
                    horizontal: !0,
                }),
                (0, r.jsxs)(o.Text, {
                    variant: l,
                    color: "text-default",
                    children: [(0, r.jsx)(o.nn4, { children: a.intl.string(a.t.RnyseH) }), n.name],
                }),
                !0 === t &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.LZC, {
                                size: 8,
                                horizontal: !0,
                            }),
                            (0, r.jsx)(o.mBM, {
                                size: "md",
                                color: c,
                            }),
                        ],
                    }),
            ],
        }),
    });
}
