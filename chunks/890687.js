"use strict";
n.d(t, {
    $P: () => e2,
    BL: () => eL,
    C5: () => eW,
    Du: () => eM,
    F3: () => eF,
    FA: () => ez,
    H6: () => eK,
    I3: () => eD,
    In: () => eV,
    Iq: () => eI,
    L1: () => eE,
    LS: () => eT,
    NC: () => eg,
    Nb: () => e0,
    O9: () => eB,
    Qh: () => eA,
    Qo: () => eH,
    RR: () => eU,
    S5: () => eS,
    UX: () => eG,
    Vn: () => eN,
    Wj: () => ek,
    XD: () => e1,
    YW: () => ex,
    Yl: () => ey,
    _b: () => e4,
    a5: () => e$,
    aC: () => eY,
    fc: () => eO,
    j$: () => eP,
    mL: () => Q,
    nv: () => e3,
    oH: () => ew,
    p5: () => eZ,
    pT: () => eJ,
    sb: () => eQ,
    zW: () => eq,
}),
    n(321073),
    n(801541);
var r = n(64700);
n(284009);
var i = n(735438),
    a = n(889137),
    s = n(412703),
    o = n(114046),
    l = n(582754),
    u = n(311907),
    c = n(736653),
    d = n(787389),
    _ = n(183636),
    f = n(429913);
n(674658);
var h = n(773669),
    p = n(734057),
    g = n(962173),
    E = n(287809),
    A = n(954571),
    I = n(927813),
    T = n(975571),
    y = n(515718),
    S = n(67486),
    v = n(252424),
    C = n(723702),
    b = n(927578),
    N = n(829219),
    R = n(859703),
    O = n(341915),
    D = n(245853),
    L = n(302654),
    w = n(677402),
    x = n(807876),
    P = n(579473),
    M = n(561844),
    k = n(590202),
    U = n(971649),
    G = n(651892),
    F = n(710969),
    V = n(639214),
    B = n(901406),
    j = n(92246),
    H = n(792620),
    Y = n(814793),
    W = n(753386),
    K = n(654487),
    $ = n(652215),
    z = n(788868),
    q = n(985018);
let X = -1,
    Z = 1;
