e.d(t, { a: () => r });
var l = e(627968);
e(64700);
var h = e(661531),
    i = e(996682),
    a = e(27989);
let r = (s) => {
    let {
            size: t = "md",
            width: e,
            height: r,
            color: c = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...v
        } = s,
        n = (0, a.J)(t),
        o = n?.width ?? e,
        w = n?.height ?? r;
    return (0, l.jsx)("svg", {
        ...(0, i.A)(v),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M6.9 5.08C8.97 6.64 11.2 9.8 12 11.5v4.5c0-.1-.04.01-.12.24-.42 1.27-2.08 6.19-5.88 2.25-2-2.07-1.07-4.14 2.57-4.77-2.09.36-4.43-.23-5.07-2.55-.19-.66-.5-4.77-.5-5.33 0-2.77 2.41-1.9 3.9-.77Zm10.2 0C15.03 6.64 12.8 9.8 12 11.5v4.5c0-.1.04.01.12.24.42 1.27 2.08 6.19 5.88 2.25 2-2.07 1.07-4.14-2.57-4.77 2.09.36 4.43-.23 5.07-2.55.18-.66.5-4.77.5-5.33 0-2.77-2.41-1.9-3.9-.77Z",
            className: d,
        }),
    });
};
