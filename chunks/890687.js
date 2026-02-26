"use strict";
n.d(t, {
    $P: () => e1,
    BL: () => eD,
    C5: () => eY,
    Du: () => eM,
    F3: () => eG,
    FA: () => ez,
    H6: () => eW,
    I3: () => eO,
    In: () => eF,
    Iq: () => eg,
    L1: () => em,
    LS: () => eA,
    NC: () => eh,
    Nb: () => eJ,
    O9: () => eV,
    Qh: () => eE,
    Qo: () => eH,
    RR: () => ek,
    S5: () => eT,
    UX: () => eU,
    Vn: () => eC,
    Wj: () => eP,
    XD: () => e0,
    YW: () => ew,
    Yl: () => eI,
    a5: () => eK,
    aC: () => ej,
    do: () => eS,
    fc: () => eR,
    j$: () => ex,
    mL: () => Z,
    nv: () => e2,
    oH: () => eL,
    p5: () => eZ,
    pT: () => eQ,
    sb: () => eX,
    vG: () => e6,
    zW: () => e$,
}),
    n(321073),
    n(801541);
var r = n(64700);
n(284009);
var i = n(735438),
    s = n(889137),
    a = n(412703),
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
    E = n(287809),
    g = n(954571),
    A = n(927813),
    I = n(975571),
    T = n(515718),
    S = n(252424),
    y = n(723702),
    v = n(927578),
    N = n(829219),
    C = n(859703),
    b = n(341915),
    R = n(245853),
    O = n(302654),
    D = n(677402),
    L = n(807876),
    w = n(579473),
    x = n(561844),
    M = n(590202),
    P = n(971649),
    k = n(651892),
    U = n(710969),
    G = n(639214),
    F = n(901406),
    V = n(92246),
    B = n(792620),
    H = n(814793),
    j = n(753386),
    Y = n(654487),
    W = n(652215),
    K = n(788868),
    z = n(985018);
let $ = -1,
    q = 1;
