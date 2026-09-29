i.d(t, { z: () => r });
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
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: d,
        }),
    });
}
