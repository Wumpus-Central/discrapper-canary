l.d(s, { a: () => a });
var t = l(627968);
l(64700);
var e = l(661531),
    v = l(996682),
    i = l(27989);
let a = (h) => {
    let {
            size: s = "md",
            width: l,
            height: a,
            color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = h,
        w = (0, i.J)(s),
        n = w?.width ?? l,
        o = w?.height ?? a;
    return (0, t.jsx)("svg", {
        ...(0, v.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M6.9 5.08C8.97 6.64 11.2 9.8 12 11.5v4.5c0-.1-.04.01-.12.24-.42 1.27-2.08 6.19-5.88 2.25-2-2.07-1.07-4.14 2.57-4.77-2.09.36-4.43-.23-5.07-2.55-.19-.66-.5-4.77-.5-5.33 0-2.77 2.41-1.9 3.9-.77Zm10.2 0C15.03 6.64 12.8 9.8 12 11.5v4.5c0-.1.04.01.12.24.42 1.27 2.08 6.19 5.88 2.25 2-2.07 1.07-4.14-2.57-4.77 2.09.36 4.43-.23 5.07-2.55.18-.66.5-4.77.5-5.33 0-2.77-2.41-1.9-3.9-.77Z",
            className: r,
        }),
    });
};
