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
                d: "M12 11c6.07 0 11 1.38 11 3.08V19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.92C1 12.38 5.93 11 12 11Zm-7 4a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2Zm7-1a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a2 2 0 0 0-2-2Zm7 1a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2Z",
                clipRule: "evenodd",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M12 3c5.25 0 9.5 1.77 9.5 3.96v2.68c0 .35-.35.59-.68.48l-.43-.13a.5.5 0 0 1-.38-.48V8.4a1.6 1.6 0 0 0-3.2 0v.32a.5.5 0 0 1-.56.5c-.7-.07-1.42-.13-2.17-.17a.5.5 0 0 1-.48-.5V7.6a1.6 1.6 0 0 0-3.2 0v.95a.5.5 0 0 1-.48.5c-.75.04-1.47.1-2.17.18a.5.5 0 0 1-.56-.5V8.4a1.6 1.6 0 0 0-3.2 0v1.1a.5.5 0 0 1-.38.5l-.43.12a.52.52 0 0 1-.68-.48V6.96C2.5 4.77 6.75 3 12 3Z",
                className: u,
            }),
        ],
    });
};
