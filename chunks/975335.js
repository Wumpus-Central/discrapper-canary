n.d(t, { Z: () => k });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(681715),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    f = n(706454),
    _ = n(63063),
    p = n(930153),
    h = n(617136),
    m = n(509212),
    g = n(113434),
    E = n(569984),
    b = n(497505),
    y = n(979232),
    O = n(373370),
    v = n(566078),
    I = n(644646),
    T = n(110560),
    S = n(667105),
    A = n(724684),
    C = n(46140),
    N = n(981631),
    R = n(388032),
    P = n(825502);
let D = (e, t, n) =>
    (0, A.uq)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";
function w(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(u.P3F, {
              tabIndex: a,
              className: P.learnMoreLink,
              tag: "span",
              onClick: n,
              children: (0, r.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: i,
              }),
          })
        : (0, r.jsx)(u.Button, {
              fullWidth: !0,
              tabIndex: a,
              variant: "secondary",
              onClick: n,
              text: i,
          });
}
function x(e) {
    var t, n, r, i, a;
    let {
            quest: o,
            locale: s,
            isQuestExpired: l,
            sharedQuestFields: c,
            collectibleQuestRewardDescription: u,
            formattedCompletionDate: d,
        } = e,
        f = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
        h = f && (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null,
        g = (0, m.oo)({ quest: o }),
        E = c.defaultRewardNameWithArticle;
    if (h) {
        let e = g
                ? (0, m.o9)({
                      quest: o,
                      idx: null == (r = o.userStatus) ? void 0 : r.claimedTier,
                  })
                : null,
            t = null != (i = null == e ? void 0 : e.messages.nameWithArticle) ? i : null;
        return null != t
            ? R.intl.formatToPlainString(R.t.RrxtPU, {
                  reward: t,
                  date: d,
              })
            : R.intl.formatToPlainString(R.t.zNoqRe, {
                  reward: E,
                  date: d,
              });
    }
    if (f)
        return g
            ? R.intl.formatToPlainString(R.t["l1jCM/"], { date: d })
            : R.intl.formatToPlainString(R.t.zNoqRe, {
                  reward: E,
                  date: d,
              });
    let b = g
        ? (0, m.o9)({
              quest: o,
              idx: 0,
          })
        : null;
    return l
        ? R.intl.formatToPlainString(R.t.DT3auf, {
              reward: null != (a = null == b ? void 0 : b.messages.nameWithArticle) ? a : E,
          })
        : null != b && null != b.approximateCount
          ? R.intl.format(R.t["4bMK1z"], {
                maxReward: b.messages.nameWithArticle,
                maxRewardCount: (0, p.Bs)(b.approximateCount, s),
                helpCenterLink: _.Z.getArticleURL(N.BhN.QUESTS_LEARN_MORE),
            })
          : u;
}
function L(e) {
    var t;
    let {
            quest: n,
            progressState: i,
            isCollectibleQuest: a,
            questContent: o,
            questContentPosition: c,
            sourceQuestContent: f,
        } = e,
        _ = i >= g.OH.COMPLETED,
        p = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        h = (0, s.e7)([E.Z], () => E.Z.isEnrolling(n.id)),
        b = (0, m.q8)(n),
        y = (0, m.Vl)(n),
        O = (0, S.Ks)({
            progressState: i,
            quest: n,
            questContent: o,
            isCollectibleQuest: a,
            questContentPosition: c,
            inGiftInventory: !1,
            isVideoQuest: b,
            inGameQuest: y,
            sourceQuestContent: f,
        }),
        v = _ && !p;
    return (0, r.jsx)(
        l.u,
        {
            text: O.tooltipText,
            children: v
                ? (0, r.jsx)(M, { ctaConfig: O })
                : (0, r.jsx)(u.Button, {
                      fullWidth: !0,
                      variant: "primary",
                      disabled: null == O.onClick,
                      loading: h,
                      onClick: null != (t = O.onClick) ? t : void 0,
                      text: O.text,
                  }),
        },
        O.tooltipText,
    );
}
function M(e) {
    var t, n;
    let { ctaConfig: i } = e,
        { shouldUseShinyButton: a } = y.Z.useConfig({ location: "QuestsCardFooter" }),
        s = (0, u.MgI)(),
        l = !!(null == s ? void 0 : s.fullWidth);
    return a
        ? (0, r.jsx)("div", {
              className: o()({ [P.fullWidthShinyCtaButtonWrapper]: l }),
              children: (0, r.jsx)(u.gtL, {
                  "data-migration-pending": !0,
                  fullWidth: !0,
                  wrapperClassName: P.ctaButtonWrapper,
                  color: c.Tt.BRAND,
                  disabled: null == i.onClick,
                  onClick: null != (t = i.onClick) ? t : void 0,
                  children: i.text,
              }),
          })
        : (0, r.jsx)(u.Button, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == i.onClick,
              onClick: null != (n = i.onClick) ? n : void 0,
              text: i.text,
          });
}
let k = (e) => {
    var t;
    let {
            quest: n,
            location: a,
            size: c,
            isFocused: d,
            isQuestExpired: _,
            isExpanded: p,
            isAnimating: y,
            contentPosition: S,
            sourceQuestContent: A,
        } = e,
        N = (0, g._Q)(n),
        M = (0, g.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        k = N >= g.OH.ACCEPTED,
        j = N >= g.OH.COMPLETED,
        U = (0, m.Xv)(n.config),
        G = p || y,
        B = (0, g.t5)(n, C.dr.QUESTS_CARD, a, A),
        Z = (0, h.O5)(),
        F = i.useMemo(() => v.r.build(n.config), [n.config]),
        V = (0, g.Rf)(n),
        H = (0, O.DD)({
            quest: n,
            taskDetails: V,
            location: C.dr.QUESTS_CARD,
            questContent: b.jn.QUESTS_EMBED,
            sourceQuestContent: A,
        }),
        Y = (0, s.e7)([E.Z], () => null != E.Z.questEnrollmentBlockedUntil, []),
        W = () => {
            (0, T.navigateToQuestHome)({
                fromContent: a,
                questId: n.id,
            }),
                Z({
                    questId: n.id,
                    questContent: a,
                    questContentPosition: S,
                    questContentCTA: h.jZ.LEARN_MORE,
                    sourceQuestContent: A,
                });
        },
        K = (0, s.e7)([f.default], () => f.default.locale),
        z = _ && !j;
    return (0, r.jsx)("div", {
        className: P.root,
        children: (0, r.jsxs)("div", {
            className: o()(P.outerContainer, {
                [P.outerContainerSm]: "sm" === c,
                [P.outerContainerXs]: "xs" === c,
            }),
            style: { visibility: G ? "inherit" : "hidden" },
            "aria-hidden": !G,
            children: [
                (0, r.jsx)(l.u, {
                    text: z ? R.intl.string(R.t["04MTGf"]) : null,
                    shouldShow: z,
                    children: (0, r.jsxs)("div", {
                        className: P.rewardTileWrapper,
                        children: [
                            _ &&
                                (0, r.jsx)("div", {
                                    className: P.rewardTileExpired,
                                    children: (0, r.jsx)(u.Mgn, { color: u.TVs.colors.WHITE }),
                                }),
                            (0, r.jsx)(I.Z, {
                                autoplay: d,
                                className: o()({
                                    [P.questRewardEmbed]: "lg" === c,
                                    [P.questRewardEmbedSm]: "sm" === c,
                                    [P.questRewardEmbedXs]: "xs" === c,
                                }),
                                learnMoreStyle: "text",
                                location: C.dr.QUESTS_CARD,
                                quest: n,
                                questContent: a,
                                questContentPosition: S,
                                sourceQuestContent: A,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: P.taskDetails,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: D(a, c, k),
                            className: P.taskInstructions,
                            children: _
                                ? R.intl.formatToPlainString(R.t["ge+AJp"], { questName: n.config.messages.questName })
                                : B,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: x({
                                quest: n,
                                locale: K,
                                isQuestExpired: _,
                                sharedQuestFields: F,
                                collectibleQuestRewardDescription: H,
                                formattedCompletionDate: M,
                            }),
                        }),
                    ],
                }),
                Y
                    ? (0, r.jsxs)(u.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== c,
                          children: [
                              (0, r.jsx)(u.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: R.intl.string(R.t.V293qn),
                              }),
                              (0, r.jsx)(u.Button, {
                                  variant: "primary",
                                  onClick: () => (0, T.openQuestMinorEnrollmentBlockModal)(n, a, A),
                                  text: R.intl.string(R.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(u.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== c,
                          children: [
                              (0, r.jsx)(w, {
                                  containerSize: c,
                                  onClick: W,
                                  text: R.intl.string(R.t.LLLLPD),
                              }),
                              !z &&
                                  (0, r.jsx)(L, {
                                      quest: n,
                                      progressState: N,
                                      isCollectibleQuest: U,
                                      questContent: a,
                                      sourceQuestContent: A,
                                  }),
                          ],
                      }),
            ],
        }),
    });
};
