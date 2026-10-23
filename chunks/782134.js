(i.r(t), i.d(t, { PlayIcon: () => a }));
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
            color: l = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...d
        } = s,
        o = (0, r.J)(t),
        p = o?.width ?? i,
        w = o?.height ?? a;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
            className: n,
        }),
    });
}
