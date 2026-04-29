t.d(l, { c: () => c });
var e = t(627968);
t(64700);
var s = t(661531),
    h = t(996682),
    i = t(27989);
let c = (a) => {
    let {
            size: l = "md",
            width: t,
            height: c,
            color: r = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = a,
        n = (0, i.J)(l),
        v = n?.width ?? t,
        g = n?.height ?? c;
    return (0, e.jsx)("svg", {
        ...(0, h.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M17 4H7a1 1 0 0 0-1 1v13.74l3.99-3.61a3 3 0 0 1 4.02 0l3.99 3.6V5a1 1 0 0 0-1-1ZM7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.67.74l5.66-5.13a1 1 0 0 1 1.34 0l5.66 5.13a1 1 0 0 0 1.67-.75V5a3 3 0 0 0-3-3H7Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
};
