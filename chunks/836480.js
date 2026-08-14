l.d(e, { Q: () => h });
var i = l(477900);
l(582128);
var t = l(661531),
    a = l(996682),
    d = l(27989);
function h(s) {
    let {
            size: e = "md",
            width: l,
            height: h,
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        o = (0, d.J)(e),
        r = o?.width ?? l,
        w = o?.height ?? h;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                className: n,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
                clipRule: "evenodd",
                className: n,
            }),
        ],
    });
}
