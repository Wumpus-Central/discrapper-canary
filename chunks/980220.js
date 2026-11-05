t.r(a);
var c = t(477900);
t(582128);
var i = t(646514),
    e = t(996682),
    h = t(27989);
t.d(
    a,
    {},
    {
        ExperimentalMicrophoneSpeakingIcon: function (s) {
            let {
                    size: a = "md",
                    width: t,
                    height: l,
                    color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    secondaryColor: n = i.A.colors.ICON_VOICE_SPEAKING,
                    secondaryColorClass: o = "",
                    ...d
                } = s,
                f = (0, h.J)(a),
                g = f?.width ?? t,
                w = f?.height ?? l;
            return (0, c.jsxs)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: g,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M5 9a1 1 0 0 1 1 1 6 6 0 0 0 11.37 2.68c.2-.4.58-.68 1.03-.68.68 0 1.18.65.9 1.27a8 8 0 0 1-6.3 4.67V20h2a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h2v-2.06A8 8 0 0 1 4 10a1 1 0 0 1 1-1Z",
                        className: r,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M11.01 2.12c.54-.13.99.33.99.88v3.75c0 .92.72 1.68 1.63 1.74h.83c.83 0 1.5.68 1.5 1.51 0 1.11-.45 2.12-1.18 2.84-.1.12-.21.23-.34.33a3.98 3.98 0 0 1-2.37.83h-.1A4 4 0 0 1 8 10V6a4 4 0 0 1 3.01-3.88Z",
                        className: r,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M21.78 8.89a6.67 6.67 0 0 0-6.67-6.67 1.11 1.11 0 0 1 0-2.22C20.02 0 24 3.98 24 8.89a1.11 1.11 0 0 1-2.22 0Z",
                        className: o,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M17.67 8.89c0-1.23-1-2.22-2.23-2.22a1.11 1.11 0 0 1 0-2.23A4.44 4.44 0 0 1 19.9 8.9a1.11 1.11 0 0 1-2.22 0Z",
                        className: o,
                    }),
                ],
            });
        },
    },
);
