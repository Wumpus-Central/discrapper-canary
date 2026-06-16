n.d(e, { Q: () => o });
var s = n(627968);
n(64700);
var i = n(661531),
    a = n(996682),
    l = n(27989);
let o = (t) => {
    let {
            size: e = "md",
            width: n,
            height: o,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = t,
        C = (0, l.J)(e),
        E = C?.width ?? n,
        d = C?.height ?? o;
    return (0, s.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: d,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                className: u,
            }),
            (0, s.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
