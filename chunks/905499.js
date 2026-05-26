"use strict";
n.d(t, { N: () => o });
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
        f = d?.height ?? o;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                d: "M11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.25 2.61c-.03.3.2.55.5.55h7.63c.12 0 .17-.31.06-.36C12.82 21.14 12 20.22 12 19a3 3 0 0 1 3-3h5.02c.38 0 .61-.4.4-.72A9.52 9.52 0 0 0 12.47 11h-.94ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, i.jsx)("path", {
                d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
        ],
    });
};
