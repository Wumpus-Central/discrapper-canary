"use strict";
n.d(t, {
    $P: () => e5,
    BL: () => eP,
    C5: () => eq,
    Du: () => eF,
    F3: () => ej,
    FA: () => eQ,
    H6: () => eZ,
    I3: () => ex,
    In: () => eY,
    Iq: () => ey,
    L1: () => eT,
    LS: () => ev,
    NC: () => eI,
    Nb: () => e6,
    O9: () => eW,
    Qh: () => eS,
    Qo: () => e$,
    RR: () => eB,
    S5: () => eC,
    UH: () => te,
    UX: () => eH,
    Vn: () => eL,
    Wj: () => eV,
    XD: () => e4,
    YW: () => eU,
    Yl: () => eN,
    a5: () => eX,
    aC: () => ez,
    do: () => eR,
    fc: () => eM,
    j$: () => eG,
    mL: () => et,
    nv: () => e7,
    oH: () => ek,
    p5: () => e1,
    pT: () => e3,
    sb: () => e2,
    vG: () => e9,
    zW: () => eJ,
}),
    n(321073),
    n(801541);
var r = n(64700);
n(284009);
var i = n(735438),
    s = n(889137),
    a = n(412703),
    o = n(114046);
n(440703);
var l = n(731355),
    u = n(517846),
    c = n(582754),
    d = n(311907),
    _ = n(736653),
    f = n(787389),
    p = n(183636),
    h = n(429913);
n(674658), n(493740);
var m = n(236698),
    E = n(773669),
    g = n(253932),
    A = n(734057),
    I = n(962173),
    T = n(287809),
    S = n(954571),
    y = n(927813),
    v = n(975571),
    N = n(515718),
    C = n(252424),
    R = n(723702),
    O = n(927578),
    b = n(178540),
    D = n(829219),
    L = n(859703),
    w = n(341915),
    M = n(245853),
    x = n(302654),
    P = n(807876),
    k = n(579473),
    U = n(971276),
    G = n(561844),
    F = n(590202),
    V = n(971649),
    B = n(651892),
    H = n(710969),
    j = n(639214),
    Y = n(901406),
    W = n(92246),
    K = n(792620),
    $ = n(814793),
    z = n(753386),
    q = n(654487),
    Z = n(652215),
    X = n(788868),
    Q = n(985018);
let J = -1,
    ee = 1;
