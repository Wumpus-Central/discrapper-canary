a.r(t);
var i = a(477900);
a(582128);
var c = a(646514),
    e = a(996682),
    h = a(27989);
a.d(
    t,
    {},
    {
        EnvelopeIcon: function (s) {
            let {
                    size: t = "md",
                    width: a,
                    height: l,
                    color: n = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: p = "",
                    ...r
                } = s,
                o = (0, h.J)(t),
                d = o?.width ?? a,
                w = o?.height ?? l;
            return (0, i.jsxs)("svg", {
                ...(0, e.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z",
                        className: p,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z",
                        className: p,
                    }),
                ],
            });
        },
    },
);
