i.r(e);
var t = i(477900);
i(582128);
var a = i(646514),
    c = i(996682),
    l = i(27989);
i.d(
    e,
    {},
    {
        SpoilerIcon: function (s) {
            let {
                    size: e = "md",
                    width: i,
                    height: h,
                    color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, l.J)(e),
                r = p?.width ?? i,
                w = p?.height ?? h;
            return (0, t.jsxs)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44A2.5 2.5 0 0 0 14.5 12c.38 0 .74-.08 1.06-.23Z",
                        className: n,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm10 1c4.99 0 7.3 4.4 7.86 5.67.1.21.1.45 0 .66C19.3 13.6 17 18 12 18s-7.3-4.4-7.86-5.67a.8.8 0 0 1 0-.66C4.7 10.4 7 6 12 6Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
