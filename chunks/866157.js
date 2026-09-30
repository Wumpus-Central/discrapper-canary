(n.d(t, {
    O9: () => eF,
    Vn: () => ey,
    Wj: () => eG,
    mL: () => es,
    Cv: () => eZ,
    Yl: () => eP,
    Nb: () => e5,
    tZ: () => eW,
    pT: () => e2,
    UH: () => e3,
    $P: () => e6,
    YW: () => eU,
    zW: () => ez,
    NC: () => eT,
    Hv: () => ev,
    j$: () => eQ,
    fc: () => eM,
    SD: () => eg,
    aC: () => eY,
    FA: () => eJ,
    LS: () => eN,
    p5: () => e0,
    Ns: () => e7,
    Iq: () => eO,
    Qh: () => eS,
    t9: () => e9,
    RR: () => eK,
    XD: () => e8,
    ZP: () => eh,
    UX: () => eH,
    mn: () => eC,
    C5: () => eV,
    sb: () => e1,
    I3: () => ek,
    Qo: () => eX,
    In: () => eB,
    H6: () => ej,
    a5: () => e$,
    F3: () => ex,
    L1: () => em,
    do: () => eL,
    oH: () => eD,
    S5: () => eb,
    Du: () => eq,
}),
    n(321073),
    n(801541));
var r,
    u,
    l,
    i = n(582128),
    o = n(435558),
    s = n(181370),
    a = n.n(s),
    c = n(889137),
    d = n(323889),
    f = n(412703),
    A = n(114046);
n(731355);
var E = n(517846),
    _ = n(118751),
    p = n(462887),
    C = n(17928),
    I = n(736653),
    T = n(787389),
    m = n(157695),
    S = n(183636),
    O = n(429913);
n(674658);
var g = n(27620),
    h = n(773669),
    N = n(885386),
    v = n(734057),
    P = n(30370),
    b = n(287809),
    L = n(174459),
    R = n(927813),
    w = n(403362),
    y = n(975571),
    M = n(723702),
    k = n(158045);
(n(323874), n(14289), n(35956), n(636537), n(228366), n(181658), n(314329), n(107195), n(881615), n(390595));
var D = n(626584);
(n(544180), n(265704));
var U = n(859703),
    Q = n(738822),
    q = n(710969),
    G = n(652215);
new D.A("BountyActionCreators");
var K = n(178540),
    H = n(396813),
    x = n(192444),
    B = n(945810);
