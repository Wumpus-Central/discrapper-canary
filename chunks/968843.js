n.d(t, {
    $I: () => e0,
    B4: () => eH,
    B6: () => eO,
    Fy: () => eR,
    GI: () => ej,
    Gd: () => eW,
    I: () => eZ,
    J2: () => Q,
    Jf: () => eN,
    KX: () => ek,
    MP: () => eJ,
    N8: () => e$,
    Nm: () => e4,
    OH: () => eU,
    Qy: () => eK,
    Rf: () => eA,
    SU: () => e1,
    Wi: () => ey,
    _Q: () => eG,
    _s: () => eM,
    aV: () => eQ,
    bA: () => em,
    e5: () => e_,
    eN: () => eg,
    fN: () => eD,
    iO: () => ew,
    kJ: () => ex,
    m4: () => e3,
    me: () => eB,
    qI: () => eY,
    qb: () => eV,
    tP: () => eb,
    tR: () => eh,
    uA: () => eP,
    z: () => eT,
    z1: () => eX,
    z6: () => eL,
    zB: () => ez,
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
    h = n(592125),
    m = n(553795),
    g = n(594174),
    E = n(626135),
    b = n(70956),
    y = n(63063),
    O = n(956664),
    v = n(455971),
    S = n(930153),
    I = n(358085),
    T = n(74538),
    C = n(22095),
    A = n(617136),
    N = n(915750),
    P = n(616022),
    w = n(49436),
    R = n(937797),
    D = n(704161),
    x = n(787695),
    L = n(36243),
    j = n(475595),
    M = n(304696),
    k = n(862657),
    U = n(759479),
    G = n(387745),
    Z = n(115179),
    F = n(254579),
    B = n(283689),
    V = n(542347),
    H = n(324805),
    Y = n(981631),
    W = n(474936),
    K = n(388032);
let z = -1,
    q = 1;
function Q() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.Wu)([P.Z], () => [...P.Z.quests.values()]),
        a = (0, c.Wu)([P.Z], () => [...P.Z.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cj)([P.Z], () => ({
            isFetchingCurrentQuests: P.Z.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: P.Z.lastFetchedCurrentQuests,
        })),
        l = (0, x.c)({ location: H.dr.USE_QUESTS }),
        u = R.DL.useConfig({ location: H.dr.USE_QUESTS });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o &&
                !(0, v.C)()
            ) {
                if ((n(!0), (0, C.xw)(), u.enabled && "focused" !== f.Z.getState())) return;
                let { enableNewRequestBehavior: t } = D.Z.getConfig({ location: "QuestHookUseQuests" });
                if (!t) (0, C.w)(w.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
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
function X(e, t, n) {
    var r, i, a, o, s, l;
    let c = e.id === H.wF,
        u = t.id === H.wF,
        d = c && (null == (r = e.userStatus) ? void 0 : r.completedAt) == null;
    if (d !== (u && (null == (i = t.userStatus) ? void 0 : i.completedAt) == null)) return d ? z : q;
    let f = !(0, k.zi)(e),
        p = (null == (a = e.userStatus) ? void 0 : a.claimedAt) != null,
        _ = (null == (o = t.userStatus) ? void 0 : o.claimedAt) != null,
        h = (null == (s = e.userStatus) ? void 0 : s.enrolledAt) != null,
        m = (null == (l = t.userStatus) ? void 0 : l.enrolledAt) != null,
        { enabled: g, minutes: E } = (0, R.eC)(H.dr.QUEST_HOME_DESKTOP),
        y = b.Z.Millis.MINUTE * E,
        O = e2(e, y),
        v = e2(t, y);
    if (f) {
        let { takeover: r } = n,
            i = null != r && (0, B.P9)(r, e.id),
            a = null != r && (0, B.P9)(r, t.id);
        return i !== a && (i || a)
            ? i
                ? z
                : q
            : g && O !== v && (O || v)
              ? O
                  ? q
                  : z
              : p !== _
                ? p
                    ? q
                    : z
                : h !== m
                  ? h
                      ? z
                      : q
                  : ed(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return p !== _ ? (p ? z : q) : h !== m ? (h ? z : q) : ed(e.config.expiresAt, t.config.expiresAt, 0);
}
function J(e, t, n) {
    return ed(e.config.startsAt, t.config.startsAt, 0);
}
function $(e, t, n) {
    var r, i;
    let a = null == (r = e.userStatus) ? void 0 : r.enrolledAt,
        o = null == (i = t.userStatus) ? void 0 : i.enrolledAt;
    return null == a && null == o
        ? ed(e.config.expiresAt, t.config.expiresAt, 0)
        : null != a && null == o
          ? z
          : null == a && null != o
            ? q
            : ed(a, o, 0);
}
function ee(e, t, n) {
    return ed(e.config.expiresAt, t.config.expiresAt, 1);
}
function et(e, t) {
    return function (n, r) {
        let i = !(0, k.zi)(n);
        return !(0, k.zi)(r) !== i ? (i ? z : q) : e(n, r, t);
    };
}
function en(e) {
    switch (e) {
        case H.yq.MOST_RECENT:
            return J;
        case H.yq.RECENTLY_ENROLLED:
            return $;
        case H.yq.EXPIRING_SOON:
            return ee;
        case H.yq.SUGGESTED:
        default:
            return X;
    }
}
function er(e, t) {
    switch (t) {
        case H.oH.VIDEO:
            return (0, F.q8)(e);
        case H.oH.PLAY:
            return (0, F.Nj)({ quest: e }) || (0, F.Dr)({ quest: e }) || (0, F.pO)(e);
        default:
            return !1;
    }
}
function ei(e, t) {
    switch (t) {
        case H.UP.VIRTUAL_CURRENCY:
            return (0, Z.xN)(e.config);
        case H.UP.COLLECTIBLE:
            return (0, Z.Xv)(e.config);
        case H.UP.IN_GAME:
            return (0, Z.vQ)(e.config) || (0, Z.wj)(e.config);
        default:
            return !1;
    }
}
function ea(e) {
    switch (e) {
        case "task":
            return er;
        case "reward":
            return ei;
    }
}
function eo(e, t, n) {
    let r = ea(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}
function es(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return eo(e, n, r);
        }),
    );
}
function el() {
    return { takeover: P.Z.getQuestHomeTakeoverConfig() };
}
let ec = {};
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : es(e, r),
        a = et(en(n), el());
    return i.sort(a);
}
function ed(e, t, n) {
    let r = 0 === n ? z : q;
    return e.localeCompare(t) * r;
}
function ef(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = eu(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (o.current = e.length), r;
    }, [e, t]);
}
function ep(e) {
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
                        ? z
                        : q
                    : ed(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
            })
            .map((e) => e.id);
        return (n.current = e), e;
    }, [t]);
}
var e_ = (function (e) {
        return (e.ALL = "all"), (e.CLAIMED = "claimed"), (e.PREVIEW_TOOL = "preview_tool"), e;
    })({}),
    eh = (function (e) {
        return (e.TAB = "tab"), (e.QUEST_ID = "quest_id"), (e.SORT = "sort"), (e.FILTER = "filter"), e;
    })({});
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = Q({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(n.map((e) => [e.id, e])),
        s = ef(n, t),
        l = ep(n),
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
function eg() {
    let e = r.useRef(!1),
        t = (0, c.Wu)([P.Z], () => Array.from(P.Z.claimedQuests.values())),
        n = (0, c.e7)([P.Z], () => P.Z.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, C.Ag)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n,
        }
    );
}
function eE() {
    return (0, c.e7)([P.Z], () => P.Z.getExpiredQuestsMap());
}
function eb(e) {
    return (0, c.e7)([P.Z], () => null != e && P.Z.isQuestExpired(e.id), [e]);
}
function ey(e, t, n) {
    var r;
    let i = (0, c.e7)([h.Z], () => {
            var e;
            return null != (e = h.Z.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.e7)([P.Z], () => null != P.Z.questEnrollmentBlockedUntil, []),
        o =
            (0, c.e7)([g.default], () => {
                var e;
                return null == (e = g.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.e7)([P.Z], () => null != e && P.Z.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, B.Rc)(t, i);
    return !l || !!u;
}
function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, c.e7)([_.default], () => _.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ev(e) {
    return (0, c.e7)([P.Z], () => P.Z.isProgressingOnDesktop(e.id));
}
function eS(e) {
    return r.useMemo(() => (0, F.Bz)(e), [e]);
}
function eI(e) {
    let t = (0, c.e7)([P.Z], () => P.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
    return r.useMemo(() => (0, V.BM)(e), [e, t]);
}
function eT(e) {
    let t = ev(e),
        n = eS(e),
        r = eI(e);
    return t || n || r;
}
let eC = 1,
    eA = (e) => {
        let t = r.useCallback(() => (0, F.il)(e), [e]),
            [n, i] = r.useState(t()),
            a = r.useCallback(() => i(t()), [t]),
            o = eT(e);
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
                }, b.Z.Millis.SECOND * eC);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };
function eN(e) {
    return r.useMemo(() => (0, F.b7)(e), [e]);
}
let eP = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = eM({ quest: t }),
        a = (0, N.WD)();
    return () => {
        i
            ? (0, G.gI)(
                  { quest: t },
                  {
                      content: n,
                      ctaContent: A.jZ.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, G.V$)(
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
function ew() {
    let { quests: e, isFetchingCurrentQuests: t } = Q({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = eE();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, k.vR)(t, w.jn.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, k.zE)(t.userStatus, w.jn.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}
function eR(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, F.Gs)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, p.Z)(t);
}
function eD(e) {
    let t = (0, c.e7)([P.Z], () => P.Z.quests),
        n = eR(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, B.NI)(t, H.tt);
            return (0, U.Jg)(n, e);
        }, [e, t, n]);
    return eb(i) ? null : i;
}
function ex(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, C.Wf)(e),
            handleProgress: (t) => (0, C.Wf)(e, t),
            handleResetStatusClick: () => (0, C.eT)(e),
            handleResetDismissibilityClick: () => (0, C.T0)(e),
            handleOverrideDeliveryClick: () => (0, C.EW)(e),
        }),
        [e],
    );
}
function eL() {
    let { fetching: e, accounts: t } = (0, c.cj)([m.Z], () => ({
            fetching: m.Z.isFetching(),
            accounts: m.Z.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: a,
        } = r.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === Y.ABu.XBOX),
                r = e.filter((e) => e.type === Y.ABu.PLAYSTATION),
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
let ej = (e) => {
        let { questId: t, preview: n, beforeRequest: i, afterRequest: a } = e,
            [o, l] = r.useState([]),
            [u, d] = r.useState(!1),
            f = (0, c.e7)([m.Z], () => m.Z.getAccounts());
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
                        (e = await (0, C.CS)(t, n)), l(e.errorHints);
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
    eM = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eL(),
            r = eT(t),
            i = 0 === n.length;
        return (0, F.$J)(t) && i && !r;
    },
    ek = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eL(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = y.Z.getArticleURL(Y.BhN.QUEST_HOW_TO_PLAYSTATION),
            o = y.Z.getArticleURL(Y.BhN.QUEST_HOW_TO_XBOX),
            s = K.intl.format(K.t.beN4DG, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = K.intl.format(K.t.HVS7nh, { helpdeskArticle: r ? a : o });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
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
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eA(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}
function eZ(e) {
    let t = (0, c.e7)([_.default], () => _.default.locale),
        { percentComplete: n } = eA(e),
        r = eN(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, S.T3)(t, i, { roundingMode: "floor" });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}
function eF(e) {
    return [(0, c.e7)([P.Z], () => P.Z.selectedTaskPlatform(e)), r.useCallback((t) => (0, C.OR)(e, t), [e])];
}
function eB(e, t) {
    let [n, i] = eF(e.id),
        s = r.useMemo(() => (0, G.yH)(e), [e]),
        l = s.includes(H.cd.DESKTOP),
        c = s.includes(H.cd.CONSOLE),
        u = ev(e),
        d = eS(e),
        f = r.useMemo(
            () =>
                (0, a.EQ)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP }, () => H.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_DESKTOP_V2 }, () => H.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ACTIVITY }, () => H.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO }, () => H.cd.DESKTOP)
                    .with({ taskType: o.X.WATCH_VIDEO_ON_MOBILE }, () => H.cd.DESKTOP)
                    .with({ taskType: o.X.STREAM_ON_DESKTOP }, () => H.cd.DESKTOP)
                    .with({ taskType: o.X.PLAY_ON_XBOX }, () => H.cd.CONSOLE)
                    .with({ taskType: o.X.PLAY_ON_PLAYSTATION }, () => H.cd.CONSOLE)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_GAME }, () => H.cd.DESKTOP)
                    .with({ taskType: o.X.ACHIEVEMENT_IN_ACTIVITY }, () => H.cd.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        p = u ? H.cd.DESKTOP : d ? H.cd.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.EQ)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: p,
                    selectedPlatform: n,
                })
                    .with({ currentProgressingPlatform: H.cd.CONSOLE }, () => w.LI.CONSOLE)
                    .with({ currentProgressingPlatform: H.cd.DESKTOP }, () => w.LI.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: H.cd.CONSOLE,
                        },
                        () => w.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: H.cd.DESKTOP,
                        },
                        () => w.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: H.cd.CONSOLE,
                        },
                        () => w.LI.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: H.cd.DESKTOP,
                        },
                        () => w.LI.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? w.LI.SELECT : c ? w.LI.CONSOLE : w.LI.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, p, n],
        ),
        s,
        i,
    ];
}
function eV(e) {
    var t, n;
    let r = eN(e),
        i = eA(e),
        [a] = eB(e, i),
        s = eb(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        p = l && !c && !s && u && (d || (f && a === w.LI.DESKTOP)),
        _ = (0, I.isWeb)() && p && !(0, G.Gd)(e),
        h = (0, I.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && p,
        m = [];
    return h && m.push(K.intl.string(K.t.MFGxFM)), _ && m.push(K.intl.string(K.t.BV6xDm)), m;
}
function eH(e) {
    var t;
    return null != (t = (0, c.e7)([P.Z], () => P.Z.quests).get(e)) ? t : null;
}
function eY(e) {
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
function eW(e, t) {
    let n = (0, c.e7)([P.Z], () => P.Z.getQuest(e), [e]),
        i = (0, u.ZP)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.wj)(i) ? Y.BRd.DARK : Y.BRd.LIGHT;
        return (0, j.fh)(n, j.eC.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eK(e) {
    let t = (0, Z.w8)(e),
        n = (0, Z.Kr)(e),
        r = (0, Z.FX)(e),
        i = (0, Z._p)(e),
        a = (0, Z.f$)(e),
        o = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        s = (0, T.I5)(o, W.PremiumTypes.TIER_2);
    if (null == n) return K.intl.formatToPlainString(K.t.l9uXL8, { decorationName: t });
    let l = K.intl.formatToPlainString(K.t.o97tNn, { rewardName: t }),
        u = K.intl.formatToPlainString(K.t.PkyRZo, {
            rewardName: t,
            expirationDate: r,
        }),
        d = K.intl.formatToPlainString(K.t.ie4YK0, {
            rewardName: t,
            duration: n,
        }),
        f = K.intl.formatToPlainString(K.t.yCpc0U, {
            duration: n,
            rewardName: t,
        }),
        p = s ? l : d,
        _ = s ? u : f,
        h = i ? p : _;
    return a
        ? h
        : K.intl.formatToPlainString(K.t.tTlItm, {
              duration: n,
              decorationName: t,
          });
}
function ez(e) {
    let t = (0, F.nY)(e);
    return { launchInGameActivity: (0, d.Z)({ applicationId: t }) };
}
let eq = () => (0, c.Wu)([P.Z], () => [...P.Z.quests.values()]).some((e) => e.preview),
    eQ = () => {
        let e = (0, L.T)({ location: H.dr.QUEST_PREVIEW_TOOL_2 }),
            t = eq();
        return e && t;
    },
    eX = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, k.zE)(e.userStatus, w.jn.ACTIVITY_PANEL),
            r = eb(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.e7)([P.Z], () => null != P.Z.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    eJ = () => {
        let e = (0, c.Wu)([P.Z], () => [...P.Z.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };
function e$() {
    return r.useMemo(
        () =>
            H.Ew.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, M.T2)(t),
                    options: n,
                };
            }),
        [],
    );
}
function e0() {
    return r.useMemo(
        () =>
            Object.keys(H.yq).map((e) => ({
                label: (0, M.NL)(H.yq[e]),
                value: H.yq[e],
            })),
        [],
    );
}
function e1(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    r.useEffect(() => {
        E.default.track(Y.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
            sort_method: t,
            previous_sort_method: a.current,
        }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            var e;
            let t = n.map((e) => e.filter);
            E.default.track(Y.rMx.QUEST_HOME_FILTERS_CHANGED, {
                filters: t,
                previous_filters: null != (e = o.current) ? e : [],
                num_quests_visible: i,
            }),
                (o.current = t);
        }, [n, i]);
}
let e3 = (e) => {
        let t = !1,
            n = r.useMemo(() => {
                var e;
                return (null == (e = g.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
            }, []);
        return t || n || e.preview;
    },
    e2 = (e, t) => {
        var n, r, i;
        let a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null;
        return (
            (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null &&
            !a &&
            Date.now() - new Date(null == (i = e.userStatus) ? void 0 : i.enrolledAt).getTime() > t
        );
    };
function e4() {
    let { enabled: e } = R.n0.useConfig({ location: H.dr.QUEST_HOME_DESKTOP }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [o, s] = r.useState(!1),
        [l, u] = r.useState(!1),
        { isFetching: d, takeoverConfig: f } = (0, c.cj)([P.Z], () => ({
            isFetching: P.Z.isFetchingQuestHomeTakeover(),
            takeoverConfig: P.Z.getQuestHomeTakeoverConfig(),
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
                    await (0, C.Kh)();
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
