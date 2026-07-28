s.d(h, { R: () => r });
var t = s(627968);
s(64700);
var i = s(661531),
    c = s(996682),
    e = s(27989);
function r(a) {
    let {
            size: h = "md",
            width: s,
            height: r,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = a,
        l = (0, e.J)(h),
        o = l?.width ?? s,
        w = l?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, c.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M22 5a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .34.04.67.11 1H3a1 1 0 0 1 0-2h3.11A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .34.04.67.11 1H3a1 1 0 1 1 0-2h3.11A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.2a2.5 2.5 0 1 0 0 2H21ZM11.11 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.11Z",
            className: n,
        }),
    });
}
