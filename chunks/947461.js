"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(554146),
    o = n(192308),
    c = n(990078),
    d = n(397927),
    u = n(932001),
    h = n(652793),
    A = n(976860),
    m = n(652215),
    p = n(746080),
    g = n(49999),
    _ = n(738072),
    f = n(985018),
    x = n(9339),
    C = n(719550);
let E = s.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [E, I] = (0, u.ww)([a.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        N = E === a.M.GAME_SERVER_HOSTING_NEW_BADGE,
        b = s.useCallback(() => {
            I(g.i.USER_DISMISS), (0, A.pX)(m.BVt.CHANNEL(t, p.VV.GAME_SERVERS));
        }, [t, I]),
        S = s.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        T = (0, i.jsxs)("div", {
            className: x.c,
            children: [
                (0, i.jsx)("div", {
                    className: r()(C.Xs, { [C.Tf]: !N }),
                    children: (0, i.jsx)(c.m, {
                        text: f.intl.string(f.t.fgq1gs),
                        position: "top",
                        children: (0, i.jsx)(d.DUT, {
                            onClick: S,
                            "aria-label": f.intl.string(f.t.fgq1gs),
                            children: (0, i.jsx)(d.PGe, { size: "xs", color: "currentColor", className: C.gE }),
                        }),
                    }),
                }),
                N &&
                    (0, i.jsx)("div", {
                        className: C.yW,
                        children: (0, i.jsx)(d.LpS, {
                            disableColor: !0,
                            text: f.intl.string(f.t.y2b7CA),
                            className: x.q,
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(h.G, {
        className: C.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, i.jsx)(d._xR, { size: "md", className: e, color: "currentColor" }),
        text: f.intl.string(_.default.vCzwM7),
        selected: l,
        onClick: b,
        trailing: T,
    });
});
