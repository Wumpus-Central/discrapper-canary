"use strict";
n.d(t, { O: () => o });
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
    return (0, r.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M15.94 5.94a1.5 1.5 0 1 1 2.12 2.12L14.12 12l3.94 3.94a1.5 1.5 0 0 1-2.12 2.12L12 14.12l-3.94 3.94a1.5 1.5 0 1 1-2.12-2.12L9.88 12 5.94 8.06a1.5 1.5 0 1 1 2.12-2.12L12 9.88l3.94-3.94Z",
            className: u,
        }),
    });
};
