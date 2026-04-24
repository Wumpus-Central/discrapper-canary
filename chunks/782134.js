a.d(t, { u: () => o });
var r = a(627968);
a(64700);
var n = a(661531),
    i = a(996682),
    l = a(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: a,
            height: o,
            color: s = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, l.J)(t),
        p = u?.width ?? a,
        m = u?.height ?? o;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
            className: d,
        }),
    });
};
