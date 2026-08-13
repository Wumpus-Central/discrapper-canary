i.d(t, { U: () => r });
var h = i(477900);
i(582128);
var a = i(661531),
    e = i(996682),
    l = i(27989);
function r(s) {
    let {
            size: t = "md",
            width: i,
            height: r,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = s,
        p = (0, l.J)(t),
        o = p?.width ?? i,
        w = p?.height ?? r;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M18.94 21.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l6.94-6.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 5.06 2.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-6.94 6.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l6.94 6.94Z",
            className: d,
        }),
    });
}
