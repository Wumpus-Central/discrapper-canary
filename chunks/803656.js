n.d(t, { U: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    s = n(27989);
function l(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        E = u?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M22 8a1 1 0 1 0-2 0v3.54A10.26 10.26 0 0 0 11.63 7c-4.24 0-7.84 2.74-9.54 6.6a1 1 0 0 0 1.82.8C5.36 11.15 8.31 9 11.63 9a8.34 8.34 0 0 1 6.95 4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V8Z",
            className: d,
        }),
    });
}
