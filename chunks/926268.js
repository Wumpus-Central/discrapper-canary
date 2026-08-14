i.d(t, { C: () => a });
var h = i(477900);
i(582128);
var c = i(661531),
    e = i(996682),
    r = i(27989);
function a(s) {
    let {
            size: t = "md",
            width: i,
            height: a,
            color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        l = (0, r.J)(t),
        o = l?.width ?? i,
        w = l?.height ?? a;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M12.47 21.73a.92.92 0 0 1-.94 0C9.43 20.48 1 15.09 1 8.75A5.75 5.75 0 0 1 6.75 3c2.34 0 3.88.9 5.25 2.26A6.98 6.98 0 0 1 17.25 3 5.75 5.75 0 0 1 23 8.75c0 6.34-8.42 11.73-10.53 12.98Z",
            className: n,
        }),
    });
}
