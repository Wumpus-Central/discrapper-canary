l.d(t, { Z: () => s });
var i = l(627968);
l(64700);
var n = l(661531),
    a = l(996682),
    r = l(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: l,
            height: s,
            color: E = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...h
        } = e,
        c = (0, r.J)(t),
        o = c?.width ?? l,
        g = c?.height ?? s;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(h),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof E ? E : E.css,
            d: "M1 5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z",
            className: d,
        }),
    });
};
