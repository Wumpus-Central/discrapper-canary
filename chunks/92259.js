a.r(i);
var e = a(477900);
a(582128);
var l = a(646514),
    t = a(996682),
    n = a(27989);
a.d(
    i,
    {},
    {
        MagnifyingGlassMinusIcon: function (s) {
            let {
                    size: i = "md",
                    width: a,
                    height: h,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = s,
                p = (0, n.J)(i),
                r = p?.width ?? a,
                g = p?.height ?? h;
            return (0, e.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: g,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
                        clipRule: "evenodd",
                        className: c,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M6 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",
                        className: c,
                    }),
                ],
            });
        },
    },
);
