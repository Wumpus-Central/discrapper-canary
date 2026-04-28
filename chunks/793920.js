t.d(h, { S: () => v });
var s = t(627968);
t(64700);
var e = t(661531),
    i = t(996682),
    l = t(27989);
let v = (a) => {
    let {
            size: h = "md",
            width: t,
            height: v,
            color: r = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: w = "",
            ...c
        } = a,
        d = (0, l.J)(h),
        n = d?.width ?? t,
        o = d?.height ?? v;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z",
            className: w,
        }),
    });
};
