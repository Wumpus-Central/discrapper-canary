h.r(s);
var i = h(477900);
h(582128);
var t = h(646514),
    e = h(996682),
    l = h(27989);
h.d(
    s,
    {},
    {
        WidgetsMinusIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: n,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...d
                } = a,
                o = (0, l.J)(s),
                p = o?.width ?? h,
                w = o?.height ?? n;
            return (0, i.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M18.45 1.85a3 3 0 0 0-4.1 1.1l-1.5 2.6a3 3 0 0 0 1.1 4.1l2.6 1.5a3 3 0 0 0 4.1-1.1l1.5-2.6a3 3 0 0 0-1.1-4.1l-2.6-1.5ZM2 5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5ZM2 16a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                    className: c,
                }),
            });
        },
    },
);
