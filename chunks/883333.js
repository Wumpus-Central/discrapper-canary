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
    h = n(313481),
    m = n(616022),
    g = n(49436),
    E = n(509212),
    b = n(979232),
    y = n(373370),
    O = n(659302),
    v = n(644646),
    I = n(110560),
    T = n(231919),
    S = n(324805),
    A = n(981631),
    C = n(388032),
    N = n(467415);
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
        h = (0, E.oo)({ quest: o }),
        m = (0, E.B3)(o.config);
    if (p) {
        let e = h
                ? (0, E.o9)({
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
                  reward: m,
                  date: u,
              });
    }
    if (d)
        return h
            ? C.intl.formatToPlainString(C.t["l1jCM/"], { date: u })
            : C.intl.formatToPlainString(C.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    let g = h
        ? (0, E.o9)({
              quest: o,
              idx: 0,
          })
        : null;
    return l
        ? C.intl.formatToPlainString(C.t.DT3auf, {
              reward: null != (a = null == g ? void 0 : g.messages.nameWithArticle) ? a : m,
          })
        : null != g && null != g.approximateCount
          ? C.intl.format(C.t["4bMK1z"], {
                maxReward: g.messages.nameWithArticle,
                maxRewardCount: (0, _.Bs)(g.approximateCount, s),
                helpCenterLink: f.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE),
            })
          : c;
}
function w(e) {
    var t;
    let { quest: n, progressState: i, questContent: a, questContentPosition: l, sourceQuestContent: d } = e,
        f = i >= h.OH.COMPLETED,
        _ = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        p = (0, o.e7)([m.Z], () => m.Z.isEnrolling(n.id)),
        g = (0, E.q8)(n),
        b = (0, E.Vl)(n),
        y = (0, O.Ks)({
            progressState: i,
            quest: n,
            questContent: a,
            questContentPosition: l,
            inGiftInventory: !1,
            isVideoQuest: g,
            inGameQuest: b,
            sourceQuestContent: d,
        }),
        v = f && !_;
    return (0, r.jsx)(
        s.u,
        {
            text: y.tooltipText,
            children: v
                ? (0, r.jsx)(L, { ctaConfig: y })
                : (0, r.jsx)(c.Button, {
                      fullWidth: !0,
                      variant: "primary",
                      disabled: null == y.onClick,
                      loading: p,
                      onClick: null != (t = y.onClick) ? t : void 0,
                      text: y.text,
                  }),
        },
        y.tooltipText,
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
            isAnimating: E,
            contentPosition: b,
            sourceQuestContent: O,
        } = e,
        T = (0, h._Q)(n),
        A = (0, h.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        L = T >= h.OH.ACCEPTED,
        x = T >= h.OH.COMPLETED,
        M = _ || E,
        k = (0, h.t5)(n, S.dr.QUESTS_CARD, i, O),
        j = (0, p.O5)(),
        U = (0, h.Rf)(n),
        G = (0, y.DD)({
            quest: n,
            taskDetails: U,
            location: S.dr.QUESTS_CARD,
            questContent: g.jn.QUESTS_EMBED,
            sourceQuestContent: O,
        }),
        B = (0, o.e7)([m.Z], () => null != m.Z.questEnrollmentBlockedUntil, []),
        Z = () => {
            (0, I.navigateToQuestHome)({
                fromContent: i,
                questId: n.id,
            }),
                j({
                    questId: n.id,
                    questContent: i,
                    questContentPosition: b,
                    questContentCTA: p.jZ.LEARN_MORE,
                    sourceQuestContent: O,
                });
        },
        F = (0, o.e7)([d.default], () => d.default.locale),
        V = f && !x;
    return (0, r.jsx)("div", {
        className: N.root,
        children: (0, r.jsxs)("div", {
            className: a()(N.outerContainer, {
                [N.outerContainerSm]: "sm" === l,
                [N.outerContainerXs]: "xs" === l,
            }),
            style: { visibility: M ? "inherit" : "hidden" },
            "aria-hidden": !M,
            children: [
                (0, r.jsx)(s.u, {
                    text: V ? C.intl.string(C.t["04MTGf"]) : null,
                    shouldShow: V,
                    children: (0, r.jsxs)("div", {
                        className: N.rewardTileWrapper,
                        children: [
                            f &&
                                (0, r.jsx)("div", {
                                    className: N.rewardTileExpired,
                                    children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.WHITE }),
                                }),
                            (0, r.jsx)(v.Z, {
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
                                questContentPosition: b,
                                sourceQuestContent: O,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: N.taskDetails,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: R(i, l, L),
                            className: N.taskInstructions,
                            children: f
                                ? C.intl.formatToPlainString(C.t["ge+AJp"], { questName: n.config.messages.questName })
                                : k,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: D({
                                quest: n,
                                locale: F,
                                isQuestExpired: f,
                                collectibleQuestRewardDescription: G,
                                formattedCompletionDate: A,
                            }),
                        }),
                    ],
                }),
                B
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
                                  onClick: () => (0, I.openQuestMinorEnrollmentBlockModal)(n, i, O),
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
                                  onClick: Z,
                                  text: C.intl.string(C.t.LLLLPD),
                              }),
                              !V &&
                                  (0, r.jsx)(w, {
                                      quest: n,
                                      progressState: T,
                                      questContent: i,
                                      sourceQuestContent: O,
                                  }),
                          ],
                      }),
            ],
        }),
    });
};
