l.d(s, { V: () => o });
var t = l(477900);
l(582128);
var i = l(661531),
    a = l(996682),
    n = l(27989);
function o(e) {
    let {
            size: s = "md",
            width: l,
            height: o,
            color: m = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = e,
        p = (0, n.J)(s),
        c = p?.width ?? l,
        u = p?.height ?? o;
    return (0, t.jsxs)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof m ? m : m.css,
                d: "M11.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 0 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof m ? m : m.css,
                d: "M5.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: r,
            }),
        ],
    });
}
