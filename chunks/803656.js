"use strict";
n.d(t, { U: () => o });
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
            d: "M22 8a1 1 0 1 0-2 0v3.54A10.26 10.26 0 0 0 11.63 7c-4.24 0-7.84 2.74-9.54 6.6a1 1 0 0 0 1.82.8C5.36 11.15 8.31 9 11.63 9a8.34 8.34 0 0 1 6.95 4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V8Z",
            className: u,
        }),
    });
};
