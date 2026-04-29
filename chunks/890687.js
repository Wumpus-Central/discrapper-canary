n.d(t, {
    $P: () => ez,
    C5: () => ek,
    Du: () => eM,
    F3: () => eB,
    FA: () => eY,
    H6: () => ej,
    I3: () => eg,
    In: () => ew,
    Iq: () => eA,
    L1: () => eI,
    LS: () => ef,
    NC: () => eu,
    Nb: () => eq,
    O9: () => eF,
    Oq: () => eS,
    Qh: () => eT,
    Qo: () => eV,
    RR: () => ey,
    S5: () => eC,
    SD: () => eN,
    UH: () => e2,
    UX: () => ev,
    Vn: () => em,
    Wj: () => eG,
    XD: () => eX,
    YW: () => eU,
    Yl: () => eR,
    ZP: () => eO,
    a5: () => eW,
    aC: () => eH,
    do: () => eD,
    fc: () => eh,
    j$: () => eP,
    lg: () => e1,
    mL: () => ei,
    nv: () => eZ,
    oH: () => eb,
    p5: () => eK,
    pT: () => eQ,
    sb: () => e$,
    t9: () => e0,
    zW: () => ex,
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
    c = n(440703);
n(731355);
var u = n(517846),
    I = n(462887),
    T = n(17928),
    A = n(736653),
    S = n(787389),
    N = n(183636),
    O = n(429913);
n(674658);
var f = n(493740),
    R = n(27620),
    C = n(773669),
    D = n(253932),
    L = n(734057),
    p = n(30370),
    m = n(287809),
    h = n(954571),
    g = n(927813),
    b = n(403362),
    U = n(975571),
    P = n(515718),
    M = n(252424),
    G = n(723702),
    y = n(927578);
n(763148), n(265704);
var v = n(178540),
    B = n(829219),
    w = n(859703),
    F = n(507107),
    V = n(245853),
    H = n(302654);
n(901882);
var k = n(859387),
    j = n(971276),
    W = n(561844);
n(590202);
var Y = n(971649),
    x = n(651892),
    K = n(710969),
    $ = n(639214),
    Q = n(901406),
    q = n(801365),
    X = n(792620),
    z = n(814793),
    Z = n(753386),
    J = n(654487),
    ee = n(652215),
    et = n(788868),
    en = n(985018);
function ei() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = _.useState(!1),
        i = (0, T.yK)([w.A], () => [...w.A.quests.values()]),
        a = (0, T.yK)([w.A], () => [...w.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: r, lastFetchedCurrentQuests: s } = (0, T.cf)([w.A], () => ({
            isFetchingCurrentQuests: w.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: w.A.lastFetchedCurrentQuests,
        })),
        l = (0, j.s)();
    return (
        _.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !r
            ) {
                if ((n(!0), (0, B.N1)(), (0, G.isMac)() && "focused" !== N.A.getState())) return;
                let { enableNewRequestBehavior: t } = H.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, B.r8)(F.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, r, s, e.callerSource]),
        { quests: i, excludedQuests: a, isFetchingCurrentQuests: r, hasFetched: t }
    );
}
function ea(e, t, n) {
    let i = e.id === J.aJ,
        a = t.id === J.aJ,
        r = i && e.userStatus?.completedAt == null;
    if (r !== (a && t.userStatus?.completedAt == null)) return r ? -1 : 1;
    let _ = !(0, K.Ic)(e),
        s = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        o = e.userStatus?.enrolledAt != null,
        E = t.userStatus?.enrolledAt != null,
        d = 20 * g.A.Millis.MINUTE,
        c = eJ(e, d),
        u = eJ(t, d);
    if (_) {
        let { questHomeHero: i } = n,
            a = null != i && (0, z.I0)(i, e.id),
            r = null != i && (0, z.I0)(i, t.id);
        if (a || r) {
            if (a && r) {
                let n = i?.questIds;
                if (null != n) return n.indexOf(e.id) - n.indexOf(t.id);
            }
            return a ? -1 : 1;
        }
        return c !== u && (c || u)
            ? c
                ? 1
                : -1
            : s !== l
              ? s
                  ? 1
                  : -1
              : o !== E
                ? o
                    ? -1
                    : 1
                : ec(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return s !== l ? (s ? -1 : 1) : o !== E ? (o ? -1 : 1) : ec(e.config.expiresAt, t.config.expiresAt, 0);
}
function er(e, t, n) {
    return ec(e.config.startsAt, t.config.startsAt, 0);
}
function e_(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        a = t.userStatus?.enrolledAt;
    return null == i && null == a
        ? ec(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? -1
          : null == i && null != a
            ? 1
            : ec(i, a, 0);
}
function es(e, t, n) {
    return ec(e.config.expiresAt, t.config.expiresAt, 1);
}
function el(e, t) {
    switch (t) {
        case J.Pc.VIDEO:
            return (0, X.vv)(e);
        case J.Pc.PLAY:
            return (0, X.t)({ quest: e }) || (0, X.fE)({ quest: e }) || (0, X.vl)(e);
        default:
            return !1;
    }
}
function eo(e, t) {
    switch (t) {
        case J.BQ.VIRTUAL_CURRENCY:
            return (0, q.ks)(e.config);
        case J.BQ.COLLECTIBLE:
            return (0, q.tU)(e.config);
        case J.BQ.IN_GAME:
            return (0, q.HG)(e.config) || (0, q.r7)(e.config);
        default:
            return !1;
    }
}
let eE = {},
    ed = { questHomeHero: null };
function ec(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eu = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    eI = (((a = {}).TAB = "tab"), (a.QUEST_ID = "quest_id"), (a.SORT = "sort"), (a.FILTER = "filter"), a);
function eT(e) {
    let t,
        n,
        i,
        a,
        r,
        l,
        o,
        E,
        d,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE,
        {
            quests: u,
            excludedQuests: I,
            isFetchingCurrentQuests: A,
            hasFetched: S,
        } = ei({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        N = new Map(u.map((e) => [e.id, e])),
        O =
            ((t = (0, T.bG)([w.A], () => w.A.getQuestHomeHero())),
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
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed,
                        { sortMethod: a, filters: r } = n,
                        _ =
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
                                                              return el;
                                                          case "reward":
                                                              return eo;
                                                      }
                                                  })(i)),
                                                  0 === a.length || a.some((t) => n(e, t.filter))
                                              );
                                          }),
                                      );
                                  })(e, r),
                        l =
                            ((t = (function (e) {
                                switch (e) {
                                    case J.kL.MOST_RECENT:
                                        return er;
                                    case J.kL.RECENTLY_ENROLLED:
                                        return e_;
                                    case J.kL.EXPIRING_SOON:
                                        return es;
                                    case J.kL.SUGGESTED:
                                    default:
                                        return ea;
                                }
                            })(a)),
                            function (e, n) {
                                let a = !(0, K.Ic)(e);
                                return !(0, K.Ic)(n) !== a ? (a ? -1 : 1) : t(e, n, i);
                            });
                    return _.sort(l);
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
        f =
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
                        : ec(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                }).map((e) => e.id);
                return (d.current = e), e;
            }, [E])),
        R = [];
    for (let t of "all" === e ? O : f) {
        let e = N.get(t);
        null != e && R.push(e);
    }
    return { quests: R, excludedQuests: I, isFetchingCurrentQuests: A, hasFetched: S };
}
function eA() {
    let e = _.useRef(!1),
        t = (0, T.yK)([w.A], () => Array.from(w.A.claimedQuests.values())),
        n = (0, T.bG)([w.A], () => w.A.isFetchingClaimedQuests);
    return (
        _.useEffect(() => {
            n || e.current || ((e.current = !0), (0, B.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eS() {
    return (0, T.bG)([m.default], () => y.Ay.canUseQuestOrbMultiplier(m.default.getCurrentUser()));
}
function eN(e) {
    let t = ef(e);
    return (0, T.bG)([m.default], () => {
        let n = (0, q.ks)(e.config),
            i = (0, q.KK)(e.config),
            a = m.default.getCurrentUser();
        return !t && n && i && (!(0, y.YE)(a, et.PremiumTypes.TIER_2) || (0, f.RM)(f.G5, a));
    }, [t, e.config]);
}
function eO(e) {
    return (0, T.bG)([w.A], () => {
        let t = w.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === c.l.VIRTUAL_CURRENCY);
        if (n?.type !== c.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: i, orbQuantity: a } = n;
        return null == i || 0 === a ? null : Math.round((i / a) * 100) / 100;
    }, [e]);
}
function ef(e) {
    return (0, T.bG)([w.A], () => null != e && w.A.isQuestExpired(e.id), [e]);
}
function eR(e, t, n) {
    let i = (0, T.bG)([L.A], () => L.A.getChannel(t?.channelId) ?? null),
        a = (0, T.bG)([w.A], () => null != w.A.questEnrollmentBlockedUntil, []),
        r = (0, T.bG)([m.default], () => m.default.getCurrentUser()?.id),
        _ = (0, T.bG)([w.A], () => null != e && w.A.isQuestExpired(e.id), [e]);
    if (null == e || a || _ || r === n) return !1;
    let s = e.userStatus?.claimedAt != null,
        l = (0, z.Ll)(t, i);
    return !s || !!l;
}
function eC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, T.bG)([C.default], () => C.default.locale);
    return _.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eD(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: a } = e,
        r = (0, Y.go)();
    return _.useCallback(() => {
        t.id === J.Fw
            ? window.open(U.A.getArticleURL(ee.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, Q.pu)(t, { content: n, ctaContent: i, impressionId: r, sourceQuestContent: a });
    }, [t, n, i, r, a]);
}
function eL(e) {
    return (0, T.bG)([w.A], () => w.A.isProgressingOnDesktop(e.id));
}
function ep(e) {
    return _.useMemo(() => (0, X.YL)(e), [e]);
}
function em(e) {
    let t,
        n = eL(e),
        i = ep(e),
        a =
            ((t = (0, T.bG)([w.A], () => w.A.getOptimisticProgress(e.id, E.n.WATCH_VIDEO))),
            _.useMemo(() => (0, Z.J$)(e), [e, t]));
    return n || i || a;
}
let eh = (e) => {
    let t = _.useCallback(() => (0, X.Yh)(e), [e]),
        [n, i] = _.useState(t()),
        a = _.useCallback(() => i(t()), [t]),
        r = em(e);
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
            }, +g.A.Millis.SECOND);
            return () => {
                clearInterval(t), a();
            };
        }, [e, r, a]),
        n
    );
};
function eg(e) {
    return _.useMemo(() => (0, X.JC)(e), [e]);
}
function eb(e) {
    let t = _.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, X.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, O.A)(t);
}
function eU(e) {
    let t = (0, T.bG)([w.A], () => w.A.quests),
        n = eb(Array.from(t.values())),
        i = _.useMemo(() => {
            let n = (0, z.$e)(t, J.zO);
            return (0, $.BM)(n, e);
        }, [e, t, n]);
    return ef(i) ? null : i;
}
function eP(e) {
    return _.useMemo(
        () => ({
            handleComplete: () => (0, B.Yb)(e),
            handleProgress: (t) => (0, B.Yb)(e, t),
            handleResetStatusClick: () => (0, B.UZ)(e),
            handleResetDismissibilityClick: () => (0, B.Gt)(e),
            handleOverrideDeliveryClick: () => (0, B.d6)(e),
            handleResetHasBeenSeenClick: () => (0, B.qV)(o.p.QUEST, [e]),
        }),
        [e],
    );
}
function eM() {
    let { fetching: e, accounts: t } = (0, T.cf)([p.A], () => ({
            fetching: p.A.isFetching(),
            accounts: p.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = _.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === ee.fg2.XBOX),
                i = e.filter((e) => e.type === ee.fg2.PLAYSTATION),
                a = n.concat(i);
            return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: a };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: a };
}
let eG = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [r, s] = _.useState([]),
            [l, o] = _.useState(!1),
            E = (0, T.bG)([p.A], () => p.A.getAccounts()),
            c = (0, v.O)((e) => e.clearErrorHintsByType);
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
                        (e = await (0, B.vD)(t, n)), s(e.errorHints);
                    } finally {
                        o(!1), a?.(e?.errorHints ?? []);
                    }
                }, [l, i, a, n, t]),
                startingConsoleQuest: l,
                errorHints: r,
            }
        );
    },
    ey = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eM(),
            i = em(t),
            a = 0 === n.length;
        return (0, X.g5)(t) && a && !i;
    },
    ev = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eM(),
            n = e.length > 0,
            i = t.length > 0,
            a = U.A.getArticleURL(ee.MVz.QUEST_HOW_TO_PLAYSTATION),
            r = U.A.getArticleURL(ee.MVz.QUEST_HOW_TO_XBOX),
            _ = en.intl.format(en.t.beN4DG, { psHelpdeskArticle: a, xboxHelpdeskArticle: r }),
            s = en.intl.format(en.t.HVS7nh, { helpdeskArticle: i ? a : r });
        return { message: (n && !i) || (!n && i) ? s : _, xboxURL: r, playstationURL: a };
    };
