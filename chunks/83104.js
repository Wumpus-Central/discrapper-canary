n.d(t, {
    N: () => c,
});
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    r = n(979286),
    s = n(590180),
    o = n(117942);
let c = () => {
    let e = (0, l.bG)([s.A], () => s.A.skipNumCategories);
    return (0, a.jsxs)("div", {
        className: o.k,
        children: [
            (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                children: "Hide first # of categories",
            }),
            (0, a.jsx)(i.lw3, {
                value: e,
                onChange: (e) => {
                    (0, r.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
