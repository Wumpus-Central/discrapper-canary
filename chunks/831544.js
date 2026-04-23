l.d(t, { c: () => s });
var n = l(627968);
l(64700);
var a = l(827734),
    i = l(996682),
    r = l(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: l,
            height: s,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, r.J)(t),
        h = u?.width ?? l,
        g = u?.height ?? s;
    return (0, n.jsxs)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
                className: d,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                className: d,
            }),
        ],
    });
};
