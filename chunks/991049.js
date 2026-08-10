"use strict";
n.d(t, { t: () => l });
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
    return (0, i.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12.23 12.63c2.48 0 5.35 1.13 6 4.32.12.56-.35 1.05-.92 1.05H6.84c-.6 0-1.07-.53-.92-1.1.83-3.15 3.45-4.27 5.92-4.27h.39ZM12.04 4.99c1.8 0 3.25 1.42 3.25 3.18a3.22 3.22 0 0 1-3.25 3.19 3.22 3.22 0 0 1-3.25-3.19A3.22 3.22 0 0 1 12.04 5ZM1 20v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H4a3 3 0 0 1-3-3ZM23 4v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2h2a3 3 0 0 1 3 3ZM4 1h2a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V4a3 3 0 0 1 3-3ZM20 23h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3 3 0 0 1-3 3Z",
            className: d,
        }),
    });
}
