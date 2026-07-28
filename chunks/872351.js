n.d(t, { z: () => o });
var l = n(627968);
n(64700);
var r = n(661531),
    i = n(996682),
    s = n(27989);
function o(e) {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: a = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        T = (0, s.J)(t),
        d = T?.width ?? n,
        E = T?.height ?? o;
    return (0, l.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: u,
        }),
    });
}
