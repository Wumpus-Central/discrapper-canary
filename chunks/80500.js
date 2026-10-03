t.d(s, { C: () => n });
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
            d: "M23.5 5.65a3.02 3.02 0 0 0-2.12-2.14C19.5 3 12 3 12 3s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 5.66C0 7.55 0 11.5 0 11.5s0 3.95.5 5.85a3.02 3.02 0 0 0 2.12 2.14C4.5 20 12 20 12 20s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.15c.5-1.9.5-5.85.5-5.85s0-3.95-.5-5.85ZM9.55 15.1V7.9l6.27 3.59-6.27 3.59Z",
            className: r,
        }),
    });
}
