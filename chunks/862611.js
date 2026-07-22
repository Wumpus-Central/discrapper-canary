n.d(t, { A: () => Y });
var i,
    r = n(627968),
    l = n(64700),
    a = n(323889),
    s = n(17928),
    o = n(453903),
    u = n(462887),
    c = n(834730),
    d = n(939249),
    f = n(789645),
    m = n(192308),
    g = n(866665),
    A = n(922016),
    E = n(775602),
    C = n(274670),
    _ = n(144779),
    I = n(429913),
    p = n(409626),
    S = n(344005),
    T = n(459746),
    h = n(311043),
    N = n(569926),
    R = n(363195),
    L = n(760751),
    v = n(174459),
    G = n(486020),
    x = n(24001),
    O = n(104886),
    P = n(291749),
    M = n(18437),
    D = n(590202),
    y = n(971649),
    k = n(73473),
    w = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    U = n(190107),
    q = n(652215),
    b = n(375708),
    j = n(664418);
function Q(e) {
    let t,
        n,
        i,
        { quest: l, onClose: a } = e,
        o = (0, s.bG)([R.A], () => R.A.getState().theme),
        m = (0, u.M)(o) ? q.NJ8.DARK : q.NJ8.LIGHT;
    return (0, r.jsxs)("div", {
        className: j.N1,
        children: [
            (0, r.jsxs)("div", {
                className: j.VW,
                children: [
                    (0, r.jsx)("img", {
                        className: j.rC,
                        alt: l.config.messages.gameTitle,
                        src: (0, P.tW)(l, P.fY.GAME_TILE, m).url,
                    }),
                    (0, r.jsxs)("div", {
                        className: j.if,
                        children: [
                            (0, r.jsx)(c.E, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children:
                                    ((t = {
                                        [U.Li.PACKAGE_ACTION_ADVENTURE]: b.t.PYFVdf,
                                        [U.Li.PACKAGE_RPG_MMO]: b.t.rFQo2F,
                                        [U.Li.PACKAGE_RACING_SPORTS]: b.t.zDRa6g,
                                        [U.Li.PACKAGE_SANDBOX_CREATIVE]: b.t.vz9U2Q,
                                        [U.Li.PACKAGE_FAMILY_FRIENDLY]: b.t.IOiAE0,
                                        [U.Li.PACKAGE_HOLIDAY_SEASON]: b.t.cJPqvD,
                                        [U.Li.PACKAGE_NEW_YEARS]: b.t.S0w2mv,
                                    }),
                                    (i =
                                        (null != (n = l.config.features.find((e) => e in t)) ? t[n] : null) ??
                                        b.t["D+DkEH"]),
                                    b.intl.string(i)),
                            }),
                            (0, r.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: b.intl.string(b.t.VgN1Bn),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(d.D, {
                className: j.b,
                "aria-label": b.intl.string(b.t.cpT0Cq),
                onClick: a,
                children: (0, r.jsx)(f.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function F(e) {
    let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: u, onGameProfileModalClose: c } = e,
        f = (0, M.Ut)(),
        A = (0, y.go)(),
        I = (0, s.bG)([E.Ay], () => E.Ay.useReducedMotion),
        S = l.useRef(null),
        h = null != i.gameRecord;
    function N() {
        (0, O.E5)(O.kI.STEP_3_CLICKED_EXTERNAL, "game_sheet_external")
            ? (0, C.r)({
                  type: _.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: a.p.QUEST,
                  adCreativeId: t.id,
                  questContentCTA: D.Cy.GAME_STORE_OPEN_GAME_LINK,
                  surfaceId: x.uF.SPONSORED_QUEST_SHEET,
                  sourceQuestContent: o,
              })
            : f({
                  questId: t.id,
                  questContent: x.uF.SPONSORED_QUEST_SHEET,
                  questContentCTA: D.Cy.GAME_STORE_OPEN_GAME_LINK,
                  sourceQuestContent: o,
              });
    }
    async function R() {
        h &&
            ((0, O.E5)(O.kI.STEP_2_CLICKED_INTERNAL, "game_sheet_application")
                ? (0, C.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: D.Cy.GAME_PROFILE_OPEN,
                      surfaceId: x.uF.SPONSORED_QUEST_SHEET,
                      sourceQuestContent: o,
                      impressionId: A,
                  })
                : f({
                      questId: t.id,
                      questContent: x.uF.SPONSORED_QUEST_SHEET,
                      questContentCTA: D.Cy.GAME_PROFILE_OPEN,
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
                        n.e("4240"),
                        n.e("98942"),
                        n.e("31076"),
                        n.e("66806"),
                        n.e("26572"),
                        n.e("39737"),
                        n.e("72712"),
                        n.e("85391"),
                        n.e("56356"),
                        n.e("29062"),
                        n.e("5270"),
                        n.e("42293"),
                        n.e("44018"),
                        n.e("60574"),
                        n.e("82222"),
                        n.e("23102"),
                        n.e("97726"),
                        n.e("42394"),
                        n.e("44459"),
                        n.e("64293"),
                        n.e("98986"),
                        n.e("18379"),
                        n.e("21133"),
                        n.e("60061"),
                        n.e("44083"),
                        n.e("62329"),
                        n.e("18917"),
                        n.e("94450"),
                        n.e("86307"),
                        n.e("3574"),
                        n.e("711"),
                        n.e("73153"),
                        n.e("18151"),
                        n.e("10543"),
                        n.e("40981"),
                        n.e("75030"),
                        n.e("58235"),
                        n.e("51869"),
                        n.e("50693"),
                        n.e("23804"),
                        n.e("40961"),
                        n.e("93837"),
                        n.e("6487"),
                        n.e("75594"),
                        n.e("69794"),
                        n.e("5211"),
                        n.e("83656"),
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
                        n.e("1301"),
                        n.e("55983"),
                        n.e("47519"),
                        n.e("80197"),
                        n.e("48132"),
                        n.e("61686"),
                        n.e("77873"),
                        n.e("97312"),
                        n.e("38469"),
                        n.e("9"),
                        n.e("28863"),
                        n.e("35182"),
                        n.e("76913"),
                        n.e("92576"),
                        n.e("4349"),
                        n.e("52558"),
                        n.e("42205"),
                        n.e("55675"),
                        n.e("27962"),
                        n.e("36167"),
                        n.e("64827"),
                        n.e("63232"),
                        n.e("7167"),
                        n.e("10471"),
                        n.e("84569"),
                        n.e("61060"),
                        n.e("54484"),
                        n.e("60235"),
                        n.e("77333"),
                        n.e("6338"),
                        n.e("47834"),
                        n.e("18573"),
                        n.e("78157"),
                        n.e("44057"),
                        n.e("53782"),
                        n.e("88774"),
                        n.e("31988"),
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
                        n.e("69294"),
                        n.e("94723"),
                        n.e("62931"),
                        n.e("45959"),
                        n.e("58529"),
                        n.e("81987"),
                        n.e("58038"),
                        n.e("71202"),
                        n.e("62531"),
                        n.e("44230"),
                        n.e("6174"),
                        n.e("7170"),
                        n.e("36877"),
                        n.e("72963"),
                        n.e("52511"),
                        n.e("7575"),
                        n.e("54241"),
                        n.e("24303"),
                        n.e("42724"),
                        n.e("93766"),
                        n.e("21930"),
                        n.e("14761"),
                        n.e("98329"),
                        n.e("21957"),
                        n.e("30233"),
                        n.e("21200"),
                        n.e("54622"),
                        n.e("28203"),
                        n.e("25949"),
                        n.e("79049"),
                        n.e("37977"),
                        n.e("77084"),
                        n.e("71133"),
                        n.e("28662"),
                        n.e("29963"),
                        n.e("38513"),
                        n.e("63645"),
                        n.e("76428"),
                        n.e("23532"),
                        n.e("96137"),
                        n.e("52557"),
                        n.e("63123"),
                        n.e("834"),
                        n.e("24038"),
                        n.e("55654"),
                        n.e("27773"),
                        n.e("50097"),
                        n.e("80445"),
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
                        n.e("38755"),
                        n.e("80239"),
                        n.e("60177"),
                        n.e("75016"),
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
                        n.e("19666"),
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
                        n.e("5563"),
                        n.e("74907"),
                        n.e("18024"),
                        n.e("27323"),
                        n.e("3131"),
                        n.e("65826"),
                        n.e("49520"),
                        n.e("26437"),
                        n.e("11133"),
                        n.e("72877"),
                        n.e("26294"),
                        n.e("32737"),
                        n.e("96268"),
                        n.e("47018"),
                        n.e("37937"),
                        n.e("68904"),
                        n.e("96325"),
                        n.e("75627"),
                        n.e("22067"),
                        n.e("93461"),
                        n.e("48407"),
                        n.e("83827"),
                        n.e("93767"),
                        n.e("1962"),
                        n.e("7406"),
                        n.e("36926"),
                        n.e("36973"),
                        n.e("84050"),
                        n.e("21041"),
                        n.e("38672"),
                        n.e("25994"),
                        n.e("86454"),
                        n.e("85330"),
                    ]).then(n.bind(n, 797489));
                    return (t) =>
                        (0, r.jsx)(e, {
                            gameId: i.applicationId,
                            source: p.GameProfileSources.GameSheet,
                            trackExternalAction: N,
                            ...t,
                        });
                },
                { onCloseCallback: c },
            ),
            u());
    }
    let L = l.useCallback(
            (e) => {
                if (null == S.current || I) return;
                let t = S.current.getBoundingClientRect(),
                    n = e.clientX - t.left,
                    i = e.clientY - t.top,
                    r = t.width / 2,
                    l = t.height / 2;
                S.current.style.transform = `rotateX(${-(((i - l) / l) * 15)}deg) rotateY(${((n - r) / r) * 15}deg)`;
            },
            [I],
        ),
        v = l.useCallback(() => {
            null == S.current || I || (S.current.style.transform = "rotateX(0deg) rotateY(0deg)");
        }, [I]);
    return (0, r.jsx)(g.m, {
        text: i.name,
        children: (0, r.jsx)(d.D, {
            className: j.zR,
            onClick: R,
            onMouseMove: L,
            onMouseLeave: v,
            children: (0, r.jsx)("div", {
                ref: S,
                className: j._M,
                children:
                    null != i.gameRecord
                        ? (0, r.jsx)(T.A, { game: i.gameRecord, className: j.xe, size: T.w.SMALL })
                        : null != i.fallbackCoverImageUrl
                          ? (0, r.jsx)("img", { src: i.fallbackCoverImageUrl, alt: i.name, className: j.xe })
                          : null,
            }),
        }),
    });
}
function X() {
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
function V(e) {
    let {
        quest: t,
        applications: i,
        onClose: a,
        sourceQuestContent: o,
        impressionRef: u,
        onGameProfileModalOpen: c,
        onGameProfileModalClose: d,
    } = e;
    (0, I.A)(i), (0, N.x)(i);
    let f = (0, s.bG)([h.A], () => i.some((e) => h.A.isFetching(e))),
        g = (0, s.bG)([h.A], () => i.some((e) => h.A.didFetchingFail(e))),
        A = (0, s.yK)([h.A], () =>
            i
                .map((e) => h.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, S.oS)(e.applicationId))
                .slice(0, 10),
        ),
        E = (0, s.bG)([L.A, h.A], () => {
            let e = new Set(A.map((e) => e.applicationId));
            return i
                .filter((t) => !e.has(t))
                .filter((e) => null == h.A.getGame(e))
                .map((e) => {
                    let t = L.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = G.Ay.getApplicationIconURL({
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
        C = l.useMemo(
            () =>
                [
                    ...A.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...E.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [A, E],
        ),
        _ = l.useMemo(() => {
            let e = C.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [C.length]),
        p = !f && 0 === C.length,
        T = g || p;
    if (
        (l.useEffect(() => {
            if (T) {
                let e = g ? w.FETCH_FAILED : w.NO_GAMES_AVAILABLE;
                v.default.track(q.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    a(),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [T, g, t.id, a]),
        f && !T)
    ) {
        let e = Math.min(i.length, 10);
        return (0, r.jsxs)("div", {
            className: j.kL,
            children: [
                (0, r.jsx)(Q, { quest: t, onClose: a }),
                (0, r.jsx)("div", {
                    className: j.LA,
                    children: i.slice(0, e).map((e) => (0, r.jsx)("div", { className: j.Vj }, e)),
                }),
            ],
        });
    }
    return T
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  u.current = e;
              },
              className: j.kL,
              children: [
                  (0, r.jsx)(Q, { quest: t, onClose: a }),
                  (0, r.jsxs)("div", {
                      className: j.LA,
                      children: [
                          C.map((e) =>
                              (0, r.jsx)(
                                  F,
                                  {
                                      quest: t,
                                      game: e,
                                      sourceQuestContent: o,
                                      onGameProfileModalOpen: c,
                                      onGameProfileModalClose: d,
                                  },
                                  e.applicationId,
                              ),
                          ),
                          Array.from({ length: _ }, (e, t) => (0, r.jsx)(X, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function K(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: i,
            onGameSheetOpened: s,
            onGameSheetClosed: u,
            quest: c,
            sourceQuestContent: d,
            impressionRef: f,
        } = e,
        [m, g] = l.useState(!1),
        E = (0, M.Ut)(),
        I = (0, y.go)(),
        p = l.useRef(null),
        S = t?.current != null,
        T = S ? t : p;
    function h() {
        g(!0);
    }
    function N() {
        g(!1);
    }
    return (0, r.jsx)(A.Y, {
        targetElementRef: T,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(V, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: f,
                onGameProfileModalOpen: h,
                onGameProfileModalClose: N,
            });
        },
        onRequestOpen: function () {
            s?.(),
                (0, O.E5)(O.kI.STEP_2_CLICKED_INTERNAL, "game_sheet_popout")
                    ? (0, C.r)({
                          type: _.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: c.id,
                          questContentCTA: D.Cy.SPONSORED_QUEST_SHEET,
                          surfaceId: d,
                          sourceQuestContent: d,
                          impressionId: I,
                      })
                    : E({
                          questId: c.id,
                          questContent: d,
                          questContentCTA: D.Cy.SPONSORED_QUEST_SHEET,
                          sourceQuestContent: d,
                      });
        },
        onRequestClose: function () {
            if (m) return o.o;
            u?.();
        },
        position: S ? "right" : "top",
        align: S ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => i(e, p),
    });
}
let Y = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(k.R, {
              questOrQuests: e.quest,
              questContent: x.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(K, { ...e, impressionRef: t }),
          });
};
