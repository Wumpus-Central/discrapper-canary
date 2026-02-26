"use strict";
n.d(t, { a: () => a });
var r = n(627968);
n(64700);
var i = n(996682),
    s = n(27989);
let a = (e) => {
    let { size: t = "md", width: n, height: a, color: o = "#D22A36", colorClass: l = "", ...u } = e,
        c = (0, s.J)(t),
        d = c?.width ?? n,
        _ = c?.height ?? a;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "m12.5 20.96-1.02-2.58 9.92.5-.45 4.12-8.45-2.04ZM14.88 1 1 7.39 3.15 17h2.83l-.5-6.88.44-.13L7.62 17h2.95l-.11-8.38.43-.13 1.49 8.52h3.11l.74-10.14.43-.13.77 10.27h4.12L23 2.92 14.88 1Z",
            className: l,
        }),
    });
};
