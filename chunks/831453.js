t.r(s);
var h = t(477900);
t(582128);
var i = t(646514),
    e = t(996682),
    l = t(27989);
t.d(
    s,
    {},
    {
        RotateIcon: function (a) {
            let {
                    size: s = "md",
                    width: t,
                    height: c,
                    color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                d = (0, l.J)(s),
                p = d?.width ?? t,
                w = d?.height ?? c;
            return (0, h.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M8.3 1.3a1 1 0 0 0 0 1.4l.29.3H6a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0V7c0-1.1.9-2 2-2h2.59l-.3.3a1 1 0 0 0 1.42 1.4l2-2a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.42 0ZM22 11a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8Z",
                    className: n,
                }),
            });
        },
    },
);
