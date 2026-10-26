(n.d(t, {
    O9: () => eV,
    Vn: () => eM,
    Wj: () => eG,
    mL: () => es,
    Cv: () => eZ,
    Yl: () => ev,
    Nb: () => e5,
    tZ: () => eX,
    pT: () => e2,
    UH: () => e4,
    $P: () => e9,
    YW: () => eU,
    zW: () => ez,
    NC: () => ep,
    Hv: () => eL,
    j$: () => eQ,
    fc: () => eD,
    SD: () => eg,
    aC: () => eW,
    FA: () => eJ,
    LS: () => eP,
    p5: () => e0,
    Ns: () => e8,
    Iq: () => eO,
    Qh: () => em,
    t9: () => e3,
    RR: () => eK,
    XD: () => e7,
    ZP: () => eN,
    UX: () => eH,
    mn: () => eT,
    C5: () => eY,
    sb: () => e1,
    I3: () => ew,
    Qo: () => eB,
    In: () => ex,
    H6: () => ej,
    a5: () => e$,
    F3: () => eF,
    L1: () => eS,
    do: () => eh,
    oH: () => ek,
    S5: () => eR,
    Du: () => eq,
}),
    n(321073),
    n(801541));
var r,
    u,
    i,
    o = n(582128),
    l = n(435558),
    s = n(181370),
    a = n.n(s),
    c = n(889137),
    d = n(323889),
    E = n(412703),
    f = n(114046);
n(731355);
var _ = n(517846),
    A = n(118751),
    C = n(462887),
    T = n(17928),
    I = n(736653),
    p = n(787389),
    S = n(157695),
    m = n(183636),
    O = n(429913);
n(674658);
var g = n(27620),
    N = n(773669),
    P = n(885386),
    L = n(734057),
    v = n(30370),
    R = n(287809),
    h = n(174459),
    b = n(927813),
    y = n(403362),
    M = n(975571),
    D = n(723702),
    w = n(927578);
(n(845890), n(265704));
var k = n(178540),
    U = n(396813),
    Q = n(859703),
    q = n(738822),
    G = n(192444),
    K = n(945810);
