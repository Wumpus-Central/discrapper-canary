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
            secondaryColor: l = "transparent",
            secondaryColorClass: u = "",
            color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ..._
        } = e,
        h = (0, a.J)(t),
        f = h?.width ?? n,
        p = h?.height ?? o;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(_),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof l ? l : l.css, className: u }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
};
