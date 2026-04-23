a.d(l, { u: () => c });
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
            d: "M4 22a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4ZM15 22a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5ZM13 9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5Z",
            className: r,
        }),
    });
};
