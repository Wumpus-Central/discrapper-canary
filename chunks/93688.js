"use strict";
n.d(t, { W: () => a });
var l = n(627968);
n(64700);
var i = n(827734),
    r = n(996682),
    s = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = e,
        d = (0, s.J)(t),
        h = d?.width ?? n,
        f = d?.height ?? a;
    return (0, l.jsxs)("svg", {
        ...(0, r.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                className: c,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                fillRule: "evenodd",
                d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                clipRule: "evenodd",
                className: c,
            }),
        ],
    });
};
