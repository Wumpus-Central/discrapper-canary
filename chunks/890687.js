"use strict";
n.d(t, {
    $P: () => eZ,
    BL: () => eD,
    C5: () => eY,
    Du: () => eP,
    F3: () => eG,
    FA: () => eK,
    H6: () => eW,
    I3: () => eb,
    In: () => eV,
    Iq: () => em,
    L1: () => eh,
    LS: () => eT,
    NC: () => eE,
    Nb: () => eQ,
    O9: () => eF,
    Oq: () => eg,
    Qh: () => ep,
    Qo: () => eB,
    RR: () => ek,
    S5: () => ey,
    SD: () => eA,
    UH: () => e3,
    UX: () => ex,
    Vn: () => ev,
    Wj: () => eU,
    XD: () => eJ,
    YW: () => ew,
    Yl: () => eS,
    ZP: () => eI,
    a5: () => ej,
    aC: () => eH,
    do: () => eN,
    fc: () => eC,
    j$: () => eM,
    lg: () => e2,
    mL: () => ei,
    nv: () => e0,
    oH: () => eL,
    p5: () => ez,
    pT: () => eX,
    sb: () => eq,
    zW: () => e$,
}),
    n(321073),
    n(801541);
var r,
    i,
    s,
    a = n(64700);
n(284009);
var o = n(735438),
    l = n(889137),
    u = n(323889),
    d = n(412703),
    c = n(114046),
    _ = n(440703),
    f = n(731355),
    E = n(517846),
    h = n(462887),
    p = n(311907),
    m = n(736653),
    g = n(787389),
    A = n(183636),
    I = n(429913);
n(674658);
var T = n(493740),
    S = n(236698),
    y = n(773669),
    N = n(253932),
    O = n(734057),
    R = n(962173),
    v = n(287809),
    C = n(954571),
    b = n(927813),
    D = n(975571),
    L = n(515718),
    w = n(252424),
    M = n(723702),
    P = n(927578);
n(845890), n(265704);
var U = n(178540),
    k = n(829219),
    x = n(859703),
    G = n(341915),
    V = n(245853),
    F = n(302654);
n(901882);
var B = n(579473),
    H = n(971276),
    Y = n(561844),
    W = n(590202),
    j = n(971649),
    K = n(651892),
    $ = n(710969),
    z = n(639214),
    q = n(901406),
    X = n(92246),
    Q = n(792620),
    J = n(814793),
    Z = n(753386),
    ee = n(654487),
    et = n(652215),
    en = n(788868),
    er = n(985018);
