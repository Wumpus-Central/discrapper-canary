"use strict";
n.d(t, { u: () => o });
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
        h = d?.height ?? o;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M11.45 6.05c.3-.1.6.09.72.38l.04.09c.26.59.86 1.75 1.9 2.8A6.79 6.79 0 0 0 21.25 11c.35-.13.75.12.75.49v9.01c0 .83-.67 1.5-1.5 1.5h-.94a3 3 0 0 1-2.46-1.28 3.86 3.86 0 0 0-1.07-1.03l-2.36-.94a.92.92 0 0 0-1.23.63 2.92 2.92 0 0 1-3.55 2.12l-.62-.15A3 3 0 0 1 6 18.44V8.35c0-.2.13-.4.33-.47l5.12-1.83ZM8 18.44a1 1 0 0 0 .76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1L8 16.72v1.73Z",
                clipRule: "evenodd",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M4.5 8c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2h.5Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M19 1.4c3.04 0 4.51 2.73 4.93 3.67.1.2.1.43 0 .64-.42.95-1.89 3.68-4.93 3.68s-4.51-2.73-4.93-3.68a.78.78 0 0 1 0-.64c.42-.94 1.89-3.68 4.93-3.68Zm-.02 2.35c0-.34-.28-.61-.6-.52a2.25 2.25 0 1 0 2.87 2.16v-.04c0-.34-.35-.52-.67-.42l-.83.25a.6.6 0 0 1-.77-.58v-.85Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
