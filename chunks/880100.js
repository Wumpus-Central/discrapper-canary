"use strict";
n.d(t, { M: () => o });
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(996682),
    s = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, s.J)(t),
        _ = d?.width ?? n,
        f = d?.height ?? o;
    return (0, r.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6.88c0 .37-.38.61-.73.5a7 7 0 0 0-8.9 8.89c.12.35-.12.73-.49.73H5a3 3 0 0 1-3-3V5Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M19 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
                className: u,
            }),
        ],
    });
};
