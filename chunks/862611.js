n.d(t, { A: () => V });
var i,
    r = n(477900),
    l = n(582128),
    s = n(323889),
    a = n(17928),
    o = n(453903),
    u = n(462887),
    c = n(834730),
    d = n(939249),
    f = n(789645),
    m = n(192308),
    g = n(866665),
    E = n(922016),
    A = n(775602),
    C = n(274670),
    _ = n(144779),
    S = n(429913),
    T = n(409626),
    I = n(921138),
    N = n(459746),
    h = n(311043),
    L = n(569926),
    p = n(363195),
    R = n(174459),
    v = n(24001),
    G = n(104886),
    O = n(291749),
    x = n(18437),
    P = n(590202),
    M = n(971649),
    D = n(73473),
    y = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    k = n(190107),
    q = n(652215),
    w = n(375708),
    U = n(664418);
function j(e) {
    let t,
        n,
        i,
        { quest: l, onClose: s } = e,
        o = (0, a.bG)([p.A], () => p.A.getState().theme),
        m = (0, u.M)(o) ? q.NJ8.DARK : q.NJ8.LIGHT;
    return (0, r.jsxs)("div", {
        className: U.N1,
        children: [
            (0, r.jsxs)("div", {
                className: U.VW,
                children: [
                    (0, r.jsx)("img", {
                        className: U.rC,
                        alt: l.config.messages.gameTitle,
                        src: (0, O.tW)(l, O.fY.GAME_TILE, m).url,
                    }),
                    (0, r.jsxs)("div", {
                        className: U.if,
                        children: [
                            (0, r.jsx)(c.E, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children:
                                    ((t = {
                                        [k.Li.PACKAGE_ACTION_ADVENTURE]: w.t.PYFVdf,
                                        [k.Li.PACKAGE_RPG_MMO]: w.t.rFQo2F,
                                        [k.Li.PACKAGE_RACING_SPORTS]: w.t.zDRa6g,
                                        [k.Li.PACKAGE_SANDBOX_CREATIVE]: w.t.vz9U2Q,
                                        [k.Li.PACKAGE_FAMILY_FRIENDLY]: w.t.IOiAE0,
                                        [k.Li.PACKAGE_HOLIDAY_SEASON]: w.t.cJPqvD,
                                        [k.Li.PACKAGE_NEW_YEARS]: w.t.S0w2mv,
                                    }),
                                    (i =
                                        (null != (n = l.config.features.find((e) => e in t)) ? t[n] : null) ??
                                        w.t["D+DkEH"]),
                                    w.intl.string(i)),
                            }),
                            (0, r.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: w.intl.string(w.t.VgN1Bn),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(d.D, {
                className: U.b,
                "aria-label": w.intl.string(w.t.cpT0Cq),
                onClick: s,
                children: (0, r.jsx)(f.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function Q(e) {
    let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: u, onGameProfileModalClose: c } = e,
        f = (0, x.Ut)(),
        E = (0, M.go)(),
        S = (0, a.bG)([A.Ay], () => A.Ay.useReducedMotion),
        I = l.useRef(null),
        h = null != i.gameRecord;
    function L() {
        (0, G.E5)(G.kI.STEP_3_CLICKED_EXTERNAL, "game_sheet_external")
            ? (0, C.r)({
                  type: _.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: s.p.QUEST,
                  adCreativeId: t.id,
                  questContentCTA: P.Cy.GAME_STORE_OPEN_GAME_LINK,
                  surfaceId: v.uF.SPONSORED_QUEST_SHEET,
                  sourceQuestContent: o,
              })
            : f({
                  questId: t.id,
                  questContent: v.uF.SPONSORED_QUEST_SHEET,
                  questContentCTA: P.Cy.GAME_STORE_OPEN_GAME_LINK,
                  sourceQuestContent: o,
              });
    }
    async function p() {
        h &&
            ((0, G.E5)(G.kI.STEP_2_CLICKED_INTERNAL, "game_sheet_application")
                ? (0, C.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: s.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: P.Cy.GAME_PROFILE_OPEN,
                      surfaceId: v.uF.SPONSORED_QUEST_SHEET,
                      sourceQuestContent: o,
                      impressionId: E,
                  })
                : f({
                      questId: t.id,
                      questContent: v.uF.SPONSORED_QUEST_SHEET,
                      questContentCTA: P.Cy.GAME_PROFILE_OPEN,
                      sourceQuestContent: o,
                  }),
            await (0, m.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("69884"),
                        n.e("27392"),
                        n.e("80667"),
                        n.e("22289"),
                        n.e("57073"),
                        n.e("91072"),
                        n.e("9140"),
                        n.e("50564"),
                        n.e("85090"),
                        n.e("70772"),
                        n.e("2285"),
                        n.e("54303"),
                        n.e("5987"),
                        n.e("29083"),
                        n.e("73864"),
                        n.e("72467"),
                        n.e("43422"),
                        n.e("18315"),
                        n.e("49181"),
                        n.e("83118"),
                        n.e("98942"),
                        n.e("31076"),
                        n.e("68961"),
                        n.e("69167"),
                        n.e("14883"),
                        n.e("23102"),
                        n.e("97726"),
                        n.e("42394"),
                        n.e("44459"),
                        n.e("64293"),
                        n.e("98986"),
                        n.e("37467"),
                        n.e("60411"),
                        n.e("61298"),
                        n.e("45807"),
                        n.e("26572"),
                        n.e("39737"),
                        n.e("72712"),
                        n.e("85391"),
                        n.e("56356"),
                        n.e("18307"),
                        n.e("5270"),
                        n.e("42293"),
                        n.e("60574"),
                        n.e("83554"),
                        n.e("81301"),
                        n.e("53412"),
                        n.e("18917"),
                        n.e("94450"),
                        n.e("86307"),
                        n.e("3574"),
                        n.e("711"),
                        n.e("73153"),
                        n.e("25457"),
                        n.e("40981"),
                        n.e("75030"),
                        n.e("63576"),
                        n.e("95367"),
                        n.e("50693"),
                        n.e("23804"),
                        n.e("40961"),
                        n.e("93837"),
                        n.e("6487"),
                        n.e("32856"),
                        n.e("69794"),
                        n.e("5211"),
                        n.e("95325"),
                        n.e("25162"),
                        n.e("27670"),
                        n.e("20661"),
                        n.e("75131"),
                        n.e("23105"),
                        n.e("69190"),
                        n.e("17776"),
                        n.e("78969"),
                        n.e("77770"),
                        n.e("61275"),
                        n.e("49557"),
                        n.e("30072"),
                        n.e("18629"),
                        n.e("48227"),
                        n.e("37175"),
                        n.e("13920"),
                        n.e("99424"),
                        n.e("670"),
                        n.e("99496"),
                        n.e("44565"),
                        n.e("88563"),
                        n.e("24212"),
                        n.e("20459"),
                        n.e("54960"),
                        n.e("55455"),
                        n.e("778"),
                        n.e("75683"),
                        n.e("23864"),
                        n.e("47519"),
                        n.e("80197"),
                        n.e("48132"),
                        n.e("61686"),
                        n.e("77873"),
                        n.e("97312"),
                        n.e("38469"),
                        n.e("9"),
                        n.e("28863"),
                        n.e("23651"),
                        n.e("13586"),
                        n.e("4349"),
                        n.e("52558"),
                        n.e("62332"),
                        n.e("8607"),
                        n.e("27962"),
                        n.e("61282"),
                        n.e("64827"),
                        n.e("63232"),
                        n.e("7167"),
                        n.e("84569"),
                        n.e("61060"),
                        n.e("10471"),
                        n.e("52457"),
                        n.e("60235"),
                        n.e("77333"),
                        n.e("6338"),
                        n.e("47834"),
                        n.e("18573"),
                        n.e("97595"),
                        n.e("47662"),
                        n.e("44057"),
                        n.e("13736"),
                        n.e("28504"),
                        n.e("31988"),
                        n.e("62156"),
                        n.e("44571"),
                        n.e("34303"),
                        n.e("40291"),
                        n.e("2368"),
                        n.e("33115"),
                        n.e("97270"),
                        n.e("73122"),
                        n.e("8304"),
                        n.e("93159"),
                        n.e("55936"),
                        n.e("89088"),
                        n.e("30760"),
                        n.e("94723"),
                        n.e("30316"),
                        n.e("62931"),
                        n.e("45959"),
                        n.e("58529"),
                        n.e("81987"),
                        n.e("58038"),
                        n.e("71202"),
                        n.e("75201"),
                        n.e("76909"),
                        n.e("6174"),
                        n.e("7170"),
                        n.e("7575"),
                        n.e("72963"),
                        n.e("52511"),
                        n.e("54241"),
                        n.e("24303"),
                        n.e("42724"),
                        n.e("93766"),
                        n.e("21930"),
                        n.e("59460"),
                        n.e("98329"),
                        n.e("9205"),
                        n.e("30233"),
                        n.e("21200"),
                        n.e("54622"),
                        n.e("76894"),
                        n.e("25949"),
                        n.e("79049"),
                        n.e("77084"),
                        n.e("93514"),
                        n.e("37977"),
                        n.e("28662"),
                        n.e("29963"),
                        n.e("92075"),
                        n.e("76428"),
                        n.e("23532"),
                        n.e("96137"),
                        n.e("90417"),
                        n.e("27773"),
                        n.e("67022"),
                        n.e("99292"),
                        n.e("50097"),
                        n.e("33184"),
                        n.e("48900"),
                        n.e("82069"),
                        n.e("37687"),
                        n.e("46800"),
                        n.e("71234"),
                        n.e("6306"),
                        n.e("20282"),
                        n.e("54282"),
                        n.e("77473"),
                        n.e("63618"),
                        n.e("74439"),
                        n.e("80239"),
                        n.e("60177"),
                        n.e("75016"),
                        n.e("28843"),
                        n.e("73215"),
                        n.e("2329"),
                        n.e("23276"),
                        n.e("35996"),
                        n.e("76087"),
                        n.e("91824"),
                        n.e("25279"),
                        n.e("28752"),
                        n.e("31445"),
                        n.e("26931"),
                        n.e("78412"),
                        n.e("88990"),
                        n.e("9793"),
                        n.e("43549"),
                        n.e("11301"),
                        n.e("48720"),
                        n.e("88003"),
                        n.e("10575"),
                        n.e("50469"),
                        n.e("54630"),
                        n.e("42489"),
                        n.e("21574"),
                        n.e("80112"),
                        n.e("59880"),
                        n.e("6723"),
                        n.e("9729"),
                        n.e("74016"),
                        n.e("60658"),
                        n.e("21856"),
                        n.e("55726"),
                        n.e("74907"),
                        n.e("18024"),
                        n.e("36877"),
                        n.e("3131"),
                        n.e("65826"),
                        n.e("49520"),
                        n.e("27323"),
                        n.e("26437"),
                        n.e("96268"),
                        n.e("11133"),
                        n.e("72877"),
                        n.e("26294"),
                        n.e("32737"),
                        n.e("7914"),
                        n.e("37937"),
                        n.e("68904"),
                        n.e("81437"),
                        n.e("96325"),
                        n.e("75627"),
                        n.e("24637"),
                        n.e("82022"),
                        n.e("93461"),
                        n.e("65527"),
                        n.e("83827"),
                        n.e("1962"),
                        n.e("93767"),
                        n.e("7406"),
                        n.e("36926"),
                        n.e("36973"),
                        n.e("84050"),
                        n.e("21041"),
                        n.e("38672"),
                        n.e("49067"),
                        n.e("86454"),
                        n.e("85330"),
                    ]).then(n.bind(n, 995142));
                    return (t) =>
                        (0, r.jsx)(e, {
                            gameId: i.gameId,
                            source: T.GameProfileSources.GameSheet,
                            trackExternalAction: L,
                            ...t,
                        });
                },
                { onCloseCallback: c },
            ),
            u());
    }
    let R = l.useCallback(
            (e) => {
                if (null == I.current || S) return;
                let t = I.current.getBoundingClientRect(),
                    n = e.clientX - t.left,
                    i = e.clientY - t.top,
                    r = t.width / 2,
                    l = t.height / 2;
                I.current.style.transform = `rotateX(${-(((i - l) / l) * 15)}deg) rotateY(${((n - r) / r) * 15}deg)`;
            },
            [S],
        ),
        O = l.useCallback(() => {
            null == I.current || S || (I.current.style.transform = "rotateX(0deg) rotateY(0deg)");
        }, [S]);
    return (0, r.jsx)(g.m, {
        text: i.name,
        children: (0, r.jsx)(d.D, {
            className: U.zR,
            onClick: p,
            onMouseMove: R,
            onMouseLeave: O,
            children: (0, r.jsx)("div", {
                ref: I,
                className: U._M,
                children:
                    null != i.gameRecord
                        ? (0, r.jsx)(N.A, { game: i.gameRecord, className: U.xe, size: N.w.SMALL })
                        : null,
            }),
        }),
    });
}
function b() {
    return (0, r.jsxs)("svg", {
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
            (0, r.jsx)("path", { d: "M2.53418 3L73.0342 93.5", stroke: "var(--border-normal)", strokeOpacity: "0.2" }),
        ],
    });
}
function F(e) {
    let {
        quest: t,
        applications: i,
        onClose: s,
        sourceQuestContent: o,
        impressionRef: u,
        onGameProfileModalOpen: c,
        onGameProfileModalClose: d,
    } = e;
    (0, S.A)(i);
    let f = l.useMemo(() => i, [i]);
    (0, L.x)(f);
    let g = (0, a.bG)([h.A], () => f.some((e) => h.A.isFetching(e))),
        E = (0, a.bG)([h.A], () => f.some((e) => h.A.didFetchingFail(e))),
        A = (0, a.yK)([h.A], () =>
            f
                .map((e) => h.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, I.oS)(e.id))
                .slice(0, 10),
        ),
        C = l.useMemo(() => A.map((e) => ({ gameId: e.id, name: e.name, gameRecord: e })).slice(0, 10), [A]),
        _ = l.useMemo(() => {
            let e = C.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [C.length]),
        T = !g && 0 === C.length,
        N = E || T;
    if (
        (l.useEffect(() => {
            if (N) {
                let e = E ? y.FETCH_FAILED : y.NO_GAMES_AVAILABLE;
                R.default.track(q.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    s(),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [N, E, t.id, s]),
        g && !N)
    ) {
        let e = Math.min(i.length, 10);
        return (0, r.jsxs)("div", {
            className: U.kL,
            children: [
                (0, r.jsx)(j, { quest: t, onClose: s }),
                (0, r.jsx)("div", {
                    className: U.LA,
                    children: i.slice(0, e).map((e) => (0, r.jsx)("div", { className: U.Vj }, e)),
                }),
            ],
        });
    }
    return N
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  u.current = e;
              },
              className: U.kL,
              children: [
                  (0, r.jsx)(j, { quest: t, onClose: s }),
                  (0, r.jsxs)("div", {
                      className: U.LA,
                      children: [
                          C.map((e) =>
                              (0, r.jsx)(
                                  Q,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: o,
                                      onGameProfileModalOpen: c,
                                      onGameProfileModalClose: d,
                                  },
                                  e.gameId,
                              ),
                          ),
                          Array.from({ length: _ }, (e, t) => (0, r.jsx)(b, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function X(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: i,
            onGameSheetOpened: a,
            onGameSheetClosed: u,
            quest: c,
            sourceQuestContent: d,
            impressionRef: f,
        } = e,
        [m, g] = l.useState(!1),
        A = (0, x.Ut)(),
        S = (0, M.go)(),
        T = l.useRef(null),
        I = t?.current != null,
        N = I ? t : T;
    function h() {
        g(!0);
    }
    function L() {
        g(!1);
    }
    return (0, r.jsx)(E.Y, {
        targetElementRef: N,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(F, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: f,
                onGameProfileModalOpen: h,
                onGameProfileModalClose: L,
            });
        },
        onRequestOpen: function () {
            a?.(),
                (0, G.E5)(G.kI.STEP_2_CLICKED_INTERNAL, "game_sheet_popout")
                    ? (0, C.r)({
                          type: _.F.CLICK_INTERNAL,
                          adCreativeType: s.p.QUEST,
                          adCreativeId: c.id,
                          questContentCTA: P.Cy.SPONSORED_QUEST_SHEET,
                          surfaceId: d,
                          sourceQuestContent: d,
                          impressionId: S,
                      })
                    : A({
                          questId: c.id,
                          questContent: d,
                          questContentCTA: P.Cy.SPONSORED_QUEST_SHEET,
                          sourceQuestContent: d,
                      });
        },
        onRequestClose: function () {
            if (m) return o.o;
            u?.();
        },
        position: I ? "right" : "top",
        align: I ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => i(e, T),
    });
}
let V = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(D.R, {
              questOrQuests: e.quest,
              questContent: v.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(X, { ...e, impressionRef: t }),
          });
};
