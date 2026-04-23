t.d(s, { s: () => r });
var a = t(627968);
t(64700);
var n = t(827734),
    l = t(996682),
    i = t(27989);
let r = (e) => {
    let {
            size: s = "md",
            width: t,
            height: r,
            color: o = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...m
        } = e,
        d = (0, i.J)(s),
        u = d?.width ?? t,
        h = d?.height ?? r;
    return (0, a.jsxs)("svg", {
        ...(0, l.A)(m),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                clipRule: "evenodd",
                className: c,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z",
                className: c,
            }),
        ],
    });
};
