"use strict";
n.d(t, { gj: () => k, mU: () => M, tH: () => P, NA: () => U, XR: () => V, VX: () => D });
var l = n(64700),
    i = n(17928);
n(166352);
var s = n(409626),
    a = n(692969),
    r = n(773669),
    o = n(287809),
    c = n(975571),
    u = n(252424),
    d = n(474090),
    h = n(507107),
    m = n(627968),
    p = n(939249),
    f = n(834730),
    g = n(862611),
    x = n(420298),
    C = n(945810),
    A = n(654487);
(0, C.mj)({
    name: "2026-04-mobile-quest-external-link",
    kind: "user",
    defaultConfig: { variant: 0 },
    variations: {
        0: { variant: 0 },
        1: { variant: 1 },
        2: { variant: 2 },
        3: { variant: 3 },
        4: { variant: 4 },
        5: { variant: 5 },
        6: { variant: 6 },
    },
});
var E = n(792620),
    I = n(985018),
    y = n(651892),
    v = n(801365),
    S = n(814793),
    N = n(890687),
    j = n(652215),
    _ = n(788868);
let T = "NVIDIA GeForce NOW";
function b(e, t, n) {
    return n ? I.intl.formatToPlainString(e, t) : I.intl.format(e, t);
}
function R(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? I.t["/4XT0b"] : I.t["0hwcvM"]) : n ? I.t.tQoqXX : I.t["eb/Sna"];
}
function O(e) {
    return e ? I.t.klYWbT : I.t.ziB0HF;
}
function L(e) {
    return e ? I.t["4JS2QJ"] : I.t.AwuMRS;
}
function w(e) {
    return e ? I.t.GFdaUK : I.t.NIimTt;
}
function M(e) {
    let { quest: t, gameProfileSource: n } = e,
        l = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        r = (0, N.I3)(t),
        u = (0, E._3)(t)?.[0],
        C = (0, a.A)({ applicationId: u, location: A.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                questContent: l,
                thirdPartyTaskDetails: i,
                sourceQuestContent: s,
                withoutMarkdown: a,
                currentUser: r,
                popoutTargetElementRef: o,
                onGameSheetOpened: u,
                onGameSheetClosed: C,
                onGameTitleClick: y,
            } = e,
            N = (0, d.ki)(r, _.PremiumTypes.TIER_2),
            M = (0, v.k5)(t.config),
            k = (0, E.g5)(t) && (0, E.xZ)(t);
        if ((0, S.ui)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        sourceQuestContent: l,
                        withoutMarkdown: i,
                        popoutTargetElementRef: s,
                        onGameSheetOpened: a,
                        onGameSheetClosed: r,
                    } = e,
                    o = (0, v.mH)(t.config),
                    { targetMinutes: c, applications: u } = n;
                if (i) return I.intl.formatToPlainString(I.t["1votF6"], { rewardNameWithArticle: o, targetMinutes: c });
                let d = (function (e) {
                    let {
                        quest: t,
                        sourceQuestContent: n,
                        applications: l,
                        popoutTargetElementRef: i,
                        onGameSheetOpened: s,
                        onGameSheetClosed: a,
                    } = e;
                    return (e) =>
                        (0, m.jsx)(
                            g.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: l ?? [],
                                targetElementRef: i,
                                onGameSheetOpened: s,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, m.jsx)(p.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, m.jsx)(f.E, {
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            className: x.s3,
                                            children: e,
                                        }),
                                    }),
                            },
                            t.id,
                        );
                })({
                    quest: t,
                    sourceQuestContent: l,
                    applications: u ?? [],
                    popoutTargetElementRef: s,
                    onGameSheetOpened: a,
                    onGameSheetClosed: r,
                });
                return (function (e) {
                    let { quest: t, gameSheetHook: n, rewardNameWithArticle: l, targetMinutes: i } = e,
                        s = {
                            [A.Li.PACKAGE_ACTION_ADVENTURE]: I.t.H485IA,
                            [A.Li.PACKAGE_RPG_MMO]: I.t["3XS8Ni"],
                            [A.Li.PACKAGE_RACING_SPORTS]: I.t["X+UCju"],
                            [A.Li.PACKAGE_SANDBOX_CREATIVE]: I.t["6o4n1Q"],
                            [A.Li.PACKAGE_FAMILY_FRIENDLY]: I.t.DUsNmf,
                            [A.Li.PACKAGE_HOLIDAY_SEASON]: I.t["cWP8/Z"],
                            [A.Li.PACKAGE_NEW_YEARS]: I.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        r = (null != a ? s[a] : null) ?? I.t.CDeHul;
                    return I.intl.format(r, { rewardNameWithArticle: l, targetMinutes: i, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: o, targetMinutes: c, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: s,
                withoutMarkdown: a,
                popoutTargetElementRef: o,
                onGameSheetOpened: u,
                onGameSheetClosed: C,
            });
        if (k)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: l,
                        hasNitro: i,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                    } = e,
                    r = (0, v.mH)(t.config),
                    { targetMinutes: o } = n,
                    c = t.config.messages.gameTitle,
                    u = (0, v.JX)(t.config),
                    d = (0, v.Y7)(t.config),
                    h = t.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    m = null != a;
                return b(
                    i && u
                        ? d
                            ? h
                                ? null != s
                                    ? I.t.u5QXpw
                                    : I.t.ztXW8V
                                : R({ hasRewardDuration: null != s, shouldShowGameProfileLink: m })
                            : h
                              ? I.t["1AcTqm"]
                              : O(m)
                        : u || null != s
                          ? h
                              ? I.t.enQ3jU
                              : L(m)
                          : h
                            ? I.t["e+K3xJ"]
                            : w(m),
                    {
                        gameTitle: c,
                        streamingDurationRequirement: o,
                        rewardNameWithArticle: r,
                        duration: s,
                        targetMinutes: o,
                        onGameTitleClick: a,
                    },
                    l,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: N,
                collectibleRewardDuration: M,
                onGameTitleClick: y,
            });
        if ((0, E.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: l,
                        hasNitro: i,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                    } = e,
                    r = (0, v.mH)(t.config),
                    { targetMinutes: o } = n,
                    c = t.config.messages.gameTitle,
                    u = (0, v.JX)(t.config),
                    d = (0, v.Y7)(t.config),
                    h = null != a;
                return b(
                    i && u
                        ? d
                            ? R({ hasRewardDuration: null != s, shouldShowGameProfileLink: h })
                            : O(h)
                        : u || null != s
                          ? L(h)
                          : w(h),
                    {
                        gameTitle: c,
                        targetMinutes: o,
                        rewardNameWithArticle: r,
                        duration: s,
                        streamingDurationRequirement: o,
                        onGameTitleClick: a,
                    },
                    l,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: N,
                collectibleRewardDuration: M,
                onGameTitleClick: y,
            });
        if ((0, E.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: l,
                        withoutMarkdown: i,
                        hasNitro: s,
                        collectibleRewardDuration: a,
                        onGameTitleClick: r,
                    } = e,
                    o = (0, v.mH)(n.config),
                    { targetMinutes: c } = l,
                    u = n.config.messages.gameTitle,
                    d = (0, v.JX)(n.config),
                    h = (0, v.Y7)(n.config),
                    m = n.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    p = null != r;
                return b(
                    (t =
                        s && d
                            ? h
                                ? m
                                    ? null != a
                                        ? I.t.u5QXpw
                                        : I.t.ztXW8V
                                    : R({ hasRewardDuration: null != a, shouldShowGameProfileLink: p })
                                : m
                                  ? I.t["1AcTqm"]
                                  : O(p)
                            : d || null != a
                              ? m
                                  ? I.t.enQ3jU
                                  : L(p)
                              : m
                                ? I.t["03VJqu"]
                                : p
                                  ? I.t.NrD2h8
                                  : I.t.FZL5Q5),
                    {
                        gameTitle: u,
                        streamingDurationRequirement: c,
                        rewardNameWithArticle: o,
                        duration: a,
                        questReward: o,
                        onGameTitleClick: r,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: N,
                collectibleRewardDuration: M,
                onGameTitleClick: y,
            });
        if ((0, v.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: l, onGameTitleClick: i } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return b(
                    null != i ? I.t.HHVg4i : I.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: i },
                    l,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, onGameTitleClick: y });
        else if ((0, E.vv)(t)) {
            let e, n, l, i, s;
            return (
                (e = (0, E.Xi)(t.config)),
                (n = e?.messages.videoTitle ?? "video"),
                (l = (0, v.mH)(t.config)),
                (i = (0, v.JX)(t.config)),
                (s = (0, v.Y7)(t.config)),
                b(
                    i && N
                        ? s
                            ? null != M
                                ? I.t.tXwfJT
                                : I.t["xqX+r5"]
                            : I.t["vs/xBu"]
                        : i || null != M
                          ? I.t["W/HkLO"]
                          : t.id === A.Fw
                            ? I.t.Rsd5bL
                            : I.t["g+InPC"],
                    { videoTitle: n, rewardNameWithArticle: l, duration: M },
                    a,
                )
            );
        } else if ((0, E.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: l, questContent: i } = e,
                    s = n.targetMinutes,
                    a = (0, v.mH)(t.config);
                return (0, S._e)(t)
                    ? b(I.t.VYwSSu, { streamingDurationRequirement: s, questReward: a }, l)
                    : t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)
                      ? i === h.uF.QUESTS_EMBED
                          ? b(
                                I.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: T,
                                    providerLink: c.A.getArticleURL(j.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: a,
                                },
                                l,
                            )
                          : b(
                                I.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: T,
                                    providerLink: c.A.getArticleURL(j.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: s,
                                    questReward: a,
                                },
                                l,
                            )
                      : b(
                            I.t.UuzHh8,
                            {
                                activityName: t.config.messages.gameTitle,
                                streamingDurationRequirement: s,
                                questReward: a,
                            },
                            l,
                        );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, questContent: l });
        return null != i
            ? i.description
            : (function (e) {
                  let {
                          quest: t,
                          taskDetails: n,
                          withoutMarkdown: l,
                          hasNitro: i,
                          collectibleRewardDuration: s,
                          onGameTitleClick: a,
                      } = e,
                      r = (0, v.mH)(t.config),
                      { targetMinutes: o } = n,
                      c = t.config.messages.gameTitle,
                      u = (0, v.JX)(t.config),
                      d = (0, v.Y7)(t.config),
                      h = null != a;
                  return b(
                      i && u
                          ? d
                              ? null != s
                                  ? h
                                      ? I.t["3RwRv8"]
                                      : I.t.TmKqHw
                                  : h
                                    ? I.t.l9yxDa
                                    : I.t["X8Yt/1"]
                              : h
                                ? I.t.eEuma3
                                : I.t.smG9ql
                          : u || null != s
                            ? h
                                ? I.t.Cko4a4
                                : I.t.BLyDvO
                            : h
                              ? I.t.ER9rII
                              : I.t["hkJ+Gs"],
                      {
                          gameTitle: c,
                          streamingDurationRequirement: o,
                          duration: s,
                          questReward: r,
                          onGameTitleClick: a,
                      },
                      l,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: a,
                  hasNitro: N,
                  collectibleRewardDuration: M,
                  onGameTitleClick: y,
              });
    })({ ...e, currentUser: l, withoutMarkdown: !1, thirdPartyTaskDetails: r ?? void 0, onGameTitleClick: C });
}
function k(e, t, n, l) {
    let i = (0, N.fc)(e),
        s = (0, E.JC)(e),
        a = M({
            quest: e,
            taskDetails: i,
            location: A.rE.QUEST_HOME_DESKTOP,
            questContent: h.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: l,
            gameProfileSource: n,
        }),
        r = e.userStatus?.claimedAt != null,
        o = (0, N.S5)(e.userStatus?.claimedAt);
    return r
        ? I.intl.formatToPlainString(I.t.lOVr0O, { claimDate: o })
        : null != s
          ? s.description
          : null != a
            ? a
            : null;
}
function P(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: l,
            activeScreen: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: r,
            onGameSheetClosed: o,
        } = e,
        c = t.config.rewardsConfig.rewardsExpireAt,
        u = (0, N.S5)(c),
        d = (0, N.fc)(t),
        m = (0, N.I3)(t),
        p = t.userStatus?.completedAt != null,
        f = t.userStatus?.enrolledAt != null,
        g = d.percentComplete > 0,
        x = (0, N.Vn)(t),
        C = M({
            quest: t,
            location: A.rE.QUESTS_BAR,
            questContent: h.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: l,
            popoutTargetElementRef: a,
            onGameSheetOpened: r,
            onGameSheetClosed: o,
            gameProfileSource: s.Ob.QuestBar,
        }),
        j = null != m ? m.percentComplete : d.percentComplete;
    if (p) return I.intl.formatToPlainString(I.t.APddvF, { expirationDate: u });
    if (n) {
        if (i !== h.X0.SELECT && (0, S.ui)(t) && f && !g) {
            let e = (0, v.mH)(t.config);
            return I.intl.format(I.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
        return C;
    }
    if ((0, E.vv)(t)) return I.intl.string(I.t["o+e9yh"]);
    if (j > 0)
        if (!x) return I.intl.string(I.t.mOrpXG);
        else return (0, y.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: m ?? void 0 });
    return I.intl.string(I.t.S6UUc5);
}
function D(e) {
    let t = (0, i.bG)([r.default], () => r.default.locale),
        n = (0, N.fc)(e),
        [l] = (0, N.Qo)(e, n),
        s = (0, N.I3)(e),
        a = e.userStatus?.completedAt != null,
        o = null != s ? s.percentComplete : n.percentComplete;
    if (a) return I.intl.string(I.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && o > 0) {
        let e = (0, u.l9)(t, o, { roundingMode: "floor" });
        return I.intl.formatToPlainString(I.t.lVZaXD, { percent: e });
    }
    return l === h.X0.SELECT
        ? I.intl.string(I.t.EMrUHQ)
        : (0, E.g5)(e)
          ? I.intl.string(I.t.mOrpXG)
          : I.intl.string(I.t["7e5k7L"]);
}
function U(e) {
    let { quest: t, application: n, shortText: i = !1, mobileExternalLinkVariant: s } = e,
        a = l.useMemo(
            () =>
                (function (e) {
                    return (0, E.g5)(e) || (0, E.vl)(e)
                        ? 0
                        : (0, E.fE)({ quest: e })
                          ? 1
                          : (0, E.IO)(e)
                            ? 2
                            : 3 * !!(0, E.Cr)(e);
                })(t),
            [t],
        ),
        r = (0, N.fc)(t);
    switch (a) {
        case 0:
            if (t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)) return I.intl.string(I.t["+qoymD"]);
            if ((0, S.vA)(t)) return I.intl.string(i ? I.t.E4kW5O : I.t["Ie9++s"]);
            return I.intl.string(I.t.l7E81v);
        case 1:
            return I.intl.string(I.t.l7E81v);
        case 2:
            return I.intl.formatToPlainString(I.t.GNsKiW, { remainTime: (0, E.xm)(r) });
        case 3:
            return (0, S.vA)(t) && 1 ? I.intl.string(i ? I.t.CkUzLd : I.t["hRIVy+"]) : I.intl.string(I.t.l7E81v);
    }
}
function V(e) {
    let { quest: t, rewardCode: n } = e,
        l = (0, v.kr)({ quest: t }),
        i = n?.platform ?? h.pY.CROSS_PLATFORM,
        s = l ? (0, v.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, y.xv)(t.config),
        r = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != i ? r[i] : void 0;
}
