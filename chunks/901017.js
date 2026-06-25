"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(834730),
    o = n(127080);
function l(e) {
    let { icon: t, iconClassName: n, description: r, color: l } = e;
    return (0, i.jsxs)("div", {
        className: o.bK,
        children: [
            (0, i.jsx)("div", {
                className: o.f8,
                children: (0, i.jsx)(t, { color: l ?? "currentColor", className: s()(o.kf, n) }),
            }),
            (0, i.jsx)(a.E, { variant: "text-md/medium", color: "interactive-text-active", children: r }),
        ],
    });
}
