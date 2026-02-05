"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(953727);
function a(e) {
    let { width: t = 8, height: n = 8, color: a = "currentColor", foreground: s, ...o } = e;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(o),
        width: t,
        height: n,
        viewBox: "0 0 8 8",
        fill: "none",
        children: (0, r.jsx)("path", {
            className: s,
            fill: a,
            d: "M8 3.99957L4 0 0 3.99957l1.20161 1.20149L3.1502 3.25268V8h1.6996V3.25268l1.94858 1.94838L8 3.99957z",
        }),
    });
}
