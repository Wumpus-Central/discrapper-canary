h.r(t);
var i = h(477900);
h(582128);
var a = h(646514),
    e = h(996682),
    c = h(27989);
h.d(
    t,
    {},
    {
        RedoIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: r,
                    color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, c.J)(t),
                l = p?.width ?? h,
                w = p?.height ?? r;
            return (0, i.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    d: "M22 8a1 1 0 1 0-2 0v3.54A10.26 10.26 0 0 0 11.63 7c-4.24 0-7.84 2.74-9.54 6.6a1 1 0 0 0 1.82.8C5.36 11.15 8.31 9 11.63 9a8.34 8.34 0 0 1 6.95 4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V8Z",
                    className: n,
                }),
            });
        },
    },
);
