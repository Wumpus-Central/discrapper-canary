n.d(t, { c: () => a });
var i = n(627968);
n(64700);
var s = n(661531),
    r = n(996682),
    l = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
        } = e,
        c = (0, l.J)(t),
        _ = c?.width ?? n,
        h = c?.height ?? a;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M17 4H7a1 1 0 0 0-1 1v13.74l3.99-3.61a3 3 0 0 1 4.02 0l3.99 3.6V5a1 1 0 0 0-1-1ZM7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.67.74l5.66-5.13a1 1 0 0 1 1.34 0l5.66 5.13a1 1 0 0 0 1.67-.75V5a3 3 0 0 0-3-3H7Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
};
