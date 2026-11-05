h.r(a);
var t = h(477900);
h(582128);
var i = h(646514),
    e = h(996682),
    c = h(27989);
h.d(
    a,
    {},
    {
        MobilePhonePlusIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: l,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = s,
                p = (0, c.J)(a),
                d = p?.width ?? h,
                v = p?.height ?? l;
            return (0, t.jsxs)("svg", {
                ...(0, e.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h7.5a.5.5 0 0 0 0-1H15a3 3 0 0 1-2.81-4.05c.15-.4-.11-.95-.54-.95H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7.65c0 .43.55.69.95.54A3 3 0 0 1 19 12V4a3 3 0 0 0-3-3H8Z",
                        className: o,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: o,
                    }),
                ],
            });
        },
    },
);
