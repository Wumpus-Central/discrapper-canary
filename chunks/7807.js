a.d(t, { J: () => s });
var n = a(627968);
a(64700);
var l = a(661531),
    r = a(996682),
    i = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, i.J)(t),
        h = u?.width ?? a,
        p = u?.height ?? s;
    return (0, n.jsxs)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M14.24 1.03a1 1 0 0 1 .73 1.21l-1 4a1 1 0 1 1-1.94-.48l1-4a1 1 0 0 1 1.21-.73ZM20.7 4.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z",
                className: c,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M15.14 20.14c1.78-1.78.7-5.75-2.42-8.86-3.11-3.12-7.08-4.2-8.86-2.42A3.13 3.13 0 0 0 3 11V11l-1.16 8.92a2 2 0 0 0 2.24 2.24L13 21c.86-.04 1.6-.32 2.14-.86Zm-1.3-3.4a9.61 9.61 0 0 0-2.53-4.05 9.61 9.61 0 0 0-4.05-2.53c-1.27-.35-1.82-.05-1.99.11-.16.17-.46.72-.11 2a9.61 9.61 0 0 0 2.53 4.04 9.61 9.61 0 0 0 4.05 2.53c1.27.35 1.82.05 1.99-.11.16-.17.46-.72.11-2Z",
                clipRule: "evenodd",
                className: c,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M7.05 3.32a1 1 0 0 1 1.9-.64l1 3a1 1 0 0 1-1.9.64l-1-3ZM22.97 9.76a1 1 0 0 0-1.21-.73l-4 1a1 1 0 1 0 .48 1.94l4-1a1 1 0 0 0 .73-1.21ZM20.68 16.95a1 1 0 0 0 .64-1.9l-3-1a1 1 0 0 0-.64 1.9l3 1Z",
                className: c,
            }),
        ],
    });
};
