n.d(t, { A: () => X });
var i,
    l = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(453903),
    o = n(990078),
    u = n(462887),
    c = n(834730),
    d = n(939249),
    m = n(789645),
    f = n(192308),
    g = n(922016),
    A = n(775602),
    E = n(429913),
    C = n(409626),
    p = n(344005),
    h = n(459746),
    S = n(311043),
    _ = n(569926),
    x = n(363195),
    v = n(760751),
    I = n(174459),
    L = n(486020),
    R = n(507107),
    T = n(551875),
    N = n(18437),
    G = n(590202),
    M = n(73473),
    O = (((i = {}).FETCH_FAILED = "FETCH_FAILED"), (i.NO_GAMES_AVAILABLE = "NO_GAMES_AVAILABLE"), i),
    P = n(190107),
    w = n(652215),
    k = n(375708),
    y = n(420298);
let j = (e) => {
        let t,
            n,
            i,
            { quest: r, onClose: s } = e,
            o = (0, a.bG)([x.A], () => x.A.getState().theme),
            f = (0, u.M)(o) ? w.NJ8.DARK : w.NJ8.LIGHT;
        return (0, l.jsxs)("div", {
            className: y.N1,
            children: [
                (0, l.jsxs)("div", {
                    className: y.VW,
                    children: [
                        (0, l.jsx)("img", {
                            className: y.rC,
                            alt: r.config.messages.gameTitle,
                            src: (0, T.tW)(r, T.fY.GAME_TILE, f).url,
                        }),
                        (0, l.jsxs)("div", {
                            className: y.if,
                            children: [
                                (0, l.jsx)(c.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        ((t = {
                                            [P.Li.PACKAGE_ACTION_ADVENTURE]: k.t.PYFVdf,
                                            [P.Li.PACKAGE_RPG_MMO]: k.t.rFQo2F,
                                            [P.Li.PACKAGE_RACING_SPORTS]: k.t.zDRa6g,
                                            [P.Li.PACKAGE_SANDBOX_CREATIVE]: k.t.vz9U2Q,
                                            [P.Li.PACKAGE_FAMILY_FRIENDLY]: k.t.IOiAE0,
                                            [P.Li.PACKAGE_HOLIDAY_SEASON]: k.t.cJPqvD,
                                            [P.Li.PACKAGE_NEW_YEARS]: k.t.S0w2mv,
                                        }),
                                        (i =
                                            (null != (n = r.config.features.find((e) => e in t)) ? t[n] : null) ??
                                            k.t["D+DkEH"]),
                                        k.intl.string(i)),
                                }),
                                (0, l.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: k.intl.string(k.t.VgN1Bn),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(d.D, {
                    className: y.b,
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: s,
                    children: (0, l.jsx)(m.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    },
    D = (e) => {
        let { quest: t, game: i, sourceQuestContent: s, onGameProfileModalOpen: u, onGameProfileModalClose: c } = e,
            m = (0, N.Ut)(),
            g = (0, a.bG)([A.Ay], () => A.Ay.useReducedMotion),
            E = r.useRef(null),
            p = null != i.gameRecord,
            S = () => {
                m({
                    questId: t.id,
                    questContent: R.uF.SPONSORED_QUEST_SHEET,
                    questContentCTA: G.Cy.GAME_STORE_OPEN_GAME_LINK,
                    sourceQuestContent: s,
                });
            },
            _ = async () => {
                p &&
                    (m({
                        questId: t.id,
                        questContent: R.uF.SPONSORED_QUEST_SHEET,
                        questContentCTA: G.Cy.GAME_PROFILE_OPEN,
                        sourceQuestContent: s,
                    }),
                    await (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("51407"),
                                n.e("2677"),
                                n.e("40989"),
                                n.e("42515"),
                                n.e("23294"),
                                n.e("32285"),
                                n.e("62924"),
                                n.e("47789"),
                                n.e("76631"),
                                n.e("83004"),
                                n.e("90163"),
                                n.e("72345"),
                                n.e("657"),
                                n.e("87550"),
                                n.e("23412"),
                                n.e("71934"),
                                n.e("33063"),
                                n.e("28379"),
                                n.e("39995"),
                                n.e("25568"),
                                n.e("394"),
                                n.e("68953"),
                                n.e("60940"),
                                n.e("48530"),
                                n.e("19393"),
                                n.e("26105"),
                                n.e("90737"),
                                n.e("72321"),
                                n.e("72451"),
                                n.e("23581"),
                                n.e("46334"),
                                n.e("26963"),
                                n.e("38805"),
                                n.e("58661"),
                                n.e("51692"),
                                n.e("55882"),
                                n.e("8981"),
                                n.e("37497"),
                                n.e("96130"),
                                n.e("41475"),
                                n.e("46912"),
                                n.e("98307"),
                                n.e("6324"),
                                n.e("22018"),
                                n.e("32124"),
                                n.e("13627"),
                                n.e("61753"),
                                n.e("68146"),
                                n.e("73890"),
                                n.e("23924"),
                                n.e("42205"),
                                n.e("71091"),
                                n.e("91680"),
                                n.e("57036"),
                                n.e("57174"),
                                n.e("98839"),
                                n.e("24199"),
                                n.e("207"),
                                n.e("10471"),
                                n.e("63232"),
                                n.e("11301"),
                                n.e("61737"),
                                n.e("60235"),
                                n.e("68261"),
                                n.e("64827"),
                                n.e("7167"),
                                n.e("96643"),
                                n.e("92789"),
                                n.e("2368"),
                                n.e("21335"),
                                n.e("47834"),
                                n.e("11735"),
                                n.e("3932"),
                                n.e("84569"),
                                n.e("62156"),
                                n.e("6338"),
                                n.e("85404"),
                                n.e("44057"),
                                n.e("19455"),
                                n.e("28504"),
                                n.e("38251"),
                                n.e("62175"),
                                n.e("7743"),
                                n.e("44571"),
                                n.e("45959"),
                                n.e("60658"),
                                n.e("8304"),
                                n.e("18573"),
                                n.e("55936"),
                                n.e("8739"),
                                n.e("8434"),
                                n.e("31988"),
                                n.e("39667"),
                                n.e("34303"),
                                n.e("28866"),
                                n.e("2419"),
                                n.e("73122"),
                                n.e("58038"),
                                n.e("93159"),
                                n.e("25246"),
                                n.e("13444"),
                                n.e("94723"),
                                n.e("62931"),
                                n.e("88941"),
                                n.e("50417"),
                                n.e("9907"),
                                n.e("6174"),
                                n.e("61379"),
                                n.e("34530"),
                                n.e("43039"),
                                n.e("9233"),
                                n.e("48804"),
                                n.e("21690"),
                                n.e("72963"),
                                n.e("32817"),
                                n.e("55112"),
                                n.e("699"),
                                n.e("13681"),
                                n.e("53729"),
                                n.e("10004"),
                                n.e("55314"),
                                n.e("89094"),
                                n.e("29177"),
                                n.e("32551"),
                                n.e("62680"),
                                n.e("63437"),
                                n.e("87306"),
                                n.e("23353"),
                                n.e("50015"),
                                n.e("38835"),
                                n.e("99666"),
                                n.e("41043"),
                                n.e("11523"),
                                n.e("44695"),
                                n.e("18441"),
                                n.e("44376"),
                                n.e("31644"),
                                n.e("45723"),
                                n.e("70697"),
                                n.e("18546"),
                                n.e("53930"),
                                n.e("31390"),
                                n.e("98125"),
                                n.e("21825"),
                                n.e("42724"),
                                n.e("90244"),
                                n.e("18943"),
                                n.e("17225"),
                                n.e("70653"),
                                n.e("96123"),
                                n.e("8892"),
                                n.e("31825"),
                                n.e("36320"),
                                n.e("20320"),
                                n.e("47017"),
                                n.e("90889"),
                                n.e("99657"),
                                n.e("26780"),
                                n.e("44265"),
                                n.e("99141"),
                                n.e("84103"),
                                n.e("88077"),
                                n.e("21435"),
                                n.e("30920"),
                                n.e("99941"),
                                n.e("25990"),
                                n.e("33902"),
                                n.e("11527"),
                                n.e("63095"),
                                n.e("52266"),
                                n.e("68647"),
                                n.e("63070"),
                                n.e("64615"),
                                n.e("96443"),
                                n.e("75134"),
                                n.e("57598"),
                                n.e("55184"),
                                n.e("23216"),
                                n.e("87079"),
                                n.e("18401"),
                                n.e("25637"),
                                n.e("32079"),
                                n.e("86814"),
                                n.e("14805"),
                                n.e("1555"),
                                n.e("73547"),
                                n.e("43300"),
                                n.e("99593"),
                                n.e("84456"),
                                n.e("47555"),
                                n.e("61935"),
                                n.e("99999"),
                                n.e("5501"),
                                n.e("62168"),
                                n.e("69875"),
                                n.e("58157"),
                                n.e("50117"),
                                n.e("23891"),
                                n.e("86949"),
                                n.e("22380"),
                                n.e("15754"),
                                n.e("79049"),
                                n.e("90191"),
                                n.e("37977"),
                                n.e("53614"),
                                n.e("31145"),
                                n.e("71577"),
                                n.e("51243"),
                                n.e("52073"),
                                n.e("9915"),
                                n.e("53374"),
                                n.e("93158"),
                                n.e("88740"),
                                n.e("51130"),
                                n.e("58428"),
                                n.e("32823"),
                                n.e("34691"),
                                n.e("92731"),
                                n.e("96325"),
                                n.e("28662"),
                                n.e("77084"),
                                n.e("85901"),
                                n.e("5131"),
                                n.e("71133"),
                                n.e("28152"),
                                n.e("75361"),
                                n.e("76428"),
                                n.e("23532"),
                                n.e("52557"),
                                n.e("95093"),
                                n.e("37687"),
                                n.e("71234"),
                                n.e("96137"),
                                n.e("48900"),
                                n.e("4450"),
                                n.e("60177"),
                                n.e("27773"),
                                n.e("5636"),
                                n.e("33861"),
                                n.e("1006"),
                                n.e("21570"),
                                n.e("68230"),
                                n.e("23276"),
                                n.e("77473"),
                                n.e("63618"),
                                n.e("55577"),
                                n.e("20282"),
                                n.e("58984"),
                                n.e("54282"),
                                n.e("78412"),
                                n.e("63213"),
                                n.e("30938"),
                                n.e("17859"),
                                n.e("30301"),
                                n.e("48720"),
                                n.e("25279"),
                                n.e("72539"),
                                n.e("88003"),
                                n.e("80239"),
                                n.e("56689"),
                                n.e("75016"),
                                n.e("2329"),
                                n.e("59880"),
                                n.e("74016"),
                                n.e("76087"),
                                n.e("12168"),
                                n.e("77333"),
                                n.e("28752"),
                                n.e("33134"),
                                n.e("80112"),
                                n.e("74907"),
                                n.e("6723"),
                                n.e("54791"),
                                n.e("21856"),
                                n.e("19666"),
                                n.e("21574"),
                                n.e("31445"),
                                n.e("8694"),
                                n.e("81987"),
                                n.e("18024"),
                                n.e("8948"),
                                n.e("36877"),
                                n.e("65826"),
                                n.e("49520"),
                                n.e("3131"),
                                n.e("69747"),
                                n.e("38501"),
                                n.e("27323"),
                                n.e("72877"),
                                n.e("26437"),
                                n.e("21930"),
                                n.e("26294"),
                                n.e("47018"),
                                n.e("93766"),
                                n.e("98329"),
                                n.e("11133"),
                                n.e("21957"),
                                n.e("68904"),
                                n.e("54622"),
                                n.e("57976"),
                                n.e("75627"),
                                n.e("22067"),
                                n.e("96268"),
                                n.e("93461"),
                                n.e("2260"),
                                n.e("54241"),
                                n.e("83827"),
                                n.e("28203"),
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
                                (0, l.jsx)(e, {
                                    gameId: i.applicationId,
                                    source: C.Ob.GameSheet,
                                    trackExternalAction: S,
                                    ...t,
                                });
                        },
                        { onCloseCallback: c },
                    ),
                    u());
            },
            x = r.useCallback(
                (e) => {
                    if (null == E.current || g) return;
                    let t = E.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        i = e.clientY - t.top,
                        l = t.width / 2,
                        r = t.height / 2;
                    E.current.style.transform = `rotateX(${-(((i - r) / r) * 15)}deg) rotateY(${((n - l) / l) * 15}deg)`;
                },
                [g],
            ),
            v = r.useCallback(() => {
                null == E.current || g || (E.current.style.transform = "rotateX(0deg) rotateY(0deg)");
            }, [g]);
        return (0, l.jsx)(o.m, {
            text: i.name,
            children: (0, l.jsx)(d.D, {
                className: y.zR,
                onClick: _,
                onMouseMove: x,
                onMouseLeave: v,
                children: (0, l.jsx)("div", {
                    ref: E,
                    className: y._M,
                    children:
                        null != i.gameRecord
                            ? (0, l.jsx)(h.A, { game: i.gameRecord, className: y.xe, size: h.w.SMALL })
                            : null != i.fallbackCoverImageUrl
                              ? (0, l.jsx)("img", { src: i.fallbackCoverImageUrl, alt: i.name, className: y.xe })
                              : null,
                }),
            }),
        });
    },
    b = () =>
        (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "75",
            height: "96",
            viewBox: "0 0 75 96",
            fill: "none",
            children: [
                (0, l.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "73",
                    height: "94",
                    rx: "8",
                    fill: "var(--background-surface-high)",
                }),
                (0, l.jsx)("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "74",
                    height: "95",
                    rx: "8.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
                (0, l.jsx)("path", {
                    d: "M2.53418 3L73.0342 93.5",
                    stroke: "var(--border-normal)",
                    strokeOpacity: "0.2",
                }),
            ],
        });
function q(e) {
    let {
        quest: t,
        applications: i,
        onClose: s,
        sourceQuestContent: o,
        impressionRef: u,
        onGameProfileModalOpen: c,
        onGameProfileModalClose: d,
    } = e;
    (0, E.A)(i), (0, _.x)(i);
    let m = (0, a.bG)([S.A], () => i.some((e) => S.A.isFetching(e))),
        g = (0, a.bG)([S.A], () => i.some((e) => S.A.didFetchingFail(e))),
        A = (0, a.yK)([S.A], () =>
            i
                .map((e) => S.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, p.oS)(e.applicationId))
                .slice(0, 10),
        ),
        C = (0, a.bG)([v.A, S.A], () => {
            let e = new Set(A.map((e) => e.applicationId));
            return i
                .filter((t) => !e.has(t))
                .filter((e) => null == S.A.getGame(e))
                .map((e) => {
                    let t = v.A.getDetectableGame(e);
                    if (t?.cover_image_hash == null) return null;
                    let n = L.Ay.getApplicationIconURL({
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
        h = r.useMemo(
            () =>
                [
                    ...A.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: e,
                        fallbackCoverImageUrl: null,
                    })),
                    ...C.map((e) => ({
                        applicationId: e.applicationId,
                        name: e.name,
                        gameRecord: null,
                        fallbackCoverImageUrl: e.coverImageUrl,
                    })),
                ].slice(0, 10),
            [A, C],
        ),
        x = r.useMemo(() => {
            let e = h.length;
            return e <= 4 ? 4 - e : 5 === e ? 0 : e <= 8 ? 8 - e : 10 - e;
        }, [h.length]),
        R = !m && 0 === h.length,
        T = g || R;
    if (
        (r.useEffect(() => {
            if (T) {
                let e = g ? O.FETCH_FAILED : O.NO_GAMES_AVAILABLE;
                I.default.track(w.HAw.QUEST_GAME_SHEET_ERROR, { quest_id: t.id, error_type: e }),
                    s(),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await n.e("91646").then(n.bind(n, 659309));
                        return (t) => (0, l.jsx)(e, { ...t });
                    });
            }
        }, [T, g, t.id, s]),
        m && !T)
    ) {
        let e = Math.min(i.length, 10);
        return (0, l.jsxs)("div", {
            className: y.kL,
            children: [
                (0, l.jsx)(j, { quest: t, onClose: s }),
                (0, l.jsx)("div", {
                    className: y.LA,
                    children: i.slice(0, e).map((e) => (0, l.jsx)("div", { className: y.Vj }, e)),
                }),
            ],
        });
    }
    return T
        ? null
        : (0, l.jsxs)("div", {
              ref: (e) => {
                  u.current = e;
              },
              className: y.kL,
              children: [
                  (0, l.jsx)(j, { quest: t, onClose: s }),
                  (0, l.jsxs)("div", {
                      className: y.LA,
                      children: [
                          h.map((e) =>
                              (0, l.jsx)(
                                  D,
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
                          Array.from({ length: x }, (e, t) => (0, l.jsx)(b, {}, `placeholder-${t}`)),
                      ],
                  }),
              ],
          });
}
function U(e) {
    let {
            targetElementRef: t,
            applications: n,
            children: i,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
            quest: u,
            sourceQuestContent: c,
            impressionRef: d,
        } = e,
        [m, f] = r.useState(!1),
        A = (0, N.Ut)(),
        E = r.useRef(null),
        C = t?.current != null,
        p = C ? t : E,
        h = () => {
            f(!0);
        },
        S = () => {
            f(!1);
        };
    return (0, l.jsx)(g.Y, {
        targetElementRef: p,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(q, {
                quest: u,
                applications: n,
                onClose: t,
                sourceQuestContent: c,
                impressionRef: d,
                onGameProfileModalOpen: h,
                onGameProfileModalClose: S,
            });
        },
        onRequestOpen: () => {
            a?.(),
                A({
                    questId: u.id,
                    questContent: c,
                    questContentCTA: G.Cy.SPONSORED_QUEST_SHEET,
                    sourceQuestContent: c,
                });
        },
        onRequestClose: () => {
            if (m) return s.o;
            o?.();
        },
        position: C ? "right" : "top",
        align: C ? "bottom" : void 0,
        spacing: 20,
        scrollBehavior: "close",
        ignoreModalClicks: !0,
        children: (e) => i(e, E),
    });
}
let X = function (e) {
    return null == e.quest || e.applications.length <= 1
        ? null
        : (0, l.jsx)(M.R, {
              questOrQuests: e.quest,
              questContent: R.uF.SPONSORED_QUEST_SHEET,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, l.jsx)(U, { ...e, impressionRef: t }),
          });
};
