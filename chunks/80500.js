l.d(s, { C: () => c });
var t = l(627968);
l(64700);
var v = l(661531),
    i = l(996682),
    e = l(27989);
function c(h) {
    let {
            size: s = "md",
            width: l,
            height: c,
            color: a = v.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...r
        } = h,
        o = (0, e.J)(s),
        d = o?.width ?? l,
        w = o?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M23.5 5.65a3.02 3.02 0 0 0-2.12-2.14C19.5 3 12 3 12 3s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 5.66C0 7.55 0 11.5 0 11.5s0 3.95.5 5.85a3.02 3.02 0 0 0 2.12 2.14C4.5 20 12 20 12 20s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.15c.5-1.9.5-5.85.5-5.85s0-3.95-.5-5.85ZM9.55 15.1V7.9l6.27 3.59-6.27 3.59Z",
            className: n,
        }),
    });
}
