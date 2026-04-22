a.d(l, { O: () => c });
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
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            d: "M15.94 5.94a1.5 1.5 0 1 1 2.12 2.12L14.12 12l3.94 3.94a1.5 1.5 0 0 1-2.12 2.12L12 14.12l-3.94 3.94a1.5 1.5 0 1 1-2.12-2.12L9.88 12 5.94 8.06a1.5 1.5 0 1 1 2.12-2.12L12 9.88l3.94-3.94Z",
            className: r,
        }),
    });
};
