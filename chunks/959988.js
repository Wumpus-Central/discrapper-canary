a.r(t);
var n = a(477900);
a(582128);
var i = a(646514),
    l = a(996682),
    A = a(27989);
a.d(
    t,
    {},
    {
        ScreenXIcon: function (e) {
            let {
                    size: t = "md",
                    width: a,
                    height: S,
                    color: _ = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: E = "",
                    ...T
                } = e,
                o = (0, A.J)(t),
                C = o?.width ?? a,
                c = o?.height ?? S;
            return (0, n.jsxs)("svg", {
                ...(0, l.A)(T),
                xmlns: "http://www.w3.org/2000/svg",
                width: C,
                height: c,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                        clipRule: "evenodd",
                        className: E,
                    }),
                    (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: E,
                    }),
                ],
            });
        },
    },
);