function Q() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, u.yK)([R.A], () => [...R.A.quests.values()]),
        a = (0, u.yK)([R.A], () => [...R.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: o } = (0, u.cf)([R.A], () => ({
            isFetchingCurrentQuests: R.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: R.A.lastFetchedCurrentQuests,
        })),
        l = (0, w.s)({ location: K.rE.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !s &&
                !(0, S.I)()
            ) {
                if ((n(!0), (0, N.N1)(), (0, C.isMac)() && "focused" !== _.A.getState())) return;
                let { enableNewRequestBehavior: t } = L.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, N.r8)(O.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: i, excludedQuests: a, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function J(e, t, n) {
    let r = e.id === K.aJ,
        i = t.id === K.aJ,
        a = r && e.userStatus?.completedAt == null;
    if (a !== (i && t.userStatus?.completedAt == null)) return a ? X : Z;
    let s = !(0, F.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        { enabled: d, minutes: _ } = (0, D.L5)(K.rE.QUEST_HOME_DESKTOP),
        f = I.A.Millis.MINUTE * _,
        h = e6(e, f),
        p = e6(t, f);
    if (s) {
        let { takeover: r } = n,
            i = null != r && (0, Y.f0)(r, e.id),
            a = null != r && (0, Y.f0)(r, t.id);
        return i !== a && (i || a)
            ? i
                ? X
                : Z
            : d && h !== p && (h || p)
              ? h
                  ? Z
                  : X
              : o !== l
                ? o
                    ? Z
                    : X
                : u !== c
                  ? u
                      ? X
                      : Z
                  : ef(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? X : Z) : u !== c ? (u ? X : Z) : ef(e.config.expiresAt, t.config.expiresAt, 0);
}
function ee(e, t, n) {
    return ef(e.config.startsAt, t.config.startsAt, 0);
}
function et(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? ef(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? X
          : null == r && null != i
            ? Z
            : ef(r, i, 0);
}
function en(e, t, n) {
    return ef(e.config.expiresAt, t.config.expiresAt, 1);
}
function er(e, t) {
    return function (n, r) {
        let i = !(0, F.Ic)(n);
        return !(0, F.Ic)(r) !== i ? (i ? X : Z) : e(n, r, t);
    };
}
function ei(e) {
    switch (e) {
        case K.kL.MOST_RECENT:
            return ee;
        case K.kL.RECENTLY_ENROLLED:
            return et;
        case K.kL.EXPIRING_SOON:
            return en;
        case K.kL.SUGGESTED:
        default:
            return J;
    }
}
function ea(e, t) {
    switch (t) {
        case K.Pc.VIDEO:
            return (0, H.vv)(e);
        case K.Pc.PLAY:
            return (0, H.t)({ quest: e }) || (0, H.fE)({ quest: e }) || (0, H.vl)(e);
        default:
            return !1;
    }
}
function es(e, t) {
    switch (t) {
        case K.BQ.VIRTUAL_CURRENCY:
            return (0, j.ks)(e.config);
        case K.BQ.COLLECTIBLE:
            return (0, j.tU)(e.config);
        case K.BQ.IN_GAME:
            return (0, j.HG)(e.config) || (0, j.r7)(e.config);
        default:
            return !1;
    }
}
function eo(e) {
    switch (e) {
        case "task":
            return ea;
        case "reward":
            return es;
    }
}
function el(e, t, n) {
    let r = eo(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function eu(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return el(e, n, r);
        }),
    );
}
let ec = {},
    ed = { takeover: null };
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed,
        { sortMethod: r, filters: i } = t,
        a = null == i || 0 === i.length ? e : eu(e, i),
        s = er(ei(r), n);
    return a.sort(s);
}
function ef(e, t, n) {
    let r = 0 === n ? X : Z;
    return e.localeCompare(t) * r;
}
function eh() {
    let e = (0, u.bG)([R.A], () => R.A.getQuestHomeTakeoverConfig());
    return r.useMemo(() => ({ takeover: e }), [e]);
}
function ep(e, t) {
    let n = eh(),
        i = r.useRef([]),
        a = r.useRef(t.sortMethod),
        s = r.useRef(t.filters),
        o = r.useRef(0),
        l = r.useRef(n);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (
            i.current.length > 0 &&
            o.current === e.length &&
            a.current === t.sortMethod &&
            s.current === t.filters &&
            l.current === n
        )
            return i.current;
        let r = e_(e, t, n).map((e) => e.id);
        return (
            (i.current = r),
            (a.current = t.sortMethod),
            (s.current = t.filters),
            (o.current = e.length),
            (l.current = n),
            r
        );
    }, [e, t, n]);
}
function em(e) {
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
                        ? X
                        : Z
                    : ef(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eg = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eE = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = Q({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        s = new Map(n.map((e) => [e.id, e])),
        o = ep(n, t),
        l = em(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = s.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: a };
}
function eI() {
    let e = r.useRef(!1),
        t = (0, u.yK)([R.A], () => Array.from(R.A.claimedQuests.values())),
        n = (0, u.bG)([R.A], () => R.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, N.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eT(e) {
    return (0, u.bG)([R.A], () => null != e && R.A.isQuestExpired(e.id), [e]);
}
function ey(e, t, n) {
    let r = (0, u.bG)([p.A], () => p.A.getChannel(t?.channelId) ?? null),
        i = (0, u.bG)([R.A], () => null != R.A.questEnrollmentBlockedUntil, []),
        a = (0, u.bG)([E.default], () => E.default.getCurrentUser()?.id) === n,
        s = (0, u.bG)([R.A], () => null != e && R.A.isQuestExpired(e.id), [e]);
    if (null == e || i || s || a) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, Y.Ll)(t, r);
    return !o || !!l;
}
function eS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, u.bG)([h.default], () => h.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ev(e) {
    return (0, u.bG)([R.A], () => R.A.isProgressingOnDesktop(e.id));
}
function eC(e) {
    return r.useMemo(() => (0, H.YL)(e), [e]);
}
function eb(e) {
    let t = (0, u.bG)([R.A], () => R.A.getOptimisticProgress(e.id, s.n.WATCH_VIDEO));
    return r.useMemo(() => (0, W.J$)(e), [e, t]);
}
function eN(e) {
    let t = ev(e),
        n = eC(e),
        r = eb(e);
    return t || n || r;
}
let eR = 1,
    eO = (e) => {
        let t = r.useCallback(() => (0, H.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            s = eN(e);
        return (
            r.useEffect(() => {
                if (
                    e.userStatus?.enrolledAt == null ||
                    e.userStatus?.completedAt != null ||
                    e.userStatus?.claimedAt != null ||
                    !s
                )
                    return void a();
                let t = window.setInterval(() => {
                    a();
                }, I.A.Millis.SECOND * eR);
                return () => {
                    clearInterval(t), a();
                };
            }, [e, s, a]),
            n
        );
    };
function eD(e) {
    return r.useMemo(() => (0, H.JC)(e), [e]);
}
let eL = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eU({ quest: t }),
        a = (0, U.vU)();
    return () => {
        i
            ? (0, B.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: k.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: a?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, B.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: k.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: a?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function ew(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, H.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, f.A)(t);
}
function ex(e) {
    let t = (0, u.bG)([R.A], () => R.A.quests),
        n = ew(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, Y.$e)(t, K.zO);
            return (0, V.BM)(n, e);
        }, [e, t, n]);
    return eT(i) ? null : i;
}
function eP(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, N.Yb)(e),
            handleProgress: (t) => (0, N.Yb)(e, t),
            handleResetStatusClick: () => (0, N.UZ)(e),
            handleResetDismissibilityClick: () => (0, N.Gt)(e),
            handleOverrideDeliveryClick: () => (0, N.d6)(e),
        }),
        [e],
    );
}
function eM() {
    let { fetching: e, accounts: t } = (0, u.cf)([g.A], () => ({
            fetching: g.A.isFetching(),
            accounts: g.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === $.fg2.XBOX),
                r = e.filter((e) => e.type === $.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: a };
}
let ek = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [s, l] = r.useState([]),
            [c, d] = r.useState(!1),
            _ = (0, u.bG)([g.A], () => g.A.getAccounts());
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== o._.EXPIRED_CREDENTIAL));
            }, [_]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (c) return;
                    i?.(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, N.vD)(t, n)), l(e.errorHints);
                    } finally {
                        d(!1), a?.(e?.errorHints ?? []);
                    }
                }, [c, i, a, n, t]),
                startingConsoleQuest: c,
                errorHints: s,
            }
        );
    },
    eU = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eM(),
            r = eN(t),
            i = 0 === n.length;
        return (0, H.g5)(t) && i && !r;
    },
    eG = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eM(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = T.A.getArticleURL($.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = T.A.getArticleURL($.MVz.QUEST_HOW_TO_XBOX),
            o = q.intl.format(q.t.beN4DG, { psHelpdeskArticle: a, xboxHelpdeskArticle: s }),
            l = q.intl.format(q.t.HVS7nh, { helpdeskArticle: r ? a : s });
        return { message: i ? l : o, xboxURL: s, playstationURL: a };
    };
var eF = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eV(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = eO(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eB(e) {
    let t = (0, u.bG)([h.default], () => h.default.locale),
        { percentComplete: n } = eO(e),
        r = eD(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        s = null != r ? `${r?.progress}/${r?.target}` : (0, v.l9)(t, i, { roundingMode: "floor" });
    return { completedRatio: i, percentComplete: a, completedRatioDisplay: s };
}
function ej(e) {
    return [(0, u.bG)([R.A], () => R.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, N.lx)(e, t), [e])];
}
function eH(e, t) {
    let [n, i] = ej(e.id),
        o = r.useMemo(() => (0, B.UR)(e), [e]),
        l = o.includes(K.fO.DESKTOP),
        u = o.includes(K.fO.CONSOLE),
        c = ev(e),
        d = eC(e),
        _ = r.useMemo(
            () =>
                (0, a.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: s.n.PLAY_ON_DESKTOP }, () => K.fO.DESKTOP)
                    .with({ taskType: s.n.PLAY_ON_DESKTOP_V2 }, () => K.fO.DESKTOP)
                    .with({ taskType: s.n.PLAY_ACTIVITY }, () => K.fO.DESKTOP)
                    .with({ taskType: s.n.WATCH_VIDEO }, () => K.fO.DESKTOP)
                    .with({ taskType: s.n.WATCH_VIDEO_ON_MOBILE }, () => K.fO.DESKTOP)
                    .with({ taskType: s.n.STREAM_ON_DESKTOP }, () => K.fO.DESKTOP)
                    .with({ taskType: s.n.PLAY_ON_XBOX }, () => K.fO.CONSOLE)
                    .with({ taskType: s.n.PLAY_ON_PLAYSTATION }, () => K.fO.CONSOLE)
                    .with({ taskType: s.n.ACHIEVEMENT_IN_GAME }, () => K.fO.DESKTOP)
                    .with({ taskType: s.n.ACHIEVEMENT_IN_ACTIVITY }, () => K.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? K.fO.DESKTOP : d ? K.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: K.fO.CONSOLE }, () => O.X0.CONSOLE)
                    .with({ currentProgressingPlatform: K.fO.DESKTOP }, () => O.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: K.fO.CONSOLE }, () => O.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: K.fO.DESKTOP }, () => O.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: K.fO.CONSOLE,
                        },
                        () => O.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: K.fO.DESKTOP,
                        },
                        () => O.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && l ? O.X0.SELECT : u ? O.X0.CONSOLE : O.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, l, _, f, n],
        ),
        o,
        i,
    ];
}
function eY(e) {
    let t = eD(e),
        n = eO(e),
        [r] = eH(e, n),
        i = eT(e),
        a = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = s.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = a && !o && !i && l && (u || (c && r === O.X0.DESKTOP)),
        _ = (0, C.isWeb)() && d && !(0, B.W1)(e),
        f = (0, C.isMac)() && n.taskType === s.n.STREAM_ON_DESKTOP && d,
        h = [];
    return f && h.push(q.intl.string(q.t.MFGxFM)), _ && h.push(q.intl.string(q.t.BV6xDm)), h;
}
function eW(e) {
    return (0, u.bG)([R.A], () => R.A.quests).get(e) ?? null;
}
function eK(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        s = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            s.current !== t &&
            ((0, M.Mm)({ mode: t, prevMode: s.current, questContent: n, questId: a, sourceQuestContent: i }),
            (s.current = t));
    }, [a, n, t, i]),
        r.useEffect(() => {
            if (null != a)
                return () => {
                    (0, M.Mm)({ mode: null, prevMode: s.current, questContent: n, questId: a, sourceQuestContent: i });
                };
        }, [a, n, i]);
}
function e$(e, t) {
    let n = (0, u.bG)([R.A], () => R.A.getQuest(e), [e]),
        i = (0, c.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, l.Mw)(i) ? $.NJ8.DARK : $.NJ8.LIGHT);
        return (0, P.tW)(n, P.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function ez(e) {
    let t = (0, j.mq)(e),
        n = (0, j.k5)(e),
        r = (0, j.$5)(e),
        i = (0, j.Y7)(e),
        a = (0, j.JX)(e),
        s = (0, u.bG)([E.default], () => E.default.getCurrentUser()),
        o = (0, b.TW)(s, z.PremiumTypes.TIER_2);
    if (null == n) return q.intl.formatToPlainString(q.t.l9uXL8, { decorationName: t });
    let l = q.intl.formatToPlainString(q.t.o97tNn, { rewardName: t }),
        c = q.intl.formatToPlainString(q.t.PkyRZo, { rewardName: t, expirationDate: r }),
        d = q.intl.formatToPlainString(q.t.ie4YK0, { rewardName: t, duration: n }),
        _ = q.intl.formatToPlainString(q.t.yCpc0U, { duration: n, rewardName: t }),
        f = o ? l : d,
        h = o ? c : _,
        p = i ? f : h;
    return a ? p : q.intl.formatToPlainString(q.t.tTlItm, { duration: n, decorationName: t });
}
function eq(e) {
    let t = (0, H.TP)(e);
    return { launchInGameActivity: (0, d.A)({ applicationId: t }) };
}
let eX = () => (0, u.yK)([R.A], () => [...R.A.quests.values()]).some((e) => e.preview),
    eZ = () => {
        let e = (0, x.U)({ location: K.rE.QUEST_PREVIEW_TOOL_2 }),
            t = eX();
        return e && t;
    },
    eQ = (e) => {
        let t = e?.userStatus != null && (0, F.gO)(e.userStatus, O.uF.ACTIVITY_PANEL),
            n = eT(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, u.bG)([R.A], () => null != R.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    eJ = () => {
        let e = (0, u.yK)([R.A], () => [...R.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e0() {
    return r.useMemo(
        () =>
            K.pc.map((e) => {
                let [t, n] = e;
                return { heading: (0, G.fx)(t), options: n };
            }),
        [],
    );
}
function e1() {
    return r.useMemo(() => Object.keys(K.kL).map((e) => ({ label: (0, G.Js)(K.kL[e]), value: K.kL[e] })), []);
}
function e2(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        s = r.useRef(null);
    r.useEffect(() => {
        A.default.track($.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: a.current }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            A.default.track($.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: s.current ?? [],
                num_quests_visible: i,
            }),
                (s.current = e);
        }, [n, i]);
}
let e3 = (e) => {
        let t = !1,
            n = r.useMemo(() => E.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    e6 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e4() {
    let { enabled: e } = D.XM.useConfig({ location: K.rE.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [s, o] = r.useState(!1),
        [l, c] = r.useState(!1),
        { isFetching: d, takeoverConfig: _ } = (0, u.cf)([R.A], () => ({
            isFetching: R.A.isFetchingQuestHomeTakeover(),
            takeoverConfig: R.A.getQuestHomeTakeoverConfig(),
        })),
        f = r.useMemo(() => {
            if (!e || null == _) return null;
            let t = new Date(),
                n = new Date(_.startsAt),
                r = new Date(_.expiresAt);
            return t < n || t > r ? null : _;
        }, [e, _]);
    return (
        r.useEffect(() => {
            e && t();
            async function t() {
                try {
                    await (0, N.Tb)();
                } catch (e) {
                    a(!1), o(!0);
                } finally {
                    n(!1);
                }
            }
        }, [e]),
        r.useEffect(() => {
            !(async function () {
                try {
                    if (null == _) return;
                    await Promise.all([(0, y.NN)(_.assetHeroImage.url), (0, y.NN)(_.assetSponsorImage.url)]);
                } catch (e) {
                    c(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [_]),
        { takeover: s || l ? null : f, isLoading: t || d || i }
    );
}
