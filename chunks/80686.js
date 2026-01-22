n.d(t, { A: () => a }), n(228524);
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(235986),
    s = n(461132);
function a(e) {
    let { description: t, icon: n, id: a, label: o, onChange: c, value: d } = e;
    return (0, l.jsxs)("div", {
        className: s.U,
        children: [
            (0, l.jsxs)(r.A, {
                justify: r.A.Justify.BETWEEN,
                align: r.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(r.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            children: o,
                        }),
                    }),
                    null != c &&
                        null != d &&
                        (0, l.jsx)(i.dOG, {
                            id: a,
                            checked: d,
                            onChange: c,
                        }),
                ],
            }),
            (0, l.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: s.L,
                children: t,
            }),
        ],
    });
}
