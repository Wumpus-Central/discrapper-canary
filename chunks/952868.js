t.r(s);
var i = t(477900);
t(582128);
var e = t(646514),
    h = t(996682),
    r = t(27989);
t.d(
    s,
    {},
    {
        ExperimentalGraphMajorNegativeIcon: function (a) {
            let {
                    size: s = "md",
                    width: t,
                    height: n,
                    color: p = e.A.colors.ICON_FEEDBACK_CRITICAL,
                    colorClass: c = "",
                    ...o
                } = a,
                d = (0, r.J)(s),
                l = d?.width ?? t,
                v = d?.height ?? n;
            return (0, i.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M2 16a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4ZM10 10a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V10ZM18 4a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V4Z",
                    className: c,
                }),
            });
        },
    },
);
