n.d(t, { W: () => a });
var i = n(627968);
n(64700);
var s = n(827734),
    l = n(996682),
    r = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        u = (0, r.J)(t),
        E = u?.width ?? n,
        A = u?.height ?? a;
    return (0, i.jsxs)("svg", {
        ...(0, l.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                className: o,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                clipRule: "evenodd",
                className: o,
            }),
        ],
    });
};