var eB =
    (((r = {})[(r.UNACCEPTED = 0)] = "UNACCEPTED"),
    (r[(r.ACCEPTED = 1)] = "ACCEPTED"),
    (r[(r.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (r[(r.COMPLETED = 3)] = "COMPLETED"),
    (r[(r.CLAIMED = 4)] = "CLAIMED"),
    r);
function ew(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        a = eh(e).percentComplete > 0;
    return i ? 4 : n ? 3 : a && t ? 2 : 1 * !!t;
}
function eF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, T.bG)([C.default], () => C.default.locale),
        { percentComplete: i } = eh(e),
        a = eg(e),
        r = null != a ? a.percentComplete : i,
        _ = 100 * r,
        s = null == a || t ? (0, M.l9)(n, r, { roundingMode: "floor" }) : `${a?.progress}/${a?.target}`;
    return { completedRatio: r, percentComplete: _, completedRatioDisplay: s };
}
function eV(e, t) {
    var n;
    let [i, a] =
            ((n = e.id),
            [(0, T.bG)([w.A], () => w.A.selectedTaskPlatform(n)), _.useCallback((e) => (0, B.lx)(n, e), [n])]),
        r = _.useMemo(() => (0, Q.UR)(e), [e]),
        s = r.includes(J.fO.DESKTOP),
        o = r.includes(J.fO.CONSOLE),
        d = eL(e),
        c = ep(e),
        u = _.useMemo(
            () =>
                (0, l.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: E.n.PLAY_ON_DESKTOP }, () => J.fO.DESKTOP)
                    .with({ taskType: E.n.PLAY_ACTIVITY }, () => J.fO.DESKTOP)
                    .with({ taskType: E.n.WATCH_VIDEO }, () => J.fO.DESKTOP)
                    .with({ taskType: E.n.WATCH_VIDEO_ON_MOBILE }, () => J.fO.DESKTOP)
                    .with({ taskType: E.n.STREAM_ON_DESKTOP }, () => J.fO.DESKTOP)
                    .with({ taskType: E.n.PLAY_ON_XBOX }, () => J.fO.CONSOLE)
                    .with({ taskType: E.n.PLAY_ON_PLAYSTATION }, () => J.fO.CONSOLE)
                    .with({ taskType: E.n.ACHIEVEMENT_IN_GAME }, () => J.fO.DESKTOP)
                    .with({ taskType: E.n.ACHIEVEMENT_IN_ACTIVITY }, () => J.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        I = d ? J.fO.DESKTOP : c ? J.fO.CONSOLE : null;
    return [
        _.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: u, currentProgressingPlatform: I, selectedPlatform: i })
                    .with({ currentProgressingPlatform: J.fO.CONSOLE }, () => F.X0.CONSOLE)
                    .with({ currentProgressingPlatform: J.fO.DESKTOP }, () => F.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: J.fO.CONSOLE }, () => F.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: J.fO.DESKTOP }, () => F.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: J.fO.CONSOLE,
                        },
                        () => F.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: J.fO.DESKTOP,
                        },
                        () => F.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (o && s ? F.X0.SELECT : o ? F.X0.CONSOLE : F.X0.DESKTOP),
                    )
                    .exhaustive(),
            [o, s, u, I, i],
        ),
        r,
        a,
    ];
}
function eH(e) {
    let t = eg(e),
        n = eh(e),
        [i] = eV(e, n),
        a = ef(e),
        r = e.userStatus?.enrolledAt != null,
        _ = e.userStatus?.completedAt != null,
        s = E.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        o = r && !_ && !a && null == t && (s || (l && i === F.X0.DESKTOP)),
        d = (0, G.isWeb)() && o && !(0, Q.W1)(e),
        c = (0, G.isMac)() && n.taskType === E.n.STREAM_ON_DESKTOP && o,
        u = [];
    return c && u.push(en.intl.string(en.t.MFGxFM)), d && u.push(en.intl.string(en.t.BV6xDm)), u;
}
function ek(e) {
    return (0, T.bG)([w.A], () => w.A.quests).get(e) ?? null;
}
function ej(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        r = _.useRef(null);
    _.useEffect(() => {
        null != a &&
            r.current !== t &&
            ((0, W.Mm)({ mode: t, prevMode: r.current, questContent: n, questId: a, sourceQuestContent: i }),
            (r.current = t));
    }, [a, n, t, i]),
        _.useEffect(() => {
            if (null != a)
                return () => {
                    (0, W.Mm)({ mode: null, prevMode: r.current, questContent: n, questId: a, sourceQuestContent: i });
                };
        }, [a, n, i]);
}
function eW(e, t) {
    let n = (0, T.bG)([w.A], () => w.A.getQuest(e), [e]),
        i = (0, A.Ay)();
    return _.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, I.M)(i) ? ee.NJ8.DARK : ee.NJ8.LIGHT);
        return (0, k.tW)(n, k.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eY(e) {
    let t = (0, q.mq)(e),
        n = (0, q.k5)(e),
        i = (0, q.$5)(e),
        a = (0, q.Y7)(e),
        r = (0, q.JX)(e),
        _ = (0, T.bG)([m.default], () => m.default.getCurrentUser()),
        s = (0, y.TW)(_, et.PremiumTypes.TIER_2);
    if (null == n) return en.intl.formatToPlainString(en.t.l9uXL8, { decorationName: t });
    let l = en.intl.formatToPlainString(en.t.o97tNn, { rewardName: t }),
        o = en.intl.formatToPlainString(en.t.PkyRZo, { rewardName: t, expirationDate: i }),
        E = en.intl.formatToPlainString(en.t.ie4YK0, { rewardName: t, duration: n }),
        d = en.intl.formatToPlainString(en.t.yCpc0U, { duration: n, rewardName: t });
    return r
        ? a
            ? s
                ? l
                : E
            : s
              ? o
              : d
        : en.intl.formatToPlainString(en.t.tTlItm, { duration: n, decorationName: t });
}
function ex(e) {
    let t = (0, X.TP)(e);
    return { launchInGameActivity: (0, S.A)({ applicationId: t }) };
}
let eK = () => (0, T.yK)([w.A], () => [...w.A.quests.values()]).some((e) => e.preview),
    e$ = (e) => {
        let t = e?.userStatus != null && (0, K.gO)(e.userStatus, F.uF.ACTIVITY_PANEL),
            n = ef(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            a = (0, T.bG)([w.A], () => null != w.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !a;
    },
    eQ = () => {
        let e = (0, T.yK)([w.A], () => [...w.A.quests.values()]);
        return _.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eq() {
    let e = J.pc;
    return _.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, x.fx)(t), options: n };
            }),
        [e],
    );
}
function eX() {
    return _.useMemo(() => Object.keys(J.kL).map((e) => ({ label: (0, x.Js)(J.kL[e]), value: J.kL[e] })), []);
}
function ez(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = _.useRef(null),
        r = _.useRef(null);
    _.useEffect(() => {
        h.default.track(ee.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: a.current }),
            (a.current = t);
    }, [t]),
        _.useEffect(() => {
            let e = n.map((e) => e.filter);
            h.default.track(ee.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: r.current ?? [],
                num_quests_visible: i,
            }),
                (r.current = e);
        }, [n, i]);
}
let eZ = (e) => _.useMemo(() => m.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    eJ = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e0(e) {
    let t = (0, T.bG)([w.A], () => w.A.quests);
    return _.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(b.Vq)
            .filter((e) => !(0, K.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function e1() {
    let { enabled: e } = V.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [t, n] = _.useState(!0),
        [i, a] = _.useState(!0),
        [r, s] = _.useState(!1),
        [l, o] = _.useState(!1),
        { isFetching: E, questHomeHero: d } = (0, T.cf)([w.A], () => ({
            isFetching: w.A.isFetchingQuestHomeHero(),
            questHomeHero: w.A.getQuestHomeHero(),
        }));
    return (
        _.useEffect(() => {
            !(async function () {
                try {
                    e ? await (0, B.Am)() : await (0, B.Yf)();
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
                    await Promise.all(e.map(P.NN));
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
function e2(e) {
    let t = D.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return _.useCallback(() => {
        if (n) return;
        let i = t ? u.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : u.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, R.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
