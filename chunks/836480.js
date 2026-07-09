l.d(t, { Q: () => r });
var a = l(627968);
l(64700);
var s = l(661531),
    i = l(996682),
    n = l(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: l,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        h = (0, n.J)(t),
        E = h?.width ?? l,
        u = h?.height ?? r;
    return (0, a.jsxs)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                className: c,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
                clipRule: "evenodd",
                className: c,
            }),
        ],
    });
};
