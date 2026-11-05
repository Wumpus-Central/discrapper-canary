i.r(t);
var e = i(477900);
i(582128);
var h = i(646514),
    a = i(996682),
    r = i(27989);
i.d(
    t,
    {},
    {
        YoutubeNeutralIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: c,
                    color: l = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                d = (0, r.J)(t),
                p = d?.width ?? i,
                u = d?.height ?? c;
            return (0, e.jsx)("svg", {
                ...(0, a.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, e.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    d: "M23.5 5.65a3.02 3.02 0 0 0-2.12-2.14C19.5 3 12 3 12 3s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 5.66C0 7.55 0 11.5 0 11.5s0 3.95.5 5.85a3.02 3.02 0 0 0 2.12 2.14C4.5 20 12 20 12 20s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.15c.5-1.9.5-5.85.5-5.85s0-3.95-.5-5.85ZM9.55 15.1V7.9l6.27 3.59-6.27 3.59Z",
                    className: n,
                }),
            });
        },
    },
);
