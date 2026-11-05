n.r(r);
var a = n(477900);
n(582128);
var t = n(646514),
    o = n(996682),
    s = n(27989);
n.d(
    r,
    {},
    {
        RobloxNeutralIcon: function (e) {
            let {
                    size: r = "md",
                    width: n,
                    height: l,
                    color: i = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...h
                } = e,
                d = (0, s.J)(r),
                m = d?.width ?? n,
                u = d?.height ?? l;
            return (0, a.jsx)("svg", {
                ...(0, o.A)(h),
                xmlns: "http://www.w3.org/2000/svg",
                width: m,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof i ? i : i.css,
                    d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
                    className: c,
                }),
            });
        },
    },
);
