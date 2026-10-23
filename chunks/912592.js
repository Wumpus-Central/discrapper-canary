(t.r(i), t.d(i, { InboxIcon: () => a }));
var s = t(477900);
t(582128);
var n = t(661531);
if (221552 == t.j) var r = t(996682);
if (221552 == t.j) var l = t(27989);
function a(e) {
    let {
            size: i = "md",
            width: t,
            height: a,
            color: c = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = e,
        h = (0, l.J)(i),
        u = h?.width ?? t,
        j = h?.height ?? a;
    return (0, s.jsx)("svg", {
        ...(0, r.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: j,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
}
