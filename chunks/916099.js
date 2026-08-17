s.d(h, { ListBulletsIcon: () => n });
var t = s(477900);
s(582128);
var i = s(661531),
    e = s(996682),
    l = s(27989);
function n(a) {
    let {
            size: h = "md",
            width: s,
            height: n,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = a,
        d = (0, l.J)(h),
        w = d?.width ?? s,
        p = d?.height ?? n;
    return (0, t.jsx)("svg", {
        ...(0, e.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
            className: o,
        }),
    });
}
