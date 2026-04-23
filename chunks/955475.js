a.d(l, { P: () => c });
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
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            fillRule: "evenodd",
            d: "M7.75 2a.75.75 0 0 0-.75.75V7H2.75a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75H7v4H2.75a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75H7v4.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V17h4v4.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V17h4.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H17v-4h4.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H17V2.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V7h-4V2.75A.75.75 0 0 0 9.25 2h-1.5ZM14 14v-4h-4v4h4Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
