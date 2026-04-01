"use strict";
n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(827734),
    r = n(421380),
    o = n(397927),
    d = n(235986),
    c = n(785157);
let u = (e) => {
    let { className: t, icon: n, noticeText: i, buttonText: u, onClick: h, canSync: g } = e;
    return (0, l.jsx)(o.ZpM, {
        className: s()(t, c.N),
        children: (0, l.jsxs)(d.A, {
            justify: d.A.Justify.BETWEEN,
            align: d.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: a.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: c.P,
                    children: (0, l.jsx)(o.Text, { variant: "text-md/normal", children: i }),
                }),
                g && (0, l.jsx)(r.$n, { size: r.$n.Sizes.SMALL, color: r.$n.Colors.PRIMARY, onClick: h, children: u }),
            ],
        }),
    });
};
