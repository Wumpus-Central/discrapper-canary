e.r(s);
var i = e(477900);
e(582128);
var c = e(646514),
    l = e(996682),
    h = e(27989);
e.d(
    s,
    {},
    {
        EmojiSleepingFaceIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: t,
                    color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, h.J)(s),
                r = p?.width ?? e,
                v = p?.height ?? t;
            return (0, i.jsxs)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M22 8.5a.5.5 0 0 1-.5.5h-5.33a.5.5 0 0 1-.5-.5v-1a1 1 0 0 1 .21-.63L18.97 3H16.5a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5h5.33c.28 0 .5.22.5.5v1.11a1 1 0 0 1-.26.68L18.68 7h2.82a.5.5 0 0 1 .5.5v1Z",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M21.5 11c.52 0 1-.16 1.4-.43a11 11 0 1 1-8.89-9.38l-.01.31v1c0 .88.45 1.65 1.14 2.1l-.82 1.03a3 3 0 0 0-.65 1.87v1a2.5 2.5 0 0 0 2.5 2.5h5.33ZM8.18 12.43a1 1 0 0 1 1.64 1.14 3.34 3.34 0 0 1-4.27 1.07 1 1 0 1 1 .9-1.78 1.38 1.38 0 0 0 1.73-.43Zm6.25-.25a1 1 0 0 1 1.4.25c.23.34.63.57 1.1.57.23 0 .44-.05.62-.14a1 1 0 0 1 .9 1.78 3.38 3.38 0 0 1-4.27-1.07 1 1 0 0 1 .25-1.4ZM12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
