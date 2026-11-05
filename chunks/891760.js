i.r(t);
var l = i(477900);
i(582128);
var a = i(646514),
    h = i(996682),
    e = i(27989);
i.d(
    t,
    {},
    {
        XXsmallBoldIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: r,
                    color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = s,
                o = (0, e.J)(t),
                p = o?.width ?? i,
                w = o?.height ?? r;
            return (0, l.jsx)("svg", {
                ...(0, h.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M15.94 5.94a1.5 1.5 0 1 1 2.12 2.12L14.12 12l3.94 3.94a1.5 1.5 0 0 1-2.12 2.12L12 14.12l-3.94 3.94a1.5 1.5 0 1 1-2.12-2.12L9.88 12 5.94 8.06a1.5 1.5 0 1 1 2.12-2.12L12 9.88l3.94-3.94Z",
                    className: d,
                }),
            });
        },
    },
);
