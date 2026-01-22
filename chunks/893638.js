n.d(t, { A: () => b });
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
    f = n(985018),
    h = n(388756);
let A = [
        {
            feature: p.x0t.SINGLE_PLAYER,
            getText: () => f.intl.string(f.t["V+/FjO"]),
            getTooltip: () => f.intl.string(f.t["w+X9sT"]),
            IconComponent: a.nys,
        },
        {
            feature: p.x0t.LOCAL_MULTIPLAYER,
            getText: () => f.intl.string(f.t.srnWru),
            getTooltip: () => f.intl.string(f.t.sDdLWA),
            IconComponent: a.nFg,
        },
        {
            feature: p.x0t.ONLINE_MULTIPLAYER,
            getText: () => f.intl.string(f.t.xPHbgA),
            getTooltip: () => f.intl.string(f.t.g6kR4D),
            IconComponent: a.nFg,
        },
        {
            feature: p.x0t.PVP,
            getText: () => f.intl.string(f.t.qhgwxx),
            getTooltip: () => f.intl.string(f.t["5jGrhN"]),
            IconComponent: a.quN,
        },
        {
            feature: p.x0t.LOCAL_COOP,
            getText: () => f.intl.string(f.t.FqbalJ),
            getTooltip: () => f.intl.string(f.t.vIgDgd),
            IconComponent: a.nFg,
        },
        {
            feature: p.x0t.ONLINE_COOP,
            getText: () => f.intl.string(f.t.lDHO4Y),
            getTooltip: () => f.intl.string(f.t.VXDphs),
            IconComponent: a.nFg,
        },
        {
            feature: p.x0t.CROSS_PLATFORM,
            getText: () => f.intl.string(f.t.SWo2Hf),
            getTooltip: () => f.intl.string(f.t.ll2wzY),
            IconComponent: a.fNY,
        },
        {
            feature: p.x0t.RICH_PRESENCE,
            getText: () => f.intl.string(f.t.PVSVtI),
            getTooltip: () => f.intl.string(f.t.O6Yp4d),
            IconComponent: u.A,
        },
        {
            feature: p.x0t.DISCORD_GAME_INVITES,
            getText: () => f.intl.string(f.t.agm68P),
            getTooltip: () => f.intl.string(f.t.kS2vFN),
            IconComponent: c.A,
        },
        {
            feature: p.x0t.SPECTATOR_MODE,
            getText: () => f.intl.string(f.t.ZtiU7w),
            getTooltip: () => f.intl.string(f.t.kUtiKa),
            IconComponent: a.npA,
        },
        {
            feature: p.x0t.CONTROLLER_SUPPORT,
            getText: () => f.intl.string(f.t.UlBQ8P),
            getTooltip: () => f.intl.string(f.t.iG00jA),
            IconComponent: a.LVO,
        },
        {
            feature: p.x0t.CLOUD_SAVES,
            getText: () => f.intl.string(f.t.rOcNrD),
            getTooltip: () => f.intl.string(f.t.kvw18E),
            IconComponent: o.A,
        },
        {
            feature: p.x0t.SECURE_NETWORKING,
            getText: () => f.intl.string(f.t.GKFWL3),
            getTooltip: () => f.intl.string(f.t.VudViJ),
            IconComponent: d.A,
        },
    ],
    g = (e) => {
        let { IconComponent: t, text: n, tooltip: i } = e;
        return (0, r.jsxs)("div", {
            className: h.nM,
            children: [
                (0, r.jsx)(l.m, {
                    text: i,
                    children: (0, r.jsx)(t, { className: h.AD }),
                }),
                (0, r.jsx)("span", {
                    className: h.oo,
                    children: n,
                }),
                (0, r.jsx)(a.A9s, {
                    size: "md",
                    color: "currentColor",
                    className: h.$8,
                }),
            ],
        });
    };
class m extends i.PureComponent {
    render() {
        let { sku: e } = this.props,
            t = A.filter((t) => {
                let { feature: n } = t;
                return e.features.has(n);
            }).map((e) => {
                let { feature: t, IconComponent: n, getText: i, getTooltip: l } = e;
                return (0, r.jsx)(
                    g,
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
                  className: h.qT,
                  children: [(0, r.jsx)(s.A, { children: f.intl.string(f.t.XXENra) }), t],
              });
    }
}
let b = m;
