t.d(l, { s: () => c });
var a = t(627968);
t(64700);
var s = t(661531),
    i = t(996682),
    h = t(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: t,
            height: c,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...r
        } = e,
        d = (0, h.J)(l),
        v = d?.width ?? t,
        g = d?.height ?? c;
    return (0, a.jsxs)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                clipRule: "evenodd",
                className: o,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z",
                className: o,
            }),
        ],
    });
};
