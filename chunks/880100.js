i.r(t);
var a = i(477900);
i(582128);
var h = i(646514),
    c = i(996682),
    e = i(27989);
i.d(
    t,
    {},
    {
        ChannelNotificationIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: n,
                    color: l = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = s,
                p = (0, e.J)(t),
                d = p?.width ?? i,
                w = p?.height ?? n;
            return (0, a.jsxs)("svg", {
                ...(0, c.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6.88c0 .37-.38.61-.73.5a7 7 0 0 0-8.9 8.89c.12.35-.12.73-.49.73H5a3 3 0 0 1-3-3V5Z",
                        className: o,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M19 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
                        className: o,
                    }),
                ],
            });
        },
    },
);
