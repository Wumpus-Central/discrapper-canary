l.r(t), l.d(t, { default: () => tf });
var s = l(627968),
    a = l(64700),
    r = l(873263),
    i = l(17928),
    n = l(726249),
    c = l(736056),
    o = l(919760),
    d = l(664121),
    u = l(548411),
    g = l(534514),
    h = l(711111),
    m = l(770472),
    f = l(737823),
    A = (l(749638), l(876622)),
    C = l(521974),
    x = l(282026),
    S = l(449054);
class y {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, l) {
        this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(l)), this.guildIds.add(t);
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (S.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
var I = l(965660),
    j = l(601193),
    b = l(691540),
    E = l(857250),
    v = l(97483),
    R = l(652215),
    N = l(375708);
l(321073);
var p = l(636537),
    k = l(319400),
    G = l(228366),
    F = l(324580);
async function L(e, t) {
    let { categoryId: l, languageCode: s, offset: a, limit: r, withCounts: i } = t;
    G.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: l, languageCode: s });
    try {
        let t = await p.Bo.get({
                url: R.Rsh.GUILD_DISCOVERY_SEARCH,
                query: {
                    query: e,
                    category_id: l === F.Iq ? null : l,
                    offset: a,
                    limit: r,
                    language_code: s,
                    with_counts: i,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = t.body.guilds.map(I.uk),
            c = t.body.total_count;
        if (i) {
            let l = [];
            t.body.categories?.slice(0, 8).forEach((e) => {
                let { id: t, count: s } = e;
                l.push([Number(t), s]);
            }),
                G.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: l });
        }
        G.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            query: e,
            categoryId: l,
            languageCode: s,
            guilds: n,
            total: c,
        });
    } catch (a) {
        let t = new k.LG(a);
        S.jb({ categoryId: l, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
            i && G.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: [] }),
            G.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                query: e,
                categoryId: l,
                languageCode: s,
                error: a,
            });
    }
}
let w = function (e) {
        G.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    T = function () {
        G.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var _ = l(823448),
    D = l(351022);
class U {}
let q = new (class extends U {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: s, offset: a } = e;
        D.A.getIsFetching({ query: t, categoryId: l, languageCode: s }) ||
            (D.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: s }) &&
                (S.br({ withCounts: !1, offset: a }),
                await L(t, { categoryId: l, languageCode: s, offset: a, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: s } = e,
            a = D.A.getIsFetching({ query: t, categoryId: l, languageCode: s }),
            r = D.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: s });
        a ||
            r ||
            (S.br({ withCounts: !1, offset: 0 }),
            await L(t, { categoryId: l, languageCode: s, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: l, categoryId: s, languageCode: a } = e;
        if ("" === t.trim()) return;
        let r = _.A.getIsFetchingCounts(t),
            i = _.A.getIsFetchingCounts(t);
        r ||
            i ||
            (x.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            S.fd(l, s),
            S.br({ withCounts: !0, offset: 0 }),
            await L(t, { categoryId: s, languageCode: a, offset: 0, limit: 12, withCounts: !0 }),
            x.A.setState({ resultsQuery: t }));
    };
})();
var V = l(460760),
    M = l(533129),
    O = l(403362),
    Q = l(688713),
    H = l(902119),
    P = l(701508),
    B = l(979590),
    z = l(783531),
    Y = l(503698),
    K = l.n(Y),
    Z = l(269115),
    W = l(289873),
    X = l(781696),
    J = l(834730),
    $ = l(518009),
    ee = l(442433),
    et = l(736653),
    el = l(573435),
    es = l(635350),
    ea = l(503469);
let er = a.memo(function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: K()(t, ea.En) });
});
var ei = l(873174),
    en = l(717421),
    ec = l(775602);
let eo = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    ed = function (e) {
        let { animate: t, state: l, cleanUp: r, children: n } = e,
            c = (0, i.bG)([ec.A], () => ec.A.useReducedMotion),
            o = a.useMemo(
                () =>
                    !1 === t || c
                        ? { opacity: 1 }
                        : l === $.wL.ENTERED || l === $.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: eo }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: eo,
                                onRest: () => {
                                    r();
                                },
                            },
                [t, r, c, l],
            ),
            d = (0, en.z)(o);
        return (0, s.jsx)(ei.animated.div, { style: d, className: ea.Hp, children: n });
    };
var eu = l(714991),
    eg = l(776231),
    eh = l(486020),
    em = l(939249),
    ef = l(26430),
    eA = l(517905),
    eC = l(889452);
