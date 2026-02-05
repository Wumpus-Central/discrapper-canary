n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(990078),
    l = n(397927),
    s = n(481859),
    o = n(186975),
    d = n(204160),
    c = n(787523),
    u = n(69175),
    A = n(652215),
    h = n(985018),
    _ = n(388756);
let m = [
        {
            feature: A.x0t.SINGLE_PLAYER,
            getText: () => h.intl.string(h.t["V+/FjO"]),
            getTooltip: () => h.intl.string(h.t["w+X9sT"]),
            IconComponent: l.nys,
        },
        {
            feature: A.x0t.LOCAL_MULTIPLAYER,
            getText: () => h.intl.string(h.t.srnWru),
            getTooltip: () => h.intl.string(h.t.sDdLWA),
            IconComponent: l.nFg,
        },
        {
            feature: A.x0t.ONLINE_MULTIPLAYER,
            getText: () => h.intl.string(h.t.xPHbgA),
            getTooltip: () => h.intl.string(h.t.g6kR4D),
            IconComponent: l.nFg,
        },
        {
            feature: A.x0t.PVP,
            getText: () => h.intl.string(h.t.qhgwxx),
            getTooltip: () => h.intl.string(h.t["5jGrhN"]),
            IconComponent: l.quN,
        },
        {
            feature: A.x0t.LOCAL_COOP,
            getText: () => h.intl.string(h.t.FqbalJ),
            getTooltip: () => h.intl.string(h.t.vIgDgd),
            IconComponent: l.nFg,
        },
        {
            feature: A.x0t.ONLINE_COOP,
            getText: () => h.intl.string(h.t.lDHO4Y),
            getTooltip: () => h.intl.string(h.t.VXDphs),
            IconComponent: l.nFg,
        },
        {
            feature: A.x0t.CROSS_PLATFORM,
            getText: () => h.intl.string(h.t.SWo2Hf),
            getTooltip: () => h.intl.string(h.t.ll2wzY),
            IconComponent: l.fNY,
        },
        {
            feature: A.x0t.RICH_PRESENCE,
            getText: () => h.intl.string(h.t.PVSVtI),
            getTooltip: () => h.intl.string(h.t.O6Yp4d),
            IconComponent: c.A,
        },
        {
            feature: A.x0t.DISCORD_GAME_INVITES,
            getText: () => h.intl.string(h.t.agm68P),
            getTooltip: () => h.intl.string(h.t.kS2vFN),
            IconComponent: d.A,
        },
        {
            feature: A.x0t.SPECTATOR_MODE,
            getText: () => h.intl.string(h.t.ZtiU7w),
            getTooltip: () => h.intl.string(h.t.kUtiKa),
            IconComponent: l.npA,
        },
        {
            feature: A.x0t.CONTROLLER_SUPPORT,
            getText: () => h.intl.string(h.t.UlBQ8P),
            getTooltip: () => h.intl.string(h.t.iG00jA),
            IconComponent: l.LVO,
        },
        {
            feature: A.x0t.CLOUD_SAVES,
            getText: () => h.intl.string(h.t.rOcNrD),
            getTooltip: () => h.intl.string(h.t.kvw18E),
            IconComponent: o.A,
        },
        {
            feature: A.x0t.SECURE_NETWORKING,
            getText: () => h.intl.string(h.t.GKFWL3),
            getTooltip: () => h.intl.string(h.t.VudViJ),
            IconComponent: u.A,
        },
    ],
    p = (e) => {
        let { IconComponent: t, text: n, tooltip: r } = e;
        return (0, i.jsxs)("div", {
            className: _.nM,
            children: [
                (0, i.jsx)(a.m, { text: r, children: (0, i.jsx)(t, { className: _.AD }) }),
                (0, i.jsx)("span", { className: _.oo, children: n }),
                (0, i.jsx)(l.A9s, { size: "md", color: "currentColor", className: _.$8 }),
            ],
        });
    };
class g extends r.PureComponent {
    render() {
        let { sku: e } = this.props,
            t = m
                .filter((t) => {
                    let { feature: n } = t;
                    return e.features.has(n);
                })
                .map((e) => {
                    let { feature: t, IconComponent: n, getText: r, getTooltip: a } = e;
                    return (0, i.jsx)(p, { IconComponent: n, text: r(), tooltip: a() }, t);
                });
        return 0 === t.length
            ? null
            : (0, i.jsxs)("div", {
                  className: _.qT,
                  children: [(0, i.jsx)(s.A, { children: h.intl.string(h.t.XXENra) }), t],
              });
    }
}
let E = g;
