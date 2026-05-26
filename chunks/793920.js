h.d(t, { S: () => r });
var l = h(627968);
h(64700);
var s = h(661531),
    e = h(996682),
    i = h(27989);
let r = (a) => {
    let {
            size: t = "md",
            width: h,
            height: r,
            color: v = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...d
        } = a,
        w = (0, i.J)(t),
        o = w?.width ?? h,
        c = w?.height ?? r;
    return (0, l.jsx)("svg", {
        ...(0, e.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: c,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof v ? v : v.css,
            d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z",
            className: n,
        }),
    });
};
