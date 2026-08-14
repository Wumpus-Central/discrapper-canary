i.d(t, { K: () => l });
var E = i(477900);
i(582128);
var s = i(661531);
if (221552 == i.j) var n = i(996682);
if (221552 == i.j) var r = i(27989);
function l(e) {
    let {
            size: t = "md",
            width: i,
            height: l,
            color: a = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: _ = "",
            ...S
        } = e,
        A = (0, r.J)(t),
        c = A?.width ?? i,
        o = A?.height ?? l;
    return (0, E.jsx)("svg", {
        ...(0, n.A)(S),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, E.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z",
            clipRule: "evenodd",
            className: _,
        }),
    });
}
