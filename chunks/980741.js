i.r(e);
var c = i(477900);
i(582128);
var a = i(646514),
    t = i(996682),
    l = i(27989);
i.d(
    e,
    {},
    {
        EmojiCryingFaceIcon: function (s) {
            let {
                    size: e = "md",
                    width: i,
                    height: d,
                    color: h = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                r = (0, l.J)(e),
                p = r?.width ?? i,
                w = r?.height ?? d;
            return (0, c.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        fillRule: "evenodd",
                        d: "M12 23c1.62 0 3.16-.35 4.55-.98A3.98 3.98 0 0 1 16 20c0-.63.19-1.28.35-1.75a13 13 0 0 1 1.51-2.96c.14-.2.33-.43.56-.64.11-.1.28-.24.5-.36a2.22 2.22 0 0 1 2.66.36 4.33 4.33 0 0 1 .8 1A11 11 0 1 0 12 23ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 3.83a1 1 0 0 0 1.39-.27 3.5 3.5 0 0 1 5.82 0 1 1 0 0 0 1.66-1.12 5.5 5.5 0 0 0-9.14 0 1 1 0 0 0 .27 1.4Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        d: "M21.32 17.85C20.85 16.88 20.28 16 20 16c-.5 0-2 2.9-2 4a2 2 0 0 0 2 2 2 2 0 0 0 2-2c0-.5-.3-1.36-.68-2.15Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
