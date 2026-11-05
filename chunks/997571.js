e.r(a);
var i = e(477900);
e(582128);
var l = e(646514),
    t = e(996682),
    h = e(27989);
e.d(
    a,
    {},
    {
        ReactionMinusIcon: function (s) {
            let {
                    size: a = "md",
                    width: e,
                    height: c,
                    color: n = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = s,
                p = (0, h.J)(a),
                r = p?.width ?? e,
                u = p?.height ?? c;
            return (0, i.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M10.67 1.33a9.33 9.33 0 0 1 8.05 14.05.94.94 0 0 1-.82.45H15a2.5 2.5 0 0 0-2.49 2.25l-.01.25.01.26c.02.17.05.33.1.5.11.32-.04.72-.38.78a9.33 9.33 0 1 1-1.56-18.54Zm3.64 11.18a.85.85 0 0 0-1.17.23 2.97 2.97 0 0 1-4.94 0 .85.85 0 1 0-1.41.94 4.66 4.66 0 0 0 7.76 0 .85.85 0 0 0-.24-1.17ZM6 8.97a1.27 1.27 0 1 0 0 2.54 1.27 1.27 0 0 0 0-2.54Zm9.33 0a1.27 1.27 0 1 0 0 2.55 1.27 1.27 0 0 0 0-2.55Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M23 17.33a1 1 0 0 1 0 2h-8a1 1 0 0 1-.86-.49l-.01-.02a.99.99 0 0 1-.1-.22v-.03a1 1 0 0 1-.02-.08v-.03l-.01-.13a1 1 0 0 1 1-1h8Z",
                        className: d,
                    }),
                ],
            });
        },
    },
);
