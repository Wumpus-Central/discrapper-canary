t.r(a);
var i = t(477900);
t(582128);
var e = t(646514),
    r = t(996682),
    h = t(27989);
t.d(
    a,
    {},
    {
        ExperimentalGraphModerateIcon: function (s) {
            let {
                    size: a = "md",
                    width: t,
                    height: l,
                    color: c = e.A.colors.BORDER_STRONG,
                    colorClass: p = "",
                    secondaryColor: o = e.A.colors.ICON_FEEDBACK_WARNING,
                    secondaryColorClass: n = "",
                    ...d
                } = s,
                v = (0, h.J)(a),
                w = v?.width ?? t,
                f = v?.height ?? l;
            return (0, i.jsxs)("svg", {
                ...(0, r.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: w,
                height: f,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillOpacity: ".44",
                        d: "M18 4a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V4Z",
                        className: p,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M2 16a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4ZM10 10a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V10Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
