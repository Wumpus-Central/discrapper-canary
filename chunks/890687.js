"use strict";
n.d(t, {
    $P: () => e0,
    BL: () => eL,
    C5: () => eY,
    Du: () => ex,
    F3: () => eF,
    FA: () => e$,
    H6: () => eW,
    I3: () => eD,
    In: () => eV,
    Iq: () => eg,
    L1: () => eE,
    LS: () => eS,
    NC: () => eh,
    Nb: () => eZ,
    O9: () => eB,
    Oq: () => eA,
    Qh: () => em,
    Qo: () => eH,
    RR: () => eU,
    S5: () => eN,
    SD: () => eI,
    UH: () => e4,
    UX: () => eG,
    Vn: () => eR,
    Wj: () => ek,
    XD: () => eJ,
    YW: () => eM,
    Yl: () => ey,
    ZP: () => eT,
    a5: () => eK,
    aC: () => ej,
    do: () => ev,
    fc: () => eb,
    j$: () => eP,
    lg: () => e6,
    mL: () => es,
    nv: () => e1,
    oH: () => ew,
    p5: () => eq,
    pT: () => eQ,
    sb: () => eX,
    t9: () => e3,
    zW: () => ez,
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
    c = n(412703),
    d = n(114046),
    _ = n(440703),
    f = n(731355),
    p = n(517846),
    h = n(462887),
    E = n(311907),
    m = n(736653),
    g = n(787389),
    A = n(183636),
    I = n(429913);
n(674658);
var T = n(493740),
    S = n(236698),
    y = n(773669),
    N = n(253932),
    v = n(734057),
    C = n(962173),
    O = n(287809),
    R = n(954571),
    b = n(927813),
    D = n(403362),
    L = n(975571),
    w = n(515718),
    M = n(252424),
    P = n(723702),
    x = n(927578);
n(845890), n(265704);
var k = n(178540),
    U = n(829219),
    G = n(859703),
    F = n(341915),
    V = n(245853),
    B = n(302654);
n(901882);
var H = n(579473),
    j = n(971276),
    Y = n(561844),
    W = n(590202),
    K = n(971649),
    $ = n(651892),
    z = n(710969),
    q = n(639214),
    X = n(901406),
    Q = n(92246),
    Z = n(792620),
    J = n(814793),
    ee = n(753386),
    et = n(654487),
    en = n(652215),
    er = n(788868),
    ei = n(985018);
function es() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = a.useState(!1),
        r = (0, E.yK)([G.A], () => [...G.A.quests.values()]),
        i = (0, E.yK)([G.A], () => [...G.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: o } = (0, E.cf)([G.A], () => ({
            isFetchingCurrentQuests: G.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: G.A.lastFetchedCurrentQuests,
        })),
        l = (0, j.s)();
    return (
        a.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !s
            ) {
                if ((n(!0), (0, U.N1)(), (0, P.isMac)() && "focused" !== A.A.getState())) return;
                let { enableNewRequestBehavior: t } = B.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, U.r8)(F.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: r, excludedQuests: i, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function ea(e, t, n, r) {
    let i = e.id === et.aJ,
        s = t.id === et.aJ,
        a = i && e.userStatus?.completedAt == null;
    if (a !== (s && t.userStatus?.completedAt == null)) return a ? -1 : 1;
    let o = !(0, z.Ic)(e),
        l = e.userStatus?.claimedAt != null,
        u = t.userStatus?.claimedAt != null,
        c = e.userStatus?.enrolledAt != null,
        d = t.userStatus?.enrolledAt != null,
        _ = r === V.rE.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES ? 30 * b.A.Millis.MINUTE : 20 * b.A.Millis.MINUTE,
        p = e2(e, _),
        h = e2(t, _);
    if (o) {
        let { questHomeHero: i } = n,
            s = null != i && (0, J.I0)(i, e.id),
            a = null != i && (0, J.I0)(i, t.id);
        if (s || a) {
            if (s && a) {
                let n = i?.questIds;
                if (null != n) return n.indexOf(e.id) - n.indexOf(t.id);
            }
            return s ? -1 : 1;
        }
        if (r === V.rE.RANK_BASED_ON_QUEST_TYPE) {
            let n = (0, J.pv)(e.config),
                r = (0, J.pv)(t.config),
                i = (0, Z.c1)(e),
                s = (0, Z.c1)(t);
            if (i !== s && (i || s)) return i ? -1 : 1;
            if (n !== r && (n === f.Z.VIDEO || r === f.Z.VIDEO)) return n === f.Z.VIDEO ? -1 : 1;
        }
        return p !== h && (p || h)
            ? p
                ? 1
                : -1
            : l !== u
              ? l
                  ? 1
                  : -1
              : c !== d
                ? c
                    ? -1
                    : 1
                : ep(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return l !== u ? (l ? -1 : 1) : c !== d ? (c ? -1 : 1) : ep(e.config.expiresAt, t.config.expiresAt, 0);
}
function eo(e, t, n) {
    return ep(e.config.startsAt, t.config.startsAt, 0);
}
function el(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? ep(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? -1
          : null == r && null != i
            ? 1
            : ep(r, i, 0);
}
function eu(e, t, n) {
    return ep(e.config.expiresAt, t.config.expiresAt, 1);
}
function ec(e, t) {
    switch (t) {
        case et.Pc.VIDEO:
            return (0, Z.vv)(e);
        case et.Pc.PLAY:
            return (0, Z.t)({ quest: e }) || (0, Z.fE)({ quest: e }) || (0, Z.vl)(e);
        default:
            return !1;
    }
}
function ed(e, t) {
    switch (t) {
        case et.BQ.VIRTUAL_CURRENCY:
            return (0, Q.ks)(e.config);
        case et.BQ.COLLECTIBLE:
            return (0, Q.tU)(e.config);
        case et.BQ.IN_GAME:
            return (0, Q.HG)(e.config) || (0, Q.r7)(e.config);
        default:
            return !1;
    }
}
let e_ = {},
    ef = { questHomeHero: null };
function ep(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
}
var eh = (((r = {}).ALL = "all"), (r.CLAIMED = "claimed"), (r.PREVIEW_TOOL = "preview_tool"), r),
    eE = (((i = {}).TAB = "tab"), (i.QUEST_ID = "quest_id"), (i.SORT = "sort"), (i.FILTER = "filter"), i);
function em(e) {
    let t,
        n,
        r,
        i,
        s,
        l,
        u,
        c,
        d,
        _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        {
            quests: f,
            excludedQuests: p,
            isFetchingCurrentQuests: h,
            hasFetched: m,
        } = es({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        g = new Map(f.map((e) => [e.id, e])),
        A =
            ((t = (0, E.bG)([G.A], () => G.A.getQuestHomeHero())),
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
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ef,
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
                                                              return ec;
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
                                    case et.kL.MOST_RECENT:
                                        return eo;
                                    case et.kL.RECENTLY_ENROLLED:
                                        return el;
                                    case et.kL.EXPIRING_SOON:
                                        return eu;
                                    case et.kL.SUGGESTED:
                                    default:
                                        return ea;
                                }
                            })(i)),
                            function (e, n) {
                                let i = !(0, z.Ic)(e);
                                return !(0, z.Ic)(n) !== i ? (i ? -1 : 1) : t(e, n, r, a);
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
            ((c = a.useMemo(
                () =>
                    f.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [f],
            )),
            (d = a.useRef([])),
            a.useMemo(() => {
                if (0 === c.length) return [];
                if (d.current.length > 0 && d.current.length === c.length) return d.current;
                let e = c
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? -1
                                : 1
                            : ep(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return (d.current = e), e;
            }, [c])),
        T = [];
    for (let t of "all" === e ? A : I) {
        let e = g.get(t);
        null != e && T.push(e);
    }
    return { quests: T, excludedQuests: p, isFetchingCurrentQuests: h, hasFetched: m };
}
function eg() {
    let e = a.useRef(!1),
        t = (0, E.yK)([G.A], () => Array.from(G.A.claimedQuests.values())),
        n = (0, E.bG)([G.A], () => G.A.isFetchingClaimedQuests);
    return (
        a.useEffect(() => {
            n || e.current || ((e.current = !0), (0, U.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eA() {
    return (0, E.bG)([O.default], () => x.Ay.canUseQuestOrbMultiplier(O.default.getCurrentUser()));
}
function eI(e) {
    let t = eS(e);
    return (0, E.bG)([O.default], () => {
        let n = (0, Q.ks)(e.config),
            r = (0, Q.KK)(e.config),
            i = O.default.getCurrentUser();
        return !t && n && r && (!(0, x.YE)(i, er.PremiumTypes.TIER_2) || (0, T.RM)(T.G5, i));
    }, [t, e.config]);
}
function eT(e) {
    return (0, E.bG)([G.A], () => {
        let t = G.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === _.l.VIRTUAL_CURRENCY);
        if (n?.type !== _.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: r, orbQuantity: i } = n;
        return null == r || 0 === i ? null : Math.round((r / i) * 100) / 100;
    }, [e]);
}
function eS(e) {
    return (0, E.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
}
function ey(e, t, n) {
    let r = (0, E.bG)([v.A], () => v.A.getChannel(t?.channelId) ?? null),
        i = (0, E.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []),
        s = (0, E.bG)([O.default], () => O.default.getCurrentUser()?.id),
        a = (0, E.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, J.Ll)(t, r);
    return !o || !!l;
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, E.bG)([y.default], () => y.default.locale);
    return a.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ev(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: i } = e,
        s = (0, K.go)();
    return a.useCallback(() => {
        t.id === et.Fw
            ? window.open(L.A.getArticleURL(en.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, X.pu)(t, { content: n, ctaContent: r, impressionId: s, sourceQuestContent: i });
    }, [t, n, r, s, i]);
}
function eC(e) {
    return (0, E.bG)([G.A], () => G.A.isProgressingOnDesktop(e.id));
}
function eO(e) {
    return a.useMemo(() => (0, Z.YL)(e), [e]);
}
function eR(e) {
    let t,
        n = eC(e),
        r = eO(e),
        i =
            ((t = (0, E.bG)([G.A], () => G.A.getOptimisticProgress(e.id, c.n.WATCH_VIDEO))),
            a.useMemo(() => (0, ee.J$)(e), [e, t]));
    return n || r || i;
}
let eb = (e) => {
    let t = a.useCallback(() => (0, Z.Yh)(e), [e]),
        [n, r] = a.useState(t()),
        i = a.useCallback(() => r(t()), [t]),
        s = eR(e);
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
function eD(e) {
    return a.useMemo(() => (0, Z.JC)(e), [e]);
}
let eL = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eU({ quest: t }),
        s = (0, K.vU)();
    return () => {
        i
            ? (0, X.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: W.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, X.b6)(
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
function ew(e) {
    let t = a.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, Z.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, I.A)(t);
}
function eM(e) {
    let t = (0, E.bG)([G.A], () => G.A.quests),
        n = ew(Array.from(t.values())),
        r = a.useMemo(() => {
            let n = (0, J.$e)(t, et.zO);
            return (0, q.BM)(n, e);
        }, [e, t, n]);
    return eS(r) ? null : r;
}
function eP(e) {
    return a.useMemo(
        () => ({
            handleComplete: () => (0, U.Yb)(e),
            handleProgress: (t) => (0, U.Yb)(e, t),
            handleResetStatusClick: () => (0, U.UZ)(e),
            handleResetDismissibilityClick: () => (0, U.Gt)(e),
            handleOverrideDeliveryClick: () => (0, U.d6)(e),
            handleResetHasBeenSeenClick: () => (0, U.qV)(u.p.QUEST, [e]),
        }),
        [e],
    );
}
function ex() {
    let { fetching: e, accounts: t } = (0, E.cf)([C.A], () => ({
            fetching: C.A.isFetching(),
            accounts: C.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: i,
        } = a.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === en.fg2.XBOX),
                r = e.filter((e) => e.type === en.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
}
let ek = (e) => {
        let { questId: t, preview: n, beforeRequest: r, afterRequest: i } = e,
            [s, o] = a.useState([]),
            [l, u] = a.useState(!1),
            c = (0, E.bG)([C.A], () => C.A.getAccounts()),
            _ = (0, k.O)((e) => e.clearErrorHintsByType);
        return (
            a.useEffect(() => {
                o((e) => e.filter((e) => e.type !== d._.EXPIRED_CREDENTIAL)), _(t, d._.EXPIRED_CREDENTIAL);
            }, [c, _, t]),
            {
                startConsoleQuest: a.useCallback(async () => {
                    if (l) return;
                    r?.(), u(!0);
                    let e = null;
                    try {
                        (e = await (0, U.vD)(t, n)), o(e.errorHints);
                    } finally {
                        u(!1), i?.(e?.errorHints ?? []);
                    }
                }, [l, r, i, n, t]),
                startingConsoleQuest: l,
                errorHints: s,
            }
        );
    },
    eU = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ex(),
            r = eR(t),
            i = 0 === n.length;
        return (0, Z.g5)(t) && i && !r;
    },
    eG = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ex(),
            n = e.length > 0,
            r = t.length > 0,
            i = L.A.getArticleURL(en.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = L.A.getArticleURL(en.MVz.QUEST_HOW_TO_XBOX),
            a = ei.intl.format(ei.t.beN4DG, { psHelpdeskArticle: i, xboxHelpdeskArticle: s }),
            o = ei.intl.format(ei.t.HVS7nh, { helpdeskArticle: r ? i : s });
        return { message: (n && !r) || (!n && r) ? o : a, xboxURL: s, playstationURL: i };
    };
var eF =
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
        i = eb(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, E.bG)([y.default], () => y.default.locale),
        { percentComplete: r } = eb(e),
        i = eD(e),
        s = null != i ? i.percentComplete : r,
        a = 100 * s,
        o = null == i || t ? (0, M.l9)(n, s, { roundingMode: "floor" }) : `${i?.progress}/${i?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eH(e, t) {
    var n;
    let [r, i] =
            ((n = e.id),
            [(0, E.bG)([G.A], () => G.A.selectedTaskPlatform(n)), a.useCallback((e) => (0, U.lx)(n, e), [n])]),
        s = a.useMemo(() => (0, X.UR)(e), [e]),
        o = s.includes(et.fO.DESKTOP),
        u = s.includes(et.fO.CONSOLE),
        d = eC(e),
        _ = eO(e),
        f = a.useMemo(
            () =>
                (0, l.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: c.n.PLAY_ON_DESKTOP }, () => et.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ACTIVITY }, () => et.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO }, () => et.fO.DESKTOP)
                    .with({ taskType: c.n.WATCH_VIDEO_ON_MOBILE }, () => et.fO.DESKTOP)
                    .with({ taskType: c.n.STREAM_ON_DESKTOP }, () => et.fO.DESKTOP)
                    .with({ taskType: c.n.PLAY_ON_XBOX }, () => et.fO.CONSOLE)
                    .with({ taskType: c.n.PLAY_ON_PLAYSTATION }, () => et.fO.CONSOLE)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_GAME }, () => et.fO.DESKTOP)
                    .with({ taskType: c.n.ACHIEVEMENT_IN_ACTIVITY }, () => et.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        p = d ? et.fO.DESKTOP : _ ? et.fO.CONSOLE : null;
    return [
        a.useMemo(
            () =>
                (0, l.YW)({ lastPlatformProgress: f, currentProgressingPlatform: p, selectedPlatform: r })
                    .with({ currentProgressingPlatform: et.fO.CONSOLE }, () => F.X0.CONSOLE)
                    .with({ currentProgressingPlatform: et.fO.DESKTOP }, () => F.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: et.fO.CONSOLE }, () => F.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: et.fO.DESKTOP }, () => F.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: et.fO.CONSOLE,
                        },
                        () => F.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: et.fO.DESKTOP,
                        },
                        () => F.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && o ? F.X0.SELECT : u ? F.X0.CONSOLE : F.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, o, f, p, r],
        ),
        s,
        i,
    ];
}
function ej(e) {
    let t = eD(e),
        n = eb(e),
        [r] = eH(e, n),
        i = eS(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        o = c.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        l = 0 === n.percentComplete,
        u = s && !a && !i && null == t && (o || (l && r === F.X0.DESKTOP)),
        d = (0, P.isWeb)() && u && !(0, X.W1)(e),
        _ = (0, P.isMac)() && n.taskType === c.n.STREAM_ON_DESKTOP && u,
        f = [];
    return _ && f.push(ei.intl.string(ei.t.MFGxFM)), d && f.push(ei.intl.string(ei.t.BV6xDm)), f;
}
function eY(e) {
    return (0, E.bG)([G.A], () => G.A.quests).get(e) ?? null;
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
function eK(e, t) {
    let n = (0, E.bG)([G.A], () => G.A.getQuest(e), [e]),
        r = (0, m.Ay)();
    return a.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, h.M)(r) ? en.NJ8.DARK : en.NJ8.LIGHT);
        return (0, H.tW)(n, H.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function e$(e) {
    let t = (0, Q.mq)(e),
        n = (0, Q.k5)(e),
        r = (0, Q.$5)(e),
        i = (0, Q.Y7)(e),
        s = (0, Q.JX)(e),
        a = (0, E.bG)([O.default], () => O.default.getCurrentUser()),
        o = (0, x.TW)(a, er.PremiumTypes.TIER_2);
    if (null == n) return ei.intl.formatToPlainString(ei.t.l9uXL8, { decorationName: t });
    let l = ei.intl.formatToPlainString(ei.t.o97tNn, { rewardName: t }),
        u = ei.intl.formatToPlainString(ei.t.PkyRZo, { rewardName: t, expirationDate: r }),
        c = ei.intl.formatToPlainString(ei.t.ie4YK0, { rewardName: t, duration: n }),
        d = ei.intl.formatToPlainString(ei.t.yCpc0U, { duration: n, rewardName: t });
    return s
        ? i
            ? o
                ? l
                : c
            : o
              ? u
              : d
        : ei.intl.formatToPlainString(ei.t.tTlItm, { duration: n, decorationName: t });
}
function ez(e) {
    let t = (0, Z.TP)(e);
    return { launchInGameActivity: (0, g.A)({ applicationId: t }) };
}
let eq = () => (0, E.yK)([G.A], () => [...G.A.quests.values()]).some((e) => e.preview),
    eX = (e) => {
        let t = e?.userStatus != null && (0, z.gO)(e.userStatus, F.uF.ACTIVITY_PANEL),
            n = eS(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, E.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    eQ = () => {
        let e = (0, E.yK)([G.A], () => [...G.A.quests.values()]);
        return a.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eZ() {
    let e = et.pc;
    return a.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, $.fx)(t), options: n };
            }),
        [e],
    );
}
function eJ() {
    return a.useMemo(() => Object.keys(et.kL).map((e) => ({ label: (0, $.Js)(et.kL[e]), value: et.kL[e] })), []);
}
function e0(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: r } = e,
        i = a.useRef(null),
        s = a.useRef(null);
    a.useEffect(() => {
        R.default.track(en.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: i.current }),
            (i.current = t);
    }, [t]),
        a.useEffect(() => {
            let e = n.map((e) => e.filter);
            R.default.track(en.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: s.current ?? [],
                num_quests_visible: r,
            }),
                (s.current = e);
        }, [n, r]);
}
let e1 = (e) => a.useMemo(() => O.default.getCurrentUser()?.isStaff() === !0, []) || e.preview,
    e2 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e3(e) {
    let t = (0, E.bG)([G.A], () => G.A.quests);
    return a.useMemo(() => {
        let n = (e.questIds ?? [])
            .map((e) => t.get(e))
            .filter(D.Vq)
            .filter((e) => !(0, z.Ic)(e));
        return n.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: n, isShelfEnabled: !0 };
    }, [t, e.questIds]);
}
function e6() {
    let { enabled: e } = V.rI.useConfig({ location: "useFetchQuestHomeHero" }),
        [t, n] = a.useState(!0),
        [r, i] = a.useState(!0),
        [s, o] = a.useState(!1),
        [l, u] = a.useState(!1),
        { isFetching: c, questHomeHero: d } = (0, E.cf)([G.A], () => ({
            isFetching: G.A.isFetchingQuestHomeHero(),
            questHomeHero: G.A.getQuestHomeHero(),
        }));
    return (
        a.useEffect(() => {
            !(async function () {
                try {
                    e ? await (0, U.Am)() : await (0, U.Yf)();
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
                    if (null == d) return;
                    let e = [d.heroImage, d.sponsorImage].filter((e) => null != e);
                    await Promise.all(e.map(w.NN));
                } catch (e) {
                    u(!0);
                } finally {
                    i(!1);
                }
            })();
        }, [d]),
        { questHomeHero: s || l ? null : d, isLoading: t || c || r }
    );
}
function e4(e) {
    let t = N.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return a.useCallback(() => {
        if (n) return;
        let r = t ? p.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : p.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, S.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
