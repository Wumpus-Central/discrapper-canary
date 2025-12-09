n.d(t, {
    $I: () => eJ,
    B4: () => eF,
    B6: () => eb,
    Fy: () => eP,
    GI: () => ex,
    Gd: () => eH,
    I: () => eU,
    J2: () => q,
    Jf: () => eA,
    KX: () => ej,
    MP: () => eQ,
    N8: () => eX,
    OH: () => eM,
    Qy: () => eY,
    Rf: () => eT,
    SU: () => e$,
    Ut: () => e3,
    Wi: () => eE,
    _Q: () => ek,
    _s: () => eL,
    aV: () => ez,
    bA: () => e_,
    e5: () => ef,
    eN: () => em,
    fN: () => eR,
    iO: () => eN,
    kJ: () => eD,
    m4: () => e0,
    me: () => eZ,
    qI: () => eV,
    qb: () => eB,
    tP: () => eg,
    tR: () => ep,
    uA: () => eC,
    z: () => eS,
    z1: () => eq,
    z6: () => ew,
    zB: () => eW,
}),
    n(388685),
    n(642613),
    n(539854),
    n(314940);
var r = n(473749);
n(512722);
var i = n(392711),
    a = n(278074),
    o = n(754700),
    s = n(959078),
    l = n(780384),
    c = n(442837),
    u = n(410030),
    d = n(217774),
    f = n(15624),
    p = n(835473);
n(583434);
var _ = n(706454),
    m = n(592125),
    h = n(553795),
    g = n(594174),
    E = n(626135),
    b = n(70956),
    y = n(63063),
    O = n(956664),
    v = n(930153),
    S = n(358085),
    I = n(74538),
    T = n(22095),
    A = n(617136),
    C = n(915750),
    N = n(616022),
    P = n(49436),
    R = n(937797),
    D = n(704161),
    w = n(787695),
    x = n(36243),
    L = n(475595),
    j = n(304696),
    M = n(862657),
    k = n(759479),
    U = n(387745),
    G = n(115179),
    Z = n(254579),
    B = n(283689),
    F = n(542347),
    V = n(324805),
    H = n(981631),
    Y = n(474936),
    W = n(388032);
let K = -1,
    z = 1;
