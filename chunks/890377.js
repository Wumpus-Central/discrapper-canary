t.d(a, { V: () => c });
var l = t(477900);
t(582128);
var i = t(661531),
    h = t(996682),
    e = t(27989);
function c(s) {
    let {
            size: a = "md",
            width: t,
            height: c,
            color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = s,
        n = (0, e.J)(a),
        o = n?.width ?? t,
        w = n?.height ?? c;
    return (0, l.jsxs)("svg", {
        ...(0, h.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M11.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 0 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: r,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M5.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: r,
            }),
        ],
    });
}
