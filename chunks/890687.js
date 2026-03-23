"use strict";
n.d(t, {
    $P: () => e4,
    BL: () => ex,
    C5: () => ez,
    Du: () => eG,
    F3: () => eH,
    FA: () => eX,
    H6: () => eq,
    I3: () => eM,
    In: () => ej,
    Iq: () => eS,
    L1: () => eI,
    LS: () => ey,
    NC: () => eA,
    Nb: () => e3,
    O9: () => eY,
    Qh: () => eT,
    Qo: () => eK,
    RR: () => eV,
    S5: () => eN,
    UH: () => e9,
    UX: () => eB,
    Vn: () => eD,
    Wj: () => eF,
    XD: () => e6,
    YW: () => ek,
    Yl: () => ev,
    a5: () => eZ,
    aC: () => e$,
    do: () => eC,
    fc: () => ew,
    j$: () => eU,
    mL: () => ee,
    nv: () => e5,
    oH: () => eP,
    p5: () => e0,
    pT: () => e2,
    sb: () => e1,
    vG: () => e8,
    zW: () => eQ,
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
var l = n(517846),
    u = n(582754),
    c = n(311907),
    d = n(736653),
    _ = n(787389),
    f = n(183636),
    p = n(429913);
n(674658), n(493740);
var h = n(236698),
    m = n(773669),
    E = n(253932),
    g = n(734057),
    A = n(962173),
    I = n(287809),
    T = n(954571),
    S = n(927813),
    y = n(975571),
    v = n(515718),
    N = n(252424),
    C = n(723702),
    R = n(927578),
    O = n(178540),
    b = n(829219),
    D = n(859703),
    L = n(341915),
    w = n(245853),
    M = n(302654),
    x = n(807876),
    P = n(579473),
    k = n(971276),
    U = n(561844),
    G = n(590202),
    F = n(971649),
    V = n(651892),
    B = n(710969),
    H = n(639214),
    j = n(901406),
    Y = n(92246),
    W = n(792620),
    K = n(814793),
    $ = n(753386),
    z = n(654487),
    q = n(652215),
    Z = n(788868),
    X = n(985018);
let Q = -1,
    J = 1;
function ee() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, c.yK)([D.A], () => [...D.A.quests.values()]),
        s = (0, c.yK)([D.A], () => [...D.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: o } = (0, c.cf)([D.A], () => ({
            isFetchingCurrentQuests: D.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: D.A.lastFetchedCurrentQuests,
        })),
        l = (0, k.s)();
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !a
            ) {
                if ((n(!0), (0, b.N1)(), (0, C.isMac)() && "focused" !== f.A.getState())) return;
                let { enableNewRequestBehavior: t } = M.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, b.r8)(L.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, a, o, e.callerSource]),
        { quests: i, excludedQuests: s, isFetchingCurrentQuests: a, hasFetched: t }
    );
}
function et(e, t, n) {
    let r = e.id === z.aJ,
        i = t.id === z.aJ,
        s = r && e.userStatus?.completedAt == null;
    if (s !== (i && t.userStatus?.completedAt == null)) return s ? Q : J;
    let a = !(0, B.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        d = 20 * S.A.Millis.MINUTE,
        _ = e7(e, d),
        f = e7(t, d);
    if (a) {
        let { questHomeHero: r } = n,
            i = null != r && (0, K.I0)(r, e.id),
            s = null != r && (0, K.I0)(r, t.id);
        return i !== s && (i || s)
            ? i
                ? Q
                : J
            : _ !== f && (_ || f)
              ? _
                  ? J
                  : Q
              : o !== l
                ? o
                    ? J
                    : Q
                : u !== c
                  ? u
                      ? Q
                      : J
                  : eh(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? Q : J) : u !== c ? (u ? Q : J) : eh(e.config.expiresAt, t.config.expiresAt, 0);
}
function en(e, t, n) {
    return eh(e.config.startsAt, t.config.startsAt, 0);
}
function er(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? eh(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? Q
          : null == r && null != i
            ? J
            : eh(r, i, 0);
}
function ei(e, t, n) {
    return eh(e.config.expiresAt, t.config.expiresAt, 1);
}
function es(e, t) {
    return function (n, r) {
        let i = !(0, B.Ic)(n);
        return !(0, B.Ic)(r) !== i ? (i ? Q : J) : e(n, r, t);
    };
}
function ea(e) {
    switch (e) {
        case z.kL.MOST_RECENT:
            return en;
        case z.kL.RECENTLY_ENROLLED:
            return er;
        case z.kL.EXPIRING_SOON:
            return ei;
        case z.kL.SUGGESTED:
        default:
            return et;
    }
}
function eo(e, t) {
    switch (t) {
        case z.Pc.VIDEO:
            return (0, W.vv)(e);
        case z.Pc.PLAY:
            return (0, W.t)({ quest: e }) || (0, W.fE)({ quest: e }) || (0, W.vl)(e);
        default:
            return !1;
    }
}
function el(e, t) {
    switch (t) {
        case z.BQ.VIRTUAL_CURRENCY:
            return (0, Y.ks)(e.config);
        case z.BQ.COLLECTIBLE:
            return (0, Y.tU)(e.config);
        case z.BQ.IN_GAME:
            return (0, Y.HG)(e.config) || (0, Y.r7)(e.config);
        default:
            return !1;
    }
}
function eu(e) {
    switch (e) {
        case "task":
            return eo;
        case "reward":
            return el;
    }
}
function ec(e, t, n) {
    let r = eu(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function ed(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return ec(e, n, r);
        }),
    );
}
let e_ = {},
    ef = { questHomeHero: null };
function ep(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ef,
        { sortMethod: r, filters: i } = t,
        s = null == i || 0 === i.length ? e : ed(e, i),
        a = es(ea(r), n);
    return s.sort(a);
}
function eh(e, t, n) {
    let r = 0 === n ? Q : J;
    return e.localeCompare(t) * r;
}
function em() {
    let e = (0, c.bG)([D.A], () => D.A.getQuestHomeHeroConfig());
    return r.useMemo(() => ({ questHomeHero: e }), [e]);
}
function eE(e, t) {
    let n = em(),
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
        let r = ep(e, t, n).map((e) => e.id);
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
function eg(e) {
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
                        ? Q
                        : J
                    : eh(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eA = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eI = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: s,
        } = ee({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        a = new Map(n.map((e) => [e.id, e])),
        o = eE(n, t),
        l = eg(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = a.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: s };
}
function eS() {
    let e = r.useRef(!1),
        t = (0, c.yK)([D.A], () => Array.from(D.A.claimedQuests.values())),
        n = (0, c.bG)([D.A], () => D.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, b.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function ey(e) {
    return (0, c.bG)([D.A], () => null != e && D.A.isQuestExpired(e.id), [e]);
}
function ev(e, t, n) {
    let r = (0, c.bG)([g.A], () => g.A.getChannel(t?.channelId) ?? null),
        i = (0, c.bG)([D.A], () => null != D.A.questEnrollmentBlockedUntil, []),
        s = (0, c.bG)([I.default], () => I.default.getCurrentUser()?.id) === n,
        a = (0, c.bG)([D.A], () => null != e && D.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, K.Ll)(t, r);
    return !o || !!l;
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.bG)([m.default], () => m.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eC(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: s } = e,
        a = (0, F.go)();
    return r.useCallback(() => {
        t.id === z.Fw
            ? window.open(y.A.getArticleURL(q.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, j.pu)(t, { content: n, ctaContent: i, impressionId: a, sourceQuestContent: s });
    }, [t, n, i, a, s]);
}
function eR(e) {
    return (0, c.bG)([D.A], () => D.A.isProgressingOnDesktop(e.id));
}
function eO(e) {
    return r.useMemo(() => (0, W.YL)(e), [e]);
}
function eb(e) {
    let t = (0, c.bG)([D.A], () => D.A.getOptimisticProgress(e.id, a.n.WATCH_VIDEO));
    return r.useMemo(() => (0, $.J$)(e), [e, t]);
}
function eD(e) {
    let t = eR(e),
        n = eO(e),
        r = eb(e);
    return t || n || r;
}
let eL = 1,
    ew = (e) => {
        let t = r.useCallback(() => (0, W.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            s = r.useCallback(() => i(t()), [t]),
            a = eD(e);
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
                }, S.A.Millis.SECOND * eL);
                return () => {
                    clearInterval(t), s();
                };
            }, [e, a, s]),
            n
        );
    };
function eM(e) {
    return r.useMemo(() => (0, W.JC)(e), [e]);
}
let ex = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eV({ quest: t }),
        s = (0, F.vU)();
    return () => {
        i
            ? (0, j.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: G.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, j.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: G.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eP(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, W.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, p.A)(t);
}
function ek(e) {
    let t = (0, c.bG)([D.A], () => D.A.quests),
        n = eP(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, K.$e)(t, z.zO);
            return (0, H.BM)(n, e);
        }, [e, t, n]);
    return ey(i) ? null : i;
}
function eU(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, b.Yb)(e),
            handleProgress: (t) => (0, b.Yb)(e, t),
            handleResetStatusClick: () => (0, b.UZ)(e),
            handleResetDismissibilityClick: () => (0, b.Gt)(e),
            handleOverrideDeliveryClick: () => (0, b.d6)(e),
        }),
        [e],
    );
}
function eG() {
    let { fetching: e, accounts: t } = (0, c.cf)([A.A], () => ({
            fetching: A.A.isFetching(),
            accounts: A.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: s,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === q.fg2.XBOX),
                r = e.filter((e) => e.type === q.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: s };
}
let eF = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: s } = e,
            [a, l] = r.useState([]),
            [u, d] = r.useState(!1),
            _ = (0, c.bG)([A.A], () => A.A.getAccounts()),
            f = (0, O.O)((e) => e.clearErrorHintsByType);
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== o._.EXPIRED_CREDENTIAL)), f(t, o._.EXPIRED_CREDENTIAL);
            }, [_, f, t]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    i?.(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, b.vD)(t, n)), l(e.errorHints);
                    } finally {
                        d(!1), s?.(e?.errorHints ?? []);
                    }
                }, [u, i, s, n, t]),
                startingConsoleQuest: u,
                errorHints: a,
            }
        );
    },
    eV = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eG(),
            r = eD(t),
            i = 0 === n.length;
        return (0, W.g5)(t) && i && !r;
    },
    eB = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eG(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            s = y.A.getArticleURL(q.MVz.QUEST_HOW_TO_PLAYSTATION),
            a = y.A.getArticleURL(q.MVz.QUEST_HOW_TO_XBOX),
            o = X.intl.format(X.t.beN4DG, { psHelpdeskArticle: s, xboxHelpdeskArticle: a }),
            l = X.intl.format(X.t.HVS7nh, { helpdeskArticle: r ? s : a });
        return { message: i ? l : o, xboxURL: a, playstationURL: s };
    };
