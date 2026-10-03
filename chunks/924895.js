t.d(s, { H: () => n });
var e = t(477900);
t(582128);
var i = t(661531),
    a = t(996682),
    h = t(27989);
function n(l) {
    let {
            size: s = "md",
            width: t,
            height: n,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = l,
        v = (0, h.J)(s),
        d = v?.width ?? t,
        g = v?.height ?? n;
    return (0, e.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: r,
        }),
    });
}
