s.d(r, { H: () => i });
var t = s(477900);
s(582128);
var a = s(661531),
    n = s(996682),
    l = s(27989);
function i(e) {
    let {
            size: r = "md",
            width: s,
            height: i,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...h
        } = e,
        c = (0, l.J)(r),
        m = c?.width ?? s,
        u = c?.height ?? i;
    return (0, t.jsx)("svg", {
        ...(0, n.A)(h),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: d,
        }),
    });
}
