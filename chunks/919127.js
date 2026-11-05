h.r(a);
var i = h(477900);
h(582128);
var t = h(646514),
    n = h(996682),
    c = h(27989);
h.d(
    a,
    {},
    {
        PaintbrushThinMinusIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: l,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: e = "",
                    ...d
                } = s,
                o = (0, c.J)(a),
                p = o?.width ?? h,
                w = o?.height ?? l;
            return (0, i.jsx)("svg", {
                ...(0, n.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "m11.33 14.83-2.16-2.16a1 1 0 0 1-.25-.99l.75-2.57A3 3 0 0 1 11 7.4l8.05-4.91a1.8 1.8 0 0 1 2.47 2.47L16.61 13a3 3 0 0 1-1.72 1.32l-2.57.75a1 1 0 0 1-.99-.25ZM8.74 13.57c-.2-.2-.44-.36-.7-.43a4 4 0 0 0-5 4.42C3.14 18.23 2.68 19 2 19a1 1 0 1 0 0 2h5a4 4 0 0 0 3.86-5.03c-.07-.27-.23-.51-.43-.7l-1.7-1.7ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                    className: e,
                }),
            });
        },
    },
);
