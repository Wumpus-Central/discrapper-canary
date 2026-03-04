"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(554146),
    a = n(192308),
    r = n(397927),
    o = n(701363),
    c = n(932001),
    d = n(652793),
    u = n(976860),
    h = n(652215),
    A = n(746080),
    p = n(49999),
    m = n(294726),
    g = n(985018),
    _ = n(959853),
    f = n(728444);
let x = s.memo(function (e) {
    let { guildId: t, selected: x } = e,
        [, C] = (0, c.kn)([l.M.EMPTY_GAME_SERVER_TAB], void 0, !0),
        [E, I] = (0, c.ww)([l.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        N = E === l.M.GAME_SERVER_HOSTING_NEW_BADGE,
        S = s.useCallback(() => {
            I(p.i.USER_DISMISS), (0, u.pX)(h.BVt.CHANNEL(t, A.VV.GAME_SERVERS));
        }, [t, I]),
        b = s.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (t) => (0, i.jsx)(e, { ...t, onConfirm: () => C(p.i.USER_DISMISS) });
                    });
            },
            [C],
        ),
        T = (0, i.jsxs)("div", {
            className: _.c,
            children: [
                (0, i.jsx)("div", {
                    className: f.Xs,
                    children: (0, i.jsx)(o.w_, {
                        onClick: b,
                        "aria-label": g.intl.string(g.t.cpT0Cq),
                        icon: r.PGe,
                        forceShow: !0,
                    }),
                }),
                N &&
                    (0, i.jsx)("div", {
                        className: f.yW,
                        children: (0, i.jsx)(r.LpS, {
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
        renderIcon: (e) => (0, i.jsx)(r._xR, { size: "md", className: e, color: "currentColor" }),
        text: g.intl.string(m.default.vCzwM7),
        selected: x,
        onClick: S,
        trailing: T,
    });
});
