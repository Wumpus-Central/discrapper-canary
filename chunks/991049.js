a.d(t, { t: () => i });
var s = a(477900);
a(582128);
var l = a(661531),
    n = a(996682),
    r = a(27989);
function i(e) {
    let {
            size: t = "md",
            width: a,
            height: i,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        h = (0, r.J)(t),
        u = h?.width ?? a,
        m = h?.height ?? i;
    return (0, s.jsx)("svg", {
        ...(0, n.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12.23 12.63c2.48 0 5.35 1.13 6 4.32.12.56-.35 1.05-.92 1.05H6.84c-.6 0-1.07-.53-.92-1.1.83-3.15 3.45-4.27 5.92-4.27h.39ZM12.04 4.99c1.8 0 3.25 1.42 3.25 3.18a3.22 3.22 0 0 1-3.25 3.19 3.22 3.22 0 0 1-3.25-3.19A3.22 3.22 0 0 1 12.04 5ZM1 20v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H4a3 3 0 0 1-3-3ZM23 4v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2h2a3 3 0 0 1 3 3ZM4 1h2a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V4a3 3 0 0 1 3-3ZM20 23h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3 3 0 0 1-3 3Z",
            className: d,
        }),
    });
}
