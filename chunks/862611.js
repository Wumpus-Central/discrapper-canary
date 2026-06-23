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
    V = n(420298);
let B = (e) => {
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
    },
    j = (e) => {
        let { quest: t, game: i, sourceQuestContent: l, onGameProfileModalOpen: c, onGameProfileModalClose: d } = e,
            h = (0, w.Ut)(),
            p = (0, P.go)(),
            A = (0, o.bG)([E.Ay], () => E.Ay.useReducedMotion),
            T = s.useRef(null),
            y = null != i.gameRecord,
            C = () => {
                h({
                    questId: t.id,
                    questContent: b.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: M.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: l,
                });
            },
            N = async () => {
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
                                n.e("56762"),
                                n.e("79070"),
                                n.e("57123"),
                                n.e("66434"),
                                n.e("74414"),
                                n.e("4394"),
                                n.e("85566"),
                                n.e("4207"),
                                n.e("16192"),
                                n.e("71413"),
                                n.e("59914"),
                                n.e("82655"),
                                n.e("76821"),
                                n.e("67687"),
                                n.e("55642"),
                                n.e("59760"),
                                n.e("67865"),
                                n.e("75029"),
                                n.e("63867"),
                                n.e("56405"),
                                n.e("22513"),
                                n.e("75120"),
                                n.e("25508"),
                                n.e("22256"),
                                n.e("17303"),
                                n.e("45554"),
                                n.e("36761"),
                                n.e("69292"),
                                n.e("29877"),
                                n.e("32993"),
                                n.e("98488"),
                                n.e("9399"),
                                n.e("85497"),
                                n.e("62203"),
                                n.e("91024"),
                                n.e("33865"),
                                n.e("42309"),
                                n.e("29351"),
                                n.e("43233"),
                                n.e("85184"),
                                n.e("22796"),
                                n.e("4276"),
                                n.e("50180"),
                                n.e("37497"),
                                n.e("60193"),
                                n.e("53684"),
                                n.e("89050"),
                                n.e("88610"),
                                n.e("33087"),
                                n.e("4189"),
                                n.e("21739"),
                                n.e("49623"),
                                n.e("6026"),
                                n.e("1009"),
                                n.e("90862"),
                                n.e("90266"),
                                n.e("32890"),
                                n.e("16918"),
                                n.e("33730"),
                                n.e("91483"),
                                n.e("83893"),
                                n.e("70278"),
                                n.e("16860"),
                                n.e("56359"),
                                n.e("63051"),
                                n.e("99501"),
                                n.e("59494"),
                                n.e("33287"),
                                n.e("19709"),
                                n.e("67458"),
                                n.e("58427"),
                                n.e("20642"),
                                n.e("29161"),
                                n.e("98180"),
                                n.e("41625"),
                                n.e("7959"),
                                n.e("60717"),
                                n.e("55552"),
                                n.e("85484"),
                                n.e("8478"),
                                n.e("47704"),
                                n.e("26128"),
                                n.e("11262"),
                                n.e("54483"),
                                n.e("33460"),
                                n.e("82314"),
                                n.e("41686"),
                                n.e("25677"),
                                n.e("85411"),
                                n.e("88804"),
                                n.e("13233"),
                                n.e("89001"),
                                n.e("54558"),
                                n.e("55990"),
                                n.e("73679"),
                                n.e("35538"),
                                n.e("73178"),
                                n.e("61274"),
                                n.e("26913"),
                                n.e("41229"),
                                n.e("31592"),
                                n.e("28339"),
                                n.e("97638"),
                                n.e("22995"),
                                n.e("70141"),
                                n.e("1055"),
                                n.e("23036"),
                                n.e("3951"),
                                n.e("70736"),
                                n.e("39865"),
                                n.e("50870"),
                                n.e("43608"),
                                n.e("29944"),
                                n.e("59731"),
                                n.e("40690"),
                                n.e("98275"),
                                n.e("72651"),
                                n.e("29363"),
                                n.e("88016"),
                                n.e("38886"),
                                n.e("84133"),
                                n.e("30240"),
                                n.e("510"),
                                n.e("57447"),
                                n.e("27282"),
                                n.e("7339"),
                                n.e("90241"),
                                n.e("37271"),
                                n.e("49993"),
                                n.e("65813"),
                                n.e("68268"),
                                n.e("6788"),
                                n.e("57016"),
                                n.e("45826"),
                                n.e("9396"),
                                n.e("53075"),
                                n.e("26564"),
                                n.e("77529"),
                                n.e("10061"),
                                n.e("57766"),
                                n.e("91552"),
                                n.e("69213"),
                                n.e("86650"),
                                n.e("52196"),
                                n.e("85899"),
                                n.e("61322"),
                                n.e("43031"),
                                n.e("22656"),
                                n.e("25964"),
                                n.e("28379"),
                                n.e("41737"),
                                n.e("92330"),
                                n.e("53233"),
                                n.e("96901"),
                                n.e("71796"),
                                n.e("33600"),
                                n.e("49645"),
                                n.e("25339"),
                                n.e("84454"),
                                n.e("62426"),
                                n.e("1887"),
                                n.e("39995"),
                                n.e("25568"),
                                n.e("29272"),
                                n.e("97391"),
                                n.e("67332"),
                                n.e("57114"),
                                n.e("90059"),
                                n.e("53552"),
                                n.e("58127"),
                                n.e("816"),
                                n.e("43683"),
                                n.e("59303"),
                                n.e("31610"),
                                n.e("76444"),
                                n.e("7729"),
                                n.e("60458"),
                                n.e("58247"),
                                n.e("62448"),
                                n.e("31270"),
                                n.e("6514"),
                                n.e("8641"),
                                n.e("98394"),
                                n.e("5308"),
                                n.e("77569"),
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
                                n.e("10004"),
                                n.e("77473"),
                                n.e("53930"),
                                n.e("23353"),
                                n.e("18943"),
                                n.e("7167"),
                                n.e("25279"),
                                n.e("87306"),
                                n.e("92789"),
                                n.e("57598"),
                                n.e("31390"),
                                n.e("37687"),
                                n.e("41043"),
                                n.e("43039"),
                                n.e("26780"),
                                n.e("44265"),
                                n.e("48804"),
                                n.e("8304"),
                                n.e("84103"),
                                n.e("17225"),
                                n.e("30920"),
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
                                n.e("60658"),
                                n.e("55314"),
                                n.e("89094"),
                                n.e("6338"),
                                n.e("47834"),
                                n.e("47555"),
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
                                n.e("64046"),
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
                                n.e("31644"),
                                n.e("89790"),
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
                                n.e("7962"),
                                n.e("64325"),
                                n.e("28095"),
                                n.e("1555"),
                                n.e("32823"),
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
                                n.e("88889"),
                                n.e("47018"),
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
                                n.e("86454"),
                                n.e("38672"),
                                n.e("36611"),
                                n.e("83295"),
                                n.e("99215"),
                            ]).then(n.bind(n, 252046));
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
            },
            v = s.useCallback(
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
    },
    H = () =>
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
        S = T ? t : I,
        y = () => {
            f(!0);
        },
        C = () => {
            f(!1);
        };
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
        onRequestOpen: () => {
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
        onRequestClose: () => {
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
