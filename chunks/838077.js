"use strict";
n.d(t, { wT: () => M, gj: () => P, mU: () => O, tH: () => D, NA: () => V, XR: () => G, VX: () => U });
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
    _ = n(420298),
    x = n(945810),
    C = n(654487);
(0, x.mj)({
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
var A = n(792620),
    E = n(985018),
    I = n(651892),
    v = n(801365),
    y = n(814793),
    b = n(890687),
    S = n(652215),
    N = n(788868);
let j = "NVIDIA GeForce NOW";
function T(e, t, n) {
    return n ? E.intl.formatToPlainString(e, t) : E.intl.format(e, t);
}
function w(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? E.t["/4XT0b"] : E.t["0hwcvM"]) : n ? E.t.tQoqXX : E.t["eb/Sna"];
}
function R(e) {
    return e ? E.t.klYWbT : E.t.ziB0HF;
}
function L(e) {
    return e ? E.t["4JS2QJ"] : E.t.AwuMRS;
}
function k(e) {
    return e ? E.t.GFdaUK : E.t.NIimTt;
}
function M(e, t, n, l) {
    let { targetMinutes: i } = (0, b.fc)(e),
        s = (0, b.I3)(e),
        a = (0, b.BL)({ quest: e, questContent: n, sourceQuestContent: l }),
        r = (0, y.ui)(e);
    if ((0, A.g5)(e) && !(0, A.t)({ quest: e }))
        return E.intl.format(E.t["l4S+cQ"], { minutes: i, onClick: a, gameTitle: e.config.messages.gameTitle });
    if ((0, A.g5)(e))
        return r
            ? E.intl.format(E.t.gbtCpW, { onClick: a, minutes: i })
            : E.intl.format(E.t.Ajlcd7, { minutes: i, onClick: a, gameTitle: e.config.messages.gameTitle });
    if (r) return E.intl.format(E.t.Hu8SKW, { targetMinutes: i });
    if ((0, A.vv)(e)) {
        let t = (0, A.Xi)(e.config),
            n = t?.messages.videoTitle;
        return null == n ? E.intl.string(E.t["o+e9yh"]) : E.intl.formatToPlainString(E.t["9m9Mna"], { videoTitle: n });
    }
    if (null != s) return s.title;
    if ((0, A.vl)(e))
        if ((0, y._e)(e)) return E.intl.format(E.t["1NaRSs"], { minutes: i });
        else return E.intl.format(E.t.xHXCyf, { minutes: i, activityName: e.config.messages.gameTitle });
    let o = E.t["6zWtV8"];
    return (
        (0, A.t)({ quest: e }) &&
            (o = e.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST) ? E.t.fe7Xec : E.t["wmOh/q"]),
        E.intl.format(o, { minutes: i, gameTitle: e.config.messages.gameTitle })
    );
}
function O(e) {
    let { quest: t, gameProfileSource: n } = e,
        l = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        r = (0, b.I3)(t),
        u = (0, A._3)(t)?.[0],
        x = (0, a.A)({ applicationId: u, location: C.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
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
                onGameSheetClosed: x,
                onGameTitleClick: I,
            } = e,
            b = (0, d.ki)(r, N.PremiumTypes.TIER_2),
            M = (0, v.k5)(t.config),
            O = (0, A.g5)(t) && (0, A.xZ)(t);
        if ((0, y.ui)(t))
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
                if (i) return E.intl.formatToPlainString(E.t["1votF6"], { rewardNameWithArticle: o, targetMinutes: c });
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
                                            className: _.s3,
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
                            [C.Li.PACKAGE_ACTION_ADVENTURE]: E.t.H485IA,
                            [C.Li.PACKAGE_RPG_MMO]: E.t["3XS8Ni"],
                            [C.Li.PACKAGE_RACING_SPORTS]: E.t["X+UCju"],
                            [C.Li.PACKAGE_SANDBOX_CREATIVE]: E.t["6o4n1Q"],
                            [C.Li.PACKAGE_FAMILY_FRIENDLY]: E.t.DUsNmf,
                            [C.Li.PACKAGE_HOLIDAY_SEASON]: E.t["cWP8/Z"],
                            [C.Li.PACKAGE_NEW_YEARS]: E.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        r = (null != a ? s[a] : null) ?? E.t.CDeHul;
                    return E.intl.format(r, { rewardNameWithArticle: l, targetMinutes: i, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: o, targetMinutes: c, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: s,
                withoutMarkdown: a,
                popoutTargetElementRef: o,
                onGameSheetOpened: u,
                onGameSheetClosed: x,
            });
        if (O)
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
                    h = t.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST),
                    m = null != a;
                return T(
                    i && u
                        ? d
                            ? h
                                ? null != s
                                    ? E.t.u5QXpw
                                    : E.t.ztXW8V
                                : w({ hasRewardDuration: null != s, shouldShowGameProfileLink: m })
                            : h
                              ? E.t["1AcTqm"]
                              : R(m)
                        : u || null != s
                          ? h
                              ? E.t.enQ3jU
                              : L(m)
                          : h
                            ? E.t["e+K3xJ"]
                            : k(m),
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
                hasNitro: b,
                collectibleRewardDuration: M,
                onGameTitleClick: I,
            });
        if ((0, A.g5)(t))
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
                return T(
                    i && u
                        ? d
                            ? w({ hasRewardDuration: null != s, shouldShowGameProfileLink: h })
                            : R(h)
                        : u || null != s
                          ? L(h)
                          : k(h),
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
                hasNitro: b,
                collectibleRewardDuration: M,
                onGameTitleClick: I,
            });
        if ((0, A.xZ)(t))
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
                    m = n.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST),
                    p = null != r;
                return T(
                    (t =
                        s && d
                            ? h
                                ? m
                                    ? null != a
                                        ? E.t.u5QXpw
                                        : E.t.ztXW8V
                                    : w({ hasRewardDuration: null != a, shouldShowGameProfileLink: p })
                                : m
                                  ? E.t["1AcTqm"]
                                  : R(p)
                            : d || null != a
                              ? m
                                  ? E.t.enQ3jU
                                  : L(p)
                              : m
                                ? E.t["03VJqu"]
                                : p
                                  ? E.t.NrD2h8
                                  : E.t.FZL5Q5),
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
                hasNitro: b,
                collectibleRewardDuration: M,
                onGameTitleClick: I,
            });
        if ((0, v.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: l, onGameTitleClick: i } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return T(
                    null != i ? E.t.HHVg4i : E.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: i },
                    l,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, onGameTitleClick: I });
        else if ((0, A.vv)(t)) {
            let e, n, l, i, s;
            return (
                (e = (0, A.Xi)(t.config)),
                (n = e?.messages.videoTitle ?? "video"),
                (l = (0, v.mH)(t.config)),
                (i = (0, v.JX)(t.config)),
                (s = (0, v.Y7)(t.config)),
                T(
                    i && b
                        ? s
                            ? null != M
                                ? E.t.tXwfJT
                                : E.t["xqX+r5"]
                            : E.t["vs/xBu"]
                        : i || null != M
                          ? E.t["W/HkLO"]
                          : t.id === C.Fw
                            ? E.t.Rsd5bL
                            : E.t["g+InPC"],
                    { videoTitle: n, rewardNameWithArticle: l, duration: M },
                    a,
                )
            );
        } else if ((0, A.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: l, questContent: i } = e,
                    s = n.targetMinutes,
                    a = (0, v.mH)(t.config);
                return (0, y._e)(t)
                    ? T(E.t.VYwSSu, { streamingDurationRequirement: s, questReward: a }, l)
                    : t.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY)
                      ? i === h.uF.QUESTS_EMBED
                          ? T(
                                E.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: j,
                                    providerLink: c.A.getArticleURL(S.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: a,
                                },
                                l,
                            )
                          : T(
                                E.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: j,
                                    providerLink: c.A.getArticleURL(S.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: s,
                                    questReward: a,
                                },
                                l,
                            )
                      : T(
                            E.t.UuzHh8,
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
                  return T(
                      i && u
                          ? d
                              ? null != s
                                  ? h
                                      ? E.t["3RwRv8"]
                                      : E.t.TmKqHw
                                  : h
                                    ? E.t.l9yxDa
                                    : E.t["X8Yt/1"]
                              : h
                                ? E.t.eEuma3
                                : E.t.smG9ql
                          : u || null != s
                            ? h
                                ? E.t.Cko4a4
                                : E.t.BLyDvO
                            : h
                              ? E.t.ER9rII
                              : E.t["hkJ+Gs"],
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
                  hasNitro: b,
                  collectibleRewardDuration: M,
                  onGameTitleClick: I,
              });
    })({ ...e, currentUser: l, withoutMarkdown: !1, thirdPartyTaskDetails: r ?? void 0, onGameTitleClick: x });
}
function P(e, t, n, l) {
    let i = (0, b.fc)(e),
        s = (0, A.JC)(e),
        a = O({
            quest: e,
            taskDetails: i,
            location: C.rE.QUEST_HOME_DESKTOP,
            questContent: h.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: l,
            gameProfileSource: n,
        }),
        r = e.userStatus?.claimedAt != null,
        o = (0, b.S5)(e.userStatus?.claimedAt);
    return r
        ? E.intl.formatToPlainString(E.t.lOVr0O, { claimDate: o })
        : null != s
          ? s.description
          : null != a
            ? a
            : null;
}
function D(e) {
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
        u = (0, b.S5)(c),
        d = (0, b.fc)(t),
        m = (0, b.I3)(t),
        p = t.userStatus?.completedAt != null,
        f = t.userStatus?.enrolledAt != null,
        g = d.percentComplete > 0,
        _ = (0, b.Vn)(t),
        x = O({
            quest: t,
            location: C.rE.QUESTS_BAR,
            questContent: h.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: l,
            popoutTargetElementRef: a,
            onGameSheetOpened: r,
            onGameSheetClosed: o,
            gameProfileSource: s.Ob.QuestBar,
        }),
        S = null != m ? m.percentComplete : d.percentComplete;
    if (p) return E.intl.formatToPlainString(E.t.APddvF, { expirationDate: u });
    if (n) {
        if (i !== h.X0.SELECT && (0, y.ui)(t) && f && !g) {
            let e = (0, v.mH)(t.config);
            return E.intl.format(E.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
        return x;
    }
    if ((0, A.vv)(t)) return E.intl.string(E.t["o+e9yh"]);
    if (S > 0)
        if (!_) return E.intl.string(E.t.mOrpXG);
        else return (0, I.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: m ?? void 0 });
    return E.intl.string(E.t.S6UUc5);
}
function U(e) {
    let t = (0, i.bG)([r.default], () => r.default.locale),
        n = (0, b.fc)(e),
        [l] = (0, b.Qo)(e, n),
        s = (0, b.I3)(e),
        a = e.userStatus?.completedAt != null,
        o = null != s ? s.percentComplete : n.percentComplete;
    if (a) return E.intl.string(E.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && o > 0) {
        let e = (0, u.l9)(t, o, { roundingMode: "floor" });
        return E.intl.formatToPlainString(E.t.lVZaXD, { percent: e });
    }
    return l === h.X0.SELECT
        ? E.intl.string(E.t.EMrUHQ)
        : (0, A.g5)(e)
          ? E.intl.string(E.t.mOrpXG)
          : E.intl.string(E.t["7e5k7L"]);
}
function V(e) {
    let { quest: t, application: n, shortText: i = !1, mobileExternalLinkVariant: s } = e,
        a = l.useMemo(
            () =>
                (function (e) {
                    return (0, A.g5)(e) || (0, A.vl)(e)
                        ? 0
                        : (0, A.fE)({ quest: e })
                          ? 1
                          : (0, A.IO)(e)
                            ? 2
                            : 3 * !!(0, A.Cr)(e);
                })(t),
            [t],
        ),
        r = (0, b.fc)(t);
    switch (a) {
        case 0:
            if (t.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY)) return E.intl.string(E.t["+qoymD"]);
            if ((0, y.vA)(t)) return E.intl.string(i ? E.t.E4kW5O : E.t["Ie9++s"]);
            return E.intl.string(E.t.l7E81v);
        case 1:
            return E.intl.string(E.t.l7E81v);
        case 2:
            return E.intl.formatToPlainString(E.t.GNsKiW, { remainTime: (0, A.xm)(r) });
        case 3:
            return (0, y.vA)(t) && 1 ? E.intl.string(i ? E.t.CkUzLd : E.t["hRIVy+"]) : E.intl.string(E.t.l7E81v);
    }
}
function G(e) {
    let { quest: t, rewardCode: n } = e,
        l = (0, v.kr)({ quest: t }),
        i = n?.platform ?? h.pY.CROSS_PLATFORM,
        s = l ? (0, v.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, I.xv)(t.config),
        r = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != i ? r[i] : void 0;
}
