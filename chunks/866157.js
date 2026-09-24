(n.d(t, {
    O9: () => eK,
    Vn: () => eL,
    Wj: () => eG,
    mL: () => ea,
    Cv: () => eZ,
    Yl: () => ey,
    Nb: () => e5,
    tZ: () => e$,
    pT: () => e2,
    UH: () => e3,
    $P: () => e6,
    YW: () => eq,
    zW: () => ez,
    NC: () => eT,
    Hv: () => eN,
    j$: () => eD,
    fc: () => eQ,
    SD: () => eS,
    aC: () => eW,
    FA: () => eJ,
    LS: () => ev,
    p5: () => e0,
    Ns: () => e7,
    Iq: () => eg,
    Qh: () => e_,
    t9: () => e9,
    RR: () => eB,
    XD: () => e8,
    ZP: () => eO,
    UX: () => ex,
    mn: () => eI,
    C5: () => eX,
    sb: () => e1,
    I3: () => ek,
    Qo: () => eF,
    In: () => eH,
    H6: () => eY,
    a5: () => ej,
    F3: () => eV,
    L1: () => eh,
    do: () => ew,
    oH: () => eM,
    S5: () => eP,
    Du: () => eU,
}),
    n(321073),
    n(801541));
var i,
    r,
    s,
    o = n(582128),
    u = n(435558),
    a = n(181370),
    l = n.n(a),
    d = n(889137),
    c = n(323889),
    C = n(412703),
    f = n(114046);
n(731355);
var A = n(517846),
    E = n(118751),
    p = n(462887),
    I = n(17928),
    m = n(736653),
    T = n(787389),
    h = n(157695),
    _ = n(183636),
    g = n(429913);
n(674658);
var S = n(27620),
    O = n(773669),
    v = n(885386),
    N = n(734057),
    y = n(30370),
    P = n(287809),
    w = n(174459),
    b = n(927813),
    R = n(403362),
    L = n(975571),
    Q = n(723702),
    k = n(158045);
(n(323874), n(14289), n(35956), n(636537), n(228366), n(181658), n(314329), n(107195), n(881615), n(390595));
var M = n(626584);
(n(544180), n(265704));
var q = n(859703),
    D = n(738822),
    U = n(710969),
    G = n(652215);
new M.A("BountyActionCreators");
var B = n(178540),
    x = n(396813),
    V = n(192444),
    H = n(945810);
