h.r(t);
var i = h(477900);
h(582128);
var a = h(646514),
    l = h(996682),
    r = h(27989);
h.d(
    t,
    {},
    {
        ArrowAngleRightDownIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: e,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = s,
                w = (0, r.J)(t),
                d = w?.width ?? h,
                p = w?.height ?? e;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M21.7 16.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 0 0-1.4 1.4l3.29 3.3H13a7 7 0 0 1-7-7V4a1 1 0 1 0-2 0v4a9 9 0 0 0 9 9h5.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
                    className: o,
                }),
            });
        },
    },
);
