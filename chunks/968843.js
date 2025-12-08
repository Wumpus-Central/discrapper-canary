n.d(t, {
    $I: () => e5,
    B4: () => eq,
    B6: () => eA,
    Fy: () => eM,
    GI: () => eZ,
    Gd: () => eX,
    I: () => eY,
    J2: () => en,
    Jf: () => ex,
    KX: () => eF,
    MP: () => e2,
    N8: () => e4,
    OH: () => eV,
    Qy: () => eJ,
    Rf: () => eD,
    SU: () => e8,
    Ut: () => e9,
    Wi: () => eT,
    _Q: () => eH,
    _s: () => eB,
    aV: () => e1,
    bA: () => eO,
    e5: () => eb,
    eN: () => ev,
    fN: () => ek,
    iO: () => ej,
    kJ: () => eU,
    m4: () => e6,
    me: () => eK,
    qI: () => eQ,
    qb: () => ez,
    tP: () => eI,
    tR: () => ey,
    uA: () => eL,
    z: () => eR,
    z1: () => e3,
    z6: () => eG,
    zB: () => e$,
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
    d = n(317381),
    f = n(197386),
    p = n(15624),
    _ = n(728345),
    m = n(835473);
n(583434);
var h = n(48131),
    g = n(591472),
    E = n(813370),
    b = n(703656),
    y = n(706454),
    O = n(592125),
    v = n(553795),
    S = n(594174),
    I = n(626135),
    T = n(70956),
    A = n(63063),
    C = n(956664),
    N = n(930153),
    P = n(358085),
    R = n(74538),
    w = n(22095),
    D = n(617136),
    x = n(915750),
    L = n(616022),
    j = n(49436),
    M = n(937797),
    k = n(704161),
    U = n(787695),
    G = n(36243),
    Z = n(475595),
    B = n(304696),
    F = n(862657),
    V = n(759479),
    H = n(387745),
    Y = n(115179),
    W = n(254579),
    K = n(283689),
    z = n(542347),
    q = n(324805),
    Q = n(981631),
    X = n(408491),
    J = n(474936),
    $ = n(388032);
let ee = -1,
    et = 1;
function en() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([L.Z], () => [...L.Z.quests.values()]),
        a = (0, c.Wu)([L.Z], () => [...L.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cj)([L.Z], () => ({
            isFetchingCurrentQuests: L.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: L.Z.lastFetchedCurrentQuests,
        })),
        l = (0, U.c)({ location: q.dr.USE_QUESTS }),
        u = M.DL.useConfig({ location: q.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o
            ) {
                if ((n(!0), (0, w.xw)(), u.enabled && "focused" !== p.Z.getState())) return;
                let { enableNewRequestBehavior: t } = k.Z.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, w.w)(j.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
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
function er(e, t) {
    var n, r, i, a, o, s;
    let l = e.id === q.wF,
        c = t.id === q.wF,
        u = l && (null == (n = e.userStatus) ? void 0 : n.completedAt) == null;
    if (u !== (c && (null == (r = t.userStatus) ? void 0 : r.completedAt) == null)) return u ? ee : et;
    let d = !(0, F.zi)(e),
        f = (null == (i = e.userStatus) ? void 0 : i.claimedAt) != null,
        p = (null == (a = t.userStatus) ? void 0 : a.claimedAt) != null,
        _ = (null == (o = e.userStatus) ? void 0 : o.enrolledAt) != null,
        m = (null == (s = t.userStatus) ? void 0 : s.enrolledAt) != null,
        { enabled: h, minutes: g } = (0, M.eC)(q.dr.QUEST_HOME_DESKTOP),
        E = T.Z.Millis.MINUTE * g,
        b = e7(e, E),
        y = e7(t, E);
    return d
        ? h && b !== y && (b || y)
            ? b
                ? et
                : ee
            : f !== p
              ? f
                  ? et
                  : ee
              : _ !== m
                ? _
                    ? ee
                    : et
                : eh(e.config.expiresAt, t.config.expiresAt, 1)
        : f !== p
          ? f
              ? ee
              : et
          : _ !== m
            ? _
                ? ee
                : et
            : eh(e.config.expiresAt, t.config.expiresAt, 0);
}
function ei(e, t) {
    return eh(e.config.startsAt, t.config.startsAt, 0);
}
function ea(e, t) {
    var n, r;
    let i = null == (n = e.userStatus) ? void 0 : n.enrolledAt,
        a = null == (r = t.userStatus) ? void 0 : r.enrolledAt;
    return null == i && null == a
        ? eh(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == a
          ? ee
          : null == i && null != a
            ? et
            : eh(i, a, 0);
}
function eo(e, t) {
    return eh(e.config.expiresAt, t.config.expiresAt, 1);
}
function es(e) {
    return function (t, n) {
        let r = !(0, F.zi)(t);
        return !(0, F.zi)(n) !== r ? (r ? ee : et) : e(t, n);
    };
}
function el(e) {
    switch (e) {
        case q.yq.MOST_RECENT:
            return ei;
        case q.yq.RECENTLY_ENROLLED:
            return ea;
        case q.yq.EXPIRING_SOON:
            return eo;
        case q.yq.SUGGESTED:
        default:
            return er;
    }
}
function ec(e, t) {
    switch (t) {
        case q.oH.VIDEO:
            return (0, W.q8)(e);
        case q.oH.PLAY:
            return (0, W.Nj)({ quest: e }) || (0, W.Dr)({ quest: e }) || (0, W.pO)(e);
        default:
            return !1;
    }
}
function eu(e, t) {
    switch (t) {
        case q.UP.VIRTUAL_CURRENCY:
            return (0, Y.xN)(e.config);
        case q.UP.COLLECTIBLE:
            return (0, Y.Xv)(e.config);
        case q.UP.IN_GAME:
            return (0, Y.vQ)(e.config) || (0, Y.wj)(e.config);
        default:
            return !1;
    }
}
function ed(e) {
    switch (e) {
        case "task":
            return ec;
        case "reward":
            return eu;
    }
}
function ef(e, t, n) {
    let r = ed(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function ep(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return ef(e, n, r);
        }),
    );
}
let e_ = {};
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : ep(e, r),
        a = es(el(n));
    return i.sort(a);
}
function eh(e, t, n) {
    let r = 0 === n ? ee : et;
    return e.localeCompare(t) * r;
}
function eg(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = em(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (o.current = e.length), r;
    }, [e, t]);
}
function eE(e) {
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
                        ? ee
                        : et
                    : eh(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var eb = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    ey = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = en({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(n.map((e) => [e.id, e])),
        s = eg(n, t),
        l = eE(n),
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
function ev() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([L.Z], () => Array.from(L.Z.claimedQuests.values())),
        n = (0, c.e7)([L.Z], () => L.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, w.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n,
        }
    );
}
function eS() {
    return (0, c.e7)([L.Z], () => L.Z.getExpiredQuestsMap());
}
function eI(e) {
    return (0, c.e7)([L.Z], () => null != e && L.Z.isQuestExpired(e.id), [e]);
}
function eT(e, t, n) {
    var r;
    let i = (0, c.e7)([O.Z], () => {
            var e;
            return null != (e = O.Z.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.e7)([L.Z], () => null != L.Z.questEnrollmentBlockedUntil, []),
        o =
            (0, c.e7)([S.default], () => {
                var e;
                return null == (e = S.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.e7)([L.Z], () => null != e && L.Z.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, K.Rc)(t, i);
    return !l || !!u;
}
function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([y.default], () => y.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eC(e) {
    return (0, c.e7)([L.Z], () => L.Z.isProgressingOnDesktop(e.id));
}
function eN(e) {
    return r.useMemo(() => (0, W.Bz)(e), [e]);
}
function eP(e) {
    let t = (0, c.e7)([L.Z], () => L.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, z.BM)(e), [e, t]);
}
function eR(e) {
    let t = eC(e),
        n = eN(e),
        r = eP(e);
    return t || n || r;
}
let ew = 1,
    eD = (e) => {
        let t = r.useCallback(() => (0, W.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = eR(e);
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
                }, T.Z.Millis.SECOND * ew);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function ex(e) {
    return r.useMemo(() => (0, W.b7)(e), [e]);
}
let eL = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eB({ quest: t }),
        a = (0, x.WD)();
    return () => {
        i
            ? (0, H.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: D.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, H.V$)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: D.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};
function ej() {
    let { quests: e, isFetchingCurrentQuests: t } = en({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = eS();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, F.vR)(t, j.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, F.zE)(t.userStatus, j.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eM(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, W.Gs)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, m.Z)(t);
}
function ek(e) {
    let t = (0, c.e7)([L.Z], () => L.Z.quests),
        n = eM(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, K.NI)(t, q.tt);
            return (0, V.Jg)(n, e);
        }, [e, t, n]);
    return eI(i) ? null : i;
}
function eU(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, w.Wf)(e),
            handleProgress: (t) => (0, w.Wf)(e, t),
            handleResetStatusClick: () => (0, w.eT)(e),
            handleResetDismissibilityClick: () => (0, w.T0)(e),
            handleOverrideDeliveryClick: () => (0, w.EW)(e),
        }),
        [e],
    );
}
function eG() {
    let { fetching: e, accounts: t } = (0, c.cj)([v.Z], () => ({
            fetching: v.Z.isFetching(),
            accounts: v.Z.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === Q.ABu.XBOX),
                r = e.filter((e) => e.type === Q.ABu.PLAYSTATION),
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
let eZ = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [o, l] = r.useState([]),
            [u, d] = r.useState(!1),
            f = (0, c.e7)([v.Z], () => v.Z.getAccounts());
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
                        (e = await (0, w.CS)(t, n)), l(e.errorHints);
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
    eB = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eG(),
            r = eR(t),
            i = 0 === n.length;
        return (0, W.$J)(t) && i && !r;
    },
    eF = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eG(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = A.Z.getArticleURL(Q.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = A.Z.getArticleURL(Q.BhN.QUEST_HOW_TO_XBOX),
            s = $.intl.format($.t.beN4DG, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = $.intl.format($.t.HVS7nh, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
    };
var eV = (function (e) {
    return (
        (e[(e.UNACCEPTED = 0)] = "UNACCEPTED"),
        (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
        (e[(e.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CLAIMED = 4)] = "CLAIMED"),
        e
    );
})({});
function eH(e) {
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eD(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eY(e) {
    let t = (0, c.e7)([y.default], () => y.default.locale),
        { percentComplete: n } = eD(e),
        r = ex(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, N.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function eW(e) {
    return [(0, c.e7)([L.Z], () => L.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, w.OR)(e, t), [e])];
}
function eK(e, t) {
    let [n, i] = eW(e.id),
        s = r.useMemo(() => (0, H.yH)(e), [e]),
        l = s.includes(q.cd.DESKTOP),
        c = s.includes(q.cd.CONSOLE),
        u = eC(e),
        d = eN(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => q.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => q.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => q.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => q.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO_ON_MOBILE }, () => q.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => q.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => q.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => q.cd.CONSOLE)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_GAME }, () => q.cd.DESKTOP)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_ACTIVITY }, () => q.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        p = u ? q.cd.DESKTOP : d ? q.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: p,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: q.cd.CONSOLE }, () => j.LI.CONSOLE)
                    .with({ currentProgressingPlatform: q.cd.DESKTOP }, () => j.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: q.cd.CONSOLE,
                        },
                        () => j.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: q.cd.DESKTOP,
                        },
                        () => j.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: q.cd.CONSOLE,
                        },
                        () => j.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: q.cd.DESKTOP,
                        },
                        () => j.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? j.LI.SELECT : c ? j.LI.CONSOLE : j.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, p, n],
        ),
        s,
        i,
    ];
}
function ez(e) {
    var t, n;
    let r = ex(e),
        i = eD(e),
        [a] = eK(e, i),
        s = eI(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        p = l && !c && !s && u && (d || (f && a === j.LI.DESKTOP)),
        _ = (0, P.isWeb)() && p && !(0, H.Gd)(e),
        m = (0, P.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && p,
        h = [];
    return m && h.push($.intl.string($.t.MFGxFM)), _ && h.push($.intl.string($.t.BV6xDm)), h;
}
function eq(e) {
    var t;
    return null != (t = (0, c.e7)([L.Z], () => L.Z.quests).get(e)) ? t : null;
}
function eQ(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, D.Ic)({
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
                    (0, D.Ic)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}
function eX(e, t) {
    let n = (0, c.e7)([L.Z], () => L.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? Q.BRd.DARK : Q.BRd.LIGHT;
        return (0, Z.fh)(n, Z.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eJ(e) {
    let t = (0, Y.w8)(e),
        n = (0, Y.Kr)(e),
        r = (0, Y.FX)(e),
        i = (0, Y._p)(e),
        a = (0, Y.f$)(e),
        o = (0, c.e7)([S.default], () => S.default.getCurrentUser()),
        s = (0, R.I5)(o, J.PremiumTypes.TIER_2);
    if (null == n) return $.intl.formatToPlainString($.t.l9uXL8, { decorationName: t });
    let l = $.intl.formatToPlainString($.t.o97tNn, { rewardName: t }),
        u = $.intl.formatToPlainString($.t.PkyRZo, {
            rewardName: t,
            expirationDate: r,
        }),
        d = $.intl.formatToPlainString($.t.ie4YK0, {
            rewardName: t,
            duration: n,
        }),
        f = $.intl.formatToPlainString($.t.yCpc0U, {
            duration: n,
            rewardName: t,
        }),
        p = s ? l : d,
        _ = s ? u : f,
        m = i ? p : _;
    return a
        ? m
        : $.intl.formatToPlainString($.t.tTlItm, {
              duration: n,
              decorationName: t,
          });
}
function e$(e) {
    let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        n = (0, c.e7)([g.Z], () => g.Z.getConnectedFrame()),
        i = (0, W.nY)(e),
        { data: a } = (0, _.IX)(i),
        o = (0, E.A)(a);
    return {
        launchInGameActivity: r.useCallback(() => {
            null != i &&
                ((null != t && t.applicationId === i) || (null != n && n.applicationId === i)
                    ? null != n
                        ? h.Z.updateFrameLayoutMode({
                              applicationId: n.applicationId,
                              layoutMode: X.U.FOCUSED,
                          })
                        : null != t && (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location)
                    : o
                      ? h.Z.launchFrame({ applicationId: i })
                      : (0, b.uL)(Q.Z5c.ACTIVITY_DETAILS(i)));
        }, [i, t, n, o]),
    };
}
let e0 = () => (0, c.Wu)([L.Z], () => [...L.Z.quests.values()]).some((e) => e.preview),
    e1 = () => {
        let e = (0, G.T)({ location: q.dr.QUEST_PREVIEW_TOOL_2 }),
            t = e0();
        return e && t;
    },
    e3 = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, F.zE)(e.userStatus, j.jn.ACTIVITY_PANEL),
            r = eI(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.e7)([L.Z], () => null != L.Z.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    e2 = () => {
        let e = (0, c.Wu)([L.Z], () => [...L.Z.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e4() {
    return r.useMemo(
        () =>
            q.Ew.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, B.T2)(t),
                    options: n,
                };
            }),
        [],
    );
}
function e5() {
    return r.useMemo(
        () =>
            Object.keys(q.yq).map((e) => ({
                label: (0, B.NL)(q.yq[e]),
                value: q.yq[e],
            })),
        [],
    );
}
function e8(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    r.useEffect(() => {
        I.default.track(Q.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
            sort_method: t,
            previous_sort_method: a.current,
        }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            var e;
            let t = n.map((e) => e.filter);
            I.default.track(Q.rMx.QUEST_HOME_FILTERS_CHANGED, {
                filters: t,
                previous_filters: null != (e = o.current) ? e : [],
                num_quests_visible: i,
            }),
                (o.current = t);
        }, [n, i]);
}
let e6 = (e) => {
        let t = !1,
            n = r.useMemo(() => {
                var e;
                return (null == (e = S.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
            }, []);
        return t || n || e.preview;
    },
    e7 = (e, t) => {
        var n, r, i;
        let a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null;
        return (
            (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null &&
            !a &&
            Date.now() - new Date(null == (i = e.userStatus) ? void 0 : i.enrolledAt).getTime() > t
        );
    };
function e9() {
    let { enabled: e } = M.n0.useConfig({ location: q.dr.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [o, s] = r.useState(!1),
        [l, u] = r.useState(!1),
        { isFetching: d, takeoverConfig: f } = (0, c.cj)([L.Z], () => ({
            isFetching: L.Z.isFetchingQuestHomeTakeover(),
            takeoverConfig: L.Z.getQuestHomeTakeoverConfig(),
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
                    await (0, w.Kh)();
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
                    await Promise.all([(0, C.pt)(f.assetHeroImage.url), (0, C.pt)(f.assetSponsorImage.url)]);
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
