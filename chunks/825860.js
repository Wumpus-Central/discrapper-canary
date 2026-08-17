s.d(i, { FireIcon: () => d });
var l = s(477900);
s(582128);
var t = s(661531),
    a = s(996682),
    c = s(27989);
function d(e) {
    let {
            size: i = "md",
            width: s,
            height: d,
            color: h = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = e,
        r = (0, c.J)(i),
        p = r?.width ?? s,
        w = r?.height ?? d;
    return (0, l.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            fillRule: "evenodd",
            d: "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
            clipRule: "evenodd",
            className: n,
        }),
    });
}
