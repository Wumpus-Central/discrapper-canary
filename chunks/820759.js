n.d(t, {
    $0: () => d,
    BZ: () => u,
    E_: () => c,
    pg: () => m,
});
var i = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(959591);
let o = () => (0, i.jsx)("hr", { className: l.sectionDivider }),
    c = (e) => {
        let { label: t, children: n, direction: r = "horizontal", className: c } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o, {}),
                (0, i.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    className: l.labelSpacing,
                    children: t,
                }),
                (0, i.jsx)("div", {
                    className: s()(l.container, c, { [l.verticalContainer]: "vertical" === r }),
                    children: n,
                }),
            ],
        });
    },
    d = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("div", {
            className: l.section,
            children: t,
        });
    },
    u = (e) =>
        (0, i.jsx)("div", {
            className: l.inputGroup,
            children: e.children,
        }),
    m = (e) =>
        (0, i.jsx)("fieldset", {
            className: l.fieldset,
            children: e.children,
        });
