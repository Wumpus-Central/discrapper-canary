n.d(t, { Z: () => s }), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(249996),
    o = n(467887);
function s(e) {
    let { title: t, value: n, onChange: s, options: l, isDisabled: c } = e;
    return (0, r.jsxs)("div", {
        className: o.selectItemRow,
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-md/medium",
                color: c ? "text-muted" : "text-primary",
                children: t,
            }),
            (0, r.jsx)(i.q4e, {
                variant: "text-only",
                className: o.select,
                options: l,
                value: n,
                onChange: (e) => s(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, r.jsx)(a.Z, { option: t });
                },
                renderOptionLabel: (e) => (0, r.jsx)(a.Z, { option: e }),
                isDisabled: c,
            }),
        ],
    });
}
