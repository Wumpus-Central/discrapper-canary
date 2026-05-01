"use strict";
n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var r = n(953727);
function s(e) {
    let { width: t = 12, height: n = 12, color: s = "currentColor", foreground: a, ...o } = e;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(o),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, i.jsx)("polygon", {
            fill: s,
            className: a,
            fillRule: "evenodd",
            points: "11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1",
        }),
    });
}
