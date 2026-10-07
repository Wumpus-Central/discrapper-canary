(n.d(t, {
    O9: () => eW,
    Vn: () => eM,
    Wj: () => eK,
    mL: () => ea,
    Cv: () => e0,
    Yl: () => eb,
    Nb: () => e6,
    tZ: () => eX,
    pT: () => e5,
    UH: () => te,
    $P: () => e7,
    YW: () => eQ,
    zW: () => eZ,
    NC: () => em,
    Hv: () => eP,
    j$: () => eq,
    fc: () => ek,
    SD: () => eN,
    aC: () => eV,
    FA: () => ez,
    LS: () => ev,
    p5: () => e1,
    Ns: () => e9,
    Iq: () => eg,
    Qh: () => eO,
    t9: () => e4,
    RR: () => eH,
    XD: () => e8,
    ZP: () => eh,
    UX: () => eB,
    mn: () => eI,
    C5: () => ej,
    sb: () => e2,
    I3: () => eD,
    Qo: () => eY,
    In: () => eF,
    H6: () => e$,
    a5: () => eJ,
    F3: () => ex,
    L1: () => eS,
    do: () => eR,
    oH: () => eU,
    S5: () => eL,
    Du: () => eG,
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
    d = n(889137),
    c = n(323889),
    f = n(412703),
    A = n(114046);
n(731355);
var E = n(517846),
    C = n(118751),
    p = n(462887),
    _ = n(17928),
    I = n(736653),
    T = n(787389),
    m = n(157695),
    S = n(183636),
    O = n(429913);
n(674658);
var g = n(27620),
    N = n(773669),
    h = n(885386),
    v = n(734057),
    P = n(30370),
    b = n(287809),
    L = n(174459),
    R = n(927813),
    y = n(403362),
    w = n(975571),
    M = n(723702),
    k = n(158045);
(n(323874), n(14289), n(35956), n(636537), n(73153), n(181658), n(269936), n(107195), n(881615), n(390595));
var D = n(626584);
(n(544180), n(265704));
var U = n(859703),
    Q = n(738822),
    q = n(710969),
    G = n(652215);
new D.A("BountyActionCreators");
var K = n(178540),
    H = n(396813),
    B = n(192444),
    x = n(945810);
(0, x.mj)({
    name: "2026-09-quest-home-bounties-feature-gate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let F = (0, x.mj)({
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
    J = n(977416),
    z = n(639214),
    Z = n(576761),
    ee = n(901406),
    et = n(801365),
    en = n(792620),
    er = n(814793),
    eu = n(753386),
    ei = n(190107),
    eo = n(202541),
    el = n(660183);
let es = 221552 == n.j ? -1 : null;
function ea() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = o.useState(!1),
        r = (0, _.yK)([U.A], () => [...U.A.quests.values()]),
        u = (0, _.yK)([U.A], () => [...U.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: i, lastFetchedCurrentQuests: l } = (0, _.cf)([U.A], () => ({
            isFetchingCurrentQuests: U.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: U.A.lastFetchedCurrentQuests,
        })),
        s = (0, Y.s)();
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
            if (r && s && !t && !i && (n(!0), (0, H.N1)(), (0, M.isMac)() && "focused" !== S.A.getState())) return;
        }, [e.fetchPolicy, s, t, i, l, e.callerSource]),
        { quests: r, excludedQuests: u, isFetchingCurrentQuests: i, hasFetched: t }
    );
}
function ed(e, t, n, r) {
    let u = e.id === ei.aJ,
        i = t.id === ei.aJ,
        o = u && e.userStatus?.completedAt == null;
    if (o !== (i && t.userStatus?.completedAt == null)) return o ? es : 1;
    let l = !(0, J.Ic)(e),
        s = e.userStatus?.claimedAt != null,
        a = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        f = 20 * R.A.Millis.MINUTE,
        A = e3(e, f),
        E = e3(t, f);
    if (l) {
        var C, p, _;
        let u,
            i,
            { questHomeHero: o, isQuestHomeHeroShelfEnabled: l } = n;
        if (null != o && !l) {
            let n = (0, er.I0)(o, e.id),
                r = (0, er.I0)(o, t.id);
            if (n || r) return n ? es : 1;
        }
        return A !== E && (A || E)
            ? A
                ? 1
                : es
            : s !== a
              ? s
                  ? 1
                  : es
              : d !== c
                ? d
                    ? es
                    : 1
                : ((C = e),
                  (p = t),
                  (u = (_ = r).get(C.id)),
                  (i = _.get(p.id)),
                  null != u && null != i
                      ? u !== i
                          ? u - i
                          : C.id !== p.id
                            ? C.id < p.id
                                ? es
                                : 1
                            : 0
                      : null != u
                        ? es
                        : null != i
                          ? 1
                          : eT(C.config.expiresAt, p.config.expiresAt, 1));
    }
    return s !== a ? (s ? es : 1) : d !== c ? (d ? es : 1) : eT(e.config.expiresAt, t.config.expiresAt, 0);
}
function ec(e, t, n) {
    return eT(e.config.startsAt, t.config.startsAt, 0);
}
function ef(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        u = t.userStatus?.enrolledAt;
    return null == r && null == u
        ? eT(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == u
          ? es
          : null == r && null != u
            ? 1
            : eT(r, u, 0);
}
function eA(e, t, n) {
    return eT(e.config.expiresAt, t.config.expiresAt, 1);
}
function eE(e, t) {
    switch (t) {
        case ei.Pc.VIDEO:
            return (0, en.vv)(e);
        case ei.Pc.PLAY:
            return (
                (0, en.t)({ quest: e }) || (0, en.fE)({ quest: e }) || (0, en.vl)(e) || (0, en.g5)(e) || (0, en.Cr)(e)
            );
        default:
            return !1;
    }
}
function eC(e, t) {
    switch (t) {
        case ei.BQ.VIRTUAL_CURRENCY:
            return (0, et.ks)(e.config);
        case ei.BQ.COLLECTIBLE:
            return (0, et.tU)(e.config);
        case ei.BQ.IN_GAME:
            return (0, et.HG)(e.config) || (0, et.r7)(e.config);
        default:
            return !1;
    }
}
let ep = 221552 == n.j ? {} : null,
    e_ =
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
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e_,
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
                                              return eE;
                                          case "reward":
                                              return eC;
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
                (0, er.iM)(n, ei.Li.RENEWABLE_END_DATE) && r.set(n.id, ((u = n.id), a().v3(`${t}:${u}`) >>> 0));
            }
            return r;
        })(o, r.currentUserId, r.isRenewableEndDateSortEnabled),
        d =
            ((t = (function (e) {
                switch (e) {
                    case ei.kL.MOST_RECENT:
                        return ec;
                    case ei.kL.RECENTLY_ENROLLED:
                        return ef;
                    case ei.kL.EXPIRING_SOON:
                        return eA;
                    case ei.kL.SUGGESTED:
                    default:
                        return ed;
                }
            })(u)),
            function (e, n) {
                let u = !(0, J.Ic)(e);
                return !(0, J.Ic)(n) !== u ? (u ? es : 1) : t(e, n, r, s);
            });
    return o.sort(d);
}
function eT(e, t, n) {
    return e.localeCompare(t) * (0 === n ? es : 1);
}
var em = 221552 == n.j ? (((r = {}).ALL = "all"), (r.CLAIMED = "claimed"), (r.PREVIEW_TOOL = "preview_tool"), r) : null,
    eS =
        221552 == n.j
            ? (((u = {}).TAB = "tab"),
              (u.QUEST_ID = "quest_id"),
              (u.SORT = "sort"),
              (u.FILTER = "filter"),
              (u.AD_CREATIVE_IDS = "ad_creative_ids"),
              u)
            : null;
