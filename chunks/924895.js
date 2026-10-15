a.d(r, { H: () => i });
var s = a(477900);
a(582128);
var t = a(661531),
    n = a(996682),
    l = a(27989);
function i(e) {
    let {
            size: r = "md",
            width: a,
            height: i,
            color: o = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...h
        } = e,
        c = (0, l.J)(r),
        m = c?.width ?? a,
        u = c?.height ?? i;
    return (0, s.jsx)("svg", {
        ...(0, n.A)(h),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: d,
        }),
    });
}
