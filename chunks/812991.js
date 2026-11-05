t.r(e);
var i = t(477900);
t(582128);
var c = t(646514),
    l = t(996682),
    a = t(27989);
t.d(
    e,
    {},
    {
        UserCircleStatusIcon: function (s) {
            let {
                    size: e = "md",
                    width: t,
                    height: d,
                    color: h = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...n
                } = s,
                o = (0, a.J)(e),
                p = o?.width ?? t,
                u = o?.height ?? d;
            return (0, i.jsxs)("svg", {
                ...(0, l.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        fillRule: "evenodd",
                        d: "M23 12.38c-.02.38-.45.58-.78.4a6.97 6.97 0 0 0-6.27-.08.54.54 0 0 1-.44 0 8.97 8.97 0 0 0-11.16 3.55c-.1.15-.1.35 0 .5.37.58.8 1.13 1.28 1.61.24.24.64.15.8-.15.19-.38.39-.73.58-1.02.14-.21.43-.1.4.15l-.19 1.96c-.02.19.07.37.23.47A8.96 8.96 0 0 0 12 21a.4.4 0 0 1 .38.27c.1.33.25.65.4.95.18.34-.02.76-.4.77L12 23a11 11 0 1 1 11-10.62ZM15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                        clipRule: "evenodd",
                        className: r,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                        className: r,
                    }),
                ],
            });
        },
    },
);
