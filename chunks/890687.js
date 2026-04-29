n.d(t, {
    $P: () => ez,
    C5: () => ek,
    Du: () => eU,
    F3: () => ew,
    FA: () => eY,
    H6: () => eH,
    I3: () => eD,
    In: () => ex,
    Iq: () => eT,
    L1: () => eA,
    LS: () => ef,
    NC: () => eu,
    Nb: () => eq,
    O9: () => eV,
    Oq: () => eh,
    Qh: () => eI,
    Qo: () => eB,
    RR: () => ey,
    S5: () => em,
    SD: () => eS,
    UH: () => e2,
    UX: () => eG,
    Vn: () => eg,
    Wj: () => ev,
    XD: () => eQ,
    YW: () => eM,
    Yl: () => ep,
    ZP: () => eN,
    a5: () => ej,
    aC: () => eF,
    do: () => eO,
    fc: () => eL,
    j$: () => eP,
    lg: () => e1,
    mL: () => ei,
    nv: () => eX,
    oH: () => eb,
    p5: () => eK,
    pT: () => eZ,
    sb: () => e$,
    t9: () => e0,
    zW: () => eW,
}),
    n(321073),
    n(801541);
var i,
    a,
    r,
    s = n(64700);
n(284009);
var l = n(735438),
    o = n(889137),
    d = n(323889),
    c = n(412703),
    _ = n(114046),
    E = n(440703);
n(731355);
var u = n(517846),
    A = n(462887),
    I = n(17928),
    T = n(736653),
    h = n(787389),
    S = n(183636),
    N = n(429913);
n(674658);
var f = n(493740),
    p = n(27620),
    m = n(773669),
    O = n(253932),
    C = n(734057),
    R = n(30370),
    g = n(287809),
    L = n(954571),
    D = n(927813),
    b = n(403362),
    M = n(975571),
    P = n(515718),
    U = n(252424),
    v = n(723702),
    y = n(927578);
n(763148), n(265704);
var G = n(178540),
    w = n(829219),
    x = n(859703),
    V = n(507107),
    B = n(245853),
    F = n(302654);
n(901882);
var k = n(859387),
    H = n(971276),
    j = n(561844);
n(590202);
var Y = n(971649),
    W = n(651892),
    K = n(710969),
    $ = n(639214),
    Z = n(901406),
    q = n(801365),
    Q = n(792620),
    z = n(814793),
    X = n(753386),
    J = n(654487),
    ee = n(652215),
    et = n(788868),
    en = n(985018);
