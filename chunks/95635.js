n.d(t, { J: () => s });
var i = n(627968);
n(64700);
var r = n(661531),
    l = n(996682),
    a = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = e,
        d = (0, a.J)(t),
        m = d?.width ?? n,
        g = d?.height ?? s;
    return (0, i.jsx)("svg", {
        ...(0, l.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: c,
        }),
    });
};
