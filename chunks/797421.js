"use strict";
n.d(t, { L: () => l });
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
            fillRule: "evenodd",
            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm2.5-9c.55 0 1.01.46.86.99a3.5 3.5 0 0 1-6.72 0c-.15-.53.3-.99.86-.99h5ZM9.57 9.18a1 1 0 0 0-1.4.25c-.23.34-.63.57-1.1.57-.23 0-.44-.05-.62-.14a1 1 0 0 0-.9 1.78 3.38 3.38 0 0 0 4.27-1.07 1 1 0 0 0-.25-1.4Zm6.25.25a1 1 0 1 0-1.64 1.14 3.34 3.34 0 0 0 4.27 1.07 1 1 0 1 0-.9-1.78 1.38 1.38 0 0 1-1.73-.43Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
}
