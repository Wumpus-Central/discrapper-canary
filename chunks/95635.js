s.d(a, { J: () => c });
var e = s(477900);
s(582128);
var t = s(661531),
    i = s(996682),
    h = s(27989);
function c(l) {
    let {
            size: a = "md",
            width: s,
            height: c,
            color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = l,
        r = (0, h.J)(a),
        v = r?.width ?? s,
        w = r?.height ?? c;
    return (0, e.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: d,
        }),
    });
}
