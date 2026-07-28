t.d(a, { s: () => d });
var e = t(627968);
t(64700);
var h = t(661531),
    i = t(996682),
    l = t(27989);
function d(s) {
    let {
            size: a = "md",
            width: t,
            height: d,
            color: n = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...r
        } = s,
        o = (0, l.J)(a),
        p = o?.width ?? t,
        w = o?.height ?? d;
    return (0, e.jsxs)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, e.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                clipRule: "evenodd",
                className: c,
            }),
            (0, e.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z",
                className: c,
            }),
        ],
    });
}
