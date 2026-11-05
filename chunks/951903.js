e.r(a);
var i = e(477900);
e(582128);
var t = e(646514),
    c = e(996682),
    l = e(27989);
e.d(
    a,
    {},
    {
        BrowserQuestionMarkIcon: function (s) {
            let {
                    size: a = "md",
                    width: e,
                    height: h,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = s,
                o = (0, l.J)(a),
                p = o?.width ?? e,
                w = o?.height ?? h;
            return (0, i.jsxs)("svg", {
                ...(0, c.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M20 3a3 3 0 0 1 3 3v5.22c0 .93-1.3 1.5-2.17 1.16a5.59 5.59 0 0 0-6.36 1.7l-.2.28a3 3 0 0 0 .79 4.17c.42.29.72.78.77 1.29 0 .08.02.15.04.23a.8.8 0 0 1-.8.95H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM18.81 14c1.82 0 3.44 1.38 3.44 3.25 0 1.45-.98 2.61-2.27 3.05v.02a1 1 0 1 1-1.96.36l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S19.68 16 18.81 16c-.54 0-1 .26-1.23.62a1 1 0 0 1-1.66-1.13 3.49 3.49 0 0 1 2.9-1.49Z",
                        className: d,
                    }),
                ],
            });
        },
    },
);
