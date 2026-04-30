s.d(l, { H: () => c });
var t = s(627968);
s(64700);
var v = s(661531),
    a = s(996682),
    e = s(27989);
let c = (h) => {
    let {
            size: l = "md",
            width: s,
            height: c,
            color: i = v.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = h,
        w = (0, e.J)(l),
        n = w?.width ?? s,
        o = w?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: r,
        }),
    });
};
