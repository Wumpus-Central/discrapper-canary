c.r(l);
var d = c(477900);
c(582128);
var i = c(996682),
    h = c(27989);
c.d(
    l,
    {},
    {
        PaymentTypeGoPayIcon: function (e) {
            let { size: l = "md", width: c, height: s, ...t } = e,
                a = (0, h.J)(l),
                n = a?.width ?? c,
                p = a?.height ?? s;
            return (0, d.jsxs)("svg", {
                ...(0, i.A)(t),
                xmlns: "http://www.w3.org/2000/svg",
                width: n,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, d.jsx)("path", {
                        fill: "#fff",
                        fillRule: "evenodd",
                        d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                        clipRule: "evenodd",
                    }),
                    (0, d.jsx)("mask", {
                        id: "a",
                        fill: "#fff",
                        children: (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                            clipRule: "evenodd",
                        }),
                    }),
                    (0, d.jsx)("path", {
                        stroke: "#97979F",
                        strokeOpacity: ".3",
                        d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                        mask: "url(#a)",
                    }),
                    (0, d.jsx)("path", {
                        fill: "#1899D6",
                        d: "M8 17c-2.87 0-4.58-1.87-4.5-4.3C3.6 9.58 6.46 7 9.86 7c1.46 0 2.63.36 3.4.74l-.45 2.3a6.14 6.14 0 0 0-3.16-.8c-2.12 0-3.52 1.52-3.57 3.16-.05 1.31.77 2.4 2.36 2.4.36 0 .77-.06 1.05-.13l.62-3.15h2.41l-.93 4.76A9.28 9.28 0 0 1 8 17Zm12.32-5.35-4.94-2.8-1.3 6.57 6.24-3.77Z",
                    }),
                ],
            });
        },
    },
);
