"use strict";
n.d(t, {
    $P: () => tt,
    BL: () => eV,
    C5: () => e0,
    Du: () => eY,
    F3: () => ez,
    FA: () => e3,
    H6: () => e1,
    I3: () => eF,
    In: () => eq,
    Iq: () => eC,
    L1: () => ey,
    LS: () => eb,
    NC: () => eS,
    Nb: () => e9,
    O9: () => eZ,
    Oq: () => eN,
    Qh: () => ev,
    Qo: () => eQ,
    RR: () => eK,
    S5: () => eL,
    SD: () => eR,
    UH: () => ts,
    UX: () => e$,
    Vn: () => ek,
    Wj: () => eW,
    XD: () => te,
    YW: () => eH,
    Yl: () => eD,
    ZP: () => eO,
    a5: () => e2,
    aC: () => eJ,
    do: () => ew,
    fc: () => eG,
    j$: () => ej,
    mL: () => er,
    nv: () => tn,
    oH: () => eB,
    p5: () => e5,
    pT: () => e8,
    sb: () => e7,
    vG: () => ti,
    zW: () => e6,
}),
    n(321073),
    n(801541);
var r = n(64700);
n(284009);
var i = n(735438),
    s = n(889137),
    a = n(412703),
    o = n(114046),
    l = n(440703),
    u = n(731355),
    c = n(517846),
    d = n(582754),
    _ = n(311907),
    f = n(736653),
    p = n(787389),
    h = n(183636),
    m = n(429913);
n(674658);
var E = n(493740),
    g = n(236698),
    A = n(773669),
    I = n(253932),
    T = n(734057),
    S = n(962173),
    y = n(287809),
    v = n(954571),
    C = n(927813),
    N = n(975571),
    R = n(515718),
    O = n(252424),
    b = n(723702),
    D = n(927578),
    L = n(178540),
    w = n(829219),
    M = n(859703),
    x = n(341915),
    P = n(245853),
    k = n(302654),
    U = n(807876),
    G = n(579473),
    F = n(971276),
    V = n(561844),
    B = n(590202),
    H = n(971649),
    j = n(651892),
    Y = n(710969),
    W = n(639214),
    K = n(901406),
    $ = n(92246),
    z = n(792620),
    q = n(814793),
    Z = n(753386),
    X = n(654487),
    Q = n(652215),
    J = n(788868),
    ee = n(985018);
let et = -1,
    en = 1;
