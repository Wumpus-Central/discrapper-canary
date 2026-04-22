"use strict";
n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(827734),
    r = n(862482),
    o = n(359778),
    d = n(834730),
    c = n(235986),
    u = n(400725);
let h = (e) => {
    let { className: t, icon: n, noticeText: i, buttonText: h, onClick: g, canSync: m } = e;
    return (0, l.jsx)(o.Z, {
        className: s()(t, u.N),
        children: (0, l.jsxs)(c.A, {
            justify: c.A.Justify.BETWEEN,
            align: c.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: a.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: u.P,
                    children: (0, l.jsx)(d.E, { variant: "text-md/normal", children: i }),
                }),
                m && (0, l.jsx)(r.$n, { size: r.$n.Sizes.SMALL, color: r.$n.Colors.PRIMARY, onClick: g, children: h }),
            ],
        }),
    });
};
