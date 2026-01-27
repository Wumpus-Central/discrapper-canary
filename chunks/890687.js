n.d(t, {
    $P: () => e2,
    BL: () => eR,
    C5: () => eW,
    Du: () => eM,
    F3: () => eG,
    FA: () => eq,
    H6: () => eK,
    I3: () => ew,
    In: () => eF,
    Iq: () => eE,
    L1: () => em,
    LS: () => eb,
    NC: () => eh,
    Nb: () => e0,
    O9: () => eV,
    Qh: () => eg,
    Qo: () => eH,
    RR: () => ek,
    S5: () => ev,
    UX: () => eU,
    Vn: () => eT,
    Wj: () => ej,
    XD: () => e1,
    YW: () => eL,
    Yl: () => eO,
    _b: () => e4,
    a5: () => ez,
    aC: () => eY,
    cu: () => eP,
    fc: () => eN,
    j$: () => ex,
    mL: () => X,
    nv: () => e3,
    oH: () => eD,
    p5: () => eX,
    pT: () => e$,
    sb: () => eJ,
    zW: () => eZ,
}),
    n(896048),
    n(638769),
    n(321073),
    n(801541);
var r = n(64700);
n(284009);
var i = n(735438),
    a = n(889137),
    o = n(412703),
    s = n(114046),
    l = n(582754),
    c = n(311907),
    u = n(736653),
    d = n(787389),
    f = n(183636),
    p = n(429913);
n(674658);
var _ = n(773669),
    h = n(734057),
    m = n(962173),
    g = n(287809),
    E = n(954571),
    y = n(927813),
    b = n(975571),
    O = n(515718),
    v = n(67486),
    A = n(252424),
    I = n(723702),
    S = n(927578),
    T = n(829219),
    C = n(859703),
    N = n(341915),
    w = n(245853),
    R = n(302654),
    P = n(677402),
    D = n(807876),
    L = n(579473),
    x = n(561844),
    M = n(590202),
    j = n(971649),
    k = n(651892),
    U = n(710969),
    G = n(639214),
    F = n(901406),
    V = n(92246),
    B = n(792620),
    H = n(814793),
    Y = n(753386),
    W = n(654487),
    K = n(652215),
    z = n(788868),
    q = n(985018);
let Z = -1,
    Q = 1;

function X() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                      fetchPolicy: "cache-only",
                      callerSource: "unknown",
                  },
        [t, n] = r.useState(!1),
        i = (0, c.yK)([C.A], () => [...C.A.quests.values()]),
        a = (0, c.yK)([C.A], () => [...C.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: o, lastFetchedCurrentQuests: s } = (0, c.cf)([C.A], () => ({
            isFetchingCurrentQuests: C.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: C.A.lastFetchedCurrentQuests,
        })),
        l = (0, P.s)({
            location: W.rE.USE_QUESTS,
        });
    return (
        r.useEffect(() => {
            if (
                "cache-only" !== e.fetchPolicy &&
                ("cache-and-network" === e.fetchPolicy || ("cache-or-network" === e.fetchPolicy && 0 === s)) &&
                l &&
                !t &&
                !o &&
                !(0, v.I)()
            ) {
                if ((n(!0), (0, T.N1)(), (0, I.isMac)() && "focused" !== f.A.getState())) return;
                let { enableNewRequestBehavior: t } = R.A.getConfig({
                    location: "QuestHookUseQuests",
                });
                if (!t) (0, T.r8)(N.yW.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource));
            }
        }, [e.fetchPolicy, l, t, o, s, e.callerSource]),
        {
            quests: i,
            excludedQuests: a,
            isFetchingCurrentQuests: o,
            hasFetched: t,
        }
    );
}

