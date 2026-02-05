"use strict";
n.d(t, { I: () => o });
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
                d: "M1 12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1c0 .22-.23.37-.44.3a4.95 4.95 0 0 0-5.06 1.2l-4 4a4.93 4.93 0 0 0-1.42 3 .54.54 0 0 1-.53.5H4a3 3 0 0 1-3-3v-6Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M23.07 14.93a3.17 3.17 0 0 0-4.47 0l-.58.57a.74.74 0 0 0 1.04 1.04l.58-.57a1.7 1.7 0 0 1 2.4 2.4l-.58.57a.74.74 0 1 0 1.04 1.04l.57-.58a3.17 3.17 0 0 0 0-4.47ZM14.93 23.07a3.17 3.17 0 0 0 4.47 0l.58-.57a.74.74 0 1 0-1.04-1.04l-.58.57a1.7 1.7 0 0 1-2.4-2.4l.58-.57a.74.74 0 1 0-1.04-1.04l-.57.58a3.17 3.17 0 0 0 0 4.47Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M20.48 17.52c.29.3.29.76 0 1.05l-1.91 1.9a.74.74 0 0 1-1.05-1.04l1.91-1.9a.74.74 0 0 1 1.05 0Z",
                className: u,
            }),
        ],
    });
};
