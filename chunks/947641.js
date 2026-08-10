i.d(s, { r: () => a });
var l = i(477900);
i(582128);
var t = i(661531),
    d = i(996682),
    h = i(27989);
function a(e) {
    let {
            size: s = "md",
            width: i,
            height: a,
            color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
        } = e,
        o = (0, h.J)(s),
        p = o?.width ?? i,
        w = o?.height ?? a;
    return (0, l.jsx)("svg", {
        ...(0, d.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
}
