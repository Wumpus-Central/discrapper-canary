"use strict";
n.d(t, {
    $P: () => tn,
    BL: () => eB,
    C5: () => e1,
    Du: () => eW,
    F3: () => eq,
    FA: () => e6,
    H6: () => e2,
    I3: () => eV,
    In: () => eZ,
    Iq: () => eC,
    L1: () => ev,
    LS: () => eD,
    NC: () => ey,
    Nb: () => te,
    O9: () => eX,
    Oq: () => eR,
    Qh: () => eN,
    Qo: () => eJ,
    RR: () => e$,
    S5: () => ew,
    SD: () => eO,
    UH: () => ta,
    UX: () => ez,
    Vn: () => eU,
    Wj: () => eK,
    XD: () => tt,
    YW: () => ej,
    Yl: () => eL,
    ZP: () => eb,
    a5: () => e3,
    aC: () => e0,
    do: () => eM,
    fc: () => eF,
    j$: () => eY,
    mL: () => ei,
    nv: () => tr,
    oH: () => eH,
    p5: () => e7,
    pT: () => e9,
    sb: () => e8,
    vG: () => ts,
    zW: () => e4,
}),
    n(321073),
    n(801541);
var r = n(64700);
n(284009);
var i = n(735438),
    s = n(889137),
    a = n(323889),
    o = n(412703),
    l = n(114046),
    u = n(440703),
    c = n(731355),
    d = n(517846),
    _ = n(582754),
    f = n(311907),
    p = n(736653),
    h = n(787389),
    m = n(183636),
    E = n(429913);
n(674658);
var g = n(493740),
    A = n(236698),
    I = n(773669),
    T = n(253932),
    S = n(734057),
    y = n(962173),
    v = n(287809),
    N = n(954571),
    C = n(927813),
    R = n(975571),
    O = n(515718),
    b = n(252424),
    D = n(723702),
    L = n(927578),
    w = n(178540),
    M = n(829219),
    x = n(859703),
    P = n(341915),
    k = n(245853),
    U = n(302654),
    G = n(807876),
    F = n(579473),
    V = n(971276),
    B = n(561844),
    H = n(590202),
    j = n(971649),
    Y = n(651892),
    W = n(710969),
    K = n(639214),
    $ = n(901406),
    z = n(92246),
    q = n(792620),
    Z = n(814793),
    X = n(753386),
    Q = n(654487),
    J = n(652215),
    ee = n(788868),
    et = n(985018);
let en = -1,
    er = 1;
