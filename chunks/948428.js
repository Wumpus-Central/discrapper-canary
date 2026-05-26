"use strict";
n.d(t, { m: () => o });
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
                d: "m12.58 18.26-9.55-6.72a1 1 0 0 0-1.3.13l-.69.69a1 1 0 0 0 0 1.41l9.2 9.2a1 1 0 0 0 1.4 0l.03-.03c.23-.23.32-.57.32-.9v-.2c.02-.35-.06-.71-.3-.96l-.04-.04 1-1c.06-.06.12-.12.17-.2a1 1 0 0 0-.24-1.39Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9ZM19 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-.45-3.5a.5.5 0 0 0-.5.55l.22 2.02c.01.16.17.26.33.23a1.95 1.95 0 0 1 .8 0c.16.03.32-.07.33-.23l.21-2.02a.5.5 0 0 0-.5-.55h-.89Z",
                clipRule: "evenodd",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, i.jsx)("path", {
                d: "M6.9 9.76a1 1 0 0 0-1.1 1.66l8.1 5.4a.5.5 0 0 0 .72-.16l.5-.87a.5.5 0 0 0-.16-.66L6.9 9.76ZM12.36 1.04a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1.01L12 2.8a1 1 0 0 1 0-1.42l.36-.35ZM16.6 13.26c-.18.23-.5.32-.75.15L8.62 8.6a1 1 0 1 1 1.11-1.66l7.25 4.83c.35.23.3.84-.01 1.12-.12.1-.25.23-.36.38Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
        ],
    });
};
