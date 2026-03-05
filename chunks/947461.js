"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(554146),
    r = n(192308),
    a = n(397927),
    o = n(701363),
    c = n(932001),
    d = n(652793),
    u = n(976860),
    h = n(652215),
    A = n(746080),
    m = n(49999),
    p = n(738072),
    g = n(985018),
    _ = n(9339),
    f = n(719550);
let x = s.memo(function (e) {
    let { guildId: t, selected: x } = e,
        [C, E] = (0, c.ww)([l.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        I = C === l.M.GAME_SERVER_HOSTING_NEW_BADGE,
        N = s.useCallback(() => {
            E(m.i.USER_DISMISS), (0, u.pX)(h.BVt.CHANNEL(t, A.VV.GAME_SERVERS));
        }, [t, E]),
        b = s.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        S = (0, i.jsxs)("div", {
            className: _.c,
            children: [
                (0, i.jsx)("div", {
                    className: f.Xs,
                    children: (0, i.jsx)(o.w_, {
                        onClick: b,
                        "aria-label": g.intl.string(g.t.cpT0Cq),
                        icon: a.PGe,
                        forceShow: !0,
                    }),
                }),
                I &&
                    (0, i.jsx)("div", {
                        className: f.yW,
                        children: (0, i.jsx)(a.LpS, {
                            disableColor: !0,
                            text: g.intl.string(g.t.y2b7CA),
                            className: _.q,
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(d.G, {
        className: f.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, i.jsx)(a._xR, { size: "md", className: e, color: "currentColor" }),
        text: g.intl.string(p.default.vCzwM7),
        selected: x,
        onClick: N,
        trailing: S,
    });
});
