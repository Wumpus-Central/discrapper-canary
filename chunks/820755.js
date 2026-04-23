a.d(l, { R: () => c });
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
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6.46c0-.35-.34-.6-.69-.56-.2.03-.41.03-.62 0-.35-.03-.69.21-.69.56V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6.82c.2 0 .4-.14.49-.33a3 3 0 0 1 .8-1c.27-.22.23-.67-.11-.67H8Zm3 18a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
                clipRule: "evenodd",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M22 7a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L18.58 6H18a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 0 1 5-5h.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 22 7Z",
                className: r,
            }),
        ],
    });
};