function q() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([N.Z], () => [...N.Z.quests.values()]),
        a = (0, c.Wu)([N.Z], () => [...N.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cj)([N.Z], () => ({
            isFetchingCurrentQuests: N.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: N.Z.lastFetchedCurrentQuests,
        })),
        l = (0, w.c)({ location: V.dr.USE_QUESTS }),
        u = R.DL.useConfig({ location: V.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, T.xw)(), u.enabled && "focused" !== f.Z.getState())) return;
                let { enableNewRequestBehavior: t } = D.Z.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, T.w)(P.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
            }
        }, [e.fetchPolicy, l, t, o, s, e.callerSource, u.enabled]),
        {
            quests: i,
            excludedQuests: a,
            isFetchingCurrentQuests: o,
            hasFetched: t,
        }
    );
}
function Q(e, t) {
    var n, r, i, a, o, s;
    let l = e.id === V.wF,
        c = t.id === V.wF,
        u = l && (null == (n = e.userStatus) ? void 0 : n.completedAt) == null;
    if (u !== (c && (null == (r = t.userStatus) ? void 0 : r.completedAt) == null)) return u ? K : z;
    let d = !(0, M.zi)(e),
        f = (null == (i = e.userStatus) ? void 0 : i.claimedAt) != null,
        p = (null == (a = t.userStatus) ? void 0 : a.claimedAt) != null,
        _ = (null == (o = e.userStatus) ? void 0 : o.enrolledAt) != null,
        m = (null == (s = t.userStatus) ? void 0 : s.enrolledAt) != null,
        { enabled: h, minutes: g } = (0, R.eC)(V.dr.QUEST_HOME_DESKTOP),
        E = b.Z.Millis.MINUTE * g,
        y = e1(e, E),
        O = e1(t, E);
    return d
        ? h && y !== O && (y || O)
            ? y
                ? z
                : K
            : f !== p
              ? f
                  ? z
                  : K
              : _ !== m
                ? _
                    ? K
                    : z
                : ec(e.config.expiresAt, t.config.expiresAt, 1)
        : f !== p
          ? f
              ? K
              : z
          : _ !== m
            ? _
                ? K
                : z
            : ec(e.config.expiresAt, t.config.expiresAt, 0);
}
function X(e, t) {
    return ec(e.config.startsAt, t.config.startsAt, 0);
}
function J(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? ec(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? K
          : null == i && null != a
            ? z
            : ec(i, a, 0);
}
function $(e, t) {
    return ec(e.config.expiresAt, t.config.expiresAt, 1);
}
function ee(e) {
    return function (t, n) {
        let r = !(0, M.zi)(t);
        return !(0, M.zi)(n) !== r ? (r ? K : z) : e(t, n);
    };
}
function et(e) {
    switch (e) {
        case V.yq.MOST_RECENT:
            return X;
        case V.yq.RECENTLY_ENROLLED:
            return J;
        case V.yq.EXPIRING_SOON:
            return $;
        case V.yq.SUGGESTED:
        default:
            return Q;
    }
}
function en(e, t) {
    switch (t) {
        case V.oH.VIDEO:
            return (0, Z.q8)(e);
        case V.oH.PLAY:
            return (0, Z.Nj)({ quest: e }) || (0, Z.Dr)({ quest: e }) || (0, Z.pO)(e);
        default:
            return !1;
    }
}
function er(e, t) {
    switch (t) {
        case V.UP.VIRTUAL_CURRENCY:
            return (0, G.xN)(e.config);
        case V.UP.COLLECTIBLE:
            return (0, G.Xv)(e.config);
        case V.UP.IN_GAME:
            return (0, G.vQ)(e.config) || (0, G.wj)(e.config);
        default:
            return !1;
    }
}
function ei(e) {
    switch (e) {
        case "task":
            return en;
        case "reward":
            return er;
    }
}
function ea(e, t, n) {
    let r = ei(t);
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
let es = {};
function el(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : eo(e, r),
        a = ee(et(n));
    return i.sort(a);
}
function ec(e, t, n) {
    let r = 0 === n ? K : z;
    return e.localeCompare(t) * r;
}
function eu(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = el(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (o.current = e.length), r;
    }, [e, t]);
}
function ed(e) {
    let t = r.useMemo(
            () =>
                e.filter((e) => {
                    var t, n;
                    let r = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
                        i = (null == (n = e.userStatus) ? void 0 : n.claimedAt) != null;
                    return r && i;
                }),
            [e],
        ),
        n = r.useRef([]);
    return r.useMemo(() => {
        if (0 === t.length) return [];
        if (n.current.length > 0 && n.current.length === t.length) return n.current;
        let e = t
            .sort((e, t) => {
                var n, r;
                let i = (null == (n = e.userStatus) ? void 0 : n.claimedAt) == null;
                return i !== ((null == (r = t.userStatus) ? void 0 : r.claimedAt) == null)
                    ? i
                        ? K
                        : z
                    : ec(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var ef = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    ep = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = q({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(n.map((e) => [e.id, e])),
        s = eu(n, t),
        l = ed(n),
        c = [],
        u = [];
    for (let t of (c = "all" === e ? s : l)) {
        let e = o.get(t);
        null != e && u.push(e);
    }
    return {
        quests: u,
        excludedQuests: r,
        isFetchingCurrentQuests: i,
        hasFetched: a,
    };
}
function em() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([N.Z], () => Array.from(N.Z.claimedQuests.values())),
        n = (0, c.e7)([N.Z], () => N.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, T.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n,
        }
    );
}
function eh() {
    return (0, c.e7)([N.Z], () => N.Z.getExpiredQuestsMap());
}
function eg(e) {
    return (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e]);
}
function eE(e, t, n) {
    var r;
    let i = (0, c.e7)([m.Z], () => {
            var e;
            return null != (e = m.Z.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.e7)([N.Z], () => null != N.Z.questEnrollmentBlockedUntil, []),
        o =
            (0, c.e7)([g.default], () => {
                var e;
                return null == (e = g.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, B.Rc)(t, i);
    return !l || !!u;
}
function eb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([_.default], () => _.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ey(e) {
    return (0, c.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id));
}
function eO(e) {
    return r.useMemo(() => (0, Z.Bz)(e), [e]);
}
function ev(e) {
    let t = (0, c.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, F.BM)(e), [e, t]);
}
function eS(e) {
    let t = ey(e),
        n = eO(e),
        r = ev(e);
    return t || n || r;
}
let eI = 1,
    eT = (e) => {
        let t = r.useCallback(() => (0, Z.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = eS(e);
        return (
            r.useEffect(() => {
                var t, n, r;
                if (
                    (null == (t = e.userStatus) ? void 0 : t.enrolledAt) == null ||
                    (null == (n = e.userStatus) ? void 0 : n.completedAt) != null ||
                    (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null ||
                    !o
                )
                    return void a();
                let i = window.setInterval(() => {
                    a();
                }, b.Z.Millis.SECOND * eI);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function eA(e) {
    return r.useMemo(() => (0, Z.b7)(e), [e]);
}
let eC = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eL({ quest: t }),
        a = (0, C.WD)();
    return () => {
        i
            ? (0, U.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, U.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function eN() {
    let { quests: e, isFetchingCurrentQuests: t } = q({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = eh();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, M.vR)(t, P.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, M.zE)(t.userStatus, P.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eP(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, Z.Gs)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, p.Z)(t);
}
function eR(e) {
    let t = (0, c.e7)([N.Z], () => N.Z.quests),
        n = eP(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, B.NI)(t, V.tt);
            return (0, k.Jg)(n, e);
        }, [e, t, n]);
    return eg(i) ? null : i;
}
function eD(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, T.Wf)(e),
            handleProgress: (t) => (0, T.Wf)(e, t),
            handleResetStatusClick: () => (0, T.eT)(e),
            handleResetDismissibilityClick: () => (0, T.T0)(e),
            handleOverrideDeliveryClick: () => (0, T.EW)(e),
        }),
        [e],
    );
}
function ew() {
    let { fetching: e, accounts: t } = (0, c.cj)([h.Z], () => ({
            fetching: h.Z.isFetching(),
            accounts: h.Z.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === H.ABu.XBOX),
                r = e.filter((e) => e.type === H.ABu.PLAYSTATION),
                i = n.concat(r);
            return {
                xboxAccounts: n,
                playstationAccounts: r,
                xboxAndPlaystationAccounts: i,
            };
        }, [t]);
    return {
        fetching: e,
        xboxAccounts: n,
        playstationAccounts: i,
        xboxAndPlaystationAccounts: a,
    };
}
let ex = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [o, l] = r.useState([]),
            [u, d] = r.useState(!1),
            f = (0, c.e7)([h.Z], () => h.Z.getAccounts());
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== s.K.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    null == i || i(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, T.CS)(t, n)), l(e.errorHints);
                    } finally {
                        var r;
                        d(!1), null == a || a(null != (r = null == e ? void 0 : e.errorHints) ? r : []);
                    }
                }, [u, i, a, n, t]),
                startingConsoleQuest: u,
                errorHints: o,
            }
        );
    },
    eL = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = ew(),
            r = eS(t),
            i = 0 === n.length;
        return (0, Z.$J)(t) && i && !r;
    },
    ej = () => {
        let { xboxAccounts: e, playstationAccounts: t } = ew(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = y.Z.getArticleURL(H.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = y.Z.getArticleURL(H.BhN.QUEST_HOW_TO_XBOX),
            s = W.intl.format(W.t.beN4DG, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = W.intl.format(W.t.HVS7nh, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var eM = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function ek(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eT(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eU(e) {
    let t = (0, c.e7)([_.default], () => _.default.locale),
        { percentComplete: n } = eT(e),
        r = eA(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, v.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function eG(e) {
    return [(0, c.e7)([N.Z], () => N.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, T.OR)(e, t), [e])];
}
function eZ(e, t) {
    let [n, i] = eG(e.id),
        s = r.useMemo(() => (0, U.yH)(e), [e]),
        l = s.includes(V.cd.DESKTOP),
        c = s.includes(V.cd.CONSOLE),
        u = ey(e),
        d = eO(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => V.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => V.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => V.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => V.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO_ON_MOBILE }, () => V.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => V.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => V.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => V.cd.CONSOLE)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_GAME }, () => V.cd.DESKTOP)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_ACTIVITY }, () => V.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        p = u ? V.cd.DESKTOP : d ? V.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: p,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: V.cd.CONSOLE }, () => P.LI.CONSOLE)
                    .with({ currentProgressingPlatform: V.cd.DESKTOP }, () => P.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: V.cd.CONSOLE,
                        },
                        () => P.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: V.cd.DESKTOP,
                        },
                        () => P.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: V.cd.CONSOLE,
                        },
                        () => P.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: V.cd.DESKTOP,
                        },
                        () => P.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? P.LI.SELECT : c ? P.LI.CONSOLE : P.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, p, n],
        ),
        s,
        i,
    ];
}
function eB(e) {
    var t, n;
    let r = eA(e),
        i = eT(e),
        [a] = eZ(e, i),
        s = eg(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        p = l && !c && !s && u && (d || (f && a === P.LI.DESKTOP)),
        _ = (0, S.isWeb)() && p && !(0, U.Gd)(e),
        m = (0, S.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && p,
        h = [];
    return m && h.push(W.intl.string(W.t.MFGxFM)), _ && h.push(W.intl.string(W.t.BV6xDm)), h;
}
function eF(e) {
    var t;
    return null != (t = (0, c.e7)([N.Z], () => N.Z.quests).get(e)) ? t : null;
}
function eV(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, A.Ic)({
                mode: t,
                prevMode: o.current,
                questContent: n,
                questId: a,
                sourceQuestContent: i,
            }),
            (o.current = t));
    }, [a, n, t, i]),
        r.useEffect(() => {
            if (null != a)
                return () => {
                    (0, A.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}
function eH(e, t) {
    let n = (0, c.e7)([N.Z], () => N.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? H.BRd.DARK : H.BRd.LIGHT;
        return (0, L.fh)(n, L.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eY(e) {
    let t = (0, G.w8)(e),
        n = (0, G.Kr)(e),
        r = (0, G.FX)(e),
        i = (0, G._p)(e),
        a = (0, G.f$)(e),
        o = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        s = (0, I.I5)(o, Y.PremiumTypes.TIER_2);
    if (null == n) return W.intl.formatToPlainString(W.t.l9uXL8, { decorationName: t });
    let l = W.intl.formatToPlainString(W.t.o97tNn, { rewardName: t }),
        u = W.intl.formatToPlainString(W.t.PkyRZo, {
            rewardName: t,
            expirationDate: r,
        }),
        d = W.intl.formatToPlainString(W.t.ie4YK0, {
            rewardName: t,
            duration: n,
        }),
        f = W.intl.formatToPlainString(W.t.yCpc0U, {
            duration: n,
            rewardName: t,
        }),
        p = s ? l : d,
        _ = s ? u : f,
        m = i ? p : _;
    return a
        ? m
        : W.intl.formatToPlainString(W.t.tTlItm, {
              duration: n,
              decorationName: t,
          });
}
function eW(e) {
    let t = (0, Z.nY)(e);
    return { launchInGameActivity: (0, d.Z)({ applicationId: t }) };
}
let eK = () => (0, c.Wu)([N.Z], () => [...N.Z.quests.values()]).some((e) => e.preview),
    ez = () => {
        let e = (0, x.T)({ location: V.dr.QUEST_PREVIEW_TOOL_2 }),
            t = eK();
        return e && t;
    },
    eq = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, M.zE)(e.userStatus, P.jn.ACTIVITY_PANEL),
            r = eg(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.e7)([N.Z], () => null != N.Z.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    eQ = () => {
        let e = (0, c.Wu)([N.Z], () => [...N.Z.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function eX() {
    return r.useMemo(
        () =>
            V.Ew.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, j.T2)(t),
                    options: n,
                };
            }),
        [],
    );
}
function eJ() {
    return r.useMemo(
        () =>
            Object.keys(V.yq).map((e) => ({
                label: (0, j.NL)(V.yq[e]),
                value: V.yq[e],
            })),
        [],
    );
}
function e$(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    r.useEffect(() => {
        E.default.track(H.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
            sort_method: t,
            previous_sort_method: a.current,
        }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            var e;
            let t = n.map((e) => e.filter);
            E.default.track(H.rMx.QUEST_HOME_FILTERS_CHANGED, {
                filters: t,
                previous_filters: null != (e = o.current) ? e : [],
                num_quests_visible: i,
            }),
                (o.current = t);
        }, [n, i]);
}
let e0 = (e) => {
        let t = !1,
            n = r.useMemo(() => {
                var e;
                return (null == (e = g.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
            }, []);
        return t || n || e.preview;
    },
    e1 = (e, t) => {
        var n, r, i;
        let a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null;
        return (
            (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null &&
            !a &&
            Date.now() - new Date(null == (i = e.userStatus) ? void 0 : i.enrolledAt).getTime() > t
        );
    };
function e3() {
    let { enabled: e } = R.n0.useConfig({ location: V.dr.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [o, s] = r.useState(!1),
        [l, u] = r.useState(!1),
        { isFetching: d, takeoverConfig: f } = (0, c.cj)([N.Z], () => ({
            isFetching: N.Z.isFetchingQuestHomeTakeover(),
            takeoverConfig: N.Z.getQuestHomeTakeoverConfig(),
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
            e && t();
            async function t() {
                try {
                    await (0, T.Kh)();
                } catch (e) {
                    a(!1), s(!0);
                } finally {
                    n(!1);
                }
            }
        }, [e]),
        r.useEffect(() => {
            !(async function () {
                try {
                    if (null == f) return;
                    await Promise.all([(0, O.pt)(f.assetHeroImage.url), (0, O.pt)(f.assetSponsorImage.url)]);
                } catch (e) {
                    u(!0);
                } finally {
                    a(!1);
                }
            })();
        }, [f]),
        {
            takeover: o || l ? null : p,
            isLoading: t || d || i,
        }
    );
}