function et() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, d.yK)([L.A], () => [...L.A.quests.values()]),
        s = (0, d.yK)([L.A], () => [...L.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: o } = (0, d.cf)([L.A], () => ({
            isFetchingCurrentQuests: L.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: L.A.lastFetchedCurrentQuests,
        })),
        l = (0, U.s)();
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !a
            ) {
                if ((n(!0), (0, D.N1)(), (0, R.isMac)() && "focused" !== p.A.getState())) return;
                let { enableNewRequestBehavior: t } = x.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, D.r8)(w.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, a, o, e.callerSource]),
        { quests: i, excludedQuests: s, isFetchingCurrentQuests: a, hasFetched: t }
    );
}
function en(e, t, n, r) {
    let i = e.id === q.aJ,
        s = t.id === q.aJ,
        a = i && e.userStatus?.completedAt == null;
    if (a !== (s && t.userStatus?.completedAt == null)) return a ? J : ee;
    let o = !(0, H.Ic)(e),
        u = e.userStatus?.claimedAt != null,
        c = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        _ = t.userStatus?.enrolledAt != null,
        f = r === M.rE.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES ? 30 * y.A.Millis.MINUTE : 20 * y.A.Millis.MINUTE,
        p = e8(e, f),
        h = e8(t, f);
    if (o) {
        let { questHomeHero: i } = n,
            s = null != i && (0, $.I0)(i, e.id),
            a = null != i && (0, $.I0)(i, t.id);
        if (s !== a && (s || a)) return s ? J : ee;
        if (r === M.rE.RANK_BASED_ON_QUEST_TYPE) {
            let n = (0, $.pv)(e.config),
                r = (0, $.pv)(t.config),
                i = (0, K.c1)(e),
                s = (0, K.c1)(t);
            if (i !== s && (i || s)) return i ? J : ee;
            if (n !== r && (n === l.Z.VIDEO || r === l.Z.VIDEO)) return n === l.Z.VIDEO ? J : ee;
        }
        return p !== h && (p || h)
            ? p
                ? ee
                : J
            : u !== c
              ? u
                  ? ee
                  : J
              : d !== _
                ? d
                    ? J
                    : ee
                : em(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return u !== c ? (u ? J : ee) : d !== _ ? (d ? J : ee) : em(e.config.expiresAt, t.config.expiresAt, 0);
}
function er(e, t, n) {
    return em(e.config.startsAt, t.config.startsAt, 0);
}
function ei(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? em(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? J
          : null == r && null != i
            ? ee
            : em(r, i, 0);
}
function es(e, t, n) {
    return em(e.config.expiresAt, t.config.expiresAt, 1);
}
function ea(e, t, n) {
    return function (r, i) {
        let s = !(0, H.Ic)(r);
        return !(0, H.Ic)(i) !== s ? (s ? J : ee) : e(r, i, t, n);
    };
}
function eo(e) {
    switch (e) {
        case q.kL.MOST_RECENT:
            return er;
        case q.kL.RECENTLY_ENROLLED:
            return ei;
        case q.kL.EXPIRING_SOON:
            return es;
        case q.kL.SUGGESTED:
        default:
            return en;
    }
}
function el(e, t) {
    switch (t) {
        case q.Pc.VIDEO:
            return (0, K.vv)(e);
        case q.Pc.PLAY:
            return (0, K.t)({ quest: e }) || (0, K.fE)({ quest: e }) || (0, K.vl)(e);
        default:
            return !1;
    }
}
function eu(e, t) {
    switch (t) {
        case q.BQ.VIRTUAL_CURRENCY:
            return (0, W.ks)(e.config);
        case q.BQ.COLLECTIBLE:
            return (0, W.tU)(e.config);
        case q.BQ.IN_GAME:
            return (0, W.HG)(e.config) || (0, W.r7)(e.config);
        default:
            return !1;
    }
}
function ec(e) {
    switch (e) {
        case "task":
            return el;
        case "reward":
            return eu;
    }
}
function ed(e, t, n) {
    let r = ec(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function e_(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return ed(e, n, r);
        }),
    );
}
let ef = {},
    ep = { questHomeHero: null };
function eh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ep,
        { sortMethod: r, filters: i } = t,
        s = (0, M.fV)() ?? void 0,
        a = null == i || 0 === i.length ? e : e_(e, i),
        o = ea(eo(r), n, s);
    return a.sort(o);
}
function em(e, t, n) {
    let r = 0 === n ? J : ee;
    return e.localeCompare(t) * r;
}
function eE() {
    let e = (0, d.bG)([L.A], () => L.A.getQuestHomeHeroConfig());
    return r.useMemo(() => ({ questHomeHero: e }), [e]);
}
function eg(e, t) {
    let n = eE(),
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
        let r = eh(e, t, n).map((e) => e.id);
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
function eA(e) {
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
                        ? J
                        : ee
                    : em(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eI = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eT = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: s,
        } = et({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        a = new Map(n.map((e) => [e.id, e])),
        o = eg(n, t),
        l = eA(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = a.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: s };
}
function ey() {
    let e = r.useRef(!1),
        t = (0, d.yK)([L.A], () => Array.from(L.A.claimedQuests.values())),
        n = (0, d.bG)([L.A], () => L.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, D.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function ev(e) {
    return (0, d.bG)([L.A], () => null != e && L.A.isQuestExpired(e.id), [e]);
}
function eN(e, t, n) {
    let r = (0, d.bG)([A.A], () => A.A.getChannel(t?.channelId) ?? null),
        i = (0, d.bG)([L.A], () => null != L.A.questEnrollmentBlockedUntil, []),
        s = (0, d.bG)([T.default], () => T.default.getCurrentUser()?.id) === n,
        a = (0, d.bG)([L.A], () => null != e && L.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, $.Ll)(t, r);
    return !o || !!l;
}
function eC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, d.bG)([E.default], () => E.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eR(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: s } = e,
        a = (0, V.go)();
    return r.useCallback(() => {
        t.id === q.Fw
            ? window.open(v.A.getArticleURL(Z.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, Y.pu)(t, { content: n, ctaContent: i, impressionId: a, sourceQuestContent: s });
    }, [t, n, i, a, s]);
}
function eO(e) {
    return (0, d.bG)([L.A], () => L.A.isProgressingOnDesktop(e.id));
}
function eb(e) {
    return r.useMemo(() => (0, K.YL)(e), [e]);
}
function eD(e) {
    let t = (0, d.bG)([L.A], () => L.A.getOptimisticProgress(e.id, a.n.WATCH_VIDEO));
    return r.useMemo(() => (0, z.J$)(e), [e, t]);
}
function eL(e) {
    let t = eO(e),
        n = eb(e),
        r = eD(e);
    return t || n || r;
}
let ew = 1,
    eM = (e) => {
        let t = r.useCallback(() => (0, K.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            s = r.useCallback(() => i(t()), [t]),
            a = eL(e);
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
                }, y.A.Millis.SECOND * ew);
                return () => {
                    clearInterval(t), s();
                };
            }, [e, a, s]),
            n
        );
    };
function ex(e) {
    return r.useMemo(() => (0, K.JC)(e), [e]);
}
let eP = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eB({ quest: t }),
        s = (0, V.vU)();
    return () => {
        i
            ? (0, Y.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: F.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, Y.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: F.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function ek(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, K.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, h.A)(t);
}
function eU(e) {
    let t = (0, d.bG)([L.A], () => L.A.quests),
        n = ek(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, $.$e)(t, q.zO);
            return (0, j.BM)(n, e);
        }, [e, t, n]);
    return ev(i) ? null : i;
}
function eG(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, D.Yb)(e),
            handleProgress: (t) => (0, D.Yb)(e, t),
            handleResetStatusClick: () => (0, D.UZ)(e),
            handleResetDismissibilityClick: () => (0, D.Gt)(e),
            handleOverrideDeliveryClick: () => (0, D.d6)(e),
        }),
        [e],
    );
}
function eF() {
    let { fetching: e, accounts: t } = (0, d.cf)([I.A], () => ({
            fetching: I.A.isFetching(),
            accounts: I.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: s,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === Z.fg2.XBOX),
                r = e.filter((e) => e.type === Z.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: s };
}
let eV = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: s } = e,
            [a, l] = r.useState([]),
            [u, c] = r.useState(!1),
            _ = (0, d.bG)([I.A], () => I.A.getAccounts()),
            f = (0, b.O)((e) => e.clearErrorHintsByType);
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== o._.EXPIRED_CREDENTIAL)), f(t, o._.EXPIRED_CREDENTIAL);
            }, [_, f, t]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    i?.(), c(!0);
                    let e = null;
                    try {
                        (e = await (0, D.vD)(t, n)), l(e.errorHints);
                    } finally {
                        c(!1), s?.(e?.errorHints ?? []);
                    }
                }, [u, i, s, n, t]),
                startingConsoleQuest: u,
                errorHints: a,
            }
        );
    },
    eB = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eF(),
            r = eL(t),
            i = 0 === n.length;
        return (0, K.g5)(t) && i && !r;
    },
    eH = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eF(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            s = v.A.getArticleURL(Z.MVz.QUEST_HOW_TO_PLAYSTATION),
            a = v.A.getArticleURL(Z.MVz.QUEST_HOW_TO_XBOX),
            o = Q.intl.format(Q.t.beN4DG, { psHelpdeskArticle: s, xboxHelpdeskArticle: a }),
            l = Q.intl.format(Q.t.HVS7nh, { helpdeskArticle: r ? s : a });
        return { message: i ? l : o, xboxURL: a, playstationURL: s };
    };
