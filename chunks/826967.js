t.d(a, { x: () => l });
var h = t(477900);
t(582128);
var i = t(661531),
    c = t(996682),
    e = t(27989);
function l(s) {
    let {
            size: a = "md",
            width: t,
            height: l,
            color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = s,
        n = (0, e.J)(a),
        o = n?.width ?? t,
        v = n?.height ?? l;
    return (0, h.jsxs)("svg", {
        ...(0, c.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, h.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M6 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-6.64 6.64A4.66 4.66 0 0 0 4 15.35V17a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.66c0-1.76.7-3.46 1.95-4.7L10.59 4H7a1 1 0 0 1-1-1Z",
                className: r,
            }),
            (0, h.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M18 21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l6.64-6.64A4.66 4.66 0 0 0 20 8.65V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2 5 5 0 0 1 5 5v1.66c0 1.76-.7 3.46-1.95 4.7L13.41 20H17a1 1 0 0 1 1 1Z",
                className: r,
            }),
        ],
    });
}
