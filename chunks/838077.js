"use strict";
n.d(t, { wT: () => k, gj: () => U, mU: () => M, tH: () => x, NA: () => V, XR: () => F, VX: () => G });
var i = n(64700),
    r = n(17928);
n(166352);
var s = n(409626),
    a = n(692969),
    o = n(773669),
    l = n(287809),
    d = n(975571),
    _ = n(252424),
    u = n(474090),
    c = n(507107),
    E = n(627968),
    h = n(939249),
    m = n(834730),
    f = n(862611),
    g = n(420298),
    p = n(945810),
    A = n(654487);
(0, p.mj)({
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
    T = n(985018),
    S = n(651892),
    N = n(801365),
    C = n(814793),
    R = n(890687),
    O = n(652215),
    y = n(788868);
let v = "NVIDIA GeForce NOW";
function D(e, t, n) {
    return n ? T.intl.formatToPlainString(e, t) : T.intl.format(e, t);
}
function L(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? T.t["/4XT0b"] : T.t["0hwcvM"]) : n ? T.t.tQoqXX : T.t["eb/Sna"];
}
function b(e) {
    return e ? T.t.klYWbT : T.t.ziB0HF;
}
function w(e) {
    return e ? T.t["4JS2QJ"] : T.t.AwuMRS;
}
function P(e) {
    return e ? T.t.GFdaUK : T.t.NIimTt;
}
function k(e, t, n, i) {
    let { targetMinutes: r } = (0, R.fc)(e),
        s = (0, R.I3)(e),
        a = (0, R.BL)({ quest: e, questContent: n, sourceQuestContent: i }),
        o = (0, C.ui)(e);
    if ((0, I.g5)(e) && !(0, I.t)({ quest: e }))
        return T.intl.format(T.t["l4S+cQ"], { minutes: r, onClick: a, gameTitle: e.config.messages.gameTitle });
    if ((0, I.g5)(e))
        return o
            ? T.intl.format(T.t.gbtCpW, { onClick: a, minutes: r })
            : T.intl.format(T.t.Ajlcd7, { minutes: r, onClick: a, gameTitle: e.config.messages.gameTitle });
    if (o) return T.intl.format(T.t.Hu8SKW, { targetMinutes: r });
    if ((0, I.vv)(e)) {
        let t = (0, I.Xi)(e.config),
            n = t?.messages.videoTitle;
        return null == n ? T.intl.string(T.t["o+e9yh"]) : T.intl.formatToPlainString(T.t["9m9Mna"], { videoTitle: n });
    }
    if (null != s) return s.title;
    if ((0, I.vl)(e))
        if ((0, C._e)(e)) return T.intl.format(T.t["1NaRSs"], { minutes: r });
        else return T.intl.format(T.t.xHXCyf, { minutes: r, activityName: e.config.messages.gameTitle });
    let l = T.t["6zWtV8"];
    return (
        (0, I.t)({ quest: e }) &&
            (l = e.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST) ? T.t.fe7Xec : T.t["wmOh/q"]),
        T.intl.format(l, { minutes: r, gameTitle: e.config.messages.gameTitle })
    );
}
function M(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        o = (0, R.I3)(t),
        _ = (0, I._3)(t)?.[0],
        p = (0, a.A)({ applicationId: _, location: A.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
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
                onGameSheetOpened: _,
                onGameSheetClosed: p,
                onGameTitleClick: S,
            } = e,
            R = (0, u.ki)(o, y.PremiumTypes.TIER_2),
            k = (0, N.k5)(t.config),
            M = (0, I.g5)(t) && (0, I.xZ)(t);
        if ((0, C.ui)(t))
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
                    { targetMinutes: d, applications: _ } = n;
                if (r) return T.intl.formatToPlainString(T.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: d });
                let u = (function (e) {
                    let {
                        quest: t,
                        sourceQuestContent: n,
                        applications: i,
                        popoutTargetElementRef: r,
                        onGameSheetOpened: s,
                        onGameSheetClosed: a,
                    } = e;
                    return (e) =>
                        (0, E.jsx)(
                            f.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: r,
                                onGameSheetOpened: s,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, E.jsx)(h.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, E.jsx)(m.E, {
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            className: g.s3,
                                            children: e,
                                        }),
                                    }),
                            },
                            t.id,
                        );
                })({
                    quest: t,
                    sourceQuestContent: i,
                    applications: _ ?? [],
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
                })({ quest: t, rewardNameWithArticle: l, targetMinutes: d, gameSheetHook: u });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: s,
                withoutMarkdown: a,
                popoutTargetElementRef: l,
                onGameSheetOpened: _,
                onGameSheetClosed: p,
            });
        if (M)
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
                    d = t.config.messages.gameTitle,
                    _ = (0, N.JX)(t.config),
                    u = (0, N.Y7)(t.config),
                    c = t.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    E = null != a;
                return D(
                    r && _
                        ? u
                            ? c
                                ? null != s
                                    ? T.t.u5QXpw
                                    : T.t.ztXW8V
                                : L({ hasRewardDuration: null != s, shouldShowGameProfileLink: E })
                            : c
                              ? T.t["1AcTqm"]
                              : b(E)
                        : _ || null != s
                          ? c
                              ? T.t.enQ3jU
                              : w(E)
                          : c
                            ? T.t["e+K3xJ"]
                            : P(E),
                    {
                        gameTitle: d,
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
                hasNitro: R,
                collectibleRewardDuration: k,
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
                    d = t.config.messages.gameTitle,
                    _ = (0, N.JX)(t.config),
                    u = (0, N.Y7)(t.config),
                    c = null != a;
                return D(
                    r && _
                        ? u
                            ? L({ hasRewardDuration: null != s, shouldShowGameProfileLink: c })
                            : b(c)
                        : _ || null != s
                          ? w(c)
                          : P(c),
                    {
                        gameTitle: d,
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
                hasNitro: R,
                collectibleRewardDuration: k,
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
                    { targetMinutes: d } = i,
                    _ = n.config.messages.gameTitle,
                    u = (0, N.JX)(n.config),
                    c = (0, N.Y7)(n.config),
                    E = n.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    h = null != o;
                return D(
                    (t =
                        s && u
                            ? c
                                ? E
                                    ? null != a
                                        ? T.t.u5QXpw
                                        : T.t.ztXW8V
                                    : L({ hasRewardDuration: null != a, shouldShowGameProfileLink: h })
                                : E
                                  ? T.t["1AcTqm"]
                                  : b(h)
                            : u || null != a
                              ? E
                                  ? T.t.enQ3jU
                                  : w(h)
                              : E
                                ? T.t["03VJqu"]
                                : h
                                  ? T.t.NrD2h8
                                  : T.t.FZL5Q5),
                    {
                        gameTitle: _,
                        streamingDurationRequirement: d,
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
                hasNitro: R,
                collectibleRewardDuration: k,
                onGameTitleClick: S,
            });
        if ((0, N.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return D(
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
                D(
                    r && R
                        ? s
                            ? null != k
                                ? T.t.tXwfJT
                                : T.t["xqX+r5"]
                            : T.t["vs/xBu"]
                        : r || null != k
                          ? T.t["W/HkLO"]
                          : t.id === A.Fw
                            ? T.t.Rsd5bL
                            : T.t["g+InPC"],
                    { videoTitle: n, rewardNameWithArticle: i, duration: k },
                    a,
                )
            );
        } else if ((0, I.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, questContent: r } = e,
                    s = n.targetMinutes,
                    a = (0, N.mH)(t.config);
                return (0, C._e)(t)
                    ? D(T.t.VYwSSu, { streamingDurationRequirement: s, questReward: a }, i)
                    : t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)
                      ? r === c.uF.QUESTS_EMBED
                          ? D(
                                T.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: v,
                                    providerLink: d.A.getArticleURL(O.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: a,
                                },
                                i,
                            )
                          : D(
                                T.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: v,
                                    providerLink: d.A.getArticleURL(O.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: s,
                                    questReward: a,
                                },
                                i,
                            )
                      : D(
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
                      d = t.config.messages.gameTitle,
                      _ = (0, N.JX)(t.config),
                      u = (0, N.Y7)(t.config),
                      c = null != a;
                  return D(
                      r && _
                          ? u
                              ? null != s
                                  ? c
                                      ? T.t["3RwRv8"]
                                      : T.t.TmKqHw
                                  : c
                                    ? T.t.l9yxDa
                                    : T.t["X8Yt/1"]
                              : c
                                ? T.t.eEuma3
                                : T.t.smG9ql
                          : _ || null != s
                            ? c
                                ? T.t.Cko4a4
                                : T.t.BLyDvO
                            : c
                              ? T.t.ER9rII
                              : T.t["hkJ+Gs"],
                      {
                          gameTitle: d,
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
                  hasNitro: R,
                  collectibleRewardDuration: k,
                  onGameTitleClick: S,
              });
    })({ ...e, currentUser: i, withoutMarkdown: !1, thirdPartyTaskDetails: o ?? void 0, onGameTitleClick: p });
}
function U(e, t, n, i) {
    let r = (0, R.fc)(e),
        s = (0, I.JC)(e),
        a = M({
            quest: e,
            taskDetails: r,
            location: A.rE.QUEST_HOME_DESKTOP,
            questContent: c.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: i,
            gameProfileSource: n,
        }),
        o = e.userStatus?.claimedAt != null,
        l = (0, R.S5)(e.userStatus?.claimedAt);
    return o
        ? T.intl.formatToPlainString(T.t.lOVr0O, { claimDate: l })
        : null != s
          ? s.description
          : null != a
            ? a
            : null;
}
function x(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: r,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
        } = e,
        d = t.config.rewardsConfig.rewardsExpireAt,
        _ = (0, R.S5)(d),
        u = (0, R.fc)(t),
        E = (0, R.I3)(t),
        h = t.userStatus?.completedAt != null,
        m = t.userStatus?.enrolledAt != null,
        f = u.percentComplete > 0,
        g = (0, R.Vn)(t),
        p = M({
            quest: t,
            location: A.rE.QUESTS_BAR,
            questContent: c.uF.QUEST_BAR_V2,
            taskDetails: u,
            sourceQuestContent: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            gameProfileSource: s.Ob.QuestBar,
        }),
        O = null != E ? E.percentComplete : u.percentComplete;
    if (h) return T.intl.formatToPlainString(T.t.APddvF, { expirationDate: _ });
    if (n) {
        if (r !== c.X0.SELECT && (0, C.ui)(t) && m && !f) {
            let e = (0, N.mH)(t.config);
            return T.intl.format(T.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: u.targetMinutes });
        }
        return p;
    }
    if ((0, I.vv)(t)) return T.intl.string(T.t["o+e9yh"]);
    if (O > 0)
        if (!g) return T.intl.string(T.t.mOrpXG);
        else return (0, S.YT)({ quest: t, taskDetails: u, thirdPartyTaskDetails: E ?? void 0 });
    return T.intl.string(T.t.S6UUc5);
}
function G(e) {
    let t = (0, r.bG)([o.default], () => o.default.locale),
        n = (0, R.fc)(e),
        [i] = (0, R.Qo)(e, n),
        s = (0, R.I3)(e),
        a = e.userStatus?.completedAt != null,
        l = null != s ? s.percentComplete : n.percentComplete;
    if (a) return T.intl.string(T.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && l > 0) {
        let e = (0, _.l9)(t, l, { roundingMode: "floor" });
        return T.intl.formatToPlainString(T.t.lVZaXD, { percent: e });
    }
    return i === c.X0.SELECT
        ? T.intl.string(T.t.EMrUHQ)
        : (0, I.g5)(e)
          ? T.intl.string(T.t.mOrpXG)
          : T.intl.string(T.t["7e5k7L"]);
}
function V(e) {
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
        o = (0, R.fc)(t);
    switch (a) {
        case 0:
            if (t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)) return T.intl.string(T.t["+qoymD"]);
            if ((0, C.vA)(t)) return T.intl.string(r ? T.t.E4kW5O : T.t["Ie9++s"]);
            return T.intl.string(T.t.l7E81v);
        case 1:
            return T.intl.string(T.t.l7E81v);
        case 2:
            return T.intl.formatToPlainString(T.t.GNsKiW, { remainTime: (0, I.xm)(o) });
        case 3:
            return (0, C.vA)(t) && 1 ? T.intl.string(r ? T.t.CkUzLd : T.t["hRIVy+"]) : T.intl.string(T.t.l7E81v);
    }
}
function F(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, N.kr)({ quest: t }),
        r = n?.platform ?? c.pY.CROSS_PLATFORM,
        s = i ? (0, N.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, S.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? o[r] : void 0;
}
