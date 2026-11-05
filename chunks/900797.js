h.r(t);
var i = h(477900);
h(582128);
var a = h(646514),
    l = h(996682),
    e = h(27989);
h.d(
    t,
    {},
    {
        ChevronSmallUpIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: r,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = s,
                p = (0, e.J)(t),
                d = p?.width ?? h,
                w = p?.height ?? r;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M5.3 14.7a1 1 0 0 0 1.4 0L12 9.42l5.3 5.3a1 1 0 0 0 1.4-1.42l-6-6a1 1 0 0 0-1.4 0l-6 6a1 1 0 0 0 0 1.42Z",
                    className: c,
                }),
            });
        },
    },
);
