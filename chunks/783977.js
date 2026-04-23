a.d(t, { R: () => s });
var n = a(627968);
a(64700);
var r = a(827734),
    i = a(996682),
    l = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: _ = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        c = (0, l.J)(t),
        u = c?.width ?? a,
        h = c?.height ?? s;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof _ ? _ : _.css,
            d: "M22 5a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .34.04.67.11 1H3a1 1 0 0 1 0-2h3.11A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .34.04.67.11 1H3a1 1 0 1 1 0-2h3.11A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.2a2.5 2.5 0 1 0 0 2H21ZM11.11 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.11Z",
            className: o,
        }),
    });
};