function Z() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, u.yK)([C.A], () => [...C.A.quests.values()]),
        s = (0, u.yK)([C.A], () => [...C.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: o } = (0, u.cf)([C.A], () => ({
            isFetchingCurrentQuests: C.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: C.A.lastFetchedCurrentQuests,
        })),
        l = (0, D.s)({ location: Y.rE.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !a
            ) {
                if ((n(!0), (0, N.N1)(), (0, y.isMac)() && "focused" !== _.A.getState())) return;
                let { enableNewRequestBehavior: t } = O.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, N.r8)(b.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, a, o, e.callerSource]),
        { quests: i, excludedQuests: s, isFetchingCurrentQuests: a, hasFetched: t }
    );
}
function X(e, t, n) {
    let r = e.id === Y.aJ,
        i = t.id === Y.aJ,
        s = r && e.userStatus?.completedAt == null;
    if (s !== (i && t.userStatus?.completedAt == null)) return s ? $ : q;
    let a = !(0, U.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        d = 20 * A.A.Millis.MINUTE,
        _ = e3(e, d),
        f = e3(t, d);
    if (a) {
        let { questHomeHero: r } = n,
            i = null != r && (0, H.I0)(r, e.id),
            s = null != r && (0, H.I0)(r, t.id);
        return i !== s && (i || s)
            ? i
                ? $
                : q
            : _ !== f && (_ || f)
              ? _
                  ? q
                  : $
              : o !== l
                ? o
                    ? q
                    : $
                : u !== c
                  ? u
                      ? $
                      : q
                  : ed(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? $ : q) : u !== c ? (u ? $ : q) : ed(e.config.expiresAt, t.config.expiresAt, 0);
}
function Q(e, t, n) {
    return ed(e.config.startsAt, t.config.startsAt, 0);
}
function J(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        i = t.userStatus?.enrolledAt;
    return null == r && null == i
        ? ed(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == i
          ? $
          : null == r && null != i
            ? q
            : ed(r, i, 0);
}
function ee(e, t, n) {
    return ed(e.config.expiresAt, t.config.expiresAt, 1);
}
function et(e, t) {
    return function (n, r) {
        let i = !(0, U.Ic)(n);
        return !(0, U.Ic)(r) !== i ? (i ? $ : q) : e(n, r, t);
    };
}
function en(e) {
    switch (e) {
        case Y.kL.MOST_RECENT:
            return Q;
        case Y.kL.RECENTLY_ENROLLED:
            return J;
        case Y.kL.EXPIRING_SOON:
            return ee;
        case Y.kL.SUGGESTED:
        default:
            return X;
    }
}
function er(e, t) {
    switch (t) {
        case Y.Pc.VIDEO:
            return (0, B.vv)(e);
        case Y.Pc.PLAY:
            return (0, B.t)({ quest: e }) || (0, B.fE)({ quest: e }) || (0, B.vl)(e);
        default:
            return !1;
    }
}
function ei(e, t) {
    switch (t) {
        case Y.BQ.VIRTUAL_CURRENCY:
            return (0, V.ks)(e.config);
        case Y.BQ.COLLECTIBLE:
            return (0, V.tU)(e.config);
        case Y.BQ.IN_GAME:
            return (0, V.HG)(e.config) || (0, V.r7)(e.config);
        default:
            return !1;
    }
}
function es(e) {
    switch (e) {
        case "task":
            return er;
        case "reward":
            return ei;
    }
}
function ea(e, t, n) {
    let r = es(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function eo(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return ea(e, n, r);
        }),
    );
}
let el = {},
    eu = { questHomeHero: null };
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eu,
        { sortMethod: r, filters: i } = t,
        s = null == i || 0 === i.length ? e : eo(e, i),
        a = et(en(r), n);
    return s.sort(a);
}
function ed(e, t, n) {
    let r = 0 === n ? $ : q;
    return e.localeCompare(t) * r;
}
function e_() {
    let e = (0, u.bG)([C.A], () => C.A.getQuestHomeHeroConfig());
    return r.useMemo(() => ({ questHomeHero: e }), [e]);
}
function ef(e, t) {
    let n = e_(),
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
        let r = ec(e, t, n).map((e) => e.id);
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
                        ? $
                        : q
                    : ed(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
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
function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: s,
        } = Z({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        a = new Map(n.map((e) => [e.id, e])),
        o = ef(n, t),
        l = ep(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = a.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: s };
}
function eg() {
    let e = r.useRef(!1),
        t = (0, u.yK)([C.A], () => Array.from(C.A.claimedQuests.values())),
        n = (0, u.bG)([C.A], () => C.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, N.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eA(e) {
    return (0, u.bG)([C.A], () => null != e && C.A.isQuestExpired(e.id), [e]);
}
function eI(e, t, n) {
    let r = (0, u.bG)([h.A], () => h.A.getChannel(t?.channelId) ?? null),
        i = (0, u.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []),
        s = (0, u.bG)([E.default], () => E.default.getCurrentUser()?.id) === n,
        a = (0, u.bG)([C.A], () => null != e && C.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, H.Ll)(t, r);
    return !o || !!l;
}
function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, u.bG)([p.default], () => p.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eS(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: s } = e,
        a = (0, P.go)();
    return r.useCallback(() => {
        t.id === Y.Fw
            ? window.open(I.A.getArticleURL(W.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, F.pu)(t, { content: n, ctaContent: i, impressionId: a, sourceQuestContent: s });
    }, [t, n, i, a, s]);
}
function ey(e) {
    return (0, u.bG)([C.A], () => C.A.isProgressingOnDesktop(e.id));
}
function ev(e) {
    return r.useMemo(() => (0, B.YL)(e), [e]);
}
function eN(e) {
    let t = (0, u.bG)([C.A], () => C.A.getOptimisticProgress(e.id, a.n.WATCH_VIDEO));
    return r.useMemo(() => (0, j.J$)(e), [e, t]);
}
function eC(e) {
    let t = ey(e),
        n = ev(e),
        r = eN(e);
    return t || n || r;
}
let eb = 1,
    eR = (e) => {
        let t = r.useCallback(() => (0, B.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            s = r.useCallback(() => i(t()), [t]),
            a = eC(e);
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
                }, A.A.Millis.SECOND * eb);
                return () => {
                    clearInterval(t), s();
                };
            }, [e, a, s]),
            n
        );
    };
function eO(e) {
    return r.useMemo(() => (0, B.JC)(e), [e]);
}
let eD = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = ek({ quest: t }),
        s = (0, P.vU)();
    return () => {
        i
            ? (0, F.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: M.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, F.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: M.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eL(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, B.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, f.A)(t);
}
function ew(e) {
    let t = (0, u.bG)([C.A], () => C.A.quests),
        n = eL(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, H.$e)(t, Y.zO);
            return (0, G.BM)(n, e);
        }, [e, t, n]);
    return eA(i) ? null : i;
}
function ex(e) {
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
    let { fetching: e, accounts: t } = (0, u.cf)([m.A], () => ({
            fetching: m.A.isFetching(),
            accounts: m.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: s,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === W.fg2.XBOX),
                r = e.filter((e) => e.type === W.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: s };
}
let eP = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: s } = e,
            [a, l] = r.useState([]),
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
                        (e = await (0, N.vD)(t, n)), l(e.errorHints);
                    } finally {
                        d(!1), s?.(e?.errorHints ?? []);
                    }
                }, [c, i, s, n, t]),
                startingConsoleQuest: c,
                errorHints: a,
            }
        );
    },
    ek = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eM(),
            r = eC(t),
            i = 0 === n.length;
        return (0, B.g5)(t) && i && !r;
    },
    eU = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eM(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            s = I.A.getArticleURL(W.MVz.QUEST_HOW_TO_PLAYSTATION),
            a = I.A.getArticleURL(W.MVz.QUEST_HOW_TO_XBOX),
            o = z.intl.format(z.t.beN4DG, { psHelpdeskArticle: s, xboxHelpdeskArticle: a }),
            l = z.intl.format(z.t.HVS7nh, { helpdeskArticle: r ? s : a });
        return { message: i ? l : o, xboxURL: a, playstationURL: s };
    };
