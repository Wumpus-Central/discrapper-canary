s.d(a, { t: () => d });
var e = s(627968);
s(64700);
var t = s(661531),
    i = s(996682),
    h = s(27989);
let d = (l) => {
    let {
            size: a = "md",
            width: s,
            height: d,
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...n
        } = l,
        o = (0, h.J)(a),
        p = o?.width ?? s,
        v = o?.height ?? d;
    return (0, e.jsxs)("svg", {
        ...(0, i.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, e.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                clipRule: "evenodd",
                className: r,
            }),
            (0, e.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                className: r,
            }),
        ],
    });
};
