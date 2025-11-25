n.d(t, {
    $L: () => g,
    Oz: () => p,
});
var r = n(481060),
    i = n(901297),
    a = n(73166),
    o = n(690524),
    s = n(374834),
    l = n(473542),
    c = n(654346),
    u = n(266631),
    d = n(906731),
    f = n(915409),
    _ = n(74432),
    p = (function (e) {
        return (e.PAYMENTS = "payments"), (e.VIRTUAL_CURRENCY = "virtual-currency"), (e.NITRO = "nitro"), e;
    })({});
let h = ["Revenue Storybook", "Revenue Playground"],
    m = {
        id: "payments",
        name: "Payments",
        groups: [o.C, _.iZ, l.R, s.pl, f.W],
        tags: h,
        IconComponent: r.uMN,
    },
    g = {
        playgroundBaseUrl: "revenue",
        collections: [
            m,
            {
                id: "virtual-currency",
                name: "Virtual Currency",
                groups: [a.Oi, i.vP, u.X, d.R],
                tags: h,
                IconComponent: r.aQr,
            },
            {
                id: "nitro",
                name: "Nitro",
                groups: [c.De],
                tags: h,
                IconComponent: r.SrA,
            },
        ],
    };
