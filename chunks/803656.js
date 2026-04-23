a.d(l, { U: () => c });
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
            d: "M22 8a1 1 0 1 0-2 0v3.54A10.26 10.26 0 0 0 11.63 7c-4.24 0-7.84 2.74-9.54 6.6a1 1 0 0 0 1.82.8C5.36 11.15 8.31 9 11.63 9a8.34 8.34 0 0 1 6.95 4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V8Z",
            className: r,
        }),
    });
};
