"use strict";
n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(834730),
    s = n(243721),
    a = n(235986),
    r = n(804215);
function o(e) {
    let { description: t, icon: n, id: o, label: d, onChange: c, value: u } = e;
    return (0, l.jsxs)("div", {
        className: r.U,
        children: [
            (0, l.jsxs)(a.A, {
                justify: a.A.Justify.BETWEEN,
                align: a.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(a.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(i.E, { variant: "text-md/semibold", children: d }),
                    }),
                    null != c && null != u && (0, l.jsx)(s.d, { id: o, checked: u, onChange: c }),
                ],
            }),
            (0, l.jsx)(i.E, { variant: "text-xs/normal", color: "text-default", className: r.L, children: t }),
        ],
    });
}