function ei() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = s.useState(!1),
        i = (0, I.yK)([x.A], () => [...x.A.quests.values()]),
        a = (0, I.yK)([x.A], () => [...x.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: r, lastFetchedCurrentQuests: l } = (0, I.cf)([x.A], () => ({
            isFetchingCurrentQuests: x.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: x.A.lastFetchedCurrentQuests,
        })),
        o = (0, H.s)();
    return (
        s.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === l)) &&
                o &&
                !t &&
                !r
            ) {
                if ((n(!0), (0, w.N1)(), (0, v.isMac)() && "focused" !== S.A.getState())) return;
                let { enableNewRequestBehavior: t } = F.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, w.r8)(V.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, o, t, r, l, e.callerSource]),
        { quests: i, excludedQuests: a, isFetchingCurrentQuests: r, hasFetched: t }
    );
}
function ea(e, t, n) {
    let i = e.id === J.aJ,
        a = t.id === J.aJ,
        r = i && e.userStatus?.completedAt == null;
    if (r !== (a && t.userStatus?.completedAt == null)) return r ? -1 : 1;
    let s = !(0, K.Ic)(e),
        l = e.userStatus?.claimedAt != null,
        o = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        _ = 20 * D.A.Millis.MINUTE,
        E = eJ(e, _),
        u = eJ(t, _);
    if (s) {
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
        return E !== u && (E || u)
            ? E
                ? 1
                : -1
            : l !== o
              ? l
                  ? 1
                  : -1
              : d !== c
                ? d
                    ? -1
                    : 1
                : eE(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return l !== o ? (l ? -1 : 1) : d !== c ? (d ? -1 : 1) : eE(e.config.expiresAt, t.config.expiresAt, 0);
}
function er(e, t, n) {
    return eE(e.config.startsAt, t.config.startsAt, 0);
}
function es(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        a = t.userStatus?.enrolledAt;
    return null == i && null == a
        ? eE(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? -1
          : null == i && null != a
            ? 1
            : eE(i, a, 0);
}
function el(e, t, n) {
    return eE(e.config.expiresAt, t.config.expiresAt, 1);
}
function eo(e, t) {
    switch (t) {
        case J.Pc.VIDEO:
            return (0, Q.vv)(e);
        case J.Pc.PLAY:
            return (0, Q.t)({ quest: e }) || (0, Q.fE)({ quest: e }) || (0, Q.vl)(e);
        default:
            return !1;
    }
}
function ed(e, t) {
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
let ec = {},
    e_ = { questHomeHero: null };
function eE(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eu = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    eA = (((a = {}).TAB = "tab"), (a.QUEST_ID = "quest_id"), (a.SORT = "sort"), (a.FILTER = "filter"), a);
function eI(e) {
    let t,
        n,
        i,
        a,
        r,
        o,
        d,
        c,
        _,
        E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        {
            quests: u,
            excludedQuests: A,
            isFetchingCurrentQuests: T,
            hasFetched: h,
        } = ei({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        S = new Map(u.map((e) => [e.id, e])),
        N =
            ((t = (0, I.bG)([x.A], () => x.A.getQuestHomeHero())),
            (n = s.useMemo(() => ({ questHomeHero: t }), [t])),
            (i = s.useRef([])),
            (a = s.useRef(E.sortMethod)),
            (r = s.useRef(E.filters)),
            (o = s.useRef(0)),
            (d = s.useRef(n)),
            s.useMemo(() => {
                if (0 === u.length) return [];
                if (
                    i.current.length > 0 &&
                    o.current === u.length &&
                    a.current === E.sortMethod &&
                    r.current === E.filters &&
                    d.current === n
                )
                    return i.current;
                let e = (function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e_,
                        { sortMethod: a, filters: r } = n,
                        s =
                            null == r || 0 === r.length
                                ? e
                                : (function (e, t) {
                                      if (0 === t.length) return e;
                                      let n = (0, l.groupBy)(t, "group");
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
                                                              return ed;
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
                                    case J.kL.MOST_RECENT:
                                        return er;
                                    case J.kL.RECENTLY_ENROLLED:
                                        return es;
                                    case J.kL.EXPIRING_SOON:
                                        return el;
                                    case J.kL.SUGGESTED:
                                    default:
                                        return ea;
                                }
                            })(a)),
                            function (e, n) {
                                let a = !(0, K.Ic)(e);
                                return !(0, K.Ic)(n) !== a ? (a ? -1 : 1) : t(e, n, i);
                            });
                    return s.sort(o);
                })(u, E, n).map((e) => e.id);
                return (
                    (i.current = e),
                    (a.current = E.sortMethod),
                    (r.current = E.filters),
                    (o.current = u.length),
                    (d.current = n),
                    e
                );
            }, [u, E, n])),
        f =
            ((c = s.useMemo(
                () =>
                    u.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [u],
            )),
            (_ = s.useRef([])),
            s.useMemo(() => {
                if (0 === c.length) return [];
                if (_.current.length > 0 && _.current.length === c.length) return _.current;
                let e = c
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? -1
                                : 1
                            : eE(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (_.current = e), e;
            }, [c])),
        p = [];
    for (let t of "all" === e ? N : f) {
        let e = S.get(t);
        null != e && p.push(e);
    }
    return { quests: p, excludedQuests: A, isFetchingCurrentQuests: T, hasFetched: h };
}
function eT() {
    let e = s.useRef(!1),
        t = (0, I.yK)([x.A], () => Array.from(x.A.claimedQuests.values())),
        n = (0, I.bG)([x.A], () => x.A.isFetchingClaimedQuests);
    return (
        s.useEffect(() => {
            n || e.current || ((e.current = !0), (0, w.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eh() {
    return (0, I.bG)([g.default], () => y.Ay.canUseQuestOrbMultiplier(g.default.getCurrentUser()));
}
function eS(e) {
    let t = ef(e);
    return (0, I.bG)([g.default], () => {
        let n = (0, q.ks)(e.config),
            i = (0, q.KK)(e.config),
            a = g.default.getCurrentUser();
        return !t && n && i && (!(0, y.YE)(a, et.PremiumTypes.TIER_2) || (0, f.RM)(f.G5, a));
    }, [t, e.config]);
}
function eN(e) {
    return (0, I.bG)([x.A], () => {
        let t = x.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === E.l.VIRTUAL_CURRENCY);
        if (n?.type !== E.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: i, orbQuantity: a } = n;
        return null == i || 0 === a ? null : Math.round((i / a) * 100) / 100;
    }, [e]);
}
function ef(e) {
    return (0, I.bG)([x.A], () => null != e && x.A.isQuestExpired(e.id), [e]);
}
function ep(e, t, n) {
    let i = (0, I.bG)([C.A], () => C.A.getChannel(t?.channelId) ?? null),
        a = (0, I.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
        r = (0, I.bG)([g.default], () => g.default.getCurrentUser()?.id),
        s = (0, I.bG)([x.A], () => null != e && x.A.isQuestExpired(e.id), [e]);
    if (null == e || a || s || r === n) return !1;
    let l = e.userStatus?.claimedAt != null,
        o = (0, z.Ll)(t, i);
    return !l || !!o;
}
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, I.bG)([m.default], () => m.default.locale);
    return s.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eO(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: a } = e,
        r = (0, Y.go)();
    return s.useCallback(() => {
        t.id === J.Fw
            ? window.open(M.A.getArticleURL(ee.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, Z.pu)(t, { content: n, ctaContent: i, impressionId: r, sourceQuestContent: a });
    }, [t, n, i, r, a]);
}
function eC(e) {
    return (0, I.bG)([x.A], () => x.A.isProgressingOnDesktop(e.id));
}
function eR(e) {
    return s.useMemo(() => (0, Q.YL)(e), [e]);
}
function eg(e) {
    let t,
        n = eC(e),
        i = eR(e),
        a =
            ((t = (0, I.bG)([x.A], () => x.A.getOptimisticProgress(e.id, c.n.WATCH_VIDEO))),
            s.useMemo(() => (0, X.J$)(e), [e, t]));
    return n || i || a;
}
let eL = (e) => {
    let t = s.useCallback(() => (0, Q.Yh)(e), [e]),
        [n, i] = s.useState(t()),
        a = s.useCallback(() => i(t()), [t]),
        r = eg(e);
    return (
        s.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !r
            )
                return void a();
            let t = window.setInterval(() => {
                a();
            }, +D.A.Millis.SECOND);
            return () => {
                clearInterval(t), a();
            };
        }, [e, r, a]),
        n
    );
};
function eD(e) {
    return s.useMemo(() => (0, Q.JC)(e), [e]);
}
function eb(e) {
    let t = s.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, Q.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, N.A)(t);
}
function eM(e) {
    let t = (0, I.bG)([x.A], () => x.A.quests),
        n = eb(Array.from(t.values())),
        i = s.useMemo(() => {
            let n = (0, z.$e)(t, J.zO);
            return (0, $.BM)(n, e);
        }, [e, t, n]);
    return ef(i) ? null : i;
}
function eP(e) {
    return s.useMemo(
        () => ({
            handleComplete: () => (0, w.Yb)(e),
            handleProgress: (t) => (0, w.Yb)(e, t),
            handleResetStatusClick: () => (0, w.UZ)(e),
            handleResetDismissibilityClick: () => (0, w.Gt)(e),
            handleOverrideDeliveryClick: () => (0, w.d6)(e),
            handleResetHasBeenSeenClick: () => (0, w.qV)(d.p.QUEST, [e]),
        }),
        [e],
    );
}
function eU() {
    let { fetching: e, accounts: t } = (0, I.cf)([R.A], () => ({
            fetching: R.A.isFetching(),
            accounts: R.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = s.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === ee.fg2.XBOX),
                i = e.filter((e) => e.type === ee.fg2.PLAYSTATION),
                a = n.concat(i);
            return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: a };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: a };
}
let ev = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [r, l] = s.useState([]),
            [o, d] = s.useState(!1),
            c = (0, I.bG)([R.A], () => R.A.getAccounts()),
            E = (0, G.O)((e) => e.clearErrorHintsByType);
        return (
            s.useEffect(() => {
                l((e) => e.filter((e) => e.type !== _._.EXPIRED_CREDENTIAL)), E(t, _._.EXPIRED_CREDENTIAL);
            }, [c, E, t]),
            {
                startConsoleQuest: s.useCallback(async () => {
                    if (o) return;
                    i?.(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, w.vD)(t, n)), l(e.errorHints);
                    } finally {
                        d(!1), a?.(e?.errorHints ?? []);
                    }
                }, [o, i, a, n, t]),
                startingConsoleQuest: o,
                errorHints: r,
            }
        );
    },
    ey = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eU(),
            i = eg(t),
            a = 0 === n.length;
        return (0, Q.g5)(t) && a && !i;
    },
    eG = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eU(),
            n = e.length > 0,
            i = t.length > 0,
            a = M.A.getArticleURL(ee.MVz.QUEST_HOW_TO_PLAYSTATION),
            r = M.A.getArticleURL(ee.MVz.QUEST_HOW_TO_XBOX),
            s = en.intl.format(en.t.beN4DG, { psHelpdeskArticle: a, xboxHelpdeskArticle: r }),
            l = en.intl.format(en.t.HVS7nh, { helpdeskArticle: i ? a : r });
        return { message: (n && !i) || (!n && i) ? l : s, xboxURL: r, playstationURL: a };
    };
