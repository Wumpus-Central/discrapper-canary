i.d(s, { b: () => n });
var h = i(627968);
i(64700);
var l = i(661531),
    e = i(996682),
    r = i(27989);
function n(t) {
    let {
            size: s = "md",
            width: i,
            height: n,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...w
        } = t,
        a = (0, r.J)(s),
        d = a?.width ?? i,
        g = a?.height ?? n;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(w),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("rect", {
            width: "16",
            height: "16",
            x: "12",
            y: "1",
            fill: "string" == typeof c ? c : c.css,
            rx: "2",
            transform: "rotate(45 12 1)",
            className: o,
        }),
    });
}
