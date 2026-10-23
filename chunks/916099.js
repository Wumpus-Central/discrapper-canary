(t.r(a), t.d(a, { ListBulletsIcon: () => c }));
var h = t(477900);
t(582128);
var i = t(661531),
    e = t(996682),
    r = t(27989);
function c(s) {
    let {
            size: a = "md",
            width: t,
            height: c,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...d
        } = s,
        o = (0, r.J)(a),
        p = o?.width ?? t,
        w = o?.height ?? c;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
            className: n,
        }),
    });
}
