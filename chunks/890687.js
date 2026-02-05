"use strict";
n.d(t, {
    $P: () => e0,
    BL: () => eO,
    C5: () => eH,
    Du: () => ex,
    F3: () => eU,
    FA: () => eK,
    H6: () => eY,
    I3: () => eR,
    In: () => eG,
    Iq: () => eE,
    L1: () => em,
    LS: () => eA,
    NC: () => eh,
    Nb: () => eX,
    O9: () => eV,
    Qh: () => eg,
    Qo: () => eB,
    RR: () => eM,
    S5: () => eT,
    UX: () => ek,
    Vn: () => eC,
    Wj: () => eP,
    XD: () => eJ,
    YW: () => eL,
    Yl: () => eI,
    _b: () => e3,
    a5: () => eW,
    aC: () => ej,
    fc: () => eN,
    j$: () => ew,
    mL: () => Q,
    nv: () => e1,
    oH: () => eD,
    p5: () => eq,
    pT: () => eQ,
    sb: () => eZ,
    zW: () => ez,
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
var p = n(773669),
    h = n(734057),
    m = n(962173),
    g = n(287809),
    E = n(954571),
    A = n(927813),
    I = n(975571),
    T = n(515718),
    y = n(67486),
    S = n(252424),
    v = n(723702),
    C = n(927578),
    b = n(829219),
    N = n(859703),
    R = n(341915),
    O = n(245853),
    D = n(302654),
    L = n(677402),
    w = n(807876),
    x = n(579473),
    P = n(561844),
    M = n(590202),
    k = n(971649),
    U = n(651892),
    G = n(710969),
    V = n(639214),
    F = n(901406),
    B = n(92246),
    j = n(792620),
    H = n(814793),
    Y = n(753386),
    W = n(654487),
    K = n(652215),
    z = n(788868),
    $ = n(985018);
let q = -1,
    Z = 1;
function Q() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, u.yK)([N.A], () => [...N.A.quests.values()]),
        a = (0, u.yK)([N.A], () => [...N.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: o } = (0, u.cf)([N.A], () => ({
            isFetchingCurrentQuests: N.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: N.A.lastFetchedCurrentQuests,
        })),
        l = (0, L.s)({ location: W.rE.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !s &&
                !(0, y.I)()
            ) {
                if ((n(!0), (0, b.N1)(), (0, v.isMac)() && "focused" !== _.A.getState())) return;
                let { enableNewRequestBehavior: t } = D.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, b.r8)(R.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: i, excludedQuests: a, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function X(e, t, n) {
    let r = e.id === W.aJ,
        i = t.id === W.aJ,
        a = r && e.userStatus?.completedAt == null;
    if (a !== (i && t.userStatus?.completedAt == null)) return a ? q : Z;
    let s = !(0, G.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        { enabled: d, minutes: _ } = (0, O.L5)(W.rE.QUEST_HOME_DESKTOP),
        f = A.A.Millis.MINUTE * _,
        p = e2(e, f),
        h = e2(t, f);
    if (s) {
        let { takeover: r } = n,
            i = null != r && (0, H.f0)(r, e.id),
            a = null != r && (0, H.f0)(r, t.id);
        return i !== a && (i || a)
            ? i
                ? q
                : Z
            : d && p !== h && (p || h)
              ? p
                  ? Z
                  : q
              : o !== l
                ? o
                    ? Z
                    : q
                : u !== c
                  ? u
                      ? q
                      : Z
                  : e_(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? q : Z) : u !== c ? (u ? q : Z) : e_(e.config.expiresAt, t.config.expiresAt, 0);
}
function J(e, t, n) {
    return e_(e.config.startsAt, t.config.startsAt, 0);
}
function ee(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? e_(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? q
          : null == r && null != i
            ? Z
            : e_(r, i, 0);
}
function et(e, t, n) {
    return e_(e.config.expiresAt, t.config.expiresAt, 1);
}
function en(e, t) {
    return function (n, r) {
        let i = !(0, G.Ic)(n);
        return !(0, G.Ic)(r) !== i ? (i ? q : Z) : e(n, r, t);
    };
}
function er(e) {
    switch (e) {
        case W.kL.MOST_RECENT:
            return J;
        case W.kL.RECENTLY_ENROLLED:
            return ee;
        case W.kL.EXPIRING_SOON:
            return et;
        case W.kL.SUGGESTED:
        default:
            return X;
    }
}
function ei(e, t) {
    switch (t) {
        case W.Pc.VIDEO:
            return (0, j.vv)(e);
        case W.Pc.PLAY:
            return (0, j.t)({ quest: e }) || (0, j.fE)({ quest: e }) || (0, j.vl)(e);
        default:
            return !1;
    }
}
function ea(e, t) {
    switch (t) {
        case W.BQ.VIRTUAL_CURRENCY:
            return (0, B.ks)(e.config);
        case W.BQ.COLLECTIBLE:
            return (0, B.tU)(e.config);
        case W.BQ.IN_GAME:
            return (0, B.HG)(e.config) || (0, B.r7)(e.config);
        default:
            return !1;
    }
}
function es(e) {
    switch (e) {
        case "task":
            return ei;
        case "reward":
            return ea;
    }
}
function eo(e, t, n) {
    let r = es(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function el(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return eo(e, n, r);
        }),
    );
}
function eu() {
    return { takeover: N.A.getQuestHomeTakeoverConfig() };
}
let ec = {};
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : el(e, r),
        a = en(er(n), eu());
    return i.sort(a);
}
function e_(e, t, n) {
    let r = 0 === n ? q : Z;
    return e.localeCompare(t) * r;
}
function ef(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        s = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && s.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = ed(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (s.current = e.length), r;
    }, [e, t]);
}
function ep(e) {
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
                        ? q
                        : Z
                    : e_(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eh = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    em = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = Q({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        s = new Map(n.map((e) => [e.id, e])),
        o = ef(n, t),
        l = ep(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = s.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: a };
}
function eE() {
    let e = r.useRef(!1),
        t = (0, u.yK)([N.A], () => Array.from(N.A.claimedQuests.values())),
        n = (0, u.bG)([N.A], () => N.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, b.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eA(e) {
    return (0, u.bG)([N.A], () => null != e && N.A.isQuestExpired(e.id), [e]);
}
function eI(e, t, n) {
    let r = (0, u.bG)([h.A], () => h.A.getChannel(t?.channelId) ?? null),
        i = (0, u.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []),
        a = (0, u.bG)([g.default], () => g.default.getCurrentUser()?.id) === n,
        s = (0, u.bG)([N.A], () => null != e && N.A.isQuestExpired(e.id), [e]);
    if (null == e || i || s || a) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, H.Ll)(t, r);
    return !o || !!l;
}
function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, u.bG)([p.default], () => p.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ey(e) {
    return (0, u.bG)([N.A], () => N.A.isProgressingOnDesktop(e.id));
}
function eS(e) {
    return r.useMemo(() => (0, j.YL)(e), [e]);
}
function ev(e) {
    let t = (0, u.bG)([N.A], () => N.A.getOptimisticProgress(e.id, s.n.WATCH_VIDEO));
    return r.useMemo(() => (0, Y.J$)(e), [e, t]);
}
function eC(e) {
    let t = ey(e),
        n = eS(e),
        r = ev(e);
    return t || n || r;
}
let eb = 1,
    eN = (e) => {
        let t = r.useCallback(() => (0, j.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            s = eC(e);
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
                }, A.A.Millis.SECOND * eb);
                return () => {
                    clearInterval(t), a();
                };
            }, [e, s, a]),
            n
        );
    };
function eR(e) {
    return r.useMemo(() => (0, j.JC)(e), [e]);
}
let eO = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eM({ quest: t }),
        a = (0, k.vU)();
    return () => {
        i
            ? (0, F.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: M.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: a?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, F.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: M.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: a?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eD(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, j.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, f.A)(t);
}
function eL(e) {
    let t = (0, u.bG)([N.A], () => N.A.quests),
        n = eD(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, H.$e)(t, W.zO);
            return (0, V.BM)(n, e);
        }, [e, t, n]);
    return eA(i) ? null : i;
}
function ew(e) {
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
function ex() {
    let { fetching: e, accounts: t } = (0, u.cf)([m.A], () => ({
            fetching: m.A.isFetching(),
            accounts: m.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === K.fg2.XBOX),
                r = e.filter((e) => e.type === K.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: a };
}
let eP = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [s, l] = r.useState([]),
            [c, d] = r.useState(!1),
            _ = (0, u.bG)([m.A], () => m.A.getAccounts());
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
                        (e = await (0, b.vD)(t, n)), l(e.errorHints);
                    } finally {
                        d(!1), a?.(e?.errorHints ?? []);
                    }
                }, [c, i, a, n, t]),
                startingConsoleQuest: c,
                errorHints: s,
            }
        );
    },
    eM = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ex(),
            r = eC(t),
            i = 0 === n.length;
        return (0, j.g5)(t) && i && !r;
    },
    ek = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ex(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = I.A.getArticleURL(K.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = I.A.getArticleURL(K.MVz.QUEST_HOW_TO_XBOX),
            o = $.intl.format($.t.beN4DG, { psHelpdeskArticle: a, xboxHelpdeskArticle: s }),
            l = $.intl.format($.t.HVS7nh, { helpdeskArticle: r ? a : s });
        return { message: i ? l : o, xboxURL: s, playstationURL: a };
    };
var eU = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eG(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = eN(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eV(e) {
    let t = (0, u.bG)([p.default], () => p.default.locale),
        { percentComplete: n } = eN(e),
        r = eR(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        s = null != r ? `${r?.progress}/${r?.target}` : (0, S.l9)(t, i, { roundingMode: "floor" });
    return { completedRatio: i, percentComplete: a, completedRatioDisplay: s };
}
function eF(e) {
    return [(0, u.bG)([N.A], () => N.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, b.lx)(e, t), [e])];
}
function eB(e, t) {
    let [n, i] = eF(e.id),
        o = r.useMemo(() => (0, F.UR)(e), [e]),
        l = o.includes(W.fO.DESKTOP),
        u = o.includes(W.fO.CONSOLE),
        c = ey(e),
        d = eS(e),
        _ = r.useMemo(
            () =>
                (0, a.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: s.n.PLAY_ON_DESKTOP }, () => W.fO.DESKTOP)
                    .with({ taskType: s.n.PLAY_ON_DESKTOP_V2 }, () => W.fO.DESKTOP)
                    .with({ taskType: s.n.PLAY_ACTIVITY }, () => W.fO.DESKTOP)
                    .with({ taskType: s.n.WATCH_VIDEO }, () => W.fO.DESKTOP)
                    .with({ taskType: s.n.WATCH_VIDEO_ON_MOBILE }, () => W.fO.DESKTOP)
                    .with({ taskType: s.n.STREAM_ON_DESKTOP }, () => W.fO.DESKTOP)
                    .with({ taskType: s.n.PLAY_ON_XBOX }, () => W.fO.CONSOLE)
                    .with({ taskType: s.n.PLAY_ON_PLAYSTATION }, () => W.fO.CONSOLE)
                    .with({ taskType: s.n.ACHIEVEMENT_IN_GAME }, () => W.fO.DESKTOP)
                    .with({ taskType: s.n.ACHIEVEMENT_IN_ACTIVITY }, () => W.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? W.fO.DESKTOP : d ? W.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: W.fO.CONSOLE }, () => R.X0.CONSOLE)
                    .with({ currentProgressingPlatform: W.fO.DESKTOP }, () => R.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: W.fO.CONSOLE }, () => R.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: W.fO.DESKTOP }, () => R.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: W.fO.CONSOLE,
                        },
                        () => R.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: W.fO.DESKTOP,
                        },
                        () => R.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && l ? R.X0.SELECT : u ? R.X0.CONSOLE : R.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, l, _, f, n],
        ),
        o,
        i,
    ];
}
function ej(e) {
    let t = eR(e),
        n = eN(e),
        [r] = eB(e, n),
        i = eA(e),
        a = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = s.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = a && !o && !i && l && (u || (c && r === R.X0.DESKTOP)),
        _ = (0, v.isWeb)() && d && !(0, F.W1)(e),
        f = (0, v.isMac)() && n.taskType === s.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push($.intl.string($.t.MFGxFM)), _ && p.push($.intl.string($.t.BV6xDm)), p;
}
function eH(e) {
    return (0, u.bG)([N.A], () => N.A.quests).get(e) ?? null;
}
function eY(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        s = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            s.current !== t &&
            ((0, P.Mm)({ mode: t, prevMode: s.current, questContent: n, questId: a, sourceQuestContent: i }),
            (s.current = t));
    }, [a, n, t, i]),
        r.useEffect(() => {
            if (null != a)
                return () => {
                    (0, P.Mm)({ mode: null, prevMode: s.current, questContent: n, questId: a, sourceQuestContent: i });
                };
        }, [a, n, i]);
}
function eW(e, t) {
    let n = (0, u.bG)([N.A], () => N.A.getQuest(e), [e]),
        i = (0, c.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, l.Mw)(i) ? K.NJ8.DARK : K.NJ8.LIGHT);
        return (0, x.tW)(n, x.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eK(e) {
    let t = (0, B.mq)(e),
        n = (0, B.k5)(e),
        r = (0, B.$5)(e),
        i = (0, B.Y7)(e),
        a = (0, B.JX)(e),
        s = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        o = (0, C.TW)(s, z.PremiumTypes.TIER_2);
    if (null == n) return $.intl.formatToPlainString($.t.l9uXL8, { decorationName: t });
    let l = $.intl.formatToPlainString($.t.o97tNn, { rewardName: t }),
        c = $.intl.formatToPlainString($.t.PkyRZo, { rewardName: t, expirationDate: r }),
        d = $.intl.formatToPlainString($.t.ie4YK0, { rewardName: t, duration: n }),
        _ = $.intl.formatToPlainString($.t.yCpc0U, { duration: n, rewardName: t }),
        f = o ? l : d,
        p = o ? c : _,
        h = i ? f : p;
    return a ? h : $.intl.formatToPlainString($.t.tTlItm, { duration: n, decorationName: t });
}
function ez(e) {
    let t = (0, j.TP)(e);
    return { launchInGameActivity: (0, d.A)({ applicationId: t }) };
}
let e$ = () => (0, u.yK)([N.A], () => [...N.A.quests.values()]).some((e) => e.preview),
    eq = () => {
        let e = (0, w.U)({ location: W.rE.QUEST_PREVIEW_TOOL_2 }),
            t = e$();
        return e && t;
    },
    eZ = (e) => {
        let t = e?.userStatus != null && (0, G.gO)(e.userStatus, R.uF.ACTIVITY_PANEL),
            n = eA(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, u.bG)([N.A], () => null != N.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    eQ = () => {
        let e = (0, u.yK)([N.A], () => [...N.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eX() {
    return r.useMemo(
        () =>
            W.pc.map((e) => {
                let [t, n] = e;
                return { heading: (0, U.fx)(t), options: n };
            }),
        [],
    );
}
function eJ() {
    return r.useMemo(() => Object.keys(W.kL).map((e) => ({ label: (0, U.Js)(W.kL[e]), value: W.kL[e] })), []);
}
function e0(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        s = r.useRef(null);
    r.useEffect(() => {
        E.default.track(K.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: a.current }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            E.default.track(K.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: s.current ?? [],
                num_quests_visible: i,
            }),
                (s.current = e);
        }, [n, i]);
}
let e1 = (e) => {
        let t = !1,
            n = r.useMemo(() => g.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    e2 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e3() {
    let { enabled: e } = O.XM.useConfig({ location: W.rE.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [s, o] = r.useState(!1),
        [l, c] = r.useState(!1),
        { isFetching: d, takeoverConfig: _ } = (0, u.cf)([N.A], () => ({
            isFetching: N.A.isFetchingQuestHomeTakeover(),
            takeoverConfig: N.A.getQuestHomeTakeoverConfig(),
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
                    await (0, b.Tb)();
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
                    await Promise.all([(0, T.NN)(_.assetHeroImage.url), (0, T.NN)(_.assetSponsorImage.url)]);
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
