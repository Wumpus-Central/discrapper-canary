"use strict";
n.d(t, { A: () => H });
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
    f = n(587895),
    g = n(429913),
    p = n(409626),
    A = n(80552),
    I = n(459746),
    T = n(311043),
    S = n(569926),
    N = n(363195),
    C = n(760751),
    R = n(954571),
    O = n(486020),
    y = n(507107),
    v = n(859387),
    D = n(18437),
    L = n(590202),
    b = n(73473),
    w = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    P = n(654487),
    k = n(652215),
    M = n(985018),
    U = n(420298);
let x = (e) => {
        let t,
            n,
            i,
            { quest: s, onClose: o } = e,
            l = (0, a.bG)([N.A], () => N.A.getState().theme),
            E = (0, d.M)(l) ? k.NJ8.DARK : k.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: U.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: U.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: U.rC,
                            alt: s.config.messages.gameTitle,
                            src: (0, v.tW)(s, v.fY.GAME_TILE, E).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: U.if,
                            children: [
                                (0, r.jsx)(_.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        ((t = {
                                            [P.Li.PACKAGE_ACTION_ADVENTURE]: M.t.PYFVdf,
                                            [P.Li.PACKAGE_RPG_MMO]: M.t.rFQo2F,
                                            [P.Li.PACKAGE_RACING_SPORTS]: M.t.zDRa6g,
                                            [P.Li.PACKAGE_SANDBOX_CREATIVE]: M.t.vz9U2Q,
                                            [P.Li.PACKAGE_FAMILY_FRIENDLY]: M.t.IOiAE0,
                                            [P.Li.PACKAGE_HOLIDAY_SEASON]: M.t.cJPqvD,
                                            [P.Li.PACKAGE_NEW_YEARS]: M.t.S0w2mv,
                                        }),
                                        (i =
                                            (null != (n = s.config.features.find((e) => e in t)) ? t[n] : null) ??
                                            M.t["D+DkEH"]),
                                        M.intl.string(i)),
                                }),
                                (0, r.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: M.intl.string(M.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.D, {
                    className: U.b,
                    "aria-label": M.intl.string(M.t.cpT0Cq),
                    onClick: o,
                    children: (0, r.jsx)(c.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    G = (e) => {
        let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: d, onGameProfileModalClose: _ } = e,
            c = (0, D.Ut)(),
            h = (0, a.bG)([f.A], () => f.A.getApplication(i.applicationId)),
            g = (0, a.bG)([m.A], () => m.A.useReducedMotion),
            A = s.useRef(null),
            T = null != i.gameRecord,
            S = () => {
                c({
                    questId: t.id,
                    questContent: y.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: L.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: o,
                });
            },
            N = async () => {
                T &&
                    (c({
                        questId: t.id,
                        questContent: y.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: L.Cy.GAME_PROFILE_OPEN,
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
                                    applicationId: i.applicationId,
                                    source: p.Ob.GameSheet,
                                    trackExternalAction: S,
                                    ...t,
                                });
                        },
                        { onCloseCallback: _ },
                    ),
                    d());
            },
            C = s.useCallback(
                (e) => {
                    if (null == A.current || g) return;
                    let t = A.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        i = e.clientY - t.top,
                        r = t.width / 2,
                        s = t.height / 2;
                    A.current.style.transform = `rotateX(${-(((i - s) / s) * 15)}deg) rotateY(${((n - r) / r) * 15}deg)`;
                },
                [g],
            ),
            R = s.useCallback(() => {
                null == A.current || g || (A.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [g]);
        return (0, r.jsx)(l.m, {
            text: i.name,
            children: (0, r.jsx)(u.D, {
                className: U.zR,
                onClick: N,
                onMouseMove: C,
                onMouseLeave: R,
                children: (0, r.jsx)("div", {
                    ref: A,
                    className: U._M,
                    children:
                        null != i.gameRecord
                            ? (0, r.jsx)(I.A, { game: i.gameRecord, application: h, className: U.xe, size: I.w.SMALL })
                            : null != i.fallbackCoverImageUrl
                              ? (0, r.jsx)("img", { src: i.fallbackCoverImageUrl, alt: i.name, className: U.xe })
                              : null,
                }),
            }),
        });
    },
    V = () =>
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
function F(e) {
    let {
        quest: t,
        applications: i,
        onClose: o,
        sourceQuestContent: l,
        impressionRef: d,
        onGameProfileModalOpen: _,
        onGameProfileModalClose: u,
    } = e;
    (0, g.A)(i), (0, S.x)(i);
    let c = (0, a.bG)([T.A], () => i.some((e) => T.A.isFetching(e))),
        h = (0, a.bG)([T.A], () => i.some((e) => T.A.didFetchingFail(e))),
        m = (0, a.yK)([T.A], () =>
            i
                .map((e) => T.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, A.oS)(e.applicationId))
                .slice(0, 10),
        ),
        f = (0, a.bG)([C.A, T.A], () => {
            let e = new Set(m.map((e) => e.applicationId));
            return i
                .filter((t) => !e.has(t))
                .filter((e) => null == T.A.getGame(e))
                .map((e) => {
                    let t = C.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = O.Ay.getApplicationIconURL({
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
        p = s.useMemo(
            () =>
                [
                    ...m.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...f.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [m, f],
        ),
        I = s.useMemo(() => {
            let e = p.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [p.length]),
        N = !c && 0 === p.length,
        y = h || N;
    if (
        (s.useEffect(() => {
            if (y) {
                let e = h ? w.FETCH_FAILED : w.NO_GAMES_AVAILABLE;
                R.default.track(k.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
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
            className: U.kL,
            children: [
                (0, r.jsx)(x, { quest: t, onClose: o }),
                (0, r.jsx)("div", {
                    className: U.LA,
                    children: i.slice(0, e).map((e) => (0, r.jsx)("div", { className: U.Vj }, e)),
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
              className: U.kL,
              children: [
                  (0, r.jsx)(x, { quest: t, onClose: o }),
                  (0, r.jsxs)("div", {
                      className: U.LA,
                      children: [
                          p.map((e) =>
                              (0, r.jsx)(
                                  G,
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
                          Array.from({ length: I }, (e, t) => (0, r.jsx)(V, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function B(e) {
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
        m = (0, D.Ut)(),
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
            return (0, r.jsx)(F, {
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
                    questContentCTA: L.Cy.SPONSORED_QUEST_SHEET,
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
let H = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(b.R, {
              questOrQuests: e.quest,
              questContent: y.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(B, { ...e, impressionRef: t }),
          });
};
