i.r(e);
var t = i(477900);
i(582128);
var h = i(646514),
    d = i(996682),
    l = i(27989);
i.d(
    e,
    {},
    {
        MinusIcon: function (s) {
            let {
                    size: e = "md",
                    width: i,
                    height: n,
                    color: a = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = s,
                r = (0, l.J)(e),
                p = r?.width ?? i,
                u = r?.height ?? n;
            return (0, t.jsx)("svg", {
                ...(0, d.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof a ? a : a.css,
                    fillRule: "evenodd",
                    d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
