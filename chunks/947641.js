"use strict";
r.d(t, { r: () => l });
var n = r(627968);
r(64700);
var i = r(661531),
    a = r(996682),
    s = r(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: r,
            height: l,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? r,
        p = u?.height ?? l;
    return (0, n.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
};
