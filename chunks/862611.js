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
    x = n(409626),
    C = n(713900),
    A = n(459746),
    E = n(311043),
    I = n(569926),
    y = n(363195),
    v = n(760751),
    S = n(954571),
    N = n(486020),
    j = n(507107),
    _ = n(859387),
    T = n(18437),
    b = n(590202),
    R = n(73473),
    O = (((l = {}).FETCH_FAILED = "FETCH_FAILED"), (l.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), l),
    L = n(654487),
    w = n(652215),
    M = n(985018),
    k = n(420298);
let P = (e) => {
        let t,
            n,
            l,
            { quest: s, onClose: r } = e,
            o = (0, a.bG)([y.A], () => y.A.getState().theme),
            m = (0, c.M)(o) ? w.NJ8.DARK : w.NJ8.LIGHT;
        return (0, i.jsxs)("div", {
            className: k.N1,
            children: [
                (0, i.jsxs)("div", {
                    className: k.VW,
                    children: [
                        (0, i.jsx)("img", {
                            className: k.rC,
                            alt: s.config.messages.gameTitle,
                            src: (0, _.tW)(s, _.fY.GAME_TILE, m).url,
                        }),
                        (0, i.jsxs)("div", {
                            className: k.if,
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
                    className: k.b,
                    "aria-label": M.intl.string(M.t.cpT0Cq),
                    onClick: r,
                    children: (0, i.jsx)(h.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    D = (e) => {
        let { quest: t, game: l, sourceQuestContent: r, onGameProfileModalOpen: c, onGameProfileModalClose: u } = e,
            h = (0, T.Ut)(),
            p = (0, a.bG)([f.A], () => f.A.useReducedMotion),
            g = s.useRef(null),
            C = null != l.gameRecord,
            E = () => {
                h({
                    questId: t.id,
                    questContent: j.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: b.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: r,
                });
            },
            I = async () => {
                C &&
                    (h({
                        questId: t.id,
                        questContent: j.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: b.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: r,
                    }),
                    await (0, m.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("3215"),
                                n.e("92652"),
                                n.e("34646"),
                                n.e("63397"),
                                n.e("35379"),
                                n.e("45235"),
                                n.e("61659"),
                                n.e("97189"),
                                n.e("40841"),
                                n.e("69273"),
                                n.e("89317"),
                                n.e("63941"),
                                n.e("63009"),
                                n.e("84580"),
                                n.e("62370"),
                                n.e("45650"),
                                n.e("24059"),
                                n.e("51402"),
                                n.e("27660"),
                                n.e("17764"),
                                n.e("85484"),
                                n.e("89516"),
                                n.e("16384"),
                                n.e("39501"),
                                n.e("3256"),
                                n.e("53539"),
                                n.e("19145"),
                                n.e("18091"),
                                n.e("79705"),
                                n.e("33957"),
                                n.e("94193"),
                                n.e("73840"),
                                n.e("95957"),
                                n.e("44915"),
                                n.e("23924"),
                                n.e("15510"),
                                n.e("48226"),
                                n.e("20287"),
                                n.e("28367"),
                                n.e("35429"),
                                n.e("10471"),
                                n.e("63232"),
                                n.e("64827"),
                                n.e("30938"),
                                n.e("23808"),
                                n.e("11301"),
                                n.e("60235"),
                                n.e("61737"),
                                n.e("79428"),
                                n.e("29963"),
                                n.e("47834"),
                                n.e("98329"),
                                n.e("20317"),
                                n.e("84569"),
                                n.e("2368"),
                                n.e("27084"),
                                n.e("24313"),
                                n.e("48405"),
                                n.e("63185"),
                                n.e("19551"),
                                n.e("84150"),
                                n.e("45959"),
                                n.e("18573"),
                                n.e("55057"),
                                n.e("37794"),
                                n.e("26073"),
                                n.e("7743"),
                                n.e("34303"),
                                n.e("48172"),
                                n.e("28866"),
                                n.e("54961"),
                                n.e("8304"),
                                n.e("58038"),
                                n.e("93159"),
                                n.e("55936"),
                                n.e("11566"),
                                n.e("21106"),
                                n.e("31988"),
                                n.e("94723"),
                                n.e("62931"),
                                n.e("81987"),
                                n.e("58007"),
                                n.e("5812"),
                                n.e("17363"),
                                n.e("34530"),
                                n.e("26437"),
                                n.e("28561"),
                                n.e("9233"),
                                n.e("69747"),
                                n.e("42724"),
                                n.e("54975"),
                                n.e("21570"),
                                n.e("49697"),
                                n.e("77265"),
                                n.e("71133"),
                                n.e("77084"),
                                n.e("34983"),
                                n.e("96565"),
                                n.e("86814"),
                                n.e("22822"),
                                n.e("75627"),
                                n.e("37687"),
                                n.e("68904"),
                                n.e("95093"),
                                n.e("62615"),
                                n.e("48900"),
                                n.e("60177"),
                                n.e("21976"),
                                n.e("1006"),
                                n.e("79707"),
                                n.e("27773"),
                                n.e("20007"),
                                n.e("99518"),
                                n.e("55577"),
                                n.e("59880"),
                                n.e("78412"),
                                n.e("9662"),
                                n.e("80239"),
                                n.e("23276"),
                                n.e("54791"),
                                n.e("255"),
                                n.e("68479"),
                                n.e("10567"),
                                n.e("39286"),
                                n.e("63645"),
                                n.e("88343"),
                                n.e("31445"),
                                n.e("5636"),
                                n.e("95444"),
                                n.e("38472"),
                                n.e("48720"),
                                n.e("834"),
                                n.e("33134"),
                                n.e("18024"),
                                n.e("77446"),
                                n.e("84317"),
                                n.e("25279"),
                                n.e("67176"),
                                n.e("20858"),
                                n.e("54625"),
                                n.e("77473"),
                                n.e("166"),
                                n.e("36926"),
                                n.e("35996"),
                                n.e("26574"),
                                n.e("63618"),
                                n.e("72877"),
                                n.e("21856"),
                                n.e("72963"),
                                n.e("27323"),
                                n.e("36877"),
                                n.e("20131"),
                                n.e("37977"),
                                n.e("21930"),
                                n.e("47018"),
                                n.e("79724"),
                                n.e("26294"),
                                n.e("93461"),
                                n.e("64072"),
                                n.e("11133"),
                                n.e("86313"),
                                n.e("22067"),
                                n.e("21957"),
                                n.e("93766"),
                                n.e("83827"),
                                n.e("54622"),
                                n.e("17859"),
                                n.e("51678"),
                                n.e("23065"),
                                n.e("36973"),
                                n.e("7406"),
                                n.e("93767"),
                                n.e("69059"),
                                n.e("78010"),
                                n.e("58838"),
                                n.e("38714"),
                                n.e("80112"),
                                n.e("35653"),
                                n.e("1962"),
                                n.e("32737"),
                                n.e("21041"),
                                n.e("68261"),
                                n.e("69237"),
                                n.e("54360"),
                                n.e("29624"),
                                n.e("37937"),
                                n.e("13079"),
                                n.e("94698"),
                                n.e("38672"),
                                n.e("74218"),
                            ]).then(n.bind(n, 179985));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    gameId: l.applicationId,
                                    source: x.Ob.GameSheet,
                                    trackExternalAction: E,
                                    ...t,
                                });
                        },
                        { onCloseCallback: u },
                    ),
                    c());
            },
            y = s.useCallback(
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
                className: k.zR,
                onClick: I,
                onMouseMove: y,
                onMouseLeave: v,
                children: (0, i.jsx)("div", {
                    ref: g,
                    className: k._M,
                    children:
                        null != l.gameRecord
                            ? (0, i.jsx)(A.A, { game: l.gameRecord, className: k.xe, size: A.w.SMALL })
                            : null != l.fallbackCoverImageUrl
                              ? (0, i.jsx)("img", { src: l.fallbackCoverImageUrl, alt: l.name, className: k.xe })
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
    (0, g.A)(l), (0, I.x)(l);
    let h = (0, a.bG)([E.A], () => l.some((e) => E.A.isFetching(e))),
        p = (0, a.bG)([E.A], () => l.some((e) => E.A.didFetchingFail(e))),
        f = (0, a.yK)([E.A], () =>
            l
                .map((e) => E.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, C.oS)(e.applicationId))
                .slice(0, 10),
        ),
        x = (0, a.bG)([v.A, E.A], () => {
            let e = new Set(f.map((e) => e.applicationId));
            return l
                .filter((t) => !e.has(t))
                .filter((e) => null == E.A.getGame(e))
                .map((e) => {
                    let t = v.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = N.Ay.getApplicationIconURL({
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
                    ...f.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...x.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [f, x],
        ),
        y = s.useMemo(() => {
            let e = A.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [A.length]),
        j = !h && 0 === A.length,
        _ = p || j;
    if (
        (s.useEffect(() => {
            if (_) {
                let e = p ? O.FETCH_FAILED : O.NO_GAMES_AVAILABLE;
                S.default.track(w.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    r(),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
            }
        }, [_, p, t.id, r]),
        h && !_)
    ) {
        let e = Math.min(l.length, 10);
        return (0, i.jsxs)("div", {
            className: k.kL,
            children: [
                (0, i.jsx)(P, { quest: t, onClose: r }),
                (0, i.jsx)("div", {
                    className: k.LA,
                    children: l.slice(0, e).map((e) => (0, i.jsx)("div", { className: k.Vj }, e)),
                }),
            ],
        });
    }
    return _
        ? null
        : (0, i.jsxs)("div", {
              ref: (e) => {
                  c.current = e;
              },
              className: k.kL,
              children: [
                  (0, i.jsx)(P, { quest: t, onClose: r }),
                  (0, i.jsxs)("div", {
                      className: k.LA,
                      children: [
                          A.map((e) =>
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
                          Array.from({ length: y }, (e, t) => (0, i.jsx)(U, {}, `placeholder-${t}`)),
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
        f = (0, T.Ut)(),
        g = s.useRef(null),
        x = t?.current != null,
        C = x ? t : g,
        A = () => {
            m(!0);
        },
        E = () => {
            m(!1);
        };
    return (0, i.jsx)(p.Y, {
        targetElementRef: C,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(V, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: u,
                impressionRef: d,
                onGameProfileModalOpen: A,
                onGameProfileModalClose: E,
            });
        },
        onRequestOpen: () => {
            a?.(),
                f({
                    questId: c.id,
                    questContent: u,
                    questContentCTA: b.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: u,
                });
        },
        onRequestClose: () => {
            if (h) return r.o;
            o?.();
        },
        position: x ? "right" : "top",
        align: x ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => l(e, g),
    });
}
let F = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, i.jsx)(R.R, {
              questOrQuests: e.quest,
              questContent: j.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, i.jsx)(G, { ...e, impressionRef: t }),
          });
};
