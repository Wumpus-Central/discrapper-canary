n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(636977),
    s = n(442837),
    l = n(681715),
    c = n(481060),
    u = n(706454),
    d = n(63063),
    f = n(930153),
    p = n(617136),
    _ = n(616022),
    h = n(937797),
    m = n(373370),
    g = n(968843),
    E = n(115179),
    b = n(254579),
    y = n(659302),
    O = n(504411),
    v = n(644646),
    S = n(110560),
    I = n(231919),
    T = n(324805),
    C = n(981631),
    A = n(388032),
    N = n(804982);
let P = (e, t, n) =>
    (0, I.uq)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";
function w(e) {
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
function R(e) {
    var t, n, r, i, a;
    let {
            quest: o,
            locale: s,
            isQuestExpired: l,
            collectibleQuestRewardDescription: c,
            formattedCompletionDate: u,
        } = e,
        p = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
        _ = p && (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null,
        h = (0, E.oo)({ quest: o }),
        m = (0, E.B3)(o.config);
    if (_) {
        let e = h
                ? (0, E.o9)({
                      quest: o,
                      idx: null == (r = o.userStatus) ? void 0 : r.claimedTier,
                  })
                : null,
            t = null != (i = null == e ? void 0 : e.messages.nameWithArticle) ? i : null;
        return null != t
            ? A.intl.formatToPlainString(A.t.RrxtPU, {
                  reward: t,
                  date: u,
              })
            : A.intl.formatToPlainString(A.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    }
    if (p)
        return h
            ? A.intl.formatToPlainString(A.t["l1jCM/"], { date: u })
            : A.intl.formatToPlainString(A.t.zNoqRe, {
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
        ? A.intl.formatToPlainString(A.t.DT3auf, {
              reward: null != (a = null == g ? void 0 : g.messages.nameWithArticle) ? a : m,
          })
        : null != g && null != g.approximateCount
          ? A.intl.format(A.t["4bMK1z"], {
                maxReward: g.messages.nameWithArticle,
                maxRewardCount: (0, f.Bs)(g.approximateCount, s),
                helpCenterLink: d.Z.getArticleURL(C.BhN.QUESTS_LEARN_MORE),
            })
          : c;
}
function D(e) {
    var t;
    let { quest: n, progressState: i, questContent: a, questContentPosition: o, sourceQuestContent: u } = e,
        d = (0, s.e7)([_.Z], () => _.Z.isEnrolling(n.id)),
        f = (0, b.q8)(n),
        p = (0, b.Vl)(n),
        h = (0, y.Ks)({
            progressState: i,
            quest: n,
            questContent: a,
            questContentPosition: o,
            inGiftInventory: !1,
            isVideoQuest: f,
            inGameQuest: p,
            sourceQuestContent: u,
        });
    return (0, r.jsx)(
        l.u,
        {
            text: h.tooltipText,
            children: (0, r.jsx)(c.Button, {
                fullWidth: !0,
                variant: "primary",
                disabled: null == h.onClick,
                loading: d,
                onClick: null != (t = h.onClick) ? t : void 0,
                text: h.text,
            }),
        },
        h.tooltipText,
    );
}
let x = (e) => {
    var t;
    let {
            quest: n,
            location: i,
            size: d,
            isFocused: f,
            isQuestExpired: E,
            isExpanded: y,
            isAnimating: I,
            contentPosition: C,
            sourceQuestContent: x,
        } = e,
        L = (0, g._Q)(n),
        j = (0, g.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        M = L >= g.OH.ACCEPTED,
        k = L >= g.OH.COMPLETED,
        U = y || I,
        G = (0, m.t5)(n, T.dr.QUESTS_CARD, i, x),
        Z = (0, p.O5)(),
        F = (0, g.Rf)(n),
        B = (0, m.DD)({
            quest: n,
            taskDetails: F,
            location: T.dr.QUESTS_CARD,
            questContent: o.j.QUESTS_EMBED,
            sourceQuestContent: x,
        }),
        V = (0, s.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil, []),
        H = h.Cx.useConfig({ location: T.dr.QUEST_HOME_DESKTOP }).enabled,
        Y = () => {
            (0, S.navigateToQuestHome)({
                fromContent: i,
                questId: n.id,
            }),
                Z({
                    questId: n.id,
                    questContent: i,
                    questContentPosition: C,
                    questContentCTA: p.jZ.LEARN_MORE,
                    sourceQuestContent: x,
                });
        },
        W = (0, s.e7)([u.default], () => u.default.locale),
        K = E && !k,
        z = (0, b.q8)(n);
    return (0, r.jsx)("div", {
        className: N.root,
        children: (0, r.jsxs)("div", {
            className: a()(N.outerContainer, {
                [N.outerContainerSm]: "sm" === d,
                [N.outerContainerXs]: "xs" === d,
            }),
            style: { visibility: U ? "inherit" : "hidden" },
            "aria-hidden": !U,
            children: [
                (0, r.jsx)(l.u, {
                    text: K ? A.intl.string(A.t["04MTGf"]) : null,
                    shouldShow: K,
                    children: (0, r.jsxs)("div", {
                        className: N.rewardTileWrapper,
                        children: [
                            E &&
                                (0, r.jsx)("div", {
                                    className: N.rewardTileExpired,
                                    children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.WHITE }),
                                }),
                            (0, r.jsx)(v.Z, {
                                autoplay: f,
                                className: a()({
                                    [N.questRewardEmbed]: "lg" === d,
                                    [N.questRewardEmbedSm]: "sm" === d,
                                    [N.questRewardEmbedXs]: "xs" === d,
                                }),
                                learnMoreStyle: "text",
                                quest: n,
                                questContent: i,
                                questContentPosition: C,
                                sourceQuestContent: x,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: N.taskDetails,
                    children: [
                        !z &&
                            (0, r.jsx)(c.Text, {
                                variant: P(i, d, M),
                                className: N.taskInstructions,
                                children: E
                                    ? A.intl.formatToPlainString(A.t["ge+AJp"], {
                                          questName: n.config.messages.questName,
                                      })
                                    : G,
                            }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: R({
                                quest: n,
                                locale: W,
                                isQuestExpired: E,
                                collectibleQuestRewardDescription: B,
                                formattedCompletionDate: j,
                            }),
                        }),
                    ],
                }),
                V
                    ? (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== d,
                          children: [
                              (0, r.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: A.intl.string(A.t.V293qn),
                              }),
                              (0, r.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: () => (0, S.openQuestMinorEnrollmentBlockModal)(n, i, x),
                                  text: A.intl.string(A.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== d,
                          children: [
                              (0, r.jsx)(w, {
                                  containerSize: d,
                                  onClick: Y,
                                  text: A.intl.string(A.t.LLLLPD),
                              }),
                              !K &&
                                  (H && !M
                                      ? (0, r.jsx)(O.Z, {
                                            quest: n,
                                            analyticsCtxQuestContent: i,
                                            analyticsCtxSourceQuestContent: x,
                                            analyticsCtxQuestContentPosition: C,
                                        })
                                      : (0, r.jsx)(D, {
                                            quest: n,
                                            progressState: L,
                                            questContent: i,
                                            sourceQuestContent: x,
                                        })),
                          ],
                      }),
            ],
        }),
    });
};
