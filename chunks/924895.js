l.d(e, { H: () => h });
var s = l(477900);
l(582128);
var i = l(661531),
    a = l(996682),
    n = l(27989);
function h(t) {
    let {
            size: e = "md",
            width: l,
            height: h,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = t,
        v = (0, n.J)(e),
        d = v?.width ?? l,
        A = v?.height ?? h;
    return (0, s.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: r,
        }),
    });
}
