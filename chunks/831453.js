"use strict";
n.d(t, { H: () => l });
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
    return (0, i.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M8.3 1.3a1 1 0 0 0 0 1.4l.29.3H6a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0V7c0-1.1.9-2 2-2h2.59l-.3.3a1 1 0 0 0 1.42 1.4l2-2a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.42 0ZM22 11a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8Z",
            className: d,
        }),
    });
};
