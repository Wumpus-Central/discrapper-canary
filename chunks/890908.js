"use strict";
n.d(t, { UO: () => g, lB: () => h });
var r = n(397927),
    i = n(527518),
    a = n(270727),
    s = n(473106),
    o = n(423396),
    l = n(647047),
    u = n(987274),
    c = n(931433),
    d = n(391622),
    _ = n(203484),
    f = n(445736),
    p = n(504312),
    h = (function (e) {
        return (e.PAYMENTS = "payments"), (e.VIRTUAL_CURRENCY = "virtual-currency"), (e.NITRO = "nitro"), e;
    })({});
let m = ["Revenue Storybook", "Revenue Playground"],
    g = {
        playgroundBaseUrl: "revenue",
        collections: [
            {
                id: "payments",
                name: "Payments",
                groups: [s._, p.Y, f.Wo, l.n, o.Gu, _.O],
                tags: m,
                IconComponent: r.d2Y,
            },
            {
                id: "virtual-currency",
                name: "Virtual Currency",
                groups: [a.h2, i.c$, c.V, d.e],
                tags: m,
                IconComponent: r.Cp8,
            },
            { id: "nitro", name: "Nitro", groups: [u.I7], tags: m, IconComponent: r.tvc },
        ],
    };
