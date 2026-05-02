l.d(t, { H: () => r });
var n = l(627968);
l(64700);
var i = l(661531),
    s = l(996682),
    a = l(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: l,
            height: r,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        u = (0, a.J)(t),
        m = u?.width ?? l,
        h = u?.height ?? r;
    return (0, n.jsx)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: o,
        }),
    });
};
