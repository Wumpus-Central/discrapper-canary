h.r(a);
var t = h(477900);
h(582128);
var i = h(646514),
    e = h(996682),
    n = h(27989);
h.d(
    a,
    {},
    {
        MenuIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = s,
                p = (0, n.J)(a),
                l = p?.width ?? h,
                w = p?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M1 5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z",
                    className: d,
                }),
            });
        },
    },
);
