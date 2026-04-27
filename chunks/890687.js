n.d(t, {
    $P: () => ez,
    C5: () => eW,
    Du: () => eG,
    F3: () => ew,
    FA: () => eK,
    H6: () => eY,
    I3: () => eU,
    In: () => eF,
    Iq: () => eS,
    L1: () => eT,
    LS: () => ef,
    NC: () => eI,
    Nb: () => eX,
    O9: () => eV,
    Oq: () => eN,
    Qh: () => eA,
    Qo: () => eH,
    RR: () => ev,
    S5: () => ep,
    SD: () => eO,
    UH: () => e3,
    UX: () => eB,
    Vn: () => eh,
    Wj: () => ey,
    XD: () => eZ,
    YW: () => eP,
    Yl: () => eC,
    ZP: () => eR,
    a5: () => ex,
    aC: () => ek,
    do: () => eD,
    fc: () => eg,
    j$: () => eM,
    lg: () => e2,
    mL: () => ea,
    nv: () => eJ,
    oH: () => eb,
    p5: () => e$,
    pT: () => eq,
    sb: () => eQ,
    t9: () => e1,
    zW: () => ej,
}),
    n(321073),
    n(801541);
var i,
    a,
    r,
    _ = n(64700);
n(284009);
var s = n(735438),
    l = n(889137),
    o = n(323889),
    E = n(412703),
    d = n(114046),
    c = n(440703),
    u = n(731355),
    I = n(517846),
    T = n(462887),
    A = n(17928),
    S = n(736653),
    N = n(787389),
    O = n(183636),
    R = n(429913);
n(674658);
var f = n(493740),
    C = n(27620),
    p = n(773669),
    D = n(253932),
    L = n(734057),
    m = n(30370),
    h = n(287809),
    g = n(954571),
    U = n(927813),
    b = n(403362),
    P = n(975571),
    M = n(515718),
    G = n(252424),
    y = n(723702),
    v = n(927578);
n(763148), n(265704);
var B = n(178540),
    w = n(829219),
    F = n(859703),
    V = n(507107),
    H = n(245853),
    k = n(302654);
n(901882);
var W = n(859387),
    Y = n(971276),
    x = n(561844);
n(590202);
var K = n(971649),
    j = n(651892),
    $ = n(710969),
    Q = n(639214),
    q = n(901406),
    X = n(801365),
    Z = n(792620),
    z = n(814793),
    J = n(753386),
    ee = n(654487),
    et = n(652215),
    en = n(788868),
    ei = n(985018);
