(n.d(t, {
    O9: () => eW,
    Vn: () => eM,
    Wj: () => eK,
    mL: () => ea,
    Cv: () => e0,
    Yl: () => eP,
    Nb: () => e6,
    tZ: () => eX,
    pT: () => e5,
    UH: () => te,
    $P: () => e7,
    YW: () => eQ,
    zW: () => eZ,
    NC: () => em,
    Hv: () => eb,
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
    l,
    i = n(582128),
    o = n(435558),
    s = n(181370),
    a = n.n(s),
    d = n(889137),
    c = n(323889),
    f = n(412703),
    A = n(114046);
n(731355);
var E = n(517846),
    _ = n(118751),
    C = n(462887),
    p = n(17928),
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
    b = n(30370),
    P = n(287809),
    L = n(174459),
    R = n(927813),
    w = n(403362),
    y = n(975571),
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
    el = n(190107),
    ei = n(202541),
    eo = n(660183);
let es = 221552 == n.j ? -1 : null;
function ea() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = i.useState(!1),
        r = (0, p.yK)([U.A], () => [...U.A.quests.values()]),
        u = (0, p.yK)([U.A], () => [...U.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: l, lastFetchedCurrentQuests: o } = (0, p.cf)([U.A], () => ({
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
function ed(e, t, n, r) {
    let u = e.id === el.aJ,
        l = t.id === el.aJ,
        i = u && e.userStatus?.completedAt == null;
    if (i !== (l && t.userStatus?.completedAt == null)) return i ? es : 1;
    let o = !(0, J.Ic)(e),
        s = e.userStatus?.claimedAt != null,
        a = t.userStatus?.claimedAt != null,
        d = e.userStatus?.enrolledAt != null,
        c = t.userStatus?.enrolledAt != null,
        f = 20 * R.A.Millis.MINUTE,
        A = e3(e, f),
        E = e3(t, f);
    if (o) {
        var _, C, p;
        let u,
            l,
            { questHomeHero: i, isQuestHomeHeroShelfEnabled: o } = n;
        if (null != i && !o) {
            let n = (0, er.I0)(i, e.id),
                r = (0, er.I0)(i, t.id);
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
                : ((_ = e),
                  (C = t),
                  (u = (p = r).get(_.id)),
                  (l = p.get(C.id)),
                  null != u && null != l
                      ? u !== l
                          ? u - l
                          : _.id !== C.id
                            ? _.id < C.id
                                ? es
                                : 1
                            : 0
                      : null != u
                        ? es
                        : null != l
                          ? 1
                          : eT(_.config.expiresAt, C.config.expiresAt, 1));
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
        case el.Pc.VIDEO:
            return (0, en.vv)(e);
        case el.Pc.PLAY:
            return (
                (0, en.t)({ quest: e }) || (0, en.fE)({ quest: e }) || (0, en.vl)(e) || (0, en.g5)(e) || (0, en.Cr)(e)
            );
        default:
            return !1;
    }
}
function e_(e, t) {
    switch (t) {
        case el.BQ.VIRTUAL_CURRENCY:
            return (0, et.ks)(e.config);
        case el.BQ.COLLECTIBLE:
            return (0, et.tU)(e.config);
        case el.BQ.IN_GAME:
            return (0, et.HG)(e.config) || (0, et.r7)(e.config);
        default:
            return !1;
    }
}
let eC = 221552 == n.j ? {} : null,
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
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eC,
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
                                              return eE;
                                          case "reward":
                                              return e_;
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
                (0, er.iM)(n, el.Li.RENEWABLE_END_DATE) && r.set(n.id, ((u = n.id), a().v3(`${t}:${u}`) >>> 0));
            }
            return r;
        })(i, r.currentUserId, r.isRenewableEndDateSortEnabled),
        d =
            ((t = (function (e) {
                switch (e) {
                    case el.kL.MOST_RECENT:
                        return ec;
                    case el.kL.RECENTLY_ENROLLED:
                        return ef;
                    case el.kL.EXPIRING_SOON:
                        return eA;
                    case el.kL.SUGGESTED:
                    default:
                        return ed;
                }
            })(u)),
            function (e, n) {
                let u = !(0, J.Ic)(e);
                return !(0, J.Ic)(n) !== u ? (u ? es : 1) : t(e, n, r, s);
            });
    return i.sort(d);
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
        l,
        o,
        s,
        a,
        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eC,
        {
            quests: c,
            excludedQuests: f,
            isFetchingCurrentQuests: A,
            hasFetched: E,
        } = ea({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        _ = new Map(c.map((e) => [e.id, e])),
        C =
            ((t = (function () {
                let e = (0, p.bG)([m.A], () => m.A.getQuestHomeHero()),
                    { isShelfEnabled: t } = e4(e),
                    n = (0, p.bG)([P.default], () => P.default.getCurrentUser()?.id ?? null),
                    { enabled: r } = W.useConfig({ location: el.rE.QUEST_HOME_MOBILE }),
                    { enabled: u } = B.NN.useConfig({ location: el.rE.QUEST_HOME_MOBILE });
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
            (r = i.useRef(d.sortMethod)),
            (u = i.useRef(d.filters)),
            (l = i.useRef(0)),
            (o = i.useRef(t)),
            i.useMemo(() => {
                if (0 === c.length) return [];
                if (
                    n.current.length > 0 &&
                    l.current === c.length &&
                    r.current === d.sortMethod &&
                    u.current === d.filters &&
                    o.current === t
                )
                    return n.current;
                let e = eI(c, d, t).map((e) => e.id);
                return (
                    (n.current = e),
                    (r.current = d.sortMethod),
                    (u.current = d.filters),
                    (l.current = c.length),
                    (o.current = t),
                    e
                );
            }, [c, d, t])),
        I =
            ((s = i.useMemo(
                () =>
                    c.filter((e) => {
                        let t = e.userStatus?.completedAt != null,
                            n = e.userStatus?.claimedAt != null;
                        return t && n;
                    }),
                [c],
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
                                ? es
                                : 1
                            : eT(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return ((a.current = e), e);
            }, [s])),
        T = [];
    for (let t of "all" === e ? C : I) {
        let n = _.get(t),
            r = null != n && "all" === e && d.removeExpiredQuests && (0, J.Ic)(n) && !(0, q.GR)(n.userStatus);
        null == n || r || T.push(n);
    }
    return { quests: T, excludedQuests: f, isFetchingCurrentQuests: A, hasFetched: E };
}
function eg() {
    let e = i.useRef(!1),
        t = (0, p.yK)([U.A], () => Array.from(U.A.claimedQuests.values())),
        n = (0, p.bG)([U.A], () => U.A.isFetchingClaimedQuests);
    return (
        i.useEffect(() => {
            n || e.current || ((e.current = !0), (0, H.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eN(e, t) {
    let n = ev(e),
        r = (0, et.ks)(e.config),
        u = (0, et.KK)(e.config),
        l = t !== Z.MA.INELIGIBLE;
    return !n && r && u && l;
}
function eh(e) {
    return (0, p.bG)(
        [U.A],
        () => {
            let t = U.A.getQuest(e);
            return null == t ? null : (0, et.b)(t.config);
        },
        [e],
    );
}
function ev(e) {
    return (0, p.bG)([U.A], () => null != e && U.A.isQuestExpired(e.id), [e]);
}
function eb() {
    return (0, p.bG)([U.A], () => U.A.isQuestAccessSuspended, []);
}
function eP(e, t, n) {
    let r = (0, p.bG)([v.A], () => v.A.getChannel(t?.channelId) ?? null),
        u = (0, p.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []),
        l = (0, p.bG)([P.default], () => P.default.getCurrentUser()?.id),
        i = (0, p.bG)([U.A], () => null != e && U.A.isQuestExpired(e.id), [e]);
    if (null == e || u || i || l === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        s = (0, er.Ll)(t, r);
    return !o || !!s;
}
function eL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, p.bG)([N.default], () => N.default.locale);
    return i.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eR(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: u } = e,
        l = (0, j.wW)();
    return i.useCallback(() => {
        t.id === el.Fw
            ? window.open(y.A.getArticleURL(G.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, ee.pu)(t, { content: n, ctaContent: r, impressionId: l(), sourceQuestContent: u });
    }, [t, n, r, l, u]);
}
function ew(e) {
    return (0, p.bG)([U.A], () => U.A.isProgressingOnDesktop(e.id));
}
function ey(e) {
    return i.useMemo(() => (0, en.YL)(e), [e]);
}
function eM(e) {
    let t,
        n = ew(e),
        r = ey(e),
        u =
            ((t = (0, p.bG)([U.A], () => U.A.getOptimisticProgress(e.id, f.n.WATCH_VIDEO))),
            i.useMemo(() => (0, eu.J$)(e), [e, t]));
    return n || r || u;
}
let ek = (e) => {
    let t = i.useCallback(() => (0, en.Yh)(e), [e]),
        [n, r] = i.useState(t()),
        u = i.useCallback(() => r(t()), [t]),
        l = eM(e);
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
function eD(e) {
    return i.useMemo(() => (0, en.JC)(e), [e]);
}
function eU(e) {
    let t = i.useMemo(() => {
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
    let t = (0, p.bG)([U.A], () => U.A.quests),
        n = eU(Array.from(t.values())),
        r = i.useMemo(() => {
            let n = (0, er.$e)(t, el.zO);
            return (0, z.BM)(n, e);
        }, [e, t, n]);
    return ev(r) ? null : r;
}
function eq(e) {
    return i.useMemo(
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
    let { fetching: e, accounts: t } = (0, p.cf)([b.A], () => ({
            fetching: b.A.isFetching(),
            accounts: b.A.getAccounts(),
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
function eK(e) {
    let { questId: t, preview: n, beforeRequest: r, afterRequest: u } = e,
        [l, o] = i.useState(!1),
        s = (0, p.bG)([b.A], () => b.A.getAccounts()),
        a = (0, K.O)((e) => e.clearErrorHintsByType),
        d = i.useCallback((e) => K.O.getState().setErrorHints(t, e), [t]);
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
                    ((e = await (0, H.vD)(t, n)), d(e.errorHints));
                } finally {
                    (o(!1), u?.());
                }
            }, [l, r, u, n, t, d]),
            startingConsoleQuest: l,
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
        u = y.A.getArticleURL(G.MVz.QUEST_HOW_TO_PLAYSTATION),
        l = y.A.getArticleURL(G.MVz.QUEST_HOW_TO_XBOX),
        i = eo.intl.format(eo.t.beN4DG, { psHelpdeskArticle: u, xboxHelpdeskArticle: l }),
        o = eo.intl.format(eo.t.HVS7nh, { helpdeskArticle: r ? u : l });
    return { message: (n && !r) || (!n && r) ? o : i, xboxURL: l, playstationURL: u };
}
var ex =
    (((l = {})[(l.UNACCEPTED = 0)] = "UNACCEPTED"),
    (l[(l.ACCEPTED = 1)] = "ACCEPTED"),
    (l[(l.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (l[(l.COMPLETED = 3)] = "COMPLETED"),
    (l[(l.CLAIMED = 4)] = "CLAIMED"),
    l);
function eF(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        r = e.userStatus?.claimedAt != null,
        u = ek(e).percentComplete > 0;
    return r ? 4 : n ? 3 : u && t ? 2 : 1 * !!t;
}
function eW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, p.bG)([N.default], () => N.default.locale),
        { percentComplete: r } = ek(e),
        u = eD(e),
        l = null != u ? u.percentComplete : r,
        i = 100 * l,
        o = null == u || t ? (0, _.l9)(n, l, { roundingMode: "floor" }) : `${u?.progress}/${u?.target}`;
    return { completedRatio: l, percentComplete: i, completedRatioDisplay: o };
}
function eX(e) {
    return [(0, p.bG)([U.A], () => U.A.selectedTaskPlatform(e)), i.useCallback((t) => (0, H.lx)(e, t), [e])];
}
function eY(e, t) {
    let [n, r] = eX(e.id),
        u = i.useMemo(() => (0, ee.UR)(e), [e]),
        l = u.includes(el.fO.DESKTOP),
        o = u.includes(el.fO.CONSOLE),
        s = ew(e),
        a = ey(e),
        c = i.useMemo(
            () =>
                (0, d.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.n.PLAY_ON_DESKTOP }, () => el.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ACTIVITY }, () => el.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO }, () => el.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO_ON_MOBILE }, () => el.fO.DESKTOP)
                    .with({ taskType: f.n.STREAM_ON_DESKTOP }, () => el.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ON_XBOX }, () => el.fO.CONSOLE)
                    .with({ taskType: f.n.PLAY_ON_PLAYSTATION }, () => el.fO.CONSOLE)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_GAME }, () => el.fO.DESKTOP)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_ACTIVITY }, () => el.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        A = s ? el.fO.DESKTOP : a ? el.fO.CONSOLE : null;
    return [
        i.useMemo(
            () =>
                (0, d.YW)({ lastPlatformProgress: c, currentProgressingPlatform: A, selectedPlatform: n })
                    .with({ currentProgressingPlatform: el.fO.CONSOLE }, () => Q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: el.fO.DESKTOP }, () => Q.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: el.fO.CONSOLE }, () => Q.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: el.fO.DESKTOP }, () => Q.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: el.fO.CONSOLE,
                        },
                        () => Q.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: el.fO.DESKTOP,
                        },
                        () => Q.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (o && l ? Q.X0.SELECT : o ? Q.X0.CONSOLE : Q.X0.DESKTOP),
                    )
                    .exhaustive(),
            [o, l, c, A, n],
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
        l = e.userStatus?.enrolledAt != null,
        i = e.userStatus?.completedAt != null,
        o = f.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        s = 0 === n.percentComplete,
        a = l && !i && !u && null == t && (o || (s && r === Q.X0.DESKTOP)),
        d = (0, M.isWeb)() && a && !(0, ee.W1)(e),
        c = (0, M.isMac)() && n.taskType === f.n.STREAM_ON_DESKTOP && a,
        A = [];
    return (c && A.push(eo.intl.string(eo.t.MFGxFM)), d && A.push(eo.intl.string(eo.t.BV6xDm)), A);
}
function ej(e) {
    return (0, p.bG)([U.A], () => U.A.quests).get(e) ?? null;
}
function e$(e) {
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
        d = i.useRef(null);
    (i.useEffect(() => {
        null != a && d.current !== u && (s(u, d.current), (d.current = u));
    }, [u, a, s]),
        i.useEffect(() => {
            if (null != a)
                return () => {
                    s(null, d.current);
                };
        }, [a, s]));
}
function eJ(e, t) {
    let n = (0, p.bG)([U.A], () => U.A.getQuest(e), [e]),
        r = (0, I.Ay)();
    return i.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, C.M)(r) ? G.NJ8.DARK : G.NJ8.LIGHT);
        return (0, X.tW)(n, X.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function ez(e) {
    let t = (0, p.bG)([P.default], () => P.default.getCurrentUser()),
        n = (0, et.mq)(e, t),
        r = (0, et.k5)(e),
        u = (0, et.$5)(e),
        l = (0, et.Y7)(e),
        i = (0, et.JX)(e),
        o = (0, k.TW)(t, ei.PremiumTypes.TIER_2);
    if (null == r) return eo.intl.formatToPlainString(eo.t.l9uXL8, { decorationName: n });
    let s = eo.intl.formatToPlainString(eo.t.o97tNn, { rewardName: n }),
        a = eo.intl.formatToPlainString(eo.t.PkyRZo, { rewardName: n, expirationDate: u }),
        d = eo.intl.formatToPlainString(eo.t.ie4YK0, { rewardName: n, duration: r }),
        c = eo.intl.formatToPlainString(eo.t.yCpc0U, { duration: r, rewardName: n });
    return i
        ? l
            ? o
                ? s
                : d
            : o
              ? a
              : c
        : eo.intl.formatToPlainString(eo.t.tTlItm, { duration: r, decorationName: n });
}
function eZ(e) {
    let t = (0, en.TP)(e);
    return { launchInGameActivity: (0, T.A)({ applicationId: t }) };
}
function e0() {
    return (0, p.yK)([U.A], () => [...U.A.quests.values()]).some((e) => e.preview);
}
function e1() {
    return e0();
}
function e2(e) {
    let t = e?.userStatus != null && (0, q.gO)(e.userStatus, Q.uF.ACTIVITY_PANEL),
        n = ev(e ?? null),
        r = e?.userStatus?.claimedAt != null,
        u = (0, p.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !r && !u;
}
function e5() {
    let e = (0, p.yK)([U.A], () => [...U.A.quests.values()]);
    return i.useMemo(() => e.filter((e) => e.preview), [e]);
}
function e6() {
    let e = el.pc;
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
    return i.useMemo(() => Object.keys(el.kL).map((e) => ({ label: (0, $.Js)(el.kL[e]), value: el.kL[e] })), []);
}
function e7(e) {
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
function e9(e) {
    return i.useMemo(() => P.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
}
function e3(e, t) {
    let n = e.userStatus?.completedAt != null;
    return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
}
function e4(e) {
    let t = (0, p.bG)([U.A], () => U.A.quests),
        n = e?.questIds;
    return i.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
        let e = n
            .map((e) => t.get(e))
            .filter(w.Vq)
            .filter((e) => !(0, J.Ic)(e));
        return e.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
}
function te(e) {
    let t = h.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return i.useCallback(() => {
        if (n) return;
        let r = t ? E.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : E.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, g.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
(R.A.Millis.HOUR, R.A.Millis.MINUTE);
