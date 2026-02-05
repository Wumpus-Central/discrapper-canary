"use strict";
n.d(t, { X: () => o });
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
            fillRule: "evenodd",
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-6.9 8.01a8.96 8.96 0 0 1-8.2 0l2.37-3.32a4.99 4.99 0 0 0 3.46 0l2.38 3.32ZM3 12c0 1.48.36 2.87.99 4.1l3.32-2.37a4.99 4.99 0 0 1 0-3.46L3.99 7.89A8.96 8.96 0 0 0 3 12Zm4.9-8.01a8.96 8.96 0 0 1 8.2 0L13.74 7.3a4.99 4.99 0 0 0-3.46 0L7.89 3.99ZM20 16.1a8.96 8.96 0 0 0 0-8.22l-3.32 2.38a4.99 4.99 0 0 1 0 3.46l3.32 2.38ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
