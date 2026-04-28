"use strict";
n.d(t, { Q: () => s });
var r = n(627968);
n(64700);
var i = n(661531),
    a = n(996682),
    l = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = e,
        d = (0, l.J)(t),
        _ = d?.width ?? n,
        h = d?.height ?? s;
    return (0, r.jsx)("svg", {
        ...(0, a.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
};
