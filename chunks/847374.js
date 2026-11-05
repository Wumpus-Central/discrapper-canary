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
        ChevronSmallDownIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: n,
                    color: r = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = s,
                d = (0, e.J)(t),
                p = d?.width ?? h,
                w = d?.height ?? n;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z",
                    className: o,
                }),
            });
        },
    },
);
