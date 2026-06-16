l.d(s, { H: () => a });
var t = l(627968);
l(64700);
var v = l(661531),
    e = l(996682),
    i = l(27989);
let a = (h) => {
    let {
            size: s = "md",
            width: l,
            height: a,
            color: c = v.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = h,
        w = (0, i.J)(s),
        n = w?.width ?? l,
        o = w?.height ?? a;
    return (0, t.jsx)("svg", {
        ...(0, e.A)(d),
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
