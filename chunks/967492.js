t.d(s, { a: () => n });
var e = t(477900);
t(582128);
var i = t(661531),
    a = t(996682),
    h = t(27989);
function n(l) {
    let {
            size: s = "md",
            width: t,
            height: n,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = l,
        v = (0, h.J)(s),
        d = v?.width ?? t,
        g = v?.height ?? n;
    return (0, e.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M6.9 5.08C8.97 6.64 11.2 9.8 12 11.5v4.5c0-.1-.04.01-.12.24-.42 1.27-2.08 6.19-5.88 2.25-2-2.07-1.07-4.14 2.57-4.77-2.09.36-4.43-.23-5.07-2.55-.19-.66-.5-4.77-.5-5.33 0-2.77 2.41-1.9 3.9-.77Zm10.2 0C15.03 6.64 12.8 9.8 12 11.5v4.5c0-.1.04.01.12.24.42 1.27 2.08 6.19 5.88 2.25 2-2.07 1.07-4.14-2.57-4.77 2.09.36 4.43-.23 5.07-2.55.18-.66.5-4.77.5-5.33 0-2.77-2.41-1.9-3.9-.77Z",
            className: r,
        }),
    });
}
