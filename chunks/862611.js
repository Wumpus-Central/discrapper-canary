"use strict";
n.d(t, { A: () => B });
var i,
    r = n(627968),
    s = n(64700),
    a = n(17928),
    o = n(453903),
    l = n(990078),
    d = n(462887),
    _ = n(834730),
    u = n(939249),
    c = n(789645),
    E = n(192308),
    h = n(922016),
    m = n(775602),
    f = n(429913),
    g = n(409626),
    p = n(713900),
    A = n(459746),
    I = n(311043),
    T = n(569926),
    S = n(363195),
    N = n(760751),
    C = n(954571),
    R = n(486020),
    O = n(507107),
    y = n(859387),
    v = n(18437),
    D = n(590202),
    L = n(73473),
    b = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    w = n(654487),
    P = n(652215),
    k = n(985018),
    M = n(420298);
let U = (e) => {
        let t,
            n,
            i,
            { quest: s, onClose: o } = e,
            l = (0, a.bG)([S.A], () => S.A.getState().theme),
            E = (0, d.M)(l) ? P.NJ8.DARK : P.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: M.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: M.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: M.rC,
                            alt: s.config.messages.gameTitle,
                            src: (0, y.tW)(s, y.fY.GAME_TILE, E).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: M.if,
                            children: [
                                (0, r.jsx)(_.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        ((t = {
                                            [w.Li.PACKAGE_ACTION_ADVENTURE]: k.t.PYFVdf,
                                            [w.Li.PACKAGE_RPG_MMO]: k.t.rFQo2F,
                                            [w.Li.PACKAGE_RACING_SPORTS]: k.t.zDRa6g,
                                            [w.Li.PACKAGE_SANDBOX_CREATIVE]: k.t.vz9U2Q,
                                            [w.Li.PACKAGE_FAMILY_FRIENDLY]: k.t.IOiAE0,
                                            [w.Li.PACKAGE_HOLIDAY_SEASON]: k.t.cJPqvD,
                                            [w.Li.PACKAGE_NEW_YEARS]: k.t.S0w2mv,
                                        }),
                                        (i =
                                            (null != (n = s.config.features.find((e) => e in t)) ? t[n] : null) ??
                                            k.t["D+DkEH"]),
                                        k.intl.string(i)),
                                }),
                                (0, r.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: k.intl.string(k.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.D, {
                    className: M.b,
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: o,
                    children: (0, r.jsx)(c.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    x = (e) => {
        let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: d, onGameProfileModalClose: _ } = e,
            c = (0, v.Ut)(),
            h = (0, a.bG)([m.A], () => m.A.useReducedMotion),
            f = s.useRef(null),
            p = null != i.gameRecord,
            I = () => {
                c({
                    questId: t.id,
                    questContent: O.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: D.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: o,
                });
            },
            T = async () => {
                p &&
                    (c({
                        questId: t.id,
                        questContent: O.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: D.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: o,
                    }),
                    await (0, E.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("23297"),
                                n.e("49319"),
                                n.e("92630"),
                                n.e("69059"),
                                n.e("62609"),
                                n.e("83593"),
                            ]).then(n.bind(n, 179985));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    gameId: i.applicationId,
                                    source: g.Ob.GameSheet,
                                    trackExternalAction: I,
                                    ...t,
                                });
                        },
                        { onCloseCallback: _ },
                    ),
                    d());
            },
            S = s.useCallback(
                (e) => {
                    if (null == f.current || h) return;
                    let t = f.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        i = e.clientY - t.top,
                        r = t.width / 2,
                        s = t.height / 2;
                    f.current.style.transform = `rotateX(${-(((i - s) / s) * 15)}deg) rotateY(${((n - r) / r) * 15}deg)`;
                },
                [h],
            ),
            N = s.useCallback(() => {
                null == f.current || h || (f.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [h]);
        return (0, r.jsx)(l.m, {
            text: i.name,
            children: (0, r.jsx)(u.D, {
                className: M.zR,
                onClick: T,
                onMouseMove: S,
                onMouseLeave: N,
                children: (0, r.jsx)("div", {
                    ref: f,
                    className: M._M,
                    children:
                        null != i.gameRecord
                            ? (0, r.jsx)(A.A, { game: i.gameRecord, className: M.xe, size: A.w.SMALL })
                            : null != i.fallbackCoverImageUrl
                              ? (0, r.jsx)("img", { src: i.fallbackCoverImageUrl, alt: i.name, className: M.xe })
                              : null,
                }),
            }),
        });
    },
    G = () =>
        (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "75",
            height: "96",
            viewBox: "0 0 75 96",
            fill: "none",
            children: [
                (0, r.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "73",
                    height: "94",
                    rx: "8",
                    fill: "var(--background-surface-high)",
                }),
                (0, r.jsx)("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "74",
                    height: "95",
                    rx: "8.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
                (0, r.jsx)("path", {
                    d: "M2.53418 3L73.0342 93.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
            ],
        });
function V(e) {
    let {
        quest: t,
        applications: i,
        onClose: o,
        sourceQuestContent: l,
        impressionRef: d,
        onGameProfileModalOpen: _,
        onGameProfileModalClose: u,
    } = e;
    (0, f.A)(i), (0, T.x)(i);
    let c = (0, a.bG)([I.A], () => i.some((e) => I.A.isFetching(e))),
        h = (0, a.bG)([I.A], () => i.some((e) => I.A.didFetchingFail(e))),
        m = (0, a.yK)([I.A], () =>
            i
                .map((e) => I.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, p.oS)(e.applicationId))
                .slice(0, 10),
        ),
        g = (0, a.bG)([N.A, I.A], () => {
            let e = new Set(m.map((e) => e.applicationId));
            return i
                .filter((t) => !e.has(t))
                .filter((e) => null == I.A.getGame(e))
                .map((e) => {
                    let t = N.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = R.Ay.getApplicationIconURL({
                        id: e,
                        icon: t.cover_image_hash,
                        size: 256,
                        keepAspectRatio: !0,
                    });
                    return null == n ? null : { applicationId: e, name: t.name, coverImageUrl: n };
                })
                .filter((e) => null != e)
                .slice(0, 10);
        }),
        A = s.useMemo(
            () =>
                [
                    ...m.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...g.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [m, g],
        ),
        S = s.useMemo(() => {
            let e = A.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [A.length]),
        O = !c && 0 === A.length,
        y = h || O;
    if (
        (s.useEffect(() => {
            if (y) {
                let e = h ? b.FETCH_FAILED : b.NO_GAMES_AVAILABLE;
                C.default.track(P.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    o(),
                    (0, E.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [y, h, t.id, o]),
        c && !y)
    ) {
        let e = Math.min(i.length, 10);
        return (0, r.jsxs)("div", {
            className: M.kL,
            children: [
                (0, r.jsx)(U, { quest: t, onClose: o }),
                (0, r.jsx)("div", {
                    className: M.LA,
                    children: i.slice(0, e).map((e) => (0, r.jsx)("div", { className: M.Vj }, e)),
                }),
            ],
        });
    }
    return y
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  d.current = e;
              },
              className: M.kL,
              children: [
                  (0, r.jsx)(U, { quest: t, onClose: o }),
                  (0, r.jsxs)("div", {
                      className: M.LA,
                      children: [
                          A.map((e) =>
                              (0, r.jsx)(
                                  x,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                      onGameProfileModalOpen: _,
                                      onGameProfileModalClose: u,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: S }, (e, t) => (0, r.jsx)(G, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function F(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: i,
            onGameSheetOpened: a,
            onGameSheetClosed: l,
            quest: d,
            sourceQuestContent: _,
            impressionRef: u,
        } = e,
        [c, E] = s.useState(!1),
        m = (0, v.Ut)(),
        f = s.useRef(null),
        g = t?.current != null,
        p = g ? t : f,
        A = () => {
            E(!0);
        },
        I = () => {
            E(!1);
        };
    return (0, r.jsx)(h.Y, {
        targetElementRef: p,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(V, {
                quest: d,
                applications: n,
                onClose: t,
                sourceQuestContent: _,
                impressionRef: u,
                onGameProfileModalOpen: A,
                onGameProfileModalClose: I,
            });
        },
        onRequestOpen: () => {
            a?.(),
                m({
                    questId: d.id,
                    questContent: _,
                    questContentCTA: D.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: _,
                });
        },
        onRequestClose: () => {
            if (c) return o.o;
            l?.();
        },
        position: g ? "right" : "top",
        align: g ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => i(e, f),
    });
}
let B = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(L.R, {
              questOrQuests: e.quest,
              questContent: O.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(F, { ...e, impressionRef: t }),
          });
};
