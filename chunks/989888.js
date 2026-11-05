s.r(i);
var t = s(477900);
s(582128);
var a = s(646514),
    h = s(996682),
    l = s(27989);
s.d(
    i,
    {},
    {
        EmojiNeutralFaceIcon: function (e) {
            let {
                    size: i = "md",
                    width: s,
                    height: d,
                    color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                r = (0, l.J)(i),
                p = r?.width ?? s,
                u = r?.height ?? d;
            return (0, t.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8 15a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
