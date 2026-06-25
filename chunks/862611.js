"use strict";
n.d(t, { A: () => K });
var i,
    r = n(627968),
    s = n(64700),
    a = n(323889),
    o = n(17928),
    l = n(453903),
    u = n(990078),
    c = n(462887),
    d = n(834730),
    _ = n(939249),
    h = n(789645),
    f = n(192308),
    p = n(922016),
    E = n(775602),
    m = n(274670),
    g = n(144779),
    A = n(429913),
    I = n(409626),
    T = n(344005),
    S = n(459746),
    y = n(311043),
    C = n(569926),
    N = n(363195),
    v = n(760751),
    R = n(174459),
    O = n(486020),
    b = n(507107),
    D = n(104886),
    L = n(551875),
    w = n(18437),
    M = n(590202),
    P = n(971649),
    x = n(73473),
    k = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    U = n(190107),
    G = n(652215),
    F = n(375708),
    V = n(362058);
function B(e) {
    let t,
        n,
        i,
        { quest: s, onClose: a } = e,
        l = (0, o.bG)([N.A], () => N.A.getState().theme),
        u = (0, c.M)(l) ? G.NJ8.DARK : G.NJ8.LIGHT;
    return (0, r.jsxs)("div", {
        className: V.N1,
        children: [
            (0, r.jsxs)("div", {
                className: V.VW,
                children: [
                    (0, r.jsx)("img", {
                        className: V.rC,
                        alt: s.config.messages.gameTitle,
                        src: (0, L.tW)(s, L.fY.GAME_TILE, u).url,
                    }),
                    (0, r.jsxs)("div", {
                        className: V.if,
                        children: [
                            (0, r.jsx)(d.E, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children:
                                    ((t = {
                                        [U.Li.PACKAGE_ACTION_ADVENTURE]: F.t.PYFVdf,
                                        [U.Li.PACKAGE_RPG_MMO]: F.t.rFQo2F,
                                        [U.Li.PACKAGE_RACING_SPORTS]: F.t.zDRa6g,
                                        [U.Li.PACKAGE_SANDBOX_CREATIVE]: F.t.vz9U2Q,
                                        [U.Li.PACKAGE_FAMILY_FRIENDLY]: F.t.IOiAE0,
                                        [U.Li.PACKAGE_HOLIDAY_SEASON]: F.t.cJPqvD,
                                        [U.Li.PACKAGE_NEW_YEARS]: F.t.S0w2mv,
                                    }),
                                    (i =
                                        (null != (n = s.config.features.find((e) => e in t)) ? t[n] : null) ??
                                        F.t["D+DkEH"]),
                                    F.intl.string(i)),
                            }),
                            (0, r.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: F.intl.string(F.t.VgN1Bn),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(_.D, {
                className: V.b,
                "aria-label": F.intl.string(F.t.cpT0Cq),
                onClick: a,
                children: (0, r.jsx)(h.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
let j = (e) => {
    let { quest: t, game: i, sourceQuestContent: l, onGameProfileModalOpen: c, onGameProfileModalClose: d } = e,
        h = (0, w.Ut)(),
        p = (0, P.go)(),
        A = (0, o.bG)([E.Ay], () => E.Ay.useReducedMotion),
        T = s.useRef(null),
        y = null != i.gameRecord;
    function C() {
        h({
            questId: t.id,
            questContent: b.uF.SPONSORED_QUEST_SHEET,
            questContentCTA: M.Cy.GAME_STORE_OPEN_GAME_LINK,
            sourceQuestContent: l,
        });
    }
    async function N() {
        y &&
            ((0, D.E5)(D.kI.STEP_2_CLICKED_INTERNAL, "game_sheet_application")
                ? (0, m.r)({
                      type: g.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: M.Cy.GAME_PROFILE_OPEN,
                      surfaceId: b.uF.SPONSORED_QUEST_SHEET,
                      sourceQuestContent: l,
                      impressionId: p,
                  })
                : h({
                      questId: t.id,
                      questContent: b.uF.SPONSORED_QUEST_SHEET,
                      questContentCTA: M.Cy.GAME_PROFILE_OPEN,
                      sourceQuestContent: l,
                  }),
            await (0, f.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("41774"),
                        n.e("11006"),
                        n.e("41219"),
                        n.e("85414"),
                        n.e("44078"),
                        n.e("12126"),
                        n.e("87870"),
                        n.e("40719"),
                        n.e("44384"),
                        n.e("41577"),
                        n.e("93514"),
                        n.e("30320"),
                        n.e("8289"),
                        n.e("24839"),
                        n.e("16614"),
                        n.e("36732"),
                        n.e("63661"),
                        n.e("80309"),
                        n.e("50815"),
                        n.e("4693"),
                        n.e("50878"),
                        n.e("71696"),
                        n.e("2912"),
                        n.e("16336"),
                        n.e("59539"),
                        n.e("75518"),
                        n.e("34041"),
                        n.e("44204"),
                        n.e("61749"),
                        n.e("10849"),
                        n.e("51416"),
                        n.e("76375"),
                        n.e("12633"),
                        n.e("36027"),
                        n.e("68880"),
                        n.e("74577"),
                        n.e("44613"),
                        n.e("6643"),
                        n.e("70369"),
                        n.e("12932"),
                        n.e("86380"),
                        n.e("52564"),
                        n.e("11868"),
                        n.e("64633"),
                        n.e("17665"),
                        n.e("8872"),
                        n.e("68006"),
                        n.e("61661"),
                        n.e("58247"),
                        n.e("38789"),
                        n.e("53915"),
                        n.e("46903"),
                        n.e("69738"),
                        n.e("93601"),
                        n.e("41842"),
                        n.e("84346"),
                        n.e("97106"),
                        n.e("10038"),
                        n.e("11586"),
                        n.e("64923"),
                        n.e("84949"),
                        n.e("71334"),
                        n.e("10940"),
                        n.e("77015"),
                        n.e("61355"),
                        n.e("97101"),
                        n.e("45446"),
                        n.e("71455"),
                        n.e("41117"),
                        n.e("33958"),
                        n.e("84411"),
                        n.e("15426"),
                        n.e("54377"),
                        n.e("10436"),
                        n.e("19353"),
                        n.e("73523"),
                        n.e("65485"),
                        n.e("69184"),
                        n.e("71436"),
                        n.e("66270"),
                        n.e("71716"),
                        n.e("27184"),
                        n.e("66238"),
                        n.e("78771"),
                        n.e("17640"),
                        n.e("7266"),
                        n.e("65438"),
                        n.e("38413"),
                        n.e("11152"),
                        n.e("74756"),
                        n.e("89969"),
                        n.e("97865"),
                        n.e("12030"),
                        n.e("75370"),
                        n.e("68463"),
                        n.e("37842"),
                        n.e("67962"),
                        n.e("39754"),
                        n.e("58865"),
                        n.e("34689"),
                        n.e("49996"),
                        n.e("98515"),
                        n.e("45522"),
                        n.e("11411"),
                        n.e("8473"),
                        n.e("49279"),
                        n.e("85244"),
                        n.e("84059"),
                        n.e("46864"),
                        n.e("16633"),
                        n.e("16058"),
                        n.e("64248"),
                        n.e("6712"),
                        n.e("1491"),
                        n.e("32394"),
                        n.e("79479"),
                        n.e("20939"),
                        n.e("23443"),
                        n.e("47336"),
                        n.e("48058"),
                        n.e("35837"),
                        n.e("89088"),
                        n.e("48902"),
                        n.e("38119"),
                        n.e("45914"),
                        n.e("22843"),
                        n.e("32577"),
                        n.e("2423"),
                        n.e("26729"),
                        n.e("76487"),
                        n.e("93247"),
                        n.e("43440"),
                        n.e("97867"),
                        n.e("54702"),
                        n.e("7364"),
                        n.e("46195"),
                        n.e("26736"),
                        n.e("58201"),
                        n.e("42977"),
                        n.e("5990"),
                        n.e("77388"),
                        n.e("47813"),
                        n.e("36810"),
                        n.e("840"),
                        n.e("16907"),
                        n.e("35422"),
                        n.e("2043"),
                        n.e("14148"),
                        n.e("57836"),
                        n.e("39367"),
                        n.e("9473"),
                        n.e("35186"),
                        n.e("66225"),
                        n.e("77573"),
                        n.e("76084"),
                        n.e("22944"),
                        n.e("33365"),
                        n.e("43634"),
                        n.e("98659"),
                        n.e("65126"),
                        n.e("73990"),
                        n.e("50175"),
                        n.e("78071"),
                        n.e("41724"),
                        n.e("86744"),
                        n.e("3311"),
                        n.e("22084"),
                        n.e("57801"),
                        n.e("79183"),
                        n.e("51628"),
                        n.e("32911"),
                        n.e("84868"),
                        n.e("6919"),
                        n.e("37363"),
                        n.e("9466"),
                        n.e("35275"),
                        n.e("40525"),
                        n.e("39578"),
                        n.e("12079"),
                        n.e("35440"),
                        n.e("20614"),
                        n.e("64197"),
                        n.e("89313"),
                        n.e("77978"),
                        n.e("31620"),
                        n.e("30871"),
                        n.e("91680"),
                        n.e("57036"),
                        n.e("57174"),
                        n.e("86847"),
                        n.e("48226"),
                        n.e("207"),
                        n.e("24199"),
                        n.e("88941"),
                        n.e("61379"),
                        n.e("34236"),
                        n.e("11523"),
                        n.e("4361"),
                        n.e("77473"),
                        n.e("31549"),
                        n.e("23353"),
                        n.e("18943"),
                        n.e("7167"),
                        n.e("25279"),
                        n.e("87306"),
                        n.e("57598"),
                        n.e("92789"),
                        n.e("31390"),
                        n.e("37687"),
                        n.e("41043"),
                        n.e("43039"),
                        n.e("26780"),
                        n.e("44265"),
                        n.e("48804"),
                        n.e("95569"),
                        n.e("84103"),
                        n.e("17225"),
                        n.e("78179"),
                        n.e("9233"),
                        n.e("65030"),
                        n.e("63095"),
                        n.e("70653"),
                        n.e("52266"),
                        n.e("53039"),
                        n.e("96123"),
                        n.e("76640"),
                        n.e("64615"),
                        n.e("31825"),
                        n.e("36320"),
                        n.e("97526"),
                        n.e("79525"),
                        n.e("82069"),
                        n.e("75134"),
                        n.e("1462"),
                        n.e("99666"),
                        n.e("55184"),
                        n.e("74926"),
                        n.e("28866"),
                        n.e("50015"),
                        n.e("72442"),
                        n.e("54282"),
                        n.e("21574"),
                        n.e("90889"),
                        n.e("62931"),
                        n.e("18181"),
                        n.e("59880"),
                        n.e("14805"),
                        n.e("73547"),
                        n.e("99593"),
                        n.e("45587"),
                        n.e("83057"),
                        n.e("50997"),
                        n.e("36845"),
                        n.e("2773"),
                        n.e("27582"),
                        n.e("18573"),
                        n.e("29177"),
                        n.e("21435"),
                        n.e("61935"),
                        n.e("88990"),
                        n.e("21856"),
                        n.e("58038"),
                        n.e("24622"),
                        n.e("52511"),
                        n.e("72963"),
                        n.e("32551"),
                        n.e("62680"),
                        n.e("81062"),
                        n.e("43426"),
                        n.e("96443"),
                        n.e("65743"),
                        n.e("87079"),
                        n.e("88559"),
                        n.e("21825"),
                        n.e("60177"),
                        n.e("25637"),
                        n.e("39665"),
                        n.e("75676"),
                        n.e("23532"),
                        n.e("18441"),
                        n.e("43549"),
                        n.e("31644"),
                        n.e("51965"),
                        n.e("86949"),
                        n.e("33902"),
                        n.e("53614"),
                        n.e("52574"),
                        n.e("18401"),
                        n.e("31145"),
                        n.e("93766"),
                        n.e("27773"),
                        n.e("99999"),
                        n.e("53374"),
                        n.e("93158"),
                        n.e("56313"),
                        n.e("42724"),
                        n.e("31445"),
                        n.e("71577"),
                        n.e("52073"),
                        n.e("9915"),
                        n.e("34691"),
                        n.e("92731"),
                        n.e("28152"),
                        n.e("36126"),
                        n.e("85857"),
                        n.e("64325"),
                        n.e("28095"),
                        n.e("1555"),
                        n.e("32823"),
                        n.e("29233"),
                        n.e("50117"),
                        n.e("79049"),
                        n.e("37977"),
                        n.e("18024"),
                        n.e("36877"),
                        n.e("69747"),
                        n.e("3131"),
                        n.e("65826"),
                        n.e("49520"),
                        n.e("72877"),
                        n.e("26437"),
                        n.e("21930"),
                        n.e("27323"),
                        n.e("26294"),
                        n.e("24637"),
                        n.e("88889"),
                        n.e("11133"),
                        n.e("98329"),
                        n.e("21957"),
                        n.e("68904"),
                        n.e("96325"),
                        n.e("75627"),
                        n.e("54241"),
                        n.e("22067"),
                        n.e("7575"),
                        n.e("54622"),
                        n.e("21198"),
                        n.e("96268"),
                        n.e("93461"),
                        n.e("83827"),
                        n.e("28203"),
                        n.e("93767"),
                        n.e("1962"),
                        n.e("7406"),
                        n.e("36926"),
                        n.e("36973"),
                        n.e("32737"),
                        n.e("97150"),
                        n.e("21041"),
                        n.e("37937"),
                        n.e("38672"),
                        n.e("50782"),
                        n.e("86454"),
                        n.e("85330"),
                    ]).then(n.bind(n, 483629));
                    return (t) =>
                        (0, r.jsx)(e, {
                            gameId: i.applicationId,
                            source: I.Ob.GameSheet,
                            trackExternalAction: C,
                            ...t,
                        });
                },
                { onCloseCallback: d },
            ),
            c());
    }
    let v = s.useCallback(
            (e) => {
                if (null == T.current || A) return;
                let t = T.current.getBoundingClientRect(),
                    n = e.clientX - t.left,
                    i = e.clientY - t.top,
                    r = t.width / 2,
                    s = t.height / 2;
                T.current.style.transform = `rotateX(${-(((i - s) / s) * 15)}deg) rotateY(${((n - r) / r) * 15}deg)`;
            },
            [A],
        ),
        R = s.useCallback(() => {
            null == T.current || A || (T.current.style.transform = "rotateX(0deg) rotateY(0deg)");
        }, [A]);
    return (0, r.jsx)(u.m, {
        text: i.name,
        children: (0, r.jsx)(_.D, {
            className: V.zR,
            onClick: N,
            onMouseMove: v,
            onMouseLeave: R,
            children: (0, r.jsx)("div", {
                ref: T,
                className: V._M,
                children:
                    null != i.gameRecord
                        ? (0, r.jsx)(S.A, { game: i.gameRecord, className: V.xe, size: S.w.SMALL })
                        : null != i.fallbackCoverImageUrl
                          ? (0, r.jsx)("img", { src: i.fallbackCoverImageUrl, alt: i.name, className: V.xe })
                          : null,
            }),
        }),
    });
};
function H() {
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
function Y(e) {
    let {
        quest: t,
        applications: i,
        onClose: a,
        sourceQuestContent: l,
        impressionRef: u,
        onGameProfileModalOpen: c,
        onGameProfileModalClose: d,
    } = e;
    (0, A.A)(i), (0, C.x)(i);
    let _ = (0, o.bG)([y.A], () => i.some((e) => y.A.isFetching(e))),
        h = (0, o.bG)([y.A], () => i.some((e) => y.A.didFetchingFail(e))),
        p = (0, o.yK)([y.A], () =>
            i
                .map((e) => y.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, T.oS)(e.applicationId))
                .slice(0, 10),
        ),
        E = (0, o.bG)([v.A, y.A], () => {
            let e = new Set(p.map((e) => e.applicationId));
            return i
                .filter((t) => !e.has(t))
                .filter((e) => null == y.A.getGame(e))
                .map((e) => {
                    let t = v.A.getDetectableGame(e);
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
        m = s.useMemo(
            () =>
                [
                    ...p.map((e) => ({
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
            [p, E],
        ),
        g = s.useMemo(() => {
            let e = m.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [m.length]),
        I = !_ && 0 === m.length,
        S = h || I;
    if (
        (s.useEffect(() => {
            if (S) {
                let e = h ? k.FETCH_FAILED : k.NO_GAMES_AVAILABLE;
                R.default.track(G.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    a(),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [S, h, t.id, a]),
        _ && !S)
    ) {
        let e = Math.min(i.length, 10);
        return (0, r.jsxs)("div", {
            className: V.kL,
            children: [
                (0, r.jsx)(B, { quest: t, onClose: a }),
                (0, r.jsx)("div", {
                    className: V.LA,
                    children: i.slice(0, e).map((e) => (0, r.jsx)("div", { className: V.Vj }, e)),
                }),
            ],
        });
    }
    return S
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  u.current = e;
              },
              className: V.kL,
              children: [
                  (0, r.jsx)(B, { quest: t, onClose: a }),
                  (0, r.jsxs)("div", {
                      className: V.LA,
                      children: [
                          m.map((e) =>
                              (0, r.jsx)(
                                  j,
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
                          Array.from({ length: g }, (e, t) => (0, r.jsx)(H, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function W(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: i,
            onGameSheetOpened: o,
            onGameSheetClosed: u,
            quest: c,
            sourceQuestContent: d,
            impressionRef: _,
        } = e,
        [h, f] = s.useState(!1),
        E = (0, w.Ut)(),
        A = (0, P.go)(),
        I = s.useRef(null),
        T = t?.current != null,
        S = T ? t : I;
    function y() {
        f(!0);
    }
    function C() {
        f(!1);
    }
    return (0, r.jsx)(p.Y, {
        targetElementRef: S,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(Y, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: _,
                onGameProfileModalOpen: y,
                onGameProfileModalClose: C,
            });
        },
        onRequestOpen: function () {
            o?.(),
                (0, D.E5)(D.kI.STEP_2_CLICKED_INTERNAL, "game_sheet_popout")
                    ? (0, m.r)({
                          type: g.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: c.id,
                          questContentCTA: M.Cy.SPONSORED_QUEST_SHEET,
                          surfaceId: d,
                          sourceQuestContent: d,
                          impressionId: A,
                      })
                    : E({
                          questId: c.id,
                          questContent: d,
                          questContentCTA: M.Cy.SPONSORED_QUEST_SHEET,
                          sourceQuestContent: d,
                      });
        },
        onRequestClose: function () {
            if (h) return l.o;
            u?.();
        },
        position: T ? "right" : "top",
        align: T ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => i(e, I),
    });
}
let K = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(x.R, {
              questOrQuests: e.quest,
              questContent: b.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(W, { ...e, impressionRef: t }),
          });
};
