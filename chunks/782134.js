i.d(t, { u: () => a });
var h = i(477900);
i(582128);
var e = i(661531),
    c = i(996682),
    r = i(27989);
function a(s) {
    let {
            size: t = "md",
            width: i,
            height: a,
            color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: l = "",
            ...n
        } = s,
        p = (0, r.J)(t),
        o = p?.width ?? i,
        w = p?.height ?? a;
    return (0, h.jsx)("svg", {
        ...(0, c.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
            className: l,
        }),
    });
}