function er() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, _.yK)([M.A], () => [...M.A.quests.values()]),
        s = (0, _.yK)([M.A], () => [...M.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: o } = (0, _.cf)([M.A], () => ({
            isFetchingCurrentQuests: M.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: M.A.lastFetchedCurrentQuests,
        })),
        l = (0, F.s)();
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !a
            ) {
                if ((n(!0), (0, w.N1)(), (0, b.isMac)() && "focused" !== h.A.getState())) return;
                let { enableNewRequestBehavior: t } = k.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, w.r8)(x.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, a, o, e.callerSource]),
        { quests: i, excludedQuests: s, isFetchingCurrentQuests: a, hasFetched: t }
    );
}
function ei(e, t, n, r) {
    let i = e.id === X.aJ,
        s = t.id === X.aJ,
        a = i && e.userStatus?.completedAt == null;
    if (a !== (s && t.userStatus?.completedAt == null)) return a ? et : en;
    let o = !(0, Y.Ic)(e),
        l = e.userStatus?.claimedAt != null,
        c = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        _ = t.userStatus?.enrolledAt != null,
        f = r === P.rE.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES ? 30 * C.A.Millis.MINUTE : 20 * C.A.Millis.MINUTE,
        p = tr(e, f),
        h = tr(t, f);
    if (o) {
        let { questHomeHero: i } = n,
            s = null != i && (0, q.I0)(i, e.id),
            a = null != i && (0, q.I0)(i, t.id);
        if (s !== a && (s || a)) return s ? et : en;
        if (r === P.rE.RANK_BASED_ON_QUEST_TYPE) {
            let n = (0, q.pv)(e.config),
                r = (0, q.pv)(t.config),
                i = (0, z.c1)(e),
                s = (0, z.c1)(t);
            if (i !== s && (i || s)) return i ? et : en;
            if (n !== r && (n === u.Z.VIDEO || r === u.Z.VIDEO)) return n === u.Z.VIDEO ? et : en;
        }
        return p !== h && (p || h)
            ? p
                ? en
                : et
            : l !== c
              ? l
                  ? en
                  : et
              : d !== _
                ? d
                    ? et
                    : en
                : eg(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return l !== c ? (l ? et : en) : d !== _ ? (d ? et : en) : eg(e.config.expiresAt, t.config.expiresAt, 0);
}
function es(e, t, n) {
    return eg(e.config.startsAt, t.config.startsAt, 0);
}
function ea(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? eg(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? et
          : null == r && null != i
            ? en
            : eg(r, i, 0);
}
function eo(e, t, n) {
    return eg(e.config.expiresAt, t.config.expiresAt, 1);
}
function el(e, t, n) {
    return function (r, i) {
        let s = !(0, Y.Ic)(r);
        return !(0, Y.Ic)(i) !== s ? (s ? et : en) : e(r, i, t, n);
    };
}
function eu(e) {
    switch (e) {
        case X.kL.MOST_RECENT:
            return es;
        case X.kL.RECENTLY_ENROLLED:
            return ea;
        case X.kL.EXPIRING_SOON:
            return eo;
        case X.kL.SUGGESTED:
        default:
            return ei;
    }
}
function ec(e, t) {
    switch (t) {
        case X.Pc.VIDEO:
            return (0, z.vv)(e);
        case X.Pc.PLAY:
            return (0, z.t)({ quest: e }) || (0, z.fE)({ quest: e }) || (0, z.vl)(e);
        default:
            return !1;
    }
}
function ed(e, t) {
    switch (t) {
        case X.BQ.VIRTUAL_CURRENCY:
            return (0, $.ks)(e.config);
        case X.BQ.COLLECTIBLE:
            return (0, $.tU)(e.config);
        case X.BQ.IN_GAME:
            return (0, $.HG)(e.config) || (0, $.r7)(e.config);
        default:
            return !1;
    }
}
function e_(e) {
    switch (e) {
        case "task":
            return ec;
        case "reward":
            return ed;
    }
}
function ef(e, t, n) {
    let r = e_(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function ep(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return ef(e, n, r);
        }),
    );
}
let eh = {},
    em = { questHomeHero: null };
function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : em,
        { sortMethod: r, filters: i } = t,
        s = (0, P.fV)() ?? void 0,
        a = null == i || 0 === i.length ? e : ep(e, i),
        o = el(eu(r), n, s);
    return a.sort(o);
}
function eg(e, t, n) {
    let r = 0 === n ? et : en;
    return e.localeCompare(t) * r;
}
function eA() {
    let e = (0, _.bG)([M.A], () => M.A.getQuestHomeHeroConfig());
    return r.useMemo(() => ({ questHomeHero: e }), [e]);
}
function eI(e, t) {
    let n = eA(),
        i = r.useRef([]),
        s = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0),
        l = r.useRef(n);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (
            i.current.length > 0 &&
            o.current === e.length &&
            s.current === t.sortMethod &&
            a.current === t.filters &&
            l.current === n
        )
            return i.current;
        let r = eE(e, t, n).map((e) => e.id);
        return (
            (i.current = r),
            (s.current = t.sortMethod),
            (a.current = t.filters),
            (o.current = e.length),
            (l.current = n),
            r
        );
    }, [e, t, n]);
}
function eT(e) {
    let t = r.useMemo(
            () =>
                e.filter((e) => {
                    let t = e.userStatus?.completedAt != null,
                        n = e.userStatus?.claimedAt != null;
                    return t && n;
                }),
            [e],
        ),
        n = r.useRef([]);
    return r.useMemo(() => {
        if (0 === t.length) return [];
        if (n.current.length > 0 && n.current.length === t.length) return n.current;
        let e = t
            .sort((e, t) => {
                let n = e.userStatus?.claimedAt == null;
                return n !== (t.userStatus?.claimedAt == null)
                    ? n
                        ? et
                        : en
                    : eg(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eS = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    ey = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function ev(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: s,
        } = er({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        a = new Map(n.map((e) => [e.id, e])),
        o = eI(n, t),
        l = eT(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = a.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: s };
}
function eC() {
    let e = r.useRef(!1),
        t = (0, _.yK)([M.A], () => Array.from(M.A.claimedQuests.values())),
        n = (0, _.bG)([M.A], () => M.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, w.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eN() {
    return (0, _.bG)([y.default], () => D.Ay.canUseQuestOrbMultiplier(y.default.getCurrentUser()));
}
function eR(e) {
    let t = eb(e);
    return (0, _.bG)([y.default], () => {
        let n = (0, $.ks)(e.config),
            r = (0, $.KK)(e.config),
            i = y.default.getCurrentUser();
        return !t && n && r && (!(0, D.YE)(i, J.PremiumTypes.TIER_2) || (0, E.RM)(E.G5, i));
    }, [t, e.config]);
}
function eO(e) {
    return (0, _.bG)([M.A], () => {
        let t = M.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === l.l.VIRTUAL_CURRENCY);
        if (n?.type !== l.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: r, orbQuantity: i } = n;
        return null == r || 0 === i ? null : Math.round((r / i) * 100) / 100;
    }, [e]);
}
function eb(e) {
    return (0, _.bG)([M.A], () => null != e && M.A.isQuestExpired(e.id), [e]);
}
function eD(e, t, n) {
    let r = (0, _.bG)([T.A], () => T.A.getChannel(t?.channelId) ?? null),
        i = (0, _.bG)([M.A], () => null != M.A.questEnrollmentBlockedUntil, []),
        s = (0, _.bG)([y.default], () => y.default.getCurrentUser()?.id) === n,
        a = (0, _.bG)([M.A], () => null != e && M.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, q.Ll)(t, r);
    return !o || !!l;
}
function eL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, _.bG)([A.default], () => A.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ew(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: s } = e,
        a = (0, H.go)();
    return r.useCallback(() => {
        t.id === X.Fw
            ? window.open(N.A.getArticleURL(Q.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, K.pu)(t, { content: n, ctaContent: i, impressionId: a, sourceQuestContent: s });
    }, [t, n, i, a, s]);
}
function eM(e) {
    return (0, _.bG)([M.A], () => M.A.isProgressingOnDesktop(e.id));
}
function ex(e) {
    return r.useMemo(() => (0, z.YL)(e), [e]);
}
function eP(e) {
    let t = (0, _.bG)([M.A], () => M.A.getOptimisticProgress(e.id, a.n.WATCH_VIDEO));
    return r.useMemo(() => (0, Z.J$)(e), [e, t]);
}
function ek(e) {
    let t = eM(e),
        n = ex(e),
        r = eP(e);
    return t || n || r;
}
let eU = 1,
    eG = (e) => {
        let t = r.useCallback(() => (0, z.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            s = r.useCallback(() => i(t()), [t]),
            a = ek(e);
        return (
            r.useEffect(() => {
                if (
                    e.userStatus?.enrolledAt == null ||
                    e.userStatus?.completedAt != null ||
                    e.userStatus?.claimedAt != null ||
                    !a
                )
                    return void s();
                let t = window.setInterval(() => {
                    s();
                }, C.A.Millis.SECOND * eU);
                return () => {
                    clearInterval(t), s();
                };
            }, [e, a, s]),
            n
        );
    };
function eF(e) {
    return r.useMemo(() => (0, z.JC)(e), [e]);
}
let eV = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eK({ quest: t }),
        s = (0, H.vU)();
    return () => {
        i
            ? (0, K.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: B.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, K.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: B.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eB(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, z.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, m.A)(t);
}
function eH(e) {
    let t = (0, _.bG)([M.A], () => M.A.quests),
        n = eB(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, q.$e)(t, X.zO);
            return (0, W.BM)(n, e);
        }, [e, t, n]);
    return eb(i) ? null : i;
}
function ej(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, w.Yb)(e),
            handleProgress: (t) => (0, w.Yb)(e, t),
            handleResetStatusClick: () => (0, w.UZ)(e),
            handleResetDismissibilityClick: () => (0, w.Gt)(e),
            handleOverrideDeliveryClick: () => (0, w.d6)(e),
        }),
        [e],
    );
}
function eY() {
    let { fetching: e, accounts: t } = (0, _.cf)([S.A], () => ({
            fetching: S.A.isFetching(),
            accounts: S.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: s,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === Q.fg2.XBOX),
                r = e.filter((e) => e.type === Q.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: s };
}
let eW = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: s } = e,
            [a, l] = r.useState([]),
            [u, c] = r.useState(!1),
            d = (0, _.bG)([S.A], () => S.A.getAccounts()),
            f = (0, L.O)((e) => e.clearErrorHintsByType);
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== o._.EXPIRED_CREDENTIAL)), f(t, o._.EXPIRED_CREDENTIAL);
            }, [d, f, t]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    i?.(), c(!0);
                    let e = null;
                    try {
                        (e = await (0, w.vD)(t, n)), l(e.errorHints);
                    } finally {
                        c(!1), s?.(e?.errorHints ?? []);
                    }
                }, [u, i, s, n, t]),
                startingConsoleQuest: u,
                errorHints: a,
            }
        );
    },
    eK = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eY(),
            r = ek(t),
            i = 0 === n.length;
        return (0, z.g5)(t) && i && !r;
    },
    e$ = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eY(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            s = N.A.getArticleURL(Q.MVz.QUEST_HOW_TO_PLAYSTATION),
            a = N.A.getArticleURL(Q.MVz.QUEST_HOW_TO_XBOX),
            o = ee.intl.format(ee.t.beN4DG, { psHelpdeskArticle: s, xboxHelpdeskArticle: a }),
            l = ee.intl.format(ee.t.HVS7nh, { helpdeskArticle: r ? s : a });
        return { message: i ? l : o, xboxURL: a, playstationURL: s };
    };
