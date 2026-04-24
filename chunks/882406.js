s.d(t, { R: () => ea });
var n = s(627968),
    i = s(64700),
    a = s(419354),
    l = s(17928),
    o = s(859703),
    r = s(507107),
    d = s(890687),
    c = s(73473),
    u = s(503698),
    m = s.n(u),
    x = s(696292),
    h = s(990078),
    g = s(939249),
    j = s(834730),
    E = s(821609),
    v = s(695366),
    f = s(661531),
    C = s(825484),
    S = s(409626),
    N = s(773669),
    A = s(975571),
    p = s(252424),
    q = s(112142),
    y = s(838077),
    b = s(18437),
    T = s(590202),
    _ = s(801365),
    w = s(792620),
    Q = s(895253),
    D = s(201805),
    M = s(442734),
    I = s(212614),
    U = s(79545),
    L = s(646764),
    k = s(545986),
    P = s(654487),
    R = s(652215),
    W = s(985018),
    z = s(251266);
function B(e) {
    let { containerSize: t, onClick: s, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, n.jsx)(g.D, {
              tabIndex: a,
              className: z.CU,
              tag: "span",
              onClick: s,
              children: (0, n.jsx)(j.E, { variant: "text-sm/medium", color: "text-link", children: i }),
          })
        : (0, n.jsx)(E.$, { fullWidth: !0, tabIndex: a, variant: "secondary", onClick: s, text: i });
}
function O(e) {
    let { quest: t, progressState: s, questContent: i, questContentPosition: a, sourceQuestContent: r } = e,
        d = (0, l.bG)([o.A], () => o.A.isEnrolling(t.id)),
        c = (0, w.vv)(t),
        u = (0, w.Cr)(t),
        m = (0, D._c)({
            progressState: s,
            quest: t,
            questContent: i,
            questContentPosition: a,
            inGiftInventory: !1,
            isVideoQuest: c,
            inGameQuest: u,
            sourceQuestContent: r,
        });
    return (0, n.jsx)(
        h.m,
        {
            text: m.tooltipText,
            children: (0, n.jsx)(E.$, {
                fullWidth: !0,
                variant: "primary",
                disabled: null == m.onClick,
                loading: d,
                onClick: m.onClick ?? void 0,
                text: m.text,
            }),
        },
        m.tooltipText,
    );
}
let G = (e) => {
    let {
            quest: t,
            location: s,
            size: i,
            isFocused: a,
            isQuestExpired: r,
            isExpanded: c,
            isAnimating: u,
            contentPosition: g,
            sourceQuestContent: D,
        } = e,
        G = (0, d.In)(t),
        F = (0, d.S5)(t.userStatus?.completedAt, { year: "numeric", month: "long", day: "numeric" }),
        H = G >= d.F3.COMPLETED,
        V = c || u,
        K = (0, y.wT)(t, P.rE.QUESTS_CARD, s, D),
        $ = (0, b.Ut)(),
        Y = (0, d.fc)(t),
        Z = (0, y.mU)({
            quest: t,
            taskDetails: Y,
            location: P.rE.QUESTS_CARD,
            questContent: x.u.QUESTS_EMBED,
            sourceQuestContent: D,
            gameProfileSource: S.Ob.QuestEmbed,
        }),
        X = (0, l.bG)([o.A], () => null != o.A.questEnrollmentBlockedUntil, []),
        J = q.t.useConfig({ location: P.rE.QUEST_HOME_DESKTOP }),
        ee = (0, U.Pd)(t),
        et = (0, l.bG)([N.default], () => N.default.locale),
        es = (0, d.Oq)(),
        en = (0, d.SD)(t),
        ei = es && en,
        ea = r && !H,
        el = (0, w.vv)(t);
    return (0, n.jsx)("div", {
        className: z.zr,
        children: (0, n.jsx)("div", {
            style: { visibility: V ? "inherit" : "hidden" },
            "aria-hidden": !V,
            children: (0, n.jsxs)("div", {
                className: m()(z.nw, { [z.dF]: "sm" === i, [z.e5]: "xs" === i }),
                children: [
                    (0, n.jsx)(Q.A, { visible: ei, glow: !0 }),
                    (0, n.jsx)(h.m, {
                        text: ea ? W.intl.string(W.t["04MTGf"]) : null,
                        shouldShow: ea,
                        children: (0, n.jsxs)("div", {
                            className: z.D9,
                            children: [
                                r &&
                                    (0, n.jsx)("div", {
                                        className: z.FL,
                                        children: (0, n.jsx)(v.E, { color: f.A.colors.WHITE }),
                                    }),
                                (0, n.jsx)(L.A, {
                                    autoplay: a,
                                    className: m()({ [z.Lu]: "lg" === i, [z.je]: "sm" === i, [z.ks]: "xs" === i }),
                                    learnMoreStyle: "text",
                                    quest: t,
                                    questContent: s,
                                    questContentPosition: g,
                                    sourceQuestContent: D,
                                }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: z.oW,
                        children: [
                            !el &&
                                (0, n.jsxs)("div", {
                                    className: z.KI,
                                    children: [
                                        (0, n.jsx)(j.E, {
                                            variant:
                                                "lg" === i
                                                    ? "text-md/medium"
                                                    : "sm" === i
                                                      ? "text-sm/medium"
                                                      : "text-xs/medium",
                                            className: z.$p,
                                            children: r
                                                ? W.intl.formatToPlainString(W.t["ge+AJp"], {
                                                      questName: t.config.messages.questName,
                                                  })
                                                : K,
                                        }),
                                        en && (0, n.jsx)(M.e, { questId: t.id, canUseQuestOrbMultiplier: es }),
                                    ],
                                }),
                            (0, n.jsxs)("div", {
                                className: z.KI,
                                children: [
                                    (0, n.jsx)(j.E, {
                                        variant: "lg" === i ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: (function (e) {
                                            let {
                                                    quest: t,
                                                    locale: s,
                                                    isQuestExpired: n,
                                                    collectibleQuestRewardDescription: i,
                                                    formattedCompletionDate: a,
                                                } = e,
                                                l = t.userStatus?.completedAt != null,
                                                o = l && t.userStatus?.claimedAt != null,
                                                r = (0, _.kr)({ quest: t }),
                                                d = (0, _.mH)(t.config);
                                            if (o) {
                                                let e = r
                                                        ? (0, _.cg)({ quest: t, idx: t.userStatus?.claimedTier })
                                                        : null,
                                                    s = e?.messages.nameWithArticle ?? null;
                                                return null != s
                                                    ? W.intl.formatToPlainString(W.t.RrxtPU, { reward: s, date: a })
                                                    : W.intl.formatToPlainString(W.t.zNoqRe, { reward: d, date: a });
                                            }
                                            if (l)
                                                return r
                                                    ? W.intl.formatToPlainString(W.t["l1jCM/"], { date: a })
                                                    : W.intl.formatToPlainString(W.t.zNoqRe, { reward: d, date: a });
                                            let c = r ? (0, _.cg)({ quest: t, idx: 0 }) : null;
                                            return n
                                                ? W.intl.formatToPlainString(W.t.DT3auf, {
                                                      reward: c?.messages.nameWithArticle ?? d,
                                                  })
                                                : null != c && null != c.approximateCount
                                                  ? W.intl.format(W.t["4bMK1z"], {
                                                        maxReward: c.messages.nameWithArticle,
                                                        maxRewardCount: (0, p.tg)(c.approximateCount, s),
                                                        helpCenterLink: A.A.getArticleURL(R.MVz.QUESTS_LEARN_MORE),
                                                    })
                                                  : i;
                                        })({
                                            quest: t,
                                            locale: et,
                                            isQuestExpired: r,
                                            collectibleQuestRewardDescription: Z,
                                            formattedCompletionDate: F,
                                        }),
                                    }),
                                    el && en && (0, n.jsx)(M.e, { questId: t.id, canUseQuestOrbMultiplier: es }),
                                ],
                            }),
                        ],
                    }),
                    X
                        ? (0, n.jsxs)(C.e, {
                              direction: "horizontal",
                              align: "center",
                              fullWidth: "lg" !== i,
                              children: [
                                  (0, n.jsx)(E.$, {
                                      variant: "secondary",
                                      disabled: !0,
                                      text: W.intl.string(W.t.V293qn),
                                  }),
                                  (0, n.jsx)(E.$, {
                                      variant: "primary",
                                      onClick: () => (0, k.m6)(t, s, D),
                                      text: W.intl.string(W.t.vY9GgG),
                                  }),
                              ],
                          })
                        : (0, n.jsxs)(C.e, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              fullWidth: "lg" !== i,
                              children: [
                                  (0, n.jsx)(B, {
                                      containerSize: i,
                                      onClick: () => {
                                          (0, k.navigateToQuestHome)({ fromContent: s, questId: t.id }),
                                              $({
                                                  questId: t.id,
                                                  questContent: s,
                                                  questContentPosition: g,
                                                  questContentCTA: T.Cy.LEARN_MORE,
                                                  sourceQuestContent: D,
                                              });
                                      },
                                      text: W.intl.string(W.t.LLLLPD),
                                  }),
                                  !ea &&
                                      (J.enabled && J.enabledQuestStates.has(ee)
                                          ? (0, n.jsx)(I.A, {
                                                quest: t,
                                                surface: U.V3.QUEST_EMBED,
                                                analyticsCtxQuestContent: s,
                                                analyticsCtxSourceQuestContent: D,
                                                analyticsCtxQuestContentPosition: g,
                                            })
                                          : (0, n.jsx)(O, {
                                                quest: t,
                                                progressState: G,
                                                questContent: s,
                                                sourceQuestContent: D,
                                            })),
                              ],
                          }),
                ],
            }),
        }),
    });
};
var F = s(534514),
    H = s(365199),
    V = s(770178),
    K = s(765548),
    $ = s(918338),
    Y = s(270045),
    Z = s(57718),
    X = s(847641),
    J = s(398025);
s(433745);
var ee = s(818348),
    et = s(237732);
let es = (e) => {
    let {
            isQuestExpired: t,
            quest: s,
            location: l,
            size: o,
            expansionSpring: c,
            isAnimating: u,
            isExpanded: x,
            isInteracting: E,
            contentPosition: v,
            toggleExpanded: C,
            sourceQuestContent: S,
        } = e,
        [N, A] = i.useState(null),
        [p, q] = i.useState(null),
        y = (0, K.A)((e) => {
            let t = e.target;
            A(t.offsetWidth), q(t.scrollWidth);
        }),
        b = (0, V.w)(y),
        T = l === r.uF.QUESTS_EMBED,
        _ = s.userStatus?.completedAt != null,
        w = (0, d.S5)(s.config.expiresAt),
        Q = (0, d.S5)(s.config.rewardsConfig.rewardsExpireAt),
        D = i.useMemo(() => null != s.config.cosponsorMetadata, [s]),
        M = (0, n.jsx)(Z.Ay, {
            className: et.Iu,
            logotypeClassName: D ? et.qN : void 0,
            gameTileSize: Z.LU.MEDIUM,
            quest: s,
            separatorSpacing: Z.C8.MEDIUM,
            theme: ee.NJ.DARK,
            withGameTile: !T || null == s.config.cosponsorMetadata,
        });
    return (0, n.jsxs)("div", {
        className: m()(et.nw, { [et.Gg]: T, [et.e5]: "xs" === o }),
        "aria-label": W.intl.string(W.t.dcl9MQ),
        children: [
            (0, n.jsx)($.A, {
                quest: s,
                isInteracting: E,
                containerClassName: et.v7,
                imageSize: { width: 660, height: 185 },
                imageClassName: et.Z5,
            }),
            (0, n.jsxs)("div", {
                className: et.wx,
                "aria-expanded": x,
                children: [
                    (0, n.jsx)(a.animated.div, {
                        className: m()(et.VW, { [et.eX]: T }),
                        children: (0, n.jsx)(a.animated.div, {
                            className: m()(et.Yu, { [et.Gg]: T }),
                            style: {
                                opacity: (0, J.a)(c.to({ range: [0, 1], output: [0, 1] })),
                                visibility: u || x ? "inherit" : "hidden",
                            },
                            "aria-hidden": !u && !x,
                            children: (0, n.jsxs)("div", {
                                className: et.uA,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: et._V,
                                        children: [M, T ? null : (0, n.jsx)(X.A, { color: "always-white" })],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: et.P9,
                                        children: [
                                            (0, n.jsx)(h.m, {
                                                __unsupportedReactNodeAsText: s.config.messages.questName,
                                                shouldShow: null != N && null != p && N < p,
                                                children: (0, n.jsx)(F.D, {
                                                    ref: b,
                                                    variant:
                                                        "lg" === o
                                                            ? "heading-xxl/bold"
                                                            : "sm" === o
                                                              ? "heading-xl/bold"
                                                              : "heading-lg/bold",
                                                    className: et.R_,
                                                    color: "always-white",
                                                    children: W.intl.format(W.t.EAYZAr, {
                                                        questName: s.config.messages.questName,
                                                    }),
                                                }),
                                            }),
                                            (0, n.jsx)(j.E, {
                                                variant: "text-xs/normal",
                                                color: "always-white",
                                                children: _
                                                    ? W.intl.formatToPlainString(W.t.APddvF, { expirationDate: Q })
                                                    : t
                                                      ? W.intl.formatToPlainString(W.t.v7xMw7, { expirationDate: w })
                                                      : W.intl.formatToPlainString(W.t["pX+fmn"], {
                                                            expirationDate: w,
                                                        }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, n.jsx)(a.animated.div, {
                        className: et._q,
                        style: { top: 20 },
                        children: (0, n.jsx)(Y.C, {
                            questContent: l,
                            quest: s,
                            questContentPosition: v,
                            shouldShowDisclosure: !0,
                            showShareLink: !t && T,
                            sourceQuestContent: S,
                            children: (e) =>
                                (0, n.jsx)(a.animated.div, {
                                    style: { opacity: (0, J.a)(c), visibility: u || x ? "inherit" : "hidden" },
                                    "aria-hidden": !u && !x,
                                    children: (0, n.jsx)(g.D, {
                                        ...e,
                                        className: et.P0,
                                        "aria-label": W.intl.string(W.t.DEoVWZ),
                                        children: (0, n.jsx)(H.j, { size: "md", color: f.A.colors.WHITE }),
                                    }),
                                }),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var en = s(394900),
    ei = s(699257);
function ea(e) {
    let { quest: t, location: s, contentPosition: l, sourceQuestContent: o } = e,
        u = (0, d.LS)(t),
        { containerRef: m, size: x, height: h } = (0, en.L)(),
        { expansionSpring: g, isAnimating: j, isExpanded: E, toggleExpanded: v } = (0, en.s)({ initiallyExpanded: !0 }),
        [f, C] = i.useState(!1),
        S = () => C(!0),
        N = () => C(!1),
        A = h ?? 1e3;
    return (0, n.jsx)(c.R, {
        questOrQuests: t,
        questContent: s,
        questContentPosition: l,
        trackGuildAndChannelMetadata: s === r.uF.QUESTS_EMBED,
        sourceQuestContent: o,
        children: (e) =>
            (0, n.jsx)(a.animated.div, {
                style: { maxHeight: s === r.uF.QUESTS_EMBED ? void 0 : g.to({ range: [0, 1], output: [100, A] }) },
                className: ei.i,
                onMouseEnter: S,
                onMouseLeave: N,
                onFocus: S,
                onBlur: N,
                children: (0, n.jsxs)("div", {
                    ref: (t) => {
                        (e.current = t), (m.current = t);
                    },
                    children: [
                        (0, n.jsx)(es, {
                            isQuestExpired: u,
                            location: s,
                            quest: t,
                            size: x,
                            expansionSpring: g,
                            isInteracting: f,
                            isAnimating: j,
                            isExpanded: E,
                            contentPosition: l,
                            toggleExpanded: v,
                            sourceQuestContent: o,
                        }),
                        (0, n.jsx)(G, {
                            quest: t,
                            isQuestExpired: u,
                            location: s,
                            size: x,
                            isFocused: f,
                            isExpanded: E,
                            isAnimating: j,
                            contentPosition: l,
                            sourceQuestContent: o,
                        }),
                    ],
                }),
            }),
    });
}