(0, H.mj)({
    name: "2026-09-quest-home-bounties-feature-gate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let K = (0, H.mj)({
        name: "2026-07-renewable-end-date-sort",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    $ = 221552 == n.j ? K : null;
var F = n(291749),
    W = n(971276),
    X = n(561844);
n(590202);
var Y = n(971649),
    j = n(651892),
    J = n(639214),
    z = n(576761),
    Z = n(901406),
    ee = n(801365),
    et = n(792620),
    en = n(814793),
    ei = n(753386),
    er = n(190107),
    es = n(202541),
    eo = n(375708);
let eu = 221552 == n.j ? -1 : null;
function ea() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = o.useState(!1),
        i = (0, I.yK)([q.A], () => [...q.A.quests.values()]),
        r = (0, I.yK)([q.A], () => [...q.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: s, lastFetchedCurrentQuests: u } = (0, I.cf)([q.A], () => ({
            isFetchingCurrentQuests: q.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: q.A.lastFetchedCurrentQuests,
        })),
        a = (0, W.s)();
    return (
        o.useEffect(() => {
            let i;
            switch (e.fetchPolicy) {
                case "cache-only":
                    return;
                case "cache-or-network":
                    i = 0 === u;
                    break;
                case "cache-and-network":
                    i = !0;
                    break;
                default:
                    e.fetchPolicy;
                    return;
            }
            if (i && a && !t && !s && (n(!0), (0, x.N1)(), (0, Q.isMac)() && "focused" !== _.A.getState())) return;
        }, [e.fetchPolicy, a, t, s, u, e.callerSource]),
        { quests: i, excludedQuests: r, isFetchingCurrentQuests: s, hasFetched: t }
    );
}
function el(e, t, n, i) {
    let r = e.id === er.aJ,
        s = t.id === er.aJ,
        o = r && e.userStatus?.completedAt == null;
    if (o !== (s && t.userStatus?.completedAt == null)) return o ? eu : 1;
    let u = !(0, U.Ic)(e),
        a = e.userStatus?.claimedAt != null,
        l = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        C = 20 * b.A.Millis.MINUTE,
        f = e4(e, C),
        A = e4(t, C);
    if (u) {
        var E, p, I;
        let r,
            s,
            { questHomeHero: o, isQuestHomeHeroShelfEnabled: u } = n;
        if (null != o && !u) {
            let n = (0, en.I0)(o, e.id),
                i = (0, en.I0)(o, t.id);
            if (n || i) return n ? eu : 1;
        }
        return f !== A && (f || A)
            ? f
                ? 1
                : eu
            : a !== l
              ? a
                  ? 1
                  : eu
              : d !== c
                ? d
                    ? eu
                    : 1
                : ((E = e),
                  (p = t),
                  (r = (I = i).get(E.id)),
                  (s = I.get(p.id)),
                  null != r && null != s
                      ? r !== s
                          ? r - s
                          : E.id !== p.id
                            ? E.id < p.id
                                ? eu
                                : 1
                            : 0
                      : null != r
                        ? eu
                        : null != s
                          ? 1
                          : em(E.config.expiresAt, p.config.expiresAt, 1));
    }
    return a !== l ? (a ? eu : 1) : d !== c ? (d ? eu : 1) : em(e.config.expiresAt, t.config.expiresAt, 0);
}
function ed(e, t, n) {
    return em(e.config.startsAt, t.config.startsAt, 0);
}
function ec(e, t, n) {
    let i = e.userStatus?.enrolledAt,
        r = t.userStatus?.enrolledAt;
    return null == i && null == r
        ? em(e.config.expiresAt, t.config.expiresAt, 0)
        : null != i && null == r
          ? eu
          : null == i && null != r
            ? 1
            : em(i, r, 0);
}
function eC(e, t, n) {
    return em(e.config.expiresAt, t.config.expiresAt, 1);
}
function ef(e, t) {
    switch (t) {
        case er.Pc.VIDEO:
            return (0, et.vv)(e);
        case er.Pc.PLAY:
            return (
                (0, et.t)({ quest: e }) || (0, et.fE)({ quest: e }) || (0, et.vl)(e) || (0, et.g5)(e) || (0, et.Cr)(e)
            );
        default:
            return !1;
    }
}
function eA(e, t) {
    switch (t) {
        case er.BQ.VIRTUAL_CURRENCY:
            return (0, ee.ks)(e.config);
        case er.BQ.COLLECTIBLE:
            return (0, ee.tU)(e.config);
        case er.BQ.IN_GAME:
            return (0, ee.HG)(e.config) || (0, ee.r7)(e.config);
        default:
            return !1;
    }
}
let eE = 221552 == n.j ? {} : null,
    ep =
        221552 == n.j
            ? {
                  questHomeHero: null,
                  isQuestHomeHeroShelfEnabled: !1,
                  currentUserId: null,
                  isRenewableEndDateSortEnabled: !1,
                  isMobileQuestHomeSortPriorityEnabled: !1,
              }
            : null;
function eI(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ep,
        { sortMethod: r, filters: s } = n,
        o =
            null == s || 0 === s.length
                ? e
                : (function (e, t) {
                      if (0 === t.length) return e;
                      let n = (0, u.groupBy)(t, "group");
                      return e.filter((e) =>
                          Object.entries(n).every((t) => {
                              let n,
                                  [i, r] = t;
                              return (
                                  (n = (function (e) {
                                      switch (e) {
                                          case "task":
                                              return ef;
                                          case "reward":
                                              return eA;
                                      }
                                  })(i)),
                                  0 === r.length || r.some((t) => n(e, t.filter))
                              );
                          }),
                      );
                  })(e, s),
        a = (function (e, t, n) {
            let i = new Map();
            if (!n || null == t) return i;
            for (let n of e) {
                var r;
                (0, en.iM)(n, er.Li.RENEWABLE_END_DATE) && i.set(n.id, ((r = n.id), l().v3(`${t}:${r}`) >>> 0));
            }
            return i;
        })(o, i.currentUserId, i.isRenewableEndDateSortEnabled),
        d =
            ((t = (function (e) {
                switch (e) {
                    case er.kL.MOST_RECENT:
                        return ed;
                    case er.kL.RECENTLY_ENROLLED:
                        return ec;
                    case er.kL.EXPIRING_SOON:
                        return eC;
                    case er.kL.SUGGESTED:
                    default:
                        return el;
                }
            })(r)),
            function (e, n) {
                let r = !(0, U.Ic)(e);
                return !(0, U.Ic)(n) !== r ? (r ? eu : 1) : t(e, n, i, a);
            });
    return o.sort(d);
}
function em(e, t, n) {
    return e.localeCompare(t) * (0 === n ? eu : 1);
}
var eT = 221552 == n.j ? (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i) : null,
    eh =
        221552 == n.j
            ? (((r = {}).TAB = "tab"),
              (r.QUEST_ID = "quest_id"),
              (r.SORT = "sort"),
              (r.FILTER = "filter"),
              (r.AD_CREATIVE_IDS = "ad_creative_ids"),
              r)
            : null;
function e_(e) {
    let t,
        n,
        i,
        r,
        s,
        u,
        a,
        l,
        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE,
        {
            quests: c,
            excludedQuests: C,
            isFetchingCurrentQuests: f,
            hasFetched: A,
        } = ea({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        E = new Map(c.map((e) => [e.id, e])),
        p =
            ((t = (function () {
                let e = (0, I.bG)([h.A], () => h.A.getQuestHomeHero()),
                    { isShelfEnabled: t } = e9(e),
                    n = (0, I.bG)([P.default], () => P.default.getCurrentUser()?.id ?? null),
                    { enabled: i } = $.useConfig({ location: er.rE.QUEST_HOME_MOBILE }),
                    { enabled: r } = V.NN.useConfig({ location: er.rE.QUEST_HOME_MOBILE });
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
            (i = o.useRef(d.sortMethod)),
            (r = o.useRef(d.filters)),
            (s = o.useRef(0)),
            (u = o.useRef(t)),
            o.useMemo(() => {
                if (0 === c.length) return [];
                if (
                    n.current.length > 0 &&
                    s.current === c.length &&
                    i.current === d.sortMethod &&
                    r.current === d.filters &&
                    u.current === t
                )
                    return n.current;
                let e = eI(c, d, t).map((e) => e.id);
                return (
                    (n.current = e),
                    (i.current = d.sortMethod),
                    (r.current = d.filters),
                    (s.current = c.length),
                    (u.current = t),
                    e
                );
            }, [c, d, t])),
        m =
            ((a = o.useMemo(
                () =>
                    c.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [c],
            )),
            (l = o.useRef([])),
            o.useMemo(() => {
                if (0 === a.length) return [];
                if (l.current.length > 0 && l.current.length === a.length) return l.current;
                let e = a
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? eu
                                : 1
                            : em(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return ((l.current = e), e);
            }, [a])),
        T = [];
    for (let t of "all" === e ? p : m) {
        let n = E.get(t),
            i = null != n && "all" === e && d.removeExpiredQuests && (0, U.Ic)(n) && !(0, U.GR)(n.userStatus);
        null == n || i || T.push(n);
    }
    return { quests: T, excludedQuests: C, isFetchingCurrentQuests: f, hasFetched: A };
}
function eg() {
    let e = o.useRef(!1),
        t = (0, I.yK)([q.A], () => Array.from(q.A.claimedQuests.values())),
        n = (0, I.bG)([q.A], () => q.A.isFetchingClaimedQuests);
    return (
        o.useEffect(() => {
            n || e.current || ((e.current = !0), (0, x.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eS(e, t) {
    let n = ev(e),
        i = (0, ee.ks)(e.config),
        r = (0, ee.KK)(e.config),
        s = t !== z.MA.INELIGIBLE;
    return !n && i && r && s;
}
function eO(e) {
    return (0, I.bG)(
        [q.A],
        () => {
            let t = q.A.getQuest(e);
            return null == t ? null : (0, ee.b)(t.config);
        },
        [e],
    );
}
function ev(e) {
    return (0, I.bG)([q.A], () => null != e && q.A.isQuestExpired(e.id), [e]);
}
function eN() {
    return (0, I.bG)([q.A], () => q.A.isQuestAccessSuspended, []);
}
function ey(e, t, n) {
    let i = (0, I.bG)([N.A], () => N.A.getChannel(t?.channelId) ?? null),
        r = (0, I.bG)([q.A], () => null != q.A.questEnrollmentBlockedUntil, []),
        s = (0, I.bG)([P.default], () => P.default.getCurrentUser()?.id),
        o = (0, I.bG)([q.A], () => null != e && q.A.isQuestExpired(e.id), [e]);
    if (null == e || r || o || s === n) return !1;
    let u = e.userStatus?.claimedAt != null,
        a = (0, en.Ll)(t, i);
    return !u || !!a;
}
function eP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, I.bG)([O.default], () => O.default.locale);
    return o.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function ew(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
        s = (0, Y.wW)();
    return o.useCallback(() => {
        t.id === er.Fw
            ? window.open(L.A.getArticleURL(G.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, Z.pu)(t, { content: n, ctaContent: i, impressionId: s(), sourceQuestContent: r });
    }, [t, n, i, s, r]);
}
function eb(e) {
    return (0, I.bG)([q.A], () => q.A.isProgressingOnDesktop(e.id));
}
function eR(e) {
    return o.useMemo(() => (0, et.YL)(e), [e]);
}
function eL(e) {
    let t,
        n = eb(e),
        i = eR(e),
        r =
            ((t = (0, I.bG)([q.A], () => q.A.getOptimisticProgress(e.id, C.n.WATCH_VIDEO))),
            o.useMemo(() => (0, ei.J$)(e), [e, t]));
    return n || i || r;
}
let eQ = (e) => {
    let t = o.useCallback(() => (0, et.Yh)(e), [e]),
        [n, i] = o.useState(t()),
        r = o.useCallback(() => i(t()), [t]),
        s = eL(e);
    return (
        o.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !s
            )
                return void r();
            let t = window.setInterval(() => {
                r();
            }, +b.A.Millis.SECOND);
            return () => {
                (clearInterval(t), r());
            };
        }, [e, s, r]),
        n
    );
};
function ek(e) {
    return o.useMemo(() => (0, et.JC)(e), [e]);
}
function eM(e) {
    let t = o.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, et.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, g.A)(t);
}
function eq(e) {
    let t = (0, I.bG)([q.A], () => q.A.quests),
        n = eM(Array.from(t.values())),
        i = o.useMemo(() => {
            let n = (0, en.$e)(t, er.zO);
            return (0, J.BM)(n, e);
        }, [e, t, n]);
    return ev(i) ? null : i;
}
function eD(e) {
    return o.useMemo(
        () => ({
            handleComplete: () => (0, x.Yb)(e),
            handleProgress: (t) => (0, x.Yb)(e, t),
            handleResetStatusClick: () => (0, x.UZ)(e),
            handleResetDismissibilityClick: () => (0, x.Gt)(e),
            handleOverridePreviewClick: (t) => (0, x.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, x.qV)(c.p.QUEST, [e]),
        }),
        [e],
    );
}
function eU() {
    let { fetching: e, accounts: t } = (0, I.cf)([y.A], () => ({
            fetching: y.A.isFetching(),
            accounts: y.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: i,
            xboxAndPlaystationAccounts: r,
        } = o.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === G.fg2.XBOX),
                i = e.filter((e) => e.type === G.fg2.PLAYSTATION),
                r = n.concat(i);
            return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
}
function eG(e) {
    let { questId: t, preview: n, beforeRequest: i, afterRequest: r } = e,
        [s, u] = o.useState(!1),
        a = (0, I.bG)([y.A], () => y.A.getAccounts()),
        l = (0, B.O)((e) => e.clearErrorHintsByType),
        d = o.useCallback((e) => B.O.getState().setErrorHints(t, e), [t]);
    return (
        o.useEffect(() => {
            l(t, f._.EXPIRED_CREDENTIAL);
        }, [a, l, t]),
        {
            startConsoleQuest: o.useCallback(async () => {
                if (s) return;
                (i?.(), u(!0));
                let e = null;
                try {
                    ((e = await (0, x.vD)(t, n)), d(e.errorHints));
                } finally {
                    (u(!1), r?.());
                }
            }, [s, i, r, n, t, d]),
            startingConsoleQuest: s,
        }
    );
}
function eB(e) {
    let { quest: t } = e,
        { xboxAndPlaystationAccounts: n } = eU(),
        i = eL(t),
        r = 0 === n.length;
    return (0, et.g5)(t) && r && !i;
}
function ex() {
    let { xboxAccounts: e, playstationAccounts: t } = eU(),
        n = e.length > 0,
        i = t.length > 0,
        r = L.A.getArticleURL(G.MVz.QUEST_HOW_TO_PLAYSTATION),
        s = L.A.getArticleURL(G.MVz.QUEST_HOW_TO_XBOX),
        o = eo.intl.format(eo.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: s }),
        u = eo.intl.format(eo.t.HVS7nh, { helpdeskArticle: i ? r : s });
    return { message: (n && !i) || (!n && i) ? u : o, xboxURL: s, playstationURL: r };
}
var eV =
    (((s = {})[(s.UNACCEPTED = 0)] = "UNACCEPTED"),
    (s[(s.ACCEPTED = 1)] = "ACCEPTED"),
    (s[(s.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (s[(s.COMPLETED = 3)] = "COMPLETED"),
    (s[(s.CLAIMED = 4)] = "CLAIMED"),
    s);
function eH(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = eQ(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
}
function eK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, I.bG)([O.default], () => O.default.locale),
        { percentComplete: i } = eQ(e),
        r = ek(e),
        s = null != r ? r.percentComplete : i,
        o = 100 * s,
        u = null == r || t ? (0, E.l9)(n, s, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: s, percentComplete: o, completedRatioDisplay: u };
}
function e$(e) {
    return [(0, I.bG)([q.A], () => q.A.selectedTaskPlatform(e)), o.useCallback((t) => (0, x.lx)(e, t), [e])];
}
function eF(e, t) {
    let [n, i] = e$(e.id),
        r = o.useMemo(() => (0, Z.UR)(e), [e]),
        s = r.includes(er.fO.DESKTOP),
        u = r.includes(er.fO.CONSOLE),
        a = eb(e),
        l = eR(e),
        c = o.useMemo(
            () =>
                (0, d.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: C.n.PLAY_ON_DESKTOP }, () => er.fO.DESKTOP)
                    .with({ taskType: C.n.PLAY_ACTIVITY }, () => er.fO.DESKTOP)
                    .with({ taskType: C.n.WATCH_VIDEO }, () => er.fO.DESKTOP)
                    .with({ taskType: C.n.WATCH_VIDEO_ON_MOBILE }, () => er.fO.DESKTOP)
                    .with({ taskType: C.n.STREAM_ON_DESKTOP }, () => er.fO.DESKTOP)
                    .with({ taskType: C.n.PLAY_ON_XBOX }, () => er.fO.CONSOLE)
                    .with({ taskType: C.n.PLAY_ON_PLAYSTATION }, () => er.fO.CONSOLE)
                    .with({ taskType: C.n.ACHIEVEMENT_IN_GAME }, () => er.fO.DESKTOP)
                    .with({ taskType: C.n.ACHIEVEMENT_IN_ACTIVITY }, () => er.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        f = a ? er.fO.DESKTOP : l ? er.fO.CONSOLE : null;
    return [
        o.useMemo(
            () =>
                (0, d.YW)({ lastPlatformProgress: c, currentProgressingPlatform: f, selectedPlatform: n })
                    .with({ currentProgressingPlatform: er.fO.CONSOLE }, () => D.X0.CONSOLE)
                    .with({ currentProgressingPlatform: er.fO.DESKTOP }, () => D.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: er.fO.CONSOLE }, () => D.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: er.fO.DESKTOP }, () => D.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: er.fO.CONSOLE,
                        },
                        () => D.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: er.fO.DESKTOP,
                        },
                        () => D.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (u && s ? D.X0.SELECT : u ? D.X0.CONSOLE : D.X0.DESKTOP),
                    )
                    .exhaustive(),
            [u, s, c, f, n],
        ),
        r,
        i,
    ];
}
function eW(e) {
    let t = ek(e),
        n = eQ(e),
        [i] = eF(e, n),
        r = ev(e),
        s = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        u = C.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        a = 0 === n.percentComplete,
        l = s && !o && !r && null == t && (u || (a && i === D.X0.DESKTOP)),
        d = (0, Q.isWeb)() && l && !(0, Z.W1)(e),
        c = (0, Q.isMac)() && n.taskType === C.n.STREAM_ON_DESKTOP && l,
        f = [];
    return (c && f.push(eo.intl.string(eo.t.MFGxFM)), d && f.push(eo.intl.string(eo.t.BV6xDm)), f);
}
function eX(e) {
    return (0, I.bG)([q.A], () => q.A.quests).get(e) ?? null;
}
function eY(e) {
    let t,
        n,
        i,
        { mode: r, questContent: s, sourceQuestContent: u } = e;
    "questId" in e ? (t = e.questId) : ((n = e.adContentId), (i = e.adCreativeType));
    let a = o.useCallback(
            (e, r) => {
                null != t
                    ? (0, X.Zu)({ mode: e, prevMode: r, questContent: s, questId: t, sourceQuestContent: u })
                    : null != n &&
                      null != i &&
                      (0, X.Wc)({
                          adContentId: n,
                          adCreativeType: i,
                          mode: e,
                          prevMode: r,
                          questContent: s,
                          sourceQuestContent: u,
                      });
            },
            [s, u, t, n, i],
        ),
        l = t ?? n,
        d = o.useRef(null);
    (o.useEffect(() => {
        null != l && d.current !== r && (a(r, d.current), (d.current = r));
    }, [r, l, a]),
        o.useEffect(() => {
            if (null != l)
                return () => {
                    a(null, d.current);
                };
        }, [l, a]));
}
function ej(e, t) {
    let n = (0, I.bG)([q.A], () => q.A.getQuest(e), [e]),
        i = (0, m.Ay)();
    return o.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, p.M)(i) ? G.NJ8.DARK : G.NJ8.LIGHT);
        return (0, F.tW)(n, F.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
}
function eJ(e) {
    let t = (0, I.bG)([P.default], () => P.default.getCurrentUser()),
        n = (0, ee.mq)(e, t),
        i = (0, ee.k5)(e),
        r = (0, ee.$5)(e),
        s = (0, ee.Y7)(e),
        o = (0, ee.JX)(e),
        u = (0, k.TW)(t, es.PremiumTypes.TIER_2);
    if (null == i) return eo.intl.formatToPlainString(eo.t.l9uXL8, { decorationName: n });
    let a = eo.intl.formatToPlainString(eo.t.o97tNn, { rewardName: n }),
        l = eo.intl.formatToPlainString(eo.t.PkyRZo, { rewardName: n, expirationDate: r }),
        d = eo.intl.formatToPlainString(eo.t.ie4YK0, { rewardName: n, duration: i }),
        c = eo.intl.formatToPlainString(eo.t.yCpc0U, { duration: i, rewardName: n });
    return o
        ? s
            ? u
                ? a
                : d
            : u
              ? l
              : c
        : eo.intl.formatToPlainString(eo.t.tTlItm, { duration: i, decorationName: n });
}
function ez(e) {
    let t = (0, et.TP)(e);
    return { launchInGameActivity: (0, T.A)({ applicationId: t }) };
}
function eZ() {
    return (0, I.yK)([q.A], () => [...q.A.quests.values()]).some((e) => e.preview);
}
function e0() {
    return eZ();
}
function e1(e) {
    let t = e?.userStatus != null && (0, U.gO)(e.userStatus, D.uF.ACTIVITY_PANEL),
        n = ev(e ?? null),
        i = e?.userStatus?.claimedAt != null,
        r = (0, I.bG)([q.A], () => null != q.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !i && !r;
}
function e2() {
    let e = (0, I.yK)([q.A], () => [...q.A.quests.values()]);
    return o.useMemo(() => e.filter((e) => e.preview), [e]);
}
function e5() {
    let e = er.pc;
    return o.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, j.fx)(t), options: n };
            }),
        [e],
    );
}
function e8() {
    return o.useMemo(() => Object.keys(er.kL).map((e) => ({ label: (0, j.Js)(er.kL[e]), value: er.kL[e] })), []);
}
function e6(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
        r = o.useRef(null),
        s = o.useRef(null);
    (o.useEffect(() => {
        (w.default.track(G.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: r.current }),
            (r.current = t));
    }, [t]),
        o.useEffect(() => {
            let e = n.map((e) => e.filter);
            (w.default.track(G.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: s.current ?? [],
                num_quests_visible: i,
            }),
                (s.current = e));
        }, [n, i]));
}
function e7(e) {
    return o.useMemo(() => P.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
}
function e4(e, t) {
    let n = e.userStatus?.completedAt != null;
    return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
}
function e9(e) {
    let t = (0, I.bG)([q.A], () => q.A.quests),
        n = e?.questIds;
    return o.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
        let e = n
            .map((e) => t.get(e))
            .filter(R.Vq)
            .filter((e) => !(0, U.Ic)(e));
        return e.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
}
function e3(e) {
    let t = v.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return o.useCallback(() => {
        if (n) return;
        let i = t ? A.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : A.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, S.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
}
(b.A.Millis.HOUR, b.A.Millis.MINUTE);
