l.d(t, { Z: () => E });
var a = l(627968);
l(64700);
var s = l(661531),
    c = l(996682),
    i = l(27989);
let E = (e) => {
    let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
        } = e,
        d = (0, i.J)(t),
        o = d?.width ?? l,
        _ = d?.height ?? E;
    return (0, a.jsx)("svg", {
        ...(0, c.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M1 5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z",
            className: h,
        }),
    });
};
