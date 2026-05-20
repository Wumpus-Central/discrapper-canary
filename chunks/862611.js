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
    f = n(192308),
    h = n(922016),
    p = n(775602),
    E = n(429913),
    m = n(409626),
    g = n(80552),
    A = n(459746),
    I = n(311043),
    T = n(569926),
    S = n(363195),
    N = n(760751),
    y = n(174459),
    C = n(486020),
    v = n(507107),
    O = n(859387),
    R = n(18437),
    b = n(590202),
    D = n(73473),
    L = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    w = n(190107),
    M = n(652215),
    P = n(375708),
    x = n(420298);
let U = (e) => {
        let t,
            n,
            i,
            { quest: s, onClose: o } = e,
            l = (0, a.bG)([S.A], () => S.A.getState().theme),
            f = (0, u.M)(l) ? M.NJ8.DARK : M.NJ8.LIGHT;
        return (0, r.jsxs)("div", {
            className: x.N1,
            children: [
                (0, r.jsxs)("div", {
                    className: x.VW,
                    children: [
                        (0, r.jsx)("img", {
                            className: x.rC,
                            alt: s.config.messages.gameTitle,
                            src: (0, O.tW)(s, O.fY.GAME_TILE, f).url,
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
    k = (e) => {
        let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: u, onGameProfileModalClose: c } = e,
            _ = (0, R.Ut)(),
            h = (0, a.bG)([p.A], () => p.A.useReducedMotion),
            E = s.useRef(null),
            g = null != i.gameRecord,
            I = () => {
                _({
                    questId: t.id,
                    questContent: v.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: b.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: o,
                });
            },
            T = async () => {
                g &&
                    (_({
                        questId: t.id,
                        questContent: v.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: b.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: o,
                    }),
                    await (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("52197"),
                                n.e("8802"),
                                n.e("81857"),
                                n.e("8516"),
                                n.e("63897"),
                                n.e("41816"),
                                n.e("95700"),
                                n.e("19397"),
                                n.e("5959"),
                                n.e("46461"),
                                n.e("67485"),
                                n.e("76090"),
                                n.e("12289"),
                                n.e("45650"),
                                n.e("27660"),
                                n.e("85484"),
                                n.e("98848"),
                                n.e("5067"),
                                n.e("18320"),
                                n.e("64422"),
                                n.e("55990"),
                                n.e("6432"),
                                n.e("36407"),
                                n.e("69134"),
                                n.e("79705"),
                                n.e("33957"),
                                n.e("94193"),
                                n.e("30656"),
                                n.e("56386"),
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
                                n.e("30938"),
                                n.e("96643"),
                                n.e("94493"),
                                n.e("92789"),
                                n.e("47834"),
                                n.e("74016"),
                                n.e("19551"),
                                n.e("84569"),
                                n.e("6338"),
                                n.e("96811"),
                                n.e("7743"),
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
                                n.e("1368"),
                                n.e("58038"),
                                n.e("93159"),
                                n.e("31716"),
                                n.e("8751"),
                                n.e("62931"),
                                n.e("81987"),
                                n.e("50417"),
                                n.e("62465"),
                                n.e("34530"),
                                n.e("9233"),
                                n.e("42724"),
                                n.e("86814"),
                                n.e("25949"),
                                n.e("54975"),
                                n.e("20287"),
                                n.e("71133"),
                                n.e("77084"),
                                n.e("54625"),
                                n.e("49697"),
                                n.e("80230"),
                                n.e("37687"),
                                n.e("48900"),
                                n.e("95093"),
                                n.e("63645"),
                                n.e("71234"),
                                n.e("27773"),
                                n.e("5636"),
                                n.e("87196"),
                                n.e("834"),
                                n.e("60177"),
                                n.e("21570"),
                                n.e("69933"),
                                n.e("26728"),
                                n.e("1354"),
                                n.e("20282"),
                                n.e("54282"),
                                n.e("23276"),
                                n.e("78412"),
                                n.e("63213"),
                                n.e("9662"),
                                n.e("80239"),
                                n.e("75016"),
                                n.e("4193"),
                                n.e("95444"),
                                n.e("76087"),
                                n.e("48720"),
                                n.e("33134"),
                                n.e("80112"),
                                n.e("59880"),
                                n.e("6723"),
                                n.e("54791"),
                                n.e("18024"),
                                n.e("25279"),
                                n.e("54819"),
                                n.e("31445"),
                                n.e("36877"),
                                n.e("77473"),
                                n.e("69747"),
                                n.e("38501"),
                                n.e("27323"),
                                n.e("35996"),
                                n.e("37977"),
                                n.e("26294"),
                                n.e("26437"),
                                n.e("72877"),
                                n.e("63618"),
                                n.e("21856"),
                                n.e("21930"),
                                n.e("11133"),
                                n.e("8694"),
                                n.e("98329"),
                                n.e("47018"),
                                n.e("21957"),
                                n.e("93766"),
                                n.e("72963"),
                                n.e("22067"),
                                n.e("54622"),
                                n.e("93461"),
                                n.e("27966"),
                                n.e("4199"),
                                n.e("83827"),
                                n.e("69059"),
                                n.e("96268"),
                                n.e("54241"),
                                n.e("78010"),
                                n.e("36926"),
                                n.e("93767"),
                                n.e("1962"),
                                n.e("7406"),
                                n.e("32737"),
                                n.e("55033"),
                                n.e("21041"),
                                n.e("37937"),
                                n.e("86454"),
                                n.e("38672"),
                                n.e("57850"),
                                n.e("83295"),
                                n.e("99215"),
                            ]).then(n.bind(n, 980385));
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
                    if (null == E.current || h) return;
                    let t = E.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        i = e.clientY - t.top,
                        r = t.width / 2,
                        s = t.height / 2;
                    E.current.style.transform = `rotateX(${-(((i - s) / s) * 15)}deg) rotateY(${((n - r) / r) * 15}deg)`;
                },
                [h],
            ),
            N = s.useCallback(() => {
                null == E.current || h || (E.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [h]);
        return (0, r.jsx)(l.m, {
            text: i.name,
            children: (0, r.jsx)(d.D, {
                className: x.zR,
                onClick: T,
                onMouseMove: S,
                onMouseLeave: N,
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
        h = (0, a.bG)([I.A], () => i.some((e) => I.A.didFetchingFail(e))),
        p = (0, a.yK)([I.A], () =>
            i
                .map((e) => I.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, g.oS)(e.applicationId))
                .slice(0, 10),
        ),
        m = (0, a.bG)([N.A, I.A], () => {
            let e = new Set(p.map((e) => e.applicationId));
            return i
                .filter((t) => !e.has(t))
                .filter((e) => null == I.A.getGame(e))
                .map((e) => {
                    let t = N.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = C.Ay.getApplicationIconURL({
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
        v = !_ && 0 === A.length,
        O = h || v;
    if (
        (s.useEffect(() => {
            if (O) {
                let e = h ? L.FETCH_FAILED : L.NO_GAMES_AVAILABLE;
                y.default.track(M.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    o(),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [O, h, t.id, o]),
        _ && !O)
    ) {
        let e = Math.min(i.length, 10);
        return (0, r.jsxs)("div", {
            className: x.kL,
            children: [
                (0, r.jsx)(U, { quest: t, onClose: o }),
                (0, r.jsx)("div", {
                    className: x.LA,
                    children: i.slice(0, e).map((e) => (0, r.jsx)("div", { className: x.Vj }, e)),
                }),
            ],
        });
    }
    return O
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  u.current = e;
              },
              className: x.kL,
              children: [
                  (0, r.jsx)(U, { quest: t, onClose: o }),
                  (0, r.jsxs)("div", {
                      className: x.LA,
                      children: [
                          A.map((e) =>
                              (0, r.jsx)(
                                  k,
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
        [_, f] = s.useState(!1),
        p = (0, R.Ut)(),
        E = s.useRef(null),
        m = t?.current != null,
        g = m ? t : E,
        A = () => {
            f(!0);
        },
        I = () => {
            f(!1);
        };
    return (0, r.jsx)(h.Y, {
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
              questContent: v.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(V, { ...e, impressionRef: t }),
          });
};
