a.r(t);
var h = a(477900);
a(582128);
var i = a(646514),
    e = a(996682),
    l = a(27989);
a.d(
    t,
    {},
    {
        ArrowAngleDownLeftIcon: function (s) {
            let {
                    size: t = "md",
                    width: a,
                    height: r,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = s,
                w = (0, l.J)(t),
                d = w?.width ?? a,
                p = w?.height ?? r;
            return (0, h.jsx)("svg", {
                ...(0, e.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M16.7 21.7a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l3.3 3.29V13a7 7 0 0 0-7-7H4a1 1 0 1 1 0-2h4a9 9 0 0 1 9 9v5.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5Z",
                    className: o,
                }),
            });
        },
    },
);
