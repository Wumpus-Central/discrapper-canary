"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(953727);
function s(e) {
    let { width: t = 16, height: n = 16, color: s = "currentColor", foreground: a, ...o } = e;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(o),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            className: a,
            fill: s,
            transform: "translate(3.000000, 4.000000)",
            d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z",
        }),
    });
}