function ea() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = _.useState(!1),
        i = (0, A.yK)([F.A], () => [...F.A.quests.values()]),
        a = (0, A.yK)([F.A], () => [...F.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: r, lastFetchedCurrentQuests: s } = (0, A.cf)([F.A], () => ({
            isFetchingCurrentQuests: F.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: F.A.lastFetchedCurrentQuests,
        })),
        l = (0, Y.s)();
    return (
        _.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !r
            ) {
                if ((n(!0), (0, w.N1)(), (0, y.isMac)() && "focused" !== O.A.getState())) return;
                let { enableNewRequestBehavior: t } = k.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, w.r8)(V.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, r, s, e.callerSource]),
        { quests: i, excludedQuests: a, isFetchingCurrentQuests: r, hasFetched: t }
    );
}
function er(e, t, n, i) {
    let a = e.id === ee.aJ,
        r = t.id === ee.aJ,
        _ = a && e.userStatus?.completedAt == null;
    if (_ !== (r && t.userStatus?.completedAt == null)) return _ ? -1 : 1;
    let s = !(0, $.Ic)(e),
        l = e.userStatus?.claimedAt != null,
        o = t.userStatus?.claimedAt != null,
        E = e.userStatus?.enrolledAt != null,
        d = t.userStatus?.enrolledAt != null,
        c = i === H.rE.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES ? 30 * U.A.Millis.MINUTE : 20 * U.A.Millis.MINUTE,
        I = e0(e, c),
        T = e0(t, c);
    if (s) {
        let { questHomeHero: a } = n,
            r = null != a && (0, z.I0)(a, e.id),
            _ = null != a && (0, z.I0)(a, t.id);
        if (r || _) {
            if (r && _) {
                let n = a?.questIds;
                if (null != n) return n.indexOf(e.id) - n.indexOf(t.id);
            }
            return r ? -1 : 1;
        }
        if (i === H.rE.RANK_BASED_ON_QUEST_TYPE) {
            let n = (0, z.pv)(e.config),
                i = (0, z.pv)(t.config),
                a = (0, Z.c1)(e),
                r = (0, Z.c1)(t);
            if (a !== r && (a || r)) return a ? -1 : 1;
            if (n !== i && (n === u.Z.VIDEO || i === u.Z.VIDEO)) return n === u.Z.VIDEO ? -1 : 1;
        }
        return I !== T && (I || T)
            ? I
                ? 1
                : -1
            : l !== o
              ? l
                  ? 1
                  : -1
              : E !== d
                ? E
                    ? -1
                    : 1
                : eu(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return l !== o ? (l ? -1 : 1) : E !== d ? (E ? -1 : 1) : eu(e.config.expiresAt, t.config.expiresAt, 0);
}
function e_(e, t, n) {
    return eu(e.config.startsAt, t.config.startsAt, 0);
}
function es(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        a = t.userStatus?.enrolledAt;
    return null == i && null == a
        ? eu(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? -1
          : null == i && null != a
            ? 1
            : eu(i, a, 0);
}
function el(e, t, n) {
    return eu(e.config.expiresAt, t.config.expiresAt, 1);
}
function eo(e, t) {
    switch (t) {
        case ee.Pc.VIDEO:
            return (0, Z.vv)(e);
        case ee.Pc.PLAY:
            return (0, Z.t)({ quest: e }) || (0, Z.fE)({ quest: e }) || (0, Z.vl)(e);
        default:
            return !1;
    }
}
function eE(e, t) {
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
let ed = {},
    ec = { questHomeHero: null };
function eu(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eI = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    eT = (((a = {}).TAB = "tab"), (a.QUEST_ID = "quest_id"), (a.SORT = "sort"), (a.FILTER = "filter"), a);
function eA(e) {
    let t,
        n,
        i,
        a,
        r,
        l,
        o,
        E,
        d,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed,
        {
            quests: u,
            excludedQuests: I,
            isFetchingCurrentQuests: T,
            hasFetched: S,
        } = ea({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        N = new Map(u.map((e) => [e.id, e])),
        O =
            ((t = (0, A.bG)([F.A], () => F.A.getQuestHomeHero())),
            (n = _.useMemo(() => ({ questHomeHero: t }), [t])),
            (i = _.useRef([])),
            (a = _.useRef(c.sortMethod)),
            (r = _.useRef(c.filters)),
            (l = _.useRef(0)),
            (o = _.useRef(n)),
            _.useMemo(() => {
                if (0 === u.length) return [];
                if (
                    i.current.length > 0 &&
                    l.current === u.length &&
                    a.current === c.sortMethod &&
                    r.current === c.filters &&
                    o.current === n
                )
                    return i.current;
                let e = (function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec,
                        { sortMethod: a, filters: r } = n,
                        _ = (0, H.fV)() ?? void 0,
                        l =
                            null == r || 0 === r.length
                                ? e
                                : (function (e, t) {
                                      if (0 === t.length) return e;
                                      let n = (0, s.groupBy)(t, "group");
                                      return e.filter((e) =>
                                          Object.entries(n).every((t) => {
                                              let n,
                                                  [i, a] = t;
                                              return (
                                                  (n = (function (e) {
                                                      switch (e) {
                                                          case "task":
                                                              return eo;
                                                          case "reward":
                                                              return eE;
                                                      }
                                                  })(i)),
                                                  0 === a.length || a.some((t) => n(e, t.filter))
                                              );
                                          }),
                                      );
                                  })(e, r),
                        o =
                            ((t = (function (e) {
                                switch (e) {
                                    case ee.kL.MOST_RECENT:
                                        return e_;
                                    case ee.kL.RECENTLY_ENROLLED:
                                        return es;
                                    case ee.kL.EXPIRING_SOON:
                                        return el;
                                    case ee.kL.SUGGESTED:
                                    default:
                                        return er;
                                }
                            })(a)),
                            function (e, n) {
                                let a = !(0, $.Ic)(e);
                                return !(0, $.Ic)(n) !== a ? (a ? -1 : 1) : t(e, n, i, _);
                            });
                    return l.sort(o);
                })(u, c, n).map((e) => e.id);
                return (
                    (i.current = e),
                    (a.current = c.sortMethod),
                    (r.current = c.filters),
                    (l.current = u.length),
                    (o.current = n),
                    e
                );
            }, [u, c, n])),
        R =
            ((E = _.useMemo(
                () =>
                    u.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [u],
            )),
            (d = _.useRef([])),
            _.useMemo(() => {
                if (0 === E.length) return [];
                if (d.current.length > 0 && d.current.length === E.length) return d.current;
                let e = E.sort((e, t) => {
                    let n = e.userStatus?.claimedAt == null;
                    return n !== (t.userStatus?.claimedAt == null)
                        ? n
                            ? -1
                            : 1
                        : eu(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                }).map((e) => e.id);
                return (d.current = e), e;
            }, [E])),
        f = [];
    for (let t of "all" === e ? O : R) {
        let e = N.get(t);
        null != e && f.push(e);
    }
    return { quests: f, excludedQuests: I, isFetchingCurrentQuests: T, hasFetched: S };
}
function eS() {
    let e = _.useRef(!1),
        t = (0, A.yK)([F.A], () => Array.from(F.A.claimedQuests.values())),
        n = (0, A.bG)([F.A], () => F.A.isFetchingClaimedQuests);
    return (
        _.useEffect(() => {
            n || e.current || ((e.current = !0), (0, w.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eN() {
    return (0, A.bG)([h.default], () => v.Ay.canUseQuestOrbMultiplier(h.default.getCurrentUser()));
}
function eO(e) {
    let t = ef(e);
    return (0, A.bG)([h.default], () => {
        let n = (0, X.ks)(e.config),
            i = (0, X.KK)(e.config),
            a = h.default.getCurrentUser();
        return !t && n && i && (!(0, v.YE)(a, en.PremiumTypes.TIER_2) || (0, f.RM)(f.G5, a));
    }, [t, e.config]);
}
function eR(e) {
    return (0, A.bG)([F.A], () => {
        let t = F.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === c.l.VIRTUAL_CURRENCY);
        if (n?.type !== c.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: i, orbQuantity: a } = n;
        return null == i || 0 === a ? null : Math.round((i / a) * 100) / 100;
    }, [e]);
}
function ef(e) {
    return (0, A.bG)([F.A], () => null != e && F.A.isQuestExpired(e.id), [e]);
}
function eC(e, t, n) {
    let i = (0, A.bG)([L.A], () => L.A.getChannel(t?.channelId) ?? null),
        a = (0, A.bG)([F.A], () => null != F.A.questEnrollmentBlockedUntil, []),
        r = (0, A.bG)([h.default], () => h.default.getCurrentUser()?.id),
        _ = (0, A.bG)([F.A], () => null != e && F.A.isQuestExpired(e.id), [e]);
    if (null == e || a || _ || r === n) return !1;
    let s = e.userStatus?.claimedAt != null,
        l = (0, z.Ll)(t, i);
    return !s || !!l;
}
function ep(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, A.bG)([p.default], () => p.default.locale);
    return _.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eD(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: a } = e,
        r = (0, K.go)();
    return _.useCallback(() => {
        t.id === ee.Fw
            ? window.open(P.A.getArticleURL(et.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, q.pu)(t, { content: n, ctaContent: i, impressionId: r, sourceQuestContent: a });
    }, [t, n, i, r, a]);
}
function eL(e) {
    return (0, A.bG)([F.A], () => F.A.isProgressingOnDesktop(e.id));
}
function em(e) {
    return _.useMemo(() => (0, Z.YL)(e), [e]);
}
function eh(e) {
    let t,
        n = eL(e),
        i = em(e),
        a =
            ((t = (0, A.bG)([F.A], () => F.A.getOptimisticProgress(e.id, E.n.WATCH_VIDEO))),
            _.useMemo(() => (0, J.J$)(e), [e, t]));
    return n || i || a;
}
let eg = (e) => {
    let t = _.useCallback(() => (0, Z.Yh)(e), [e]),
        [n, i] = _.useState(t()),
        a = _.useCallback(() => i(t()), [t]),
        r = eh(e);
    return (
        _.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !r
            )
                return void a();
            let t = window.setInterval(() => {
                a();
            }, +U.A.Millis.SECOND);
            return () => {
                clearInterval(t), a();
            };
        }, [e, r, a]),
        n
    );
};
function eU(e) {
    return _.useMemo(() => (0, Z.JC)(e), [e]);
}
function eb(e) {
    let t = _.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, Z.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, R.A)(t);
}
function eP(e) {
    let t = (0, A.bG)([F.A], () => F.A.quests),
        n = eb(Array.from(t.values())),
        i = _.useMemo(() => {
            let n = (0, z.$e)(t, ee.zO);
            return (0, Q.BM)(n, e);
        }, [e, t, n]);
    return ef(i) ? null : i;
}
function eM(e) {
    return _.useMemo(
        () => ({
            handleComplete: () => (0, w.Yb)(e),
            handleProgress: (t) => (0, w.Yb)(e, t),
            handleResetStatusClick: () => (0, w.UZ)(e),
            handleResetDismissibilityClick: () => (0, w.Gt)(e),
            handleOverrideDeliveryClick: () => (0, w.d6)(e),
            handleResetHasBeenSeenClick: () => (0, w.qV)(o.p.QUEST, [e]),
        }),
        [e],
    );
}
function eG() {
    let { fetching: e, accounts: t } = (0, A.cf)([m.A], () => ({
            fetching: m.A.isFetching(),
            accounts: m.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = _.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === et.fg2.XBOX),
                i = e.filter((e) => e.type === et.fg2.PLAYSTATION),
                a = n.concat(i);
            return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: a };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: a };
}
let ey = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [r, s] = _.useState([]),
            [l, o] = _.useState(!1),
            E = (0, A.bG)([m.A], () => m.A.getAccounts()),
            c = (0, B.O)((e) => e.clearErrorHintsByType);
        return (
            _.useEffect(() => {
                s((e) => e.filter((e) => e.type !== d._.EXPIRED_CREDENTIAL)), c(t, d._.EXPIRED_CREDENTIAL);
            }, [E, c, t]),
            {
                startConsoleQuest: _.useCallback(async () => {
                    if (l) return;
                    i?.(), o(!0);
                    let e = null;
                    try {
                        (e = await (0, w.vD)(t, n)), s(e.errorHints);
                    } finally {
                        o(!1), a?.(e?.errorHints ?? []);
                    }
                }, [l, i, a, n, t]),
                startingConsoleQuest: l,
                errorHints: r,
            }
        );
    },
    ev = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eG(),
            i = eh(t),
            a = 0 === n.length;
        return (0, Z.g5)(t) && a && !i;
    },
    eB = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eG(),
            n = e.length > 0,
            i = t.length > 0,
            a = P.A.getArticleURL(et.MVz.QUEST_HOW_TO_PLAYSTATION),
            r = P.A.getArticleURL(et.MVz.QUEST_HOW_TO_XBOX),
            _ = ei.intl.format(ei.t.beN4DG, { psHelpdeskArticle: a, xboxHelpdeskArticle: r }),
            s = ei.intl.format(ei.t.HVS7nh, { helpdeskArticle: i ? a : r });
        return { message: (n && !i) || (!n && i) ? s : _, xboxURL: r, playstationURL: a };
    };
var ew =
    (((r = {})[(r.UNACCEPTED = 0)] = "UNACCEPTED"),
    (r[(r.ACCEPTED = 1)] = "ACCEPTED"),
    (r[(r.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (r[(r.COMPLETED = 3)] = "COMPLETED"),
    (r[(r.CLAIMED = 4)] = "CLAIMED"),
    r);
function eF(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        a = eg(e).percentComplete > 0;
    return i ? 4 : n ? 3 : a && t ? 2 : 1 * !!t;
}
function eV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, A.bG)([p.default], () => p.default.locale),
        { percentComplete: i } = eg(e),
        a = eU(e),
        r = null != a ? a.percentComplete : i,
        _ = 100 * r,
        s = null == a || t ? (0, G.l9)(n, r, { roundingMode: "floor" }) : `${a?.progress}/${a?.target}`;
    return { completedRatio: r, percentComplete: _, completedRatioDisplay: s };
}
function eH(e, t) {
    var n;
    let [i, a] =
            ((n = e.id),
            [(0, A.bG)([F.A], () => F.A.selectedTaskPlatform(n)), _.useCallback((e) => (0, w.lx)(n, e), [n])]),
        r = _.useMemo(() => (0, q.UR)(e), [e]),
        s = r.includes(ee.fO.DESKTOP),
        o = r.includes(ee.fO.CONSOLE),
        d = eL(e),
        c = em(e),
        u = _.useMemo(
            () =>
                (0, l.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: E.n.PLAY_ON_DESKTOP }, () => ee.fO.DESKTOP)
                    .with({ taskType: E.n.PLAY_ACTIVITY }, () => ee.fO.DESKTOP)
                    .with({ taskType: E.n.WATCH_VIDEO }, () => ee.fO.DESKTOP)
                    .with({ taskType: E.n.WATCH_VIDEO_ON_MOBILE }, () => ee.fO.DESKTOP)
                    .with({ taskType: E.n.STREAM_ON_DESKTOP }, () => ee.fO.DESKTOP)
                    .with({ taskType: E.n.PLAY_ON_XBOX }, () => ee.fO.CONSOLE)
                    .with({ taskType: E.n.PLAY_ON_PLAYSTATION }, () => ee.fO.CONSOLE)
                    .with({ taskType: E.n.ACHIEVEMENT_IN_GAME }, () => ee.fO.DESKTOP)
                    .with({ taskType: E.n.ACHIEVEMENT_IN_ACTIVITY }, () => ee.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        I = d ? ee.fO.DESKTOP : c ? ee.fO.CONSOLE : null;
    return [
        _.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: u, currentProgressingPlatform: I, selectedPlatform: i })
                    .with({ currentProgressingPlatform: ee.fO.CONSOLE }, () => V.X0.CONSOLE)
                    .with({ currentProgressingPlatform: ee.fO.DESKTOP }, () => V.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: ee.fO.CONSOLE }, () => V.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: ee.fO.DESKTOP }, () => V.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: ee.fO.CONSOLE,
                        },
                        () => V.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: ee.fO.DESKTOP,
                        },
                        () => V.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (o && s ? V.X0.SELECT : o ? V.X0.CONSOLE : V.X0.DESKTOP),
                    )
                    .exhaustive(),
            [o, s, u, I, i],
        ),
        r,
        a,
    ];
}
function ek(e) {
    let t = eU(e),
        n = eg(e),
        [i] = eH(e, n),
        a = ef(e),
        r = e.userStatus?.enrolledAt != null,
        _ = e.userStatus?.completedAt != null,
        s = E.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        o = r && !_ && !a && null == t && (s || (l && i === V.X0.DESKTOP)),
        d = (0, y.isWeb)() && o && !(0, q.W1)(e),
        c = (0, y.isMac)() && n.taskType === E.n.STREAM_ON_DESKTOP && o,
        u = [];
    return c && u.push(ei.intl.string(ei.t.MFGxFM)), d && u.push(ei.intl.string(ei.t.BV6xDm)), u;
}
function eW(e) {
    return (0, A.bG)([F.A], () => F.A.quests).get(e) ?? null;
}
function eY(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        r = _.useRef(null);
    _.useEffect(() => {
        null != a &&
            r.current !== t &&
            ((0, x.Mm)({ mode: t, prevMode: r.current, questContent: n, questId: a, sourceQuestContent: i }),
            (r.current = t));
    }, [a, n, t, i]),
        _.useEffect(() => {
            if (null != a)
                return () => {
                    (0, x.Mm)({ mode: null, prevMode: r.current, questContent: n, questId: a, sourceQuestContent: i });
                };
        }, [a, n, i]);
}
function ex(e, t) {
    let n = (0, A.bG)([F.A], () => F.A.getQuest(e), [e]),
        i = (0, S.Ay)();
    return _.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, T.M)(i) ? et.NJ8.DARK : et.NJ8.LIGHT);
        return (0, W.tW)(n, W.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eK(e) {
    let t = (0, X.mq)(e),
        n = (0, X.k5)(e),
        i = (0, X.$5)(e),
        a = (0, X.Y7)(e),
        r = (0, X.JX)(e),
        _ = (0, A.bG)([h.default], () => h.default.getCurrentUser()),
        s = (0, v.TW)(_, en.PremiumTypes.TIER_2);
    if (null == n) return ei.intl.formatToPlainString(ei.t.l9uXL8, { decorationName: t });
    let l = ei.intl.formatToPlainString(ei.t.o97tNn, { rewardName: t }),
        o = ei.intl.formatToPlainString(ei.t.PkyRZo, { rewardName: t, expirationDate: i }),
        E = ei.intl.formatToPlainString(ei.t.ie4YK0, { rewardName: t, duration: n }),
        d = ei.intl.formatToPlainString(ei.t.yCpc0U, { duration: n, rewardName: t });
    return r
        ? a
            ? s
                ? l
                : E
            : s
              ? o
              : d
        : ei.intl.formatToPlainString(ei.t.tTlItm, { duration: n, decorationName: t });
}
function ej(e) {
    let t = (0, Z.TP)(e);
    return { launchInGameActivity: (0, N.A)({ applicationId: t }) };
}
let e$ = () => (0, A.yK)([F.A], () => [...F.A.quests.values()]).some((e) => e.preview),
    eQ = (e) => {
        let t = e?.userStatus != null && (0, $.gO)(e.userStatus, V.uF.ACTIVITY_PANEL),
            n = ef(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            a = (0, A.bG)([F.A], () => null != F.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !a;
    },
    eq = () => {
        let e = (0, A.yK)([F.A], () => [...F.A.quests.values()]);
        return _.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eX() {
    let e = ee.pc;
    return _.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, j.fx)(t), options: n };
            }),
        [e],
    );
}
function eZ() {
    return _.useMemo(() => Object.keys(ee.kL).map((e) => ({ label: (0, j.Js)(ee.kL[e]), value: ee.kL[e] })), []);
}
function ez(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = _.useRef(null),
        r = _.useRef(null);
    _.useEffect(() => {
        g.default.track(et.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: a.current }),
            (a.current = t);
    }, [t]),
        _.useEffect(() => {
            let e = n.map((e) => e.filter);
            g.default.track(et.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: r.current ?? [],
                num_quests_visible: i,
            }),
                (r.current = e);
        }, [n, i]);
}
let eJ = (e) => _.useMemo(() => h.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    e0 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e1(e) {
    let t = (0, A.bG)([F.A], () => F.A.quests);
    return _.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(b.Vq)
            .filter((e) => !(0, $.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function e2() {
    let { enabled: e } = H.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [t, n] = _.useState(!0),
        [i, a] = _.useState(!0),
        [r, s] = _.useState(!1),
        [l, o] = _.useState(!1),
        { isFetching: E, questHomeHero: d } = (0, A.cf)([F.A], () => ({
            isFetching: F.A.isFetchingQuestHomeHero(),
            questHomeHero: F.A.getQuestHomeHero(),
        }));
    return (
        _.useEffect(() => {
            !(async function () {
                try {
                    e ? await (0, w.Am)() : await (0, w.Yf)();
                } catch (e) {
                    a(!1), s(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        _.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    let e = [d.heroImage, d.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(M.NN));
                } catch (e) {
                    o(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [d]),
        { questHomeHero: r || l ? null : d, isLoading: t || E || i }
    );
}
function e3(e) {
    let t = D.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return _.useCallback(() => {
        if (n) return;
        let i = t ? I.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : I.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, C.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
