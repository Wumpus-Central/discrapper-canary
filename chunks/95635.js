r.d(t, { J: () => o });
var n = r(627968);
r(64700);
var a = r(661531),
    i = r(996682),
    l = r(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: r,
            height: o,
            color: s = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, l.J)(t),
        m = u?.width ?? r,
        E = u?.height ?? o;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: d,
        }),
    });
};
