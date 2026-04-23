n.d(t, {
    $P: () => e0,
    BL: () => eP,
    C5: () => eY,
    Du: () => ev,
    F3: () => eV,
    FA: () => e$,
    H6: () => ej,
    I3: () => eU,
    In: () => eH,
    Iq: () => eN,
    L1: () => eT,
    LS: () => eC,
    NC: () => eA,
    Nb: () => eJ,
    O9: () => ek,
    Oq: () => eO,
    Qh: () => eS,
    Qo: () => ex,
    RR: () => ew,
    S5: () => em,
    SD: () => eR,
    UH: () => e5,
    UX: () => eF,
    Vn: () => eg,
    Wj: () => eB,
    XD: () => eZ,
    YW: () => ey,
    Yl: () => ep,
    ZP: () => ef,
    a5: () => eK,
    aC: () => eW,
    do: () => eL,
    fc: () => eb,
    j$: () => eG,
    lg: () => e6,
    mL: () => ea,
    nv: () => e1,
    oH: () => eM,
    p5: () => eq,
    pT: () => ez,
    sb: () => eX,
    t9: () => e3,
    zW: () => eQ,
}),
    n(321073),
    n(801541);
var i,
    r,
    a,
    s = n(64700);
n(284009);
var _ = n(735438),
    l = n(889137),
    o = n(323889),
    E = n(412703),
    d = n(114046),
    c = n(440703),
    u = n(731355),
    I = n(517846),
    A = n(462887),
    T = n(17928),
    S = n(736653),
    N = n(787389),
    O = n(183636),
    R = n(429913);
n(674658);
var f = n(493740),
    C = n(27620),
    p = n(773669),
    m = n(253932),
    L = n(734057),
    D = n(30370),
    h = n(287809),
    g = n(954571),
    b = n(927813),
    U = n(403362),
    P = n(975571),
    M = n(515718),
    y = n(252424),
    G = n(723702),
    v = n(927578);
n(763148), n(265704);
var B = n(178540),
    w = n(829219),
    F = n(859703),
    V = n(507107),
    H = n(245853),
    k = n(302654);
n(901882);
var x = n(859387),
    W = n(971276),
    Y = n(561844),
    j = n(590202),
    K = n(971649),
    $ = n(651892),
    Q = n(710969),
    q = n(639214),
    X = n(901406),
    z = n(801365),
    J = n(792620),
    Z = n(814793),
    ee = n(753386),
    et = n(654487),
    en = n(652215),
    ei = n(788868),
    er = n(985018);
