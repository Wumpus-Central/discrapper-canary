"use strict";
n.d(t, { A: () => B });
var i,
    r = n(627968),
    s = n(64700),
    a = n(17928),
    o = n(453903),
    l = n(990078),
    u = n(462887),
    c = n(834730),
    d = n(939249),
    _ = n(789645),
    h = n(192308),
    f = n(922016),
    p = n(775602),
    E = n(429913),
    m = n(409626),
    g = n(80552),
    A = n(459746),
    I = n(311043),
    T = n(569926),
    S = n(363195),
    y = n(760751),
    N = n(174459),
    v = n(486020),
    C = n(507107),
    R = n(551875),
    O = n(18437),
    b = n(590202),
    D = n(73473),
    L = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    w = n(190107),
    M = n(652215),
    P = n(375708),
    x = n(420298);
let k = (e) => {
        let t,
            n,
            i,
            { quest: s, onClose: o } = e,
            l = (0, a.bG)([S.A], () => S.A.getState().theme),
            h = (0, u.M)(l) ? M.NJ8.DARK : M.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: x.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: x.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: x.rC,
                            alt: s.config.messages.gameTitle,
                            src: (0, R.tW)(s, R.fY.GAME_TILE, h).url,
                        }),
                        (0, r.jsxs)("div", {
                            className: x.if,
                            children: [
                                (0, r.jsx)(c.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        ((t = {
                                            [w.Li.PACKAGE_ACTION_ADVENTURE]: P.t.PYFVdf,
                                            [w.Li.PACKAGE_RPG_MMO]: P.t.rFQo2F,
                                            [w.Li.PACKAGE_RACING_SPORTS]: P.t.zDRa6g,
                                            [w.Li.PACKAGE_SANDBOX_CREATIVE]: P.t.vz9U2Q,
                                            [w.Li.PACKAGE_FAMILY_FRIENDLY]: P.t.IOiAE0,
                                            [w.Li.PACKAGE_HOLIDAY_SEASON]: P.t.cJPqvD,
                                            [w.Li.PACKAGE_NEW_YEARS]: P.t.S0w2mv,
                                        }),
                                        (i =
                                            (null != (n = s.config.features.find((e) => e in t)) ? t[n] : null) ??
                                            P.t["D+DkEH"]),
                                        P.intl.string(i)),
                                }),
                                (0, r.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: P.intl.string(P.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(d.D, {
                    className: x.b,
                    "aria-label": P.intl.string(P.t.cpT0Cq),
                    onClick: o,
                    children: (0, r.jsx)(_.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    U = (e) => {
        let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: u, onGameProfileModalClose: c } = e,
            _ = (0, O.Ut)(),
            f = (0, a.bG)([p.A], () => p.A.useReducedMotion),
            E = s.useRef(null),
            g = null != i.gameRecord,
            I = () => {
                _({
                    questId: t.id,
                    questContent: C.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: b.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: o,
                });
            },
            T = async () => {
                g &&
                    (_({
                        questId: t.id,
                        questContent: C.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: b.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: o,
                    }),
                    await (0, h.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("60817"),
                                n.e("16639"),
                                n.e("72813"),
                                n.e("57014"),
                                n.e("87521"),
                                n.e("63336"),
                                n.e("56377"),
                                n.e("77083"),
                                n.e("17214"),
                                n.e("64509"),
                                n.e("96330"),
                                n.e("84153"),
                                n.e("41971"),
                                n.e("954"),
                                n.e("21838"),
                                n.e("48307"),
                                n.e("741"),
                                n.e("58735"),
                                n.e("18090"),
                                n.e("89001"),
                                n.e("55990"),
                                n.e("26266"),
                                n.e("64625"),
                                n.e("25336"),
                                n.e("333"),
                                n.e("64171"),
                                n.e("41475"),
                                n.e("48100"),
                                n.e("76825"),
                                n.e("98394"),
                                n.e("17006"),
                                n.e("44910"),
                                n.e("23924"),
                                n.e("42205"),
                                n.e("71091"),
                                n.e("28367"),
                                n.e("10471"),
                                n.e("35429"),
                                n.e("63232"),
                                n.e("11301"),
                                n.e("60235"),
                                n.e("64827"),
                                n.e("7167"),
                                n.e("96643"),
                                n.e("94493"),
                                n.e("92789"),
                                n.e("47834"),
                                n.e("19551"),
                                n.e("84569"),
                                n.e("62156"),
                                n.e("6338"),
                                n.e("5636"),
                                n.e("3178"),
                                n.e("30124"),
                                n.e("45959"),
                                n.e("60658"),
                                n.e("8304"),
                                n.e("18573"),
                                n.e("55936"),
                                n.e("31988"),
                                n.e("39667"),
                                n.e("5812"),
                                n.e("26073"),
                                n.e("34303"),
                                n.e("28866"),
                                n.e("2419"),
                                n.e("58038"),
                                n.e("93159"),
                                n.e("25246"),
                                n.e("36458"),
                                n.e("8751"),
                                n.e("62931"),
                                n.e("50417"),
                                n.e("45679"),
                                n.e("9233"),
                                n.e("34530"),
                                n.e("72963"),
                                n.e("42724"),
                                n.e("37977"),
                                n.e("86814"),
                                n.e("50117"),
                                n.e("54975"),
                                n.e("20287"),
                                n.e("71133"),
                                n.e("77084"),
                                n.e("28152"),
                                n.e("54625"),
                                n.e("49697"),
                                n.e("80230"),
                                n.e("37687"),
                                n.e("48900"),
                                n.e("95093"),
                                n.e("71234"),
                                n.e("27773"),
                                n.e("96137"),
                                n.e("1227"),
                                n.e("60177"),
                                n.e("21570"),
                                n.e("69933"),
                                n.e("1354"),
                                n.e("20282"),
                                n.e("58984"),
                                n.e("54282"),
                                n.e("23276"),
                                n.e("78412"),
                                n.e("63213"),
                                n.e("35878"),
                                n.e("80239"),
                                n.e("75016"),
                                n.e("29354"),
                                n.e("30938"),
                                n.e("95444"),
                                n.e("76087"),
                                n.e("48720"),
                                n.e("25279"),
                                n.e("36877"),
                                n.e("91254"),
                                n.e("33134"),
                                n.e("59880"),
                                n.e("6723"),
                                n.e("54791"),
                                n.e("18024"),
                                n.e("54819"),
                                n.e("21574"),
                                n.e("31445"),
                                n.e("81987"),
                                n.e("77473"),
                                n.e("27323"),
                                n.e("69747"),
                                n.e("3131"),
                                n.e("38501"),
                                n.e("26437"),
                                n.e("35996"),
                                n.e("72877"),
                                n.e("26294"),
                                n.e("21930"),
                                n.e("63618"),
                                n.e("21856"),
                                n.e("98329"),
                                n.e("47018"),
                                n.e("11133"),
                                n.e("21957"),
                                n.e("93766"),
                                n.e("8694"),
                                n.e("54622"),
                                n.e("70683"),
                                n.e("4199"),
                                n.e("22067"),
                                n.e("93461"),
                                n.e("2260"),
                                n.e("83827"),
                                n.e("28203"),
                                n.e("96268"),
                                n.e("54241"),
                                n.e("93767"),
                                n.e("1962"),
                                n.e("7406"),
                                n.e("32737"),
                                n.e("36926"),
                                n.e("36973"),
                                n.e("97150"),
                                n.e("37937"),
                                n.e("21041"),
                                n.e("86454"),
                                n.e("38672"),
                                n.e("26102"),
                                n.e("83295"),
                                n.e("99215"),
                            ]).then(n.bind(n, 779669));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    gameId: i.applicationId,
                                    source: m.Ob.GameSheet,
                                    trackExternalAction: I,
                                    ...t,
                                });
                        },
                        { onCloseCallback: c },
                    ),
                    u());
            },
            S = s.useCallback(
                (e) => {
                    if (null == E.current || f) return;
                    let t = E.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        i = e.clientY - t.top,
                        r = t.width / 2,
                        s = t.height / 2;
                    E.current.style.transform = `rotateX(${-(((i - s) / s) * 15)}deg) rotateY(${((n - r) / r) * 15}deg)`;
                },
                [f],
            ),
            y = s.useCallback(() => {
                null == E.current || f || (E.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [f]);
        return (0, r.jsx)(l.m, {
            text: i.name,
            children: (0, r.jsx)(d.D, {
                className: x.zR,
                onClick: T,
                onMouseMove: S,
                onMouseLeave: y,
                children: (0, r.jsx)("div", {
                    ref: E,
                    className: x._M,
                    children:
                        null != i.gameRecord
                            ? (0, r.jsx)(A.A, { game: i.gameRecord, className: x.xe, size: A.w.SMALL })
                            : null != i.fallbackCoverImageUrl
                              ? (0, r.jsx)("img", { src: i.fallbackCoverImageUrl, alt: i.name, className: x.xe })
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
function F(e) {
    let {
        quest: t,
        applications: i,
        onClose: o,
        sourceQuestContent: l,
        impressionRef: u,
        onGameProfileModalOpen: c,
        onGameProfileModalClose: d,
    } = e;
    (0, E.A)(i), (0, T.x)(i);
    let _ = (0, a.bG)([I.A], () => i.some((e) => I.A.isFetching(e))),
        f = (0, a.bG)([I.A], () => i.some((e) => I.A.didFetchingFail(e))),
        p = (0, a.yK)([I.A], () =>
            i
                .map((e) => I.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, g.oS)(e.applicationId))
                .slice(0, 10),
        ),
        m = (0, a.bG)([y.A, I.A], () => {
            let e = new Set(p.map((e) => e.applicationId));
            return i
                .filter((t) => !e.has(t))
                .filter((e) => null == I.A.getGame(e))
                .map((e) => {
                    let t = y.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = v.Ay.getApplicationIconURL({
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
                    ...p.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...m.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [p, m],
        ),
        S = s.useMemo(() => {
            let e = A.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [A.length]),
        C = !_ && 0 === A.length,
        R = f || C;
    if (
        (s.useEffect(() => {
            if (R) {
                let e = f ? L.FETCH_FAILED : L.NO_GAMES_AVAILABLE;
                N.default.track(M.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    o(),
                    (0, h.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [R, f, t.id, o]),
        _ && !R)
    ) {
        let e = Math.min(i.length, 10);
        return (0, r.jsxs)("div", {
            className: x.kL,
            children: [
                (0, r.jsx)(k, { quest: t, onClose: o }),
                (0, r.jsx)("div", {
                    className: x.LA,
                    children: i.slice(0, e).map((e) => (0, r.jsx)("div", { className: x.Vj }, e)),
                }),
            ],
        });
    }
    return R
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  u.current = e;
              },
              className: x.kL,
              children: [
                  (0, r.jsx)(k, { quest: t, onClose: o }),
                  (0, r.jsxs)("div", {
                      className: x.LA,
                      children: [
                          A.map((e) =>
                              (0, r.jsx)(
                                  U,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: l,
                                      onGameProfileModalOpen: c,
                                      onGameProfileModalClose: d,
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
function V(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: i,
            onGameSheetOpened: a,
            onGameSheetClosed: l,
            quest: u,
            sourceQuestContent: c,
            impressionRef: d,
        } = e,
        [_, h] = s.useState(!1),
        p = (0, O.Ut)(),
        E = s.useRef(null),
        m = t?.current != null,
        g = m ? t : E,
        A = () => {
            h(!0);
        },
        I = () => {
            h(!1);
        };
    return (0, r.jsx)(f.Y, {
        targetElementRef: g,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(F, {
                quest: u,
                applications: n,
                onClose: t,
                sourceQuestContent: c,
                impressionRef: d,
                onGameProfileModalOpen: A,
                onGameProfileModalClose: I,
            });
        },
        onRequestOpen: () => {
            a?.(),
                p({
                    questId: u.id,
                    questContent: c,
                    questContentCTA: b.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: c,
                });
        },
        onRequestClose: () => {
            if (_) return o.o;
            l?.();
        },
        position: m ? "right" : "top",
        align: m ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => i(e, E),
    });
}
let B = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(D.R, {
              questOrQuests: e.quest,
              questContent: C.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(V, { ...e, impressionRef: t }),
          });
};
