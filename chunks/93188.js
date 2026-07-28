a.r(s), a.d(s, { default: () => el });
var t = a(477900),
    l = a(582128),
    i = a(687966),
    n = a(17928),
    c = a(812993),
    d = a(834730),
    r = a(289873),
    o = a(364522),
    m = a(780907),
    u = a(58736),
    x = a(546385),
    h = a(71393),
    j = a(975571),
    f = a(363487),
    v = a(396748),
    A = a(397400),
    g = a(187549),
    N = a(522055),
    E = a(969117),
    b = a(289704),
    p = a(192308),
    S = a(297264),
    _ = a(821609),
    G = a(104510),
    R = a(793574),
    C = a(688810),
    I = a(987144),
    y = a(828162),
    M = a(366010),
    k = a(736653),
    D = a(303136),
    L = a(676279),
    T = a(666082);
function V(e) {
    let { className: s } = e,
        a = (0, k.Ay)(),
        l = (0, M.q)(a),
        i = (0, L.TM)()
            ? l
                ? "https://cdn.discordapp.com/assets/content/69d4b14501d44f2aec986761083e10f965087103272626a5db7505f48986f1fd.mp4"
                : "https://cdn.discordapp.com/assets/content/47dc147701661ba3fabce79f4ce1b2bd45760d8c7c9dc70082fca884101bdb1f.mp4"
            : l
              ? "https://cdn.discordapp.com/assets/content/c027e64cb04ec91b12b8af40e11aca80f00279bdb1418e54b7d8cd216e899a2f.webm"
              : "https://cdn.discordapp.com/assets/content/d6dd3399e1bd603866173dc35c95729620b6e6840ed3392941662e8dd188eb9d.webm";
    return (0, t.jsxs)("div", {
        className: s,
        children: [
            (0, t.jsx)("div", { className: T.YL }),
            (0, t.jsx)(
                D.A,
                {
                    fallbackImage: l
                        ? "https://cdn.discordapp.com/assets/content/d8e2decd311794ae583d9165897e2b70181ec10c3553511d03bbeb3876a3f0af.png"
                        : "https://cdn.discordapp.com/assets/content/da80e999bcef3fc647b6697e4b4cbe396505f1517f06fe6e47eb4e24c5538bc9.png",
                    children: (0, t.jsx)("source", { src: i }),
                },
                i,
            ),
        ],
    });
}
var F = a(496587),
    P = a(187205);
