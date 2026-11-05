l.r(e);
var s = l(477900);
l(582128);
var i = l(646514),
    t = l(996682),
    d = l(27989);
l.d(
    e,
    {},
    {
        BoostTier1Icon: function (c) {
            let {
                    size: e = "md",
                    width: l,
                    height: h,
                    color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = c,
                p = (0, d.J)(e),
                a = p?.width ?? l,
                v = p?.height ?? h;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: a,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    fillRule: "evenodd",
                    d: "M13.05 1.4a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16V8c0-1.07-.4-2.06-1.05-2.6l-4.9-4ZM12 4.41 8.06 7.64c-.03.08-.06.2-.06.36v8c0 .16.03.28.06.36L12 19.59l3.94-3.23c.03-.08.06-.2.06-.36V8c0-.16-.03-.28-.06-.36L12 4.41Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
