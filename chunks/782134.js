h.d(t, { PlayIcon: () => n });
var a = h(477900);
h(582128);
var i = h(661531),
    e = h(996682),
    l = h(27989);
function n(s) {
    let {
            size: t = "md",
            width: h,
            height: n,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = s,
        d = (0, l.J)(t),
        w = d?.width ?? h,
        p = d?.height ?? n;
    return (0, a.jsx)("svg", {
        ...(0, e.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
            className: c,
        }),
    });
}
