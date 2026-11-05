i.r(t);
var a = i(477900);
i(582128);
var h = i(646514),
    e = i(996682),
    l = i(27989);
i.d(
    t,
    {},
    {
        XLargeBoldIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: r,
                    color: c = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = s,
                o = (0, l.J)(t),
                p = o?.width ?? i,
                w = o?.height ?? r;
            return (0, a.jsx)("svg", {
                ...(0, e.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M18.94 21.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l6.94-6.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 5.06 2.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-6.94 6.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l6.94 6.94Z",
                    className: d,
                }),
            });
        },
    },
);