function J(e, t, n) {
    var r, i, a, o, s, l;
    let c = e.id === W.aJ,
        u = t.id === W.aJ,
        d = c && (null == (r = e.userStatus) ? void 0 : r.completedAt) == null;
    if (d !== (u && (null == (i = t.userStatus) ? void 0 : i.completedAt) == null)) return d ? Z : Q;
    let f = !(0, U.Ic)(e),
        p = (null == (a = e.userStatus) ? void 0 : a.claimedAt) != null,
        _ = (null == (o = t.userStatus) ? void 0 : o.claimedAt) != null,
        h = (null == (s = e.userStatus) ? void 0 : s.enrolledAt) != null,
        m = (null == (l = t.userStatus) ? void 0 : l.enrolledAt) != null,
        { enabled: g, minutes: E } = (0, w.L5)(W.rE.QUEST_HOME_DESKTOP),
        b = y.A.Millis.MINUTE * E,
        O = e6(e, b),
        v = e6(t, b);
    if (f) {
        let { takeover: r } = n,
            i = null != r && (0, H.f0)(r, e.id),
            a = null != r && (0, H.f0)(r, t.id);
        return i !== a && (i || a)
            ? i
                ? Z
                : Q
            : g && O !== v && (O || v)
              ? O
                  ? Q
                  : Z
              : p !== _
                ? p
                    ? Q
                    : Z
                : h !== m
                  ? h
                      ? Z
                      : Q
                  : ef(e.config.expiresAt, t.config.expiresAt, 1);
    }
    return p !== _ ? (p ? Z : Q) : h !== m ? (h ? Z : Q) : ef(e.config.expiresAt, t.config.expiresAt, 0);
}

function $(e, t, n) {
    return ef(e.config.startsAt, t.config.startsAt, 0);
}

function ee(e, t, n) {
    var r, i;
    let a = null == (r = e.userStatus) ? void 0 : r.enrolledAt,
        o = null == (i = t.userStatus) ? void 0 : i.enrolledAt;
    return null == a && null == o
        ? ef(e.config.expiresAt, t.config.expiresAt, 0)
        : null != a && null == o
          ? Z
          : null == a && null != o
            ? Q
            : ef(a, o, 0);
}

function et(e, t, n) {
    return ef(e.config.expiresAt, t.config.expiresAt, 1);
}

function en(e, t) {
    return function (n, r) {
        let i = !(0, U.Ic)(n);
        return !(0, U.Ic)(r) !== i ? (i ? Z : Q) : e(n, r, t);
    };
}

function er(e) {
    switch (e) {
        case W.kL.MOST_RECENT:
            return $;
        case W.kL.RECENTLY_ENROLLED:
            return ee;
        case W.kL.EXPIRING_SOON:
            return et;
        case W.kL.SUGGESTED:
        default:
            return J;
    }
}

function ei(e, t) {
    switch (t) {
        case W.Pc.VIDEO:
            return (0, B.vv)(e);
        case W.Pc.PLAY:
            return (
                (0, B.t)({
                    quest: e,
                }) ||
                (0, B.fE)({
                    quest: e,
                }) ||
                (0, B.vl)(e)
            );
        default:
            return !1;
    }
}

function ea(e, t) {
    switch (t) {
        case W.BQ.VIRTUAL_CURRENCY:
            return (0, V.ks)(e.config);
        case W.BQ.COLLECTIBLE:
            return (0, V.tU)(e.config);
        case W.BQ.IN_GAME:
            return (0, V.HG)(e.config) || (0, V.r7)(e.config);
        default:
            return !1;
    }
}

function eo(e) {
    switch (e) {
        case "task":
            return ei;
        case "reward":
            return ea;
    }
}

function es(e, t, n) {
    let r = eo(t);
    return 0 === n.length || n.some((t) => r(e, t.filter));
}

function el(e, t) {
    if (0 === t.length) return e;
    let n = (0, i.groupBy)(t, "group");
    return e.filter((e) =>
        Object.entries(n).every((t) => {
            let [n, r] = t;
            return es(e, n, r);
        }),
    );
}

function ec() {
    return {
        takeover: C.A.getQuestHomeTakeoverConfig(),
    };
}
let eu = {};

function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        { sortMethod: n, filters: r } = t,
        i = null == r || 0 === r.length ? e : el(e, r),
        a = en(er(n), ec());
    return i.sort(a);
}

function ef(e, t, n) {
    let r = 0 === n ? Z : Q;
    return e.localeCompare(t) * r;
}

