"use strict";
n.d(t, { S: () => o });
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
            d: "M13.05 1.4a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16V8c0-1.07-.4-2.06-1.05-2.6l-4.9-4ZM12 4.41 8.06 7.64c-.03.08-.06.2-.06.36v8c0 .16.03.28.06.36L12 19.59l3.94-3.23c.03-.08.06-.2.06-.36V8c0-.16-.03-.28-.06-.36L12 4.41Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
