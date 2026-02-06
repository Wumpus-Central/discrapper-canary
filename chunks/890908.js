"use strict";
n.d(t, { UO: () => E, lB: () => m });
var r = n(397927),
    i = n(777595),
    a = n(527518),
    s = n(270727),
    o = n(473106),
    l = n(423396),
    u = n(987274),
    c = n(886532),
    d = n(931433),
    _ = n(391622),
    f = n(203484),
    p = n(445736),
    h = n(504312),
    m = (function (e) {
        return (e.PAYMENTS = "payments"), (e.VIRTUAL_CURRENCY = "virtual-currency"), (e.NITRO = "nitro"), e;
    })({});
let g = ["Revenue Storybook", "Revenue Playground"],
    E = {
        playgroundBaseUrl: "revenue",
        collections: [
            {
                id: "payments",
                name: "Payments",
                groups: [o._, h.Y, p.Wo, i.v, l.Gu, f.O],
                tags: g,
                IconComponent: r.d2Y,
            },
            {
                id: "virtual-currency",
                name: "Virtual Currency",
                groups: [s.h2, a.c$, d.V, _.e],
                tags: g,
                IconComponent: r.Cp8,
            },
            { id: "nitro", name: "Nitro", groups: [u.I7, c.H], tags: g, IconComponent: r.tvc },
        ],
    };
