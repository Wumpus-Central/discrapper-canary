"use strict";
n.d(t, {
    $P: () => e9,
    BL: () => eG,
    C5: () => eQ,
    Du: () => eH,
    F3: () => eK,
    FA: () => e1,
    H6: () => eJ,
    I3: () => eU,
    In: () => e$,
    Iq: () => ev,
    L1: () => eS,
    LS: () => eR,
    NC: () => eT,
    Nb: () => e7,
    O9: () => ez,
    Oq: () => eC,
    Qh: () => ey,
    Qo: () => eZ,
    RR: () => eY,
    S5: () => eb,
    SD: () => eN,
    UH: () => tr,
    UX: () => eW,
    Vn: () => ex,
    Wj: () => ej,
    XD: () => e8,
    YW: () => eV,
    Yl: () => eO,
    a5: () => e0,
    aC: () => eX,
    do: () => eD,
    fc: () => ek,
    j$: () => eB,
    mL: () => en,
    nv: () => te,
    oH: () => eF,
    p5: () => e6,
    pT: () => e5,
    sb: () => e4,
    vG: () => tn,
    zW: () => e2,
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
n(674658);
var m = n(493740),
    E = n(236698),
    g = n(773669),
    A = n(253932),
    I = n(734057),
    T = n(962173),
    S = n(287809),
    y = n(954571),
    v = n(927813),
    C = n(975571),
    N = n(515718),
    R = n(252424),
    O = n(723702),
    b = n(927578),
    D = n(178540),
    L = n(829219),
    w = n(859703),
    M = n(341915),
    x = n(245853),
    P = n(302654),
    k = n(807876),
    U = n(579473),
    G = n(971276),
    F = n(561844),
    V = n(590202),
    B = n(971649),
    H = n(651892),
    j = n(710969),
    Y = n(639214),
    W = n(901406),
    K = n(92246),
    $ = n(792620),
    z = n(814793),
    q = n(753386),
    Z = n(654487),
    X = n(652215),
    Q = n(788868),
    J = n(985018);
let ee = -1,
    et = 1;
function en() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, d.yK)([w.A], () => [...w.A.quests.values()]),
        s = (0, d.yK)([w.A], () => [...w.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: o } = (0, d.cf)([w.A], () => ({
            isFetchingCurrentQuests: w.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: w.A.lastFetchedCurrentQuests,
        })),
        l = (0, G.s)();
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !a
            ) {
                if ((n(!0), (0, L.N1)(), (0, O.isMac)() && "focused" !== p.A.getState())) return;
                let { enableNewRequestBehavior: t } = P.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, L.r8)(M.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, a, o, e.callerSource]),
        { quests: i, excludedQuests: s, isFetchingCurrentQuests: a, hasFetched: t }
    );
}
function er(e, t, n, r) {
    let i = e.id === Z.aJ,
        s = t.id === Z.aJ,
        a = i && e.userStatus?.completedAt == null;
    if (a !== (s && t.userStatus?.completedAt == null)) return a ? ee : et;
    let o = !(0, j.Ic)(e),
        u = e.userStatus?.claimedAt != null,
        c = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        _ = t.userStatus?.enrolledAt != null,
        f = r === x.rE.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES ? 30 * v.A.Millis.MINUTE : 20 * v.A.Millis.MINUTE,
        p = tt(e, f),
        h = tt(t, f);
    if (o) {
        let { questHomeHero: i } = n,
            s = null != i && (0, z.I0)(i, e.id),
            a = null != i && (0, z.I0)(i, t.id);
        if (s !== a && (s || a)) return s ? ee : et;
        if (r === x.rE.RANK_BASED_ON_QUEST_TYPE) {
            let n = (0, z.pv)(e.config),
                r = (0, z.pv)(t.config),
                i = (0, $.c1)(e),
                s = (0, $.c1)(t);
            if (i !== s && (i || s)) return i ? ee : et;
            if (n !== r && (n === l.Z.VIDEO || r === l.Z.VIDEO)) return n === l.Z.VIDEO ? ee : et;
        }
        return p !== h && (p || h)
            ? p
                ? et
                : ee
            : u !== c
              ? u
                  ? et
                  : ee
              : d !== _
                ? d
                    ? ee
                    : et
                : eE(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return u !== c ? (u ? ee : et) : d !== _ ? (d ? ee : et) : eE(e.config.expiresAt, t.config.expiresAt, 0);
}
function ei(e, t, n) {
    return eE(e.config.startsAt, t.config.startsAt, 0);
}
function es(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? eE(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? ee
          : null == r && null != i
            ? et
            : eE(r, i, 0);
}
function ea(e, t, n) {
    return eE(e.config.expiresAt, t.config.expiresAt, 1);
}
function eo(e, t, n) {
    return function (r, i) {
        let s = !(0, j.Ic)(r);
        return !(0, j.Ic)(i) !== s ? (s ? ee : et) : e(r, i, t, n);
    };
}
function el(e) {
    switch (e) {
        case Z.kL.MOST_RECENT:
            return ei;
        case Z.kL.RECENTLY_ENROLLED:
            return es;
        case Z.kL.EXPIRING_SOON:
            return ea;
        case Z.kL.SUGGESTED:
        default:
            return er;
    }
}
function eu(e, t) {
    switch (t) {
        case Z.Pc.VIDEO:
            return (0, $.vv)(e);
        case Z.Pc.PLAY:
            return (0, $.t)({ quest: e }) || (0, $.fE)({ quest: e }) || (0, $.vl)(e);
        default:
            return !1;
    }
}
function ec(e, t) {
    switch (t) {
        case Z.BQ.VIRTUAL_CURRENCY:
            return (0, K.ks)(e.config);
        case Z.BQ.COLLECTIBLE:
            return (0, K.tU)(e.config);
        case Z.BQ.IN_GAME:
            return (0, K.HG)(e.config) || (0, K.r7)(e.config);
        default:
            return !1;
    }
}
function ed(e) {
    switch (e) {
        case "task":
            return eu;
        case "reward":
            return ec;
    }
}
function e_(e, t, n) {
    let r = ed(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function ef(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return e_(e, n, r);
        }),
    );
}
let ep = {},
    eh = { questHomeHero: null };
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eh,
        { sortMethod: r, filters: i } = t,
        s = (0, x.fV)() ?? void 0,
        a = null == i || 0 === i.length ? e : ef(e, i),
        o = eo(el(r), n, s);
    return a.sort(o);
}
function eE(e, t, n) {
    let r = 0 === n ? ee : et;
    return e.localeCompare(t) * r;
}
function eg() {
    let e = (0, d.bG)([w.A], () => w.A.getQuestHomeHeroConfig());
    return r.useMemo(() => ({ questHomeHero: e }), [e]);
}
function eA(e, t) {
    let n = eg(),
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
        let r = em(e, t, n).map((e) => e.id);
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
function eI(e) {
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
                        ? ee
                        : et
                    : eE(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eT = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eS = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function ey(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: s,
        } = en({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        a = new Map(n.map((e) => [e.id, e])),
        o = eA(n, t),
        l = eI(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = a.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: s };
}
function ev() {
    let e = r.useRef(!1),
        t = (0, d.yK)([w.A], () => Array.from(w.A.claimedQuests.values())),
        n = (0, d.bG)([w.A], () => w.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, L.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eC() {
    return (0, d.bG)([S.default], () => b.Ay.canUseQuestOrbMultiplier(S.default.getCurrentUser()));
}
function eN(e) {
    let t = eR(e);
    return (0, d.bG)([S.default], () => {
        let n = (0, K.ks)(e.config),
            r = (0, K.KK)(e.config),
            i = S.default.getCurrentUser();
        return !t && n && r && (!(0, b.YE)(i, Q.PremiumTypes.TIER_2) || (0, m.RM)(m.G5, i));
    }, [t, e.config]);
}
function eR(e) {
    return (0, d.bG)([w.A], () => null != e && w.A.isQuestExpired(e.id), [e]);
}
function eO(e, t, n) {
    let r = (0, d.bG)([I.A], () => I.A.getChannel(t?.channelId) ?? null),
        i = (0, d.bG)([w.A], () => null != w.A.questEnrollmentBlockedUntil, []),
        s = (0, d.bG)([S.default], () => S.default.getCurrentUser()?.id) === n,
        a = (0, d.bG)([w.A], () => null != e && w.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, z.Ll)(t, r);
    return !o || !!l;
}
function eb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, d.bG)([g.default], () => g.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eD(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: s } = e,
        a = (0, B.go)();
    return r.useCallback(() => {
        t.id === Z.Fw
            ? window.open(C.A.getArticleURL(X.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, W.pu)(t, { content: n, ctaContent: i, impressionId: a, sourceQuestContent: s });
    }, [t, n, i, a, s]);
}
function eL(e) {
    return (0, d.bG)([w.A], () => w.A.isProgressingOnDesktop(e.id));
}
function ew(e) {
    return r.useMemo(() => (0, $.YL)(e), [e]);
}
function eM(e) {
    let t = (0, d.bG)([w.A], () => w.A.getOptimisticProgress(e.id, a.n.WATCH_VIDEO));
    return r.useMemo(() => (0, q.J$)(e), [e, t]);
}
function ex(e) {
    let t = eL(e),
        n = ew(e),
        r = eM(e);
    return t || n || r;
}
let eP = 1,
    ek = (e) => {
        let t = r.useCallback(() => (0, $.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            s = r.useCallback(() => i(t()), [t]),
            a = ex(e);
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
                }, v.A.Millis.SECOND * eP);
                return () => {
                    clearInterval(t), s();
                };
            }, [e, a, s]),
            n
        );
    };
function eU(e) {
    return r.useMemo(() => (0, $.JC)(e), [e]);
}
let eG = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eY({ quest: t }),
        s = (0, B.vU)();
    return () => {
        i
            ? (0, W.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: V.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, W.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: V.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eF(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, $.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, h.A)(t);
}
function eV(e) {
    let t = (0, d.bG)([w.A], () => w.A.quests),
        n = eF(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, z.$e)(t, Z.zO);
            return (0, Y.BM)(n, e);
        }, [e, t, n]);
    return eR(i) ? null : i;
}
function eB(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, L.Yb)(e),
            handleProgress: (t) => (0, L.Yb)(e, t),
            handleResetStatusClick: () => (0, L.UZ)(e),
            handleResetDismissibilityClick: () => (0, L.Gt)(e),
            handleOverrideDeliveryClick: () => (0, L.d6)(e),
        }),
        [e],
    );
}
function eH() {
    let { fetching: e, accounts: t } = (0, d.cf)([T.A], () => ({
            fetching: T.A.isFetching(),
            accounts: T.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: s,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === X.fg2.XBOX),
                r = e.filter((e) => e.type === X.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: s };
}
let ej = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: s } = e,
            [a, l] = r.useState([]),
            [u, c] = r.useState(!1),
            _ = (0, d.bG)([T.A], () => T.A.getAccounts()),
            f = (0, D.O)((e) => e.clearErrorHintsByType);
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
                        (e = await (0, L.vD)(t, n)), l(e.errorHints);
                    } finally {
                        c(!1), s?.(e?.errorHints ?? []);
                    }
                }, [u, i, s, n, t]),
                startingConsoleQuest: u,
                errorHints: a,
            }
        );
    },
    eY = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eH(),
            r = ex(t),
            i = 0 === n.length;
        return (0, $.g5)(t) && i && !r;
    },
    eW = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eH(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            s = C.A.getArticleURL(X.MVz.QUEST_HOW_TO_PLAYSTATION),
            a = C.A.getArticleURL(X.MVz.QUEST_HOW_TO_XBOX),
            o = J.intl.format(J.t.beN4DG, { psHelpdeskArticle: s, xboxHelpdeskArticle: a }),
            l = J.intl.format(J.t.HVS7nh, { helpdeskArticle: r ? s : a });
        return { message: i ? l : o, xboxURL: a, playstationURL: s };
    };