(0, B.mj)({
    name: "2026-09-quest-home-bounties-feature-gate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let F = (0, B.mj)({
        name: "2026-07-renewable-end-date-sort",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    W = 221552 == n.j ? F : null;
var X = n(291749),
    Y = n(971276),
    V = n(561844);
n(590202);
var j = n(971649),
    $ = n(651892),
    J = n(639214),
    z = n(576761),
    Z = n(901406),
    ee = n(801365),
    et = n(792620),
    en = n(814793),
    er = n(753386),
    eu = n(190107),
    el = n(202541),
    ei = n(375708);
let eo = 221552 == n.j ? -1 : null;
function es() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = i.useState(!1),
        r = (0, C.yK)([U.A], () => [...U.A.quests.values()]),
        u = (0, C.yK)([U.A], () => [...U.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: l, lastFetchedCurrentQuests: o } = (0, C.cf)([U.A], () => ({
            isFetchingCurrentQuests: U.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: U.A.lastFetchedCurrentQuests,
        })),
        s = (0, Y.s)();
    return (
        i.useEffect(() => {
            let r;
            switch (e.fetchPolicy) {
                case "cache-only":
                    return;
                case "cache-or-network":
                    r = 0 === o;
                    break;
                case "cache-and-network":
                    r = !0;
                    break;
                default:
                    e.fetchPolicy;
                    return;
            }
            if (r && s && !t && !l && (n(!0), (0, H.N1)(), (0, M.isMac)() && "focused" !== S.A.getState())) return;
        }, [e.fetchPolicy, s, t, l, o, e.callerSource]),
        { quests: r, excludedQuests: u, isFetchingCurrentQuests: l, hasFetched: t }
    );
}
function ea(e, t, n, r) {
    let u = e.id === eu.aJ,
        l = t.id === eu.aJ,
        i = u && e.userStatus?.completedAt == null;
    if (i !== (l && t.userStatus?.completedAt == null)) return i ? eo : 1;
    let o = !(0, q.Ic)(e),
        s = e.userStatus?.claimedAt != null,
        a = t.userStatus?.claimedAt != null,
        c = e.userStatus?.enrolledAt != null,
        d = t.userStatus?.enrolledAt != null,
        f = 20 * R.A.Millis.MINUTE,
        A = e4(e, f),
        E = e4(t, f);
    if (o) {
        var _, p, C;
        let u,
            l,
            { questHomeHero: i, isQuestHomeHeroShelfEnabled: o } = n;
        if (null != i && !o) {
            let n = (0, en.I0)(i, e.id),
                r = (0, en.I0)(i, t.id);
            if (n || r) return n ? eo : 1;
        }
        return A !== E && (A || E)
            ? A
                ? 1
                : eo
            : s !== a
              ? s
                  ? 1
                  : eo
              : c !== d
                ? c
                    ? eo
                    : 1
                : ((_ = e),
                  (p = t),
                  (u = (C = r).get(_.id)),
                  (l = C.get(p.id)),
                  null != u && null != l
                      ? u !== l
                          ? u - l
                          : _.id !== p.id
                            ? _.id < p.id
                                ? eo
                                : 1
                            : 0
                      : null != u
                        ? eo
                        : null != l
                          ? 1
                          : eI(_.config.expiresAt, p.config.expiresAt, 1));
    }
    return s !== a ? (s ? eo : 1) : c !== d ? (c ? eo : 1) : eI(e.config.expiresAt, t.config.expiresAt, 0);
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
          ? eo
          : null == r && null != u
            ? 1
            : eI(r, u, 0);
}
function ef(e, t, n) {
    return eI(e.config.expiresAt, t.config.expiresAt, 1);
}
function eA(e, t) {
    switch (t) {
        case eu.Pc.VIDEO:
            return (0, et.vv)(e);
        case eu.Pc.PLAY:
            return (
                (0, et.t)({ quest: e }) || (0, et.fE)({ quest: e }) || (0, et.vl)(e) || (0, et.g5)(e) || (0, et.Cr)(e)
            );
        default:
            return !1;
    }
}
function eE(e, t) {
    switch (t) {
        case eu.BQ.VIRTUAL_CURRENCY:
            return (0, ee.ks)(e.config);
        case eu.BQ.COLLECTIBLE:
            return (0, ee.tU)(e.config);
        case eu.BQ.IN_GAME:
            return (0, ee.HG)(e.config) || (0, ee.r7)(e.config);
        default:
            return !1;
    }
}
let e_ = 221552 == n.j ? {} : null,
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
function eC(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ep,
        { sortMethod: u, filters: l } = n,
        i =
            null == l || 0 === l.length
                ? e
                : (function (e, t) {
                      if (0 === t.length) return e;
                      let n = (0, o.groupBy)(t, "group");
                      return e.filter((e) =>
                          Object.entries(n).every((t) => {
                              let n,
                                  [r, u] = t;
                              return (
                                  (n = (function (e) {
                                      switch (e) {
                                          case "task":
                                              return eA;
                                          case "reward":
                                              return eE;
                                      }
                                  })(r)),
                                  0 === u.length || u.some((t) => n(e, t.filter))
                              );
                          }),
                      );
                  })(e, l),
        s = (function (e, t, n) {
            let r = new Map();
            if (!n || null == t) return r;
            for (let n of e) {
                var u;
                (0, en.iM)(n, eu.Li.RENEWABLE_END_DATE) && r.set(n.id, ((u = n.id), a().v3(`${t}:${u}`) >>> 0));
            }
            return r;
        })(i, r.currentUserId, r.isRenewableEndDateSortEnabled),
        c =
            ((t = (function (e) {
                switch (e) {
                    case eu.kL.MOST_RECENT:
                        return ec;
                    case eu.kL.RECENTLY_ENROLLED:
                        return ed;
                    case eu.kL.EXPIRING_SOON:
                        return ef;
                    case eu.kL.SUGGESTED:
                    default:
                        return ea;
                }
            })(u)),
            function (e, n) {
                let u = !(0, q.Ic)(e);
                return !(0, q.Ic)(n) !== u ? (u ? eo : 1) : t(e, n, r, s);
            });
    return i.sort(c);
}
function eI(e, t, n) {
    return e.localeCompare(t) * (0 === n ? eo : 1);
}
var eT = 221552 == n.j ? (((r = {}).ALL = "all"), (r.CLAIMED = "claimed"), (r.PREVIEW_TOOL = "preview_tool"), r) : null,
    em =
        221552 == n.j
            ? (((u = {}).TAB = "tab"),
              (u.QUEST_ID = "quest_id"),
              (u.SORT = "sort"),
              (u.FILTER = "filter"),
              (u.AD_CREATIVE_IDS = "ad_creative_ids"),
              u)
            : null;
function eS(e) {
    let t,
        n,
        r,
        u,
        l,
        o,
        s,
        a,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_,
        {
            quests: d,
            excludedQuests: f,
            isFetchingCurrentQuests: A,
            hasFetched: E,
        } = es({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        _ = new Map(d.map((e) => [e.id, e])),
        p =
            ((t = (function () {
                let e = (0, C.bG)([m.A], () => m.A.getQuestHomeHero()),
                    { isShelfEnabled: t } = e9(e),
                    n = (0, C.bG)([b.default], () => b.default.getCurrentUser()?.id ?? null),
                    { enabled: r } = W.useConfig({ location: eu.rE.QUEST_HOME_MOBILE }),
                    { enabled: u } = x.NN.useConfig({ location: eu.rE.QUEST_HOME_MOBILE });
                return i.useMemo(
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
            (n = i.useRef([])),
            (r = i.useRef(c.sortMethod)),
            (u = i.useRef(c.filters)),
            (l = i.useRef(0)),
            (o = i.useRef(t)),
            i.useMemo(() => {
                if (0 === d.length) return [];
                if (
                    n.current.length > 0 &&
                    l.current === d.length &&
                    r.current === c.sortMethod &&
                    u.current === c.filters &&
                    o.current === t
                )
                    return n.current;
                let e = eC(d, c, t).map((e) => e.id);
                return (
                    (n.current = e),
                    (r.current = c.sortMethod),
                    (u.current = c.filters),
                    (l.current = d.length),
                    (o.current = t),
                    e
                );
            }, [d, c, t])),
        I =
            ((s = i.useMemo(
                () =>
                    d.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [d],
            )),
            (a = i.useRef([])),
            i.useMemo(() => {
                if (0 === s.length) return [];
                if (a.current.length > 0 && a.current.length === s.length) return a.current;
                let e = s
                    .sort((e, t) => {
                        let n = e.userStatus?.claimedAt == null;
                        return n !== (t.userStatus?.claimedAt == null)
                            ? n
                                ? eo
                                : 1
                            : eI(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return ((a.current = e), e);
            }, [s])),
        T = [];
    for (let t of "all" === e ? p : I) {
        let n = _.get(t),
            r = null != n && "all" === e && c.removeExpiredQuests && (0, q.Ic)(n) && !(0, q.GR)(n.userStatus);
        null == n || r || T.push(n);
    }
    return { quests: T, excludedQuests: f, isFetchingCurrentQuests: A, hasFetched: E };
}
function eO() {
    let e = i.useRef(!1),
        t = (0, C.yK)([U.A], () => Array.from(U.A.claimedQuests.values())),
        n = (0, C.bG)([U.A], () => U.A.isFetchingClaimedQuests);
    return (
        i.useEffect(() => {
            n || e.current || ((e.current = !0), (0, H.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eg(e, t) {
    let n = eN(e),
        r = (0, ee.ks)(e.config),
        u = (0, ee.KK)(e.config),
        l = t !== z.MA.INELIGIBLE;
    return !n && r && u && l;
}
function eh(e) {
    return (0, C.bG)(
        [U.A],
        () => {
            let t = U.A.getQuest(e);
            return null == t ? null : (0, ee.b)(t.config);
        },
        [e],
    );
}
function eN(e) {
    return (0, C.bG)([U.A], () => null != e && U.A.isQuestExpired(e.id), [e]);
}
function ev() {
    return (0, C.bG)([U.A], () => U.A.isQuestAccessSuspended, []);
}
function eP(e, t, n) {
    let r = (0, C.bG)([v.A], () => v.A.getChannel(t?.channelId) ?? null),
        u = (0, C.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []),
        l = (0, C.bG)([b.default], () => b.default.getCurrentUser()?.id),
        i = (0, C.bG)([U.A], () => null != e && U.A.isQuestExpired(e.id), [e]);
    if (null == e || u || i || l === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        s = (0, en.Ll)(t, r);
    return !o || !!s;
}
function eb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, C.bG)([h.default], () => h.default.locale);
    return i.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eL(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: u } = e,
        l = (0, j.wW)();
    return i.useCallback(() => {
        t.id === eu.Fw
            ? window.open(y.A.getArticleURL(G.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, Z.pu)(t, { content: n, ctaContent: r, impressionId: l(), sourceQuestContent: u });
    }, [t, n, r, l, u]);
}
function eR(e) {
    return (0, C.bG)([U.A], () => U.A.isProgressingOnDesktop(e.id));
}
function ew(e) {
    return i.useMemo(() => (0, et.YL)(e), [e]);
}
function ey(e) {
    let t,
        n = eR(e),
        r = ew(e),
        u =
            ((t = (0, C.bG)([U.A], () => U.A.getOptimisticProgress(e.id, f.n.WATCH_VIDEO))),
            i.useMemo(() => (0, er.J$)(e), [e, t]));
    return n || r || u;
}
let eM = (e) => {
    let t = i.useCallback(() => (0, et.Yh)(e), [e]),
        [n, r] = i.useState(t()),
        u = i.useCallback(() => r(t()), [t]),
        l = ey(e);
    return (
        i.useEffect(() => {
            if (
                e.userStatus?.enrolledAt == null ||
                e.userStatus?.completedAt != null ||
                e.userStatus?.claimedAt != null ||
                !l
            )
                return void u();
            let t = window.setInterval(() => {
                u();
            }, +R.A.Millis.SECOND);
            return () => {
                (clearInterval(t), u());
            };
        }, [e, l, u]),
        n
    );
};
function ek(e) {
    return i.useMemo(() => (0, et.JC)(e), [e]);
}
function eD(e) {
    let t = i.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, et.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, O.A)(t);
}
function eU(e) {
    let t = (0, C.bG)([U.A], () => U.A.quests),
        n = eD(Array.from(t.values())),
        r = i.useMemo(() => {
            let n = (0, en.$e)(t, eu.zO);
            return (0, J.BM)(n, e);
        }, [e, t, n]);
    return eN(r) ? null : r;
}
function eQ(e) {
    return i.useMemo(
        () => ({
            handleComplete: () => (0, H.Yb)(e),
            handleProgress: (t) => (0, H.Yb)(e, t),
            handleResetStatusClick: () => (0, H.UZ)(e),
            handleResetDismissibilityClick: () => (0, H.Gt)(e),
            handleOverridePreviewClick: (t) => (0, H.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, H.qV)(d.p.QUEST, [e]),
        }),
        [e],
    );
}
function eq() {
    let { fetching: e, accounts: t } = (0, C.cf)([P.A], () => ({
            fetching: P.A.isFetching(),
            accounts: P.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: u,
        } = i.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === G.fg2.XBOX),
                r = e.filter((e) => e.type === G.fg2.PLAYSTATION),
                u = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
}
function eG(e) {
    let { questId: t, preview: n, beforeRequest: r, afterRequest: u } = e,
        [l, o] = i.useState(!1),
        s = (0, C.bG)([P.A], () => P.A.getAccounts()),
        a = (0, K.O)((e) => e.clearErrorHintsByType),
        c = i.useCallback((e) => K.O.getState().setErrorHints(t, e), [t]);
    return (
        i.useEffect(() => {
            a(t, A._.EXPIRED_CREDENTIAL);
        }, [s, a, t]),
        {
            startConsoleQuest: i.useCallback(async () => {
                if (l) return;
                (r?.(), o(!0));
                let e = null;
                try {
                    ((e = await (0, H.vD)(t, n)), c(e.errorHints));
                } finally {
                    (o(!1), u?.());
                }
            }, [l, r, u, n, t, c]),
            startingConsoleQuest: l,
        }
    );
}
function eK(e) {
    let { quest: t } = e,
        { xboxAndPlaystationAccounts: n } = eq(),
        r = ey(t),
        u = 0 === n.length;
    return (0, et.g5)(t) && u && !r;
}
function eH() {
    let { xboxAccounts: e, playstationAccounts: t } = eq(),
        n = e.length > 0,
        r = t.length > 0,
        u = y.A.getArticleURL(G.MVz.QUEST_HOW_TO_PLAYSTATION),
        l = y.A.getArticleURL(G.MVz.QUEST_HOW_TO_XBOX),
        i = ei.intl.format(ei.t.beN4DG, { psHelpdeskArticle: u, xboxHelpdeskArticle: l }),
        o = ei.intl.format(ei.t.HVS7nh, { helpdeskArticle: r ? u : l });
    return { message: (n && !r) || (!n && r) ? o : i, xboxURL: l, playstationURL: u };
}
var ex =
    (((l = {})[(l.UNACCEPTED = 0)] = "UNACCEPTED"),
    (l[(l.ACCEPTED = 1)] = "ACCEPTED"),
    (l[(l.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (l[(l.COMPLETED = 3)] = "COMPLETED"),
    (l[(l.CLAIMED = 4)] = "CLAIMED"),
    l);
function eB(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        u = eM(e).percentComplete > 0;
    return r ? 4 : n ? 3 : u && t ? 2 : 1 * !!t;
}
function eF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, C.bG)([h.default], () => h.default.locale),
        { percentComplete: r } = eM(e),
        u = ek(e),
        l = null != u ? u.percentComplete : r,
        i = 100 * l,
        o = null == u || t ? (0, _.l9)(n, l, { roundingMode: "floor" }) : `${u?.progress}/${u?.target}`;
    return { completedRatio: l, percentComplete: i, completedRatioDisplay: o };
}
function eW(e) {
    return [(0, C.bG)([U.A], () => U.A.selectedTaskPlatform(e)), i.useCallback((t) => (0, H.lx)(e, t), [e])];
}
function eX(e, t) {
    let [n, r] = eW(e.id),
        u = i.useMemo(() => (0, Z.UR)(e), [e]),
        l = u.includes(eu.fO.DESKTOP),
        o = u.includes(eu.fO.CONSOLE),
        s = eR(e),
        a = ew(e),
        d = i.useMemo(
            () =>
                (0, c.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.n.PLAY_ON_DESKTOP }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ACTIVITY }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO_ON_MOBILE }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.STREAM_ON_DESKTOP }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ON_XBOX }, () => eu.fO.CONSOLE)
                    .with({ taskType: f.n.PLAY_ON_PLAYSTATION }, () => eu.fO.CONSOLE)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_GAME }, () => eu.fO.DESKTOP)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_ACTIVITY }, () => eu.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        A = s ? eu.fO.DESKTOP : a ? eu.fO.CONSOLE : null;
    return [
        i.useMemo(
            () =>
                (0, c.YW)({ lastPlatformProgress: d, currentProgressingPlatform: A, selectedPlatform: n })
                    .with({ currentProgressingPlatform: eu.fO.CONSOLE }, () => Q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: eu.fO.DESKTOP }, () => Q.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: eu.fO.CONSOLE }, () => Q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: eu.fO.DESKTOP }, () => Q.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: eu.fO.CONSOLE,
                        },
                        () => Q.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: eu.fO.DESKTOP,
                        },
                        () => Q.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (o && l ? Q.X0.SELECT : o ? Q.X0.CONSOLE : Q.X0.DESKTOP),
                    )
                    .exhaustive(),
            [o, l, d, A, n],
        ),
        u,
        r,
    ];
}
function eY(e) {
    let t = ek(e),
        n = eM(e),
        [r] = eX(e, n),
        u = eN(e),
        l = e.userStatus?.enrolledAt != null,
        i = e.userStatus?.completedAt != null,
        o = f.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        s = 0 === n.percentComplete,
        a = l && !i && !u && null == t && (o || (s && r === Q.X0.DESKTOP)),
        c = (0, M.isWeb)() && a && !(0, Z.W1)(e),
        d = (0, M.isMac)() && n.taskType === f.n.STREAM_ON_DESKTOP && a,
        A = [];
    return (d && A.push(ei.intl.string(ei.t.MFGxFM)), c && A.push(ei.intl.string(ei.t.BV6xDm)), A);
}
function eV(e) {
    return (0, C.bG)([U.A], () => U.A.quests).get(e) ?? null;
}
function ej(e) {
    let t,
        n,
        r,
        { mode: u, questContent: l, sourceQuestContent: o } = e;
    "questId" in e ? (t = e.questId) : ((n = e.adContentId), (r = e.adCreativeType));
    let s = i.useCallback(
            (e, u) => {
                null != t
                    ? (0, V.Zu)({ mode: e, prevMode: u, questContent: l, questId: t, sourceQuestContent: o })
                    : null != n &&
                      null != r &&
                      (0, V.Wc)({
                          adContentId: n,
                          adCreativeType: r,
                          mode: e,
                          prevMode: u,
                          questContent: l,
                          sourceQuestContent: o,
                      });
            },
            [l, o, t, n, r],
        ),
        a = t ?? n,
        c = i.useRef(null);
    (i.useEffect(() => {
        null != a && c.current !== u && (s(u, c.current), (c.current = u));
    }, [u, a, s]),
        i.useEffect(() => {
            if (null != a)
                return () => {
                    s(null, c.current);
                };
        }, [a, s]));
}
function e$(e, t) {
    let n = (0, C.bG)([U.A], () => U.A.getQuest(e), [e]),
        r = (0, I.Ay)();
    return i.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, p.M)(r) ? G.NJ8.DARK : G.NJ8.LIGHT);
        return (0, X.tW)(n, X.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function eJ(e) {
    let t = (0, C.bG)([b.default], () => b.default.getCurrentUser()),
        n = (0, ee.mq)(e, t),
        r = (0, ee.k5)(e),
        u = (0, ee.$5)(e),
        l = (0, ee.Y7)(e),
        i = (0, ee.JX)(e),
        o = (0, k.TW)(t, el.PremiumTypes.TIER_2);
    if (null == r) return ei.intl.formatToPlainString(ei.t.l9uXL8, { decorationName: n });
    let s = ei.intl.formatToPlainString(ei.t.o97tNn, { rewardName: n }),
        a = ei.intl.formatToPlainString(ei.t.PkyRZo, { rewardName: n, expirationDate: u }),
        c = ei.intl.formatToPlainString(ei.t.ie4YK0, { rewardName: n, duration: r }),
        d = ei.intl.formatToPlainString(ei.t.yCpc0U, { duration: r, rewardName: n });
    return i
        ? l
            ? o
                ? s
                : c
            : o
              ? a
              : d
        : ei.intl.formatToPlainString(ei.t.tTlItm, { duration: r, decorationName: n });
}
function ez(e) {
    let t = (0, et.TP)(e);
    return { launchInGameActivity: (0, T.A)({ applicationId: t }) };
}
function eZ() {
    return (0, C.yK)([U.A], () => [...U.A.quests.values()]).some((e) => e.preview);
}
function e0() {
    return eZ();
}
function e1(e) {
    let t = e?.userStatus != null && (0, q.gO)(e.userStatus, Q.uF.ACTIVITY_PANEL),
        n = eN(e ?? null),
        r = e?.userStatus?.claimedAt != null,
        u = (0, C.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !r && !u;
}
function e2() {
    let e = (0, C.yK)([U.A], () => [...U.A.quests.values()]);
    return i.useMemo(() => e.filter((e) => e.preview), [e]);
}
function e5() {
    let e = eu.pc;
    return i.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, $.fx)(t), options: n };
            }),
        [e],
    );
}
function e8() {
    return i.useMemo(() => Object.keys(eu.kL).map((e) => ({ label: (0, $.Js)(eu.kL[e]), value: eu.kL[e] })), []);
}
function e6(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: r } = e,
        u = i.useRef(null),
        l = i.useRef(null);
    (i.useEffect(() => {
        (L.default.track(G.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: u.current }),
            (u.current = t));
    }, [t]),
        i.useEffect(() => {
            let e = n.map((e) => e.filter);
            (L.default.track(G.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: l.current ?? [],
                num_quests_visible: r,
            }),
                (l.current = e));
        }, [n, r]));
}
function e7(e) {
    return i.useMemo(() => b.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
}
function e4(e, t) {
    let n = e.userStatus?.completedAt != null;
    return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
}
function e9(e) {
    let t = (0, C.bG)([U.A], () => U.A.quests),
        n = e?.questIds;
    return i.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
        let e = n
            .map((e) => t.get(e))
            .filter(w.Vq)
            .filter((e) => !(0, q.Ic)(e));
        return e.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
}
function e3(e) {
    let t = N.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return i.useCallback(() => {
        if (n) return;
        let r = t ? E.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : E.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, g.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
(R.A.Millis.HOUR, R.A.Millis.MINUTE);