var eG = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eF(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        i = eR(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eV(e) {
    let t = (0, u.bG)([p.default], () => p.default.locale),
        { percentComplete: n } = eR(e),
        r = eO(e),
        i = null != r ? r.percentComplete : n,
        s = 100 * i,
        a = null != r ? `${r?.progress}/${r?.target}` : (0, S.l9)(t, i, { roundingMode: "floor" });
    return { completedRatio: i, percentComplete: s, completedRatioDisplay: a };
}
function eB(e) {
    return [(0, u.bG)([C.A], () => C.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, N.lx)(e, t), [e])];
}
function eH(e, t) {
    let [n, i] = eB(e.id),
        o = r.useMemo(() => (0, F.UR)(e), [e]),
        l = o.includes(Y.fO.DESKTOP),
        u = o.includes(Y.fO.CONSOLE),
        c = ey(e),
        d = ev(e),
        _ = r.useMemo(
            () =>
                (0, s.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP }, () => Y.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP_V2 }, () => Y.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ACTIVITY }, () => Y.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO }, () => Y.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO_ON_MOBILE }, () => Y.fO.DESKTOP)
                    .with({ taskType: a.n.STREAM_ON_DESKTOP }, () => Y.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_XBOX }, () => Y.fO.CONSOLE)
                    .with({ taskType: a.n.PLAY_ON_PLAYSTATION }, () => Y.fO.CONSOLE)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_GAME }, () => Y.fO.DESKTOP)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_ACTIVITY }, () => Y.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? Y.fO.DESKTOP : d ? Y.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, s.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: Y.fO.CONSOLE }, () => b.X0.CONSOLE)
                    .with({ currentProgressingPlatform: Y.fO.DESKTOP }, () => b.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: Y.fO.CONSOLE }, () => b.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: Y.fO.DESKTOP }, () => b.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Y.fO.CONSOLE,
                        },
                        () => b.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: Y.fO.DESKTOP,
                        },
                        () => b.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && l ? b.X0.SELECT : u ? b.X0.CONSOLE : b.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, l, _, f, n],
        ),
        o,
        i,
    ];
}
function ej(e) {
    let t = eO(e),
        n = eR(e),
        [r] = eH(e, n),
        i = eA(e),
        s = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = a.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = s && !o && !i && l && (u || (c && r === b.X0.DESKTOP)),
        _ = (0, y.isWeb)() && d && !(0, F.W1)(e),
        f = (0, y.isMac)() && n.taskType === a.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push(z.intl.string(z.t.MFGxFM)), _ && p.push(z.intl.string(z.t.BV6xDm)), p;
}
function eY(e) {
    return (0, u.bG)([C.A], () => C.A.quests).get(e) ?? null;
}
function eW(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: s } = e,
        a = r.useRef(null);
    r.useEffect(() => {
        null != s &&
            a.current !== t &&
            ((0, x.Mm)({ mode: t, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i }),
            (a.current = t));
    }, [s, n, t, i]),
        r.useEffect(() => {
            if (null != s)
                return () => {
                    (0, x.Mm)({ mode: null, prevMode: a.current, questContent: n, questId: s, sourceQuestContent: i });
                };
        }, [s, n, i]);
}
function eK(e, t) {
    let n = (0, u.bG)([C.A], () => C.A.getQuest(e), [e]),
        i = (0, c.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, l.Mw)(i) ? W.NJ8.DARK : W.NJ8.LIGHT);
        return (0, w.tW)(n, w.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function ez(e) {
    let t = (0, V.mq)(e),
        n = (0, V.k5)(e),
        r = (0, V.$5)(e),
        i = (0, V.Y7)(e),
        s = (0, V.JX)(e),
        a = (0, u.bG)([E.default], () => E.default.getCurrentUser()),
        o = (0, v.TW)(a, K.PremiumTypes.TIER_2);
    if (null == n) return z.intl.formatToPlainString(z.t.l9uXL8, { decorationName: t });
    let l = z.intl.formatToPlainString(z.t.o97tNn, { rewardName: t }),
        c = z.intl.formatToPlainString(z.t.PkyRZo, { rewardName: t, expirationDate: r }),
        d = z.intl.formatToPlainString(z.t.ie4YK0, { rewardName: t, duration: n }),
        _ = z.intl.formatToPlainString(z.t.yCpc0U, { duration: n, rewardName: t }),
        f = o ? l : d,
        p = o ? c : _,
        h = i ? f : p;
    return s ? h : z.intl.formatToPlainString(z.t.tTlItm, { duration: n, decorationName: t });
}
function e$(e) {
    let t = (0, B.TP)(e);
    return { launchInGameActivity: (0, d.A)({ applicationId: t }) };
}
let eq = () => (0, u.yK)([C.A], () => [...C.A.quests.values()]).some((e) => e.preview),
    eZ = () => {
        let e = (0, L.U)({ location: Y.rE.QUEST_PREVIEW_TOOL_2 }),
            t = eq();
        return e && t;
    },
    eX = (e) => {
        let t = e?.userStatus != null && (0, U.gO)(e.userStatus, b.uF.ACTIVITY_PANEL),
            n = eA(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, u.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    eQ = () => {
        let e = (0, u.yK)([C.A], () => [...C.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eJ() {
    return r.useMemo(
        () =>
            Y.pc.map((e) => {
                let [t, n] = e;
                return { heading: (0, k.fx)(t), options: n };
            }),
        [],
    );
}
function e0() {
    return r.useMemo(() => Object.keys(Y.kL).map((e) => ({ label: (0, k.Js)(Y.kL[e]), value: Y.kL[e] })), []);
}
function e1(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        s = r.useRef(null),
        a = r.useRef(null);
    r.useEffect(() => {
        g.default.track(W.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: s.current }),
            (s.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            g.default.track(W.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: a.current ?? [],
                num_quests_visible: i,
            }),
                (a.current = e);
        }, [n, i]);
}
let e2 = (e) => {
        let t = !1,
            n = r.useMemo(() => E.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    e3 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e6() {
    let { enabled: e } = R.sn.useConfig({ location: Y.rE.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, s] = r.useState(e),
        [a, o] = r.useState(!1),
        [l, c] = r.useState(!1),
        { isFetching: d, questHomeHeroConfig: _ } = (0, u.cf)([C.A], () => ({
            isFetching: C.A.isFetchingQuestHomeHero(),
            questHomeHeroConfig: C.A.getQuestHomeHeroConfig(),
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
                    await (0, N.Yf)();
                } catch (e) {
                    s(!1), o(!0);
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
                    s(!1);
                }
            })();
        }, [_]),
        { questHomeHero: a || l ? null : f, isLoading: t || d || i }
    );
}
