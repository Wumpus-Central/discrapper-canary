a.d(l, { I: () => c });
var t = a(627968);
a(64700);
var s = a(827734),
    i = a(996682),
    n = a(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: a,
            height: c,
            color: h = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, n.J)(l),
        v = d?.width ?? a,
        g = d?.height ?? c;
    return (0, t.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fillRule: "evenodd",
                d: "M20 3a3 3 0 0 1 3 3v4.94c0 .72-.76 1.21-1.48 1.14a4.94 4.94 0 0 0-4.02 1.42l-4 4a4.93 4.93 0 0 0-1.35 2.5c-.11.55-.55 1-1.1 1H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                clipRule: "evenodd",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M15.5 18.02a.74.74 0 1 1 1.04 1.04l-.57.58a1.7 1.7 0 0 0 2.4 2.4l.57-.58a.74.74 0 0 1 1.04 1.04l-.58.57a3.17 3.17 0 0 1-4.47-4.47l.57-.58Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M19.43 17.52a.74.74 0 0 1 1.05 1.05l-1.91 1.9a.74.74 0 0 1-1.05-1.04l1.91-1.9Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M18.6 14.93a3.17 3.17 0 0 1 4.47 4.47l-.57.58a.74.74 0 0 1-1.04-1.04l.57-.58a1.7 1.7 0 0 0-2.4-2.4l-.57.58a.74.74 0 0 1-1.04-1.04l.58-.57Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
        ],
    });
};
