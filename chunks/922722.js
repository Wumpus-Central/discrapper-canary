e.r(i);
var a = e(477900);
e(582128);
var h = e(646514),
    t = e(996682),
    l = e(27989);
e.d(
    i,
    {},
    {
        EmojiGrimacingFaceIcon: function (s) {
            let {
                    size: i = "md",
                    width: e,
                    height: c,
                    color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                r = (0, l.J)(i),
                p = r?.width ?? e,
                w = r?.height ?? c;
            return (0, a.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M9.5 15.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z",
                        className: n,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM8 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-12 5A2.5 2.5 0 0 1 9.5 14h5a2.5 2.5 0 0 1 0 5h-5A2.5 2.5 0 0 1 7 16.5Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