var eH = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function ej(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = ew(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, c.bG)([m.default], () => m.default.locale),
        { percentComplete: r } = ew(e),
        i = eM(e),
        s = null != i ? i.percentComplete : r,
        a = 100 * s,
        o = null == i || t ? (0, N.l9)(n, s, { roundingMode: "floor" }) : `${i?.progress}/${i?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eW(e) {
    return [(0, c.bG)([D.A], () => D.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, b.lx)(e, t), [e])];
}
function eK(e, t) {
    let [n, i] = eW(e.id),
        o = r.useMemo(() => (0, j.UR)(e), [e]),
        l = o.includes(z.fO.DESKTOP),
        u = o.includes(z.fO.CONSOLE),
        c = eR(e),
        d = eO(e),
        _ = r.useMemo(
            () =>
                (0, s.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP }, () => z.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP_V2 }, () => z.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ACTIVITY }, () => z.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO }, () => z.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO_ON_MOBILE }, () => z.fO.DESKTOP)
                    .with({ taskType: a.n.STREAM_ON_DESKTOP }, () => z.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_XBOX }, () => z.fO.CONSOLE)
                    .with({ taskType: a.n.PLAY_ON_PLAYSTATION }, () => z.fO.CONSOLE)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_GAME }, () => z.fO.DESKTOP)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_ACTIVITY }, () => z.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? z.fO.DESKTOP : d ? z.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, s.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: z.fO.CONSOLE }, () => L.X0.CONSOLE)
                    .with({ currentProgressingPlatform: z.fO.DESKTOP }, () => L.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: z.fO.CONSOLE }, () => L.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: z.fO.DESKTOP }, () => L.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: z.fO.CONSOLE,
                        },
                        () => L.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: z.fO.DESKTOP,
                        },
                        () => L.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && l ? L.X0.SELECT : u ? L.X0.CONSOLE : L.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, l, _, f, n],
        ),
        o,
        i,
    ];
}
function e$(e) {
    let t = eM(e),
        n = ew(e),
        [r] = eK(e, n),
        i = ey(e),
        s = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = a.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = s && !o && !i && l && (u || (c && r === L.X0.DESKTOP)),
        _ = (0, C.isWeb)() && d && !(0, j.W1)(e),
        f = (0, C.isMac)() && n.taskType === a.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push(X.intl.string(X.t.MFGxFM)), _ && p.push(X.intl.string(X.t.BV6xDm)), p;
}
function ez(e) {
    return (0, c.bG)([D.A], () => D.A.quests).get(e) ?? null;
}
function eq(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: s } = e,
        a = r.useRef(null);
    r.useEffect(() => {
        null != s &&
            a.current !== t &&
            ((0, U.Mm)({ mode: t, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i }),
            (a.current = t));
    }, [s, n, t, i]),
        r.useEffect(() => {
            if (null != s)
                return () => {
                    (0, U.Mm)({ mode: null, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i });
                };
        }, [s, n, i]);
}
function eZ(e, t) {
    let n = (0, c.bG)([D.A], () => D.A.getQuest(e), [e]),
        i = (0, d.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, u.Mw)(i) ? q.NJ8.DARK : q.NJ8.LIGHT);
        return (0, P.tW)(n, P.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eX(e) {
    let t = (0, Y.mq)(e),
        n = (0, Y.k5)(e),
        r = (0, Y.$5)(e),
        i = (0, Y.Y7)(e),
        s = (0, Y.JX)(e),
        a = (0, c.bG)([I.default], () => I.default.getCurrentUser()),
        o = (0, R.TW)(a, Z.PremiumTypes.TIER_2);
    if (null == n) return X.intl.formatToPlainString(X.t.l9uXL8, { decorationName: t });
    let l = X.intl.formatToPlainString(X.t.o97tNn, { rewardName: t }),
        u = X.intl.formatToPlainString(X.t.PkyRZo, { rewardName: t, expirationDate: r }),
        d = X.intl.formatToPlainString(X.t.ie4YK0, { rewardName: t, duration: n }),
        _ = X.intl.formatToPlainString(X.t.yCpc0U, { duration: n, rewardName: t }),
        f = o ? l : d,
        p = o ? u : _,
        h = i ? f : p;
    return s ? h : X.intl.formatToPlainString(X.t.tTlItm, { duration: n, decorationName: t });
}
function eQ(e) {
    let t = (0, W.TP)(e);
    return { launchInGameActivity: (0, _.A)({ applicationId: t }) };
}
let eJ = () => (0, c.yK)([D.A], () => [...D.A.quests.values()]).some((e) => e.preview),
    e0 = () => {
        let e = (0, x.U)({ location: z.rE.QUEST_PREVIEW_TOOL_2 }),
            t = eJ();
        return e && t;
    },
    e1 = (e) => {
        let t = e?.userStatus != null && (0, B.gO)(e.userStatus, L.uF.ACTIVITY_PANEL),
            n = ey(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, c.bG)([D.A], () => null != D.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    e2 = () => {
        let e = (0, c.yK)([D.A], () => [...D.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e3() {
    return r.useMemo(
        () =>
            z.pc.map((e) => {
                let [t, n] = e;
                return { heading: (0, V.fx)(t), options: n };
            }),
        [],
    );
}
function e6() {
    return r.useMemo(() => Object.keys(z.kL).map((e) => ({ label: (0, V.Js)(z.kL[e]), value: z.kL[e] })), []);
}
function e4(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        s = r.useRef(null),
        a = r.useRef(null);
    r.useEffect(() => {
        T.default.track(q.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: s.current }),
            (s.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            T.default.track(q.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: a.current ?? [],
                num_quests_visible: i,
            }),
                (a.current = e);
        }, [n, i]);
}
let e5 = (e) => {
        let t = !1,
            n = r.useMemo(() => I.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    e7 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e8() {
    let { enabled: e } = w.sn.useConfig({ location: z.rE.QUEST_HOME_DESKTOP }),
        { enabled: t } = w.rI.useConfig({ location: "useFetchQuestHomeHeroConfig" }),
        [n, i] = r.useState(e),
        [s, a] = r.useState(e),
        [o, l] = r.useState(!1),
        [u, d] = r.useState(!1),
        { isFetching: _, questHomeHeroConfig: f } = (0, c.cf)([D.A], () => ({
            isFetching: D.A.isFetchingQuestHomeHero(),
            questHomeHeroConfig: D.A.getQuestHomeHeroConfig(),
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
                    t ? await (0, b.Am)() : await (0, b.Yf)();
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
                    await Promise.all([(0, v.NN)(f.assetHeroImage.url), (0, v.NN)(f.assetSponsorImage.url)]);
                } catch (e) {
                    d(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [f]),
        { questHomeHero: o || u ? null : p, isLoading: n || _ || s }
    );
}
function e9(e) {
    let t = E.H1.useSetting();
    return r.useCallback(() => {
        let n = t ? l.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : l.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, h.hs)(n, { quest_id: e });
    }, [t, e]);
}
