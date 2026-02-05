"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(953727);
function a(e) {
    let { width: t = 12, height: n = 12, color: a = "currentColor", foreground: s, ...o } = e;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(o),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, r.jsx)("rect", {
            fill: a,
            className: s,
            width: "8",
            height: "2",
            x: "2",
            y: "5",
            fillRule: "evenodd",
        }),
    });
}
