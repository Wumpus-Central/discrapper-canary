n.d(t, { A: () => j });
var a = n(627968),
    s = n(64700),
    i = n(158954),
    l = n(397927),
    r = n(793574),
    d = n(688810),
    c = n(987144),
    o = n(71393),
    u = n(363487),
    _ = n(828162),
    m = n(956154),
    x = n(800007),
    g = n(652215),
    f = n(294726),
    v = n(985018),
    h = n(673321);
function j(e) {
    let { guildId: t } = e,
        j = (0, u.A)(t),
        p = s.useRef(null),
        { analyticsLocations: A } = (0, d.Ay)(r.A.GAME_SERVER_PAGE),
        b = s.useCallback(() => {
            let e = o.A.getGuild(t);
            null != e &&
                (0, c.g)({
                    analyticsLocation: { page: g.liQ.GAME_SERVERS, section: g.JJy.GAME_SERVERS_EMPTY_STATE },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: A,
                    guild: e,
                });
        }, [t, A]),
        C = s.useCallback(() => {
            (0, _.A)(t, r.A.GAME_SERVER_PAGE, x.W5);
        }, [t]),
        I = s.useCallback(() => {
            (0, l.mMO)(async () => {
                let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                return (n) => (0, a.jsx)(e, { ...n, guildId: t });
            });
        }, [t]);
    return (0, a.jsxs)("div", {
        className: h.kL,
        children: [
            (0, a.jsx)(m.A, { className: h.y2 }),
            (0, a.jsxs)("div", {
                className: h.Qs,
                children: [
                    (0, a.jsx)("div", {
                        ref: p,
                        className: h._q,
                        children: (0, a.jsx)(i.E_w, { eventTargetRef: p, fit: "contain", stateMachine: "SM_Main_Int" }),
                    }),
                    (0, a.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: j ? v.intl.string(f.default.SbXvFG) : v.intl.string(f.default.ryqCyJ),
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: h.h_,
                        children: j ? v.intl.string(f.default.D1YcNp) : v.intl.string(f.default.iSX4z8),
                    }),
                    (0, a.jsx)("div", {
                        className: h.Uo,
                        children: j
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(l.Button, {
                                          variant: "expressive",
                                          text: v.intl.string(v.t.LhlgY9),
                                          onClick: C,
                                      }),
                                      (0, a.jsx)(l.Button, {
                                          variant: "secondary",
                                          text: v.intl.string(f.default.fxIXv4),
                                          onClick: I,
                                      }),
                                  ],
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(l.Button, {
                                          variant: "expressive",
                                          icon: l._Jp,
                                          text: v.intl.string(f.default["968/QC"]),
                                          onClick: b,
                                      }),
                                      (0, a.jsx)(l.Button, {
                                          variant: "secondary",
                                          text: v.intl.string(f.default.fxIXv4),
                                          onClick: I,
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        ],
    });
}
