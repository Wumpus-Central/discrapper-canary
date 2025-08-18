n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(866442),
    l = n(481060),
    o = n(388032),
    a = n(229928);
function s(e) {
    let { locked: t, role: n, textVariant: s = "text-xs/medium" } = e,
        c = (0, l.dQu)(l.TVs.colors.INTERACTIVE_NORMAL).hex();
    return (0, r.jsx)("div", {
        className: a.roleTagContainer,
        children: (0, r.jsxs)("div", {
            className: a.roleTag,
            children: [
                (0, r.jsx)("div", {
                    className: a.roleColor,
                    style: { backgroundColor: (0, i.Rf)(n.color) },
                }),
                (0, r.jsx)(l.LZC, {
                    size: 8,
                    horizontal: !0,
                }),
                (0, r.jsxs)(l.Text, {
                    variant: s,
                    color: "text-default",
                    children: [(0, r.jsx)(l.nn4, { children: o.intl.string(o.t.RnyseH) }), n.name],
                }),
                !0 === t &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.LZC, {
                                size: 8,
                                horizontal: !0,
                            }),
                            (0, r.jsx)(l.mBM, {
                                size: "md",
                                color: c,
                            }),
                        ],
                    }),
            ],
        }),
    });
}
