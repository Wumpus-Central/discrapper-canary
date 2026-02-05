"use strict";
n.d(t, { L: () => o });
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
    return (0, r.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M1 12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v.56c0 .46-.61.7-1 .45-.92-.65-2.04-1.01-3.19-1.01-1.83 0-3.53.89-4.54 2.36a3 3 0 0 0 1.18 4.4c.23.1.38.35.37.6a3 3 0 0 0 .04.7l.07.35a.5.5 0 0 1-.5.59H4a3 3 0 0 1-3-3v-6Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M18.81 16c-.54 0-1 .26-1.23.61a1 1 0 0 1-1.66-1.12 3.49 3.49 0 0 1 2.9-1.49c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S19.68 16 18.81 16ZM20 23a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                className: u,
            }),
        ],
    });
};