function ep(e, t) {
    let n = r.useRef([]),
        i = r.useRef(t.sortMethod),
        a = r.useRef(t.filters),
        o = r.useRef(0);
    return r.useMemo(() => {
        if (0 === e.length) return [];
        if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters)
            return n.current;
        let r = ed(e, t).map((e) => e.id);
        return (n.current = r), (i.current = t.sortMethod), (a.current = t.filters), (o.current = e.length), r;
    }, [e, t]);
}

function e_(e) {
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
                        ? Z
                        : Q
                    : ef(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eu,
        {
            quests: n,
            excludedQuests: r,
            isFetchingCurrentQuests: i,
            hasFetched: a,
        } = X({
            fetchPolicy: "cache-and-network",
            callerSource: "use_filtered_quests",
        }),
        o = new Map(n.map((e) => [e.id, e])),
        s = ep(n, t),
        l = e_(n),
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

function eE() {
    let e = r.useRef(!1),
        t = (0, c.yK)([C.A], () => Array.from(C.A.claimedQuests.values())),
        n = (0, c.bG)([C.A], () => C.A.isFetchingClaimedQuests);
    return (
        r.useEffect(() => {
            n || e.current || ((e.current = !0), (0, T.HA)());
        }, [n]),
        {
            claimedQuests: t,
            isFetchingClaimedQuests: n,
        }
    );
}

function ey() {
    return (0, c.bG)([C.A], () => C.A.getExpiredQuestsMap());
}

function eb(e) {
    return (0, c.bG)([C.A], () => null != e && C.A.isQuestExpired(e.id), [e]);
}

function eO(e, t, n) {
    var r;
    let i = (0, c.bG)([h.A], () => {
            var e;
            return null != (e = h.A.getChannel(null == t ? void 0 : t.channelId)) ? e : null;
        }),
        a = (0, c.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []),
        o =
            (0, c.bG)([g.default], () => {
                var e;
                return null == (e = g.default.getCurrentUser()) ? void 0 : e.id;
            }) === n,
        s = (0, c.bG)([C.A], () => null != e && C.A.isQuestExpired(e.id), [e]);
    if (null == e || a || s || o) return !1;
    let l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        u = (0, H.Ll)(t, i);
    return !l || !!u;
}

function ev(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      dateStyle: "short",
                  },
        n = (0, c.bG)([_.default], () => _.default.locale);
    return r.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}

function eA(e) {
    return (0, c.bG)([C.A], () => C.A.isProgressingOnDesktop(e.id));
}

function eI(e) {
    return r.useMemo(() => (0, B.YL)(e), [e]);
}

function eS(e) {
    let t = (0, c.bG)([C.A], () => C.A.getOptimisticProgress(e.id, o.n.WATCH_VIDEO));
    return r.useMemo(() => (0, Y.J$)(e), [e, t]);
}

function eT(e) {
    let t = eA(e),
        n = eI(e),
        r = eS(e);
    return t || n || r;
}
let eC = 1,
    eN = (e) => {
        let t = r.useCallback(() => (0, B.Yh)(e), [e]),
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
                }, y.A.Millis.SECOND * eC);
                return () => {
                    clearInterval(i), a();
                };
            }, [e, o, a]),
            n
        );
    };

function ew(e) {
    return r.useMemo(() => (0, B.JC)(e), [e]);
}
let eR = (e) => {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        i = ek({
            quest: t,
        }),
        a = (0, j.vU)();
    return () => {
        i
            ? (0, F.se)(
                  {
                      quest: t,
                  },
                  {
                      content: n,
                      ctaContent: M.Cy.CONNECT_CONSOLE_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              )
            : (0, F.b6)(
                  {
                      quest: t,
                  },
                  {
                      content: n,
                      ctaContent: M.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      impressionId: null == a ? void 0 : a.getId(),
                      sourceQuestContent: r,
                  },
              );
    };
};

function eP() {
    let { quests: e, isFetchingCurrentQuests: t } = X({
            fetchPolicy: "cache-or-network",
            callerSource: "settings_badge",
        }),
        n = ey();
    return r.useMemo(() => {
        let r = [];
        if (t || 0 === e.length) return r;
        for (let t of e) {
            var i;
            if (!(0, U.ZA)(t, N.uF.GIFT_INVENTORY_SETTINGS_BADGE) || (null != (i = n.get(t.id)) && i)) continue;
            if ((null == t ? void 0 : t.userStatus) == null) {
                r.push(t);
                continue;
            }
            let e = null != t.userStatus.claimedAt,
                a = (0, U.gO)(t.userStatus, N.uF.GIFT_INVENTORY_SETTINGS_BADGE);
            if (!e && !a) {
                r.push(t);
                continue;
            }
        }
        return r;
    }, [e, n, t]);
}

function eD(e) {
    let t = r.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, B.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, p.A)(t);
}

