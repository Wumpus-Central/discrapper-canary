"use strict";
n.d(t, { u: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    s = n(27989);
function l(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        E = u?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z",
                className: d,
            }),
        ],
    });
}
