n.d(t, { Z: () => R });
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
    h = n(373370),
    m = n(968843),
    g = n(115179),
    E = n(254579),
    b = n(659302),
    y = n(644646),
    O = n(110560),
    v = n(231919),
    S = n(324805),
    I = n(981631),
    T = n(388032),
    C = n(804982);
let A = (e, t, n) =>
    (0, v.uq)(e) && !n && "lg" === t
        ? "text-lg/medium"
        : "lg" === t
          ? "text-md/medium"
          : "sm" === t
            ? "text-sm/medium"
            : "text-xs/medium";
function N(e) {
    let { containerSize: t, onClick: n, text: i, tabIndex: a } = e;
    return "xs" === t
        ? (0, r.jsx)(c.P3F, {
              tabIndex: a,
              className: C.learnMoreLink,
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
function P(e) {
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
        h = (0, g.oo)({ quest: o }),
        m = (0, g.B3)(o.config);
    if (_) {
        let e = h
                ? (0, g.o9)({
                      quest: o,
                      idx: null == (r = o.userStatus) ? void 0 : r.claimedTier,
                  })
                : null,
            t = null != (i = null == e ? void 0 : e.messages.nameWithArticle) ? i : null;
        return null != t
            ? T.intl.formatToPlainString(T.t.RrxtPU, {
                  reward: t,
                  date: u,
              })
            : T.intl.formatToPlainString(T.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    }
    if (p)
        return h
            ? T.intl.formatToPlainString(T.t["l1jCM/"], { date: u })
            : T.intl.formatToPlainString(T.t.zNoqRe, {
                  reward: m,
                  date: u,
              });
    let E = h
        ? (0, g.o9)({
              quest: o,
              idx: 0,
          })
        : null;
    return l
        ? T.intl.formatToPlainString(T.t.DT3auf, {
              reward: null != (a = null == E ? void 0 : E.messages.nameWithArticle) ? a : m,
          })
        : null != E && null != E.approximateCount
          ? T.intl.format(T.t["4bMK1z"], {
                maxReward: E.messages.nameWithArticle,
                maxRewardCount: (0, f.Bs)(E.approximateCount, s),
                helpCenterLink: d.Z.getArticleURL(I.BhN.QUESTS_LEARN_MORE),
            })
          : c;
}
function w(e) {
    var t;
    let { quest: n, progressState: i, questContent: a, questContentPosition: o, sourceQuestContent: u } = e,
        d = (0, s.e7)([_.Z], () => _.Z.isEnrolling(n.id)),
        f = (0, E.q8)(n),
        p = (0, E.Vl)(n),
        h = (0, b.Ks)({
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
let R = (e) => {
    var t;
    let {
            quest: n,
            location: i,
            size: d,
            isFocused: f,
            isQuestExpired: g,
            isExpanded: b,
            isAnimating: v,
            contentPosition: I,
            sourceQuestContent: R,
        } = e,
        D = (0, m._Q)(n),
        x = (0, m.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        L = D >= m.OH.ACCEPTED,
        j = D >= m.OH.COMPLETED,
        M = b || v,
        k = (0, h.t5)(n, S.dr.QUESTS_CARD, i, R),
        U = (0, p.O5)(),
        G = (0, m.Rf)(n),
        Z = (0, h.DD)({
            quest: n,
            taskDetails: G,
            location: S.dr.QUESTS_CARD,
            questContent: o.j.QUESTS_EMBED,
            sourceQuestContent: R,
        }),
        F = (0, s.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil, []),
        B = () => {
            (0, O.navigateToQuestHome)({
                fromContent: i,
                questId: n.id,
            }),
                U({
                    questId: n.id,
                    questContent: i,
                    questContentPosition: I,
                    questContentCTA: p.jZ.LEARN_MORE,
                    sourceQuestContent: R,
                });
        },
        V = (0, s.e7)([u.default], () => u.default.locale),
        H = g && !j,
        Y = (0, E.q8)(n);
    return (0, r.jsx)("div", {
        className: C.root,
        children: (0, r.jsxs)("div", {
            className: a()(C.outerContainer, {
                [C.outerContainerSm]: "sm" === d,
                [C.outerContainerXs]: "xs" === d,
            }),
            style: { visibility: M ? "inherit" : "hidden" },
            "aria-hidden": !M,
            children: [
                (0, r.jsx)(l.u, {
                    text: H ? T.intl.string(T.t["04MTGf"]) : null,
                    shouldShow: H,
                    children: (0, r.jsxs)("div", {
                        className: C.rewardTileWrapper,
                        children: [
                            g &&
                                (0, r.jsx)("div", {
                                    className: C.rewardTileExpired,
                                    children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.WHITE }),
                                }),
                            (0, r.jsx)(y.Z, {
                                autoplay: f,
                                className: a()({
                                    [C.questRewardEmbed]: "lg" === d,
                                    [C.questRewardEmbedSm]: "sm" === d,
                                    [C.questRewardEmbedXs]: "xs" === d,
                                }),
                                learnMoreStyle: "text",
                                quest: n,
                                questContent: i,
                                questContentPosition: I,
                                sourceQuestContent: R,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: C.taskDetails,
                    children: [
                        !Y &&
                            (0, r.jsx)(c.Text, {
                                variant: A(i, d, L),
                                className: C.taskInstructions,
                                children: g
                                    ? T.intl.formatToPlainString(T.t["ge+AJp"], {
                                          questName: n.config.messages.questName,
                                      })
                                    : k,
                            }),
                        (0, r.jsx)(c.Text, {
                            variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
                            color: "text-muted",
                            children: P({
                                quest: n,
                                locale: V,
                                isQuestExpired: g,
                                collectibleQuestRewardDescription: Z,
                                formattedCompletionDate: x,
                            }),
                        }),
                    ],
                }),
                F
                    ? (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          fullWidth: "lg" !== d,
                          children: [
                              (0, r.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: !0,
                                  text: T.intl.string(T.t.V293qn),
                              }),
                              (0, r.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: () => (0, O.openQuestMinorEnrollmentBlockModal)(n, i, R),
                                  text: T.intl.string(T.t.vY9GgG),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(c.ButtonGroup, {
                          direction: "horizontal",
                          align: "center",
                          justify: "end",
                          fullWidth: "lg" !== d,
                          children: [
                              (0, r.jsx)(N, {
                                  containerSize: d,
                                  onClick: B,
                                  text: T.intl.string(T.t.LLLLPD),
                              }),
                              !H &&
                                  (0, r.jsx)(w, {
                                      quest: n,
                                      progressState: D,
                                      questContent: i,
                                      sourceQuestContent: R,
                                  }),
                          ],
                      }),
            ],
        }),
    });
};
