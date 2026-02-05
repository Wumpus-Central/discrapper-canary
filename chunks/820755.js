"use strict";
n.d(t, { R: () => o });
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
                d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6.46c0-.35-.34-.6-.69-.56-.2.03-.41.03-.62 0-.35-.03-.69.21-.69.56V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6.82c.2 0 .4-.14.49-.33a3 3 0 0 1 .8-1c.27-.22.23-.67-.11-.67H8Zm3 18a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
                clipRule: "evenodd",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M22 7a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L18.58 6H18a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 0 1 5-5h.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 22 7Z",
                className: u,
            }),
        ],
    });
};
