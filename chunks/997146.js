n.d(t, { c: () => o });
var s = n(477900);
n(582128);
var i = n(661531),
    l = n(996682),
    a = n(27989);
function o(e) {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        E = d?.width ?? n,
        _ = d?.height ?? o;
    return (0, s.jsx)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            fillRule: "evenodd",
            d: "M17 4H7a1 1 0 0 0-1 1v13.74l3.99-3.61a3 3 0 0 1 4.02 0l3.99 3.6V5a1 1 0 0 0-1-1ZM7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.67.74l5.66-5.13a1 1 0 0 1 1.34 0l5.66 5.13a1 1 0 0 0 1.67-.75V5a3 3 0 0 0-3-3H7Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
}
