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
    Iq: () => eA,
    L1: () => eg,
    LS: () => eI,
    NC: () => em,
    Nb: () => eJ,
    O9: () => eV,
    Qh: () => eE,
    Qo: () => ej,
    RR: () => ek,
    S5: () => eS,
    UX: () => eU,
    Vn: () => eN,
    Wj: () => eP,
    XD: () => e0,
    YW: () => ew,
    Yl: () => eT,
    _b: () => e6,
    a5: () => eK,
    aC: () => eH,
    fc: () => eR,
    j$: () => ex,
    mL: () => Z,
    nv: () => e2,
    oH: () => eL,
    p5: () => eX,
    pT: () => eQ,
    sb: () => eZ,
    zW: () => e$,
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
    S = n(67486),
    y = n(252424),
    v = n(723702),
    C = n(927578),
    N = n(829219),
    b = n(859703),
    R = n(341915),
    O = n(245853),
    D = n(302654),
    L = n(677402),
    w = n(807876),
    x = n(579473),
    M = n(561844),
    P = n(590202),
    k = n(971649),
    U = n(651892),
    G = n(710969),
    F = n(639214),
    V = n(901406),
    B = n(92246),
    j = n(792620),
    H = n(814793),
    Y = n(753386),
    W = n(654487),
    K = n(652215),
    z = n(788868),
    $ = n(985018);
let q = -1,
    X = 1;
