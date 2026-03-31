n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(192308),
    r = n(990078),
    o = n(397927),
    c = n(932001),
    d = n(652793),
    u = n(976860),
    h = n(652215),
    A = n(746080),
    _ = n(49999),
    m = n(294726),
    g = n(985018),
    p = n(81152),
    f = n(928409);
let x = l.memo(function (e) {
    let { guildId: t, selected: x } = e,
        [E, I] = (0, c.ww)([s.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        C = E === s.M.GAME_SERVER_HOSTING_NEW_BADGE,
        N = l.useCallback(() => {
            I(_.i.USER_DISMISS), (0, u.pX)(h.BVt.CHANNEL(t, A.VV.GAME_SERVERS));
        }, [t, I]),
        T = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        S = (0, i.jsxs)("div", {
            className: p.c,
            children: [
                (0, i.jsx)("div", {
                    className: f.Xs,
                    children: (0, i.jsx)(r.m, {
                        text: g.intl.string(g.t.fgq1gs),
                        position: "top",
                        children: (0, i.jsx)(o.DUT, {
                            onClick: T,
                            "aria-label": g.intl.string(g.t.fgq1gs),
                            children: (0, i.jsx)(o.PGe, { size: "xs", color: "currentColor", className: f.gE }),
                        }),
                    }),
                }),
                C &&
                    (0, i.jsx)("div", {
                        className: f.yW,
                        children: (0, i.jsx)(o.LpS, {
                            disableColor: !0,
                            text: g.intl.string(g.t.y2b7CA),
                            className: p.q,
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(d.G, {
        className: f.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, i.jsx)(o._xR, { size: "md", className: e, color: "currentColor" }),
        text: g.intl.string(m.default.vCzwM7),
        selected: x,
        onClick: N,
        trailing: S,
    });
});
