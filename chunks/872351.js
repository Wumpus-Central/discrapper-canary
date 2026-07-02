t.d(l, { z: () => a });
var n = t(627968);
t(64700);
var i = t(661531),
    r = t(996682),
    s = t(27989);
let a = (e) => {
    let {
            size: l = "md",
            width: t,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, s.J)(l),
        h = u?.width ?? t,
        T = u?.height ?? a;
    return (0, n.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: T,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: c,
        }),
    });
};
