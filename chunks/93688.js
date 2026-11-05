e.r(s);
var i = e(477900);
e(582128);
var t = e(646514),
    h = e(996682),
    l = e(27989);
e.d(
    s,
    {},
    {
        BrowserIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: d,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...n
                } = a,
                o = (0, l.J)(s),
                p = o?.width ?? e,
                w = o?.height ?? d;
            return (0, i.jsxs)("svg", {
                ...(0, h.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                        className: c,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                        clipRule: "evenodd",
                        className: c,
                    }),
                ],
            });
        },
    },
);
