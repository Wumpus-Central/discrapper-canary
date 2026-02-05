n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(742589),
    a = n(65470),
    l = n(716442),
    o = n(985018),
    c = n(547629);
let d = (e) => {
    let { navBarSections: t, activeSectionId: n } = e,
        d = {
            [l.k.HOME]: o.intl.string(o.t.uGRXjS),
            [l.k.WHATS_NEW]: o.intl.string(o.t["mfcR/v"]),
            [l.k.BEST_OF_NITRO]: o.intl.string(o.t.xQKkE8),
            [l.k.PLANS]: o.intl.string(o.t.wyNMnm),
            [l.k.COMPARE]: o.intl.string(o.t.pwD7If),
        },
        u = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, i.jsx)(r.A, {
        className: c.TQ,
        transparent: !0,
        children: (0, i.jsxs)("div", {
            className: c.Wc,
            children: [
                (0, i.jsxs)("div", {
                    className: c.wG,
                    children: [
                        (0, i.jsx)(s.tvc, { className: c.nE, colorClass: c.oG }),
                        (0, i.jsx)("div", {
                            className: c.zc,
                            children: u.map((e) => {
                                let t = n === e.id,
                                    r = d[e.id];
                                return (0, i.jsxs)(
                                    s.DUT,
                                    {
                                        className: c.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, i.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: r,
                                            }),
                                            t && (0, i.jsx)("div", { className: c.W0 }),
                                        ],
                                    },
                                    r,
                                );
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.A, { size: "sm", variant: "overlay-secondary" }),
            ],
        }),
    });
};
