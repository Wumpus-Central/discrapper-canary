t.d(a, { c: () => n });
var s = t(477900);
t(582128);
var l = t(661531),
    i = t(996682),
    h = t(27989);
function n(e) {
    let {
            size: a = "md",
            width: t,
            height: n,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, h.J)(a),
        p = d?.width ?? t,
        g = d?.height ?? n;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M17 4H7a1 1 0 0 0-1 1v13.74l3.99-3.61a3 3 0 0 1 4.02 0l3.99 3.6V5a1 1 0 0 0-1-1ZM7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.67.74l5.66-5.13a1 1 0 0 1 1.34 0l5.66 5.13a1 1 0 0 0 1.67-.75V5a3 3 0 0 0-3-3H7Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
}
