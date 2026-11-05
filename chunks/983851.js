c.r(a);
var t = c(477900);
c(582128);
var i = c(646514),
    h = c(996682),
    e = c(27989);
c.d(
    a,
    {},
    {
        VoiceNormalIcon: function (s) {
            let {
                    size: a = "md",
                    width: c,
                    height: l,
                    color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...n
                } = s,
                p = (0, e.J)(a),
                d = p?.width ?? c,
                v = p?.height ?? l;
            return (0, t.jsxs)("svg", {
                ...(0, h.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: o,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: o,
                    }),
                ],
            });
        },
    },
);
