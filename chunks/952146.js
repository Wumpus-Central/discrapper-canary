"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    s = n(27989);
function l(e) {
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
            d: "M16.43 7.02a5.94 5.94 0 0 0-4.21-1.64A6.56 6.56 0 0 0 6.06 9.9a6.61 6.61 0 0 0 9.88 7.66 5.06 5.06 0 0 0 2.2-3.31h-5.92V10h10.36c.13.72.2 1.47.2 2.25 0 3.35-1.2 6.17-3.28 8.09A10.5 10.5 0 0 1 12.22 23a11 11 0 1 1 7.36-19.14l-3.15 3.16Z",
            className: d,
        }),
    });
}