let ex = function (e) {
    let { className: t, guildId: l } = e,
        r = a.useRef(null),
        i = a.useCallback((e, t) => {
            e.stopPropagation(), t.onClick(e);
        }, []);
    return (0, s.jsx)(eA.A, {
        guildId: l,
        position: "left",
        targetElementRef: r,
        children: (e) =>
            (0, s.jsx)(em.D, {
                ...e,
                innerRef: r,
                className: t,
                onClick: (t) => i(t, e),
                children: (0, s.jsx)("div", {
                    className: eC.K,
                    children: (0, s.jsx)(ef._, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var eS = l(302524),
    ey = l(937495),
    eI = l(517061);
function ej(e) {
    let { guild: t, onClick: r, onView: i } = e,
        [n, c] = a.useState(!1),
        [o, d] = a.useState(!1),
        [u, h] = a.useState(!1),
        m = a.useRef(null),
        f = a.useCallback(async () => {
            d(!0);
            try {
                await r(t.id);
            } finally {
                d(!1);
            }
        }, [t.id, r]),
        A = a.useCallback(
            (e) => {
                e && !n && (c(!0), i?.(t.id));
            },
            [t.id, n, i],
        ),
        C = a.useCallback(
            (e) => {
                (0, ee.L3)(e, async () => {
                    let { default: e } = await l.e("39572").then(l.bind(l, 235327));
                    return (l) => (0, s.jsx)(e, { ...l, guild: t });
                });
            },
            [t],
        ),
        x = (0, et.Ay)(),
        S = t.features.has(R.GuildFeatures.HUB),
        y = a.useMemo(() => {
            let e = eh.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, eg.mZ)() });
            if (null != e) return e;
            if (S) return "/assets/c47298d5d6eac3b2.svg";
            switch (x) {
                case R.NJ8.DARK:
                    return ey;
                case R.NJ8.LIGHT:
                    return eI;
            }
        }, [t.discoverySplash, t.id, S, x]),
        I = a.useMemo(() => eh.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, s.jsxs)("div", {
        className: eS.kL,
        children: [
            o &&
                (0, s.jsx)("div", {
                    className: eS.dc,
                    children: (0, s.jsx)(W.y, { type: W.y.Type.PULSING_ELLIPSIS, className: eS.u1 }),
                }),
            (0, s.jsx)(Z.L, {
                innerRef: m,
                onChange: A,
                active: !n,
                threshold: 0.55,
                children: (0, s.jsxs)(es.A, {
                    ref: m,
                    className: eS.Nr,
                    onClick: f,
                    disabled: o,
                    onContextMenu: C,
                    "aria-label": N.intl.string(N.t["M9wQ+f"]),
                    children: [
                        (0, s.jsxs)("div", {
                            className: eS.wx,
                            children: [
                                (0, s.jsx)("div", {
                                    className: K()(eS.vK, { [eS.Kc]: u }),
                                    children: (0, s.jsx)("img", {
                                        src: y,
                                        alt: "",
                                        className: eS._e,
                                        onLoad: () => h(!0),
                                    }),
                                }),
                                (0, s.jsx)(ex, { className: eS.gw, guildId: t.id }),
                                (0, s.jsx)("div", {
                                    className: eS.Kk,
                                    children: (0, s.jsx)(el.Ay, {
                                        mask: el.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, s.jsx)("div", {
                                            className: eS.SA,
                                            children: (0, s.jsx)(el.Ay, {
                                                mask: el.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, s.jsx)("img", { src: I, alt: "", className: eS.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eS.gI,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: eS.DD,
                                    children: [
                                        (0, s.jsx)(eu.A, {
                                            className: eS.n2,
                                            guild: t,
                                            tooltipColor: X.ST.Colors.PRIMARY,
                                        }),
                                        (0, s.jsx)(g.D, {
                                            variant: "heading-md/semibold",
                                            className: eS.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(J.E, {
                                    className: eS.h_,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, s.jsxs)("div", {
                                    className: eS.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, s.jsxs)("div", {
                                                className: eS.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: eS.SP }),
                                                    (0, s.jsx)(J.E, {
                                                        className: eS.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: N.intl.format(N.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, s.jsxs)("div", {
                                                className: eS.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: eS.PB }),
                                                    (0, s.jsx)(J.E, {
                                                        className: eS.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: N.intl.format(N.t.zRl6XR, { count: t.memberCount }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eb(e) {
    let { guildId: t, onClick: l, onView: a } = e,
        r = (0, i.bG)([D.A], () => D.A.getGuild(t));
    return null == r ? null : (0, s.jsx)(ej, { guild: r, onClick: l, onView: a });
}
function eE(e) {
    let { guildId: t, index: l, onClick: r, onView: i } = e,
        n = a.useRef(null == t),
        c = a.useCallback(
            (e, t, l, a) =>
                null == t.guildId
                    ? (0, s.jsx)(ed, { state: l, cleanUp: a, children: (0, s.jsx)(er, { className: eS.qf }) }, e)
                    : (0, s.jsx)(
                          ed,
                          {
                              state: l,
                              cleanUp: a,
                              animate: n.current,
                              children: (0, s.jsx)(eb, { guildId: t.guildId, onClick: r, onView: i }),
                          },
                          e,
                      ),
            [r, i],
        ),
        o = a.useCallback((e) => e.guildId ?? `${e.index}`, []),
        d = a.useMemo(() => [{ guildId: t, index: l }], [t, l]);
    return (0, s.jsx)("div", {
        className: eS.NK,
        children: (0, s.jsx)($.F, { items: d, renderItem: c, getItemKey: o }),
    });
}
let ev = a.memo(eb);
var eR = l(983917);
let eN = { page: R.liQ.GUILD_DISCOVERY, object: R.ZSU.CARD, section: R.JJy.DISCOVER_POPULAR };
function ep(e) {
    let { tab: t, guildIds: l, loading: r, onScroll: i, onGuildCardClick: n, onGuildCardSeen: c } = e,
        o = (0, I.kc)(t),
        d = (0, I.Ot)(t),
        u = (0, I.UW)(t),
        h = (0, I.Ub)(t),
        m = a.useMemo(() => {
            let e = r ? 30 : l.length,
                t = [];
            for (let a = 0; a < e; a++)
                t.push(
                    (0, s.jsx)(
                        eE,
                        { guildId: l[a] ?? null, index: a, onClick: (e) => n(e, a, h, eN), onView: (e) => c(e, h) },
                        l[a] ?? a,
                    ),
                );
            return t;
        }, [h, l, r, n, c]);
    return (0, s.jsxs)(z.A, {
        onScroll: i,
        children: [
            (0, s.jsx)(P.A, { title: o, description: d, children: (0, s.jsx)(H.A, {}) }),
            (0, s.jsxs)(B.A, {
                children: [
                    (0, s.jsx)(g.D, {
                        className: eR.G,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: u,
                    }),
                    (0, s.jsx)("div", { className: eR.Q, children: m }),
                ],
            }),
        ],
    });
}
var ek = l(66834),
    eG = l(101277),
    eF = l(661531),
    eL = l(821609),
    ew = l(192308),
    eT = l(943586);
let e_ = (e) => {
    let { hasHub: t } = e;
    return (0, s.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, s.jsx)("div", {
                className: eT.zc,
                children: (0, s.jsx)(eG.P, { size: "md", color: eF.A.colors.WHITE.css }),
            }),
            (0, s.jsx)(J.E, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: eT.wx,
                children: t ? N.intl.string(N.t.hsSHh8) : N.intl.string(N.t.Wf6iij),
            }),
            (0, s.jsx)(J.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eT.__invalid_description,
                children: t ? N.intl.string(N.t.FZ2J3Y) : N.intl.string(N.t.TvHcv6),
            }),
            (0, s.jsx)("div", { className: eT.rQ }),
            (0, s.jsx)(eL.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, ew.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            l.e("8516"),
                            l.e("97804"),
                            l.e("7265"),
                            l.e("97641"),
                            l.e("90496"),
                        ]).then(l.bind(l, 401155));
                        return (t) => (0, s.jsx)(e, { ...t });
                    }),
                text: t ? N.intl.string(N.t.IyjHD9) : N.intl.string(N.t["KU/aN4"]),
            }),
        ],
    });
};
var eD = l(71393),
    eU = l(275552);
let eq = function (e) {
    let { onScroll: t } = e,
        l = (0, i.yK)([eD.A], () => eD.A.getGuildsArray().filter((e) => e.features.has(R.GuildFeatures.HUB))),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    ...e,
                    presenceCount: void 0,
                    memberCount: void 0,
                    premiumSubscriptionCount: void 0,
                    emojis: void 0,
                })),
            [l],
        );
    return (0, s.jsxs)(z.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(P.A, {
                title: N.intl.string(N.t.X5xPlb),
                description: N.intl.string(N.t["F/IQCI"]),
                children: (0, s.jsx)(H.A, {}),
            }),
            (0, s.jsxs)(B.A, {
                children: [
                    l.length > 0
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(g.D, {
                                      className: eR.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: N.intl.string(N.t["2DfZIQ"]),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: eR.Q,
                                      children: [
                                          r.map((e) =>
                                              (0, s.jsx)(
                                                  ej,
                                                  { guild: e, onClick: () => ek.A.transitionToGuildSync(e.id) },
                                                  e.id,
                                              ),
                                          ),
                                          (0, s.jsx)(e_, { hasHub: !0 }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, s.jsx)("div", { className: eR.Q, children: (0, s.jsx)(e_, { hasHub: !1 }) }),
                    (0, s.jsx)("div", { className: eU.yF }),
                    (0, s.jsxs)("div", {
                        className: eU.ed,
                        children: [
                            (0, s.jsxs)(J.E, {
                                className: eU.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [N.intl.string(N.t.O1k9XX), " "],
                            }),
                            (0, s.jsx)(J.E, {
                                className: eU.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: N.intl.string(N.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
function eV(e) {
    let { onScroll: t, onGuildCardSeen: l, onGuildCardClick: r } = e,
        n = (0, i.bG)([D.A], () => D.A.getGuildIds({ categoryId: F.Iq }) ?? F.VX),
        c = (0, i.bG)([D.A], () => D.A.getIsFetching({ categoryId: F.Iq }) ?? !0);
    return (
        a.useEffect(() => {
            Q.A.fetchFeaturedGuilds();
        }, []),
        (0, s.jsx)(ep, {
            tab: F.o.FEATURED,
            guildIds: n,
            loading: c,
            onScroll: t,
            onGuildCardSeen: l,
            onGuildCardClick: r,
        })
    );
}
function eM(e) {
    let { tab: t, onScroll: l, onGuildCardSeen: r, onGuildCardClick: n } = e,
        c = (0, I.Ub)(t),
        o = (0, i.bG)([D.A], () => D.A.getGuildIds({ categoryId: c }) ?? F.VX),
        d = (0, i.bG)([D.A], () => D.A.getIsFetching({ categoryId: c }) ?? !0);
    return (
        a.useEffect(() => {
            Q.A.fetchCategoryFeaturedGuilds({ categoryId: c });
        }, [c]),
        (0, s.jsx)(ep, { tab: t, guildIds: o, loading: d, onScroll: l, onGuildCardSeen: r, onGuildCardClick: n })
    );
}
function eO(e) {
    let { selectedTab: t, onScroll: l, onGuildCardSeen: r, onGuildCardClick: i } = e;
    switch (
        (a.useEffect(() => {
            let e = (0, I.Ub)(t);
            (0, M.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case F.o.FEATURED:
            return (0, s.jsx)(eV, { tab: t, onScroll: l, onGuildCardClick: i, onGuildCardSeen: r });
        case F.o.GAMING:
        case F.o.MUSIC:
        case F.o.ENTERTAINMENT:
        case F.o.TECH:
        case F.o.EDUCATION:
            return (0, s.jsx)(eM, { tab: t, onScroll: l, onGuildCardClick: i, onGuildCardSeen: r }, t);
        case F.o.HUBS:
            return (0, s.jsx)(eq, { onScroll: l });
        default:
            (0, O.xb)(t);
    }
}
var eQ = l(735438),
    eH = l.n(eQ),
    eP = l(92008),
    eB = l(770178),
    ez = l(174459),
    eY = l(773669),
    eK = l(997590);
function eZ(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eK.A];
    return e === F.Iq ? N.intl.string(N.t.Omu0fS) : t.getCategoryName(e);
}
function eW(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([eK.A], () => eZ(t, [eK.A]));
}
l(667532);
var eX = l(499118);
function eJ() {
    let e = x.A.useField("fetchedQuery"),
        t = x.A.useField("resultsInitialCategoryId"),
        l = x.A.useField("languageCode"),
        s = (0, i.bG)([D.A], () => (null == t ? 0 : (D.A.getTotal({ categoryId: t, query: e, languageCode: l }) ?? 0))),
        r = (0, i.bG)([D.A], () => D.A.getTotal({ categoryId: F.Iq, query: e, languageCode: l }) ?? 0),
        n = (0, i.bG)([eX.A], () => eX.A.getVisibleTabs());
    return a.useMemo(() => {
        if (null == n) return null;
        if (null == t) return n;
        let e = [],
            l = new Set();
        for (let [t, s] of n) l.add(t), e.push([t, s]);
        let a = !1;
        return (
            l.has(F.Iq) || (l.add(F.Iq), e.unshift([F.Iq, r]), (a = !0)),
            l.has(t) || (l.add(t), e.push([t, s]), (a = !0)),
            a ? e : n
        );
    }, [n, t, r, s]);
}
var e$ = l(65283);
function e0(e) {
    let { categoryId: t, loadId: l } = e;
    x.A.setState({ categoryId: t }),
        q.loadCategoryResults({
            loadId: l,
            categoryId: t,
            query: x.A.getField("fetchedQuery"),
            languageCode: x.A.getField("languageCode"),
        });
}
function e1(e) {
    let { loadId: t, categoryId: l, count: r } = e,
        i = a.useCallback(() => {
            e0({ categoryId: l, loadId: t });
        }, [l, t]),
        n = x.A.useField("categoryId") === l,
        c = r.toLocaleString(eY.default.locale),
        o = eW({ categoryId: l });
    return (0, s.jsxs)(em.D, {
        onClick: i,
        className: K()(e$.L1, { [e$.wH]: n }),
        children: [
            (0, s.jsx)(J.E, { className: e$.UU, variant: "text-sm/medium", color: "text-strong", children: o }),
            (0, s.jsx)(J.E, { className: e$.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
let e2 = function (e) {
    let { loadId: t } = e,
        l = eJ();
    return null == l
        ? null
        : (0, s.jsx)("div", {
              className: e$.LZ,
              children: l.map((e) => {
                  let [l, a] = e;
                  return (0, s.jsx)(e1, { loadId: t, categoryId: l, count: a }, l);
              }),
          });
};
var e3 = l(191711),
    e5 = l(429117);
function e6(e) {
    let { loadId: t } = e,
        l = x.A.useField("categoryId"),
        r = eJ(),
        n = eW({ categoryId: l }),
        c = a.useCallback(
            (e) => {
                e0({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        o = (function (e) {
            let { categoryIds: t } = e;
            return (0, i.cf)([eK.A], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        e[t] = eZ(t, [eK.A]);
                    }),
                    e
                );
            });
        })({
            categoryIds: a.useMemo(
                () =>
                    null == r
                        ? []
                        : r.map((e) => {
                              let [t] = e;
                              return t;
                          }),
                [r],
            ),
        }),
        d = a.useMemo(
            () =>
                null == r
                    ? []
                    : r.map((e) => {
                          let [t, l] = e;
                          return { id: `${t}`, name: o[t] ?? "", count: l };
                      }),
            [r, o],
        );
    return null == r
        ? null
        : (0, s.jsxs)("div", {
              className: e5.k,
              children: [
                  (0, s.jsx)(J.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: N.intl.string(N.t.f09BQJ),
                  }),
                  (0, s.jsx)(e3.A, {
                      items: d,
                      title: n,
                      onSelect: c,
                      selected: `${l}`,
                      "aria-label": N.intl.string(N.t.Ng5cTK),
                      variant: e3.H.FILLED,
                  }),
              ],
          });
}
var e4 = l(922985),
    e9 = l(842503);
let e7 = function (e) {
    let { loadId: t } = e,
        l = x.A.useField("categoryId"),
        r = (0, i.bG)([eK.A], () => eK.A.getCategoryName(l)),
        n = a.useCallback(() => {
            x.A.setState({ categoryId: F.Iq }),
                q.loadCategoryResults({
                    loadId: t,
                    categoryId: F.Iq,
                    query: x.A.getField("fetchedQuery"),
                    languageCode: x.A.getField("languageCode"),
                });
        }, [t]),
        c = l === F.Iq ? N.intl.string(N.t.Ivw1Is) : N.intl.formatToPlainString(N.t["+1WAFb"], { categoryName: r }),
        o = l === F.Iq ? N.intl.string(N.t.aXvEjd) : N.intl.format(N.t.XLioqn, { onClick: n });
    return (0, s.jsxs)("div", {
        className: e4.kL,
        children: [
            (0, s.jsx)("img", { alt: "", src: e9, className: e4.Sl }),
            (0, s.jsx)(g.D, { variant: "heading-xl/semibold", className: e4.wx, children: c }),
            (0, s.jsx)(J.E, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
};
var e8 = l(783878),
    te = l(843395);
function tt(e) {
    let { loadId: t } = e,
        l = (0, i.bG)([eY.default], () => (0, I.Kv)([eY.default])),
        r = x.A.useField("languageCode"),
        n = a.useCallback(
            (e) => {
                x.A.setState({ languageCode: e });
                let l = x.A.getField("fetchedQuery");
                w({ ignoreQueries: [l] }),
                    q.loadCategoryResults({
                        loadId: t,
                        categoryId: x.A.getField("categoryId"),
                        query: l,
                        languageCode: e,
                    });
            },
            [t],
        ),
        c = a.useMemo(() => (0, F.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, s.jsx)("div", {
        className: te.k,
        children: (0, s.jsx)(e8.Z, {
            selectionMode: "single",
            label: N.intl.string(N.t.Ng5cTK),
            hideLabel: !0,
            value: r ?? l,
            options: c,
            onSelectionChange: n,
        }),
    });
}
var tl = l(284402);
let ts = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    ta = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    tr = { page: R.liQ.GUILD_DISCOVERY, object: R.ZSU.CARD, section: R.JJy.DISCOVER_SEARCH },
    ti = eH().throttle(S.Cf, 1e3, { leading: !1, trailing: !0 });
function tn(e) {
    let { loadId: t, onGuildCardSeen: l, onGuildCardClick: r } = e,
        {
            guildIds: n,
            loading: c,
            searchResultsQuery: o,
            loadMore: d,
            searchCategoryId: u,
        } = (function (e) {
            let { loadId: t } = e,
                l = x.A.useField("fetchedQuery"),
                s = x.A.useField("categoryId"),
                r = x.A.useField("languageCode"),
                n = a.useMemo(() => ({ categoryId: s, query: l, languageCode: r }), [s, r, l]),
                c = (0, i.bG)([D.A], () => D.A.getGuildIds(n) ?? F.VX),
                o = (0, i.bG)([D.A], () => D.A.getIsFetching(n) ?? !1),
                d = x.A.useField("resultsQuery"),
                u = d !== l,
                g = a.useCallback(() => {
                    let e = D.A.getGuildIds(n),
                        l = D.A.getTotal(n);
                    if (null == e || null == l) return;
                    let s = D.A.getIsFetching(n),
                        a = D.A.getIsInitialFetchComplete(n);
                    s ||
                        !a ||
                        e.length >= l ||
                        q.loadMoreCategoryResults({
                            loadId: t,
                            offset: e.length,
                            categoryId: x.A.getField("categoryId"),
                            query: x.A.getField("fetchedQuery"),
                            languageCode: x.A.getField("languageCode"),
                        });
                }, [t, n]);
            return a.useMemo(
                () => ({ guildIds: c, loading: u || o, searchResultsQuery: d, loadMore: g, searchCategoryId: s }),
                [c, u, o, d, g, s],
            );
        })({ loadId: t }),
        g = 0 === n.length && !c,
        h = a.useContext(ez.AnalyticsContext),
        [m, f] = a.useState((0, I.YP)()),
        [A, C] = a.useState(!0),
        S = a.useRef(A),
        [y, j] = a.useState(3),
        b = a.useRef(y),
        E = a.useRef(null),
        v = a.useCallback(
            (e) => {
                null == e || g || c || (336 * (n.length / y) <= e.height && d());
            },
            [g, c, n.length, y, d],
        ),
        R = a.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let l = t.width;
                l < 1024 && S.current ? ((S.current = !1), C(!1)) : l > 1024 && !S.current && ((S.current = !0), C(!0));
                let s = 1;
                for (l -= 450 * !!A, l -= 280; l > 0; ) (l -= 264), (s += 1);
                s !== b.current && ((b.current = s), j(s)), v(t);
            },
            [A, v],
        ),
        N = (0, eB.w)(R, [A, v]);
    a.useEffect(() => {
        f((0, I.YP)());
    }, [o]),
        a.useEffect(() => {
            ti({
                loadId: t,
                searchId: m,
                query: o,
                guildResults: n.map(D.A.getGuild).filter(O.Vq),
                analyticsContext: h,
                categoryId: u,
            });
        }, [h, n, t, u, m, o]);
    let p = a.useCallback((e) => l(e, u), [l, u]),
        k = a.useMemo(() => (c ? [n.length, 0] : [n.length]), [n.length, c]),
        G = a.useCallback(
            (e, l, a) => {
                switch (e) {
                    case 0:
                        return (0, s.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: l.left, width: l.width - 16 },
                                className: K()(tl.R_, { [tl.Ze]: !A }),
                                children: [
                                    !A &&
                                        (0, s.jsxs)("div", {
                                            className: tl.eW,
                                            children: [(0, s.jsx)(e6, { loadId: t }), (0, s.jsx)(tt, { loadId: t })],
                                        }),
                                    g && (0, s.jsx)(e7, { loadId: t }),
                                ],
                            },
                            a,
                        );
                    case 1:
                        return (0, s.jsx)(W.y, { className: K()(tl.u1, { [tl.qx]: A }) }, a);
                }
            },
            [g, A, t],
        ),
        L = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = A ? 16 : 68;
                        return g ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error(`[getSectionHeight] Failed for section: ${e}`);
                }
            },
            [g, A],
        ),
        w = a.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return n[t];
                    case 1:
                        return "loading";
                    default:
                        throw Error(`[getItemKey] Failed for section: ${e}`);
                }
            },
            [n],
        ),
        T = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`);
            }
        }, []),
        _ = a.useCallback(
            async (e, t, l, s) => {
                await r(e, t, l, s);
                let a = E.current?.getScrollerState()?.scrollTop;
                null != a && x.A.setState({ scrollPosition: a });
            },
            [r],
        ),
        U = a.useCallback(
            (e, t, l, a) => {
                if (0 !== e) return null;
                {
                    let e = n[t];
                    return (0, s.jsx)(
                        "div",
                        {
                            style: l,
                            children: (0, s.jsx)(ev, {
                                guildId: e,
                                onClick: async (e) => await _(e, t, u, tr),
                                onView: (e) => p(e),
                            }),
                        },
                        a,
                    );
                }
            },
            [n, _, p, u],
        );
    a.useEffect(() => {
        let e = E.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && x.A.setState({ scrollPosition: t });
        };
    }, []),
        a.useLayoutEffect(() => {
            let e = x.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    E.current?.scrollTo({
                        to: e,
                        animate: !1,
                        callback: () => {
                            x.A.setState({ scrollPosition: null });
                        },
                    });
                });
        }, []);
    let V = a.useMemo(
            () =>
                (0, eQ.debounce)(
                    () => {
                        let e = E.current?.getScrollerState();
                        if (null == e) return;
                        let t = e.scrollTop + e.offsetHeight;
                        e.scrollHeight - t < 240 && d();
                    },
                    100,
                    { leading: !0 },
                ),
            [d],
        ),
        M = A ? ts : ta;
    return (0, s.jsx)("div", {
        className: tl.kL,
        ref: N,
        children: (0, s.jsx)(eP.f, {
            ref: E,
            className: tl.kf,
            sections: k,
            columns: y,
            itemGutter: 16,
            padding: M,
            renderItem: U,
            renderSection: G,
            getSectionHeight: L,
            getItemKey: w,
            getItemHeight: T,
            chunkSize: 24,
            onScroll: V,
            renderAccessory: (e) =>
                A
                    ? (0, s.jsx)("div", {
                          className: tl.pz,
                          style: { height: e },
                          children: (0, s.jsxs)("div", {
                              className: tl.wp,
                              children: [
                                  (0, s.jsx)("div", { className: tl.jp, children: (0, s.jsx)(tt, { loadId: t }) }),
                                  (0, s.jsx)(e2, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
var tc = l(488995),
    to = l(595864);
function td() {
    let e,
        t,
        l,
        r = a.useRef((0, I.YP)()),
        { onScroll: i, scrollPosition: n, resetScrollPosition: c } = (0, h.G)(),
        {
            tabs: o,
            selectedTab: p,
            setSelectedTab: k,
        } = ((e = j.A.useField("selectedTab")),
        (t = a.useMemo(
            () =>
                [F.o.FEATURED, F.o.GAMING, F.o.MUSIC, F.o.ENTERTAINMENT, F.o.TECH, F.o.EDUCATION, F.o.HUBS].map(
                    (e) => ({ id: e, label: (0, I.jR)(e) }),
                ),
            [],
        )),
        (l = a.useCallback((e) => {
            j.A.setState({ selectedTab: e });
        }, [])),
        a.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || l(t[0].id);
        }, [e, t, l]),
        { tabs: t, selectedTab: e ?? t[0].id, setSelectedTab: l }),
        G = (0, I.Ub)(p),
        L = !F.R0.has(p),
        {
            searchQuery: _,
            onSearchTextChange: D,
            onClearSearch: U,
            onSearchSubmit: M,
            isSearchVisible: O,
        } = (function (e) {
            let { loadId: t } = e,
                l = j.A.useField("isSearchVisible"),
                s = x.A.useField("query");
            a.useEffect(() => {
                (0, V.Mu)();
            }, []);
            let r = a.useCallback((e) => {
                x.A.setState({ query: e });
            }, []);
            return {
                searchQuery: s,
                onSearchTextChange: r,
                onClearSearch: a.useCallback(() => {
                    S.gp(t),
                        w(),
                        T(),
                        x.A.setState({
                            query: "",
                            fetchedQuery: "",
                            resultsQuery: "",
                            categoryId: F.Iq,
                            resultsInitialCategoryId: null,
                            scrollPosition: null,
                        }),
                        j.A.setState({ isSearchVisible: !1 });
                }, [t]),
                onSearchSubmit: a.useCallback(() => {
                    let e = x.A.getField("query"),
                        l = x.A.getField("fetchedQuery");
                    if ("" === e.trim() || e === l) return;
                    w();
                    let s = x.A.getField("languageCode"),
                        a = x.A.getField("categoryId");
                    x.A.setState({ resultsInitialCategoryId: a }),
                        j.A.setState({ isSearchVisible: !0 }),
                        q.loadCategoryResultsAndCounts({ loadId: t, categoryId: a, query: e, languageCode: s });
                }, [t]),
                isSearchVisible: l,
            };
        })({ loadId: r.current }),
        Q = j.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: H,
            onCollapsedSearchBarClick: P,
            onSearchBarBlur: B,
            tabsClassName: z,
        } = (0, m.p)({
            isSearchBarVisible: L,
            isSearchBarEmpty: "" === _.trim(),
            searchBarState: Q,
            setSearchBarState: (e) => j.A.setState({ searchBarState: e }),
        }),
        Y = x.A.useField("fetchedQuery"),
        K = a.useCallback(
            (e) => {
                k(e), O && U();
            },
            [O, U, k],
        ),
        Z = a.useMemo(
            () =>
                O
                    ? o.filter((e) => {
                          let { id: t } = e;
                          return !F.R0.has(t);
                      })
                    : o,
            [o, O],
        ),
        W = a.useRef(new y(G)),
        { onGuildCardSeen: X, onGuildCardClick: J } = (function (e) {
            let { guildDiscoveryCardSeenManager: t, loadId: l } = e,
                s = a.useCallback(
                    (e, s) => {
                        t.markAsSeen(s, e, l);
                    },
                    [t, l],
                ),
                r = a.useCallback(
                    async (e, t, s, a) => {
                        try {
                            await (0, I.Wl)({ loadId: l, guildId: e, index: t, categoryId: s, analyticsLocation: a });
                        } catch (e) {
                            switch (e?.body?.code) {
                                case R.t02.INVITES_DISABLED:
                                    (0, b.P0)((0, E.o)(N.intl.string(N.t["2LLbj9"]), v.Ck.FAILURE));
                                    return;
                                case R.t02.USER_BANNED:
                                    (0, b.P0)((0, E.o)(N.intl.string(N.t["GzD/aa"]), v.Ck.FAILURE));
                                    return;
                            }
                            throw e;
                        }
                    },
                    [l],
                );
            return a.useMemo(() => ({ onGuildCardSeen: s, onGuildCardClick: r }), [r, s]);
        })({ guildDiscoveryCardSeenManager: W.current, loadId: r.current });
    return (
        a.useEffect(() => {
            W.current.flushSeenGuilds(r.current);
        }, [G]),
        a.useEffect(() => {
            c();
        }, [p, c]),
        a.useEffect(() => {
            O || x.A.setState({ scrollPosition: null });
        }, [O]),
        (0, s.jsxs)("div", {
            className: to.kL,
            children: [
                (0, s.jsxs)(f.Ay, {
                    variant: O ? f.Z5.RELATIVE : f.Z5.OVERLAY,
                    children: [
                        !O && (0, s.jsx)(f.ns, { scrollPosition: n }),
                        O ? (0, s.jsx)(f.XQ, { icon: u.Z, onClick: U }) : (0, s.jsx)(f.T4, { icon: d.R }),
                        !O &&
                            (0, s.jsx)(A.A, {
                                className: z,
                                tabs: Z,
                                selectedTab: p,
                                onTabSelect: K,
                                onAvailableWidthChange: H,
                            }),
                        O &&
                            (0, s.jsx)(g.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: to.ov,
                                children: N.intl.format(N.t.zHdzqW, { query: Y }),
                            }),
                        L &&
                            (0, s.jsx)(C.A, {
                                query: _,
                                placeholder: N.intl.string(N.t["5h0QOP"]),
                                onTextChange: D,
                                onClear: U,
                                onSubmit: M,
                                onCollapsedClick: P,
                                state: O ? tc.GlobalDiscoverySearchBarState.DEFAULT : Q,
                                onBlur: B,
                            }),
                    ],
                }),
                O
                    ? (0, s.jsx)(tn, { loadId: r.current, onGuildCardClick: J, onGuildCardSeen: X })
                    : (0, s.jsx)(eO, { selectedTab: p, onScroll: i, onGuildCardClick: J, onGuildCardSeen: X }),
            ],
        })
    );
}
var tu = l(629258),
    tg = l(726845),
    th = l(285395),
    tm = l(649445);
let tf = function () {
    let e = (0, i.bG)([c.A], () => c.A.hasLoadedExperiments),
        t = tg.A.useField("selectedTab"),
        l = (function (e) {
            switch (e) {
                case tc.GlobalDiscoveryTab.SERVERS:
                    return (0, s.jsx)(td, {});
                case tc.GlobalDiscoveryTab.APPS:
                    return (0, s.jsx)(o.default, {});
                case tc.GlobalDiscoveryTab.QUESTS:
                    return (0, s.jsx)(tu.default, { topLevelRoute: !1 });
                default:
                    (0, O.xb)(e);
            }
        })(t),
        d = (0, r.zy)();
    return (
        a.useEffect(() => {
            let e = d.pathname,
                t = (0, th.j)(e);
            t !== tg.A.getField("selectedTab") && tg.A.setState({ selectedTab: t });
        }, [d.pathname]),
        a.useEffect(() => {
            e && (0, M.tx)({ selectedTab: t });
        }, [t, e]),
        (0, s.jsxs)("section", {
            className: tm.k,
            children: [(0, s.jsx)(n.HI, { location: (0, th.t)(t) }), (0, s.jsx)("div", { className: tm.T }), l],
        })
    );
};
