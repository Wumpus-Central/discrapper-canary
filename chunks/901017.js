"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(940072);
function o(e) {
    let { icon: t, iconClassName: n, description: r, color: o } = e;
    return (0, i.jsxs)("div", {
        className: a.bK,
        children: [
            (0, i.jsx)("div", {
                className: a.f8,
                children: (0, i.jsx)(t, { color: o ?? "currentColor", className: s()(a.kf, n) }),
            }),
            (0, i.jsx)("div", { className: a.jV, children: r }),
        ],
    });
}
