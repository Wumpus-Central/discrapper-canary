a.d(l, { V: () => r });
var t = a(627968);
a(64700);
var e = a(661531),
    i = a(996682),
    h = a(27989);
let r = (s) => {
    let {
            size: l = "md",
            width: a,
            height: r,
            color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...w
        } = s,
        n = (0, h.J)(l),
        o = n?.width ?? a,
        p = n?.height ?? r;
    return (0, t.jsxs)("svg", {
        ...(0, i.A)(w),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M11.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 0 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: d,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M5.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: d,
            }),
        ],
    });
};
