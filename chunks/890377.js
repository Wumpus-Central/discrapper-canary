l.d(a, { V: () => c });
var t = l(627968);
l(64700);
var i = l(661531),
    h = l(996682),
    e = l(27989);
function c(s) {
    let {
            size: a = "md",
            width: l,
            height: c,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...d
        } = s,
        o = (0, e.J)(a),
        w = o?.width ?? l,
        p = o?.height ?? c;
    return (0, t.jsxs)("svg", {
        ...(0, h.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M11.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 0 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: n,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M5.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                className: n,
            }),
        ],
    });
}
