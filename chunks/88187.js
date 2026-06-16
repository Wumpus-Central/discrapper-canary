"use strict";
n.d(t, { F: () => o });
var i = n(627968);
n(64700);
var r = n(661531),
    s = n(996682),
    a = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: l = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        _ = d?.width ?? n,
        h = d?.height ?? o;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M19.12 2a.5.5 0 0 1 .43.76L8.22 21.64a.75.75 0 0 1-.64.36h-2.7a.5.5 0 0 1-.43-.76L15.78 2.36a.75.75 0 0 1 .64-.36h2.7Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
