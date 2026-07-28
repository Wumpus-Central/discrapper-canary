e.d(l, { V: () => d });
var t = e(477900);
e(582128);
var a = e(661531),
    i = e(996682),
    h = e(27989);
function d(s) {
    let {
            size: l = "md",
            width: e,
            height: d,
            color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...r
        } = s,
        c = (0, h.J)(l),
        p = c?.width ?? e,
        v = c?.height ?? d;
    return (0, t.jsxs)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
                clipRule: "evenodd",
                className: o,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M6 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",
                className: o,
            }),
        ],
    });
}
