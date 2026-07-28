i.d(s, { Q: () => a });
var t = i(627968);
i(64700);
var h = i(661531),
    d = i(996682),
    l = i(27989);
function a(e) {
    let {
            size: s = "md",
            width: i,
            height: a,
            color: n = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = e,
        p = (0, l.J)(s),
        r = p?.width ?? i,
        w = p?.height ?? a;
    return (0, t.jsx)("svg", {
        ...(0, d.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
}
