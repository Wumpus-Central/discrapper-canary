s.r(c);
var a = s(477900);
s(582128);
var e = s(646514),
    i = s(996682),
    v = s(27989);
s.d(
    c,
    {},
    {
        HashmarkIcon: function (h) {
            let {
                    size: c = "md",
                    width: s,
                    height: t,
                    color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: l = "",
                    ...n
                } = h,
                r = (0, v.J)(c),
                o = r?.width ?? s,
                p = r?.height ?? t;
            return (0, a.jsx)("svg", {
                ...(0, i.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M7.75 2a.75.75 0 0 0-.75.75V7H2.75a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75H7v4H2.75a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75H7v4.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V17h4v4.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V17h4.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H17v-4h4.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H17V2.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V7h-4V2.75A.75.75 0 0 0 9.25 2h-1.5ZM14 14v-4h-4v4h4Z",
                    clipRule: "evenodd",
                    className: l,
                }),
            });
        },
    },
);