function $() {
    let e = (0, t.jsx)("div", { className: P.Uy });
    return (0, t.jsx)(F.A, {
        actions: e,
        children: (0, t.jsx)("div", {
            className: P.nV,
            children: (0, t.jsxs)("div", {
                className: P.dZ,
                children: [
                    (0, t.jsxs)("div", {
                        className: P.fA,
                        children: [
                            (0, t.jsx)("div", { className: P.Su }),
                            (0, t.jsxs)("div", {
                                className: P.CR,
                                children: [
                                    (0, t.jsx)("div", { className: P.Nl }),
                                    (0, t.jsx)("div", { className: P.dj }),
                                ],
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: P.l8,
                        children: Array.from({ length: 4 }).map((e, s) =>
                            (0, t.jsxs)(
                                "div",
                                {
                                    className: P.TE,
                                    children: [
                                        (0, t.jsx)("div", { className: P.D4 }),
                                        (0, t.jsx)("div", { className: P._o }),
                                    ],
                                },
                                s,
                            ),
                        ),
                    }),
                ],
            }),
        }),
    });
}
var w = a(800007),
    B = a(652215),
    q = a(576709),
    z = a(375708);
function O(e) {
    let { guildId: s } = e,
        i = (0, f.A)(s),
        n = l.useRef(null),
        { analyticsLocations: c } = (0, C.Ay)(R.A.GAME_SERVER_PAGE),
        r = l.useCallback(() => {
            let e = h.A.getGuild(s);
            null != e &&
                (0, I.g)({
                    analyticsLocation: { page: B.liQ.GAME_SERVERS, section: B.JJy.GAME_SERVERS_EMPTY_STATE },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: c,
                    guild: e,
                });
        }, [s, c]),
        o = l.useCallback(() => {
            (0, y.A)(s, R.A.GAME_SERVER_PAGE, w.W5);
        }, [s]),
        m = l.useCallback(() => {
            (0, p.openModalLazy)(async () => {
                let { default: e } = await a.e("2872").then(a.bind(a, 128459));
                return (a) => (0, t.jsx)(e, { ...a, guildId: s });
            });
        }, [s]);
    return (0, t.jsxs)("div", {
        className: T.kL,
        children: [
            (0, t.jsx)(V, { className: T.y2 }),
            (0, t.jsxs)("div", {
                className: T.Qs,
                children: [
                    (0, t.jsx)("div", {
                        ref: n,
                        className: T._q,
                        children: (0, t.jsx)(b.E, { eventTargetRef: n, fit: "contain", stateMachine: "SM_Main_Int" }),
                    }),
                    (0, t.jsx)(S.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: i ? z.intl.string(q.default.SbXvFG) : z.intl.string(q.default.ryqCyJ),
                    }),
                    (0, t.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: T.h_,
                        children: i ? z.intl.string(q.default.D1YcNp) : z.intl.string(q.default.iSX4z8),
                    }),
                    (0, t.jsx)("div", {
                        className: T.Uo,
                        children: i
                            ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)(_.$, {
                                          variant: "expressive",
                                          text: z.intl.string(z.t.LhlgY9),
                                          onClick: o,
                                      }),
                                      (0, t.jsx)(_.$, {
                                          variant: "secondary",
                                          text: z.intl.string(q.default.fxIXv4),
                                          onClick: m,
                                      }),
                                  ],
                              })
                            : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)(_.$, {
                                          variant: "expressive",
                                          icon: G._,
                                          text: z.intl.string(q.default["968/QC"]),
                                          onClick: r,
                                      }),
                                      (0, t.jsx)(_.$, {
                                          variant: "secondary",
                                          text: z.intl.string(q.default.fxIXv4),
                                          onClick: m,
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
            (0, t.jsx)("div", {
                className: T.o2,
                children: Array.from({ length: 4 }).map((e, s) => (0, t.jsx)($, {}, s)),
            }),
        ],
    });
}
var U = a(140033),
    Y = a(866665),
    X = a(895770),
    W = a(18365),
    J = a(843095),
    K = a(426803);
let Q = { ...w.ZN, initialStep: w.HS.SERVER_SETTINGS };
function Z(e) {
    let { guildId: s, isAdmin: a } = e,
        { state: i, shouldFetchCatalog: c } = (0, n.cf)([N.A], () => ({
            state: N.A.getStateForGuild(s),
            shouldFetchCatalog: N.A.shouldFetchCatalogForGuild(s),
        }));
    l.useEffect(() => {
        c && (0, v.z9)(s);
    }, [s, c]);
    let { catalog: d, instances: m } = l.useMemo(
            () => ({ catalog: Object.values(i?.catalog ?? {}), instances: Object.values(i?.instances ?? {}) }),
            [i?.catalog, i?.instances],
        ),
        u = m.length >= w.ZI;
    return 0 === d.length
        ? (0, t.jsx)("div", {
              className: K.kL,
              children: (0, t.jsx)(r.y, { type: r.t.SPINNING_CIRCLE, className: K.u1 }),
          })
        : (0, t.jsxs)("div", {
              className: K.kL,
              children: [
                  (0, t.jsx)(S.D, {
                      className: K.R_,
                      variant: "heading-md/semibold",
                      children: z.intl.string(a ? q.default["3vWDMz"] : q.default.Uvf9GK),
                  }),
                  a && u && (0, t.jsx)("div", { className: K.Bq, children: (0, t.jsx)(W.k, {}) }),
                  (0, t.jsx)(o.Ip, {
                      className: K.nd,
                      children: (0, t.jsx)("div", {
                          className: K.Y_,
                          children: d.map((e, l) =>
                              a
                                  ? (0, t.jsx)(
                                        Y.m,
                                        {
                                            asContainer: !0,
                                            text: e.disabled
                                                ? z.intl.formatToPlainString(q.default.uVpJYf, { gameName: e.name })
                                                : null,
                                            position: "top",
                                            children: (0, t.jsx)(X.A, {
                                                guildId: s,
                                                game: e,
                                                onClick: () =>
                                                    (0, J.A)({
                                                        guildId: s,
                                                        stepConfig: Q,
                                                        initialGameServerGame: e,
                                                        analyticsLocation: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                                    }),
                                                imageClassName: K.Sl,
                                                titleClassName: K.DD,
                                                variant: u || e.disabled ? X.e.DISABLED : X.e.CLICKABLE,
                                                location: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                            }),
                                        },
                                        `sidebar-game-${l}-${e.id}`,
                                    )
                                  : (0, t.jsx)(
                                        X.A,
                                        {
                                            guildId: s,
                                            game: e,
                                            variant: X.e.VIEWABLE,
                                            imageClassName: K.Sl,
                                            titleClassName: K.DD,
                                            location: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                        },
                                        `sidebar-game-${l}-${e.id}`,
                                    ),
                          ),
                      }),
                  }),
              ],
          });
}
var H = a(927813),
    ee = a(218394);
let es = 30 * H.A.Millis.SECOND,
    ea = 5 * H.A.Millis.SECOND;
var et = a(131479);
function el(e) {
    var s;
    let a,
        { guildId: b } = e;
    (0, A.tR)(b);
    let p = (0, g.U)("GameServerPage"),
        S = (0, n.bG)([h.A], () => h.A.getGuild(b)?.features.has(B.GuildFeatures.GAME_SERVERS) ?? !1);
    (s = S ? b : null),
        (a = (0, ee.j)()),
        l.useEffect(() => {
            if (null == s) return;
            let e = !0,
                t = null,
                l = 0,
                i = (function n() {
                    return setTimeout(
                        () => {
                            null == s ||
                                (a &&
                                    ((t = new AbortController()),
                                    (0, v.cq)(s, !1, t.signal)
                                        .then(() => (l = 0))
                                        .catch(() => (l = Math.min(l + 1, 4)))
                                        .finally(() => {
                                            e && (i = n());
                                        })));
                        },
                        es * Math.pow(2, l) + Math.random() * ea,
                    );
                })();
            return () => {
                (e = !1), t?.abort(), clearTimeout(i);
            };
        }, [s, a]),
        l.useEffect(() => {
            S && ((0, v.cq)(b), m.Ay.getDetectableGames());
        }, [b, S]);
    let _ = (0, f.A)(b),
        G = (0, E.N)("GameServerPage"),
        R = (0, n.bG)([N.A], () => N.A.getStateForGuild(b)),
        C = l.useMemo(() => {
            if (!R?.hasFetchedInstances) return;
            let e = Object.values(R.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, s) => (0, t.jsx)(U.Ay, { guildId: b, instance: e }, `${e.gameId}-${s}`));
        }, [R?.instances, R?.hasFetchedInstances, b]);
    return (0, t.jsxs)("div", {
        className: et.kL,
        children: [
            (0, t.jsxs)(u.Ay, {
                className: et.KE,
                toolbar: (0, t.jsx)("div", {}),
                children: [
                    (0, t.jsx)(u.Ay.Icon, { icon: i._, "aria-label": "" }),
                    (0, t.jsx)(u.Ay.Title, { children: z.intl.string(q.default.vCzwM7) }),
                    (0, t.jsx)(c.Lp, { disableColor: !0, text: z.intl.string(z.t.oW0eUd), className: et.qS }),
                    (0, t.jsx)(u.Ay.Divider, { className: et.yF }),
                    (0, t.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: z.intl.format(q.default.LiR4eN, {
                            helpCenterUrl: j.A.getArticleURL(B.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: et.hQ,
                children: [
                    S && !R?.hasFetchedInstances
                        ? (0, t.jsx)("div", {
                              className: et.dc,
                              children: (0, t.jsx)(r.y, { type: r.t.SPINNING_CIRCLE }),
                          })
                        : null == C
                          ? (0, t.jsx)(O, { guildId: b })
                          : (0, t.jsxs)("div", {
                                className: et.nd,
                                children: [
                                    p &&
                                        (0, t.jsx)("div", {
                                            className: et.MR,
                                            children: (0, t.jsx)(x.A, {
                                                look: x.k.WARNING,
                                                children: z.intl.format(q.default.XzXjK2, {}),
                                            }),
                                        }),
                                    (0, t.jsx)(o.Ip, {
                                        children: (0, t.jsx)("div", { className: et.Y_, children: C }),
                                    }),
                                ],
                            }),
                    (_ || G) && (0, t.jsx)(Z, { guildId: b, isAdmin: _ ?? !1 }),
                ],
            }),
        ],
    });
}
