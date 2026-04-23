n.d(t, { A: () => I });
var a = n(627968),
    s = n(64700),
    i = n(320176),
    l = n(192308),
    r = n(534514),
    d = n(834730),
    c = n(821609),
    o = n(104510),
    u = n(793574),
    _ = n(688810),
    m = n(987144),
    x = n(71393),
    f = n(363487),
    g = n(828162),
    v = n(956154),
    j = n(96104),
    h = n(800007),
    A = n(652215),
    p = n(576709),
    E = n(985018),
    C = n(702730);
function I(e) {
    let { guildId: t } = e,
        I = (0, f.A)(t),
        b = s.useRef(null),
        { analyticsLocations: N } = (0, _.Ay)(u.A.GAME_SERVER_PAGE),
        S = s.useCallback(() => {
            let e = x.A.getGuild(t);
            null != e &&
                (0, m.g)({
                    analyticsLocation: { page: A.liQ.GAME_SERVERS, section: A.JJy.GAME_SERVERS_EMPTY_STATE },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: N,
                    guild: e,
                });
        }, [t, N]),
        R = s.useCallback(() => {
            (0, g.A)(t, u.A.GAME_SERVER_PAGE, h.W5);
        }, [t]),
        M = s.useCallback(() => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                return (n) => (0, a.jsx)(e, { ...n, guildId: t });
            });
        }, [t]);
    return (0, a.jsxs)("div", {
        className: C.kL,
        children: [
            (0, a.jsx)(v.A, { className: C.y2 }),
            (0, a.jsxs)("div", {
                className: C.Qs,
                children: [
                    (0, a.jsx)("div", {
                        ref: b,
                        className: C._q,
                        children: (0, a.jsx)(i.E, { eventTargetRef: b, fit: "contain", stateMachine: "SM_Main_Int" }),
                    }),
                    (0, a.jsx)(r.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: I ? E.intl.string(p.default.SbXvFG) : E.intl.string(p.default.ryqCyJ),
                    }),
                    (0, a.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: C.h_,
                        children: I ? E.intl.string(p.default.D1YcNp) : E.intl.string(p.default.iSX4z8),
                    }),
                    (0, a.jsx)("div", {
                        className: C.Uo,
                        children: I
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(c.$, {
                                          variant: "expressive",
                                          text: E.intl.string(E.t.LhlgY9),
                                          onClick: R,
                                      }),
                                      (0, a.jsx)(c.$, {
                                          variant: "secondary",
                                          text: E.intl.string(p.default.fxIXv4),
                                          onClick: M,
                                      }),
                                  ],
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(c.$, {
                                          variant: "expressive",
                                          icon: o._,
                                          text: E.intl.string(p.default["968/QC"]),
                                          onClick: S,
                                      }),
                                      (0, a.jsx)(c.$, {
                                          variant: "secondary",
                                          text: E.intl.string(p.default.fxIXv4),
                                          onClick: M,
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: C.o2,
                children: Array.from({ length: 4 }).map((e, t) => (0, a.jsx)(j.A, {}, t)),
            }),
        ],
    });
}
