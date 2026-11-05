t.r(a);
var i = t(477900);
t(582128);
var h = t(646514),
    c = t(996682),
    e = t(27989);
t.d(
    a,
    {},
    {
        RemixIcon: function (s) {
            let {
                    size: a = "md",
                    width: t,
                    height: l,
                    color: r = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = s,
                d = (0, e.J)(a),
                o = d?.width ?? t,
                v = d?.height ?? l;
            return (0, i.jsxs)("svg", {
                ...(0, c.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M6 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-6.64 6.64A4.66 4.66 0 0 0 4 15.35V17a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.66c0-1.76.7-3.46 1.95-4.7L10.59 4H7a1 1 0 0 1-1-1Z",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M18 21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l6.64-6.64A4.66 4.66 0 0 0 20 8.65V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2 5 5 0 0 1 5 5v1.66c0 1.76-.7 3.46-1.95 4.7L13.41 20H17a1 1 0 0 1 1 1Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