function ei() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = a.useState(!1),
        r = (0, p.yK)([x.A], () => [...x.A.quests.values()]),
        i = (0, p.yK)([x.A], () => [...x.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: o } = (0, p.cf)([x.A], () => ({
            isFetchingCurrentQuests: x.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: x.A.lastFetchedCurrentQuests,
        })),
        l = (0, H.s)();
    return (
        a.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !s
            ) {
                if ((n(!0), (0, k.N1)(), (0, M.isMac)() && "focused" !== A.A.getState())) return;
                let { enableNewRequestBehavior: t } = F.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, k.r8)(G.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: r, excludedQuests: i, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function es(e, t, n, r) {
    let i = e.id === ee.aJ,
        s = t.id === ee.aJ,
        a = i && e.userStatus?.completedAt == null;
    if (a !== (s && t.userStatus?.completedAt == null)) return a ? -1 : 1;
    let o = !(0, $.Ic)(e),
        l = e.userStatus?.claimedAt != null,
        u = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        _ = r === V.rE.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES ? 30 * b.A.Millis.MINUTE : 20 * b.A.Millis.MINUTE,
        E = e1(e, _),
        h = e1(t, _);
    if (o) {
        let { questHomeHero: i } = n,
            s = null != i && (0, J.I0)(i, e.id),
            a = null != i && (0, J.I0)(i, t.id);
        if (s !== a && (s || a)) return s ? -1 : 1;
        if (r === V.rE.RANK_BASED_ON_QUEST_TYPE) {
            let n = (0, J.pv)(e.config),
                r = (0, J.pv)(t.config),
                i = (0, Q.c1)(e),
                s = (0, Q.c1)(t);
            if (i !== s && (i || s)) return i ? -1 : 1;
            if (n !== r && (n === f.Z.VIDEO || r === f.Z.VIDEO)) return n === f.Z.VIDEO ? -1 : 1;
        }
        return E !== h && (E || h)
            ? E
                ? 1
                : -1
            : l !== u
              ? l
                  ? 1
                  : -1
              : d !== c
                ? d
                    ? -1
                    : 1
                : ef(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return l !== u ? (l ? -1 : 1) : d !== c ? (d ? -1 : 1) : ef(e.config.expiresAt, t.config.expiresAt, 0);
}
function ea(e, t, n) {
    return ef(e.config.startsAt, t.config.startsAt, 0);
}
function eo(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? ef(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? -1
          : null == r && null != i
            ? 1
            : ef(r, i, 0);
}
function el(e, t, n) {
    return ef(e.config.expiresAt, t.config.expiresAt, 1);
}
function eu(e, t) {
    switch (t) {
        case ee.Pc.VIDEO:
            return (0, Q.vv)(e);
        case ee.Pc.PLAY:
            return (0, Q.t)({ quest: e }) || (0, Q.fE)({ quest: e }) || (0, Q.vl)(e);
        default:
            return !1;
    }
}
function ed(e, t) {
    switch (t) {
        case ee.BQ.VIRTUAL_CURRENCY:
            return (0, X.ks)(e.config);
        case ee.BQ.COLLECTIBLE:
            return (0, X.tU)(e.config);
        case ee.BQ.IN_GAME:
            return (0, X.HG)(e.config) || (0, X.r7)(e.config);
        default:
            return !1;
    }
}
let ec = {},
    e_ = { questHomeHero: null };
function ef(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eE = (((r = {}).ALL = "all"), (r.CLAIMED = "claimed"), (r.PREVIEW_TOOL = "preview_tool"), r),
    eh = (((i = {}).TAB = "tab"), (i.QUEST_ID = "quest_id"), (i.SORT = "sort"), (i.FILTER = "filter"), i);
function ep(e) {
    let t,
        n,
        r,
        i,
        s,
        l,
        u,
        d,
        c,
        _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        {
            quests: f,
            excludedQuests: E,
            isFetchingCurrentQuests: h,
            hasFetched: m,
        } = ei({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        g = new Map(f.map((e) => [e.id, e])),
        A =
            ((t = (0, p.bG)([x.A], () => x.A.getQuestHomeHero())),
            (n = a.useMemo(() => ({ questHomeHero: t }), [t])),
            (r = a.useRef([])),
            (i = a.useRef(_.sortMethod)),
            (s = a.useRef(_.filters)),
            (l = a.useRef(0)),
            (u = a.useRef(n)),
            a.useMemo(() => {
                if (0 === f.length) return [];
                if (
                    r.current.length > 0 &&
                    l.current === f.length &&
                    i.current === _.sortMethod &&
                    s.current === _.filters &&
                    u.current === n
                )
                    return r.current;
                let e = (function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e_,
                        { sortMethod: i, filters: s } = n,
                        a = (0, V.fV)() ?? void 0,
                        l =
                            null == s || 0 === s.length
                                ? e
                                : (function (e, t) {
                                      if (0 === t.length) return e;
                                      let n = (0, o.groupBy)(t, "group");
                                      return e.filter((e) =>
                                          Object.entries(n).every((t) => {
                                              let n,
                                                  [r, i] = t;
                                              return (
                                                  (n = (function (e) {
                                                      switch (e) {
                                                          case "task":
                                                              return eu;
                                                          case "reward":
                                                              return ed;
                                                      }
                                                  })(r)),
                                                  0 === i.length || i.some((t) => n(e, t.filter))
                                              );
                                          }),
                                      );
                                  })(e, s),
                        u =
                            ((t = (function (e) {
                                switch (e) {
                                    case ee.kL.MOST_RECENT:
                                        return ea;
                                    case ee.kL.RECENTLY_ENROLLED:
                                        return eo;
                                    case ee.kL.EXPIRING_SOON:
                                        return el;
                                    case ee.kL.SUGGESTED:
                                    default:
                                        return es;
                                }
                            })(i)),
                            function (e, n) {
                                let i = !(0, $.Ic)(e);
                                return !(0, $.Ic)(n) !== i ? (i ? -1 : 1) : t(e, n, r, a);
                            });
                    return l.sort(u);
                })(f, _, n).map((e) => e.id);
                return (
                    (r.current = e),
                    (i.current = _.sortMethod),
                    (s.current = _.filters),
                    (l.current = f.length),
                    (u.current = n),
                    e
                );
            }, [f, _, n])),
        I =
            ((d = a.useMemo(
                () =>
                    f.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [f],
            )),
            (c = a.useRef([])),
            a.useMemo(() => {
                if (0 === d.length) return [];
                if (c.current.length > 0 && c.current.length === d.length) return c.current;
                let e = d
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? -1
                                : 1
                            : ef(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (c.current = e), e;
            }, [d])),
        T = [];
    for (let t of "all" === e ? A : I) {
        let e = g.get(t);
        null != e && T.push(e);
    }
    return { quests: T, excludedQuests: E, isFetchingCurrentQuests: h, hasFetched: m };
}
function em() {
    let e = a.useRef(!1),
        t = (0, p.yK)([x.A], () => Array.from(x.A.claimedQuests.values())),
        n = (0, p.bG)([x.A], () => x.A.isFetchingClaimedQuests);
    return (
        a.useEffect(() => {
            n || e.current || ((e.current = !0), (0, k.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eg() {
    return (0, p.bG)([v.default], () => P.Ay.canUseQuestOrbMultiplier(v.default.getCurrentUser()));
}
function eA(e) {
    let t = eT(e);
    return (0, p.bG)([v.default], () => {
        let n = (0, X.ks)(e.config),
            r = (0, X.KK)(e.config),
            i = v.default.getCurrentUser();
        return !t && n && r && (!(0, P.YE)(i, en.PremiumTypes.TIER_2) || (0, T.RM)(T.G5, i));
    }, [t, e.config]);
}
function eI(e) {
    return (0, p.bG)([x.A], () => {
        let t = x.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === _.l.VIRTUAL_CURRENCY);
        if (n?.type !== _.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: r, orbQuantity: i } = n;
        return null == r || 0 === i ? null : Math.round((r / i) * 100) / 100;
    }, [e]);
}
function eT(e) {
    return (0, p.bG)([x.A], () => null != e && x.A.isQuestExpired(e.id), [e]);
}
function eS(e, t, n) {
    let r = (0, p.bG)([O.A], () => O.A.getChannel(t?.channelId) ?? null),
        i = (0, p.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
        s = (0, p.bG)([v.default], () => v.default.getCurrentUser()?.id),
        a = (0, p.bG)([x.A], () => null != e && x.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, J.Ll)(t, r);
    return !o || !!l;
}
function ey(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, p.bG)([y.default], () => y.default.locale);
    return a.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eN(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: i } = e,
        s = (0, j.go)();
    return a.useCallback(() => {
        t.id === ee.Fw
            ? window.open(D.A.getArticleURL(et.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, q.pu)(t, { content: n, ctaContent: r, impressionId: s, sourceQuestContent: i });
    }, [t, n, r, s, i]);
}
function eO(e) {
    return (0, p.bG)([x.A], () => x.A.isProgressingOnDesktop(e.id));
}
function eR(e) {
    return a.useMemo(() => (0, Q.YL)(e), [e]);
}
function ev(e) {
    let t,
        n = eO(e),
        r = eR(e),
        i =
            ((t = (0, p.bG)([x.A], () => x.A.getOptimisticProgress(e.id, d.n.WATCH_VIDEO))),
            a.useMemo(() => (0, Z.J$)(e), [e, t]));
    return n || r || i;
}
let eC = (e) => {
    let t = a.useCallback(() => (0, Q.Yh)(e), [e]),
        [n, r] = a.useState(t()),
        i = a.useCallback(() => r(t()), [t]),
        s = ev(e);
    return (
        a.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !s
            )
                return void i();
            let t = window.setInterval(() => {
                i();
            }, +b.A.Millis.SECOND);
            return () => {
                clearInterval(t), i();
            };
        }, [e, s, i]),
        n
    );
};
function eb(e) {
    return a.useMemo(() => (0, Q.JC)(e), [e]);
}
let eD = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = ek({ quest: t }),
        s = (0, j.vU)();
    return () => {
        i
            ? (0, q.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: W.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, q.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: W.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eL(e) {
    let t = a.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, Q.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, I.A)(t);
}
function ew(e) {
    let t = (0, p.bG)([x.A], () => x.A.quests),
        n = eL(Array.from(t.values())),
        r = a.useMemo(() => {
            let n = (0, J.$e)(t, ee.zO);
            return (0, z.BM)(n, e);
        }, [e, t, n]);
    return eT(r) ? null : r;
}
function eM(e) {
    return a.useMemo(
        () => ({
            handleComplete: () => (0, k.Yb)(e),
            handleProgress: (t) => (0, k.Yb)(e, t),
            handleResetStatusClick: () => (0, k.UZ)(e),
            handleResetDismissibilityClick: () => (0, k.Gt)(e),
            handleOverrideDeliveryClick: () => (0, k.d6)(e),
            handleResetHasBeenSeenClick: () => (0, k.qV)(u.p.QUEST, [e]),
        }),
        [e],
    );
}
function eP() {
    let { fetching: e, accounts: t } = (0, p.cf)([R.A], () => ({
            fetching: R.A.isFetching(),
            accounts: R.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i,
        } = a.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === et.fg2.XBOX),
                r = e.filter((e) => e.type === et.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
}
let eU = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: i } = e,
            [s, o] = a.useState([]),
            [l, u] = a.useState(!1),
            d = (0, p.bG)([R.A], () => R.A.getAccounts()),
            _ = (0, U.O)((e) => e.clearErrorHintsByType);
        return (
            a.useEffect(() => {
                o((e) => e.filter((e) => e.type !== c._.EXPIRED_CREDENTIAL)), _(t, c._.EXPIRED_CREDENTIAL);
            }, [d, _, t]),
            {
                startConsoleQuest: a.useCallback(async () => {
                    if (l) return;
                    r?.(), u(!0);
                    let e = null;
                    try {
                        (e = await (0, k.vD)(t, n)), o(e.errorHints);
                    } finally {
                        u(!1), i?.(e?.errorHints ?? []);
                    }
                }, [l, r, i, n, t]),
                startingConsoleQuest: l,
                errorHints: s,
            }
        );
    },
    ek = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eP(),
            r = ev(t),
            i = 0 === n.length;
        return (0, Q.g5)(t) && i && !r;
    },
    ex = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eP(),
            n = e.length > 0,
            r = t.length > 0,
            i = D.A.getArticleURL(et.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = D.A.getArticleURL(et.MVz.QUEST_HOW_TO_XBOX),
            a = er.intl.format(er.t.beN4DG, { psHelpdeskArticle: i, xboxHelpdeskArticle: s }),
            o = er.intl.format(er.t.HVS7nh, { helpdeskArticle: r ? i : s });
        return { message: (n && !r) || (!n && r) ? o : a, xboxURL: s, playstationURL: i };
    };
var eG =
    (((s = {})[(s.UNACCEPTED = 0)] = "UNACCEPTED"),
    (s[(s.ACCEPTED = 1)] = "ACCEPTED"),
    (s[(s.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (s[(s.COMPLETED = 3)] = "COMPLETED"),
    (s[(s.CLAIMED = 4)] = "CLAIMED"),
    s);
function eV(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = eC(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, p.bG)([y.default], () => y.default.locale),
        { percentComplete: r } = eC(e),
        i = eb(e),
        s = null != i ? i.percentComplete : r,
        a = 100 * s,
        o = null == i || t ? (0, w.l9)(n, s, { roundingMode: "floor" }) : `${i?.progress}/${i?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eB(e, t) {
    var n;
    let [r, i] =
            ((n = e.id),
            [(0, p.bG)([x.A], () => x.A.selectedTaskPlatform(n)), a.useCallback((e) => (0, k.lx)(n, e), [n])]),
        s = a.useMemo(() => (0, q.UR)(e), [e]),
        o = s.includes(ee.fO.DESKTOP),
        u = s.includes(ee.fO.CONSOLE),
        c = eO(e),
        _ = eR(e),
        f = a.useMemo(
            () =>
                (0, l.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: d.n.PLAY_ON_DESKTOP }, () => ee.fO.DESKTOP)
                    .with({ taskType: d.n.PLAY_ACTIVITY }, () => ee.fO.DESKTOP)
                    .with({ taskType: d.n.WATCH_VIDEO }, () => ee.fO.DESKTOP)
                    .with({ taskType: d.n.WATCH_VIDEO_ON_MOBILE }, () => ee.fO.DESKTOP)
                    .with({ taskType: d.n.STREAM_ON_DESKTOP }, () => ee.fO.DESKTOP)
                    .with({ taskType: d.n.PLAY_ON_XBOX }, () => ee.fO.CONSOLE)
                    .with({ taskType: d.n.PLAY_ON_PLAYSTATION }, () => ee.fO.CONSOLE)
                    .with({ taskType: d.n.ACHIEVEMENT_IN_GAME }, () => ee.fO.DESKTOP)
                    .with({ taskType: d.n.ACHIEVEMENT_IN_ACTIVITY }, () => ee.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        E = c ? ee.fO.DESKTOP : _ ? ee.fO.CONSOLE : null;
    return [
        a.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: f, currentProgressingPlatform: E, selectedPlatform: r })
                    .with({ currentProgressingPlatform: ee.fO.CONSOLE }, () => G.X0.CONSOLE)
                    .with({ currentProgressingPlatform: ee.fO.DESKTOP }, () => G.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: ee.fO.CONSOLE }, () => G.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: ee.fO.DESKTOP }, () => G.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: ee.fO.CONSOLE,
                        },
                        () => G.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: ee.fO.DESKTOP,
                        },
                        () => G.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && o ? G.X0.SELECT : u ? G.X0.CONSOLE : G.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, o, f, E, r],
        ),
        s,
        i,
    ];
}
function eH(e) {
    let t = eb(e),
        n = eC(e),
        [r] = eB(e, n),
        i = eT(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        o = d.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        u = s && !a && !i && null == t && (o || (l && r === G.X0.DESKTOP)),
        c = (0, M.isWeb)() && u && !(0, q.W1)(e),
        _ = (0, M.isMac)() && n.taskType === d.n.STREAM_ON_DESKTOP && u,
        f = [];
    return _ && f.push(er.intl.string(er.t.MFGxFM)), c && f.push(er.intl.string(er.t.BV6xDm)), f;
}
function eY(e) {
    return (0, p.bG)([x.A], () => x.A.quests).get(e) ?? null;
}
function eW(e) {
    let { mode: t, questContent: n, sourceQuestContent: r, questId: i } = e,
        s = a.useRef(null);
    a.useEffect(() => {
        null != i &&
            s.current !== t &&
            ((0, Y.Mm)({ mode: t, prevMode: s.current, questContent: n, questId: i, sourceQuestContent: r }),
            (s.current = t));
    }, [i, n, t, r]),
        a.useEffect(() => {
            if (null != i)
                return () => {
                    (0, Y.Mm)({ mode: null, prevMode: s.current, questContent: n, questId: i, sourceQuestContent: r });
                };
        }, [i, n, r]);
}
function ej(e, t) {
    let n = (0, p.bG)([x.A], () => x.A.getQuest(e), [e]),
        r = (0, m.Ay)();
    return a.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, h.M)(r) ? et.NJ8.DARK : et.NJ8.LIGHT);
        return (0, B.tW)(n, B.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function eK(e) {
    let t = (0, X.mq)(e),
        n = (0, X.k5)(e),
        r = (0, X.$5)(e),
        i = (0, X.Y7)(e),
        s = (0, X.JX)(e),
        a = (0, p.bG)([v.default], () => v.default.getCurrentUser()),
        o = (0, P.TW)(a, en.PremiumTypes.TIER_2);
    if (null == n) return er.intl.formatToPlainString(er.t.l9uXL8, { decorationName: t });
    let l = er.intl.formatToPlainString(er.t.o97tNn, { rewardName: t }),
        u = er.intl.formatToPlainString(er.t.PkyRZo, { rewardName: t, expirationDate: r }),
        d = er.intl.formatToPlainString(er.t.ie4YK0, { rewardName: t, duration: n }),
        c = er.intl.formatToPlainString(er.t.yCpc0U, { duration: n, rewardName: t });
    return s
        ? i
            ? o
                ? l
                : d
            : o
              ? u
              : c
        : er.intl.formatToPlainString(er.t.tTlItm, { duration: n, decorationName: t });
}
function e$(e) {
    let t = (0, Q.TP)(e);
    return { launchInGameActivity: (0, g.A)({ applicationId: t }) };
}
let ez = () => (0, p.yK)([x.A], () => [...x.A.quests.values()]).some((e) => e.preview),
    eq = (e) => {
        let t = e?.userStatus != null && (0, $.gO)(e.userStatus, G.uF.ACTIVITY_PANEL),
            n = eT(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, p.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    eX = () => {
        let e = (0, p.yK)([x.A], () => [...x.A.quests.values()]);
        return a.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eQ() {
    let e = ee.pc;
    return a.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, K.fx)(t), options: n };
            }),
        [e],
    );
}
function eJ() {
    return a.useMemo(() => Object.keys(ee.kL).map((e) => ({ label: (0, K.Js)(ee.kL[e]), value: ee.kL[e] })), []);
}
function eZ(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: r } = e,
        i = a.useRef(null),
        s = a.useRef(null);
    a.useEffect(() => {
        C.default.track(et.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: i.current }),
            (i.current = t);
    }, [t]),
        a.useEffect(() => {
            let e = n.map((e) => e.filter);
            C.default.track(et.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: s.current ?? [],
                num_quests_visible: r,
            }),
                (s.current = e);
        }, [n, r]);
}
let e0 = (e) => a.useMemo(() => v.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    e1 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e2() {
    let { enabled: e } = V.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [t, n] = a.useState(!0),
        [r, i] = a.useState(!0),
        [s, o] = a.useState(!1),
        [l, u] = a.useState(!1),
        { isFetching: d, questHomeHero: c } = (0, p.cf)([x.A], () => ({
            isFetching: x.A.isFetchingQuestHomeHero(),
            questHomeHero: x.A.getQuestHomeHero(),
        }));
    return (
        a.useEffect(() => {
            !(async function () {
                try {
                    e ? await (0, k.Am)() : await (0, k.Yf)();
                } catch (e) {
                    i(!1), o(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        a.useEffect(() => {
            !(async function () {
                try {
                    if (null == c) return;
                    let e = [c.heroImage, c.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(L.NN));
                } catch (e) {
                    u(!0);
                } finally {
                    i(!1);
                }
            })();
        }, [c]),
        { questHomeHero: s || l ? null : c, isLoading: t || d || r }
    );
}
function e3(e) {
    let t = N.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return a.useCallback(() => {
        if (n) return;
        let r = t ? E.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : E.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, S.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
