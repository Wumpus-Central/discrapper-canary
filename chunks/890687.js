"use strict";
n.d(t, {
    $P: () => e2,
    BL: () => eL,
    C5: () => eW,
    Du: () => eP,
    F3: () => eF,
    FA: () => ez,
    H6: () => eK,
    I3: () => eD,
    In: () => eV,
    Iq: () => eA,
    L1: () => eE,
    LS: () => eI,
    NC: () => em,
    Nb: () => e0,
    O9: () => eB,
    Qh: () => eg,
    Qo: () => ej,
    RR: () => eU,
    S5: () => eS,
    UX: () => eG,
    Vn: () => eR,
    Wj: () => ek,
    XD: () => e1,
    YW: () => eM,
    Yl: () => eT,
    a5: () => e$,
    aC: () => eY,
    do: () => ey,
    fc: () => eb,
    j$: () => ex,
    mL: () => X,
    nv: () => e3,
    oH: () => ew,
    p5: () => eX,
    pT: () => eJ,
    sb: () => eQ,
    vG: () => e4,
    zW: () => eq,
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
    N = n(178540),
    C = n(829219),
    R = n(859703),
    O = n(341915),
    b = n(245853),
    D = n(302654),
    L = n(677402),
    w = n(807876),
    M = n(579473),
    x = n(561844),
    P = n(590202),
    k = n(971649),
    U = n(651892),
    G = n(710969),
    F = n(639214),
    V = n(901406),
    B = n(92246),
    H = n(792620),
    j = n(814793),
    Y = n(753386),
    W = n(654487),
    K = n(652215),
    $ = n(788868),
    z = n(985018);
let q = -1,
    Z = 1;
function X() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = r.useState(!1),
        i = (0, u.yK)([R.A], () => [...R.A.quests.values()]),
        s = (0, u.yK)([R.A], () => [...R.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: o } = (0, u.cf)([R.A], () => ({
            isFetchingCurrentQuests: R.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: R.A.lastFetchedCurrentQuests,
        })),
        l = (0, L.s)({ location: W.rE.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === o)) &&
                l &&
                !t &&
                !a
            ) {
                if ((n(!0), (0, C.N1)(), (0, y.isMac)() && "focused" !== _.A.getState())) return;
                let { enableNewRequestBehavior: t } = D.A.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, C.r8)(O.yW.DESKTOP_ACCOUNT_PANEL_AREA, `use_quests_${e.callerSource}`);
            }
        }, [e.fetchPolicy, l, t, a, o, e.callerSource]),
        { quests: i, excludedQuests: s, isFetchingCurrentQuests: a, hasFetched: t }
    );
}
function Q(e, t, n) {
    let r = e.id === W.aJ,
        i = t.id === W.aJ,
        s = r && e.userStatus?.completedAt == null;
    if (s !== (i && t.userStatus?.completedAt == null)) return s ? q : Z;
    let a = !(0, G.Ic)(e),
        o = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        u = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        d = 20 * A.A.Millis.MINUTE,
        _ = e6(e, d),
        f = e6(t, d);
    if (a) {
        let { questHomeHero: r } = n,
            i = null != r && (0, j.I0)(r, e.id),
            s = null != r && (0, j.I0)(r, t.id);
        return i !== s && (i || s)
            ? i
                ? q
                : Z
            : _ !== f && (_ || f)
              ? _
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
            return Q;
    }
}
function ei(e, t) {
    switch (t) {
        case W.Pc.VIDEO:
            return (0, H.vv)(e);
        case W.Pc.PLAY:
            return (0, H.t)({ quest: e }) || (0, H.fE)({ quest: e }) || (0, H.vl)(e);
        default:
            return !1;
    }
}
function es(e, t) {
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
function ea(e) {
    switch (e) {
        case "task":
            return ei;
        case "reward":
            return es;
    }
}
function eo(e, t, n) {
    let r = ea(t);
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
    ec = { questHomeHero: null };
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec,
        { sortMethod: r, filters: i } = t,
        s = null == i || 0 === i.length ? e : el(e, i),
        a = en(er(r), n);
    return s.sort(a);
}
function e_(e, t, n) {
    let r = 0 === n ? q : Z;
    return e.localeCompare(t) * r;
}
function ef() {
    let e = (0, u.bG)([R.A], () => R.A.getQuestHomeHeroConfig());
    return r.useMemo(() => ({ questHomeHero: e }), [e]);
}
function ep(e, t) {
    let n = ef(),
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
        let r = ed(e, t, n).map((e) => e.id);
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
                        : Z
                    : e_(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var em = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eE = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: s,
        } = X({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        a = new Map(n.map((e) => [e.id, e])),
        o = ep(n, t),
        l = eh(n),
        u = [],
        c = [];
    for (let t of (u = "all" === e ? o : l)) {
        let e = a.get(t);
        null != e && c.push(e);
    }
    return { quests: c, excludedQuests: r, isFetchingCurrentQuests: i, hasFetched: s };
}
function eA() {
    let e = r.useRef(!1),
        t = (0, u.yK)([R.A], () => Array.from(R.A.claimedQuests.values())),
        n = (0, u.bG)([R.A], () => R.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, C.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eI(e) {
    return (0, u.bG)([R.A], () => null != e && R.A.isQuestExpired(e.id), [e]);
}
function eT(e, t, n) {
    let r = (0, u.bG)([h.A], () => h.A.getChannel(t?.channelId) ?? null),
        i = (0, u.bG)([R.A], () => null != R.A.questEnrollmentBlockedUntil, []),
        s = (0, u.bG)([E.default], () => E.default.getCurrentUser()?.id) === n,
        a = (0, u.bG)([R.A], () => null != e && R.A.isQuestExpired(e.id), [e]);
    if (null == e || i || a || s) return !1;
    let o = e.userStatus?.claimedAt != null,
        l = (0, j.Ll)(t, r);
    return !o || !!l;
}
function eS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, u.bG)([p.default], () => p.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ey(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: s } = e,
        a = (0, k.go)();
    return r.useCallback(() => {
        t.id === W.Fw
            ? window.open(I.A.getArticleURL(K.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, V.pu)(t, { content: n, ctaContent: i, impressionId: a, sourceQuestContent: s });
    }, [t, n, i, a, s]);
}
function ev(e) {
    return (0, u.bG)([R.A], () => R.A.isProgressingOnDesktop(e.id));
}
function eN(e) {
    return r.useMemo(() => (0, H.YL)(e), [e]);
}
function eC(e) {
    let t = (0, u.bG)([R.A], () => R.A.getOptimisticProgress(e.id, a.n.WATCH_VIDEO));
    return r.useMemo(() => (0, Y.J$)(e), [e, t]);
}
function eR(e) {
    let t = ev(e),
        n = eN(e),
        r = eC(e);
    return t || n || r;
}
let eO = 1,
    eb = (e) => {
        let t = r.useCallback(() => (0, H.Yh)(e), [e]),
            [n, i] = r.useState(t()),
            s = r.useCallback(() => i(t()), [t]),
            a = eR(e);
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
                }, A.A.Millis.SECOND * eO);
                return () => {
                    clearInterval(t), s();
                };
            }, [e, a, s]),
            n
        );
    };
