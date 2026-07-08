n.d(t, { A: () => Y });
var i,
    r = n(627968),
    l = n(64700),
    a = n(323889),
    s = n(17928),
    o = n(453903),
    u = n(990078),
    c = n(462887),
    d = n(834730),
    f = n(939249),
    m = n(789645),
    g = n(192308),
    E = n(922016),
    A = n(775602),
    C = n(274670),
    _ = n(144779),
    p = n(429913),
    S = n(409626),
    I = n(344005),
    T = n(459746),
    h = n(311043),
    R = n(569926),
    L = n(363195),
    N = n(760751),
    v = n(174459),
    x = n(486020),
    G = n(24001),
    P = n(104886),
    O = n(46948),
    M = n(18437),
    y = n(590202),
    k = n(971649),
    D = n(73473),
    w = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    q = n(190107),
    b = n(652215),
    U = n(375708),
    j = n(420298);
function Q(e) {
    let t,
        n,
        i,
        { quest: l, onClose: a } = e,
        o = (0, s.bG)([L.A], () => L.A.getState().theme),
        u = (0, c.M)(o) ? b.NJ8.DARK : b.NJ8.LIGHT;
    return (0, r.jsxs)("div", {
        className: j.N1,
        children: [
            (0, r.jsxs)("div", {
                className: j.VW,
                children: [
                    (0, r.jsx)("img", {
                        className: j.rC,
                        alt: l.config.messages.gameTitle,
                        src: (0, O.tW)(l, O.fY.GAME_TILE, u).url,
                    }),
                    (0, r.jsxs)("div", {
                        className: j.if,
                        children: [
                            (0, r.jsx)(d.E, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children:
                                    ((t = {
                                        [q.Li.PACKAGE_ACTION_ADVENTURE]: U.t.PYFVdf,
                                        [q.Li.PACKAGE_RPG_MMO]: U.t.rFQo2F,
                                        [q.Li.PACKAGE_RACING_SPORTS]: U.t.zDRa6g,
                                        [q.Li.PACKAGE_SANDBOX_CREATIVE]: U.t.vz9U2Q,
                                        [q.Li.PACKAGE_FAMILY_FRIENDLY]: U.t.IOiAE0,
                                        [q.Li.PACKAGE_HOLIDAY_SEASON]: U.t.cJPqvD,
                                        [q.Li.PACKAGE_NEW_YEARS]: U.t.S0w2mv,
                                    }),
                                    (i =
                                        (null != (n = l.config.features.find((e) => e in t)) ? t[n] : null) ??
                                        U.t["D+DkEH"]),
                                    U.intl.string(i)),
                            }),
                            (0, r.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: U.intl.string(U.t.VgN1Bn),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(f.D, {
                className: j.b,
                "aria-label": U.intl.string(U.t.cpT0Cq),
                onClick: a,
                children: (0, r.jsx)(m.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
let F = (e) => {
    let { quest: t, game: i, sourceQuestContent: o, onGameProfileModalOpen: c, onGameProfileModalClose: d } = e,
        m = (0, M.Ut)(),
        E = (0, k.go)(),
        p = (0, s.bG)([A.Ay], () => A.Ay.useReducedMotion),
        I = l.useRef(null),
        h = null != i.gameRecord;
    function R() {
        (0, P.E5)(P.kI.STEP_3_CLICKED_EXTERNAL, "game_sheet_external")
            ? (0, C.r)({
                  type: _.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: a.p.QUEST,
                  adCreativeId: t.id,
                  questContentCTA: y.Cy.GAME_STORE_OPEN_GAME_LINK,
                  surfaceId: G.uF.SPONSORED_QUEST_SHEET,
                  sourceQuestContent: o,
              })
            : m({
                  questId: t.id,
                  questContent: G.uF.SPONSORED_QUEST_SHEET,
                  questContentCTA: y.Cy.GAME_STORE_OPEN_GAME_LINK,
                  sourceQuestContent: o,
              });
    }
    async function L() {
        h &&
            ((0, P.E5)(P.kI.STEP_2_CLICKED_INTERNAL, "game_sheet_application")
                ? (0, C.r)({
                      type: _.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: y.Cy.GAME_PROFILE_OPEN,
                      surfaceId: G.uF.SPONSORED_QUEST_SHEET,
                      sourceQuestContent: o,
                      impressionId: E,
                  })
                : m({
                      questId: t.id,
                      questContent: G.uF.SPONSORED_QUEST_SHEET,
                      questContentCTA: y.Cy.GAME_PROFILE_OPEN,
                      sourceQuestContent: o,
                  }),
            await (0, g.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("50884"),
                        n.e("57123"),
                        n.e("69091"),
                        n.e("26889"),
                        n.e("7729"),
                        n.e("47728"),
                        n.e("59252"),
                        n.e("39156"),
                        n.e("90266"),
                        n.e("15476"),
                        n.e("97189"),
                        n.e("42791"),
                        n.e("72651"),
                        n.e("29363"),
                        n.e("62448"),
                        n.e("74907"),
                        n.e("31270"),
                        n.e("22995"),
                        n.e("6514"),
                        n.e("86832"),
                        n.e("76342"),
                        n.e("60988"),
                        n.e("69273"),
                        n.e("72210"),
                        n.e("3155"),
                        n.e("82104"),
                        n.e("41711"),
                        n.e("65264"),
                        n.e("49623"),
                        n.e("35316"),
                        n.e("38838"),
                        n.e("45214"),
                        n.e("99253"),
                        n.e("17202"),
                        n.e("90862"),
                        n.e("16918"),
                        n.e("33730"),
                        n.e("24059"),
                        n.e("31837"),
                        n.e("42306"),
                        n.e("11291"),
                        n.e("96846"),
                        n.e("19709"),
                        n.e("4251"),
                        n.e("47412"),
                        n.e("65327"),
                        n.e("41625"),
                        n.e("96490"),
                        n.e("85484"),
                        n.e("51772"),
                        n.e("6605"),
                        n.e("11262"),
                        n.e("54483"),
                        n.e("62461"),
                        n.e("25677"),
                        n.e("88804"),
                        n.e("89001"),
                        n.e("75029"),
                        n.e("73679"),
                        n.e("35538"),
                        n.e("73178"),
                        n.e("59012"),
                        n.e("25336"),
                        n.e("429"),
                        n.e("35126"),
                        n.e("333"),
                        n.e("28443"),
                        n.e("68515"),
                        n.e("97638"),
                        n.e("84896"),
                        n.e("38759"),
                        n.e("51943"),
                        n.e("90072"),
                        n.e("88016"),
                        n.e("84133"),
                        n.e("55953"),
                        n.e("13627"),
                        n.e("57940"),
                        n.e("58171"),
                        n.e("44511"),
                        n.e("39375"),
                        n.e("47944"),
                        n.e("84473"),
                        n.e("70990"),
                        n.e("15130"),
                        n.e("80816"),
                        n.e("74051"),
                        n.e("50541"),
                        n.e("8641"),
                        n.e("6247"),
                        n.e("70298"),
                        n.e("82041"),
                        n.e("39680"),
                        n.e("23924"),
                        n.e("42205"),
                        n.e("55675"),
                        n.e("48226"),
                        n.e("10471"),
                        n.e("64827"),
                        n.e("63232"),
                        n.e("68261"),
                        n.e("7167"),
                        n.e("11301"),
                        n.e("96643"),
                        n.e("84569"),
                        n.e("60235"),
                        n.e("61737"),
                        n.e("92789"),
                        n.e("21335"),
                        n.e("77333"),
                        n.e("47834"),
                        n.e("11735"),
                        n.e("85927"),
                        n.e("834"),
                        n.e("2368"),
                        n.e("42842"),
                        n.e("33115"),
                        n.e("6338"),
                        n.e("18573"),
                        n.e("55936"),
                        n.e("85404"),
                        n.e("44057"),
                        n.e("17879"),
                        n.e("88774"),
                        n.e("10120"),
                        n.e("62175"),
                        n.e("31988"),
                        n.e("44571"),
                        n.e("34303"),
                        n.e("97270"),
                        n.e("45959"),
                        n.e("73122"),
                        n.e("8304"),
                        n.e("93159"),
                        n.e("71202"),
                        n.e("8739"),
                        n.e("88131"),
                        n.e("42834"),
                        n.e("43430"),
                        n.e("94723"),
                        n.e("62931"),
                        n.e("58529"),
                        n.e("58038"),
                        n.e("62531"),
                        n.e("44974"),
                        n.e("6174"),
                        n.e("9233"),
                        n.e("36877"),
                        n.e("72963"),
                        n.e("52511"),
                        n.e("7575"),
                        n.e("42724"),
                        n.e("93766"),
                        n.e("24303"),
                        n.e("98329"),
                        n.e("21957"),
                        n.e("28095"),
                        n.e("21200"),
                        n.e("54622"),
                        n.e("28203"),
                        n.e("25949"),
                        n.e("79049"),
                        n.e("37977"),
                        n.e("28662"),
                        n.e("95152"),
                        n.e("71133"),
                        n.e("77084"),
                        n.e("23532"),
                        n.e("52557"),
                        n.e("28152"),
                        n.e("55654"),
                        n.e("76428"),
                        n.e("96137"),
                        n.e("48900"),
                        n.e("68574"),
                        n.e("63645"),
                        n.e("27773"),
                        n.e("5636"),
                        n.e("32085"),
                        n.e("82069"),
                        n.e("24038"),
                        n.e("37687"),
                        n.e("71234"),
                        n.e("34691"),
                        n.e("7323"),
                        n.e("60177"),
                        n.e("20282"),
                        n.e("54282"),
                        n.e("77473"),
                        n.e("63618"),
                        n.e("38755"),
                        n.e("80239"),
                        n.e("1462"),
                        n.e("28752"),
                        n.e("2329"),
                        n.e("35996"),
                        n.e("40362"),
                        n.e("76087"),
                        n.e("25279"),
                        n.e("88003"),
                        n.e("31445"),
                        n.e("78412"),
                        n.e("18024"),
                        n.e("88990"),
                        n.e("9793"),
                        n.e("30938"),
                        n.e("43549"),
                        n.e("48720"),
                        n.e("97288"),
                        n.e("10575"),
                        n.e("19666"),
                        n.e("91254"),
                        n.e("54630"),
                        n.e("42489"),
                        n.e("21574"),
                        n.e("59880"),
                        n.e("6723"),
                        n.e("9729"),
                        n.e("54791"),
                        n.e("60658"),
                        n.e("81987"),
                        n.e("21856"),
                        n.e("5563"),
                        n.e("27323"),
                        n.e("69747"),
                        n.e("3131"),
                        n.e("65826"),
                        n.e("49520"),
                        n.e("54241"),
                        n.e("26437"),
                        n.e("21930"),
                        n.e("72877"),
                        n.e("11133"),
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
                        n.e("80077"),
                        n.e("83827"),
                        n.e("93767"),
                        n.e("48407"),
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
                            source: S.GameProfileSources.GameSheet,
                            trackExternalAction: R,
                            ...t,
                        });
                },
                { onCloseCallback: d },
            ),
            c());
    }
    let N = l.useCallback(
            (e) => {
                if (null == I.current || p) return;
                let t = I.current.getBoundingClientRect(),
                    n = e.clientX - t.left,
                    i = e.clientY - t.top,
                    r = t.width / 2,
                    l = t.height / 2;
                I.current.style.transform = `rotateX(${-(((i - l) / l) * 15)}deg) rotateY(${((n - r) / r) * 15}deg)`;
            },
            [p],
        ),
        v = l.useCallback(() => {
            null == I.current || p || (I.current.style.transform = "rotateX(0deg) rotateY(0deg)");
        }, [p]);
    return (0, r.jsx)(u.m, {
        text: i.name,
        children: (0, r.jsx)(f.D, {
            className: j.zR,
            onClick: L,
            onMouseMove: N,
            onMouseLeave: v,
            children: (0, r.jsx)("div", {
                ref: I,
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
};
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
function K(e) {
    let {
        quest: t,
        applications: i,
        onClose: a,
        sourceQuestContent: o,
        impressionRef: u,
        onGameProfileModalOpen: c,
        onGameProfileModalClose: d,
    } = e;
    (0, p.A)(i), (0, R.x)(i);
    let f = (0, s.bG)([h.A], () => i.some((e) => h.A.isFetching(e))),
        m = (0, s.bG)([h.A], () => i.some((e) => h.A.didFetchingFail(e))),
        E = (0, s.yK)([h.A], () =>
            i
                .map((e) => h.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, I.oS)(e.applicationId))
                .slice(0, 10),
        ),
        A = (0, s.bG)([N.A, h.A], () => {
            let e = new Set(E.map((e) => e.applicationId));
            return i
                .filter((t) => !e.has(t))
                .filter((e) => null == h.A.getGame(e))
                .map((e) => {
                    let t = N.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = x.Ay.getApplicationIconURL({
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
                    ...E.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...A.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [E, A],
        ),
        _ = l.useMemo(() => {
            let e = C.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [C.length]),
        S = !f && 0 === C.length,
        T = m || S;
    if (
        (l.useEffect(() => {
            if (T) {
                let e = m ? w.FETCH_FAILED : w.NO_GAMES_AVAILABLE;
                v.default.track(b.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    a(),
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            }
        }, [T, m, t.id, a]),
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
function H(e) {
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
        A = (0, M.Ut)(),
        p = (0, k.go)(),
        S = l.useRef(null),
        I = t?.current != null,
        T = I ? t : S;
    function h() {
        g(!0);
    }
    function R() {
        g(!1);
    }
    return (0, r.jsx)(E.Y, {
        targetElementRef: T,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(K, {
                quest: c,
                applications: n,
                onClose: t,
                sourceQuestContent: d,
                impressionRef: f,
                onGameProfileModalOpen: h,
                onGameProfileModalClose: R,
            });
        },
        onRequestOpen: function () {
            s?.(),
                (0, P.E5)(P.kI.STEP_2_CLICKED_INTERNAL, "game_sheet_popout")
                    ? (0, C.r)({
                          type: _.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: c.id,
                          questContentCTA: y.Cy.SPONSORED_QUEST_SHEET,
                          surfaceId: d,
                          sourceQuestContent: d,
                          impressionId: p,
                      })
                    : A({
                          questId: c.id,
                          questContent: d,
                          questContentCTA: y.Cy.SPONSORED_QUEST_SHEET,
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
        children: (e) => i(e, S),
    });
}
let Y = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, r.jsx)(D.R, {
              questOrQuests: e.quest,
              questContent: G.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(H, { ...e, impressionRef: t }),
          });
};
