s.r(e);
var t = s(477900);
s(582128);
var l = s(646514),
    h = s(996682),
    n = s(27989);
s.d(
    e,
    {},
    {
        EmojiSlightlyFrowningFaceIcon: function (i) {
            let {
                    size: e = "md",
                    width: s,
                    height: a,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = i,
                r = (0, n.J)(e),
                p = r?.width ?? s,
                w = r?.height ?? a;
            return (0, t.jsx)("svg", {
                ...(0, h.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-8.4 5.91a1 1 0 0 0 1.35.45 3.48 3.48 0 0 1 3.1 0 1 1 0 1 0 .9-1.79 5.48 5.48 0 0 0-4.9 0 1 1 0 0 0-.45 1.34Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
