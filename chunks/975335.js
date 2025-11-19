n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(681715),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(706454),
    f = n(63063),
    _ = n(930153),
    p = n(617136),
    h = n(509212),
    m = n(113434),
    g = n(569984),
    E = n(497505),
    b = n(979232),
    y = n(373370),
    O = n(644646),
    v = n(110560),
    I = n(667105),
    T = n(724684),
    S = n(46140),
    A = n(981631),
    C = n(388032),
    N = n(736272);
let R = (e, t, n) =>
    (0, T.uq)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";
function P(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(c.P3F, {
              tabIndex: a,
              className: N.learnMoreLink,
              tag: "span",
              onClick: n,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: i,
              }),
          })
        : (0, r.jsx)(c.Button, {
              fullWidth: !0,
              tabIndex: a,
              variant: "secondary",
              onClick: n,
              text: i,
          });
}
function D(e) {
    var t, n, r, i, a;
    let {
            quest: o,
            locale: s,
            isQuestExpired: l,
            collectibleQuestRewardDescription: c,
            formattedCompletionDate: u,
        } = e,
        d = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
        p = d && (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null,
        m = (0, h.oo)({ quest: o }),
        g = (0, h.B3)(o.config);
    if (p) {
        let e = m
                ? (0, h.o9)({
                      quest: o,
                      idx: null == (r = o.userStatus) ? void 0 : r.claimedTier,
                  })
                : null,
            t = null != (i = null == e ? void 0 : e.messages.nameWithArticle) ? i : null;
        return null != t
            ? C.intl.formatToPlainString(C.t.RrxtPU, {
                  reward: t,
                  date: u,
              })
            : C.intl.formatToPlainString(C.t.zNoqRe, {
                  reward: g,
                  date: u,
              });
    }
    if (d)
        return m
            ? C.intl.formatToPlainString(C.t["l1jCM/"], { date: u })
            : C.intl.formatToPlainString(C.t.zNoqRe, {
                  reward: g,
                  date: u,
              });
    let E = m
        ? (0, h.o9)({
              quest: o,
              idx: 0,
          })
        : null;
    return l
        ? C.intl.formatToPlainString(C.t.DT3auf, {
              reward: null != (a = null == E ? void 0 : E.messages.nameWithArticle) ? a : g,
          })
        : null != E && null != E.approximateCount
          ? C.intl.format(C.t["4bMK1z"], {
                maxReward: E.messages.nameWithArticle,
                maxRewardCount: (0, _.Bs)(E.approximateCount, s),
                helpCenterLink: f.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE),
            })
          : c;
}
function w(e) {
    var t;
    let {
            quest: n,
            progressState: i,
            isCollectibleQuest: a,
            questContent: l,
            questContentPosition: d,
            sourceQuestContent: f,
        } = e,
        _ = i >= m.OH.COMPLETED,
        p = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        E = (0, o.e7)([g.Z], () => g.Z.isEnrolling(n.id)),
        b = (0, h.q8)(n),
        y = (0, h.Vl)(n),
        O = (0, I.Ks)({
            progressState: i,
            quest: n,
            questContent: l,
            isCollectibleQuest: a,
            questContentPosition: d,
            inGiftInventory: !1,
            isVideoQuest: b,
            inGameQuest: y,
            sourceQuestContent: f,
        }),
        v = _ && !p;
    return (0, r.jsx)(
        s.u,
        {
            text: O.tooltipText,
            children: v
                ? (0, r.jsx)(L, { ctaConfig: O })
                : (0, r.jsx)(c.Button, {
                      fullWidth: !0,
                      variant: "primary",
                      disabled: null == O.onClick,
                      loading: E,
                      onClick: null != (t = O.onClick) ? t : void 0,
                      text: O.text,
                  }),
        },
        O.tooltipText,
    );
}
function L(e) {
    var t, n;
    let { ctaConfig: i } = e,
        { shouldUseShinyButton: o } = b.Z.useConfig({ location: "QuestsCardFooter" }),
        s = (0, c.MgI)(),
        u = !!(null == s ? void 0 : s.fullWidth);
    return o
        ? (0, r.jsx)("div", {
              className: a()({ [N.fullWidthShinyCtaButtonWrapper]: u }),
              children: (0, r.jsx)(c.gtL, {
                  "data-migration-pending": !0,
                  fullWidth: !0,
                  wrapperClassName: N.ctaButtonWrapper,
                  color: l.Tt.BRAND,
                  disabled: null == i.onClick,
                  onClick: null != (t = i.onClick) ? t : void 0,
                  children: i.text,
              }),
          })
        : (0, r.jsx)(c.Button, {
              fullWidth: !0,
              variant: "primary",
              disabled: null == i.onClick,
              onClick: null != (n = i.onClick) ? n : void 0,
              text: i.text,
          });
}
let x = (e) => {
    var t;
    let {
            quest: n,
            location: i,
            size: l,
            isFocused: u,
            isQuestExpired: f,
            isExpanded: _,
            isAnimating: b,
            contentPosition: I,
            sourceQuestContent: T,
        } = e,
        A = (0, m._Q)(n),
        L = (0, m.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        x = A >= m.OH.ACCEPTED,
        M = A >= m.OH.COMPLETED,
        j = (0, h.Xv)(n.config),
        k = _ || b,
        U = (0, m.t5)(n, S.dr.QUESTS_CARD, i, T),
        G = (0, p.O5)(),
        B = (0, m.Rf)(n),
        Z = (0, y.DD)({
            quest: n,
            taskDetails: B,
            location: S.dr.QUESTS_CARD,
            questContent: E.jn.QUESTS_EMBED,
            sourceQuestContent: T,
        }),
        F = (0, o.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []),
        V = () => {
            (0, v.navigateToQuestHome)({
                fromContent: i,
                questId: n.id,
            }),
                G({
                    questId: n.id,
                    questContent: i,
                    questContentPosition: I,
                    questContentCTA: p.jZ.LEARN_MORE,
                    sourceQuestContent: T,
                });
        },
        H = (0, o.e7)([d.default], () => d.default.locale),
        Y = f && !M;
    return (0, r.jsx)("div", {
        className: N.root,
        children: (0, r.jsxs)("div", {
            className: a()(N.outerContainer, {
                [N.outerContainerSm]: "sm" === l,
                [N.outerContainerXs]: "xs" === l,
            }),
            style: { visibility: k ? "inherit" : "hidden" },
            "aria-hidden": !k,
            children: [
                (0, r.jsx)(s.u, {
                    text: Y ? C.intl.string(C.t["04MTGf"]) : null,
                    shouldShow: Y,
                    children: (0, r.jsxs)("div", {
                        className: N.rewardTileWrapper,
                        children: [
                            f &&
                                (0, r.jsx)("div", {
                                    className: N.rewardTileExpired,
                                    children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.WHITE }),
                                }),
                            (0, r.jsx)(O.Z, {
                                autoplay: u,
                                className: a()({
                                    [N.questRewardEmbed]: "lg" === l,
                                    [N.questRewardEmbedSm]: "sm" === l,
                                    [N.questRewardEmbedXs]: "xs" === l,
                                }),
                                learnMoreStyle: "text",
                                location: S.dr.QUESTS_CARD,
                                quest: n,
                                questContent: i,
                                questContentPosition: I,
                                sourceQuestContent: T,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: N.taskDetails,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: R(i, l, x),
                            className: N.taskInstructions,
                            children: f
                                ? C.intl.formatToPlainString(C.t["ge+AJp"], { questName: n.config.messages.questName })
                                : U,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: D({
                                quest: n,
                                locale: H,
                                isQuestExpired: f,
                                collectibleQuestRewardDescription: Z,
                                formattedCompletionDate: L,
                            }),
                        }),
                    ],
                }),
                F
                    ? (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== l,
                          children: [
                              (0, r.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: C.intl.string(C.t.V293qn),
                              }),
                              (0, r.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(n, i, T),
                                  text: C.intl.string(C.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== l,
                          children: [
                              (0, r.jsx)(P, {
                                  containerSize: l,
                                  onClick: V,
                                  text: C.intl.string(C.t.LLLLPD),
                              }),
                              !Y &&
                                  (0, r.jsx)(w, {
                                      quest: n,
                                      progressState: A,
                                      isCollectibleQuest: j,
                                      questContent: i,
                                      sourceQuestContent: T,
                                  }),
                          ],
                      }),
            ],
        }),
    });
};
