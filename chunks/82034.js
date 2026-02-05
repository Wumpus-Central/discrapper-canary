"use strict";
n.d(t, { K: () => o });
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
                d: "M12 3a9 9 0 0 0-7.47 14.03c.28.41.28.97-.06 1.35-.4.45-1.12.44-1.47-.05a11 11 0 1 1 18 0c-.35.5-1.06.5-1.47.05a1.1 1.1 0 0 1-.06-1.35A9 9 0 0 0 12 3Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M18.25 15.15c-.3.58-1.07.62-1.5.13a1.2 1.2 0 0 1-.16-1.29A4.98 4.98 0 0 0 12 7a5 5 0 0 0-4.59 7c.19.42.16.93-.15 1.28-.44.49-1.22.45-1.51-.13a7 7 0 1 1 12.5 0Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M14.99 12.3c-.04.38-.5.47-.76.19a3.05 3.05 0 0 0-.25-.25l-.3-.27c-.5-.46-1.04-.97-1.68-.97-.64 0-1.19.5-1.68.97l-.3.27-.25.25c-.26.28-.72.2-.76-.19L9 12a3 3 0 1 1 5.99.3ZM12.74 13.83a1 1 0 0 0-1.48 0l-6.76 7.5A1 1 0 0 0 5.25 23h13.5a1 1 0 0 0 .75-1.67l-6.76-7.5Z",
                className: u,
            }),
        ],
    });
};
