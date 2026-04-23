a.d(l, { M: () => c });
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
                d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6.88c0 .37-.38.61-.73.5a7 7 0 0 0-8.9 8.89c.12.35-.12.73-.49.73H5a3 3 0 0 1-3-3V5Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M19 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
                className: r,
            }),
        ],
    });
};
