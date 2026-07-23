"use strict";
n.d(t, { V: () => l });
var i = n(627968);
n(64700);
var r = n(661531),
    a = n(996682),
    s = n(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        E = u?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M11.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 0 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M5.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: d,
            }),
        ],
    });
};
