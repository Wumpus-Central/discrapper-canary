h.r(t);
var i = h(477900);
h(582128);
var a = h(646514),
    e = h(996682),
    r = h(27989);
h.d(
    t,
    {},
    {
        ChevronLargeRightIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: l,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = s,
                d = (0, r.J)(t),
                p = d?.width ?? h,
                w = d?.height ?? l;
            return (0, i.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M8.3 3.3a1 1 0 0 0 0 1.4l7.29 7.3-7.3 7.3a1 1 0 1 0 1.42 1.4l8-8a1 1 0 0 0 0-1.4l-8-8a1 1 0 0 0-1.42 0Z",
                    className: c,
                }),
            });
        },
    },
);