function ei() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, f.yK)([x.A], () => [...x.A.quests.values()]),
        s = (0, f.yK)([x.A], () => [...x.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: o } = (0, f.cf)([x.A], () => ({
            isFetchingCurrentQuests: x.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: x.A.lastFetchedCurrentQuests,
        })),
        l = (0, V.s)();
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !a
            ) {
                if ((n(!0), (0, M.N1)(), (0, D.isMac)() && "focused" !== m.A.getState())) return;
                let { enableNewRequestBehavior: t } = U.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, M.r8)(P.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, a, o, e.callerSource]),
        { quests: i, excludedQuests: s, isFetchingCurrentQuests: a, hasFetched: t }
    );
}
function es(e, t, n, r) {
    let i = e.id === Q.aJ,
        s = t.id === Q.aJ,
        a = i && e.userStatus?.completedAt == null;
    if (a !== (s && t.userStatus?.completedAt == null)) return a ? en : er;
    let o = !(0, W.Ic)(e),
        l = e.userStatus?.claimedAt != null,
        u = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        _ = t.userStatus?.enrolledAt != null,
        f = r === k.rE.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES ? 30 * C.A.Millis.MINUTE : 20 * C.A.Millis.MINUTE,
        p = ti(e, f),
        h = ti(t, f);
    if (o) {
        let { questHomeHero: i } = n,
            s = null != i && (0, Z.I0)(i, e.id),
            a = null != i && (0, Z.I0)(i, t.id);
        if (s !== a && (s || a)) return s ? en : er;
        if (r === k.rE.RANK_BASED_ON_QUEST_TYPE) {
            let n = (0, Z.pv)(e.config),
                r = (0, Z.pv)(t.config),
                i = (0, q.c1)(e),
                s = (0, q.c1)(t);
            if (i !== s && (i || s)) return i ? en : er;
            if (n !== r && (n === c.Z.VIDEO || r === c.Z.VIDEO)) return n === c.Z.VIDEO ? en : er;
        }
        return p !== h && (p || h)
            ? p
                ? er
                : en
            : l !== u
              ? l
                  ? er
                  : en
              : d !== _
                ? d
                    ? en
                    : er
                : eA(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return l !== u ? (l ? en : er) : d !== _ ? (d ? en : er) : eA(e.config.expiresAt, t.config.expiresAt, 0);
}
function ea(e, t, n) {
    return eA(e.config.startsAt, t.config.startsAt, 0);
}
function eo(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? eA(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? en
          : null == r && null != i
            ? er
            : eA(r, i, 0);
}
function el(e, t, n) {
    return eA(e.config.expiresAt, t.config.expiresAt, 1);
}
function eu(e, t, n) {
    return function (r, i) {
        let s = !(0, W.Ic)(r);
        return !(0, W.Ic)(i) !== s ? (s ? en : er) : e(r, i, t, n);
    };
}
function ec(e) {
    switch (e) {
        case Q.kL.MOST_RECENT:
            return ea;
        case Q.kL.RECENTLY_ENROLLED:
            return eo;
        case Q.kL.EXPIRING_SOON:
            return el;
        case Q.kL.SUGGESTED:
        default:
            return es;
    }
}
function ed(e, t) {
    switch (t) {
        case Q.Pc.VIDEO:
            return (0, q.vv)(e);
        case Q.Pc.PLAY:
            return (0, q.t)({ quest: e }) || (0, q.fE)({ quest: e }) || (0, q.vl)(e);
        default:
            return !1;
    }
}
function e_(e, t) {
    switch (t) {
        case Q.BQ.VIRTUAL_CURRENCY:
            return (0, z.ks)(e.config);
        case Q.BQ.COLLECTIBLE:
            return (0, z.tU)(e.config);
        case Q.BQ.IN_GAME:
            return (0, z.HG)(e.config) || (0, z.r7)(e.config);
        default:
            return !1;
    }
}
function ef(e) {
    switch (e) {
        case "task":
            return ed;
        case "reward":
            return e_;
    }
}
function ep(e, t, n) {
    let r = ef(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function eh(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return ep(e, n, r);
        }),
    );
}
let em = {},
    eE = { questHomeHero: null };
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eE,
        { sortMethod: r, filters: i } = t,
        s = (0, k.fV)() ?? void 0,
        a = null == i || 0 === i.length ? e : eh(e, i),
        o = eu(ec(r), n, s);
    return a.sort(o);
}
function eA(e, t, n) {
    let r = 0 === n ? en : er;
    return e.localeCompare(t) * r;
}
function eI() {
    let e = (0, f.bG)([x.A], () => x.A.getQuestHomeHeroConfig());
    return r.useMemo(() => ({ questHomeHero: e }), [e]);
}
function eT(e, t) {
    let n = eI(),
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
        let r = eg(e, t, n).map((e) => e.id);
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
function eS(e) {
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
                        ? en
                        : er
                    : eA(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var ey = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    ev = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: s,
        } = ei({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        a = new Map(n.map((e) => [e.id, e])),
        o = eT(n, t),
        l = eS(n),
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
        t = (0, f.yK)([x.A], () => Array.from(x.A.claimedQuests.values())),
        n = (0, f.bG)([x.A], () => x.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, M.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eR() {
    return (0, f.bG)([v.default], () => L.Ay.canUseQuestOrbMultiplier(v.default.getCurrentUser()));
}
function eO(e) {
    let t = eD(e);
    return (0, f.bG)([v.default], () => {
        let n = (0, z.ks)(e.config),
            r = (0, z.KK)(e.config),
            i = v.default.getCurrentUser();
        return !t && n && r && (!(0, L.YE)(i, ee.PremiumTypes.TIER_2) || (0, g.RM)(g.G5, i));
    }, [t, e.config]);
}
function eb(e) {
    return (0, f.bG)([x.A], () => {
        let t = x.A.getQuest(e);
        if (null == t) return null;
        let n = t.config.rewardsConfig.rewards.find((e) => e.type === u.l.VIRTUAL_CURRENCY);
        if (n?.type !== u.l.VIRTUAL_CURRENCY) return null;
        let { premiumOrbQuantity: r, orbQuantity: i } = n;
        return null == r || 0 === i ? null : Math.round((r / i) * 100) / 100;
    }, [e]);
}
function eD(e) {
    return (0, f.bG)([x.A], () => null != e && x.A.isQuestExpired(e.id), [e]);
}
function eL(e, t, n) {
    let r = (0, f.bG)([S.A], () => S.A.getChannel(t?.channelId) ?? null),
        i = (0, f.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
        s = (0, f.bG)([v.default], () => v.default.getCurrentUser()?.id) === n,
        a = (0, f.bG)([x.A], () => null != e && x.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, Z.Ll)(t, r);
    return !o || !!l;
}
function ew(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, f.bG)([I.default], () => I.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eM(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: s } = e,
        a = (0, j.go)();
    return r.useCallback(() => {
        t.id === Q.Fw
            ? window.open(R.A.getArticleURL(J.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, $.pu)(t, { content: n, ctaContent: i, impressionId: a, sourceQuestContent: s });
    }, [t, n, i, a, s]);
}
function ex(e) {
    return (0, f.bG)([x.A], () => x.A.isProgressingOnDesktop(e.id));
}
function eP(e) {
    return r.useMemo(() => (0, q.YL)(e), [e]);
}
function ek(e) {
    let t = (0, f.bG)([x.A], () => x.A.getOptimisticProgress(e.id, o.n.WATCH_VIDEO));
    return r.useMemo(() => (0, X.J$)(e), [e, t]);
}
function eU(e) {
    let t = ex(e),
        n = eP(e),
        r = ek(e);
    return t || n || r;
}
let eG = 1,
    eF = (e) => {
        let t = r.useCallback(() => (0, q.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            s = r.useCallback(() => i(t()), [t]),
            a = eU(e);
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
                }, C.A.Millis.SECOND * eG);
                return () => {
                    clearInterval(t), s();
                };
            }, [e, a, s]),
            n
        );
    };
function eV(e) {
    return r.useMemo(() => (0, q.JC)(e), [e]);
}
let eB = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = e$({ quest: t }),
        s = (0, j.vU)();
    return () => {
        i
            ? (0, $.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: H.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, $.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: H.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eH(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, q.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, E.A)(t);
}
function ej(e) {
    let t = (0, f.bG)([x.A], () => x.A.quests),
        n = eH(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, Z.$e)(t, Q.zO);
            return (0, K.BM)(n, e);
        }, [e, t, n]);
    return eD(i) ? null : i;
}
function eY(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, M.Yb)(e),
            handleProgress: (t) => (0, M.Yb)(e, t),
            handleResetStatusClick: () => (0, M.UZ)(e),
            handleResetDismissibilityClick: () => (0, M.Gt)(e),
            handleOverrideDeliveryClick: () => (0, M.d6)(e),
            handleResetHasBeenSeenClick: () => (0, M.qV)(a.p.QUEST, [e]),
        }),
        [e],
    );
}
function eW() {
    let { fetching: e, accounts: t } = (0, f.cf)([y.A], () => ({
            fetching: y.A.isFetching(),
            accounts: y.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: s,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === J.fg2.XBOX),
                r = e.filter((e) => e.type === J.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: s };
}
let eK = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: s } = e,
            [a, o] = r.useState([]),
            [u, c] = r.useState(!1),
            d = (0, f.bG)([y.A], () => y.A.getAccounts()),
            _ = (0, w.O)((e) => e.clearErrorHintsByType);
        return (
            r.useEffect(() => {
                o((e) => e.filter((e) => e.type !== l._.EXPIRED_CREDENTIAL)), _(t, l._.EXPIRED_CREDENTIAL);
            }, [d, _, t]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    i?.(), c(!0);
                    let e = null;
                    try {
                        (e = await (0, M.vD)(t, n)), o(e.errorHints);
                    } finally {
                        c(!1), s?.(e?.errorHints ?? []);
                    }
                }, [u, i, s, n, t]),
                startingConsoleQuest: u,
                errorHints: a,
            }
        );
    },
    e$ = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eW(),
            r = eU(t),
            i = 0 === n.length;
        return (0, q.g5)(t) && i && !r;
    },
    ez = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eW(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            s = R.A.getArticleURL(J.MVz.QUEST_HOW_TO_PLAYSTATION),
            a = R.A.getArticleURL(J.MVz.QUEST_HOW_TO_XBOX),
            o = et.intl.format(et.t.beN4DG, { psHelpdeskArticle: s, xboxHelpdeskArticle: a }),
            l = et.intl.format(et.t.HVS7nh, { helpdeskArticle: r ? s : a });
        return { message: i ? l : o, xboxURL: a, playstationURL: s };
    };
