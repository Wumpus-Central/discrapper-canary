l.r(a);
var t = l(477900);
l(582128);
var i = l(646514),
    h = l(996682),
    e = l(27989);
l.d(
    a,
    {},
    {
        DoubleChevronSmallRightIcon: function (s) {
            let {
                    size: a = "md",
                    width: l,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, e.J)(a),
                d = p?.width ?? l,
                w = p?.height ?? r;
            return (0, t.jsxs)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M11.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 0 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                        className: n,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M5.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
