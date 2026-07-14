l.d(s, { b: () => w });
var e = l(627968);
l(64700);
var h = l(661531),
    i = l(996682),
    r = l(27989);
let w = (t) => {
    let {
            size: s = "md",
            width: l,
            height: w,
            color: c = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = t,
        d = (0, r.J)(s),
        n = d?.width ?? l,
        g = d?.height ?? w;
    return (0, e.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("rect", {
            width: "16",
            height: "16",
            x: "12",
            y: "1",
            fill: "string" == typeof c ? c : c.css,
            rx: "2",
            transform: "rotate(45 12 1)",
            className: a,
        }),
    });
};
