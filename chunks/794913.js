h.r(a);
var e = h(477900);
h(582128);
var i = h(646514),
    l = h(996682),
    t = h(27989);
h.d(
    a,
    {},
    {
        SlashMinusIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: c,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, t.J)(a),
                r = p?.width ?? h,
                u = p?.height ?? c;
            return (0, e.jsxs)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8.67c.12 0 .17-.33.06-.39A2.87 2.87 0 0 1 12 19a3 3 0 0 1 3-3h6.5a.5.5 0 0 0 .5-.5V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
