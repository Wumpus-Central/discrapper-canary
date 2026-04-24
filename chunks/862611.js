"use strict";
n.d(t, { A: () => F });
var l,
    i = n(627968),
    s = n(64700),
    a = n(17928),
    r = n(453903),
    o = n(990078),
    c = n(462887),
    u = n(834730),
    d = n(939249),
    h = n(789645),
    m = n(192308),
    p = n(922016),
    f = n(775602),
    g = n(429913),
    _ = n(409626),
    x = n(713900),
    C = n(459746),
    A = n(311043),
    E = n(569926),
    I = n(363195),
    v = n(760751),
    y = n(954571),
    b = n(486020),
    S = n(507107),
    N = n(859387),
    j = n(18437),
    T = n(590202),
    w = n(73473),
    R = (((l = {}).FETCH_FAILED = "FETCH_FAILED"), (l.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), l),
    L = n(654487),
    k = n(652215),
    M = n(985018),
    O = n(420298);
let P = (e) => {
        let t,
            n,
            l,
            { quest: s, onClose: r } = e,
            o = (0, a.bG)([I.A], () => I.A.getState().theme),
            m = (0, c.M)(o) ? k.NJ8.DARK : k.NJ8.LIGHT;
        return (0, i.jsxs)("div", {
            className: O.N1,
            children: [
                (0, i.jsxs)("div", {
                    className: O.VW,
                    children: [
                        (0, i.jsx)("img", {
                            className: O.rC,
                            alt: s.config.messages.gameTitle,
                            src: (0, N.tW)(s, N.fY.GAME_TILE, m).url,
                        }),
                        (0, i.jsxs)("div", {
                            className: O.if,
                            children: [
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        ((t = {
                                            [L.Li.PACKAGE_ACTION_ADVENTURE]: M.t.PYFVdf,
                                            [L.Li.PACKAGE_RPG_MMO]: M.t.rFQo2F,
                                            [L.Li.PACKAGE_RACING_SPORTS]: M.t.zDRa6g,
                                            [L.Li.PACKAGE_SANDBOX_CREATIVE]: M.t.vz9U2Q,
                                            [L.Li.PACKAGE_FAMILY_FRIENDLY]: M.t.IOiAE0,
                                            [L.Li.PACKAGE_HOLIDAY_SEASON]: M.t.cJPqvD,
                                            [L.Li.PACKAGE_NEW_YEARS]: M.t.S0w2mv,
                                        }),
                                        (l =
                                            (null != (n = s.config.features.find((e) => e in t)) ? t[n] : null) ??
                                            M.t["D+DkEH"]),
                                        M.intl.string(l)),
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: M.intl.string(M.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(d.D, {
                    className: O.b,
                    "aria-label": M.intl.string(M.t.cpT0Cq),
                    onClick: r,
                    children: (0, i.jsx)(h.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    D = (e) => {
        let { quest: t, game: l, sourceQuestContent: r, onGameProfileModalOpen: c, onGameProfileModalClose: u } = e,
            h = (0, j.Ut)(),
            p = (0, a.bG)([f.A], () => f.A.useReducedMotion),
            g = s.useRef(null),
            x = null != l.gameRecord,
            A = () => {
                h({
                    questId: t.id,
                    questContent: S.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: T.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: r,
                });
            },
            E = async () => {
                x &&
                    (h({
                        questId: t.id,
                        questContent: S.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: T.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: r,
                    }),
                    await (0, m.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("32292"),
                                n.e("28367"),
                                n.e("45174"),
                                n.e("85519"),
                                n.e("87963"),
                                n.e("37266"),
                                n.e("55057"),
                                n.e("76021"),
                                n.e("63229"),
                                n.e("31988"),
                                n.e("55343"),
                                n.e("34983"),
                                n.e("48900"),
                                n.e("20735"),
                                n.e("27846"),
                                n.e("8306"),
                                n.e("10567"),
                                n.e("43436"),
                                n.e("22802"),
                                n.e("54865"),
                                n.e("29059"),
                                n.e("72822"),
                                n.e("49914"),
                                n.e("22701"),
                                n.e("60114"),
                            ]).then(n.bind(n, 179985));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    gameId: l.applicationId,
                                    source: _.Ob.GameSheet,
                                    trackExternalAction: A,
                                    ...t,
                                });
                        },
                        { onCloseCallback: u },
                    ),
                    c());
            },
            I = s.useCallback(
                (e) => {
                    if (null == g.current || p) return;
                    let t = g.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        l = e.clientY - t.top,
                        i = t.width / 2,
                        s = t.height / 2;
                    g.current.style.transform = `rotateX(${-(((l - s) / s) * 15)}deg) rotateY(${((n - i) / i) * 15}deg)`;
                },
                [p],
            ),
            v = s.useCallback(() => {
                null == g.current || p || (g.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [p]);
        return (0, i.jsx)(o.m, {
            text: l.name,
            children: (0, i.jsx)(d.D, {
                className: O.zR,
                onClick: E,
                onMouseMove: I,
                onMouseLeave: v,
                children: (0, i.jsx)("div", {
                    ref: g,
                    className: O._M,
                    children:
                        null != l.gameRecord
                            ? (0, i.jsx)(C.A, { game: l.gameRecord, className: O.xe, size: C.w.SMALL })
                            : null != l.fallbackCoverImageUrl
                              ? (0, i.jsx)("img", { src: l.fallbackCoverImageUrl, alt: l.name, className: O.xe })
                              : null,
                }),
            }),
        });
    },
    U = () =>
        (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "75",
            height: "96",
            viewBox: "0 0 75 96",
            fill: "none",
            children: [
                (0, i.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "73",
                    height: "94",
                    rx: "8",
                    fill: "var(--background-surface-high)",
                }),
                (0, i.jsx)("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "74",
                    height: "95",
                    rx: "8.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
                (0, i.jsx)("path", {
                    d: "M2.53418 3L73.0342 93.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
            ],
        });
function V(e) {
    let {
        quest: t,
        applications: l,
        onClose: r,
        sourceQuestContent: o,
        impressionRef: c,
        onGameProfileModalOpen: u,
        onGameProfileModalClose: d,
    } = e;
    (0, g.A)(l), (0, E.x)(l);
    let h = (0, a.bG)([A.A], () => l.some((e) => A.A.isFetching(e))),
        p = (0, a.bG)([A.A], () => l.some((e) => A.A.didFetchingFail(e))),
        f = (0, a.yK)([A.A], () =>
            l
                .map((e) => A.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, x.oS)(e.applicationId))
                .slice(0, 10),
        ),
        _ = (0, a.bG)([v.A, A.A], () => {
            let e = new Set(f.map((e) => e.applicationId));
            return l
                .filter((t) => !e.has(t))
                .filter((e) => null == A.A.getGame(e))
                .map((e) => {
                    let t = v.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = b.Ay.getApplicationIconURL({
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
        C = s.useMemo(
            () =>
                [
                    ...f.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ..._.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [f, _],
        ),
        I = s.useMemo(() => {
            let e = C.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [C.length]),
        S = !h && 0 === C.length,
        N = p || S;
    if (
        (s.useEffect(() => {
            if (N) {
                let e = p ? R.FETCH_FAILED : R.NO_GAMES_AVAILABLE;
                y.default.track(k.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    r(),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
            }
        }, [N, p, t.id, r]),
        h && !N)
    ) {
        let e = Math.min(l.length, 10);
        return (0, i.jsxs)("div", {
            className: O.kL,
            children: [
                (0, i.jsx)(P, { quest: t, onClose: r }),
                (0, i.jsx)("div", {
                    className: O.LA,
                    children: l.slice(0, e).map((e) => (0, i.jsx)("div", { className: O.Vj }, e)),
                }),
            ],
        });
    }
    return N
        ? null
        : (0, i.jsxs)("div", {
              ref: (e) => {
                  c.current = e;
              },
              className: O.kL,
              children: [
                  (0, i.jsx)(P, { quest: t, onClose: r }),
                  (0, i.jsxs)("div", {
                      className: O.LA,
                      children: [
                          C.map((e) =>
                              (0, i.jsx)(
                                  D,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: o,
                                      onGameProfileModalOpen: u,
                                      onGameProfileModalClose: d,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: I }, (e, t) => (0, i.jsx)(U, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function G(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: l,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
            quest: c,
            sourceQuestContent: u,
            impressionRef: d,
        } = e,
        [h, m] = s.useState(!1),
        f = (0, j.Ut)(),
        g = s.useRef(null),
        _ = t?.current != null,
        x = _ ? t : g,
        C = () => {
            m(!0);
        },
        A = () => {
            m(!1);
        };
    return (0, i.jsx)(p.Y, {
        targetElementRef: x,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(V, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: u,
                impressionRef: d,
                onGameProfileModalOpen: C,
                onGameProfileModalClose: A,
            });
        },
        onRequestOpen: () => {
            a?.(),
                f({
                    questId: c.id,
                    questContent: u,
                    questContentCTA: T.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: u,
                });
        },
        onRequestClose: () => {
            if (h) return r.o;
            o?.();
        },
        position: _ ? "right" : "top",
        align: _ ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => l(e, g),
    });
}
let F = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, i.jsx)(w.R, {
              questOrQuests: e.quest,
              questContent: S.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, i.jsx)(G, { ...e, impressionRef: t }),
          });
};
