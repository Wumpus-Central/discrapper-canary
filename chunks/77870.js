(n.d(t, {
    O9: () => eV,
    Vn: () => eM,
    Wj: () => eq,
    mL: () => es,
    Cv: () => eZ,
    Yl: () => eL,
    Nb: () => e5,
    tZ: () => eW,
    pT: () => e2,
    UH: () => e3,
    $P: () => e9,
    YW: () => eD,
    zW: () => ez,
    NC: () => ep,
    Hv: () => eh,
    j$: () => eQ,
    fc: () => ew,
    SD: () => eg,
    aC: () => ex,
    FA: () => eJ,
    LS: () => ev,
    p5: () => e0,
    Ns: () => e8,
    Iq: () => em,
    Qh: () => eO,
    t9: () => e4,
    RR: () => eK,
    XD: () => e7,
    ZP: () => eN,
    UX: () => eH,
    mn: () => eI,
    C5: () => eY,
    sb: () => e1,
    I3: () => eU,
    Qo: () => eX,
    In: () => eB,
    H6: () => ej,
    a5: () => e$,
    F3: () => eF,
    L1: () => eS,
    do: () => eb,
    oH: () => ek,
    S5: () => eP,
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
    c = n(889137),
    d = n(323889),
    f = n(412703),
    A = n(114046);
n(731355);
var E = n(517846),
    T = n(118751),
    _ = n(462887),
    I = n(17928),
    C = n(736653),
    p = n(787389),
    S = n(157695),
    O = n(183636),
    m = n(429913);
n(674658);
var g = n(27620),
    N = n(773669),
    v = n(885386),
    h = n(734057),
    L = n(30370),
    P = n(287809),
    b = n(174459),
    R = n(927813),
    y = n(403362),
    M = n(975571),
    w = n(723702),
    U = n(927578);
(n(845890), n(265704));
var k = n(178540),
    D = n(427495),
    Q = n(859703),
    G = n(738822),
    q = n(192444),
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
var B = n(291749),
    V = n(971276),
    W = n(561844);
n(590202);
var X = n(971649),
    x = n(651892),
    Y = n(710969),
    j = n(977416),
    $ = n(639214),
    J = n(576761),
    z = n(620954),
    Z = n(801365),
    ee = n(792620),
    et = n(814793),
    en = n(753386),
    er = n(190107),
    eu = n(652215),
    el = n(202541),
    ei = n(105292);
let eo = 221552 == n.j ? -1 : null;
function es() {
    let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fetchPolicy: "cache-only", callerSource: "unknown" },
        [t, n] = i.useState(!1),
        r = (0, I.yK)([Q.A], () => [...Q.A.quests.values()]),
        u = (0, I.yK)([Q.A], () => [...Q.A.excludedQuests.values()]),
        { isFetchingCurrentQuests: l, lastFetchedCurrentQuests: o } = (0, I.cf)([Q.A], () => ({
            isFetchingCurrentQuests: Q.A.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: Q.A.lastFetchedCurrentQuests,
        })),
        s = (0, V.s)();
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
            if (r && s && !t && !l && (n(!0), (0, D.N1)(), (0, w.isMac)() && "focused" !== O.A.getState())) return;
        }, [e.fetchPolicy, s, t, l, o, e.callerSource]),
        { quests: r, excludedQuests: u, isFetchingCurrentQuests: l, hasFetched: t }
    );
}
function ea(e, t, n, r) {
    let u = e.id === er.aJ,
        l = t.id === er.aJ,
        i = u && e.userStatus?.completedAt == null;
    if (i !== (l && t.userStatus?.completedAt == null)) return i ? eo : 1;
    let o = !(0, j.Ic)(e),
        s = e.userStatus?.claimedAt != null,
        a = t.userStatus?.claimedAt != null,
        c = e.userStatus?.enrolledAt != null,
        d = t.userStatus?.enrolledAt != null,
        f = 20 * R.A.Millis.MINUTE,
        A = e6(e, f),
        E = e6(t, f);
    if (o) {
        var T, _, I;
        let u,
            l,
            { questHomeHero: i, isQuestHomeHeroShelfEnabled: o } = n;
        if (null != i && !o) {
            let n = (0, et.I0)(i, e.id),
                r = (0, et.I0)(i, t.id);
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
                : ((T = e),
                  (_ = t),
                  (u = (I = r).get(T.id)),
                  (l = I.get(_.id)),
                  null != u && null != l
                      ? u !== l
                          ? u - l
                          : T.id !== _.id
                            ? T.id < _.id
                                ? eo
                                : 1
                            : 0
                      : null != u
                        ? eo
                        : null != l
                          ? 1
                          : eC(T.config.expiresAt, _.config.expiresAt, 1));
    }
    return s !== a ? (s ? eo : 1) : c !== d ? (c ? eo : 1) : eC(e.config.expiresAt, t.config.expiresAt, 0);
}
function ec(e, t, n) {
    return eC(e.config.startsAt, t.config.startsAt, 0);
}
function ed(e, t, n) {
    let r = e.userStatus?.enrolledAt,
        u = t.userStatus?.enrolledAt;
    return null == r && null == u
        ? eC(e.config.expiresAt, t.config.expiresAt, 0)
        : null != r && null == u
          ? eo
          : null == r && null != u
            ? 1
            : eC(r, u, 0);
}
function ef(e, t, n) {
    return eC(e.config.expiresAt, t.config.expiresAt, 1);
}
function eA(e, t) {
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
function eE(e, t) {
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
let eT = 221552 == n.j ? {} : null,
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
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e_,
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
                (0, et.iM)(n, er.Li.RENEWABLE_END_DATE) && r.set(n.id, ((u = n.id), a().v3(`${t}:${u}`) >>> 0));
            }
            return r;
        })(i, r.currentUserId, r.isRenewableEndDateSortEnabled),
        c =
            ((t = (function (e) {
                switch (e) {
                    case er.kL.MOST_RECENT:
                        return ec;
                    case er.kL.RECENTLY_ENROLLED:
                        return ed;
                    case er.kL.EXPIRING_SOON:
                        return ef;
                    case er.kL.SUGGESTED:
                    default:
                        return ea;
                }
            })(u)),
            function (e, n) {
                let u = !(0, j.Ic)(e);
                return !(0, j.Ic)(n) !== u ? (u ? eo : 1) : t(e, n, r, s);
            });
    return i.sort(c);
}
function eC(e, t, n) {
    return e.localeCompare(t) * (0 === n ? eo : 1);
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
function eO(e) {
    let t,
        n,
        r,
        u,
        l,
        o,
        s,
        a,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT,
        {
            quests: d,
            excludedQuests: f,
            isFetchingCurrentQuests: A,
            hasFetched: E,
        } = es({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
        T = new Map(d.map((e) => [e.id, e])),
        _ =
            ((t = (function () {
                let e = (0, I.bG)([S.A], () => S.A.getQuestHomeHero()),
                    { isShelfEnabled: t } = e4(e),
                    n = (0, I.bG)([P.default], () => P.default.getCurrentUser()?.id ?? null),
                    { enabled: r } = F.useConfig({ location: er.rE.QUEST_HOME_MOBILE }),
                    { enabled: u } = q.NN.useConfig({ location: er.rE.QUEST_HOME_MOBILE });
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
                let e = eI(d, c, t).map((e) => e.id);
                return (
                    (n.current = e),
                    (r.current = c.sortMethod),
                    (u.current = c.filters),
                    (l.current = d.length),
                    (o.current = t),
                    e
                );
            }, [d, c, t])),
        C =
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
                            : eC(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0);
                    })
                    .map((e) => e.id);
                return ((a.current = e), e);
            }, [s])),
        p = [];
    for (let t of "all" === e ? _ : C) {
        let n = T.get(t),
            r = null != n && "all" === e && c.removeExpiredQuests && (0, j.Ic)(n) && !(0, Y.GR)(n.userStatus);
        null == n || r || p.push(n);
    }
    return { quests: p, excludedQuests: f, isFetchingCurrentQuests: A, hasFetched: E };
}
function em() {
    let e = i.useRef(!1),
        t = (0, I.yK)([Q.A], () => Array.from(Q.A.claimedQuests.values())),
        n = (0, I.bG)([Q.A], () => Q.A.isFetchingClaimedQuests);
    return (
        i.useEffect(() => {
            n || e.current || ((e.current = !0), (0, D.HA)());
        }, [n]),
        { claimedQuests: t, isFetchingClaimedQuests: n }
    );
}
function eg(e, t) {
    let n = ev(e),
        r = (0, Z.ks)(e.config),
        u = (0, Z.KK)(e.config),
        l = t !== J.MA.INELIGIBLE;
    return !n && r && u && l;
}
function eN(e) {
    return (0, I.bG)(
        [Q.A],
        () => {
            let t = Q.A.getQuest(e);
            return null == t ? null : (0, Z.b)(t.config);
        },
        [e],
    );
}
function ev(e) {
    return (0, I.bG)([Q.A], () => null != e && Q.A.isQuestExpired(e.id), [e]);
}
function eh() {
    return (0, I.bG)([Q.A], () => Q.A.isQuestAccessSuspended, []);
}
function eL(e, t, n) {
    let r = (0, I.bG)([h.A], () => h.A.getChannel(t?.channelId) ?? null),
        u = (0, I.bG)([Q.A], () => null != Q.A.questEnrollmentBlockedUntil, []),
        l = (0, I.bG)([P.default], () => P.default.getCurrentUser()?.id),
        i = (0, I.bG)([Q.A], () => null != e && Q.A.isQuestExpired(e.id), [e]);
    if (null == e || u || i || l === n) return !1;
    let o = e.userStatus?.claimedAt != null,
        s = (0, et.Ll)(t, r);
    return !o || !!s;
}
function eP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
        n = (0, I.bG)([N.default], () => N.default.locale);
    return i.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
}
function eb(e) {
    let { quest: t, content: n, ctaContent: r, sourceQuestContent: u } = e,
        l = (0, X.wW)();
    return i.useCallback(() => {
        t.id === er.Fw
            ? window.open(M.A.getArticleURL(eu.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
            : (0, z.pu)(t, { content: n, ctaContent: r, impressionId: l(), sourceQuestContent: u });
    }, [t, n, r, l, u]);
}
function eR(e) {
    return (0, I.bG)([Q.A], () => Q.A.isProgressingOnDesktop(e.id));
}
function ey(e) {
    return i.useMemo(() => (0, ee.YL)(e), [e]);
}
function eM(e) {
    let t,
        n = eR(e),
        r = ey(e),
        u =
            ((t = (0, I.bG)([Q.A], () => Q.A.getOptimisticProgress(e.id, f.n.WATCH_VIDEO))),
            i.useMemo(() => (0, en.J$)(e), [e, t]));
    return n || r || u;
}
let ew = (e) => {
    let t = i.useCallback(() => (0, ee.Yh)(e), [e]),
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
function eU(e) {
    return i.useMemo(() => (0, ee.JC)(e), [e]);
}
function ek(e) {
    let t = i.useMemo(() => {
        let t = new Set();
        for (let n of e) {
            let e = (0, ee.F9)(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
    return (0, m.A)(t);
}
function eD(e) {
    let t = (0, I.bG)([Q.A], () => Q.A.quests),
        n = ek(Array.from(t.values())),
        r = i.useMemo(() => {
            let n = (0, et.$e)(t, er.zO);
            return (0, $.BM)(n, e);
        }, [e, t, n]);
    return ev(r) ? null : r;
}
function eQ(e) {
    return i.useMemo(
        () => ({
            handleComplete: () => (0, D.Yb)(e),
            handleProgress: (t) => (0, D.Yb)(e, t),
            handleResetStatusClick: () => (0, D.UZ)(e),
            handleResetDismissibilityClick: () => (0, D.Gt)(e),
            handleOverridePreviewClick: (t) => (0, D.L4)(t, e),
            handleResetHasBeenSeenClick: () => (0, D.qV)(d.p.QUEST, [e]),
        }),
        [e],
    );
}
function eG() {
    let { fetching: e, accounts: t } = (0, I.cf)([L.A], () => ({
            fetching: L.A.isFetching(),
            accounts: L.A.getAccounts(),
        })),
        {
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: u,
        } = i.useMemo(() => {
            let e = t.filter((e) => !1 === e.revoked),
                n = e.filter((e) => e.type === eu.fg2.XBOX),
                r = e.filter((e) => e.type === eu.fg2.PLAYSTATION),
                u = n.concat(r);
            return { xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
        }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: u };
}
function eq(e) {
    let { questId: t, preview: n, beforeRequest: r, afterRequest: u } = e,
        [l, o] = i.useState(!1),
        s = (0, I.bG)([L.A], () => L.A.getAccounts()),
        a = (0, k.O)((e) => e.clearErrorHintsByType),
        c = i.useCallback((e) => k.O.getState().setErrorHints(t, e), [t]);
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
                    ((e = await (0, D.vD)(t, n)), c(e.errorHints));
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
        { xboxAndPlaystationAccounts: n } = eG(),
        r = eM(t),
        u = 0 === n.length;
    return (0, ee.g5)(t) && u && !r;
}
function eH() {
    let { xboxAccounts: e, playstationAccounts: t } = eG(),
        n = e.length > 0,
        r = t.length > 0,
        u = M.A.getArticleURL(eu.MVz.QUEST_HOW_TO_PLAYSTATION),
        l = M.A.getArticleURL(eu.MVz.QUEST_HOW_TO_XBOX),
        i = ei.intl.format(ei.t.beN4DG, { psHelpdeskArticle: u, xboxHelpdeskArticle: l }),
        o = ei.intl.format(ei.t.HVS7nh, { helpdeskArticle: r ? u : l });
    return { message: (n && !r) || (!n && r) ? o : i, xboxURL: l, playstationURL: u };
}
var eF =
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
        u = ew(e).percentComplete > 0;
    return r ? 4 : n ? 3 : u && t ? 2 : 1 * !!t;
}
function eV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, I.bG)([N.default], () => N.default.locale),
        { percentComplete: r } = ew(e),
        u = eU(e),
        l = null != u ? u.percentComplete : r,
        i = 100 * l,
        o = null == u || t ? (0, T.l9)(n, l, { roundingMode: "floor" }) : `${u?.progress}/${u?.target}`;
    return { completedRatio: l, percentComplete: i, completedRatioDisplay: o };
}
function eW(e) {
    return [(0, I.bG)([Q.A], () => Q.A.selectedTaskPlatform(e)), i.useCallback((t) => (0, D.lx)(e, t), [e])];
}
function eX(e, t) {
    let [n, r] = eW(e.id),
        u = i.useMemo(() => (0, z.UR)(e), [e]),
        l = u.includes(er.fO.DESKTOP),
        o = u.includes(er.fO.CONSOLE),
        s = eR(e),
        a = ey(e),
        d = i.useMemo(
            () =>
                (0, c.YW)(t)
                    .with({ percentComplete: 0 }, () => null)
                    .with({ taskType: f.n.PLAY_ON_DESKTOP }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ACTIVITY }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.WATCH_VIDEO_ON_MOBILE }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.STREAM_ON_DESKTOP }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.PLAY_ON_XBOX }, () => er.fO.CONSOLE)
                    .with({ taskType: f.n.PLAY_ON_PLAYSTATION }, () => er.fO.CONSOLE)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_GAME }, () => er.fO.DESKTOP)
                    .with({ taskType: f.n.ACHIEVEMENT_IN_ACTIVITY }, () => er.fO.DESKTOP)
                    .exhaustive(),
            [t],
        ),
        A = s ? er.fO.DESKTOP : a ? er.fO.CONSOLE : null;
    return [
        i.useMemo(
            () =>
                (0, c.YW)({ lastPlatformProgress: d, currentProgressingPlatform: A, selectedPlatform: n })
                    .with({ currentProgressingPlatform: er.fO.CONSOLE }, () => G.X0.CONSOLE)
                    .with({ currentProgressingPlatform: er.fO.DESKTOP }, () => G.X0.DESKTOP)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: er.fO.CONSOLE }, () => G.X0.CONSOLE)
                    .with({ currentProgressingPlatform: null, lastPlatformProgress: er.fO.DESKTOP }, () => G.X0.DESKTOP)
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: er.fO.CONSOLE,
                        },
                        () => G.X0.CONSOLE,
                    )
                    .with(
                        {
                            currentProgressingPlatform: null,
                            lastPlatformProgress: null,
                            selectedPlatform: er.fO.DESKTOP,
                        },
                        () => G.X0.DESKTOP,
                    )
                    .with(
                        { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
                        () => (o && l ? G.X0.SELECT : o ? G.X0.CONSOLE : G.X0.DESKTOP),
                    )
                    .exhaustive(),
            [o, l, d, A, n],
        ),
        u,
        r,
    ];
}
function ex(e) {
    let t = eU(e),
        n = ew(e),
        [r] = eX(e, n),
        u = ev(e),
        l = e.userStatus?.enrolledAt != null,
        i = e.userStatus?.completedAt != null,
        o = f.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
        s = 0 === n.percentComplete,
        a = l && !i && !u && null == t && (o || (s && r === G.X0.DESKTOP)),
        c = (0, w.isWeb)() && a && !(0, z.W1)(e),
        d = (0, w.isMac)() && n.taskType === f.n.STREAM_ON_DESKTOP && a,
        A = [];
    return (d && A.push(ei.intl.string(ei.t.MFGxFM)), c && A.push(ei.intl.string(ei.t.BV6xDm)), A);
}
function eY(e) {
    return (0, I.bG)([Q.A], () => Q.A.quests).get(e) ?? null;
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
                    ? (0, W.Zu)({ mode: e, prevMode: u, questContent: l, questId: t, sourceQuestContent: o })
                    : null != n &&
                      null != r &&
                      (0, W.Wc)({
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
    let n = (0, I.bG)([Q.A], () => Q.A.getQuest(e), [e]),
        r = (0, C.Ay)();
    return i.useMemo(() => {
        if (null == n) return null;
        let e = t ?? ((0, _.M)(r) ? eu.NJ8.DARK : eu.NJ8.LIGHT);
        return (0, B.tW)(n, B.fY.COSPONSOR_LOGO_TYPE, e);
    }, [r, t, n]);
}
function eJ(e) {
    let t = (0, I.bG)([P.default], () => P.default.getCurrentUser()),
        n = (0, Z.mq)(e, t),
        r = (0, Z.k5)(e),
        u = (0, Z.$5)(e),
        l = (0, Z.Y7)(e),
        i = (0, Z.JX)(e),
        o = (0, U.TW)(t, el.PremiumTypes.TIER_2);
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
    let t = (0, ee.TP)(e);
    return { launchInGameActivity: (0, p.A)({ applicationId: t }) };
}
function eZ() {
    return (0, I.yK)([Q.A], () => [...Q.A.quests.values()]).some((e) => e.preview);
}
function e0() {
    return eZ();
}
function e1(e) {
    let t = e?.userStatus != null && (0, Y.gO)(e.userStatus, G.uF.ACTIVITY_PANEL),
        n = ev(e ?? null),
        r = e?.userStatus?.claimedAt != null,
        u = (0, I.bG)([Q.A], () => null != Q.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !r && !u;
}
function e2() {
    let e = (0, I.yK)([Q.A], () => [...Q.A.quests.values()]);
    return i.useMemo(() => e.filter((e) => e.preview), [e]);
}
function e5() {
    let e = er.pc;
    return i.useMemo(
        () =>
            e.map((e) => {
                let [t, n] = e;
                return { heading: (0, x.fx)(t), options: n };
            }),
        [e],
    );
}
function e7() {
    return i.useMemo(() => Object.keys(er.kL).map((e) => ({ label: (0, x.Js)(er.kL[e]), value: er.kL[e] })), []);
}
function e9(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: r } = e,
        u = i.useRef(null),
        l = i.useRef(null);
    (i.useEffect(() => {
        (b.default.track(eu.HAw.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t, previous_sort_method: u.current }),
            (u.current = t));
    }, [t]),
        i.useEffect(() => {
            let e = n.map((e) => e.filter);
            (b.default.track(eu.HAw.QUEST_HOME_FILTERS_CHANGED, {
                filters: e,
                previous_filters: l.current ?? [],
                num_quests_visible: r,
            }),
                (l.current = e));
        }, [n, r]));
}
function e8(e) {
    return i.useMemo(() => P.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
}
function e6(e, t) {
    let n = e.userStatus?.completedAt != null;
    return e.userStatus?.enrolledAt != null && !n && Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t;
}
function e4(e) {
    let t = (0, I.bG)([Q.A], () => Q.A.quests),
        n = e?.questIds;
    return i.useMemo(() => {
        if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
        let e = n
            .map((e) => t.get(e))
            .filter(y.Vq)
            .filter((e) => !(0, j.Ic)(e));
        return e.length <= 1 ? { shelfQuests: [], isShelfEnabled: !1 } : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
}
function e3(e) {
    let t = v.H1.useSetting(),
        n = e.userStatus?.enrolledAt != null;
    return i.useCallback(() => {
        if (n) return;
        let r = t ? E.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : E.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
        (0, g.hs)(r, { quest_id: e.id });
    }, [t, n, e.id]);
}
(R.A.Millis.HOUR, R.A.Millis.MINUTE);
