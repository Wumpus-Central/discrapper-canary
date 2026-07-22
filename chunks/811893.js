t.d(s, { t: () => p });
var h = t(627968);
t(64700);
var i = t(661531),
    e = t(996682),
    l = t(27989);
let p = (a) => {
    let {
            size: s = "md",
            width: t,
            height: p,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = a,
        n = (0, l.J)(s),
        o = n?.width ?? t,
        v = n?.height ?? p;
    return (0, h.jsxs)("svg", {
        ...(0, e.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, h.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L19.58 3H16a1 1 0 0 1-1-1Z",
                className: c,
            }),
            (0, h.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 1 0-2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                className: c,
            }),
        ],
    });
};
