n.d(t, { Z: () => s });
var i = n(477900);
n(582128);
var l = n(661531),
    a = n(996682),
    r = n(27989);
function s(e) {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: E = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = e,
        u = (0, r.J)(t),
        c = u?.width ?? n,
        h = u?.height ?? s;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof E ? E : E.css,
            d: "M1 5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z",
            className: d,
        }),
    });
}
