s.d(h, { H: () => v });
var t = s(627968);
s(64700);
var e = s(827734),
    a = s(996682),
    i = s(27989);
let v = (l) => {
    let {
            size: h = "md",
            width: s,
            height: v,
            color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = l,
        w = (0, i.J)(h),
        n = w?.width ?? s,
        o = w?.height ?? v;
    return (0, t.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: r,
        }),
    });
};
