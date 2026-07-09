n.d(e, { sT: () => t3, Ay: () => t9 });
var s = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(17928),
    o = n(859703),
    c = n(24001),
    u = n(347135),
    d = n(73473),
    x = n(321503);
n(134528), n(947204);
var C = n(580929),
    m = n(990078),
    E = n(462887),
    h = n(717421),
    j = n(695366),
    f = n(885574),
    O = n(661531),
    N = n(834730),
    v = n(123292),
    g = n(331322),
    A = n(508770),
    y = n(939249),
    T = n(782134),
    I = n(365199),
    S = n(820081),
    p = n(765671),
    L = n(736653),
    Q = n(814925),
    _ = n(178540),
    q = n(590202),
    w = n(710969),
    R = n(792620),
    b = n(988436),
    D = n(918338),
    k = n(270045),
    P = n(371912),
    M = n(57718),
    U = n(398025),
    z = n(617986),
    H = n(516226),
    F = n(720875),
    W = n(419367),
    K = n(652215),
    V = n(375708),
    $ = n(258118);
function B(t) {
    let { quest: e, errorHints: n, warningHints: a, isDarkTheme: l, sourceQuestContent: r } = t,
        { ref: o, height: c = 0 } = (0, p.Ay)([n]),
        d = e.userStatus?.completedAt != null,
        x = (0, u.Vn)(e),
        { type: m, hints: E } = i.useMemo(
            () =>
                d || x
                    ? { type: 2, hints: [] }
                    : n.length > 0
                      ? { type: 0, hints: n.map((t) => t.message) }
                      : a.length > 0
                        ? { type: 1, hints: a }
                        : { type: 2, hints: [] },
            [n, d, x, a],
        ),
        g = 2 !== m,
        A = (0, h.z)({ opacity: +!!g, height: g ? c : 0, config: W.N }),
        y = 0 === m ? j.E : f.m,
        T = O.A.unsafe_rawColors.RED_345.css,
        I = 0 === m ? T : l ? O.A.colors.TEXT_DEFAULT : O.A.colors.WHITE;
    return (0, s.jsx)(C.animated.div, {
        style: { height: A.height, opacity: (0, U.a)(A.opacity) },
        children: (0, s.jsxs)("div", {
            ref: o,
            className: $.XZ,
            children: [
                (0, s.jsxs)("div", {
                    className: $.M5,
                    children: [
                        (0, s.jsx)(y, { size: "xs", color: I }),
                        (0, s.jsx)(N.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "text-overlay-light",
                            children: E.at(0),
                        }),
                    ],
                }),
                0 === m &&
                    (0, s.jsx)(v.Q, {
                        text: V.intl.string(V.t["yKJi+/"]),
                        onClick: () => (0, b.i)({ quest: e, errorHints: n, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function X(t) {
    let {
            quest: e,
            isHovering: n,
            errorHints: a,
            isInFeaturedSection: l,
            warningHints: r,
            isVisibleInViewport: o,
            onCtxMenuClose: d,
            onCtxMenuOpen: x,
            onCtxMenuSelect: C,
            sourceQuestContent: h,
        } = t,
        j = (0, _.O)((t) => t.getErrorHints(e.id)),
        f = j.length > 0 ? j : a,
        v = (0, R.IO)(e),
        p = (0, L.Ay)(),
        b = ((0, E.M)(p) ? K.NJ8.DARK : K.NJ8.LIGHT) === K.NJ8.DARK,
        U = (0, u.LS)(e),
        W = e.userStatus?.claimedAt != null,
        X = (0, u.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
        G = e.userStatus?.enrolledAt != null,
        Y = e.userStatus?.completedAt != null,
        { onAssetLoadComplete: Z } = i.useContext(H.M),
        J = b ? "text-muted" : "text-overlay-light",
        tt = i.useCallback(() => {
            v &&
                (0, z.d5)({
                    quest: e,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: h,
                    sourceQuestContentCTA: q.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [v, e, h]),
        te = (0, P.UX)(e.id),
        tn = !0 === l || te,
        ts = i.useRef(null);
    return (0, s.jsxs)("div", {
        className: $.kL,
        children: [
            (0, s.jsx)("div", {
                className: $.IC,
                children: (0, s.jsx)(D.A, {
                    quest: e,
                    isInteracting: n,
                    hideAssets: !o,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: $.l1,
                    imageClassName: $.c8,
                }),
            }),
            (0, s.jsx)("div", { className: $.Lw }),
            (0, s.jsxs)("div", {
                className: $.nX,
                children: [
                    (0, s.jsxs)("div", {
                        className: $.PG,
                        children: [
                            (0, s.jsxs)("div", {
                                className: $.mY,
                                children: [
                                    (tn || e.preview) &&
                                        (0, s.jsxs)(g.B, {
                                            className: $.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                tn &&
                                                    !(0, w.Ic)(e) &&
                                                    (0, s.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                e.preview &&
                                                    (0, s.jsx)(A.E, {
                                                        type: { text: V.intl.string(V.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    v &&
                                        (0, s.jsx)(m.m, {
                                            text: Y
                                                ? V.intl.string(V.t.YsCuyF)
                                                : G
                                                  ? V.intl.string(V.t["74KqrR"])
                                                  : (0, w.Ic)(e)
                                                    ? V.intl.string(V.t.I6JG46)
                                                    : V.intl.string(V.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, s.jsx)(y.D, {
                                                className: $.iI,
                                                "aria-label": V.intl.string(V.t.RscU7I),
                                                onClick: tt,
                                                children: (0, s.jsx)(T.u, { color: "currentColor", className: $.A9 }),
                                            }),
                                        }),
                                    (0, s.jsx)(k.C, {
                                        onOpen: x,
                                        onClose: d,
                                        onSelect: C,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: e,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: h,
                                        returnRef: ts,
                                        children: (t) =>
                                            (0, s.jsx)(y.D, {
                                                ...t,
                                                innerRef: ts,
                                                className: $.iI,
                                                "aria-label": V.intl.string(V.t.DEoVWZ),
                                                children: (0, s.jsx)(I.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: $.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(F.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: $.Iu,
                                children: (0, s.jsx)(M.Ay, {
                                    className: $.Iu,
                                    logotypeClassName: $.ND,
                                    quest: e,
                                    separatorSpacing: M.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Z,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: $.E_,
                                children: [
                                    (0, s.jsxs)("span", {
                                        className: $.O,
                                        children: [
                                            (0, s.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: J,
                                                children: V.intl.string(V.t.VAbKhK),
                                            }),
                                            (0, s.jsx)(Q.A, {
                                                className: $.w$,
                                                size: 16,
                                                color: O.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": V.intl.string(V.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, s.jsx)(S.B, {
                                                    color: O.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, s.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: "text-overlay-light",
                                                children:
                                                    e.config.cosponsorMetadata?.name ?? e.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    U || W
                                        ? null
                                        : (0, s.jsx)(N.E, {
                                              variant: "text-sm/medium",
                                              color: J,
                                              children: V.intl.format(V.t["7D8r4F"], { expiryDate: X }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(B, { quest: e, errorHints: f, warningHints: r, isDarkTheme: b, sourceQuestContent: h }),
                ],
            }),
        ],
    });
}
var G = n(604121),
    Y = n(534514),
    Z = n(775602),
    J = n(409626),
    tt = n(106799),
    te = n(287809),
    tn = n(192444),
    ts = n(3738),
    ti = n(646917),
    ta = n(576761),
    tl = n(801365),
    tr = n(895253),
    to = n(453384),
    tc = n(442734),
    tu = n(646764),
    td = n(323889),
    tx = n(843282),
    tC = n(825484),
    tm = n(821609),
    tE = n(862482),
    th = n(31300),
    tj = n(687966),
    tf = n(414499),
    tO = n(274670),
    tN = n(144779),
    tv = n(403362),
    tg = n(104886);
let tA = (0, n(945810).mj)({
    name: "2026-03-desktop-live-quest-external-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ty = n(112142),
    tT = n(18437),
    tI = n(971649),
    tS = n(651892),
    tp = n(901406),
    tL = n(814793),
    tQ = n(368715),
    t_ = n(79545),
    tq = n(190107),
    tw = n(860600);
let tR = [
    {
        value: tq.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: tq.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function tb(t) {
    let e,
        n,
        { value: i } = t;
    switch (i) {
        case tq.fO.DESKTOP:
            (n = (0, s.jsx)(th.k, {})), (e = V.intl.string(V.t["QXc01+"]));
            break;
        case tq.fO.CONSOLE:
            (n = (0, s.jsx)(tj._, {})), (e = V.intl.string(V.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("div", { className: tw.FL, children: [n, e] });
}
function tD(t) {
    if (0 === t.length) return null;
    switch (t[0].value) {
        case tq.fO.DESKTOP:
            return (0, s.jsxs)("span", {
                className: tw.FL,
                children: [(0, s.jsx)(th.k, {}), V.intl.string(V.t.g6Dr44)],
            });
        case tq.fO.CONSOLE:
            return (0, s.jsxs)("span", {
                className: tw.FL,
                children: [(0, s.jsx)(tj._, {}), V.intl.string(V.t.iyNbj5)],
            });
        default:
            return (0, tv.xb)(t[0].value);
    }
}
function tk(t) {
    let { quest: e, sourceQuestContent: n } = t,
        s = (0, tI.wW)();
    return {
        externalLinkCta: (0, tS.wr)(e),
        handleOpenExternalLink: i.useCallback(() => {
            (0, tp.pu)(e, {
                content: c.uF.QUEST_HOME_DESKTOP,
                ctaContent: q.Cy.OPEN_GAME_LINK,
                impressionId: s(),
                sourceQuestContent: n,
            });
        }, [e, n, s]),
    };
}
function tP(t) {
    let { quest: e, sourceQuestContent: n, onClick: i, text: a, primaryCtaButton: l } = t,
        { externalLinkCta: r, handleOpenExternalLink: o } = tk({ quest: e, sourceQuestContent: n });
    return (0, s.jsxs)(tC.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, s.jsx)(tm.$, { variant: "secondary", text: r, onClick: o }),
            l ?? (0, s.jsx)(tm.$, { variant: "primary", onClick: i ?? void 0, text: a }),
        ],
    });
}
function tM(t) {
    let { quest: e, sourceQuestContent: n, formattedExpirationDate: i, primaryCtaButton: a } = t,
        { externalLinkCta: l, handleOpenExternalLink: r } = tk({ quest: e, sourceQuestContent: n }),
        o = V.intl.format(V.t["6p8BZx"], { expiryDate: i });
    return (0, s.jsxs)(tC.e, {
        direction: "horizontal",
        fullWidth: !0,
        wrap: !1,
        children: [
            (0, s.jsx)(tm.$, { variant: "secondary", text: l, onClick: r }),
            a ?? (0, s.jsx)(tm.$, { variant: "secondary", disabled: !0, text: o, fullWidth: !0 }),
        ],
    });
}
function tU(t) {
    var e;
    let n,
        a,
        {
            quest: l,
            questContent: d,
            onReceiveErrorHints: x,
            contentPosition: C,
            rowIndex: m,
            sourceQuestContent: E,
        } = t,
        h = (0, r.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        j = (0, P.Xf)({ useReducedMotion: h }),
        f = (0, tT.Ut)(),
        O = (0, tI.wW)(),
        N = (0, u.RR)({ quest: l }),
        v = (0, u.Vn)(l),
        g = (0, u.S5)(l.config.expiresAt, { month: "numeric", day: "numeric" }),
        {
            isClaiming: A,
            isEnrolling: y,
            isQuestEnrollmentBlocked: T,
        } = (0, r.cf)([o.A], () => ({
            isClaiming: o.A.isClaimingReward(l.id) || o.A.isFetchingRewardCode(l.id),
            isEnrolling: o.A.isEnrolling(l.id),
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        })),
        I = l.userStatus?.enrolledAt != null,
        S = l.userStatus?.completedAt != null,
        p = S && l.userStatus?.claimedAt == null,
        L = (0, w.if)(l),
        Q = !(0, w.Ic)(l),
        b = (0, u.In)(l),
        D = (0, R.IO)(l),
        k = (0, R.K$)(l),
        M = (0, R.Cr)(l),
        U = (0, u.fc)(l),
        [H, F, W] = (0, u.Qo)(l, U),
        K = Q && b === u.F3.ACCEPTED,
        $ = K && H === c.X0.SELECT,
        B = K && !$ && F.length > 1,
        X = ty.t.useConfig({ location: tq.rE.QUEST_HOME_DESKTOP }),
        G = (0, t_.Pd)(l),
        Y = (0, _.O)((t) => t.clearErrorHints),
        J = i.useCallback(
            (t) => {
                W(t), t === tq.fO.DESKTOP && (x([]), Y(l.id));
            },
            [W, x, Y, l.id],
        ),
        { text: tt, onClick: te } = (0, P._c)({
            progressState: b,
            quest: l,
            questContent: d,
            questContentPosition: C,
            questContentRowIndex: m,
            inGiftInventory: !0,
            isVideoQuest: D,
            inGameQuest: M,
            sourceQuestContent: E,
        }),
        { startingConsoleQuest: tn, startConsoleQuest: ti } = (0, u.Wj)({
            questId: l.id,
            beforeRequest: () => {
                j.startAnimation(),
                    (0, tg.E5)(tg.kI.STEP_2_CLICKED_INTERNAL, "quest_tile_cta")
                        ? (0, tO.r)({
                              type: tN.F.CLICK_INTERNAL,
                              adCreativeType: td.p.QUEST,
                              adCreativeId: l.id,
                              questContentCTA: q.Cy.DEFIBRILLATOR,
                              surfaceId: d,
                              sourceQuestContent: E,
                              questContentPosition: C,
                              questContentRowIndex: m,
                              impressionId: O(),
                          })
                        : f({
                              questId: l.id,
                              questContent: d,
                              questContentCTA: q.Cy.DEFIBRILLATOR,
                              questContentPosition: C,
                              questContentRowIndex: m,
                              sourceQuestContent: E,
                          });
            },
            afterRequest: (t) => {
                j.stopAnimation(), x(t);
            },
        }),
        ta = l.userStatus?.claimedAt != null,
        { launchInGameActivity: tl } = (0, u.zW)(l),
        tr = (0, ts.NA)({ quest: l, shortText: !0 }),
        to = (0, u.do)({ quest: l, content: d, ctaContent: q.Cy.OPEN_GAME_LINK, sourceQuestContent: E }),
        tc = (0, tS.wr)(l),
        { handleOpenExternalLink: tu } = tk({ quest: l, sourceQuestContent: E }),
        th =
            ((e = tq.rE.QUEST_HOME_DESKTOP),
            (n = tA.useConfig({ location: e }).enabled),
            (a = null != l.config.ctaConfig),
            n && a && !(0, R.g5)(l)),
        tp = th ? tu : to,
        tU = (0, R.I6)(l),
        tz = (0, s.jsx)(tm.$, { variant: "secondary", text: tc, onClick: tp }),
        tH = (0, s.jsx)(tm.$, { variant: "secondary", text: tc, onClick: tp, fullWidth: !0 }),
        tF = (0, s.jsx)(tm.$, { variant: "secondary", text: tc, onClick: to }),
        tW = null;
    return (X.enabled && G === t_.UA.EXPIRED_CLAIMABLE && X.enabledQuestStates.has(G)
        ? (tW = (0, s.jsx)("div", {
              className: tw.x6,
              children: (0, s.jsx)(tQ.A, {
                  quest: l,
                  surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                  analyticsCtxQuestContent: d,
                  analyticsCtxSourceQuestContent: E,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: m,
              }),
          }))
        : L && p
          ? (tW = (0, s.jsx)("div", {
                className: tw.x6,
                children: (0, s.jsx)(tm.$, {
                    variant: "primary",
                    loading: A,
                    onClick: te ?? void 0,
                    text: tt,
                    fullWidth: !0,
                }),
            }))
          : X.enabled && (G === t_.UA.COMPLETED || G === t_.UA.CLAIMED) && X.enabledQuestStates.has(G)
            ? (tW = D
                  ? (0, s.jsx)(tP, {
                        quest: l,
                        sourceQuestContent: E,
                        onClick: te,
                        text: tt,
                        primaryCtaButton: (0, s.jsx)(tQ.A, {
                            quest: l,
                            surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: d,
                            analyticsCtxSourceQuestContent: E,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: m,
                        }),
                    })
                  : (0, tL.vA)(l)
                    ? (0, s.jsxs)(tC.e, {
                          direction: "horizontal",
                          fullWidth: !0,
                          wrap: !1,
                          children: [
                              (0, s.jsx)(tm.$, {
                                  variant: "secondary",
                                  icon: l.config.features.includes(tq.Li.CLOUD_GAMING_ACTIVITY) ? tf.h : tj._,
                                  text: tr,
                                  onClick: () => {
                                      tl();
                                  },
                              }),
                              (0, s.jsx)(tQ.A, {
                                  quest: l,
                                  surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                                  analyticsCtxQuestContent: d,
                                  analyticsCtxSourceQuestContent: E,
                                  analyticsCtxQuestContentPosition: C,
                                  analyticsCtxQuestContentRowIndex: m,
                              }),
                          ],
                      })
                    : (0, s.jsx)("div", {
                          className: tw.x6,
                          children: (0, s.jsx)(tQ.A, {
                              quest: l,
                              surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                              analyticsCtxQuestContent: d,
                              analyticsCtxSourceQuestContent: E,
                              analyticsCtxQuestContentPosition: C,
                              analyticsCtxQuestContentRowIndex: m,
                          }),
                      }))
            : S
              ? (tW = D
                    ? (0, s.jsx)(tP, { quest: l, sourceQuestContent: E, onClick: te, text: tt })
                    : (0, tL.vA)(l)
                      ? (0, s.jsxs)(tC.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            children: [
                                (0, s.jsx)(tm.$, {
                                    variant: "secondary",
                                    icon: l.config.features.includes(tq.Li.CLOUD_GAMING_ACTIVITY) ? tf.h : tj._,
                                    text: tr,
                                    onClick: () => {
                                        tl();
                                    },
                                }),
                                (0, s.jsx)(tm.$, { variant: "primary", onClick: te ?? void 0, text: tt }),
                            ],
                        })
                      : (0, s.jsx)("div", {
                            className: tw.x6,
                            children: (0, s.jsx)(tm.$, {
                                variant: "primary",
                                onClick: te ?? void 0,
                                text: tt,
                                fullWidth: !0,
                            }),
                        }))
              : Q
                ? k
                    ? (tW = (0, s.jsx)("div", {
                          className: tw.x6,
                          children:
                              X.enabled &&
                              (G === t_.UA.UNENROLLED || G === t_.UA.ENROLLED || G === t_.UA.INCOMPLETE) &&
                              X.enabledQuestStates.has(G)
                                  ? (0, s.jsxs)(tC.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            G === t_.UA.UNENROLLED ? tF : th ? tz : null,
                                            (0, s.jsx)(tQ.A, {
                                                quest: l,
                                                surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: E,
                                                analyticsCtxQuestContentPosition: C,
                                            }),
                                        ],
                                    })
                                  : (0, s.jsx)(tC.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: (0, s.jsx)(tm.$, {
                                            variant: "primary",
                                            loading: y,
                                            onClick: te ?? void 0,
                                            text: tt,
                                            fullWidth: !0,
                                        }),
                                    }),
                      }))
                    : I && !ta
                      ? (tW = $
                            ? (0, s.jsx)(tx.Pw, {
                                  className: tw.dd,
                                  isSelected: () => !1,
                                  options: tR,
                                  placeholder: V.intl.string(V.t.drVw4T),
                                  renderOptionLabel: tb,
                                  renderOptionValue: tD,
                                  select: J,
                                  serialize: (t) => {
                                      switch (t) {
                                          case tq.fO.DESKTOP:
                                              return V.intl.string(V.t["QXc01+"]);
                                          case tq.fO.CONSOLE:
                                              return V.intl.string(V.t["8lAfuB"]);
                                          default:
                                              return (0, tv.xb)(t);
                                      }
                                  },
                                  size: "sm",
                                  "data-migration-pending": !0,
                              })
                            : tU
                              ? (0, s.jsx)("div", {
                                    className: tw.x6,
                                    children: (0, s.jsxs)(tC.e, {
                                        direction: "horizontal",
                                        fullWidth: !0,
                                        wrap: !1,
                                        children: [
                                            tz,
                                            (0, s.jsx)(tQ.A, {
                                                quest: l,
                                                surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                                                analyticsCtxQuestContent: d,
                                                analyticsCtxSourceQuestContent: E,
                                                analyticsCtxQuestContentPosition: C,
                                                analyticsCtxQuestContentRowIndex: m,
                                            }),
                                        ],
                                    }),
                                })
                              : X.enabled &&
                                  (G === t_.UA.ENROLLED || G === t_.UA.INCOMPLETE) &&
                                  X.enabledQuestStates.has(G)
                                ? th && (0, R.t)({ quest: l }) && !(0, R.g5)(l)
                                    ? (0, s.jsx)("div", { className: tw.x6, children: tH })
                                    : (0, s.jsx)("div", {
                                          className: tw.x6,
                                          children: (0, s.jsxs)(tC.e, {
                                              direction: "horizontal",
                                              fullWidth: !0,
                                              wrap: !1,
                                              children: [
                                                  th && (D || (0, tL.vA)(l)) ? tz : null,
                                                  (0, s.jsx)(tQ.A, {
                                                      quest: l,
                                                      surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                                                      analyticsCtxQuestContent: d,
                                                      analyticsCtxSourceQuestContent: E,
                                                      analyticsCtxQuestContentPosition: C,
                                                  }),
                                              ],
                                          }),
                                      })
                                : (0, R.g5)(l) && !v && H !== c.X0.DESKTOP
                                  ? N
                                      ? (0, s.jsx)("div", {
                                            className: tw.x6,
                                            children: (0, s.jsx)(tm.$, {
                                                variant: "secondary",
                                                onClick: te ?? void 0,
                                                text: tt,
                                                fullWidth: !0,
                                            }),
                                        })
                                      : (0, s.jsx)(tE.$n, {
                                            "data-migration-pending": !0,
                                            color: tE.XD.PRIMARY,
                                            onClick: ti,
                                            disabled: tn,
                                            className: tw.x6,
                                            children: (0, s.jsxs)("div", {
                                                className: tw.tn,
                                                children: [j.render(), V.intl.string(V.t.nPThNb)],
                                            }),
                                        })
                                  : D
                                    ? th
                                        ? (0, s.jsx)("div", {
                                              className: tw.x6,
                                              children: (0, s.jsxs)(tC.e, {
                                                  direction: "horizontal",
                                                  fullWidth: !0,
                                                  wrap: !1,
                                                  children: [
                                                      tz,
                                                      (0, s.jsx)(tm.$, {
                                                          variant: "primary",
                                                          onClick: te ?? void 0,
                                                          text: tt,
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, s.jsx)("div", {
                                              className: tw.x6,
                                              children: (0, s.jsx)(tm.$, {
                                                  variant: "primary",
                                                  onClick: te ?? void 0,
                                                  text: tt,
                                                  fullWidth: !0,
                                              }),
                                          })
                                    : (0, tL.vA)(l)
                                      ? th
                                          ? (0, s.jsx)("div", {
                                                className: tw.x6,
                                                children: (0, s.jsxs)(tC.e, {
                                                    direction: "horizontal",
                                                    fullWidth: !0,
                                                    wrap: !1,
                                                    children: [
                                                        tz,
                                                        (0, s.jsx)(tm.$, {
                                                            variant: "primary",
                                                            icon: (0, z.Oz)(l),
                                                            onClick: te ?? void 0,
                                                            text: tt,
                                                        }),
                                                    ],
                                                }),
                                            })
                                          : (0, s.jsx)("div", {
                                                className: tw.x6,
                                                children: (0, s.jsx)(tm.$, {
                                                    variant: "primary",
                                                    icon: (0, z.Oz)(l),
                                                    onClick: te ?? void 0,
                                                    text: tt,
                                                    fullWidth: !0,
                                                }),
                                            })
                                      : (0, s.jsx)("div", {
                                            className: tw.x6,
                                            children: th
                                                ? tH
                                                : (0, s.jsx)(tm.$, {
                                                      variant: "secondary",
                                                      disabled: !0,
                                                      text: V.intl.string(V.t["9KoPyB"]),
                                                      fullWidth: !0,
                                                  }),
                                        }))
                      : I ||
                        (tW = T
                            ? (0, s.jsxs)(tC.e, {
                                  direction: "horizontal",
                                  fullWidth: !0,
                                  wrap: !1,
                                  children: [
                                      (0, s.jsx)(tm.$, {
                                          variant: "secondary",
                                          disabled: !0,
                                          text: V.intl.string(V.t.V293qn),
                                      }),
                                      (0, s.jsx)(tm.$, {
                                          variant: "primary",
                                          onClick: () => (0, z.m6)(l, d, E),
                                          text: V.intl.string(V.t.vY9GgG),
                                      }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: tw.x6,
                                  children: (0, s.jsxs)(tC.e, {
                                      direction: "horizontal",
                                      fullWidth: !0,
                                      wrap: !1,
                                      children: [
                                          tF,
                                          X.enabled &&
                                          G === t_.UA.UNENROLLED &&
                                          X.enabledQuestStates.has(t_.UA.UNENROLLED)
                                              ? (0, s.jsx)(tQ.A, {
                                                    quest: l,
                                                    surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                                                    analyticsCtxQuestContent: d,
                                                    analyticsCtxSourceQuestContent: E,
                                                    analyticsCtxQuestContentPosition: C,
                                                })
                                              : (0, s.jsx)(tm.$, {
                                                    loading: y,
                                                    variant: "primary",
                                                    onClick: te ?? void 0,
                                                    text: tt,
                                                    icon: (0, z.Oz)(l),
                                                    fullWidth: !0,
                                                }),
                                      ],
                                  }),
                              }))
                : (tW =
                      X.enabled && G === t_.UA.EXPIRED && X.enabledQuestStates.has(G)
                          ? (0, s.jsx)(tM, {
                                quest: l,
                                sourceQuestContent: E,
                                formattedExpirationDate: g,
                                primaryCtaButton: (0, s.jsx)(tQ.A, {
                                    quest: l,
                                    surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                                    analyticsCtxQuestContent: d,
                                    analyticsCtxSourceQuestContent: E,
                                    analyticsCtxQuestContentPosition: C,
                                    analyticsCtxQuestContentRowIndex: m,
                                }),
                            })
                          : (0, s.jsx)(tM, { quest: l, sourceQuestContent: E, formattedExpirationDate: g })),
    null == tW)
        ? null
        : (0, s.jsxs)("div", {
              className: tw.kL,
              children: [
                  (0, s.jsx)("div", { className: tw.qz, children: tW }),
                  B &&
                      (0, s.jsx)("div", {
                          className: tw.qz,
                          children: (0, s.jsx)(tx.Pw, {
                              className: tw.xZ,
                              isSelected: (t) => {
                                  switch (H) {
                                      case c.X0.DESKTOP:
                                          return t === tq.fO.DESKTOP;
                                      case c.X0.CONSOLE:
                                          return t === tq.fO.CONSOLE;
                                      default:
                                          return !1;
                                  }
                              },
                              options: tR,
                              placeholder: V.intl.string(V.t.drVw4T),
                              renderOptionLabel: tb,
                              renderOptionValue: tD,
                              select: J,
                              serialize: (t) => {
                                  switch (t) {
                                      case tq.fO.DESKTOP:
                                          return V.intl.string(V.t["QXc01+"]);
                                      case tq.fO.CONSOLE:
                                          return V.intl.string(V.t["8lAfuB"]);
                                  }
                              },
                              size: "sm",
                              "data-migration-pending": !0,
                          }),
                      }),
              ],
          });
}
let tz = [
    {
        value: tq.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: tq.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function tH(t) {
    let e,
        n,
        { value: i } = t;
    switch (i) {
        case tq.fO.DESKTOP:
            (n = (0, s.jsx)(th.k, {})), (e = V.intl.string(V.t["QXc01+"]));
            break;
        case tq.fO.CONSOLE:
            (n = (0, s.jsx)(tj._, {})), (e = V.intl.string(V.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("div", { className: tw.FL, children: [n, e] });
}
function tF(t) {
    let e, n;
    if (0 === t.length) return null;
    switch (t[0].value) {
        case tq.fO.DESKTOP:
            (n = (0, s.jsx)(th.k, {})), (e = V.intl.string(V.t.g6Dr44));
            break;
        case tq.fO.CONSOLE:
            (n = (0, s.jsx)(tj._, {})), (e = V.intl.string(V.t.iyNbj5));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("span", { className: tw.FL, children: [n, e] });
}
function tW(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
        } = t,
        { launchInGameActivity: r } = (0, u.zW)(e),
        o = (0, ts.NA)({ quest: e, shortText: !0 });
    return (0, s.jsx)("div", {
        className: tw.qz,
        children: (0, s.jsxs)(tC.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(tm.$, {
                    variant: "secondary",
                    icon: e.config.features.includes(tq.Li.CLOUD_GAMING_ACTIVITY) ? tf.h : tj._,
                    text: o,
                    onClick: r,
                }),
                (0, s.jsx)(tQ.A, {
                    quest: e,
                    surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: i,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: l,
                }),
            ],
        }),
    });
}
function tK(t) {
    let { quest: e, content: n, sourceQuestContent: a, fullWidth: l } = t,
        { externalLinkCta: r, handleOpenExternalLink: o } = (function (t) {
            let { quest: e, content: n, sourceQuestContent: s } = t,
                a = (0, tI.wW)();
            return {
                externalLinkCta: (0, tS.wr)(e),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, tp.pu)(e, {
                        content: n,
                        ctaContent: q.Cy.OPEN_GAME_LINK,
                        impressionId: a(),
                        sourceQuestContent: s,
                    });
                }, [e, n, s, a]),
            };
        })({ quest: e, content: n, sourceQuestContent: a });
    return (0, s.jsx)(tm.$, { variant: "secondary", text: r, onClick: o, fullWidth: l });
}
function tV(t) {
    let { quest: e, content: n, sourceQuestContent: i } = t;
    return (0, s.jsx)("div", {
        className: tw.qz,
        children: (0, s.jsx)(tK, { quest: e, content: n, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function t$(t) {
    let {
            quest: e,
            ctaQuestState: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: r,
        } = t,
        o = (function (t, e) {
            switch (t) {
                case t_.UA.EXPIRED_CLAIMABLE:
                case t_.UA.EXPIRED:
                    return !0;
                case t_.UA.CLAIMED:
                case t_.UA.COMPLETED:
                    return (0, R.vv)(e) || (0, tL.vA)(e);
                case t_.UA.INCOMPLETE:
                case t_.UA.ENROLLED:
                    return (0, R.vv)(e) || (0, tL.vA)(e) || (0, R.I6)(e);
                case t_.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(n, e);
    return (0, s.jsx)("div", {
        className: tw.qz,
        children: (0, s.jsxs)(tC.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, s.jsx)(tK, { quest: e, content: i, sourceQuestContent: a }),
                (0, s.jsx)(tQ.A, {
                    quest: e,
                    surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: i,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: r,
                }),
            ],
        }),
    });
}
function tB(t) {
    let { quest: e, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: i } = t;
    return (0, s.jsx)("div", {
        className: tw.qz,
        children: (0, s.jsxs)(tC.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(tm.$, { variant: "secondary", disabled: !0, text: V.intl.string(V.t.V293qn) }),
                (0, s.jsx)(tm.$, {
                    variant: "primary",
                    onClick: () => (0, z.m6)(e, n, i),
                    text: V.intl.string(V.t.vY9GgG),
                }),
            ],
        }),
    });
}
function tX(t) {
    let {
            quest: e,
            onReceiveErrorHints: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: o,
        } = t,
        d = (0, u.fc)(e),
        x = (0, _.O)((t) => t.clearErrorHints),
        [C, m, E] = (0, u.Qo)(e, d),
        h = i.useCallback(
            (t) => {
                E(t), t === tq.fO.DESKTOP && (n([]), x(e.id));
            },
            [E, n, x, e.id],
        );
    return C === c.X0.SELECT
        ? (0, s.jsx)(tx.Pw, {
              className: tw.dd,
              isSelected: () => !1,
              options: tz,
              placeholder: V.intl.string(V.t.drVw4T),
              renderOptionLabel: tH,
              renderOptionValue: tF,
              select: h,
              serialize: (t) => {
                  switch (t) {
                      case tq.fO.DESKTOP:
                          return V.intl.string(V.t["QXc01+"]);
                      case tq.fO.CONSOLE:
                          return V.intl.string(V.t["8lAfuB"]);
                      default:
                          return V.intl.string(V.t.WLDKSb);
                  }
              },
              size: "sm",
              "data-migration-pending": !0,
          })
        : m.length > 1
          ? (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)("div", {
                        className: tw.qz,
                        children: (0, s.jsx)(tQ.A, {
                            quest: e,
                            surface: t_.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: a,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: r,
                            analyticsCtxQuestContentRowIndex: o,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: tw.qz,
                        children: (0, s.jsx)(tx.Pw, {
                            className: tw.xZ,
                            isSelected: (t) => {
                                switch (C) {
                                    case c.X0.DESKTOP:
                                        return t === tq.fO.DESKTOP;
                                    case c.X0.CONSOLE:
                                        return t === tq.fO.CONSOLE;
                                    default:
                                        return !1;
                                }
                            },
                            options: tz,
                            placeholder: V.intl.string(V.t.drVw4T),
                            renderOptionLabel: tH,
                            renderOptionValue: tF,
                            select: h,
                            serialize: (t) => {
                                switch (t) {
                                    case tq.fO.DESKTOP:
                                        return V.intl.string(V.t["QXc01+"]);
                                    case tq.fO.CONSOLE:
                                        return V.intl.string(V.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, s.jsx)(t$, {
                quest: e,
                ctaQuestState: t_.UA.ENROLLED,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: o,
            });
}
function tG(t) {
    let {
            quest: e,
            questContent: n,
            onReceiveErrorHints: i,
            contentPosition: a,
            rowIndex: l,
            sourceQuestContent: c,
        } = t,
        u = (0, t_.Pd)(e),
        { isQuestEnrollmentBlocked: d } = (0, r.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return u === t_.UA.UNENROLLED && d
        ? (0, s.jsx)("div", {
              className: tw.kL,
              children: (0, s.jsx)(tB, { quest: e, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: c }),
          })
        : u === t_.UA.ENROLLED && (0, R.g5)(e)
          ? (0, s.jsx)("div", {
                className: tw.kL,
                children: (0, s.jsx)(tX, {
                    quest: e,
                    onReceiveErrorHints: i,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: l,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: c,
                }),
            })
          : (u === t_.UA.ENROLLED || u === t_.UA.INCOMPLETE) && (0, R.no)(e)
            ? (0, s.jsx)("div", {
                  className: tw.kL,
                  children: (0, s.jsx)(tV, { quest: e, content: n, sourceQuestContent: c }),
              })
            : (u === t_.UA.COMPLETED || u === t_.UA.CLAIMED) && (0, tL.vA)(e)
              ? (0, s.jsx)("div", {
                    className: tw.kL,
                    children: (0, s.jsx)(tW, {
                        quest: e,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: c,
                        analyticsCtxQuestContentPosition: a,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                })
              : (0, s.jsx)("div", {
                    className: tw.kL,
                    children: (0, s.jsx)(t$, {
                        quest: e,
                        ctaQuestState: u,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: c,
                        analyticsCtxQuestContentPosition: a,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                });
}
var tY = n(847483);
async function tZ() {
    return await n.e("40119").then(n.t.bind(n, 718698, 19));
}
function tJ(t) {
    let {
            quest: e,
            questContent: n,
            isHovering: a,
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: d,
            onReceiveErrorHints: x,
            sourceQuestContent: m,
            questNameHeadingId: E,
        } = t,
        j = i.useRef(null),
        f = (0, ti.z)(),
        O = (0, u.SD)(e, f),
        v = f === ta.MA.NITRO && O,
        g = (0, r.bG)([te.default], () => te.default.getCurrentUser()),
        A = (0, tl.mq)(e.config, g),
        y = (0, tl.mH)(e.config, g),
        T = e.userStatus?.enrolledAt != null,
        { ref: I, scrollHeight: S } = (0, p.wR)(),
        L = null != S && S > 104,
        { onAssetLoadComplete: Q } = i.useContext(H.M),
        { expansionSpring: _ } = (0, h.z)({ expansionSpring: +!!a, config: { ...W.N, clamp: !0 } }),
        q = e.userStatus?.completedAt != null,
        b = e.userStatus?.claimedAt != null,
        D = (0, tl.ks)(e.config),
        k = e.userStatus?.orbQuantityClaimed ?? (0, tl._Z)(e.config),
        P = (0, tl.wo)(e.config, g),
        M = (0, R.I6)(e),
        { completedRatio: z, completedRatioDisplay: K } = (0, u.O9)(e, M),
        $ = (0, ts.A9)(e, m, tq.rE.QUEST_HOME_DESKTOP, J.GameProfileSources.QuestHome, j),
        B = (function (t, e) {
            let { variant: n } = tn.Mk.useConfig({ location: e });
            return n === tn.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? t.messages.gamePublisher
                : n === tn.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? t.messages.questName
                  : V.intl.format(V.t.EAYZAr, { questName: t.messages.questName });
        })(e.config, tq.rE.QUEST_HOME_DESKTOP),
        X = i.useMemo(
            () =>
                b && D
                    ? (0, s.jsxs)(
                          t0,
                          {
                              questId: e.id,
                              children: [
                                  (0, s.jsx)(tt.A, { shouldUseThemeColor: !0, className: tY.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: k ?? 0 }),
                              ],
                          },
                          e.id,
                      )
                    : b
                      ? (0, s.jsx)(t0, { questId: e.id, children: A })
                      : D
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, s.jsxs)(
                                      t0,
                                      {
                                          questId: e.id,
                                          children: [
                                              (0, s.jsx)(tt.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: tY.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: P ?? 0 }),
                                          ],
                                      },
                                      e.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, s.jsx)(t0, { questId: e.id, children: y }, e.id),
                          }),
            [A, b, y, e.id, P, k, D],
        ),
        td = i.useMemo(() => {
            if (null != $)
                return (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: tY.h_,
                    children: $,
                });
        }, [$]),
        tx = (0, r.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        { enabled: tC } = tn.MV.useConfig({ location: tq.rE.QUEST_HOME_DESKTOP });
    return (0, s.jsxs)("div", {
        className: tY.kL,
        ref: j,
        children: [
            (0, s.jsx)(tr.A, { visible: v, glow: !0 }),
            (0, s.jsxs)(C.animated.div, {
                style: { maxHeight: _.to([0, 1], [104, (S ?? 0) + 12]) },
                className: tY.z,
                children: [
                    (0, s.jsx)("div", {
                        className: tY.c6,
                        children: (0, s.jsxs)(F.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !b && q && (0, s.jsx)("div", { className: tY.Nz }),
                                T
                                    ? (0, s.jsxs)("div", {
                                          className: tY.Tr,
                                          children: [
                                              q &&
                                                  (0, s.jsx)(G.a, {
                                                      importData: tZ,
                                                      className: tY.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !tx,
                                                  }),
                                              (0, s.jsx)(to.A, {
                                                  size: 76,
                                                  percentComplete: z,
                                                  overlayText: a && !(0, w.Ic)(e) ? K : void 0,
                                                  children: (0, s.jsx)(tu.A, {
                                                      quest: e,
                                                      questContent: n,
                                                      autoplay: a,
                                                      onLoadComplete: Q,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: m,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(tu.A, {
                                          quest: e,
                                          autoplay: a,
                                          questContent: n,
                                          className: tY.eB,
                                          onLoadComplete: Q,
                                          lazyLoad: !0,
                                          sourceQuestContent: m,
                                      }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        ref: I,
                        className: l()(tY.FS, { [tY.wq]: !L }),
                        children: [
                            (0, s.jsx)(Y.D, {
                                id: E,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: tY.G$,
                                children: B,
                            }),
                            O
                                ? (0, s.jsxs)("div", {
                                      className: tY.xv,
                                      children: [
                                          (0, s.jsx)(N.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: tY.wx,
                                              children: X,
                                          }),
                                          (0, s.jsx)(tc.e, { questId: e.id, orbMultiplierEligibility: f }),
                                      ],
                                  })
                                : (0, s.jsx)(N.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: tY.wx,
                                      children: X,
                                  }),
                            td,
                        ],
                    }),
                    L &&
                        (0, s.jsx)(C.animated.div, {
                            style: { opacity: (0, U.a)(_.to([0, 1], [1, 0])) },
                            className: tY.hS,
                        }),
                ],
            }),
            (0, s.jsx)(tC ? tG : tU, {
                quest: e,
                questContent: n,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: x,
                sourceQuestContent: m,
            }),
        ],
    });
}
let t0 = i.memo(function (t) {
    let { questId: e, children: n } = t;
    return (0, s.jsx)(
        N.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: tY.wx, children: n },
        `${e}_reward`,
    );
});
var t1 = n(688755),
    t6 = n(831368),
    t8 = n(124900);
function t3(t, e) {
    return null == e ? `quest-tile-${t}` : `quest-tile-${t}-${e}`;
}
function t7(t) {
    let {
            quest: e,
            className: n,
            sectionIdentifier: a,
            isInFeaturedSection: r,
            questContent: o,
            contentPosition: c,
            rowIndex: d,
            eagerLoadAssets: C,
            impressionRef: m,
            sourceQuestContent: E,
        } = t,
        h = i.useId(),
        [j, f] = i.useState(!1),
        [O, N] = i.useState([]),
        v = (0, u.aC)(e),
        {
            handleHoverStart: g,
            handleHoverEnd: A,
            isEventWithinParent: y,
        } = (0, t1.B)({ quest: e, questContent: o, contentPosition: c, rowIndex: d, sourceQuestContent: E }),
        T = i.useContext(x.X),
        { visibilityElementRef: I, almostVisibleInViewport: S } = (0, t6.I)(
            T?.current?.getScrollerNode() ?? null,
            C ?? !1,
        );
    return (0, s.jsxs)("article", {
        id: t3(e.id, a),
        ref: (t) => {
            (m.current = t), (I.current = t);
        },
        "aria-labelledby": h,
        className: l()(t8.k, n),
        onMouseEnter: () => {
            f(!0), g();
        },
        onMouseLeave: () => {
            f(!1), A();
        },
        onFocus: (t) => {
            y(t) || (f(!0), g());
        },
        onBlur: (t) => {
            y(t) || (f(!1), A());
        },
        children: [
            (0, s.jsx)(X, {
                quest: e,
                isInFeaturedSection: r,
                isHovering: j,
                errorHints: O,
                warningHints: v,
                isVisibleInViewport: S,
                sourceQuestContent: E,
            }),
            (0, s.jsx)(tJ, {
                quest: e,
                questContent: o,
                isHovering: j,
                contentPosition: c,
                rowIndex: d,
                onReceiveErrorHints: N,
                isVisibleInViewport: S,
                sourceQuestContent: E,
                questNameHeadingId: h,
            }),
        ],
    });
}
let t9 = i.memo(function (t) {
    let e = (0, r.bG)([o.A], () => (null != t.questId ? o.A.getQuest(t.questId) : void 0), [t.questId]),
        n = i.useMemo(() => (null != t.quest ? t.quest : e), [e, t.quest]);
    return null == n
        ? null
        : (0, s.jsx)(d.R, {
              questOrQuests: n,
              questContent: t.questContent,
              questContentPosition: t.contentPosition,
              questContentRowIndex: t.rowIndex,
              trackGuildAndChannelMetadata: t.questContent === c.uF.QUESTS_EMBED,
              sourceQuestContent: t.sourceQuestContent,
              children: (e) => (0, s.jsx)(t7, { ...t, quest: n, impressionRef: e }),
          });
});
