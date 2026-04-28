a.d(t, { u: () => s });
var n = a(627968);
a(64700);
var l = a(661531),
    r = a(996682),
    i = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, i.J)(t),
        h = u?.width ?? a,
        p = u?.height ?? s;
    return (0, n.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
            className: c,
        }),
    });
};
