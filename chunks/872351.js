l.d(t, { z: () => a });
var n = l(477900);
l(582128);
var i = l(661531),
    r = l(996682),
    s = l(27989);
function a(e) {
    let {
            size: t = "md",
            width: l,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, s.J)(t),
        h = u?.width ?? l,
        T = u?.height ?? a;
    return (0, n.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: T,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: c,
        }),
    });
}
