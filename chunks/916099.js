s.d(h, { j: () => r });
var t = s(627968);
s(64700);
var e = s(661531),
    i = s(996682),
    l = s(27989);
let r = (a) => {
    let {
            size: h = "md",
            width: s,
            height: r,
            color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: w = "",
            ...n
        } = a,
        o = (0, l.J)(h),
        c = o?.width ?? s,
        p = o?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
            className: w,
        }),
    });
};
