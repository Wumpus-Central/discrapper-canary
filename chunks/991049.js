s.d(t, { t: () => n });
var a = s(477900);
s(582128);
var l = s(661531),
    r = s(996682),
    i = s(27989);
function n(e) {
    let {
            size: t = "md",
            width: s,
            height: n,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        h = (0, i.J)(t),
        u = h?.width ?? s,
        m = h?.height ?? n;
    return (0, a.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12.23 12.63c2.48 0 5.35 1.13 6 4.32.12.56-.35 1.05-.92 1.05H6.84c-.6 0-1.07-.53-.92-1.1.83-3.15 3.45-4.27 5.92-4.27h.39ZM12.04 4.99c1.8 0 3.25 1.42 3.25 3.18a3.22 3.22 0 0 1-3.25 3.19 3.22 3.22 0 0 1-3.25-3.19A3.22 3.22 0 0 1 12.04 5ZM1 20v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H4a3 3 0 0 1-3-3ZM23 4v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2h2a3 3 0 0 1 3 3ZM4 1h2a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V4a3 3 0 0 1 3-3ZM20 23h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3 3 0 0 1-3 3Z",
            className: c,
        }),
    });
}
