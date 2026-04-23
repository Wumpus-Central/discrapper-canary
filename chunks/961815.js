a.d(l, { l: () => c });
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
            d: "M2.3 16.7a1 1 0 0 1 0-1.4l5-5a1 1 0 1 1 1.4 1.4L5.42 15H11a7 7 0 0 0 7-7V4a1 1 0 1 1 2 0v4a9 9 0 0 1-9 9H5.41l3.3 3.3a1 1 0 1 1-1.42 1.4l-5-5Z",
            className: r,
        }),
    });
};
