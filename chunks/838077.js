"use strict";
n.d(t, { gj: () => x, mU: () => P, tH: () => U, NA: () => G, XR: () => F, VX: () => k });
var i = n(64700),
    r = n(17928);
n(166352);
var s = n(409626),
    a = n(692969),
    o = n(773669),
    l = n(287809),
    u = n(975571),
    c = n(252424),
    d = n(474090),
    _ = n(507107),
    f = n(627968),
    h = n(939249),
    p = n(834730),
    E = n(862611),
    m = n(420298),
    g = n(945810),
    A = n(190107);
(0, g.mj)({
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
var I = n(792620),
    T = n(375708),
    S = n(651892),
    N = n(801365),
    y = n(814793),
    C = n(31587),
    v = n(652215),
    O = n(788868);
let R = "NVIDIA GeForce NOW";
function b(e, t, n) {
    return n ? T.intl.formatToPlainString(e, t) : T.intl.format(e, t);
}
function D(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? T.t["/4XT0b"] : T.t["0hwcvM"]) : n ? T.t.tQoqXX : T.t["eb/Sna"];
}
function L(e) {
    return e ? T.t.klYWbT : T.t.ziB0HF;
}
function w(e) {
    return e ? T.t["4JS2QJ"] : T.t.AwuMRS;
}
function M(e) {
    return e ? T.t.GFdaUK : T.t.NIimTt;
}
function P(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        o = (0, C.I3)(t),
        c = (0, I._3)(t)?.[0],
        g = (0, a.A)({ applicationId: c, location: A.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                questContent: i,
                thirdPartyTaskDetails: r,
                sourceQuestContent: s,
                withoutMarkdown: a,
                currentUser: o,
                popoutTargetElementRef: l,
                onGameSheetOpened: c,
                onGameSheetClosed: g,
                onGameTitleClick: S,
            } = e,
            C = (0, d.ki)(o, O.PremiumTypes.TIER_2),
            P = (0, N.k5)(t.config),
            x = (0, I.g5)(t) && (0, I.xZ)(t);
        if ((0, y.ui)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        sourceQuestContent: i,
                        withoutMarkdown: r,
                        popoutTargetElementRef: s,
                        onGameSheetOpened: a,
                        onGameSheetClosed: o,
                    } = e,
                    l = (0, N.mH)(t.config),
                    { targetMinutes: u, applications: c } = n;
                if (r) return T.intl.formatToPlainString(T.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
                let d = (function (e) {
                    let {
                        quest: t,
                        sourceQuestContent: n,
                        applications: i,
                        popoutTargetElementRef: r,
                        onGameSheetOpened: s,
                        onGameSheetClosed: a,
                    } = e;
                    return (e) =>
                        (0, f.jsx)(
                            E.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: r,
                                onGameSheetOpened: s,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, f.jsx)(h.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, f.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            className: m.s3,
                                            children: e,
                                        }),
                                    }),
                            },
                            t.id,
                        );
                })({
                    quest: t,
                    sourceQuestContent: i,
                    applications: c ?? [],
                    popoutTargetElementRef: s,
                    onGameSheetOpened: a,
                    onGameSheetClosed: o,
                });
                return (function (e) {
                    let { quest: t, gameSheetHook: n, rewardNameWithArticle: i, targetMinutes: r } = e,
                        s = {
                            [A.Li.PACKAGE_ACTION_ADVENTURE]: T.t.H485IA,
                            [A.Li.PACKAGE_RPG_MMO]: T.t["3XS8Ni"],
                            [A.Li.PACKAGE_RACING_SPORTS]: T.t["X+UCju"],
                            [A.Li.PACKAGE_SANDBOX_CREATIVE]: T.t["6o4n1Q"],
                            [A.Li.PACKAGE_FAMILY_FRIENDLY]: T.t.DUsNmf,
                            [A.Li.PACKAGE_HOLIDAY_SEASON]: T.t["cWP8/Z"],
                            [A.Li.PACKAGE_NEW_YEARS]: T.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        o = (null != a ? s[a] : null) ?? T.t.CDeHul;
                    return T.intl.format(o, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: s,
                withoutMarkdown: a,
                popoutTargetElementRef: l,
                onGameSheetOpened: c,
                onGameSheetClosed: g,
            });
        if (x)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                    } = e,
                    o = (0, N.mH)(t.config),
                    { targetMinutes: l } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, N.JX)(t.config),
                    d = (0, N.Y7)(t.config),
                    _ = t.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    f = null != a;
                return b(
                    r && c
                        ? d
                            ? _
                                ? null != s
                                    ? T.t.u5QXpw
                                    : T.t.ztXW8V
                                : D({ hasRewardDuration: null != s, shouldShowGameProfileLink: f })
                            : _
                              ? T.t["1AcTqm"]
                              : L(f)
                        : c || null != s
                          ? _
                              ? T.t.enQ3jU
                              : w(f)
                          : _
                            ? T.t["e+K3xJ"]
                            : M(f),
                    {
                        gameTitle: u,
                        streamingDurationRequirement: l,
                        rewardNameWithArticle: o,
                        duration: s,
                        targetMinutes: l,
                        onGameTitleClick: a,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: C,
                collectibleRewardDuration: P,
                onGameTitleClick: S,
            });
        if ((0, I.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                    } = e,
                    o = (0, N.mH)(t.config),
                    { targetMinutes: l } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, N.JX)(t.config),
                    d = (0, N.Y7)(t.config),
                    _ = null != a;
                return b(
                    r && c
                        ? d
                            ? D({ hasRewardDuration: null != s, shouldShowGameProfileLink: _ })
                            : L(_)
                        : c || null != s
                          ? w(_)
                          : M(_),
                    {
                        gameTitle: u,
                        targetMinutes: l,
                        rewardNameWithArticle: o,
                        duration: s,
                        streamingDurationRequirement: l,
                        onGameTitleClick: a,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: C,
                collectibleRewardDuration: P,
                onGameTitleClick: S,
            });
        if ((0, I.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: i,
                        withoutMarkdown: r,
                        hasNitro: s,
                        collectibleRewardDuration: a,
                        onGameTitleClick: o,
                    } = e,
                    l = (0, N.mH)(n.config),
                    { targetMinutes: u } = i,
                    c = n.config.messages.gameTitle,
                    d = (0, N.JX)(n.config),
                    _ = (0, N.Y7)(n.config),
                    f = n.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    h = null != o;
                return b(
                    (t =
                        s && d
                            ? _
                                ? f
                                    ? null != a
                                        ? T.t.u5QXpw
                                        : T.t.ztXW8V
                                    : D({ hasRewardDuration: null != a, shouldShowGameProfileLink: h })
                                : f
                                  ? T.t["1AcTqm"]
                                  : L(h)
                            : d || null != a
                              ? f
                                  ? T.t.enQ3jU
                                  : w(h)
                              : f
                                ? T.t["03VJqu"]
                                : h
                                  ? T.t.NrD2h8
                                  : T.t.FZL5Q5),
                    {
                        gameTitle: c,
                        streamingDurationRequirement: u,
                        rewardNameWithArticle: l,
                        duration: a,
                        questReward: l,
                        onGameTitleClick: o,
                    },
                    r,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: C,
                collectibleRewardDuration: P,
                onGameTitleClick: S,
            });
        if ((0, N.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return b(
                    null != r ? T.t.HHVg4i : T.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: r },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, onGameTitleClick: S });
        else if ((0, I.vv)(t)) {
            let e, n, i, r, s;
            return (
                (e = (0, I.Xi)(t.config)),
                (n = e?.messages.videoTitle ?? "video"),
                (i = (0, N.mH)(t.config)),
                (r = (0, N.JX)(t.config)),
                (s = (0, N.Y7)(t.config)),
                b(
                    r && C
                        ? s
                            ? null != P
                                ? T.t.tXwfJT
                                : T.t["xqX+r5"]
                            : T.t["vs/xBu"]
                        : r || null != P
                          ? T.t["W/HkLO"]
                          : t.id === A.Fw
                            ? T.t.Rsd5bL
                            : T.t["g+InPC"],
                    { videoTitle: n, rewardNameWithArticle: i, duration: P },
                    a,
                )
            );
        } else if ((0, I.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, questContent: r } = e,
                    s = n.targetMinutes,
                    a = (0, N.mH)(t.config);
                return (0, y._e)(t)
                    ? b(T.t.VYwSSu, { streamingDurationRequirement: s, questReward: a }, i)
                    : t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)
                      ? r === _.uF.QUESTS_EMBED
                          ? b(
                                T.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: R,
                                    providerLink: u.A.getArticleURL(v.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: a,
                                },
                                i,
                            )
                          : b(
                                T.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: R,
                                    providerLink: u.A.getArticleURL(v.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: s,
                                    questReward: a,
                                },
                                i,
                            )
                      : b(
                            T.t.UuzHh8,
                            {
                                activityName: t.config.messages.gameTitle,
                                streamingDurationRequirement: s,
                                questReward: a,
                            },
                            i,
                        );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, questContent: i });
        return null != r
            ? r.description
            : (function (e) {
                  let {
                          quest: t,
                          taskDetails: n,
                          withoutMarkdown: i,
                          hasNitro: r,
                          collectibleRewardDuration: s,
                          onGameTitleClick: a,
                      } = e,
                      o = (0, N.mH)(t.config),
                      { targetMinutes: l } = n,
                      u = t.config.messages.gameTitle,
                      c = (0, N.JX)(t.config),
                      d = (0, N.Y7)(t.config),
                      _ = null != a;
                  return b(
                      r && c
                          ? d
                              ? null != s
                                  ? _
                                      ? T.t["3RwRv8"]
                                      : T.t.TmKqHw
                                  : _
                                    ? T.t.l9yxDa
                                    : T.t["X8Yt/1"]
                              : _
                                ? T.t.eEuma3
                                : T.t.smG9ql
                          : c || null != s
                            ? _
                                ? T.t.Cko4a4
                                : T.t.BLyDvO
                            : _
                              ? T.t.ER9rII
                              : T.t["hkJ+Gs"],
                      {
                          gameTitle: u,
                          streamingDurationRequirement: l,
                          duration: s,
                          questReward: o,
                          onGameTitleClick: a,
                      },
                      i,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: a,
                  hasNitro: C,
                  collectibleRewardDuration: P,
                  onGameTitleClick: S,
              });
    })({ ...e, currentUser: i, withoutMarkdown: !1, thirdPartyTaskDetails: o ?? void 0, onGameTitleClick: g });
}
function x(e, t, n, i) {
    let r = (0, C.fc)(e),
        s = (0, I.JC)(e),
        a = P({
            quest: e,
            taskDetails: r,
            location: A.rE.QUEST_HOME_DESKTOP,
            questContent: _.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: i,
            gameProfileSource: n,
        }),
        o = e.userStatus?.claimedAt != null,
        l = (0, C.S5)(e.userStatus?.claimedAt);
    return o
        ? T.intl.formatToPlainString(T.t.lOVr0O, { claimDate: l })
        : null != s
          ? s.description
          : null != a
            ? a
            : null;
}
function U(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: r,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
        } = e,
        u = t.config.rewardsConfig.rewardsExpireAt,
        c = (0, C.S5)(u),
        d = (0, C.fc)(t),
        f = (0, C.I3)(t),
        h = t.userStatus?.completedAt != null,
        p = t.userStatus?.enrolledAt != null,
        E = d.percentComplete > 0,
        m = (0, C.Vn)(t),
        g = P({
            quest: t,
            location: A.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            gameProfileSource: s.Ob.QuestBar,
        }),
        v = null != f ? f.percentComplete : d.percentComplete;
    if (h) return T.intl.formatToPlainString(T.t.APddvF, { expirationDate: c });
    if (n) {
        if (r !== _.X0.SELECT && (0, y.ui)(t) && p && !E) {
            let e = (0, N.mH)(t.config);
            return T.intl.format(T.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
        return g;
    }
    if ((0, I.vv)(t)) return T.intl.string(T.t["o+e9yh"]);
    if (v > 0)
        if (!m) return T.intl.string(T.t.mOrpXG);
        else return (0, S.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: f ?? void 0 });
    return T.intl.string(T.t.S6UUc5);
}
function k(e) {
    let t = (0, r.bG)([o.default], () => o.default.locale),
        n = (0, C.fc)(e),
        [i] = (0, C.Qo)(e, n),
        s = (0, C.I3)(e),
        a = e.userStatus?.completedAt != null,
        l = null != s ? s.percentComplete : n.percentComplete;
    if (a) return T.intl.string(T.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && l > 0) {
        let e = (0, c.l9)(t, l, { roundingMode: "floor" });
        return T.intl.formatToPlainString(T.t.lVZaXD, { percent: e });
    }
    return i === _.X0.SELECT
        ? T.intl.string(T.t.EMrUHQ)
        : (0, I.g5)(e)
          ? T.intl.string(T.t.mOrpXG)
          : T.intl.string(T.t["7e5k7L"]);
}
function G(e) {
    let { quest: t, application: n, shortText: r = !1, mobileExternalLinkVariant: s } = e,
        a = i.useMemo(
            () =>
                (function (e) {
                    return (0, I.g5)(e) || (0, I.vl)(e)
                        ? 0
                        : (0, I.fE)({ quest: e })
                          ? 1
                          : (0, I.IO)(e)
                            ? 2
                            : 3 * !!(0, I.Cr)(e);
                })(t),
            [t],
        ),
        o = (0, C.fc)(t);
    switch (a) {
        case 0:
            if (t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)) return T.intl.string(T.t["+qoymD"]);
            if ((0, y.vA)(t)) return T.intl.string(r ? T.t.E4kW5O : T.t["Ie9++s"]);
            return T.intl.string(T.t.l7E81v);
        case 1:
            return T.intl.string(T.t.l7E81v);
        case 2:
            return T.intl.formatToPlainString(T.t.GNsKiW, { remainTime: (0, I.xm)(o) });
        case 3:
            return (0, y.vA)(t) && 1 ? T.intl.string(r ? T.t.CkUzLd : T.t["hRIVy+"]) : T.intl.string(T.t.l7E81v);
    }
}
function F(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, N.kr)({ quest: t }),
        r = n?.platform ?? _.pY.CROSS_PLATFORM,
        s = i ? (0, N.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, S.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? o[r] : void 0;
}
