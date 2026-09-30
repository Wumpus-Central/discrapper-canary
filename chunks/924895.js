t.d(s, { H: () => c });
var l = t(477900);
t(582128);
var v = t(661531),
    i = t(996682),
    e = t(27989);
function c(h) {
    let {
            size: s = "md",
            width: t,
            height: c,
            color: a = v.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...r
        } = h,
        o = (0, e.J)(s),
        d = o?.width ?? t,
        w = o?.height ?? c;
    return (0, l.jsx)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: n,
        }),
    });
}
