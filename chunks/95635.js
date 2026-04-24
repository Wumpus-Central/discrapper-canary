a.d(t, { J: () => l });
var n = a(627968);
a(64700);
var s = a(661531),
    i = a(996682),
    r = a(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: a,
            height: l,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        m = (0, r.J)(t),
        g = m?.width ?? a,
        p = m?.height ?? l;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: g,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: d,
        }),
    });
};