function eD(e) {
    return r.useMemo(() => (0, H.JC)(e), [e]);
}
let eL = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eU({ quest: t }),
        s = (0, k.vU)();
    return () => {
        i
            ? (0, V.se)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: P.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: s?.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, V.b6)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: P.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: s?.getId(),
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
function eM(e) {
    let t = (0, u.bG)([R.A], () => R.A.quests),
        n = ew(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, j.$e)(t, W.zO);
            return (0, F.BM)(n, e);
        }, [e, t, n]);
    return eI(i) ? null : i;
}
function ex(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, C.Yb)(e),
            handleProgress: (t) => (0, C.Yb)(e, t),
            handleResetStatusClick: () => (0, C.UZ)(e),
            handleResetDismissibilityClick: () => (0, C.Gt)(e),
            handleOverrideDeliveryClick: () => (0, C.d6)(e),
        }),
        [e],
    );
}
function eP() {
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
                n = e.filter((e) => e.type === K.fg2.XBOX),
                r = e.filter((e) => e.type === K.fg2.PLAYSTATION),
                i = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: i };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: s };
}
let ek = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: s } = e,
            [a, l] = r.useState([]),
            [c, d] = r.useState(!1),
            _ = (0, u.bG)([m.A], () => m.A.getAccounts()),
            f = (0, N.O)((e) => e.clearErrorHintsByType);
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== o._.EXPIRED_CREDENTIAL)), f(t, o._.EXPIRED_CREDENTIAL);
            }, [_, f, t]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (c) return;
                    i?.(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, C.vD)(t, n)), l(e.errorHints);
                    } finally {
                        d(!1), s?.(e?.errorHints ?? []);
                    }
                }, [c, i, s, n, t]),
                startingConsoleQuest: c,
                errorHints: a,
            }
        );
    },
    eU = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eP(),
            r = eR(t),
            i = 0 === n.length;
        return (0, H.g5)(t) && i && !r;
    },
    eG = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eP(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            s = I.A.getArticleURL(K.MVz.QUEST_HOW_TO_PLAYSTATION),
            a = I.A.getArticleURL(K.MVz.QUEST_HOW_TO_XBOX),
            o = z.intl.format(z.t.beN4DG, { psHelpdeskArticle: s, xboxHelpdeskArticle: a }),
            l = z.intl.format(z.t.HVS7nh, { helpdeskArticle: r ? s : a });
        return { message: i ? l : o, xboxURL: a, playstationURL: s };
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
        i = eb(e).percentComplete > 0;
    return r ? 4 : n ? 3 : i && t ? 2 : 1 * !!t;
}
function eB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, u.bG)([p.default], () => p.default.locale),
        { percentComplete: r } = eb(e),
        i = eD(e),
        s = null != i ? i.percentComplete : r,
        a = 100 * s,
        o = null == i || t ? (0, S.l9)(n, s, { roundingMode: "floor" }) : `${i?.progress}/${i?.target}`;
    return { completedRatio: s, percentComplete: a, completedRatioDisplay: o };
}
function eH(e) {
    return [(0, u.bG)([R.A], () => R.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, C.lx)(e, t), [e])];
}
function ej(e, t) {
    let [n, i] = eH(e.id),
        o = r.useMemo(() => (0, V.UR)(e), [e]),
        l = o.includes(W.fO.DESKTOP),
        u = o.includes(W.fO.CONSOLE),
        c = ev(e),
        d = eN(e),
        _ = r.useMemo(
            () =>
                (0, s.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP }, () => W.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_DESKTOP_V2 }, () => W.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ACTIVITY }, () => W.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO }, () => W.fO.DESKTOP)
                    .with({ taskType: a.n.WATCH_VIDEO_ON_MOBILE }, () => W.fO.DESKTOP)
                    .with({ taskType: a.n.STREAM_ON_DESKTOP }, () => W.fO.DESKTOP)
                    .with({ taskType: a.n.PLAY_ON_XBOX }, () => W.fO.CONSOLE)
                    .with({ taskType: a.n.PLAY_ON_PLAYSTATION }, () => W.fO.CONSOLE)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_GAME }, () => W.fO.DESKTOP)
                    .with({ taskType: a.n.ACHIEVEMENT_IN_ACTIVITY }, () => W.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = c ? W.fO.DESKTOP : d ? W.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, s.YW)({ lastPlatformProgress: _, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: W.fO.CONSOLE }, () => O.X0.CONSOLE)
                    .with({ currentProgressingPlatform: W.fO.DESKTOP }, () => O.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: W.fO.CONSOLE }, () => O.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: W.fO.DESKTOP }, () => O.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: W.fO.CONSOLE,
                        },
                        () => O.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: W.fO.DESKTOP,
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
        n = eb(e),
        [r] = ej(e, n),
        i = eI(e),
        s = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = null == t,
        u = a.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        c = 0 === n.percentComplete,
        d = s && !o && !i && l && (u || (c && r === O.X0.DESKTOP)),
        _ = (0, y.isWeb)() && d && !(0, V.W1)(e),
        f = (0, y.isMac)() && n.taskType === a.n.STREAM_ON_DESKTOP && d,
        p = [];
    return f && p.push(z.intl.string(z.t.MFGxFM)), _ && p.push(z.intl.string(z.t.BV6xDm)), p;
}
function eW(e) {
    return (0, u.bG)([R.A], () => R.A.quests).get(e) ?? null;
}
function eK(e) {
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
function e$(e, t) {
    let n = (0, u.bG)([R.A], () => R.A.getQuest(e), [e]),
        i = (0, c.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, l.Mw)(i) ? K.NJ8.DARK : K.NJ8.LIGHT);
        return (0, M.tW)(n, M.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function ez(e) {
    let t = (0, B.mq)(e),
        n = (0, B.k5)(e),
        r = (0, B.$5)(e),
        i = (0, B.Y7)(e),
        s = (0, B.JX)(e),
        a = (0, u.bG)([E.default], () => E.default.getCurrentUser()),
        o = (0, v.TW)(a, $.PremiumTypes.TIER_2);
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
function eq(e) {
    let t = (0, H.TP)(e);
    return { launchInGameActivity: (0, d.A)({ applicationId: t }) };
}
let eZ = () => (0, u.yK)([R.A], () => [...R.A.quests.values()]).some((e) => e.preview),
    eX = () => {
        let e = (0, w.U)({ location: W.rE.QUEST_PREVIEW_TOOL_2 }),
            t = eZ();
        return e && t;
    },
    eQ = (e) => {
        let t = e?.userStatus != null && (0, G.gO)(e.userStatus, O.uF.ACTIVITY_PANEL),
            n = eI(e ?? null),
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
            W.pc.map((e) => {
                let [t, n] = e;
                return { heading: (0, U.fx)(t), options: n };
            }),
        [],
    );
}
function e1() {
    return r.useMemo(() => Object.keys(W.kL).map((e) => ({ label: (0, U.Js)(W.kL[e]), value: W.kL[e] })), []);
}
function e2(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        s = r.useRef(null),
        a = r.useRef(null);
    r.useEffect(() => {
        g.default.track(K.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: s.current }),
            (s.current = t);
    }, [t]),
        r.useEffect(() => {
            let e = n.map((e) => e.filter);
            g.default.track(K.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: a.current ?? [],
                num_quests_visible: i,
            }),
                (a.current = e);
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
    let { enabled: e } = b.sn.useConfig({ location: W.rE.QUEST_HOME_DESKTOP }),
        { enabled: t } = b.rI.useConfig({ location: "useFetchQuestHomeHeroConfig" }),
        [n, i] = r.useState(e),
        [s, a] = r.useState(e),
        [o, l] = r.useState(!1),
        [c, d] = r.useState(!1),
        { isFetching: _, questHomeHeroConfig: f } = (0, u.cf)([R.A], () => ({
            isFetching: R.A.isFetchingQuestHomeHero(),
            questHomeHeroConfig: R.A.getQuestHomeHeroConfig(),
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
                    t ? await (0, C.Am)() : await (0, C.Yf)();
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
                    await Promise.all([(0, T.NN)(f.assetHeroImage.url), (0, T.NN)(f.assetSponsorImage.url)]);
                } catch (e) {
                    d(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [f]),
        { questHomeHero: o || c ? null : p, isLoading: n || _ || s }
    );
}
