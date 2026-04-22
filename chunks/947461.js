n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(192308),
    r = n(990078),
    o = n(939249),
    d = n(789645),
    c = n(777666),
    u = n(687966),
    h = n(932001),
    A = n(652793),
    _ = n(976860),
    m = n(652215),
    g = n(746080),
    p = n(49999),
    f = n(576709),
    E = n(985018),
    x = n(494352),
    I = n(907305);
let C = l.memo(function (e) {
    let { guildId: t, selected: C } = e,
        [b, N] = (0, h.ww)([s.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        S = b === s.M.GAME_SERVER_HOSTING_NEW_BADGE,
        v = l.useCallback(() => {
            N(p.i.USER_DISMISS), (0, _.pX)(m.BVt.CHANNEL(t, g.VV.GAME_SERVERS));
        }, [t, N]),
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
        y = (0, i.jsxs)("div", {
            className: x.c,
            children: [
                (0, i.jsx)("div", {
                    className: I.Xs,
                    children: (0, i.jsx)(r.m, {
                        text: E.intl.string(E.t.fgq1gs),
                        position: "top",
                        children: (0, i.jsx)(o.D, {
                            onClick: T,
                            "aria-label": E.intl.string(E.t.fgq1gs),
                            children: (0, i.jsx)(d.P, { size: "xs", color: "currentColor", className: I.gE }),
                        }),
                    }),
                }),
                S &&
                    (0, i.jsx)("div", {
                        className: I.yW,
                        children: (0, i.jsx)(c.Lp, {
                            disableColor: !0,
                            text: E.intl.string(E.t.y2b7CA),
                            className: x.q,
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(A.G, {
        className: I.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, i.jsx)(u._, { size: "md", className: e, color: "currentColor" }),
        text: E.intl.string(f.default.vCzwM7),
        selected: C,
        onClick: v,
        trailing: y,
    });
});
