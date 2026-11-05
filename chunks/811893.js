h.r(s);
var t = h(477900);
h(582128);
var i = h(646514),
    c = h(996682),
    e = h(27989);
h.d(
    s,
    {},
    {
        WindowLaunchIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: n,
                    color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...d
                } = a,
                o = (0, e.J)(s),
                p = o?.width ?? h,
                w = o?.height ?? n;
            return (0, t.jsxs)("svg", {
                ...(0, c.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L19.58 3H16a1 1 0 0 1-1-1Z",
                        className: r,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 1 0-2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                        className: r,
                    }),
                ],
            });
        },
    },
);
