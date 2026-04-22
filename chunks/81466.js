a.d(l, { C: () => r });
var t = a(627968);
a(64700);
var n = a(827734),
    o = a(996682),
    i = a(27989);
let r = (e) => {
    let {
            size: l = "md",
            width: a,
            height: r,
            color: s = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
        } = e,
        c = (0, i.J)(l),
        b = c?.width ?? a,
        p = c?.height ?? r;
    return (0, t.jsxs)("svg", {
        ...(0, o.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: b,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1Z",
                className: d,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M2 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9Zm3.5 2a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
};
