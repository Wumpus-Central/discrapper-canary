r.d(t, { J: () => l });
var i = r(627968);
r(64700);
var s = r(661531),
    n = r(996682),
    a = r(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: r,
            height: l,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, a.J)(t),
        h = u?.width ?? r,
        p = u?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, n.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: d,
        }),
    });
};