var ez = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eq(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = eG(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eZ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, _.bG)([A.default], () => A.default.locale),
        { percentComplete: r } = eG(e),
        i = eF(e),
        s = null != i ? i.percentComplete : r,
        a = 100 * s,
        o = null == i || t ? (0, O.l9)(n, s, { roundingMode: "floor" }) : `${i?.progress}/${i?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eX(e) {
    return [(0, _.bG)([M.A], () => M.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, w.lx)(e, t), [e])];
}
function eQ(e, t) {
    let [n, i] = eX(e.id),
        o = r.useMemo(() => (0, K.UR)(e), [e]),
        l = o.includes(X.fO.DESKTOP),
        u = o.includes(X.fO.CONSOLE),
        c = eM(e),
        d = ex(e),
        _ = r.useMemo(
            () =>
                (0, s.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP }, () => X.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ACTIVITY }, () => X.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO }, () => X.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO_ON_MOBILE }, () => X.fO.DESKTOP)
                    .with({ taskType: a.n.STREAM_ON_DESKTOP }, () => X.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_XBOX }, () => X.fO.CONSOLE)
                    .with({ taskType: a.n.PLAY_ON_PLAYSTATION }, () => X.fO.CONSOLE)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_GAME }, () => X.fO.DESKTOP)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_ACTIVITY }, () => X.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? X.fO.DESKTOP : d ? X.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, s.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: X.fO.CONSOLE }, () => x.X0.CONSOLE)
                    .with({ currentProgressingPlatform: X.fO.DESKTOP }, () => x.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: X.fO.CONSOLE }, () => x.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: X.fO.DESKTOP }, () => x.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: X.fO.CONSOLE,
                        },
                        () => x.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: X.fO.DESKTOP,
                        },
                        () => x.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && l ? x.X0.SELECT : u ? x.X0.CONSOLE : x.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, l, _, f, n],
        ),
        o,
        i,
    ];
}
function eJ(e) {
    let t = eF(e),
        n = eG(e),
        [r] = eQ(e, n),
        i = eb(e),
        s = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = a.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = s && !o && !i && l && (u || (c && r === x.X0.DESKTOP)),
        _ = (0, b.isWeb)() && d && !(0, K.W1)(e),
        f = (0, b.isMac)() && n.taskType === a.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push(ee.intl.string(ee.t.MFGxFM)), _ && p.push(ee.intl.string(ee.t.BV6xDm)), p;
}
function e0(e) {
    return (0, _.bG)([M.A], () => M.A.quests).get(e) ?? null;
}
function e1(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: s } = e,
        a = r.useRef(null);
    r.useEffect(() => {
        null != s &&
            a.current !== t &&
            ((0, V.Mm)({ mode: t, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i }),
            (a.current = t));
    }, [s, n, t, i]),
        r.useEffect(() => {
            if (null != s)
                return () => {
                    (0, V.Mm)({ mode: null, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i });
                };
        }, [s, n, i]);
}
function e2(e, t) {
    let n = (0, _.bG)([M.A], () => M.A.getQuest(e), [e]),
        i = (0, f.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, d.Mw)(i) ? Q.NJ8.DARK : Q.NJ8.LIGHT);
        return (0, G.tW)(n, G.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function e3(e) {
    let t = (0, $.mq)(e),
        n = (0, $.k5)(e),
        r = (0, $.$5)(e),
        i = (0, $.Y7)(e),
        s = (0, $.JX)(e),
        a = (0, _.bG)([y.default], () => y.default.getCurrentUser()),
        o = (0, D.TW)(a, J.PremiumTypes.TIER_2);
    if (null == n) return ee.intl.formatToPlainString(ee.t.l9uXL8, { decorationName: t });
    let l = ee.intl.formatToPlainString(ee.t.o97tNn, { rewardName: t }),
        u = ee.intl.formatToPlainString(ee.t.PkyRZo, { rewardName: t, expirationDate: r }),
        c = ee.intl.formatToPlainString(ee.t.ie4YK0, { rewardName: t, duration: n }),
        d = ee.intl.formatToPlainString(ee.t.yCpc0U, { duration: n, rewardName: t }),
        f = o ? l : c,
        p = o ? u : d,
        h = i ? f : p;
    return s ? h : ee.intl.formatToPlainString(ee.t.tTlItm, { duration: n, decorationName: t });
}
function e6(e) {
    let t = (0, z.TP)(e);
    return { launchInGameActivity: (0, p.A)({ applicationId: t }) };
}
let e4 = () => (0, _.yK)([M.A], () => [...M.A.quests.values()]).some((e) => e.preview),
    e5 = () => {
        let e = (0, U.U)({ location: X.rE.QUEST_PREVIEW_TOOL_2 }),
            t = e4();
        return e && t;
    },
    e7 = (e) => {
        let t = e?.userStatus != null && (0, Y.gO)(e.userStatus, x.uF.ACTIVITY_PANEL),
            n = eb(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, _.bG)([M.A], () => null != M.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    e8 = () => {
        let e = (0, _.yK)([M.A], () => [...M.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e9() {
    let e = X.pc;
    return r.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, j.fx)(t), options: n };
            }),
        [e],
    );
}
function te() {
    return r.useMemo(() => Object.keys(X.kL).map((e) => ({ label: (0, j.Js)(X.kL[e]), value: X.kL[e] })), []);
}
function tt(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        s = r.useRef(null),
        a = r.useRef(null);
    r.useEffect(() => {
        v.default.track(Q.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: s.current }),
            (s.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            v.default.track(Q.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: a.current ?? [],
                num_quests_visible: i,
            }),
                (a.current = e);
        }, [n, i]);
}
let tn = (e) => {
        let t = !1,
            n = r.useMemo(() => y.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    tr = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function ti() {
    let { enabled: e } = P.sn.useConfig({ location: X.rE.QUEST_HOME_DESKTOP }),
        { enabled: t } = P.rI.useConfig({ location: "useFetchQuestHomeHeroConfig" }),
        [n, i] = r.useState(e),
        [s, a] = r.useState(e),
        [o, l] = r.useState(!1),
        [u, c] = r.useState(!1),
        { isFetching: d, questHomeHeroConfig: f } = (0, _.cf)([M.A], () => ({
            isFetching: M.A.isFetchingQuestHomeHero(),
            questHomeHeroConfig: M.A.getQuestHomeHeroConfig(),
        })),
        p = r.useMemo(() => {
            if (!e || null == f) return null;
            let t = new Date(),
                n = new Date(f.startsAt),
                r = new Date(f.expiresAt);
            return t < n || t > r ? null : f;
        }, [e, f]);
    return (
        r.useEffect(() => {
            e && n();
            async function n() {
                try {
                    t ? await (0, w.Am)() : await (0, w.Yf)();
                } catch (e) {
                    a(!1), l(!0);
                } finally {
                    i(!1);
                }
            }
        }, [e, t]),
        r.useEffect(() => {
            !(async function () {
                try {
                    if (null == f) return;
                    await Promise.all([(0, R.NN)(f.assetHeroImage.url), (0, R.NN)(f.assetSponsorImage.url)]);
                } catch (e) {
                    c(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [f]),
        { questHomeHero: o || u ? null : p, isLoading: n || d || s }
    );
}
function ts(e) {
    let t = I.H1.useSetting();
    return r.useCallback(() => {
        let n = t ? c.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : c.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, g.hs)(n, { quest_id: e });
    }, [t, e]);
}
