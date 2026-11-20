n.r(t);
var l = n(477900);
n(582128);
var r = n(646514),
    i = n(996682),
    a = n(27989);
n.d(
    t,
    {},
    {
        ArrowSmallRightIcon: function (e) {
            let {
                    size: t = "md",
                    width: n,
                    height: u,
                    color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: s = "",
                    ...c
                } = e,
                f = (0, a.J)(t),
                p = f?.width ?? n,
                d = f?.height ?? u;
            return (0, l.jsx)("svg", {
                ...(0, i.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: d,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
                    className: s,
                }),
            });
        },
    },
);
