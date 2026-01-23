n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    l = n(990078),
    a = n(397927),
    s = n(481859),
    o = n(186975),
    c = n(204160),
    u = n(787523),
    d = n(69175),
    p = n(652215),
    h = n(985018),
    g = n(388756);
let f = [
        {
            feature: p.x0t.SINGLE_PLAYER,
            getText: () => h.intl.string(h.t["V+/FjO"]),
            getTooltip: () => h.intl.string(h.t["w+X9sT"]),
            IconComponent: a.nys,
        },
        {
            feature: p.x0t.LOCAL_MULTIPLAYER,
            getText: () => h.intl.string(h.t.srnWru),
            getTooltip: () => h.intl.string(h.t.sDdLWA),
            IconComponent: a.nFg,
        },
        {
            feature: p.x0t.ONLINE_MULTIPLAYER,
            getText: () => h.intl.string(h.t.xPHbgA),
            getTooltip: () => h.intl.string(h.t.g6kR4D),
            IconComponent: a.nFg,
        },
        {
            feature: p.x0t.PVP,
            getText: () => h.intl.string(h.t.qhgwxx),
            getTooltip: () => h.intl.string(h.t["5jGrhN"]),
            IconComponent: a.quN,
        },
        {
            feature: p.x0t.LOCAL_COOP,
            getText: () => h.intl.string(h.t.FqbalJ),
            getTooltip: () => h.intl.string(h.t.vIgDgd),
            IconComponent: a.nFg,
        },
        {
            feature: p.x0t.ONLINE_COOP,
            getText: () => h.intl.string(h.t.lDHO4Y),
            getTooltip: () => h.intl.string(h.t.VXDphs),
            IconComponent: a.nFg,
        },
        {
            feature: p.x0t.CROSS_PLATFORM,
            getText: () => h.intl.string(h.t.SWo2Hf),
            getTooltip: () => h.intl.string(h.t.ll2wzY),
            IconComponent: a.fNY,
        },
        {
            feature: p.x0t.RICH_PRESENCE,
            getText: () => h.intl.string(h.t.PVSVtI),
            getTooltip: () => h.intl.string(h.t.O6Yp4d),
            IconComponent: u.A,
        },
        {
            feature: p.x0t.DISCORD_GAME_INVITES,
            getText: () => h.intl.string(h.t.agm68P),
            getTooltip: () => h.intl.string(h.t.kS2vFN),
            IconComponent: c.A,
        },
        {
            feature: p.x0t.SPECTATOR_MODE,
            getText: () => h.intl.string(h.t.ZtiU7w),
            getTooltip: () => h.intl.string(h.t.kUtiKa),
            IconComponent: a.npA,
        },
        {
            feature: p.x0t.CONTROLLER_SUPPORT,
            getText: () => h.intl.string(h.t.UlBQ8P),
            getTooltip: () => h.intl.string(h.t.iG00jA),
            IconComponent: a.LVO,
        },
        {
            feature: p.x0t.CLOUD_SAVES,
            getText: () => h.intl.string(h.t.rOcNrD),
            getTooltip: () => h.intl.string(h.t.kvw18E),
            IconComponent: o.A,
        },
        {
            feature: p.x0t.SECURE_NETWORKING,
            getText: () => h.intl.string(h.t.GKFWL3),
            getTooltip: () => h.intl.string(h.t.VudViJ),
            IconComponent: d.A,
        },
    ],
    m = (e) => {
        let { IconComponent: t, text: n, tooltip: i } = e;
        return (0, r.jsxs)("div", {
            className: g.nM,
            children: [
                (0, r.jsx)(l.m, {
                    text: i,
                    children: (0, r.jsx)(t, {
                        className: g.AD,
                    }),
                }),
                (0, r.jsx)("span", {
                    className: g.oo,
                    children: n,
                }),
                (0, r.jsx)(a.A9s, {
                    size: "md",
                    color: "currentColor",
                    className: g.$8,
                }),
            ],
        });
    };
class A extends i.PureComponent {
    render() {
        let { sku: e } = this.props,
            t = f
                .filter((t) => {
                    let { feature: n } = t;
                    return e.features.has(n);
                })
                .map((e) => {
                    let { feature: t, IconComponent: n, getText: i, getTooltip: l } = e;
                    return (0, r.jsx)(
                        m,
                        {
                            IconComponent: n,
                            text: i(),
                            tooltip: l(),
                        },
                        t,
                    );
                });
        return 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  className: g.qT,
                  children: [
                      (0, r.jsx)(s.A, {
                          children: h.intl.string(h.t.XXENra),
                      }),
                      t,
                  ],
              });
    }
}
let _ = A;
