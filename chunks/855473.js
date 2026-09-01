t.d(e, { Z: () => n });
var a = t(477900);
t(582128);
var s = t(661531),
    i = t(996682),
    r = t(27989);
function n(l) {
    let {
            size: e = "md",
            width: t,
            height: n,
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...o
        } = l,
        d = (0, r.J)(e),
        v = d?.width ?? t,
        f = d?.height ?? n;
    return (0, a.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z",
            className: h,
        }),
    });
}
