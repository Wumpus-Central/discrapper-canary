n.d(t, { A: () => A });
var a = n(627968),
    s = n(64700),
    i = n(158954),
    l = n(397927),
    r = n(793574),
    d = n(688810),
    c = n(987144),
    o = n(71393),
    u = n(363487),
    m = n(828162),
    _ = n(956154),
    x = n(96104),
    f = n(800007),
    g = n(652215),
    v = n(294726),
    j = n(985018),
    h = n(673321);
function A(e) {
    let { guildId: t } = e,
        A = (0, u.A)(t),
        p = s.useRef(null),
        { analyticsLocations: C } = (0, d.Ay)(r.A.GAME_SERVER_PAGE),
        b = s.useCallback(() => {
            let e = o.A.getGuild(t);
            null != e &&
                (0, c.g)({
                    analyticsLocation: { page: g.liQ.GAME_SERVERS, section: g.JJy.GAME_SERVERS_EMPTY_STATE },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: C,
                    guild: e,
                });
        }, [t, C]),
        N = s.useCallback(() => {
            (0, m.A)(t, r.A.GAME_SERVER_PAGE, f.W5);
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
            (0, a.jsx)(_.A, { className: h.y2 }),
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
                        children: A ? j.intl.string(v.default.SbXvFG) : j.intl.string(v.default.ryqCyJ),
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: h.h_,
                        children: A ? j.intl.string(v.default.D1YcNp) : j.intl.string(v.default.iSX4z8),
                    }),
                    (0, a.jsx)("div", {
                        className: h.Uo,
                        children: A
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(l.Button, {
                                          variant: "expressive",
                                          text: j.intl.string(j.t.LhlgY9),
                                          onClick: N,
                                      }),
                                      (0, a.jsx)(l.Button, {
                                          variant: "secondary",
                                          text: j.intl.string(v.default.fxIXv4),
                                          onClick: I,
                                      }),
                                  ],
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(l.Button, {
                                          variant: "expressive",
                                          icon: l._Jp,
                                          text: j.intl.string(v.default["968/QC"]),
                                          onClick: b,
                                      }),
                                      (0, a.jsx)(l.Button, {
                                          variant: "secondary",
                                          text: j.intl.string(v.default.fxIXv4),
                                          onClick: I,
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: h.o2,
                children: Array.from({ length: 4 }).map((e, t) => (0, a.jsx)(x.A, {}, t)),
            }),
        ],
    });
}