function eL(e) {
    let t = (0, c.bG)([C.A], () => C.A.quests),
        n = eD(Array.from(t.values())),
        i = r.useMemo(() => {
            let n = (0, H.$e)(t, W.zO);
            return (0, G.BM)(n, e);
        }, [e, t, n]);
    return eb(i) ? null : i;
}

function ex(e) {
    return r.useMemo(
        () => ({
            handleComplete: () => (0, T.Yb)(e),
            handleProgress: (t) => (0, T.Yb)(e, t),
            handleResetStatusClick: () => (0, T.UZ)(e),
            handleResetDismissibilityClick: () => (0, T.Gt)(e),
            handleOverrideDeliveryClick: () => (0, T.d6)(e),
        }),
        [e],
    );
}

function eM() {
    let { fetching: e, accounts: t } = (0, c.cf)([m.A], () => ({
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
            f = (0, c.bG)([m.A], () => m.A.getAccounts());
        return (
            r.useEffect(() => {
                l((e) => e.filter((e) => e.type !== s._.EXPIRED_CREDENTIAL));
            }, [f]),
            {
                startConsoleQuest: r.useCallback(async () => {
                    if (u) return;
                    null == i || i(), d(!0);
                    let e = null;
                    try {
                        (e = await (0, T.vD)(t, n)), l(e.errorHints);
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
    ek = (e) => {
        let { quest: t } = e,
            { xboxAndPlaystationAccounts: n } = eM(),
            r = eT(t),
            i = 0 === n.length;
        return (0, B.g5)(t) && i && !r;
    },
    eU = () => {
        let { xboxAccounts: e, playstationAccounts: t } = eM(),
            n = e.length > 0,
            r = t.length > 0,
            i = (n && !r) || (!n && r),
            a = b.A.getArticleURL(K.MVz.QUEST_HOW_TO_PLAYSTATION),
            o = b.A.getArticleURL(K.MVz.QUEST_HOW_TO_XBOX),
            s = q.intl.format(q.t.beN4DG, {
                psHelpdeskArticle: a,
                xboxHelpdeskArticle: o,
            }),
            l = q.intl.format(q.t.HVS7nh, {
                helpdeskArticle: r ? a : o,
            });
        return {
            message: i ? l : s,
            xboxURL: o,
            playstationURL: a,
        };
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
    var t, n, r;
    let i = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        o = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        s = eN(e).percentComplete > 0;
    return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i;
}

function eV(e) {
    let t = (0, c.bG)([_.default], () => _.default.locale),
        { percentComplete: n } = eN(e),
        r = ew(e),
        i = null != r ? r.percentComplete : n,
        a = 100 * i,
        o =
            null != r
                ? "".concat(null == r ? void 0 : r.progress, "/").concat(null == r ? void 0 : r.target)
                : (0, A.l9)(t, i, {
                      roundingMode: "floor",
                  });
    return {
        completedRatio: i,
        percentComplete: a,
        completedRatioDisplay: o,
    };
}

function eB(e) {
    return [(0, c.bG)([C.A], () => C.A.selectedTaskPlatform(e)), r.useCallback((t) => (0, T.lx)(e, t), [e])];
}

function eH(e, t) {
    let [n, i] = eB(e.id),
        s = r.useMemo(() => (0, F.UR)(e), [e]),
        l = s.includes(W.fO.DESKTOP),
        c = s.includes(W.fO.CONSOLE),
        u = eA(e),
        d = eI(e),
        f = r.useMemo(
            () =>
                (0, a.YW)(t)
                    .with(
                        {
                            percentComplete: 0,
                        },
                        () => null,
                    )
                    .with(
                        {
                            taskType: o.n.PLAY_ON_DESKTOP,
                        },
                        () => W.fO.DESKTOP,
                    )
                    .with(
                        {
                            taskType: o.n.PLAY_ON_DESKTOP_V2,
                        },
                        () => W.fO.DESKTOP,
                    )
                    .with(
                        {
                            taskType: o.n.PLAY_ACTIVITY,
                        },
                        () => W.fO.DESKTOP,
                    )
                    .with(
                        {
                            taskType: o.n.WATCH_VIDEO,
                        },
                        () => W.fO.DESKTOP,
                    )
                    .with(
                        {
                            taskType: o.n.WATCH_VIDEO_ON_MOBILE,
                        },
                        () => W.fO.DESKTOP,
                    )
                    .with(
                        {
                            taskType: o.n.STREAM_ON_DESKTOP,
                        },
                        () => W.fO.DESKTOP,
                    )
                    .with(
                        {
                            taskType: o.n.PLAY_ON_XBOX,
                        },
                        () => W.fO.CONSOLE,
                    )
                    .with(
                        {
                            taskType: o.n.PLAY_ON_PLAYSTATION,
                        },
                        () => W.fO.CONSOLE,
                    )
                    .with(
                        {
                            taskType: o.n.ACHIEVEMENT_IN_GAME,
                        },
                        () => W.fO.DESKTOP,
                    )
                    .with(
                        {
                            taskType: o.n.ACHIEVEMENT_IN_ACTIVITY,
                        },
                        () => W.fO.DESKTOP,
                    )
                    .exhaustive(),
            [t],
        ),
        p = u ? W.fO.DESKTOP : d ? W.fO.CONSOLE : null;
    return [
        r.useMemo(
            () =>
                (0, a.YW)({
                    lastPlatformProgress: f,
                    currentProgressingPlatform: p,
                    selectedPlatform: n,
                })
                    .with(
                        {
                            currentProgressingPlatform: W.fO.CONSOLE,
                        },
                        () => N.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: W.fO.DESKTOP,
                        },
                        () => N.X0.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: W.fO.CONSOLE,
                        },
                        () => N.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: W.fO.DESKTOP,
                        },
                        () => N.X0.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: W.fO.CONSOLE,
                        },
                        () => N.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: W.fO.DESKTOP,
                        },
                        () => N.X0.DESKTOP,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: null,
                        },
                        () => (c && l ? N.X0.SELECT : c ? N.X0.CONSOLE : N.X0.DESKTOP),
                    )
                    .exhaustive(),
            [c, l, f, p, n],
        ),
        s,
        i,
    ];
}

function eY(e) {
    var t, n;
    let r = ew(e),
        i = eN(e),
        [a] = eH(e, i),
        s = eb(e),
        l = (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null,
        c = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null,
        u = null == r,
        d = o.o.DESKTOP.has(i.taskType) && i.percentComplete > 0,
        f = 0 === i.percentComplete,
        p = l && !c && !s && u && (d || (f && a === N.X0.DESKTOP)),
        _ = (0, I.isWeb)() && p && !(0, F.W1)(e),
        h = (0, I.isMac)() && i.taskType === o.n.STREAM_ON_DESKTOP && p,
        m = [];
    return h && m.push(q.intl.string(q.t.MFGxFM)), _ && m.push(q.intl.string(q.t.BV6xDm)), m;
}

function eW(e) {
    var t;
    return null != (t = (0, c.bG)([C.A], () => C.A.quests).get(e)) ? t : null;
}

function eK(e) {
    let { mode: t, questContent: n, sourceQuestContent: i, questId: a } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        null != a &&
            o.current !== t &&
            ((0, x.Mm)({
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
                    (0, x.Mm)({
                        mode: null,
                        prevMode: o.current,
                        questContent: n,
                        questId: a,
                        sourceQuestContent: i,
                    });
                };
        }, [a, n, i]);
}

function ez(e, t) {
    let n = (0, c.bG)([C.A], () => C.A.getQuest(e), [e]),
        i = (0, u.Ay)();
    return r.useMemo(() => {
        if (null == n) return null;
        let e = null != t ? t : (0, l.Mw)(i) ? K.NJ8.DARK : K.NJ8.LIGHT;
        return (0, L.tW)(n, L.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}

function eq(e) {
    let t = (0, V.mq)(e),
        n = (0, V.k5)(e),
        r = (0, V.$5)(e),
        i = (0, V.Y7)(e),
        a = (0, V.JX)(e),
        o = (0, c.bG)([g.default], () => g.default.getCurrentUser()),
        s = (0, S.TW)(o, z.PremiumTypes.TIER_2);
    if (null == n)
        return q.intl.formatToPlainString(q.t.l9uXL8, {
            decorationName: t,
        });
    let l = q.intl.formatToPlainString(q.t.o97tNn, {
            rewardName: t,
        }),
        u = q.intl.formatToPlainString(q.t.PkyRZo, {
            rewardName: t,
            expirationDate: r,
        }),
        d = q.intl.formatToPlainString(q.t.ie4YK0, {
            rewardName: t,
            duration: n,
        }),
        f = q.intl.formatToPlainString(q.t.yCpc0U, {
            duration: n,
            rewardName: t,
        }),
        p = s ? l : d,
        _ = s ? u : f,
        h = i ? p : _;
    return a
        ? h
        : q.intl.formatToPlainString(q.t.tTlItm, {
              duration: n,
              decorationName: t,
          });
}

function eZ(e) {
    let t = (0, B.TP)(e);
    return {
        launchInGameActivity: (0, d.A)({
            applicationId: t,
        }),
    };
}
let eQ = () => (0, c.yK)([C.A], () => [...C.A.quests.values()]).some((e) => e.preview),
    eX = () => {
        let e = (0, D.U)({
                location: W.rE.QUEST_PREVIEW_TOOL_2,
            }),
            t = eQ();
        return e && t;
    },
    eJ = (e) => {
        var t;
        let n = (null == e ? void 0 : e.userStatus) != null && (0, U.gO)(e.userStatus, N.uF.ACTIVITY_PANEL),
            r = eb(null != e ? e : null),
            i = (null == e || null == (t = e.userStatus) ? void 0 : t.claimedAt) != null,
            a = (0, c.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []);
        return !n && !r && !i && !a;
    },
    e$ = () => {
        let e = (0, c.yK)([C.A], () => [...C.A.quests.values()]);
        return r.useMemo(() => e.filter((e) => e.preview), [e]);
    };

function e0() {
    return r.useMemo(
        () =>
            W.pc.map((e) => {
                let [t, n] = e;
                return {
                    heading: (0, k.fx)(t),
                    options: n,
                };
            }),
        [],
    );
}

function e1() {
    return r.useMemo(
        () =>
            Object.keys(W.kL).map((e) => ({
                label: (0, k.Js)(W.kL[e]),
                value: W.kL[e],
            })),
        [],
    );
}

function e2(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    r.useEffect(() => {
        E.default.track(K.HAw.QUEST_HOME_SORT_METHOD_CHANGED, {
            sort_method: t,
            previous_sort_method: a.current,
        }),
            (a.current = t);
    }, [t]),
        r.useEffect(() => {
            var e;
            let t = n.map((e) => e.filter);
            E.default.track(K.HAw.QUEST_HOME_FILTERS_CHANGED, {
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
    e6 = (e, t) => {
        var n, r, i;
        let a = (null == (n = e.userStatus) ? void 0 : n.completedAt) != null;
        return (
            (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null &&
            !a &&
            Date.now() - new Date(null == (i = e.userStatus) ? void 0 : i.enrolledAt).getTime() > t
        );
    };

function e4() {
    let { enabled: e } = w.XM.useConfig({
            location: W.rE.QUEST_HOME_DESKTOP,
        }),
        [t, n] = r.useState(e),
        [i, a] = r.useState(e),
        [o, s] = r.useState(!1),
        [l, u] = r.useState(!1),
        { isFetching: d, takeoverConfig: f } = (0, c.cf)([C.A], () => ({
            isFetching: C.A.isFetchingQuestHomeTakeover(),
            takeoverConfig: C.A.getQuestHomeTakeoverConfig(),
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
                    await (0, T.Tb)();
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
                    await Promise.all([(0, O.NN)(f.assetHeroImage.url), (0, O.NN)(f.assetSponsorImage.url)]);
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
