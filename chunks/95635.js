r.d(t, { J: () => a });
var n = r(627968);
r(64700);
var i = r(661531),
    s = r(996682),
    o = r(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: r,
            height: a,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, o.J)(t),
        p = u?.width ?? r,
        h = u?.height ?? a;
    return (0, n.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: d,
        }),
    });
};