var ej = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eY(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = eM(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, d.bG)([E.default], () => E.default.locale),
        { percentComplete: r } = eM(e),
        i = ex(e),
        s = null != i ? i.percentComplete : r,
        a = 100 * s,
        o = null == i || t ? (0, C.l9)(n, s, { roundingMode: "floor" }) : `${i?.progress}/${i?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eK(e) {
    return [(0, d.bG)([L.A], () => L.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, D.lx)(e, t), [e])];
}
function e$(e, t) {
    let [n, i] = eK(e.id),
        o = r.useMemo(() => (0, Y.UR)(e), [e]),
        l = o.includes(q.fO.DESKTOP),
        u = o.includes(q.fO.CONSOLE),
        c = eO(e),
        d = eb(e),
        _ = r.useMemo(
            () =>
                (0, s.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP }, () => q.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP_V2 }, () => q.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ACTIVITY }, () => q.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO }, () => q.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO_ON_MOBILE }, () => q.fO.DESKTOP)
                    .with({ taskType: a.n.STREAM_ON_DESKTOP }, () => q.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_XBOX }, () => q.fO.CONSOLE)
                    .with({ taskType: a.n.PLAY_ON_PLAYSTATION }, () => q.fO.CONSOLE)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_GAME }, () => q.fO.DESKTOP)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_ACTIVITY }, () => q.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? q.fO.DESKTOP : d ? q.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, s.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: q.fO.CONSOLE }, () => w.X0.CONSOLE)
                    .with({ currentProgressingPlatform: q.fO.DESKTOP }, () => w.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: q.fO.CONSOLE }, () => w.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: q.fO.DESKTOP }, () => w.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: q.fO.CONSOLE,
                        },
                        () => w.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: q.fO.DESKTOP,
                        },
                        () => w.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && l ? w.X0.SELECT : u ? w.X0.CONSOLE : w.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, l, _, f, n],
        ),
        o,
        i,
    ];
}
function ez(e) {
    let t = ex(e),
        n = eM(e),
        [r] = e$(e, n),
        i = ev(e),
        s = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = a.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = s && !o && !i && l && (u || (c && r === w.X0.DESKTOP)),
        _ = (0, R.isWeb)() && d && !(0, Y.W1)(e),
        f = (0, R.isMac)() && n.taskType === a.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push(Q.intl.string(Q.t.MFGxFM)), _ && p.push(Q.intl.string(Q.t.BV6xDm)), p;
}
function eq(e) {
    return (0, d.bG)([L.A], () => L.A.quests).get(e) ?? null;
}
function eZ(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: s } = e,
        a = r.useRef(null);
    r.useEffect(() => {
        null != s &&
            a.current !== t &&
            ((0, G.Mm)({ mode: t, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i }),
            (a.current = t));
    }, [s, n, t, i]),
        r.useEffect(() => {
            if (null != s)
                return () => {
                    (0, G.Mm)({ mode: null, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i });
                };
        }, [s, n, i]);
}
function eX(e, t) {
    let n = (0, d.bG)([L.A], () => L.A.getQuest(e), [e]),
        i = (0, _.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, c.Mw)(i) ? Z.NJ8.DARK : Z.NJ8.LIGHT);
        return (0, k.tW)(n, k.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eQ(e) {
    let t = (0, W.mq)(e),
        n = (0, W.k5)(e),
        r = (0, W.$5)(e),
        i = (0, W.Y7)(e),
        s = (0, W.JX)(e),
        a = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        o = (0, O.TW)(a, X.PremiumTypes.TIER_2);
    if (null == n) return Q.intl.formatToPlainString(Q.t.l9uXL8, { decorationName: t });
    let l = Q.intl.formatToPlainString(Q.t.o97tNn, { rewardName: t }),
        u = Q.intl.formatToPlainString(Q.t.PkyRZo, { rewardName: t, expirationDate: r }),
        c = Q.intl.formatToPlainString(Q.t.ie4YK0, { rewardName: t, duration: n }),
        _ = Q.intl.formatToPlainString(Q.t.yCpc0U, { duration: n, rewardName: t }),
        f = o ? l : c,
        p = o ? u : _,
        h = i ? f : p;
    return s ? h : Q.intl.formatToPlainString(Q.t.tTlItm, { duration: n, decorationName: t });
}
function eJ(e) {
    let t = (0, K.TP)(e);
    return { launchInGameActivity: (0, f.A)({ applicationId: t }) };
}
let e0 = () => (0, d.yK)([L.A], () => [...L.A.quests.values()]).some((e) => e.preview),
    e1 = () => {
        let e = (0, P.U)({ location: q.rE.QUEST_PREVIEW_TOOL_2 }),
            t = e0();
        return e && t;
    },
    e2 = (e) => {
        let t = e?.userStatus != null && (0, H.gO)(e.userStatus, w.uF.ACTIVITY_PANEL),
            n = ev(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, d.bG)([L.A], () => null != L.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    e3 = () => {
        let e = (0, d.yK)([L.A], () => [...L.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e6() {
    let e = q.pc;
    return r.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, B.fx)(t), options: n };
            }),
        [e],
    );
}
function e4() {
    return r.useMemo(() => Object.keys(q.kL).map((e) => ({ label: (0, B.Js)(q.kL[e]), value: q.kL[e] })), []);
}
function e5(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        s = r.useRef(null),
        a = r.useRef(null);
    r.useEffect(() => {
        S.default.track(Z.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: s.current }),
            (s.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            S.default.track(Z.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: a.current ?? [],
                num_quests_visible: i,
            }),
                (a.current = e);
        }, [n, i]);
}
let e7 = (e) => {
        let t = !1,
            n = r.useMemo(() => T.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    e8 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e9() {
    let { enabled: e } = M.sn.useConfig({ location: q.rE.QUEST_HOME_DESKTOP }),
        { enabled: t } = M.rI.useConfig({ location: "useFetchQuestHomeHeroConfig" }),
        [n, i] = r.useState(e),
        [s, a] = r.useState(e),
        [o, l] = r.useState(!1),
        [u, c] = r.useState(!1),
        { isFetching: _, questHomeHeroConfig: f } = (0, d.cf)([L.A], () => ({
            isFetching: L.A.isFetchingQuestHomeHero(),
            questHomeHeroConfig: L.A.getQuestHomeHeroConfig(),
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
                    t ? await (0, D.Am)() : await (0, D.Yf)();
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
                    await Promise.all([(0, N.NN)(f.assetHeroImage.url), (0, N.NN)(f.assetSponsorImage.url)]);
                } catch (e) {
                    c(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [f]),
        { questHomeHero: o || u ? null : p, isLoading: n || _ || s }
    );
}
function te(e) {
    let t = g.H1.useSetting();
    return r.useCallback(() => {
        let n = t ? u.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : u.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, m.hs)(n, { quest_id: e });
    }, [t, e]);
}