function Z() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, u.yK)([b.A], () => [...b.A.quests.values()]),
        a = (0, u.yK)([b.A], () => [...b.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: o } = (0, u.cf)([b.A], () => ({
            isFetchingCurrentQuests: b.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: b.A.lastFetchedCurrentQuests,
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
                !(0, S.I)()
            ) {
                if ((n(!0), (0, N.N1)(), (0, v.isMac)() && "focused" !== _.A.getState())) return;
                let { enableNewRequestBehavior: t } = D.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, N.r8)(R.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, s, o, e.callerSource]),
        { quests: i, excludedQuests: a, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function Q(e, t, n) {
    let r = e.id === W.aJ,
        i = t.id === W.aJ,
        a = r && e.userStatus?.completedAt == null;
    if (a !== (i && t.userStatus?.completedAt == null)) return a ? q : X;
    let s = !(0, G.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        { enabled: d, minutes: _ } = (0, O.L5)(W.rE.QUEST_HOME_DESKTOP),
        f = A.A.Millis.MINUTE * _,
        p = e3(e, f),
        h = e3(t, f);
    if (s) {
        let { takeover: r } = n,
            i = null != r && (0, H.f0)(r, e.id),
            a = null != r && (0, H.f0)(r, t.id);
        return i !== a && (i || a)
            ? i
                ? q
                : X
            : d && p !== h && (p || h)
              ? p
                  ? X
                  : q
              : o !== l
                ? o
                    ? X
                    : q
                : u !== c
                  ? u
                      ? q
                      : X
                  : e_(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return o !== l ? (o ? q : X) : u !== c ? (u ? q : X) : e_(e.config.expiresAt, t.config.expiresAt, 0);
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
            ? X
            : e_(r, i, 0);
}
function et(e, t, n) {
    return e_(e.config.expiresAt, t.config.expiresAt, 1);
}
function en(e, t) {
    return function (n, r) {
        let i = !(0, G.Ic)(n);
        return !(0, G.Ic)(r) !== i ? (i ? q : X) : e(n, r, t);
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
            return Q;
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
let eu = {},
    ec = { takeover: null };
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec,
        { sortMethod: r, filters: i } = t,
        a = null == i || 0 === i.length ? e : el(e, i),
        s = en(er(r), n);
    return a.sort(s);
}
function e_(e, t, n) {
    let r = 0 === n ? q : X;
    return e.localeCompare(t) * r;
}
function ef() {
    let e = (0, u.bG)([b.A], () => b.A.getQuestHomeTakeoverConfig());
    return r.useMemo(() => ({ takeover: e }), [e]);
}
function ep(e, t) {
    let n = ef(),
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
        let r = ed(e, t, n).map((e) => e.id);
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
function eh(e) {
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
                        : X
                    : e_(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var em = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eg = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = Z({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        s = new Map(n.map((e) => [e.id, e])),
        o = ep(n, t),
        l = eh(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = s.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: a };
}
function eA() {
    let e = r.useRef(!1),
        t = (0, u.yK)([b.A], () => Array.from(b.A.claimedQuests.values())),
        n = (0, u.bG)([b.A], () => b.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, N.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eI(e) {
    return (0, u.bG)([b.A], () => null != e && b.A.isQuestExpired(e.id), [e]);
}
function eT(e, t, n) {
    let r = (0, u.bG)([h.A], () => h.A.getChannel(t?.channelId) ?? null),
        i = (0, u.bG)([b.A], () => null != b.A.questEnrollmentBlockedUntil, []),
        a = (0, u.bG)([g.default], () => g.default.getCurrentUser()?.id) === n,
        s = (0, u.bG)([b.A], () => null != e && b.A.isQuestExpired(e.id), [e]);
    if (null == e || i || s || a) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, H.Ll)(t, r);
    return !o || !!l;
}
function eS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, u.bG)([p.default], () => p.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ey(e) {
    return (0, u.bG)([b.A], () => b.A.isProgressingOnDesktop(e.id));
}
function ev(e) {
    return r.useMemo(() => (0, j.YL)(e), [e]);
}
function eC(e) {
    let t = (0, u.bG)([b.A], () => b.A.getOptimisticProgress(e.id, s.n.WATCH_VIDEO));
    return r.useMemo(() => (0, Y.J$)(e), [e, t]);
}
function eN(e) {
    let t = ey(e),
        n = ev(e),
        r = eC(e);
    return t || n || r;
}
let eb = 1,
    eR = (e) => {
        let t = r.useCallback(() => (0, j.Yh)(e), [e]),
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
                }, A.A.Millis.SECOND * eb);
                return () => {
                    clearInterval(t), a();
                };
            }, [e, s, a]),
            n
        );
    };
function eO(e) {
    return r.useMemo(() => (0, j.JC)(e), [e]);
}
let eD = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = ek({ quest: t }),
        a = (0, k.vU)();
    return () => {
        i
            ? (0, V.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: P.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: a?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, V.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: P.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: a?.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eL(e) {
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
function ew(e) {
    let t = (0, u.bG)([b.A], () => b.A.quests),
        n = eL(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, H.$e)(t, W.zO);
            return (0, F.BM)(n, e);
        }, [e, t, n]);
    return eI(i) ? null : i;
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
    ek = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eM(),
            r = eN(t),
            i = 0 === n.length;
        return (0, j.g5)(t) && i && !r;
    },
    eU = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eM(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = I.A.getArticleURL(K.MVz.QUEST_HOW_TO_PLAYSTATION),
            s = I.A.getArticleURL(K.MVz.QUEST_HOW_TO_XBOX),
            o = $.intl.format($.t.beN4DG, { psHelpdeskArticle: a, xboxHelpdeskArticle: s }),
            l = $.intl.format($.t.HVS7nh, { helpdeskArticle: r ? a : s });
        return { message: i ? l : o, xboxURL: s, playstationURL: a };
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
        a = 100 * i,
        s = null != r ? `${r?.progress}/${r?.target}` : (0, y.l9)(t, i, { roundingMode: "floor" });
    return { completedRatio: i, percentComplete: a, completedRatioDisplay: s };
}
function eB(e) {
    return [(0, u.bG)([b.A], () => b.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, N.lx)(e, t), [e])];
}
function ej(e, t) {
    let [n, i] = eB(e.id),
        o = r.useMemo(() => (0, V.UR)(e), [e]),
        l = o.includes(W.fO.DESKTOP),
        u = o.includes(W.fO.CONSOLE),
        c = ey(e),
        d = ev(e),
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
function eH(e) {
    let t = eO(e),
        n = eR(e),
        [r] = ej(e, n),
        i = eI(e),
        a = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = s.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = a && !o && !i && l && (u || (c && r === R.X0.DESKTOP)),
        _ = (0, v.isWeb)() && d && !(0, V.W1)(e),
        f = (0, v.isMac)() && n.taskType === s.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push($.intl.string($.t.MFGxFM)), _ && p.push($.intl.string($.t.BV6xDm)), p;
}
function eY(e) {
    return (0, u.bG)([b.A], () => b.A.quests).get(e) ?? null;
}
function eW(e) {
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
function eK(e, t) {
    let n = (0, u.bG)([b.A], () => b.A.getQuest(e), [e]),
        i = (0, c.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, l.Mw)(i) ? K.NJ8.DARK : K.NJ8.LIGHT);
        return (0, x.tW)(n, x.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function ez(e) {
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
function e$(e) {
    let t = (0, j.TP)(e);
    return { launchInGameActivity: (0, d.A)({ applicationId: t }) };
}
let eq = () => (0, u.yK)([b.A], () => [...b.A.quests.values()]).some((e) => e.preview),
    eX = () => {
        let e = (0, w.U)({ location: W.rE.QUEST_PREVIEW_TOOL_2 }),
            t = eq();
        return e && t;
    },
    eZ = (e) => {
        let t = e?.userStatus != null && (0, G.gO)(e.userStatus, R.uF.ACTIVITY_PANEL),
            n = eI(e ?? null),
            r = e?.userStatus?.claimedAt != null,
            i = (0, u.bG)([b.A], () => null != b.A.questEnrollmentBlockedUntil, []);
        return !t && !n && !r && !i;
    },
    eQ = () => {
        let e = (0, u.yK)([b.A], () => [...b.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eJ() {
    return r.useMemo(
        () =>
            W.pc.map((e) => {
                let [t, n] = e;
                return { heading: (0, U.fx)(t), options: n };
            }),
        [],
    );
}
function e0() {
    return r.useMemo(() => Object.keys(W.kL).map((e) => ({ label: (0, U.Js)(W.kL[e]), value: W.kL[e] })), []);
}
function e1(e) {
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
let e2 = (e) => {
        let t = !1,
            n = r.useMemo(() => g.default.getCurrentUser()?.isStaff() === !0, []);
        return t || n || e.preview;
    },
    e3 = (e, t) => {
        let n = e.userStatus?.completedAt != null;
        return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
    };
function e6() {
    let { enabled: e } = O.XM.useConfig({ location: W.rE.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [s, o] = r.useState(!1),
        [l, c] = r.useState(!1),
        { isFetching: d, takeoverConfig: _ } = (0, u.cf)([b.A], () => ({
            isFetching: b.A.isFetchingQuestHomeTakeover(),
            takeoverConfig: b.A.getQuestHomeTakeoverConfig(),
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