function eO(e) {
    let t,
        n,
        r,
        u,
        i,
        l,
        s,
        a,
        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep,
        {
            quests: c,
            excludedQuests: f,
            isFetchingCurrentQuests: A,
            hasFetched: E,
        } = ea({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        C = new Map(c.map((e) => [e.id, e])),
        p =
            ((t = (function () {
                let e = (0, _.bG)([m.A], () => m.A.getQuestHomeHero()),
                    { isShelfEnabled: t } = e4(e),
                    n = (0, _.bG)([b.default], () => b.default.getCurrentUser()?.id ?? null),
                    { enabled: r } = W.useConfig({ location: ei.rE.QUEST_HOME_MOBILE }),
                    { enabled: u } = B.NN.useConfig({ location: ei.rE.QUEST_HOME_MOBILE });
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
            (r = o.useRef(d.sortMethod)),
            (u = o.useRef(d.filters)),
            (i = o.useRef(0)),
            (l = o.useRef(t)),
            o.useMemo(() => {
                if (0 === c.length) return [];
                if (
                    n.current.length > 0 &&
                    i.current === c.length &&
                    r.current === d.sortMethod &&
                    u.current === d.filters &&
                    l.current === t
                )
                    return n.current;
                let e = eI(c, d, t).map((e) => e.id);
                return (
                    (n.current = e),
                    (r.current = d.sortMethod),
                    (u.current = d.filters),
                    (i.current = c.length),
                    (l.current = t),
                    e
                );
            }, [c, d, t])),
        I =
            ((s = o.useMemo(
                () =>
                    c.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [c],
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
                                ? es
                                : 1
                            : eT(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return ((a.current = e), e);
            }, [s])),
        T = [];
    for (let t of "all" === e ? p : I) {
        let n = C.get(t),
            r = null != n && "all" === e && d.removeExpiredQuests && (0, J.Ic)(n) && !(0, q.GR)(n.userStatus);
        null == n || r || T.push(n);
    }
    return { quests: T, excludedQuests: f, isFetchingCurrentQuests: A, hasFetched: E };
}
function eg() {
    let e = o.useRef(!1),
        t = (0, _.yK)([U.A], () => Array.from(U.A.claimedQuests.values())),
        n = (0, _.bG)([U.A], () => U.A.isFetchingClaimedQuests);
    return (
        o.useEffect(() => {
            n || e.current || ((e.current = !0), (0, H.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eN(e, t) {
    let n = ev(e),
        r = (0, et.ks)(e.config),
        u = (0, et.KK)(e.config),
        i = t !== Z.MA.INELIGIBLE;
    return !n && r && u && i;
}
function eh(e) {
    return (0, _.bG)(
        [U.A],
        () => {
            let t = U.A.getQuest(e);
            return null == t ? null : (0, et.b)(t.config);
        },
        [e],
    );
}
function ev(e) {
    return (0, _.bG)([U.A], () => null != e && U.A.isQuestExpired(e.id), [e]);
}
function eP() {
    return (0, _.bG)([U.A], () => U.A.isQuestAccessSuspended, []);
}
function eb(e, t, n) {
    let r = (0, _.bG)([v.A], () => v.A.getChannel(t?.channelId) ?? null),
        u = (0, _.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []),
        i = (0, _.bG)([b.default], () => b.default.getCurrentUser()?.id),
        o = (0, _.bG)([U.A], () => null != e && U.A.isQuestExpired(e.id), [e]);
    if (null == e || u || o || i === n) return !1;
    let l = e.userStatus?.claimedAt != null,
        s = (0, er.Ll)(t, r);
    return !l || !!s;
}
function eL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, _.bG)([N.default], () => N.default.locale);
    return o.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eR(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: u } = e,
        i = (0, j.wW)();
    return o.useCallback(() => {
        t.id === ei.Fw
            ? window.open(w.A.getArticleURL(G.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, ee.pu)(t, { content: n, ctaContent: r, impressionId: i(), sourceQuestContent: u });
    }, [t, n, r, i, u]);
}
function ey(e) {
    return (0, _.bG)([U.A], () => U.A.isProgressingOnDesktop(e.id));
}
function ew(e) {
    return o.useMemo(() => (0, en.YL)(e), [e]);
}
function eM(e) {
    let t,
        n = ey(e),
        r = ew(e),
        u =
            ((t = (0, _.bG)([U.A], () => U.A.getOptimisticProgress(e.id, f.n.WATCH_VIDEO))),
            o.useMemo(() => (0, eu.J$)(e), [e, t]));
    return n || r || u;
}
let ek = (e) => {
    let t = o.useCallback(() => (0, en.Yh)(e), [e]),
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
            }, +R.A.Millis.SECOND);
            return () => {
                (clearInterval(t), u());
            };
        }, [e, i, u]),
        n
    );
};
function eD(e) {
    return o.useMemo(() => (0, en.JC)(e), [e]);
}
function eU(e) {
    let t = o.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, en.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, O.A)(t);
}
function eQ(e) {
    let t = (0, _.bG)([U.A], () => U.A.quests),
        n = eU(Array.from(t.values())),
        r = o.useMemo(() => {
            let n = (0, er.$e)(t, ei.zO);
            return (0, z.BM)(n, e);
        }, [e, t, n]);
    return ev(r) ? null : r;
}
function eq(e) {
    return o.useMemo(
        () => ({
            handleComplete: () => (0, H.Yb)(e),
            handleProgress: (t) => (0, H.Yb)(e, t),
            handleResetStatusClick: () => (0, H.UZ)(e),
            handleResetDismissibilityClick: () => (0, H.Gt)(e),
            handleOverridePreviewClick: (t) => (0, H.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, H.qV)(c.p.QUEST, [e]),
        }),
        [e],
    );
}
function eG() {
    let { fetching: e, accounts: t } = (0, _.cf)([P.A], () => ({
            fetching: P.A.isFetching(),
            accounts: P.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: u,
        } = o.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === G.fg2.XBOX),
                r = e.filter((e) => e.type === G.fg2.PLAYSTATION),
                u = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
}
function eK(e) {
    let { questId: t, preview: n, beforeRequest: r, afterRequest: u } = e,
        [i, l] = o.useState(!1),
        s = (0, _.bG)([P.A], () => P.A.getAccounts()),
        a = (0, K.O)((e) => e.clearErrorHintsByType),
        d = o.useCallback((e) => K.O.getState().setErrorHints(t, e), [t]);
    return (
        o.useEffect(() => {
            a(t, A._.EXPIRED_CREDENTIAL);
        }, [s, a, t]),
        {
            startConsoleQuest: o.useCallback(async () => {
                if (i) return;
                (r?.(), l(!0));
                let e = null;
                try {
                    ((e = await (0, H.vD)(t, n)), d(e.errorHints));
                } finally {
                    (l(!1), u?.());
                }
            }, [i, r, u, n, t, d]),
            startingConsoleQuest: i,
        }
    );
}
function eH(e) {
    let { quest: t } = e,
        { xboxAndPlaystationAccounts: n } = eG(),
        r = eM(t),
        u = 0 === n.length;
    return (0, en.g5)(t) && u && !r;
}
function eB() {
    let { xboxAccounts: e, playstationAccounts: t } = eG(),
        n = e.length > 0,
        r = t.length > 0,
        u = w.A.getArticleURL(G.MVz.QUEST_HOW_TO_PLAYSTATION),
        i = w.A.getArticleURL(G.MVz.QUEST_HOW_TO_XBOX),
        o = el.intl.format(el.t.beN4DG, { psHelpdeskArticle: u, xboxHelpdeskArticle: i }),
        l = el.intl.format(el.t.HVS7nh, { helpdeskArticle: r ? u : i });
    return { message: (n && !r) || (!n && r) ? l : o, xboxURL: i, playstationURL: u };
}
var ex =
    (((i = {})[(i.UNACCEPTED = 0)] = "UNACCEPTED"),
    (i[(i.ACCEPTED = 1)] = "ACCEPTED"),
    (i[(i.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (i[(i.COMPLETED = 3)] = "COMPLETED"),
    (i[(i.CLAIMED = 4)] = "CLAIMED"),
    i);
function eF(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        u = ek(e).percentComplete > 0;
    return r ? 4 : n ? 3 : u && t ? 2 : 1 * !!t;
}
function eW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, _.bG)([N.default], () => N.default.locale),
        { percentComplete: r } = ek(e),
        u = eD(e),
        i = null != u ? u.percentComplete : r,
        o = 100 * i,
        l = null == u || t ? (0, C.l9)(n, i, { roundingMode: "floor" }) : `${u?.progress}/${u?.target}`;
    return { completedRatio: i, percentComplete: o, completedRatioDisplay: l };
}
function eX(e) {
    return [(0, _.bG)([U.A], () => U.A.selectedTaskPlatform(e)), o.useCallback((t) => (0, H.lx)(e, t), [e])];
}
function eY(e, t) {
    let [n, r] = eX(e.id),
        u = o.useMemo(() => (0, ee.UR)(e), [e]),
        i = u.includes(ei.fO.DESKTOP),
        l = u.includes(ei.fO.CONSOLE),
        s = ey(e),
        a = ew(e),
        c = o.useMemo(
            () =>
                (0, d.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.n.PLAY_ON_DESKTOP }, () => ei.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ACTIVITY }, () => ei.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO }, () => ei.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO_ON_MOBILE }, () => ei.fO.DESKTOP)
                    .with({ taskType: f.n.STREAM_ON_DESKTOP }, () => ei.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ON_XBOX }, () => ei.fO.CONSOLE)
                    .with({ taskType: f.n.PLAY_ON_PLAYSTATION }, () => ei.fO.CONSOLE)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_GAME }, () => ei.fO.DESKTOP)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_ACTIVITY }, () => ei.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        A = s ? ei.fO.DESKTOP : a ? ei.fO.CONSOLE : null;
    return [
        o.useMemo(
            () =>
                (0, d.YW)({ lastPlatformProgress: c, currentProgressingPlatform: A, selectedPlatform: n })
                    .with({ currentProgressingPlatform: ei.fO.CONSOLE }, () => Q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: ei.fO.DESKTOP }, () => Q.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: ei.fO.CONSOLE }, () => Q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: ei.fO.DESKTOP }, () => Q.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: ei.fO.CONSOLE,
                        },
                        () => Q.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: ei.fO.DESKTOP,
                        },
                        () => Q.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (l && i ? Q.X0.SELECT : l ? Q.X0.CONSOLE : Q.X0.DESKTOP),
                    )
                    .exhaustive(),
            [l, i, c, A, n],
        ),
        u,
        r,
    ];
}
function eV(e) {
    let t = eD(e),
        n = ek(e),
        [r] = eY(e, n),
        u = ev(e),
        i = e.userStatus?.enrolledAt != null,
        o = e.userStatus?.completedAt != null,
        l = f.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        s = 0 === n.percentComplete,
        a = i && !o && !u && null == t && (l || (s && r === Q.X0.DESKTOP)),
        d = (0, M.isWeb)() && a && !(0, ee.W1)(e),
        c = (0, M.isMac)() && n.taskType === f.n.STREAM_ON_DESKTOP && a,
        A = [];
    return (c && A.push(el.intl.string(el.t.MFGxFM)), d && A.push(el.intl.string(el.t.BV6xDm)), A);
}
function ej(e) {
    return (0, _.bG)([U.A], () => U.A.quests).get(e) ?? null;
}
function e$(e) {
    let t,
        n,
        r,
        { mode: u, questContent: i, sourceQuestContent: l } = e;
    "questId" in e ? (t = e.questId) : ((n = e.adContentId), (r = e.adCreativeType));
    let s = o.useCallback(
            (e, u) => {
                null != t
                    ? (0, V.Zu)({ mode: e, prevMode: u, questContent: i, questId: t, sourceQuestContent: l })
                    : null != n &&
                      null != r &&
                      (0, V.Wc)({
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
        d = o.useRef(null);
    (o.useEffect(() => {
        null != a && d.current !== u && (s(u, d.current), (d.current = u));
    }, [u, a, s]),
        o.useEffect(() => {
            if (null != a)
                return () => {
                    s(null, d.current);
                };
        }, [a, s]));
}
function eJ(e, t) {
    let n = (0, _.bG)([U.A], () => U.A.getQuest(e), [e]),
        r = (0, I.Ay)();
    return o.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, p.M)(r) ? G.NJ8.DARK : G.NJ8.LIGHT);
        return (0, X.tW)(n, X.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function ez(e) {
    let t = (0, _.bG)([b.default], () => b.default.getCurrentUser()),
        n = (0, et.mq)(e, t),
        r = (0, et.k5)(e),
        u = (0, et.$5)(e),
        i = (0, et.Y7)(e),
        o = (0, et.JX)(e),
        l = (0, k.TW)(t, eo.PremiumTypes.TIER_2);
    if (null == r) return el.intl.formatToPlainString(el.t.l9uXL8, { decorationName: n });
    let s = el.intl.formatToPlainString(el.t.o97tNn, { rewardName: n }),
        a = el.intl.formatToPlainString(el.t.PkyRZo, { rewardName: n, expirationDate: u }),
        d = el.intl.formatToPlainString(el.t.ie4YK0, { rewardName: n, duration: r }),
        c = el.intl.formatToPlainString(el.t.yCpc0U, { duration: r, rewardName: n });
    return o
        ? i
            ? l
                ? s
                : d
            : l
              ? a
              : c
        : el.intl.formatToPlainString(el.t.tTlItm, { duration: r, decorationName: n });
}
function eZ(e) {
    let t = (0, en.TP)(e);
    return { launchInGameActivity: (0, T.A)({ applicationId: t }) };
}
function e0() {
    return (0, _.yK)([U.A], () => [...U.A.quests.values()]).some((e) => e.preview);
}
function e1() {
    return e0();
}
function e2(e) {
    let t = e?.userStatus != null && (0, q.gO)(e.userStatus, Q.uF.ACTIVITY_PANEL),
        n = ev(e ?? null),
        r = e?.userStatus?.claimedAt != null,
        u = (0, _.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !r && !u;
}
function e5() {
    let e = (0, _.yK)([U.A], () => [...U.A.quests.values()]);
    return o.useMemo(() => e.filter((e) => e.preview), [e]);
}
function e6() {
    let e = ei.pc;
    return o.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, $.fx)(t), options: n };
            }),
        [e],
    );
}
function e8() {
    return o.useMemo(() => Object.keys(ei.kL).map((e) => ({ label: (0, $.Js)(ei.kL[e]), value: ei.kL[e] })), []);
}
function e7(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: r } = e,
        u = o.useRef(null),
        i = o.useRef(null);
    (o.useEffect(() => {
        (L.default.track(G.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: u.current }),
            (u.current = t));
    }, [t]),
        o.useEffect(() => {
            let e = n.map((e) => e.filter);
            (L.default.track(G.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: i.current ?? [],
                num_quests_visible: r,
            }),
                (i.current = e));
        }, [n, r]));
}
function e9(e) {
    return o.useMemo(() => b.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
}
function e3(e, t) {
    let n = e.userStatus?.completedAt != null;
    return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
}
function e4(e) {
    let t = (0, _.bG)([U.A], () => U.A.quests),
        n = e?.questIds;
    return o.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
        let e = n
            .map((e) => t.get(e))
            .filter(y.Vq)
            .filter((e) => !(0, J.Ic)(e));
        return e.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
}
function te(e) {
    let t = h.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return o.useCallback(() => {
        if (n) return;
        let r = t ? E.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : E.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, g.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
(R.A.Millis.HOUR, R.A.Millis.MINUTE);
