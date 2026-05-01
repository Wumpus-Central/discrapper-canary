"use strict";
n.d(t, { q: () => o });
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
                fill: "string" == typeof l ? l : l.css,
                d: "M10.89 11.79A3 3 0 1 0 13.1 6.2a3 3 0 0 0-2.22 5.58Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M11.91 16.43a.66.66 0 0 0-.16.08 3.16 3.16 0 0 1-2.85.27 3.14 3.14 0 0 1-1.88-2.16.67.67 0 0 0-.5-.49A3.14 3.14 0 0 1 4.5 9.45a.67.67 0 0 0 0-.7 3.14 3.14 0 0 1 1.88-4.73.67.67 0 0 0 .49-.5 3.14 3.14 0 0 1 4.68-2.02c.22.13.5.13.7 0a3.14 3.14 0 0 1 4.73 1.88c.07.24.26.44.5.49a3.14 3.14 0 0 1 2.02 4.68.67.67 0 0 0 0 .7 3.14 3.14 0 0 1-1.88 4.73.67.67 0 0 0-.49.5 3.14 3.14 0 0 1-4.68 2.02.66.66 0 0 0-.54-.07Zm-1.76-2.79a5 5 0 1 0 3.7-9.28 5 5 0 0 0-3.7 9.28Z",
                clipRule: "evenodd",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M12.11 17.46a4.13 4.13 0 0 1-5.35-1.1l-.57 5.5a1 1 0 0 0 1.47.99l4.1-2.22a.5.5 0 0 1 .48 0l4.1 2.22a1 1 0 0 0 1.47-.98l-.56-5.42a4.12 4.12 0 0 1-5.14 1Z",
                className: u,
            }),
        ],
    });
};
