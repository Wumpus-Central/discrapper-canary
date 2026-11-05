l.r(s);
var e = l(477900);
l(582128);
var t = l(646514),
    i = l(996682),
    c = l(27989);
l.d(
    s,
    {},
    {
        UploadIcon: function (a) {
            let {
                    size: s = "md",
                    width: l,
                    height: h,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = a,
                d = (0, c.J)(s),
                v = d?.width ?? l,
                w = d?.height ?? h;
            return (0, e.jsx)("svg", {
                ...(0, i.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: v,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, e.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                    className: o,
                }),
            });
        },
    },
);