function ea() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = s.useState(!1),
        i = (0, T.yK)([F.A], () => [...F.A.quests.values()]),
        r = (0, T.yK)([F.A], () => [...F.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: _ } = (0, T.cf)([F.A], () => ({
            isFetchingCurrentQuests: F.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: F.A.lastFetchedCurrentQuests,
        })),
        l = (0, W.s)();
    return (
        s.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === _)) &&
                l &&
                !t &&
                !a
            ) {
                if ((n(!0), (0, w.N1)(), (0, G.isMac)() && "focused" !== O.A.getState())) return;
                let { enableNewRequestBehavior: t } = k.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, w.r8)(V.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, a, _, e.callerSource]),
        { quests: i, excludedQuests: r, isFetchingCurrentQuests: a, hasFetched: t }
    );
}
function es(e, t, n, i) {
    let r = e.id === et.aJ,
        a = t.id === et.aJ,
        s = r && e.userStatus?.completedAt == null;
    if (s !== (a && t.userStatus?.completedAt == null)) return s ? -1 : 1;
    let _ = !(0, Q.Ic)(e),
        l = e.userStatus?.claimedAt != null,
        o = t.userStatus?.claimedAt != null,
        E = e.userStatus?.enrolledAt != null,
        d = t.userStatus?.enrolledAt != null,
        c = i === H.rE.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES ? 30 * b.A.Millis.MINUTE : 20 * b.A.Millis.MINUTE,
        I = e2(e, c),
        A = e2(t, c);
    if (_) {
        let { questHomeHero: r } = n,
            a = null != r && (0, Z.I0)(r, e.id),
            s = null != r && (0, Z.I0)(r, t.id);
        if (a || s) {
            if (a && s) {
                let n = r?.questIds;
                if (null != n) return n.indexOf(e.id) - n.indexOf(t.id);
            }
            return a ? -1 : 1;
        }
        if (i === H.rE.RANK_BASED_ON_QUEST_TYPE) {
            let n = (0, Z.pv)(e.config),
                i = (0, Z.pv)(t.config),
                r = (0, J.c1)(e),
                a = (0, J.c1)(t);
            if (r !== a && (r || a)) return r ? -1 : 1;
            if (n !== i && (n === u.Z.VIDEO || i === u.Z.VIDEO)) return n === u.Z.VIDEO ? -1 : 1;
        }
        return I !== A && (I || A)
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
                : eI(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return l !== o ? (l ? -1 : 1) : E !== d ? (E ? -1 : 1) : eI(e.config.expiresAt, t.config.expiresAt, 0);
}
function e_(e, t, n) {
    return eI(e.config.startsAt, t.config.startsAt, 0);
}
function el(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        r = t.userStatus?.enrolledAt;
    return null == i && null == r
        ? eI(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == r
          ? -1
          : null == i && null != r
            ? 1
            : eI(i, r, 0);
}
function eo(e, t, n) {
    return eI(e.config.expiresAt, t.config.expiresAt, 1);
}
function eE(e, t) {
    switch (t) {
        case et.Pc.VIDEO:
            return (0, J.vv)(e);
        case et.Pc.PLAY:
            return (0, J.t)({ quest: e }) || (0, J.fE)({ quest: e }) || (0, J.vl)(e);
        default:
            return !1;
    }
}
function ed(e, t) {
    switch (t) {
        case et.BQ.VIRTUAL_CURRENCY:
            return (0, z.ks)(e.config);
        case et.BQ.COLLECTIBLE:
            return (0, z.tU)(e.config);
        case et.BQ.IN_GAME:
            return (0, z.HG)(e.config) || (0, z.r7)(e.config);
        default:
            return !1;
    }
}
let ec = {},
    eu = { questHomeHero: null };
function eI(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eA = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    eT = (((r = {}).TAB = "tab"), (r.QUEST_ID = "quest_id"), (r.SORT = "sort"), (r.FILTER = "filter"), r);
function eS(e) {
    let t,
        n,
        i,
        r,
        a,
        l,
        o,
        E,
        d,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        {
            quests: u,
            excludedQuests: I,
            isFetchingCurrentQuests: A,
            hasFetched: S,
        } = ea({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        N = new Map(u.map((e) => [e.id, e])),
        O =
            ((t = (0, T.bG)([F.A], () => F.A.getQuestHomeHero())),
            (n = s.useMemo(() => ({ questHomeHero: t }), [t])),
            (i = s.useRef([])),
            (r = s.useRef(c.sortMethod)),
            (a = s.useRef(c.filters)),
            (l = s.useRef(0)),
            (o = s.useRef(n)),
            s.useMemo(() => {
                if (0 === u.length) return [];
                if (
                    i.current.length > 0 &&
                    l.current === u.length &&
                    r.current === c.sortMethod &&
                    a.current === c.filters &&
                    o.current === n
                )
                    return i.current;
                let e = (function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eu,
                        { sortMethod: r, filters: a } = n,
                        s = (0, H.fV)() ?? void 0,
                        l =
                            null == a || 0 === a.length
                                ? e
                                : (function (e, t) {
                                      if (0 === t.length) return e;
                                      let n = (0, _.groupBy)(t, "group");
                                      return e.filter((e) =>
                                          Object.entries(n).every((t) => {
                                              let n,
                                                  [i, r] = t;
                                              return (
                                                  (n = (function (e) {
                                                      switch (e) {
                                                          case "task":
                                                              return eE;
                                                          case "reward":
                                                              return ed;
                                                      }
                                                  })(i)),
                                                  0 === r.length || r.some((t) => n(e, t.filter))
                                              );
                                          }),
                                      );
                                  })(e, a),
                        o =
                            ((t = (function (e) {
                                switch (e) {
                                    case et.kL.MOST_RECENT:
                                        return e_;
                                    case et.kL.RECENTLY_ENROLLED:
                                        return el;
                                    case et.kL.EXPIRING_SOON:
                                        return eo;
                                    case et.kL.SUGGESTED:
                                    default:
                                        return es;
                                }
                            })(r)),
                            function (e, n) {
                                let r = !(0, Q.Ic)(e);
                                return !(0, Q.Ic)(n) !== r ? (r ? -1 : 1) : t(e, n, i, s);
                            });
                    return l.sort(o);
                })(u, c, n).map((e) => e.id);
                return (
                    (i.current = e),
                    (r.current = c.sortMethod),
                    (a.current = c.filters),
                    (l.current = u.length),
                    (o.current = n),
                    e
                );
            }, [u, c, n])),
        R =
            ((E = s.useMemo(
                () =>
                    u.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [u],
            )),
            (d = s.useRef([])),
            s.useMemo(() => {
                if (0 === E.length) return [];
                if (d.current.length > 0 && d.current.length === E.length) return d.current;
                let e = E.sort((e, t) => {
                    let n = e.userStatus?.claimedAt == null;
                    return n !== (t.userStatus?.claimedAt == null)
                        ? n
                            ? -1
                            : 1
                        : eI(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                }).map((e) => e.id);
                return (d.current = e), e;
            }, [E])),
        f = [];
    for (let t of "all" === e ? O : R) {
        let e = N.get(t);
        null != e && f.push(e);
    }
    return { quests: f, excludedQuests: I, isFetchingCurrentQuests: A, hasFetched: S };
}
function eN() {
    let e = s.useRef(!1),
        t = (0, T.yK)([F.A], () => Array.from(F.A.claimedQuests.values())),
        n = (0, T.bG)([F.A], () => F.A.isFetchingClaimedQuests);
    return (
        s.useEffect(() => {
            n || e.current || ((e.current = !0), (0, w.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eO() {
    return (0, T.bG)([h.default], () => v.Ay.canUseQuestOrbMultiplier(h.default.getCurrentUser()));
}
function eR(e) {
    let t = eC(e);
    return (0, T.bG)([h.default], () => {
        let n = (0, z.ks)(e.config),
            i = (0, z.KK)(e.config),
            r = h.default.getCurrentUser();
        return !t && n && i && (!(0, v.YE)(r, ei.PremiumTypes.TIER_2) || (0, f.RM)(f.G5, r));
    }, [t, e.config]);
}
function ef(e) {
    return (0, T.bG)([F.A], () => {
        let t = F.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === c.l.VIRTUAL_CURRENCY);
        if (n?.type !== c.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: i, orbQuantity: r } = n;
        return null == i || 0 === r ? null : Math.round((i / r) * 100) / 100;
    }, [e]);
}
function eC(e) {
    return (0, T.bG)([F.A], () => null != e && F.A.isQuestExpired(e.id), [e]);
}
function ep(e, t, n) {
    let i = (0, T.bG)([L.A], () => L.A.getChannel(t?.channelId) ?? null),
        r = (0, T.bG)([F.A], () => null != F.A.questEnrollmentBlockedUntil, []),
        a = (0, T.bG)([h.default], () => h.default.getCurrentUser()?.id),
        s = (0, T.bG)([F.A], () => null != e && F.A.isQuestExpired(e.id), [e]);
    if (null == e || r || s || a === n) return !1;
    let _ = e.userStatus?.claimedAt != null,
        l = (0, Z.Ll)(t, i);
    return !_ || !!l;
}
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, T.bG)([p.default], () => p.default.locale);
    return s.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eL(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
        a = (0, K.go)();
    return s.useCallback(() => {
        t.id === et.Fw
            ? window.open(P.A.getArticleURL(en.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, X.pu)(t, { content: n, ctaContent: i, impressionId: a, sourceQuestContent: r });
    }, [t, n, i, a, r]);
}
function eD(e) {
    return (0, T.bG)([F.A], () => F.A.isProgressingOnDesktop(e.id));
}
function eh(e) {
    return s.useMemo(() => (0, J.YL)(e), [e]);
}
function eg(e) {
    let t,
        n = eD(e),
        i = eh(e),
        r =
            ((t = (0, T.bG)([F.A], () => F.A.getOptimisticProgress(e.id, E.n.WATCH_VIDEO))),
            s.useMemo(() => (0, ee.J$)(e), [e, t]));
    return n || i || r;
}
let eb = (e) => {
    let t = s.useCallback(() => (0, J.Yh)(e), [e]),
        [n, i] = s.useState(t()),
        r = s.useCallback(() => i(t()), [t]),
        a = eg(e);
    return (
        s.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !a
            )
                return void r();
            let t = window.setInterval(() => {
                r();
            }, +b.A.Millis.SECOND);
            return () => {
                clearInterval(t), r();
            };
        }, [e, a, r]),
        n
    );
};
function eU(e) {
    return s.useMemo(() => (0, J.JC)(e), [e]);
}
let eP = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: i } = e,
        r = ew({ quest: t }),
        a = (0, K.vU)();
    return () => {
        r
            ? (0, X.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: j.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: a?.getId(),
                      sourceQuestContent: i,
                  },
              )
            : (0, X.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: j.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: a?.getId(),
                      sourceQuestContent: i,
                  },
              );
    };
};
function eM(e) {
    let t = s.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, J.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, R.A)(t);
}
function ey(e) {
    let t = (0, T.bG)([F.A], () => F.A.quests),
        n = eM(Array.from(t.values())),
        i = s.useMemo(() => {
            let n = (0, Z.$e)(t, et.zO);
            return (0, q.BM)(n, e);
        }, [e, t, n]);
    return eC(i) ? null : i;
}
function eG(e) {
    return s.useMemo(
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
function ev() {
    let { fetching: e, accounts: t } = (0, T.cf)([D.A], () => ({
            fetching: D.A.isFetching(),
            accounts: D.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: r,
        } = s.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === en.fg2.XBOX),
                i = e.filter((e) => e.type === en.fg2.PLAYSTATION),
                r = n.concat(i);
            return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
}
let eB = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: r } = e,
            [a, _] = s.useState([]),
            [l, o] = s.useState(!1),
            E = (0, T.bG)([D.A], () => D.A.getAccounts()),
            c = (0, B.O)((e) => e.clearErrorHintsByType);
        return (
            s.useEffect(() => {
                _((e) => e.filter((e) => e.type !== d._.EXPIRED_CREDENTIAL)), c(t, d._.EXPIRED_CREDENTIAL);
            }, [E, c, t]),
            {
                startConsoleQuest: s.useCallback(async () => {
                    if (l) return;
                    i?.(), o(!0);
                    let e = null;
                    try {
                        (e = await (0, w.vD)(t, n)), _(e.errorHints);
                    } finally {
                        o(!1), r?.(e?.errorHints ?? []);
                    }
                }, [l, i, r, n, t]),
                startingConsoleQuest: l,
                errorHints: a,
            }
        );
    },
    ew = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ev(),
            i = eg(t),
            r = 0 === n.length;
        return (0, J.g5)(t) && r && !i;
    },
    eF = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ev(),
            n = e.length > 0,
            i = t.length > 0,
            r = P.A.getArticleURL(en.MVz.QUEST_HOW_TO_PLAYSTATION),
            a = P.A.getArticleURL(en.MVz.QUEST_HOW_TO_XBOX),
            s = er.intl.format(er.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: a }),
            _ = er.intl.format(er.t.HVS7nh, { helpdeskArticle: i ? r : a });
        return { message: (n && !i) || (!n && i) ? _ : s, xboxURL: a, playstationURL: r };
    };
var eV =
    (((a = {})[(a.UNACCEPTED = 0)] = "UNACCEPTED"),
    (a[(a.ACCEPTED = 1)] = "ACCEPTED"),
    (a[(a.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (a[(a.COMPLETED = 3)] = "COMPLETED"),
    (a[(a.CLAIMED = 4)] = "CLAIMED"),
    a);
function eH(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = eb(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
}
function ek(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, T.bG)([p.default], () => p.default.locale),
        { percentComplete: i } = eb(e),
        r = eU(e),
        a = null != r ? r.percentComplete : i,
        s = 100 * a,
        _ = null == r || t ? (0, y.l9)(n, a, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: a, percentComplete: s, completedRatioDisplay: _ };
}
function ex(e, t) {
    var n;
    let [i, r] =
            ((n = e.id),
            [(0, T.bG)([F.A], () => F.A.selectedTaskPlatform(n)), s.useCallback((e) => (0, w.lx)(n, e), [n])]),
        a = s.useMemo(() => (0, X.UR)(e), [e]),
        _ = a.includes(et.fO.DESKTOP),
        o = a.includes(et.fO.CONSOLE),
        d = eD(e),
        c = eh(e),
        u = s.useMemo(
            () =>
                (0, l.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: E.n.PLAY_ON_DESKTOP }, () => et.fO.DESKTOP)
                    .with({ taskType: E.n.PLAY_ACTIVITY }, () => et.fO.DESKTOP)
                    .with({ taskType: E.n.WATCH_VIDEO }, () => et.fO.DESKTOP)
                    .with({ taskType: E.n.WATCH_VIDEO_ON_MOBILE }, () => et.fO.DESKTOP)
                    .with({ taskType: E.n.STREAM_ON_DESKTOP }, () => et.fO.DESKTOP)
                    .with({ taskType: E.n.PLAY_ON_XBOX }, () => et.fO.CONSOLE)
                    .with({ taskType: E.n.PLAY_ON_PLAYSTATION }, () => et.fO.CONSOLE)
                    .with({ taskType: E.n.ACHIEVEMENT_IN_GAME }, () => et.fO.DESKTOP)
                    .with({ taskType: E.n.ACHIEVEMENT_IN_ACTIVITY }, () => et.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        I = d ? et.fO.DESKTOP : c ? et.fO.CONSOLE : null;
    return [
        s.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: u, currentProgressingPlatform: I, selectedPlatform: i })
                    .with({ currentProgressingPlatform: et.fO.CONSOLE }, () => V.X0.CONSOLE)
                    .with({ currentProgressingPlatform: et.fO.DESKTOP }, () => V.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: et.fO.CONSOLE }, () => V.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: et.fO.DESKTOP }, () => V.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: et.fO.CONSOLE,
                        },
                        () => V.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: et.fO.DESKTOP,
                        },
                        () => V.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (o && _ ? V.X0.SELECT : o ? V.X0.CONSOLE : V.X0.DESKTOP),
                    )
                    .exhaustive(),
            [o, _, u, I, i],
        ),
        a,
        r,
    ];
}
function eW(e) {
    let t = eU(e),
        n = eb(e),
        [i] = ex(e, n),
        r = eC(e),
        a = e.userStatus?.enrolledAt != null,
        s = e.userStatus?.completedAt != null,
        _ = E.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        o = a && !s && !r && null == t && (_ || (l && i === V.X0.DESKTOP)),
        d = (0, G.isWeb)() && o && !(0, X.W1)(e),
        c = (0, G.isMac)() && n.taskType === E.n.STREAM_ON_DESKTOP && o,
        u = [];
    return c && u.push(er.intl.string(er.t.MFGxFM)), d && u.push(er.intl.string(er.t.BV6xDm)), u;
}
function eY(e) {
    return (0, T.bG)([F.A], () => F.A.quests).get(e) ?? null;
}
function ej(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: r } = e,
        a = s.useRef(null);
    s.useEffect(() => {
        null != r &&
            a.current !== t &&
            ((0, Y.Mm)({ mode: t, prevMode: a.current, questContent: n, questId: r, sourceQuestContent: i }),
            (a.current = t));
    }, [r, n, t, i]),
        s.useEffect(() => {
            if (null != r)
                return () => {
                    (0, Y.Mm)({ mode: null, prevMode: a.current, questContent: n, questId: r, sourceQuestContent: i });
                };
        }, [r, n, i]);
}
function eK(e, t) {
    let n = (0, T.bG)([F.A], () => F.A.getQuest(e), [e]),
        i = (0, S.Ay)();
    return s.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, A.M)(i) ? en.NJ8.DARK : en.NJ8.LIGHT);
        return (0, x.tW)(n, x.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function e$(e) {
    let t = (0, z.mq)(e),
        n = (0, z.k5)(e),
        i = (0, z.$5)(e),
        r = (0, z.Y7)(e),
        a = (0, z.JX)(e),
        s = (0, T.bG)([h.default], () => h.default.getCurrentUser()),
        _ = (0, v.TW)(s, ei.PremiumTypes.TIER_2);
    if (null == n) return er.intl.formatToPlainString(er.t.l9uXL8, { decorationName: t });
    let l = er.intl.formatToPlainString(er.t.o97tNn, { rewardName: t }),
        o = er.intl.formatToPlainString(er.t.PkyRZo, { rewardName: t, expirationDate: i }),
        E = er.intl.formatToPlainString(er.t.ie4YK0, { rewardName: t, duration: n }),
        d = er.intl.formatToPlainString(er.t.yCpc0U, { duration: n, rewardName: t });
    return a
        ? r
            ? _
                ? l
                : E
            : _
              ? o
              : d
        : er.intl.formatToPlainString(er.t.tTlItm, { duration: n, decorationName: t });
}
function eQ(e) {
    let t = (0, J.TP)(e);
    return { launchInGameActivity: (0, N.A)({ applicationId: t }) };
}
let eq = () => (0, T.yK)([F.A], () => [...F.A.quests.values()]).some((e) => e.preview),
    eX = (e) => {
        let t = e?.userStatus != null && (0, Q.gO)(e.userStatus, V.uF.ACTIVITY_PANEL),
            n = eC(e ?? null),
            i = e?.userStatus?.claimedAt != null,
            r = (0, T.bG)([F.A], () => null != F.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !i && !r;
    },
    ez = () => {
        let e = (0, T.yK)([F.A], () => [...F.A.quests.values()]);
        return s.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eJ() {
    let e = et.pc;
    return s.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, $.fx)(t), options: n };
            }),
        [e],
    );
}
function eZ() {
    return s.useMemo(() => Object.keys(et.kL).map((e) => ({ label: (0, $.Js)(et.kL[e]), value: et.kL[e] })), []);
}
function e0(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        r = s.useRef(null),
        a = s.useRef(null);
    s.useEffect(() => {
        g.default.track(en.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: r.current }),
            (r.current = t);
    }, [t]),
        s.useEffect(() => {
            let e = n.map((e) => e.filter);
            g.default.track(en.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: a.current ?? [],
                num_quests_visible: i,
            }),
                (a.current = e);
        }, [n, i]);
}
let e1 = (e) => s.useMemo(() => h.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    e2 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e3(e) {
    let t = (0, T.bG)([F.A], () => F.A.quests);
    return s.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(U.Vq)
            .filter((e) => !(0, Q.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function e6() {
    let { enabled: e } = H.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [t, n] = s.useState(!0),
        [i, r] = s.useState(!0),
        [a, _] = s.useState(!1),
        [l, o] = s.useState(!1),
        { isFetching: E, questHomeHero: d } = (0, T.cf)([F.A], () => ({
            isFetching: F.A.isFetchingQuestHomeHero(),
            questHomeHero: F.A.getQuestHomeHero(),
        }));
    return (
        s.useEffect(() => {
            !(async function () {
                try {
                    e ? await (0, w.Am)() : await (0, w.Yf)();
                } catch (e) {
                    r(!1), _(!0);
                } finally {
                    n(!1);
                }
            })();
        }, [e]),
        s.useEffect(() => {
            !(async function () {
                try {
                    if (null == d) return;
                    let e = [d.heroImage, d.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(M.NN));
                } catch (e) {
                    o(!0);
                } finally {
                    r(!1);
                }
            })();
        }, [d]),
        { questHomeHero: a || l ? null : d, isLoading: t || E || i }
    );
}
function e5(e) {
    let t = m.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return s.useCallback(() => {
        if (n) return;
        let i = t ? I.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : I.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, C.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