var eK = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function e$(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = ek(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function ez(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, d.bG)([g.default], () => g.default.locale),
        { percentComplete: r } = ek(e),
        i = eU(e),
        s = null != i ? i.percentComplete : r,
        a = 100 * s,
        o = null == i || t ? (0, R.l9)(n, s, { roundingMode: "floor" }) : `${i?.progress}/${i?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eq(e) {
    return [(0, d.bG)([w.A], () => w.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, L.lx)(e, t), [e])];
}
function eZ(e, t) {
    let [n, i] = eq(e.id),
        o = r.useMemo(() => (0, W.UR)(e), [e]),
        l = o.includes(Z.fO.DESKTOP),
        u = o.includes(Z.fO.CONSOLE),
        c = eL(e),
        d = ew(e),
        _ = r.useMemo(
            () =>
                (0, s.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP }, () => Z.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP_V2 }, () => Z.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ACTIVITY }, () => Z.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO }, () => Z.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO_ON_MOBILE }, () => Z.fO.DESKTOP)
                    .with({ taskType: a.n.STREAM_ON_DESKTOP }, () => Z.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_XBOX }, () => Z.fO.CONSOLE)
                    .with({ taskType: a.n.PLAY_ON_PLAYSTATION }, () => Z.fO.CONSOLE)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_GAME }, () => Z.fO.DESKTOP)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_ACTIVITY }, () => Z.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? Z.fO.DESKTOP : d ? Z.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, s.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: Z.fO.CONSOLE }, () => M.X0.CONSOLE)
                    .with({ currentProgressingPlatform: Z.fO.DESKTOP }, () => M.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: Z.fO.CONSOLE }, () => M.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: Z.fO.DESKTOP }, () => M.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Z.fO.CONSOLE,
                        },
                        () => M.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Z.fO.DESKTOP,
                        },
                        () => M.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && l ? M.X0.SELECT : u ? M.X0.CONSOLE : M.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, l, _, f, n],
        ),
        o,
        i,
    ];
}
function eX(e) {
    let t = eU(e),
        n = ek(e),
        [r] = eZ(e, n),
        i = eR(e),
        s = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = a.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = s && !o && !i && l && (u || (c && r === M.X0.DESKTOP)),
        _ = (0, O.isWeb)() && d && !(0, W.W1)(e),
        f = (0, O.isMac)() && n.taskType === a.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push(J.intl.string(J.t.MFGxFM)), _ && p.push(J.intl.string(J.t.BV6xDm)), p;
}
function eQ(e) {
    return (0, d.bG)([w.A], () => w.A.quests).get(e) ?? null;
}
function eJ(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: s } = e,
        a = r.useRef(null);
    r.useEffect(() => {
        null != s &&
            a.current !== t &&
            ((0, F.Mm)({ mode: t, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i }),
            (a.current = t));
    }, [s, n, t, i]),
        r.useEffect(() => {
            if (null != s)
                return () => {
                    (0, F.Mm)({ mode: null, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i });
                };
        }, [s, n, i]);
}
function e0(e, t) {
    let n = (0, d.bG)([w.A], () => w.A.getQuest(e), [e]),
        i = (0, _.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, c.Mw)(i) ? X.NJ8.DARK : X.NJ8.LIGHT);
        return (0, U.tW)(n, U.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function e1(e) {
    let t = (0, K.mq)(e),
        n = (0, K.k5)(e),
        r = (0, K.$5)(e),
        i = (0, K.Y7)(e),
        s = (0, K.JX)(e),
        a = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
        o = (0, b.TW)(a, Q.PremiumTypes.TIER_2);
    if (null == n) return J.intl.formatToPlainString(J.t.l9uXL8, { decorationName: t });
    let l = J.intl.formatToPlainString(J.t.o97tNn, { rewardName: t }),
        u = J.intl.formatToPlainString(J.t.PkyRZo, { rewardName: t, expirationDate: r }),
        c = J.intl.formatToPlainString(J.t.ie4YK0, { rewardName: t, duration: n }),
        _ = J.intl.formatToPlainString(J.t.yCpc0U, { duration: n, rewardName: t }),
        f = o ? l : c,
        p = o ? u : _,
        h = i ? f : p;
    return s ? h : J.intl.formatToPlainString(J.t.tTlItm, { duration: n, decorationName: t });
}
function e2(e) {
    let t = (0, $.TP)(e);
    return { launchInGameActivity: (0, f.A)({ applicationId: t }) };
}
let e3 = () => (0, d.yK)([w.A], () => [...w.A.quests.values()]).some((e) => e.preview),
    e6 = () => {
        let e = (0, k.U)({ location: Z.rE.QUEST_PREVIEW_TOOL_2 }),
            t = e3();
        return e && t;
    },
    e4 = (e) => {
        let t = e?.userStatus != null && (0, j.gO)(e.userStatus, M.uF.ACTIVITY_PANEL),
            n = eR(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, d.bG)([w.A], () => null != w.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    e5 = () => {
        let e = (0, d.yK)([w.A], () => [...w.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e7() {
    let e = Z.pc;
    return r.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, H.fx)(t), options: n };
            }),
        [e],
    );
}
function e8() {
    return r.useMemo(() => Object.keys(Z.kL).map((e) => ({ label: (0, H.Js)(Z.kL[e]), value: Z.kL[e] })), []);
}
function e9(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        s = r.useRef(null),
        a = r.useRef(null);
    r.useEffect(() => {
        y.default.track(X.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: s.current }),
            (s.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            y.default.track(X.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: a.current ?? [],
                num_quests_visible: i,
            }),
                (a.current = e);
        }, [n, i]);
}
let te = (e) => {
        let t = !1,
            n = r.useMemo(() => S.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    tt = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function tn() {
    let { enabled: e } = x.sn.useConfig({ location: Z.rE.QUEST_HOME_DESKTOP }),
        { enabled: t } = x.rI.useConfig({ location: "useFetchQuestHomeHeroConfig" }),
        [n, i] = r.useState(e),
        [s, a] = r.useState(e),
        [o, l] = r.useState(!1),
        [u, c] = r.useState(!1),
        { isFetching: _, questHomeHeroConfig: f } = (0, d.cf)([w.A], () => ({
            isFetching: w.A.isFetchingQuestHomeHero(),
            questHomeHeroConfig: w.A.getQuestHomeHeroConfig(),
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
                    t ? await (0, L.Am)() : await (0, L.Yf)();
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
function tr(e) {
    let t = A.H1.useSetting();
    return r.useCallback(() => {
        let n = t ? u.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : u.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, E.hs)(n, { quest_id: e });
    }, [t, e]);
}
