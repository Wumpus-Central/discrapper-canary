n.d(t, {
    A: () => d,
}),
    n(638769);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(742589),
    s = n(65470),
    a = n(716442),
    o = n(985018),
    c = n(547629);
let d = (e) => {
    let { navBarSections: t, activeSectionId: n } = e,
        d = {
            [a.k.HOME]: o.intl.string(o.t.uGRXjS),
            [a.k.WHATS_NEW]: o.intl.string(o.t["mfcR/v"]),
            [a.k.BEST_OF_NITRO]: o.intl.string(o.t.xQKkE8),
            [a.k.PLANS]: o.intl.string(o.t.wyNMnm),
            [a.k.COMPARE]: o.intl.string(o.t.pwD7If),
        },
        u = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, r.jsx)(l.A, {
        className: c.TQ,
        transparent: !0,
        children: (0, r.jsxs)("div", {
            className: c.Wc,
            children: [
                (0, r.jsxs)("div", {
                    className: c.wG,
                    children: [
                        (0, r.jsx)(i.tvc, {
                            className: c.nE,
                            colorClass: c.oG,
                        }),
                        (0, r.jsx)("div", {
                            className: c.zc,
                            children: u.map((e) => {
                                let t = n === e.id,
                                    l = d[e.id];
                                return (0, r.jsxs)(
                                    i.DUT,
                                    {
                                        className: c.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, r.jsx)(i.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: l,
                                            }),
                                            t &&
                                                (0, r.jsx)("div", {
                                                    className: c.W0,
                                                }),
                                        ],
                                    },
                                    l,
                                );
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.A, {
                    size: "sm",
                    variant: "overlay-secondary",
                }),
            ],
        }),
    });
};
