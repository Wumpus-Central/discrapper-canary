a.d(l, { x: () => c });
var t = a(627968);
a(64700);
var s = a(827734),
    i = a(996682),
    n = a(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: a,
            height: c,
            color: h = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, n.J)(l),
        v = d?.width ?? a,
        g = d?.height ?? c;
    return (0, t.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M6 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-6.64 6.64A4.66 4.66 0 0 0 4 15.35V17a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.66c0-1.76.7-3.46 1.95-4.7L10.59 4H7a1 1 0 0 1-1-1Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M18 21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l6.64-6.64A4.66 4.66 0 0 0 20 8.65V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2 5 5 0 0 1 5 5v1.66c0 1.76-.7 3.46-1.95 4.7L13.41 20H17a1 1 0 0 1 1 1Z",
                className: r,
            }),
        ],
    });
};