(0, K.mj)({
    name: "2026-09-quest-home-bounties-feature-gate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let H = (0, K.mj)({
        name: "2026-07-renewable-end-date-sort",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    F = 221552 == n.j ? H : null;
var x = n(291749),
    V = n(971276),
    X = n(561844);
n(590202);
var B = n(971649),
    W = n(651892),
    Y = n(710969),
    j = n(977416),
    $ = n(639214),
    J = n(576761),
    z = n(684693),
    Z = n(801365),
    ee = n(792620),
    et = n(814793),
    en = n(753386),
    er = n(190107),
    eu = n(652215),
    ei = n(202541),
    eo = n(105292);
let el = 221552 == n.j ? -1 : null;
function es() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = o.useState(!1),
        r = (0, T.yK)([Q.A], () => [...Q.A.quests.values()]),
        u = (0, T.yK)([Q.A], () => [...Q.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: l } = (0, T.cf)([Q.A], () => ({
            isFetchingCurrentQuests: Q.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: Q.A.lastFetchedCurrentQuests,
        })),
        s = (0, V.s)();
    return (
        o.useEffect(() => {
            let r;
            switch (e.fetchPolicy) {
                case "cache-only":
                    return;
                case "cache-or-network":
                    r = 0 === l;
                    break;
                case "cache-and-network":
                    r = !0;
                    break;
                default:
                    e.fetchPolicy;
                    return;
            }
            if (r && s && !t && !i && (n(!0), (0, U.N1)(), (0, D.isMac)() && "focused" !== m.A.getState())) return;
        }, [e.fetchPolicy, s, t, i, l, e.callerSource]),
        { quests: r, excludedQuests: u, isFetchingCurrentQuests: i, hasFetched: t }
    );
}
function ea(e, t, n, r) {
    let u = e.id === er.aJ,
        i = t.id === er.aJ,
        o = u && e.userStatus?.completedAt == null;
    if (o !== (i && t.userStatus?.completedAt == null)) return o ? el : 1;
    let l = !(0, j.Ic)(e),
        s = e.userStatus?.claimedAt != null,
        a = t.userStatus?.claimedAt != null,
        c = e.userStatus?.enrolledAt != null,
        d = t.userStatus?.enrolledAt != null,
        E = 20 * b.A.Millis.MINUTE,
        f = e6(e, E),
        _ = e6(t, E);
    if (l) {
        var A, C, T;
        let u,
            i,
            { questHomeHero: o, isQuestHomeHeroShelfEnabled: l } = n;
        if (null != o && !l) {
            let n = (0, et.I0)(o, e.id),
                r = (0, et.I0)(o, t.id);
            if (n || r) return n ? el : 1;
        }
        return f !== _ && (f || _)
            ? f
                ? 1
                : el
            : s !== a
              ? s
                  ? 1
                  : el
              : c !== d
                ? c
                    ? el
                    : 1
                : ((A = e),
                  (C = t),
                  (u = (T = r).get(A.id)),
                  (i = T.get(C.id)),
                  null != u && null != i
                      ? u !== i
                          ? u - i
                          : A.id !== C.id
                            ? A.id < C.id
                                ? el
                                : 1
                            : 0
                      : null != u
                        ? el
                        : null != i
                          ? 1
                          : eI(A.config.expiresAt, C.config.expiresAt, 1));
    }
    return s !== a ? (s ? el : 1) : c !== d ? (c ? el : 1) : eI(e.config.expiresAt, t.config.expiresAt, 0);
}
function ec(e, t, n) {
    return eI(e.config.startsAt, t.config.startsAt, 0);
}
function ed(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        u = t.userStatus?.enrolledAt;
    return null == r && null == u
        ? eI(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == u
          ? el
          : null == r && null != u
            ? 1
            : eI(r, u, 0);
}
function eE(e, t, n) {
    return eI(e.config.expiresAt, t.config.expiresAt, 1);
}
function ef(e, t) {
    switch (t) {
        case er.Pc.VIDEO:
            return (0, ee.vv)(e);
        case er.Pc.PLAY:
            return (
                (0, ee.t)({ quest: e }) || (0, ee.fE)({ quest: e }) || (0, ee.vl)(e) || (0, ee.g5)(e) || (0, ee.Cr)(e)
            );
        default:
            return !1;
    }
}
function e_(e, t) {
    switch (t) {
        case er.BQ.VIRTUAL_CURRENCY:
            return (0, Z.ks)(e.config);
        case er.BQ.COLLECTIBLE:
            return (0, Z.tU)(e.config);
        case er.BQ.IN_GAME:
            return (0, Z.HG)(e.config) || (0, Z.r7)(e.config);
        default:
            return !1;
    }
}
let eA = 221552 == n.j ? {} : null,
    eC =
        221552 == n.j
            ? {
                  questHomeHero: null,
                  isQuestHomeHeroShelfEnabled: !1,
                  currentUserId: null,
                  isRenewableEndDateSortEnabled: !1,
                  isMobileQuestHomeSortPriorityEnabled: !1,
              }
            : null;
function eT(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eC,
        { sortMethod: u, filters: i } = n,
        o =
            null == i || 0 === i.length
                ? e
                : (function (e, t) {
                      if (0 === t.length) return e;
                      let n = (0, l.groupBy)(t, "group");
                      return e.filter((e) =>
                          Object.entries(n).every((t) => {
                              let n,
                                  [r, u] = t;
                              return (
                                  (n = (function (e) {
                                      switch (e) {
                                          case "task":
                                              return ef;
                                          case "reward":
                                              return e_;
                                      }
                                  })(r)),
                                  0 === u.length || u.some((t) => n(e, t.filter))
                              );
                          }),
                      );
                  })(e, i),
        s = (function (e, t, n) {
            let r = new Map();
            if (!n || null == t) return r;
            for (let n of e) {
                var u;
                (0, et.iM)(n, er.Li.RENEWABLE_END_DATE) && r.set(n.id, ((u = n.id), a().v3(`${t}:${u}`) >>> 0));
            }
            return r;
        })(o, r.currentUserId, r.isRenewableEndDateSortEnabled),
        c =
            ((t = (function (e) {
                switch (e) {
                    case er.kL.MOST_RECENT:
                        return ec;
                    case er.kL.RECENTLY_ENROLLED:
                        return ed;
                    case er.kL.EXPIRING_SOON:
                        return eE;
                    case er.kL.SUGGESTED:
                    default:
                        return ea;
                }
            })(u)),
            function (e, n) {
                let u = !(0, j.Ic)(e);
                return !(0, j.Ic)(n) !== u ? (u ? el : 1) : t(e, n, r, s);
            });
    return o.sort(c);
}
function eI(e, t, n) {
    return e.localeCompare(t) * (0 === n ? el : 1);
}
var ep = 221552 == n.j ? (((r = {}).ALL = "all"), (r.CLAIMED = "claimed"), (r.PREVIEW_TOOL = "preview_tool"), r) : null,
    eS =
        221552 == n.j
            ? (((u = {}).TAB = "tab"),
              (u.QUEST_ID = "quest_id"),
              (u.SORT = "sort"),
              (u.FILTER = "filter"),
              (u.AD_CREATIVE_IDS = "ad_creative_ids"),
              u)
            : null;
function em(e) {
    let t,
        n,
        r,
        u,
        i,
        l,
        s,
        a,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA,
        {
            quests: d,
            excludedQuests: E,
            isFetchingCurrentQuests: f,
            hasFetched: _,
        } = es({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        A = new Map(d.map((e) => [e.id, e])),
        C =
            ((t = (function () {
                let e = (0, T.bG)([S.A], () => S.A.getQuestHomeHero()),
                    { isShelfEnabled: t } = e3(e),
                    n = (0, T.bG)([R.default], () => R.default.getCurrentUser()?.id ?? null),
                    { enabled: r } = F.useConfig({ location: er.rE.QUEST_HOME_MOBILE }),
                    { enabled: u } = G.NN.useConfig({ location: er.rE.QUEST_HOME_MOBILE });
                return o.useMemo(
                    () => ({
                        questHomeHero: e,
                        isQuestHomeHeroShelfEnabled: t,
                        currentUserId: n,
                        isRenewableEndDateSortEnabled: !1,
                        isMobileQuestHomeSortPriorityEnabled: !1,
                    }),
                    [e, t, n, !1, !1],
                );
            })()),
            (n = o.useRef([])),
            (r = o.useRef(c.sortMethod)),
            (u = o.useRef(c.filters)),
            (i = o.useRef(0)),
            (l = o.useRef(t)),
            o.useMemo(() => {
                if (0 === d.length) return [];
                if (
                    n.current.length > 0 &&
                    i.current === d.length &&
                    r.current === c.sortMethod &&
                    u.current === c.filters &&
                    l.current === t
                )
                    return n.current;
                let e = eT(d, c, t).map((e) => e.id);
                return (
                    (n.current = e),
                    (r.current = c.sortMethod),
                    (u.current = c.filters),
                    (i.current = d.length),
                    (l.current = t),
                    e
                );
            }, [d, c, t])),
        I =
            ((s = o.useMemo(
                () =>
                    d.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [d],
            )),
            (a = o.useRef([])),
            o.useMemo(() => {
                if (0 === s.length) return [];
                if (a.current.length > 0 && a.current.length === s.length) return a.current;
                let e = s
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? el
                                : 1
                            : eI(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return ((a.current = e), e);
            }, [s])),
        p = [];
    for (let t of "all" === e ? C : I) {
        let n = A.get(t),
            r = null != n && "all" === e && c.removeExpiredQuests && (0, j.Ic)(n) && !(0, Y.GR)(n.userStatus);
        null == n || r || p.push(n);
    }
    return { quests: p, excludedQuests: E, isFetchingCurrentQuests: f, hasFetched: _ };
}
function eO() {
    let e = o.useRef(!1),
        t = (0, T.yK)([Q.A], () => Array.from(Q.A.claimedQuests.values())),
        n = (0, T.bG)([Q.A], () => Q.A.isFetchingClaimedQuests);
    return (
        o.useEffect(() => {
            n || e.current || ((e.current = !0), (0, U.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eg(e, t) {
    let n = eP(e),
        r = (0, Z.ks)(e.config),
        u = (0, Z.KK)(e.config),
        i = t !== J.MA.INELIGIBLE;
    return !n && r && u && i;
}
function eN(e) {
    return (0, T.bG)(
        [Q.A],
        () => {
            let t = Q.A.getQuest(e);
            return null == t ? null : (0, Z.b)(t.config);
        },
        [e],
    );
}
function eP(e) {
    return (0, T.bG)([Q.A], () => null != e && Q.A.isQuestExpired(e.id), [e]);
}
function eL() {
    return (0, T.bG)([Q.A], () => Q.A.isQuestAccessSuspended, []);
}
function ev(e, t, n) {
    let r = (0, T.bG)([L.A], () => L.A.getChannel(t?.channelId) ?? null),
        u = (0, T.bG)([Q.A], () => null != Q.A.questEnrollmentBlockedUntil, []),
        i = (0, T.bG)([R.default], () => R.default.getCurrentUser()?.id),
        o = (0, T.bG)([Q.A], () => null != e && Q.A.isQuestExpired(e.id), [e]);
    if (null == e || u || o || i === n) return !1;
    let l = e.userStatus?.claimedAt != null,
        s = (0, et.Ll)(t, r);
    return !l || !!s;
}
function eR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, T.bG)([N.default], () => N.default.locale);
    return o.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eh(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: u } = e,
        i = (0, B.wW)();
    return o.useCallback(() => {
        t.id === er.Fw
            ? window.open(M.A.getArticleURL(eu.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, z.pu)(t, { content: n, ctaContent: r, impressionId: i(), sourceQuestContent: u });
    }, [t, n, r, i, u]);
}
function eb(e) {
    return (0, T.bG)([Q.A], () => Q.A.isProgressingOnDesktop(e.id));
}
function ey(e) {
    return o.useMemo(() => (0, ee.YL)(e), [e]);
}
function eM(e) {
    let t,
        n = eb(e),
        r = ey(e),
        u =
            ((t = (0, T.bG)([Q.A], () => Q.A.getOptimisticProgress(e.id, E.n.WATCH_VIDEO))),
            o.useMemo(() => (0, en.J$)(e), [e, t]));
    return n || r || u;
}
let eD = (e) => {
    let t = o.useCallback(() => (0, ee.Yh)(e), [e]),
        [n, r] = o.useState(t()),
        u = o.useCallback(() => r(t()), [t]),
        i = eM(e);
    return (
        o.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !i
            )
                return void u();
            let t = window.setInterval(() => {
                u();
            }, +b.A.Millis.SECOND);
            return () => {
                (clearInterval(t), u());
            };
        }, [e, i, u]),
        n
    );
};
function ew(e) {
    return o.useMemo(() => (0, ee.JC)(e), [e]);
}
function ek(e) {
    let t = o.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, ee.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, O.A)(t);
}
function eU(e) {
    let t = (0, T.bG)([Q.A], () => Q.A.quests),
        n = ek(Array.from(t.values())),
        r = o.useMemo(() => {
            let n = (0, et.$e)(t, er.zO);
            return (0, $.BM)(n, e);
        }, [e, t, n]);
    return eP(r) ? null : r;
}
function eQ(e) {
    return o.useMemo(
        () => ({
            handleComplete: () => (0, U.Yb)(e),
            handleProgress: (t) => (0, U.Yb)(e, t),
            handleResetStatusClick: () => (0, U.UZ)(e),
            handleResetDismissibilityClick: () => (0, U.Gt)(e),
            handleOverridePreviewClick: (t) => (0, U.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, U.qV)(d.p.QUEST, [e]),
        }),
        [e],
    );
}
function eq() {
    let { fetching: e, accounts: t } = (0, T.cf)([v.A], () => ({
            fetching: v.A.isFetching(),
            accounts: v.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: u,
        } = o.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === eu.fg2.XBOX),
                r = e.filter((e) => e.type === eu.fg2.PLAYSTATION),
                u = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
}
function eG(e) {
    let { questId: t, preview: n, beforeRequest: r, afterRequest: u } = e,
        [i, l] = o.useState(!1),
        s = (0, T.bG)([v.A], () => v.A.getAccounts()),
        a = (0, k.O)((e) => e.clearErrorHintsByType),
        c = o.useCallback((e) => k.O.getState().setErrorHints(t, e), [t]);
    return (
        o.useEffect(() => {
            a(t, f._.EXPIRED_CREDENTIAL);
        }, [s, a, t]),
        {
            startConsoleQuest: o.useCallback(async () => {
                if (i) return;
                (r?.(), l(!0));
                let e = null;
                try {
                    ((e = await (0, U.vD)(t, n)), c(e.errorHints));
                } finally {
                    (l(!1), u?.());
                }
            }, [i, r, u, n, t, c]),
            startingConsoleQuest: i,
        }
    );
}
function eK(e) {
    let { quest: t } = e,
        { xboxAndPlaystationAccounts: n } = eq(),
        r = eM(t),
        u = 0 === n.length;
    return (0, ee.g5)(t) && u && !r;
}
function eH() {
    let { xboxAccounts: e, playstationAccounts: t } = eq(),
        n = e.length > 0,
        r = t.length > 0,
        u = M.A.getArticleURL(eu.MVz.QUEST_HOW_TO_PLAYSTATION),
        i = M.A.getArticleURL(eu.MVz.QUEST_HOW_TO_XBOX),
        o = eo.intl.format(eo.t.beN4DG, { psHelpdeskArticle: u, xboxHelpdeskArticle: i }),
        l = eo.intl.format(eo.t.HVS7nh, { helpdeskArticle: r ? u : i });
    return { message: (n && !r) || (!n && r) ? l : o, xboxURL: i, playstationURL: u };
}
var eF =
    (((i = {})[(i.UNACCEPTED = 0)] = "UNACCEPTED"),
    (i[(i.ACCEPTED = 1)] = "ACCEPTED"),
    (i[(i.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (i[(i.COMPLETED = 3)] = "COMPLETED"),
    (i[(i.CLAIMED = 4)] = "CLAIMED"),
    i);
function ex(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        u = eD(e).percentComplete > 0;
    return r ? 4 : n ? 3 : u && t ? 2 : 1 * !!t;
}
function eV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, T.bG)([N.default], () => N.default.locale),
        { percentComplete: r } = eD(e),
        u = ew(e),
        i = null != u ? u.percentComplete : r,
        o = 100 * i,
        l = null == u || t ? (0, A.l9)(n, i, { roundingMode: "floor" }) : `${u?.progress}/${u?.target}`;
    return { completedRatio: i, percentComplete: o, completedRatioDisplay: l };
}
function eX(e) {
    return [(0, T.bG)([Q.A], () => Q.A.selectedTaskPlatform(e)), o.useCallback((t) => (0, U.lx)(e, t), [e])];
}
function eB(e, t) {
    let [n, r] = eX(e.id),
        u = o.useMemo(() => (0, z.UR)(e), [e]),
        i = u.includes(er.fO.DESKTOP),
        l = u.includes(er.fO.CONSOLE),
        s = eb(e),
        a = ey(e),
        d = o.useMemo(
            () =>
                (0, c.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: E.n.PLAY_ON_DESKTOP }, () => er.fO.DESKTOP)
                    .with({ taskType: E.n.PLAY_ACTIVITY }, () => er.fO.DESKTOP)
                    .with({ taskType: E.n.WATCH_VIDEO }, () => er.fO.DESKTOP)
                    .with({ taskType: E.n.WATCH_VIDEO_ON_MOBILE }, () => er.fO.DESKTOP)
                    .with({ taskType: E.n.STREAM_ON_DESKTOP }, () => er.fO.DESKTOP)
                    .with({ taskType: E.n.PLAY_ON_XBOX }, () => er.fO.CONSOLE)
                    .with({ taskType: E.n.PLAY_ON_PLAYSTATION }, () => er.fO.CONSOLE)
                    .with({ taskType: E.n.ACHIEVEMENT_IN_GAME }, () => er.fO.DESKTOP)
                    .with({ taskType: E.n.ACHIEVEMENT_IN_ACTIVITY }, () => er.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = s ? er.fO.DESKTOP : a ? er.fO.CONSOLE : null;
    return [
        o.useMemo(
            () =>
                (0, c.YW)({ lastPlatformProgress: d, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: er.fO.CONSOLE }, () => q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: er.fO.DESKTOP }, () => q.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: er.fO.CONSOLE }, () => q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: er.fO.DESKTOP }, () => q.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: er.fO.CONSOLE,
                        },
                        () => q.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: er.fO.DESKTOP,
                        },
                        () => q.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (l && i ? q.X0.SELECT : l ? q.X0.CONSOLE : q.X0.DESKTOP),
                    )
                    .exhaustive(),
            [l, i, d, f, n],
        ),
        u,
        r,
    ];
}
function eW(e) {
    let t = ew(e),
        n = eD(e),
        [r] = eB(e, n),
        u = eP(e),
        i = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = E.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        s = 0 === n.percentComplete,
        a = i && !o && !u && null == t && (l || (s && r === q.X0.DESKTOP)),
        c = (0, D.isWeb)() && a && !(0, z.W1)(e),
        d = (0, D.isMac)() && n.taskType === E.n.STREAM_ON_DESKTOP && a,
        f = [];
    return (d && f.push(eo.intl.string(eo.t.MFGxFM)), c && f.push(eo.intl.string(eo.t.BV6xDm)), f);
}
function eY(e) {
    return (0, T.bG)([Q.A], () => Q.A.quests).get(e) ?? null;
}
function ej(e) {
    let t,
        n,
        r,
        { mode: u, questContent: i, sourceQuestContent: l } = e;
    "questId" in e ? (t = e.questId) : ((n = e.adContentId), (r = e.adCreativeType));
    let s = o.useCallback(
            (e, u) => {
                null != t
                    ? (0, X.Zu)({ mode: e, prevMode: u, questContent: i, questId: t, sourceQuestContent: l })
                    : null != n &&
                      null != r &&
                      (0, X.Wc)({
                          adContentId: n,
                          adCreativeType: r,
                          mode: e,
                          prevMode: u,
                          questContent: i,
                          sourceQuestContent: l,
                      });
            },
            [i, l, t, n, r],
        ),
        a = t ?? n,
        c = o.useRef(null);
    (o.useEffect(() => {
        null != a && c.current !== u && (s(u, c.current), (c.current = u));
    }, [u, a, s]),
        o.useEffect(() => {
            if (null != a)
                return () => {
                    s(null, c.current);
                };
        }, [a, s]));
}
function e$(e, t) {
    let n = (0, T.bG)([Q.A], () => Q.A.getQuest(e), [e]),
        r = (0, I.Ay)();
    return o.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, C.M)(r) ? eu.NJ8.DARK : eu.NJ8.LIGHT);
        return (0, x.tW)(n, x.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function eJ(e) {
    let t = (0, T.bG)([R.default], () => R.default.getCurrentUser()),
        n = (0, Z.mq)(e, t),
        r = (0, Z.k5)(e),
        u = (0, Z.$5)(e),
        i = (0, Z.Y7)(e),
        o = (0, Z.JX)(e),
        l = (0, w.TW)(t, ei.PremiumTypes.TIER_2);
    if (null == r) return eo.intl.formatToPlainString(eo.t.l9uXL8, { decorationName: n });
    let s = eo.intl.formatToPlainString(eo.t.o97tNn, { rewardName: n }),
        a = eo.intl.formatToPlainString(eo.t.PkyRZo, { rewardName: n, expirationDate: u }),
        c = eo.intl.formatToPlainString(eo.t.ie4YK0, { rewardName: n, duration: r }),
        d = eo.intl.formatToPlainString(eo.t.yCpc0U, { duration: r, rewardName: n });
    return o
        ? i
            ? l
                ? s
                : c
            : l
              ? a
              : d
        : eo.intl.formatToPlainString(eo.t.tTlItm, { duration: r, decorationName: n });
}
function ez(e) {
    let t = (0, ee.TP)(e);
    return { launchInGameActivity: (0, p.A)({ applicationId: t }) };
}
function eZ() {
    return (0, T.yK)([Q.A], () => [...Q.A.quests.values()]).some((e) => e.preview);
}
function e0() {
    return eZ();
}
function e1(e) {
    let t = e?.userStatus != null && (0, Y.gO)(e.userStatus, q.uF.ACTIVITY_PANEL),
        n = eP(e ?? null),
        r = e?.userStatus?.claimedAt != null,
        u = (0, T.bG)([Q.A], () => null != Q.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !r && !u;
}
function e2() {
    let e = (0, T.yK)([Q.A], () => [...Q.A.quests.values()]);
    return o.useMemo(() => e.filter((e) => e.preview), [e]);
}
function e5() {
    let e = er.pc;
    return o.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, W.fx)(t), options: n };
            }),
        [e],
    );
}
function e7() {
    return o.useMemo(() => Object.keys(er.kL).map((e) => ({ label: (0, W.Js)(er.kL[e]), value: er.kL[e] })), []);
}
function e9(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: r } = e,
        u = o.useRef(null),
        i = o.useRef(null);
    (o.useEffect(() => {
        (h.default.track(eu.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: u.current }),
            (u.current = t));
    }, [t]),
        o.useEffect(() => {
            let e = n.map((e) => e.filter);
            (h.default.track(eu.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: i.current ?? [],
                num_quests_visible: r,
            }),
                (i.current = e));
        }, [n, r]));
}
function e8(e) {
    return o.useMemo(() => R.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
}
function e6(e, t) {
    let n = e.userStatus?.completedAt != null;
    return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
}
function e3(e) {
    let t = (0, T.bG)([Q.A], () => Q.A.quests),
        n = e?.questIds;
    return o.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
        let e = n
            .map((e) => t.get(e))
            .filter(y.Vq)
            .filter((e) => !(0, j.Ic)(e));
        return e.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
}
function e4(e) {
    let t = P.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return o.useCallback(() => {
        if (n) return;
        let r = t ? _.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : _.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, g.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
(b.A.Millis.HOUR, b.A.Millis.MINUTE);
