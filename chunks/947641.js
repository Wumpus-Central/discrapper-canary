i.r(s);
var l = i(477900);
i(582128);
var t = i(646514),
    a = i(996682),
    d = i(27989);
i.d(
    s,
    {},
    {
        CheckmarkLargeBoldIcon: function (e) {
            let {
                    size: s = "md",
                    width: i,
                    height: h,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...n
                } = e,
                o = (0, d.J)(s),
                p = o?.width ?? i,
                w = o?.height ?? h;
            return (0, l.jsx)("svg", {
                ...(0, a.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    fillRule: "evenodd",
                    d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
