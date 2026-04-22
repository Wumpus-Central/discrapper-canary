"use strict";
n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(940072);
function s(e) {
    let { icon: t, iconClassName: n, description: r, color: s } = e;
    return (0, i.jsxs)("div", {
        className: l.bK,
        children: [
            (0, i.jsx)("div", {
                className: l.f8,
                children: (0, i.jsx)(t, { color: s ?? "currentColor", className: a()(l.kf, n) }),
            }),
            (0, i.jsx)("div", { className: l.jV, children: r }),
        ],
    });
}
