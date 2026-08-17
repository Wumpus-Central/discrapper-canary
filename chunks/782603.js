t.d(e, { BellIcon: () => h });
var i = t(477900);
t(582128);
var l = t(661531),
    c = t(996682),
    a = t(27989);
function h(s) {
    let {
            size: e = "md",
            width: t,
            height: h,
            color: n = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = s,
        r = (0, a.J)(e),
        w = r?.width ?? t,
        v = r?.height ?? h;
    return (0, i.jsx)("svg", {
        ...(0, c.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
            className: d,
        }),
    });
}
