h.d(s, { H: () => c });
var t = h(477900);
h(582128);
var i = h(661531),
    l = h(996682),
    e = h(27989);
function c(a) {
    let {
            size: s = "md",
            width: h,
            height: c,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = a,
        p = (0, e.J)(s),
        o = p?.width ?? h,
        w = p?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, l.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M8.3 1.3a1 1 0 0 0 0 1.4l.29.3H6a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0V7c0-1.1.9-2 2-2h2.59l-.3.3a1 1 0 0 0 1.42 1.4l2-2a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.42 0ZM22 11a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8Z",
            className: d,
        }),
    });
}