var eq = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eZ(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = eF(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, f.bG)([I.default], () => I.default.locale),
        { percentComplete: r } = eF(e),
        i = eV(e),
        s = null != i ? i.percentComplete : r,
        a = 100 * s,
        o = null == i || t ? (0, b.l9)(n, s, { roundingMode: "floor" }) : `${i?.progress}/${i?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eQ(e) {
    return [(0, f.bG)([x.A], () => x.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, M.lx)(e, t), [e])];
}
function eJ(e, t) {
    let [n, i] = eQ(e.id),
        a = r.useMemo(() => (0, $.UR)(e), [e]),
        l = a.includes(Q.fO.DESKTOP),
        u = a.includes(Q.fO.CONSOLE),
        c = ex(e),
        d = eP(e),
        _ = r.useMemo(
            () =>
                (0, s.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.n.PLAY_ON_DESKTOP }, () => Q.fO.DESKTOP)
                    .with({ taskType: o.n.PLAY_ACTIVITY }, () => Q.fO.DESKTOP)
                    .with({ taskType: o.n.WATCH_VIDEO }, () => Q.fO.DESKTOP)
                    .with({ taskType: o.n.WATCH_VIDEO_ON_MOBILE }, () => Q.fO.DESKTOP)
                    .with({ taskType: o.n.STREAM_ON_DESKTOP }, () => Q.fO.DESKTOP)
                    .with({ taskType: o.n.PLAY_ON_XBOX }, () => Q.fO.CONSOLE)
                    .with({ taskType: o.n.PLAY_ON_PLAYSTATION }, () => Q.fO.CONSOLE)
                    .with({ taskType: o.n.ACHIEVEMENT_IN_GAME }, () => Q.fO.DESKTOP)
                    .with({ taskType: o.n.ACHIEVEMENT_IN_ACTIVITY }, () => Q.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? Q.fO.DESKTOP : d ? Q.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, s.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: Q.fO.CONSOLE }, () => P.X0.CONSOLE)
                    .with({ currentProgressingPlatform: Q.fO.DESKTOP }, () => P.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: Q.fO.CONSOLE }, () => P.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: Q.fO.DESKTOP }, () => P.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Q.fO.CONSOLE,
                        },
                        () => P.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Q.fO.DESKTOP,
                        },
                        () => P.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && l ? P.X0.SELECT : u ? P.X0.CONSOLE : P.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, l, _, f, n],
        ),
        a,
        i,
    ];
}
function e0(e) {
    let t = eV(e),
        n = eF(e),
        [r] = eJ(e, n),
        i = eD(e),
        s = e.userStatus?.enrolledAt != null,
        a = e.userStatus?.completedAt != null,
        l = null == t,
        u = o.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = s && !a && !i && l && (u || (c && r === P.X0.DESKTOP)),
        _ = (0, D.isWeb)() && d && !(0, $.W1)(e),
        f = (0, D.isMac)() && n.taskType === o.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push(et.intl.string(et.t.MFGxFM)), _ && p.push(et.intl.string(et.t.BV6xDm)), p;
}
function e1(e) {
    return (0, f.bG)([x.A], () => x.A.quests).get(e) ?? null;
}
function e2(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: s } = e,
        a = r.useRef(null);
    r.useEffect(() => {
        null != s &&
            a.current !== t &&
            ((0, B.Mm)({ mode: t, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i }),
            (a.current = t));
    }, [s, n, t, i]),
        r.useEffect(() => {
            if (null != s)
                return () => {
                    (0, B.Mm)({ mode: null, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i });
                };
        }, [s, n, i]);
}
function e3(e, t) {
    let n = (0, f.bG)([x.A], () => x.A.getQuest(e), [e]),
        i = (0, p.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, _.Mw)(i) ? J.NJ8.DARK : J.NJ8.LIGHT);
        return (0, F.tW)(n, F.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function e6(e) {
    let t = (0, z.mq)(e),
        n = (0, z.k5)(e),
        r = (0, z.$5)(e),
        i = (0, z.Y7)(e),
        s = (0, z.JX)(e),
        a = (0, f.bG)([v.default], () => v.default.getCurrentUser()),
        o = (0, L.TW)(a, ee.PremiumTypes.TIER_2);
    if (null == n) return et.intl.formatToPlainString(et.t.l9uXL8, { decorationName: t });
    let l = et.intl.formatToPlainString(et.t.o97tNn, { rewardName: t }),
        u = et.intl.formatToPlainString(et.t.PkyRZo, { rewardName: t, expirationDate: r }),
        c = et.intl.formatToPlainString(et.t.ie4YK0, { rewardName: t, duration: n }),
        d = et.intl.formatToPlainString(et.t.yCpc0U, { duration: n, rewardName: t }),
        _ = o ? l : c,
        p = o ? u : d,
        h = i ? _ : p;
    return s ? h : et.intl.formatToPlainString(et.t.tTlItm, { duration: n, decorationName: t });
}
function e4(e) {
    let t = (0, q.TP)(e);
    return { launchInGameActivity: (0, h.A)({ applicationId: t }) };
}
let e5 = () => (0, f.yK)([x.A], () => [...x.A.quests.values()]).some((e) => e.preview),
    e7 = () => {
        let e = (0, G.U)({ location: Q.rE.QUEST_PREVIEW_TOOL_2 }),
            t = e5();
        return e && t;
    },
    e8 = (e) => {
        let t = e?.userStatus != null && (0, W.gO)(e.userStatus, P.uF.ACTIVITY_PANEL),
            n = eD(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, f.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    e9 = () => {
        let e = (0, f.yK)([x.A], () => [...x.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function te() {
    let e = Q.pc;
    return r.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, Y.fx)(t), options: n };
            }),
        [e],
    );
}
function tt() {
    return r.useMemo(() => Object.keys(Q.kL).map((e) => ({ label: (0, Y.Js)(Q.kL[e]), value: Q.kL[e] })), []);
}
function tn(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        s = r.useRef(null),
        a = r.useRef(null);
    r.useEffect(() => {
        N.default.track(J.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: s.current }),
            (s.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            N.default.track(J.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: a.current ?? [],
                num_quests_visible: i,
            }),
                (a.current = e);
        }, [n, i]);
}
let tr = (e) => {
        let t = !1,
            n = r.useMemo(() => v.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    ti = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function ts() {
    let { enabled: e } = k.sn.useConfig({ location: Q.rE.QUEST_HOME_DESKTOP }),
        { enabled: t } = k.rI.useConfig({ location: "useFetchQuestHomeHeroConfig" }),
        [n, i] = r.useState(e),
        [s, a] = r.useState(e),
        [o, l] = r.useState(!1),
        [u, c] = r.useState(!1),
        { isFetching: d, questHomeHeroConfig: _ } = (0, f.cf)([x.A], () => ({
            isFetching: x.A.isFetchingQuestHomeHero(),
            questHomeHeroConfig: x.A.getQuestHomeHeroConfig(),
        })),
        p = r.useMemo(() => {
            if (!e || null == _) return null;
            let t = new Date(),
                n = new Date(_.startsAt),
                r = new Date(_.expiresAt);
            return t < n || t > r ? null : _;
        }, [e, _]);
    return (
        r.useEffect(() => {
            e && n();
            async function n() {
                try {
                    t ? await (0, M.Am)() : await (0, M.Yf)();
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
                    if (null == _) return;
                    await Promise.all([(0, O.NN)(_.assetHeroImage.url), (0, O.NN)(_.assetSponsorImage.url)]);
                } catch (e) {
                    c(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [_]),
        { questHomeHero: o || u ? null : p, isLoading: n || d || s }
    );
}
function ta(e) {
    let t = T.H1.useSetting();
    return r.useCallback(() => {
        let n = t ? d.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : d.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, A.hs)(n, { quest_id: e });
    }, [t, e]);
}
