"use strict";
n.d(t, { A: () => r });
var l = n(627968);
n(64700);
var i = n(397927),
    s = n(235986),
    a = n(60727);
function r(e) {
    let { description: t, icon: n, id: r, label: o, onChange: d, value: c } = e;
    return (0, l.jsxs)("div", {
        className: a.U,
        children: [
            (0, l.jsxs)(s.A, {
                justify: s.A.Justify.BETWEEN,
                align: s.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(s.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(i.Text, { variant: "text-md/semibold", children: o }),
                    }),
                    null != d && null != c && (0, l.jsx)(i.dOG, { id: r, checked: c, onChange: d }),
                ],
            }),
            (0, l.jsx)(i.Text, { variant: "text-xs/normal", color: "text-default", className: a.L, children: t }),
        ],
    });
}
