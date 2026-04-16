n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(192308),
    r = n(990078),
    o = n(397927),
    d = n(932001),
    c = n(652793),
    u = n(976860),
    h = n(652215),
    A = n(746080),
    _ = n(49999),
    m = n(576709),
    p = n(985018),
    g = n(494352),
    f = n(907305);
let E = l.memo(function (e) {
    let { guildId: t, selected: E } = e,
        [x, I] = (0, d.ww)([s.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        C = x === s.M.GAME_SERVER_HOSTING_NEW_BADGE,
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
            className: g.c,
            children: [
                (0, i.jsx)("div", {
                    className: f.Xs,
                    children: (0, i.jsx)(r.m, {
                        text: p.intl.string(p.t.fgq1gs),
                        position: "top",
                        children: (0, i.jsx)(o.DUT, {
                            onClick: T,
                            "aria-label": p.intl.string(p.t.fgq1gs),
                            children: (0, i.jsx)(o.PGe, { size: "xs", color: "currentColor", className: f.gE }),
                        }),
                    }),
                }),
                C &&
                    (0, i.jsx)("div", {
                        className: f.yW,
                        children: (0, i.jsx)(o.LpS, {
                            disableColor: !0,
                            text: p.intl.string(p.t.y2b7CA),
                            className: g.q,
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(c.G, {
        className: f.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, i.jsx)(o._xR, { size: "md", className: e, color: "currentColor" }),
        text: p.intl.string(m.default.vCzwM7),
        selected: E,
        onClick: N,
        trailing: S,
    });
});
