s.d(a, { Z: () => h });
var c = s(477900);
s(582128);
var e = s(661531),
    t = s(996682),
    i = s(27989);
function h(l) {
    let {
            size: a = "md",
            width: s,
            height: h,
            color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = l,
        v = (0, i.J)(a),
        r = v?.width ?? s,
        f = v?.height ?? h;
    return (0, c.jsx)("svg", {
        ...(0, t.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, c.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z",
            className: d,
        }),
    });
}
