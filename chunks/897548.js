i.r(a);
var t = i(477900);
i(582128);
var e = i(646514),
    h = i(996682),
    r = i(27989);
i.d(
    a,
    {},
    {
        ExperimentalGraphMajorPositiveIcon: function (s) {
            let {
                    size: a = "md",
                    width: i,
                    height: n,
                    color: o = e.A.colors.ICON_FEEDBACK_POSITIVE,
                    colorClass: p = "",
                    ...c
                } = s,
                d = (0, r.J)(a),
                l = d?.width ?? i,
                v = d?.height ?? n;
            return (0, t.jsx)("svg", {
                ...(0, h.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M2 16a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4ZM10 10a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V10ZM18 4a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V4Z",
                    className: p,
                }),
            });
        },
    },
);
