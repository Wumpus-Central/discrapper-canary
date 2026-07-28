e.d(s, { W: () => d });
var i = e(627968);
e(64700);
var t = e(661531),
    h = e(996682),
    l = e(27989);
function d(a) {
    let {
            size: s = "md",
            width: e,
            height: d,
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = a,
        o = (0, l.J)(s),
        r = o?.width ?? e,
        v = o?.height ?? d;
    return (0, i.jsxs)("svg", {
        ...(0, h.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                className: n,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                clipRule: "evenodd",
                className: n,
            }),
        ],
    });
}
sName: d;
})]})}