var ew =
    (((r = {})[(r.UNACCEPTED = 0)] = "UNACCEPTED"),
    (r[(r.ACCEPTED = 1)] = "ACCEPTED"),
    (r[(r.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (r[(r.COMPLETED = 3)] = "COMPLETED"),
    (r[(r.CLAIMED = 4)] = "CLAIMED"),
    r);
function ex(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        a = eL(e).percentComplete > 0;
    return i ? 4 : n ? 3 : a && t ? 2 : 1 * !!t;
}
function eV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, I.bG)([m.default], () => m.default.locale),
        { percentComplete: i } = eL(e),
        a = eD(e),
        r = null != a ? a.percentComplete : i,
        s = 100 * r,
        l = null == a || t ? (0, U.l9)(n, r, { roundingMode: "floor" }) : `${a?.progress}/${a?.target}`;
    return { completedRatio: r, percentComplete: s, completedRatioDisplay: l };
}
function eB(e, t) {
    var n;
    let [i, a] =
            ((n = e.id),
            [(0, I.bG)([x.A], () => x.A.selectedTaskPlatform(n)), s.useCallback((e) => (0, w.lx)(n, e), [n])]),
        r = s.useMemo(() => (0, Z.UR)(e), [e]),
        l = r.includes(J.fO.DESKTOP),
        d = r.includes(J.fO.CONSOLE),
        _ = eC(e),
        E = eR(e),
        u = s.useMemo(
            () =>
                (0, o.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: c.n.PLAY_ON_DESKTOP }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ACTIVITY }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO_ON_MOBILE }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.STREAM_ON_DESKTOP }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ON_XBOX }, () => J.fO.CONSOLE)
                    .with({ taskType: c.n.PLAY_ON_PLAYSTATION }, () => J.fO.CONSOLE)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_GAME }, () => J.fO.DESKTOP)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_ACTIVITY }, () => J.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        A = _ ? J.fO.DESKTOP : E ? J.fO.CONSOLE : null;
    return [
        s.useMemo(
            () =>
                (0, o.YW)({ lastPlatformProgress: u, currentProgressingPlatform: A, selectedPlatform: i })
                    .with({ currentProgressingPlatform: J.fO.CONSOLE }, () => V.X0.CONSOLE)
                    .with({ currentProgressingPlatform: J.fO.DESKTOP }, () => V.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: J.fO.CONSOLE }, () => V.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: J.fO.DESKTOP }, () => V.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: J.fO.CONSOLE,
                        },
                        () => V.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: J.fO.DESKTOP,
                        },
                        () => V.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (d && l ? V.X0.SELECT : d ? V.X0.CONSOLE : V.X0.DESKTOP),
                    )
                    .exhaustive(),
            [d, l, u, A, i],
        ),
        r,
        a,
    ];
}
function eF(e) {
    let t = eD(e),
        n = eL(e),
        [i] = eB(e, n),
        a = ef(e),
        r = e.userStatus?.enrolledAt != null,
        s = e.userStatus?.completedAt != null,
        l = c.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        o = 0 === n.percentComplete,
        d = r && !s && !a && null == t && (l || (o && i === V.X0.DESKTOP)),
        _ = (0, v.isWeb)() && d && !(0, Z.W1)(e),
        E = (0, v.isMac)() && n.taskType === c.n.STREAM_ON_DESKTOP && d,
        u = [];
    return E && u.push(en.intl.string(en.t.MFGxFM)), _ && u.push(en.intl.string(en.t.BV6xDm)), u;
}
function ek(e) {
    return (0, I.bG)([x.A], () => x.A.quests).get(e) ?? null;
}
function eH(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        r = s.useRef(null);
    s.useEffect(() => {
        null != a &&
            r.current !== t &&
            ((0, j.Mm)({ mode: t, prevMode: r.current, questContent: n, questId: a, sourceQuestContent: i }),
            (r.current = t));
    }, [a, n, t, i]),
        s.useEffect(() => {
            if (null != a)
                return () => {
                    (0, j.Mm)({ mode: null, prevMode: r.current, questContent: n, questId: a, sourceQuestContent: i });
                };
        }, [a, n, i]);
}
function ej(e, t) {
    let n = (0, I.bG)([x.A], () => x.A.getQuest(e), [e]),
        i = (0, T.Ay)();
    return s.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, A.M)(i) ? ee.NJ8.DARK : ee.NJ8.LIGHT);
        return (0, k.tW)(n, k.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eY(e) {
    let t = (0, q.mq)(e),
        n = (0, q.k5)(e),
        i = (0, q.$5)(e),
        a = (0, q.Y7)(e),
        r = (0, q.JX)(e),
        s = (0, I.bG)([g.default], () => g.default.getCurrentUser()),
        l = (0, y.TW)(s, et.PremiumTypes.TIER_2);
    if (null == n) return en.intl.formatToPlainString(en.t.l9uXL8, { decorationName: t });
    let o = en.intl.formatToPlainString(en.t.o97tNn, { rewardName: t }),
        d = en.intl.formatToPlainString(en.t.PkyRZo, { rewardName: t, expirationDate: i }),
        c = en.intl.formatToPlainString(en.t.ie4YK0, { rewardName: t, duration: n }),
        _ = en.intl.formatToPlainString(en.t.yCpc0U, { duration: n, rewardName: t });
    return r
        ? a
            ? l
                ? o
                : c
            : l
              ? d
              : _
        : en.intl.formatToPlainString(en.t.tTlItm, { duration: n, decorationName: t });
}
function eW(e) {
    let t = (0, Q.TP)(e);
    return { launchInGameActivity: (0, h.A)({ applicationId: t }) };
}
let eK = () => (0, I.yK)([x.A], () => [...x.A.quests.values()]).some((e) => e.preview),
    e$ = (e) => {
        let t = e?.userStatus != null && (0, K.gO)(e.userStatus, V.uF.ACTIVITY_PANEL),
            n = ef(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            a = (0, I.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !a;
    },
    eZ = () => {
        let e = (0, I.yK)([x.A], () => [...x.A.quests.values()]);
        return s.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eq() {
    let e = J.pc;
    return s.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, W.fx)(t), options: n };
            }),
        [e],
    );
}
function eQ() {
    return s.useMemo(() => Object.keys(J.kL).map((e) => ({ label: (0, W.Js)(J.kL[e]), value: J.kL[e] })), []);
}
function ez(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = s.useRef(null),
        r = s.useRef(null);
    s.useEffect(() => {
        L.default.track(ee.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: a.current }),
            (a.current = t);
    }, [t]),
        s.useEffect(() => {
            let e = n.map((e) => e.filter);
            L.default.track(ee.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: r.current ?? [],
                num_quests_visible: i,
            }),
                (r.current = e);
        }, [n, i]);
}
let eX = (e) => s.useMemo(() => g.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    eJ = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e0(e) {
    let t = (0, I.bG)([x.A], () => x.A.quests);
    return s.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(b.Vq)
            .filter((e) => !(0, K.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function e1() {
    let { enabled: e } = B.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [t, n] = s.useState(!0),
        [i, a] = s.useState(!0),
        [r, l] = s.useState(!1),
        [o, d] = s.useState(!1),
        { isFetching: c, questHomeHero: _ } = (0, I.cf)([x.A], () => ({
            isFetching: x.A.isFetchingQuestHomeHero(),
            questHomeHero: x.A.getQuestHomeHero(),
        }));
    return (
        s.useEffect(() => {
            !(async function () {
                try {
                    e ? await (0, w.Am)() : await (0, w.Yf)();
                } catch (e) {
                    a(!1), l(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        s.useEffect(() => {
            !(async function () {
                try {
                    if (null == _) return;
                    let e = [_.heroImage, _.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(P.NN));
                } catch (e) {
                    d(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [_]),
        { questHomeHero: r || o ? null : _, isLoading: t || c || i }
    );
}
function e2(e) {
    let t = O.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return s.useCallback(() => {
        if (n) return;
        let i = t ? u.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : u.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, p.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
