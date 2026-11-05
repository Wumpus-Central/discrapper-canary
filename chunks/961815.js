a.r(t);
var i = a(477900);
a(582128);
var e = a(646514),
    h = a(996682),
    r = a(27989);
a.d(
    t,
    {},
    {
        ArrowAngleLeftDownIcon: function (s) {
            let {
                    size: t = "md",
                    width: a,
                    height: l,
                    color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = s,
                w = (0, r.J)(t),
                d = w?.width ?? a,
                p = w?.height ?? l;
            return (0, i.jsx)("svg", {
                ...(0, h.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M2.3 16.7a1 1 0 0 1 0-1.4l5-5a1 1 0 1 1 1.4 1.4L5.42 15H11a7 7 0 0 0 7-7V4a1 1 0 1 1 2 0v4a9 9 0 0 1-9 9H5.41l3.3 3.3a1 1 0 1 1-1.42 1.4l-5-5Z",
                    className: o,
                }),
            });
        },
    },
);
