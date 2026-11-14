(l.r(t), l.d(t, { default: () => ay }));
var a,
    s = l(477900),
    n = l(582128),
    r = l(806163),
    i = l(855986),
    c = l(726249),
    o = l(343446),
    d = l(643932),
    u = l(548411),
    m = l(664121),
    g = l(534514),
    h = l(899647),
    x = l(770472),
    f = l(737823);
l(651266);
var j = l(876622),
    A = l(521974),
    y = l(282026),
    b = l(449054);
class C {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, l) {
        (this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(l)), this.guildIds.add(t));
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (b.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
var S = l(965660),
    v = l(601193),
    N = l(858899),
    p = l(652215),
    E = l(792996);
l(321073);
var I = l(620632),
    R = l(319400),
    G = l(73153),
    T = l(324580);
let k = async function (e, t) {
        let { categoryId: l, languageCode: a, offset: s, limit: n, withCounts: r } = t;
        G.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: l, languageCode: a });
        try {
            let t = await I.Bo.get({
                    url: p.Rsh.GUILD_DISCOVERY_SEARCH,
                    query: {
                        query: e,
                        category_id: -1 === l ? null : l,
                        offset: s,
                        limit: n,
                        language_code: a,
                        with_counts: r,
                    },
                    oldFormErrors: !0,
                    rejectWithError: (0, I.fT)(),
                }),
                i = t.body.guilds.map(S.uk),
                c = t.body.total_count;
            if (r) {
                let l = [];
                (t.body.categories?.slice(0, 8).forEach((e) => {
                    let { id: t, count: a } = e;
                    l.push([Number(t), a]);
                }),
                    G.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: l,
                    }));
            }
            G.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                query: e,
                categoryId: l,
                languageCode: a,
                guilds: i,
                total: c,
            });
        } catch (s) {
            let t = new R.LG(s);
            (b.jb({ categoryId: l, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
                r &&
                    G.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: [],
                    }),
                G.h.dispatch({
                    type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                    query: e,
                    categoryId: l,
                    languageCode: a,
                    error: s,
                }));
        }
    },
    F = function (e) {
        G.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    _ = function () {
        G.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var L = l(823448),
    D = l(351022);
class w {}
let O = new (class extends w {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: a, offset: s } = e;
        D.A.getIsFetching({ query: t, categoryId: l, languageCode: a }) ||
            (D.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: a }) &&
                (b.br({ withCounts: !1, offset: s }),
                await k(t, { categoryId: l, languageCode: a, offset: s, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: a } = e,
            s = D.A.getIsFetching({ query: t, categoryId: l, languageCode: a }),
            n = D.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: a });
        s ||
            n ||
            (b.br({ withCounts: !1, offset: 0 }),
            await k(t, { categoryId: l, languageCode: a, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: l, categoryId: a, languageCode: s } = e;
        if ("" === t.trim()) return;
        let n = L.A.getIsFetchingCounts(t),
            r = L.A.getIsFetchingCounts(t);
        n ||
            r ||
            (y.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            b.fd(l, a),
            b.br({ withCounts: !0, offset: 0 }),
            await k(t, { categoryId: a, languageCode: s, offset: 0, limit: 12, withCounts: !0 }),
            y.A.setState({ resultsQuery: t }));
    };
})();
var U = l(460760),
    P = l(533129),
    M = l(403362),
    H = l(808097),
    V = l(707554),
    Q = l(23815),
    q = l(701508),
    B = l(979590),
    Y = l(783531),
    z = l(503698),
    K = l.n(z),
    Z = l(831259),
    W = l(289873),
    X = l(664343),
    $ = l(834730),
    J = l(232554),
    ee = l(442433),
    et = l(736653),
    el = l(573435),
    ea = l(635350),
    es = l(785970);
let en = n.memo(function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: K()(t, es.En) });
});
var er = l(120692),
    ei = l(717421),
    ec = l(775602);
let eo = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    ed = function (e) {
        let { animate: t, state: l, cleanUp: a, children: r } = e,
            c = (0, i.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
            o = n.useMemo(
                () =>
                    !1 === t || c
                        ? { opacity: 1 }
                        : l === J.wL.ENTERED || l === J.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: eo }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: eo,
                                onRest: () => {
                                    a();
                                },
                            },
                [t, a, c, l],
            ),
            d = (0, ei.z)(o);
        return (0, s.jsx)(er.animated.div, { style: d, className: es.Hp, children: r });
    };
var eu = l(714991),
    em = l(776231),
    eg = l(486020),
    eh = l(939249),
    ex = l(26430),
    ef = l(517905),
    ej = l(421407);
let eA = function (e) {
    let { className: t, guildId: l } = e,
        a = n.useRef(null),
        r = n.useCallback((e, t) => {
            (e.stopPropagation(), t.onClick(e));
        }, []);
    return (0, s.jsx)(ef.A, {
        guildId: l,
        position: "left",
        targetElementRef: a,
        children: (e) =>
            (0, s.jsx)(eh.D, {
                ...e,
                innerRef: a,
                className: t,
                onClick: (t) => r(t, e),
                children: (0, s.jsx)("div", {
                    className: ej.K,
                    children: (0, s.jsx)(ex.MaximizeIcon, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var ey = l(59329),
    eb = l(937495),
    eC = l(517061);
function eS(e) {
    let { guild: t, onClick: a, onView: r } = e,
        [i, c] = n.useState(!1),
        [o, d] = n.useState(!1),
        [u, m] = n.useState(!1),
        h = n.useRef(null),
        x = n.useCallback(async () => {
            d(!0);
            try {
                await a(t.id);
            } finally {
                d(!1);
            }
        }, [t.id, a]),
        f = n.useCallback(
            (e) => {
                e && !i && (c(!0), r?.(t.id));
            },
            [t.id, i, r],
        ),
        j = n.useCallback(
            (e) => {
                (0, ee.L3)(e, async () => {
                    let { default: e } = await l.e(239572).then(l.bind(l, 235327));
                    return (l) => (0, s.jsx)(e, { ...l, guild: t });
                });
            },
            [t],
        ),
        A = (0, et.Ay)(),
        y = t.features.has(p.GuildFeatures.HUB),
        b = n.useMemo(() => {
            let e = eg.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, em.mZ)() });
            if (null != e) return e;
            if (y) return "/assets/c47298d5d6eac3b2.svg";
            switch (A) {
                case p.NJ8.DARK:
                    return eb;
                case p.NJ8.LIGHT:
                    return eC;
            }
        }, [t.discoverySplash, t.id, y, A]),
        C = n.useMemo(() => eg.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, s.jsxs)("div", {
        className: ey.kL,
        children: [
            o &&
                (0, s.jsx)("div", {
                    className: ey.dc,
                    children: (0, s.jsx)(W.y, { type: W.y.Type.PULSING_ELLIPSIS, className: ey.u1 }),
                }),
            (0, s.jsx)(Z.L, {
                innerRef: h,
                onChange: f,
                active: !i,
                threshold: 0.55,
                children: (0, s.jsxs)(ea.A, {
                    ref: h,
                    className: ey.Nr,
                    onClick: x,
                    disabled: o,
                    onContextMenu: j,
                    "aria-label": E.intl.string(E.t["M9wQ+f"]),
                    children: [
                        (0, s.jsxs)("div", {
                            className: ey.wx,
                            children: [
                                (0, s.jsx)("div", {
                                    className: K()(ey.vK, { [ey.Kc]: u }),
                                    children: (0, s.jsx)("img", {
                                        src: b,
                                        alt: "",
                                        className: ey._e,
                                        onLoad: () => m(!0),
                                    }),
                                }),
                                (0, s.jsx)(eA, { className: ey.gw, guildId: t.id }),
                                (0, s.jsx)("div", {
                                    className: ey.Kk,
                                    children: (0, s.jsx)(el.Ay, {
                                        mask: el.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, s.jsx)("div", {
                                            className: ey.SA,
                                            children: (0, s.jsx)(el.Ay, {
                                                mask: el.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, s.jsx)("img", { src: C, alt: "", className: ey.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ey.gI,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: ey.DD,
                                    children: [
                                        (0, s.jsx)(eu.A, {
                                            className: ey.n2,
                                            guild: t,
                                            tooltipColor: X.ST.Colors.PRIMARY,
                                        }),
                                        (0, s.jsx)(g.D, {
                                            variant: "heading-sm/semibold",
                                            className: ey.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)($.E, {
                                    className: ey.h_,
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, s.jsxs)("div", {
                                    className: ey.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, s.jsxs)("div", {
                                                className: ey.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: ey.SP }),
                                                    (0, s.jsx)($.E, {
                                                        className: ey.ac,
                                                        variant: "body-xs/normal",
                                                        color: "text-default",
                                                        children: E.intl.format(E.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, s.jsxs)("div", {
                                                className: ey.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: ey.PB }),
                                                    (0, s.jsx)($.E, {
                                                        className: ey.ac,
                                                        variant: "body-xs/normal",
                                                        color: "text-default",
                                                        children: E.intl.format(E.t.zRl6XR, { count: t.memberCount }),
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
function ev(e) {
    let { guildId: t, onClick: l, onView: a } = e,
        n = (0, i.bG)([D.A], () => D.A.getGuild(t));
    return null == n ? null : (0, s.jsx)(eS, { guild: n, onClick: l, onView: a });
}
function eN(e) {
    let { guildId: t, index: l, onClick: a, onView: r } = e,
        i = n.useRef(null == t),
        c = n.useCallback(
            (e, t, l, n) =>
                null == t.guildId
                    ? (0, s.jsx)(ed, { state: l, cleanUp: n, children: (0, s.jsx)(en, { className: ey.qf }) }, e)
                    : (0, s.jsx)(
                          ed,
                          {
                              state: l,
                              cleanUp: n,
                              animate: i.current,
                              children: (0, s.jsx)(ev, { guildId: t.guildId, onClick: a, onView: r }),
                          },
                          e,
                      ),
            [a, r],
        ),
        o = n.useCallback((e) => e.guildId ?? `${e.index}`, []),
        d = n.useMemo(() => [{ guildId: t, index: l }], [t, l]);
    return (0, s.jsx)("div", {
        className: ey.NK,
        children: (0, s.jsx)(J.F, { items: d, renderItem: c, getItemKey: o }),
    });
}
let ep = n.memo(ev);
var eE = l(401034);
let eI = { page: p.liQ.GUILD_DISCOVERY, object: p.ZSU.CARD, section: p.JJy.DISCOVER_POPULAR };
function eR(e) {
    let { tab: t, guildIds: l, loading: a, onScroll: r, onGuildCardClick: i, onGuildCardSeen: c } = e,
        o = (0, S.kc)(t),
        d = (0, S.Ot)(t),
        u = (0, S.UW)(t),
        m = (0, S.Ub)(t),
        h = n.useMemo(() => {
            let e = a ? 30 : l.length,
                t = [];
            for (let a = 0; a < e; a++)
                t.push(
                    (0, s.jsx)(
                        eN,
                        { guildId: l[a] ?? null, index: a, onClick: (e) => i(e, a, m, eI), onView: (e) => c(e, m) },
                        l[a] ?? a,
                    ),
                );
            return t;
        }, [m, l, a, i, c]);
    return (0, s.jsxs)(Y.A, {
        onScroll: r,
        children: [
            (0, s.jsx)(q.A, { title: o, description: d, children: (0, s.jsx)(Q.A, {}) }),
            (0, s.jsx)(B.A, {
                children: (0, s.jsxs)(V.F, {
                    children: [
                        (0, s.jsx)(g.D, {
                            className: eE.G,
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: u,
                        }),
                        (0, s.jsx)(V.F, { children: (0, s.jsx)("div", { className: eE.Q, children: h }) }),
                    ],
                }),
            }),
        ],
    });
}
var eG = l(778858),
    eT = l(101277),
    ek = l(646514),
    eF = l(821609),
    e_ = l(192308),
    eL = l(792749);
let eD = function (e) {
    let { hasHub: t } = e;
    return (0, s.jsxs)("div", {
        className: eL.kL,
        children: [
            (0, s.jsx)("div", {
                className: eL.zc,
                children: (0, s.jsx)(eT.HubIcon, { size: "md", color: ek.A.colors.WHITE.css }),
            }),
            (0, s.jsx)($.E, {
                color: "text-strong",
                variant: "body-lg/semibold",
                className: eL.wx,
                children: t ? E.intl.string(E.t.hsSHh8) : E.intl.string(E.t.Wf6iij),
            }),
            (0, s.jsx)($.E, {
                color: "text-default",
                variant: "body-sm/normal",
                className: eL.__invalid_description,
                children: t ? E.intl.string(E.t.FZ2J3Y) : E.intl.string(E.t.TvHcv6),
            }),
            (0, s.jsx)("div", { className: eL.rQ }),
            (0, s.jsx)(eF.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, e_.mM)(async () => {
                        let { default: e } = await Promise.all([
                            l.e(144909),
                            l.e(197804),
                            l.e(807265),
                            l.e(797641),
                            l.e(169555),
                        ]).then(l.bind(l, 500126));
                        return (t) => (0, s.jsx)(e, { ...t });
                    }),
                text: t ? E.intl.string(E.t.IyjHD9) : E.intl.string(E.t["KU/aN4"]),
            }),
        ],
    });
};
var ew = l(71393),
    eO = l(118331);
let eU = function (e) {
    let { onScroll: t } = e,
        l = (0, i.yK)([ew.A], () => ew.A.getGuildsArray().filter((e) => e.features.has(p.GuildFeatures.HUB))),
        a = n.useMemo(
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
    return (0, s.jsxs)(Y.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(q.A, {
                title: E.intl.string(E.t.X5xPlb),
                description: E.intl.string(E.t["F/IQCI"]),
                children: (0, s.jsx)(Q.A, {}),
            }),
            (0, s.jsxs)(B.A, {
                children: [
                    l.length > 0
                        ? (0, s.jsxs)(V.F, {
                              children: [
                                  (0, s.jsx)(g.D, {
                                      className: eE.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: E.intl.string(E.t["2DfZIQ"]),
                                  }),
                                  (0, s.jsx)(V.F, {
                                      children: (0, s.jsxs)("div", {
                                          className: eE.Q,
                                          children: [
                                              a.map((e) =>
                                                  (0, s.jsx)(
                                                      eS,
                                                      { guild: e, onClick: () => eG.A.transitionToGuildSync(e.id) },
                                                      e.id,
                                                  ),
                                              ),
                                              (0, s.jsx)(eD, { hasHub: !0 }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, s.jsx)("div", { className: eE.Q, children: (0, s.jsx)(eD, { hasHub: !1 }) }),
                    (0, s.jsx)("div", { className: eO.yF }),
                    (0, s.jsxs)("div", {
                        className: eO.ed,
                        children: [
                            (0, s.jsxs)($.E, {
                                className: eO.Qq,
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: [E.intl.string(E.t.O1k9XX), " "],
                            }),
                            (0, s.jsx)($.E, {
                                className: eO.Qq,
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: E.intl.string(E.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
function eP(e) {
    let { onScroll: t, onGuildCardSeen: l, onGuildCardClick: a } = e,
        r = (0, i.bG)([D.A], () => D.A.getGuildIds({ categoryId: -1 }) ?? T.VX),
        c = (0, i.bG)([D.A], () => D.A.getIsFetching({ categoryId: -1 }) ?? !0);
    return (
        n.useEffect(() => {
            H.A.fetchFeaturedGuilds();
        }, []),
        (0, s.jsx)(eR, {
            tab: T.o.FEATURED,
            guildIds: r,
            loading: c,
            onScroll: t,
            onGuildCardSeen: l,
            onGuildCardClick: a,
        })
    );
}
function eM(e) {
    let { tab: t, onScroll: l, onGuildCardSeen: a, onGuildCardClick: r } = e,
        c = (0, S.Ub)(t),
        o = (0, i.bG)([D.A], () => D.A.getGuildIds({ categoryId: c }) ?? T.VX),
        d = (0, i.bG)([D.A], () => D.A.getIsFetching({ categoryId: c }) ?? !0);
    return (
        n.useEffect(() => {
            H.A.fetchCategoryFeaturedGuilds({ categoryId: c });
        }, [c]),
        (0, s.jsx)(eR, { tab: t, guildIds: o, loading: d, onScroll: l, onGuildCardSeen: a, onGuildCardClick: r })
    );
}
function eH(e) {
    let { selectedTab: t, onScroll: l, onGuildCardSeen: a, onGuildCardClick: r } = e;
    switch (
        (n.useEffect(() => {
            let e = (0, S.Ub)(t);
            (0, P.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case T.o.FEATURED:
            return (0, s.jsx)(eP, { tab: t, onScroll: l, onGuildCardClick: r, onGuildCardSeen: a });
        case T.o.GAMING:
        case T.o.MUSIC:
        case T.o.ENTERTAINMENT:
        case T.o.TECH:
        case T.o.EDUCATION:
            return (0, s.jsx)(eM, { tab: t, onScroll: l, onGuildCardClick: r, onGuildCardSeen: a }, t);
        case T.o.HUBS:
            return (0, s.jsx)(eU, { onScroll: l });
        default:
            (0, M.xb)(t);
    }
}
var eV = l(435558),
    eQ = l.n(eV),
    eq = l(297778),
    eB = l(770178),
    eY = l(129230),
    ez = l(773669),
    eK = l(997590);
function eZ(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eK.A];
    return -1 === e ? E.intl.string(E.t.Omu0fS) : t.getCategoryName(e);
}
function eW(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([eK.A], () => eZ(t, [eK.A]));
}
l(667532);
var eX = l(499118);
function e$() {
    let e = y.A.useField("fetchedQuery"),
        t = y.A.useField("resultsInitialCategoryId"),
        l = y.A.useField("languageCode"),
        a = (0, i.bG)([D.A], () => (null == t ? 0 : (D.A.getTotal({ categoryId: t, query: e, languageCode: l }) ?? 0))),
        s = (0, i.bG)([D.A], () => D.A.getTotal({ categoryId: -1, query: e, languageCode: l }) ?? 0),
        r = (0, i.bG)([eX.A], () => eX.A.getVisibleTabs());
    return n.useMemo(() => {
        if (null == r) return null;
        if (null == t) return r;
        let e = [],
            l = new Set();
        for (let [t, a] of r) (l.add(t), e.push([t, a]));
        let n = !1;
        return (
            l.has(-1) || (l.add(-1), e.unshift([-1, s]), (n = !0)),
            l.has(t) || (l.add(t), e.push([t, a]), (n = !0)),
            n ? e : r
        );
    }, [r, t, s, a]);
}
var eJ = l(166976);
function e0(e) {
    let { categoryId: t, loadId: l } = e;
    (y.A.setState({ categoryId: t }),
        O.loadCategoryResults({
            loadId: l,
            categoryId: t,
            query: y.A.getField("fetchedQuery"),
            languageCode: y.A.getField("languageCode"),
        }));
}
function e1(e) {
    let { loadId: t, categoryId: l, count: a } = e,
        r = n.useCallback(() => {
            e0({ categoryId: l, loadId: t });
        }, [l, t]),
        i = y.A.useField("categoryId") === l,
        c = a.toLocaleString(ez.default.locale),
        o = eW({ categoryId: l });
    return (0, s.jsxs)(eh.D, {
        onClick: r,
        className: K()(eJ.L1, { [eJ.wH]: i }),
        children: [
            (0, s.jsx)($.E, { className: eJ.UU, variant: "body-sm/medium", color: "text-strong", children: o }),
            (0, s.jsx)($.E, { className: eJ.U9, variant: "body-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
let e2 = function (e) {
    let { loadId: t } = e,
        l = e$();
    return null == l
        ? null
        : (0, s.jsx)("div", {
              className: eJ.LZ,
              children: l.map((e) => {
                  let [l, a] = e;
                  return (0, s.jsx)(e1, { loadId: t, categoryId: l, count: a }, l);
              }),
          });
};
var e5 = l(191711),
    e6 = l(226658);
function e9(e) {
    let { loadId: t } = e,
        l = y.A.useField("categoryId"),
        a = e$(),
        r = eW({ categoryId: l }),
        c = n.useCallback(
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
            categoryIds: n.useMemo(
                () =>
                    null == a
                        ? []
                        : a.map((e) => {
                              let [t] = e;
                              return t;
                          }),
                [a],
            ),
        }),
        d = n.useMemo(
            () =>
                null == a
                    ? []
                    : a.map((e) => {
                          let [t, l] = e;
                          return { id: `${t}`, name: o[t] ?? "", count: l };
                      }),
            [a, o],
        );
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: e6.k,
              children: [
                  (0, s.jsx)($.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: E.intl.string(E.t.f09BQJ),
                  }),
                  (0, s.jsx)(e5.A, {
                      items: d,
                      title: r,
                      onSelect: c,
                      selected: `${l}`,
                      "aria-label": E.intl.string(E.t.Ng5cTK),
                      variant: e5.H.FILLED,
                  }),
              ],
          });
}
var e3 = l(468646);
let e4 = function (e) {
    let { loadId: t } = e,
        l = y.A.useField("categoryId"),
        a = (0, i.bG)([eK.A], () => eK.A.getCategoryName(l)),
        r = n.useCallback(() => {
            (y.A.setState({ categoryId: -1 }),
                O.loadCategoryResults({
                    loadId: t,
                    categoryId: -1,
                    query: y.A.getField("fetchedQuery"),
                    languageCode: y.A.getField("languageCode"),
                }));
        }, [t]),
        c = -1 === l ? E.intl.string(E.t.Ivw1Is) : E.intl.formatToPlainString(E.t["+1WAFb"], { categoryName: a }),
        o = -1 === l ? E.intl.string(E.t.aXvEjd) : E.intl.format(E.t.XLioqn, { onClick: r });
    return (0, s.jsxs)("div", {
        className: e3.k,
        children: [
            (0, s.jsx)(g.D, { variant: "heading-xl/semibold", className: e3.w, children: c }),
            (0, s.jsx)($.E, { variant: "body-md/normal", color: "text-default", children: o }),
        ],
    });
};
var e7 = l(890497),
    e8 = l(118216);
function te(e) {
    let { loadId: t } = e,
        l = (0, i.bG)([ez.default], () => (0, S.Kv)([ez.default])),
        a = y.A.useField("languageCode"),
        r = n.useCallback(
            (e) => {
                y.A.setState({ languageCode: e });
                let l = y.A.getField("fetchedQuery");
                (F({ ignoreQueries: [l] }),
                    O.loadCategoryResults({
                        loadId: t,
                        categoryId: y.A.getField("categoryId"),
                        query: l,
                        languageCode: e,
                    }));
            },
            [t],
        ),
        c = n.useMemo(() => (0, T.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, s.jsx)("div", {
        className: e8.k,
        children: (0, s.jsx)(e7.Z, {
            selectionMode: "single",
            label: E.intl.string(E.t.Ng5cTK),
            hideLabel: !0,
            value: a ?? l,
            options: c,
            onSelectionChange: r,
        }),
    });
}
var tt = l(413185);
let tl = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    ta = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    ts = { page: p.liQ.GUILD_DISCOVERY, object: p.ZSU.CARD, section: p.JJy.DISCOVER_SEARCH },
    tn = eQ().throttle(b.Cf, 1e3, { leading: !1, trailing: !0 });
function tr(e) {
    let { loadId: t, onGuildCardSeen: l, onGuildCardClick: a } = e,
        {
            guildIds: r,
            loading: c,
            searchResultsQuery: o,
            loadMore: d,
            searchCategoryId: u,
        } = (function (e) {
            let { loadId: t } = e,
                l = y.A.useField("fetchedQuery"),
                a = y.A.useField("categoryId"),
                s = y.A.useField("languageCode"),
                r = n.useMemo(() => ({ categoryId: a, query: l, languageCode: s }), [a, s, l]),
                c = (0, i.bG)([D.A], () => D.A.getGuildIds(r) ?? T.VX),
                o = (0, i.bG)([D.A], () => D.A.getIsFetching(r) ?? !1),
                d = y.A.useField("resultsQuery"),
                u = d !== l,
                m = n.useCallback(() => {
                    let e = D.A.getGuildIds(r),
                        l = D.A.getTotal(r);
                    if (null == e || null == l) return;
                    let a = D.A.getIsFetching(r),
                        s = D.A.getIsInitialFetchComplete(r);
                    a ||
                        !s ||
                        e.length >= l ||
                        O.loadMoreCategoryResults({
                            loadId: t,
                            offset: e.length,
                            categoryId: y.A.getField("categoryId"),
                            query: y.A.getField("fetchedQuery"),
                            languageCode: y.A.getField("languageCode"),
                        });
                }, [t, r]);
            return n.useMemo(
                () => ({ guildIds: c, loading: u || o, searchResultsQuery: d, loadMore: m, searchCategoryId: a }),
                [c, u, o, d, m, a],
            );
        })({ loadId: t }),
        m = 0 === r.length && !c,
        g = n.useContext(eY.Ig),
        [h, x] = n.useState((0, S.YP)()),
        [f, j] = n.useState(!0),
        A = n.useRef(f),
        [b, C] = n.useState(3),
        v = n.useRef(b),
        N = n.useRef(null),
        p = n.useCallback(
            (e) => {
                null == e || m || c || (336 * (r.length / b) <= e.height && d());
            },
            [m, c, r.length, b, d],
        ),
        E = n.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let l = t.width;
                l < 1024 && A.current ? ((A.current = !1), j(!1)) : l > 1024 && !A.current && ((A.current = !0), j(!0));
                let a = 1;
                for (l -= 450 * !!f, l -= 280; l > 0;) ((l -= 264), (a += 1));
                (a !== v.current && ((v.current = a), C(a)), p(t));
            },
            [f, p],
        ),
        I = (0, eB.w)(E, [f, p]);
    (n.useEffect(() => {
        x((0, S.YP)());
    }, [o]),
        n.useEffect(() => {
            tn({
                loadId: t,
                searchId: h,
                query: o,
                guildResults: r.map(D.A.getGuild).filter(M.Vq),
                analyticsContext: g,
                categoryId: u,
            });
        }, [g, r, t, u, h, o]));
    let R = n.useCallback((e) => l(e, u), [l, u]),
        G = n.useMemo(() => (c ? [r.length, 0] : [r.length]), [r.length, c]),
        k = n.useCallback(
            (e, l, a) => {
                switch (e) {
                    case 0:
                        return (0, s.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: l.left, width: l.width - 16 },
                                className: K()(tt.R_, { [tt.Ze]: !f }),
                                children: [
                                    !f &&
                                        (0, s.jsxs)("div", {
                                            className: tt.eW,
                                            children: [(0, s.jsx)(e9, { loadId: t }), (0, s.jsx)(te, { loadId: t })],
                                        }),
                                    m && (0, s.jsx)(e4, { loadId: t }),
                                ],
                            },
                            a,
                        );
                    case 1:
                        return (0, s.jsx)(W.y, { className: K()(tt.u1, { [tt.qx]: f }) }, a);
                }
            },
            [m, f, t],
        ),
        F = n.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = f ? 16 : 68;
                        return m ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error(`[getSectionHeight] Failed for section: ${e}`);
                }
            },
            [m, f],
        ),
        _ = n.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return r[t];
                    case 1:
                        return "loading";
                    default:
                        throw Error(`[getItemKey] Failed for section: ${e}`);
                }
            },
            [r],
        ),
        L = n.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`);
            }
        }, []),
        w = n.useCallback(
            async (e, t, l, s) => {
                await a(e, t, l, s);
                let n = N.current?.getScrollerState()?.scrollTop;
                null != n && y.A.setState({ scrollPosition: n });
            },
            [a],
        ),
        U = n.useCallback(
            (e, t, l, a) => {
                if (0 !== e) return null;
                {
                    let e = r[t];
                    return (0, s.jsx)(
                        "div",
                        {
                            style: l,
                            children: (0, s.jsx)(ep, {
                                guildId: e,
                                onClick: async (e) => await w(e, t, u, ts),
                                onView: (e) => R(e),
                            }),
                        },
                        a,
                    );
                }
            },
            [r, w, R, u],
        );
    (n.useEffect(() => {
        let e = N.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && y.A.setState({ scrollPosition: t });
        };
    }, []),
        n.useLayoutEffect(() => {
            let e = y.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    N.current?.scrollTo({
                        to: e,
                        animate: !1,
                        callback: () => {
                            y.A.setState({ scrollPosition: null });
                        },
                    });
                });
        }, []));
    let P = n.useMemo(
            () =>
                (0, eV.debounce)(
                    () => {
                        let e = N.current?.getScrollerState();
                        if (null == e) return;
                        let t = e.scrollTop + e.offsetHeight;
                        e.scrollHeight - t < 240 && d();
                    },
                    100,
                    { leading: !0 },
                ),
            [d],
        ),
        H = f ? tl : ta;
    return (0, s.jsx)("div", {
        className: tt.kL,
        ref: I,
        children: (0, s.jsx)(eq.f, {
            ref: N,
            className: tt.kf,
            sections: G,
            columns: b,
            itemGutter: 16,
            padding: H,
            renderItem: U,
            renderSection: k,
            getSectionHeight: F,
            getItemKey: _,
            getItemHeight: L,
            chunkSize: 24,
            onScroll: P,
            renderAccessory: (e) =>
                f
                    ? (0, s.jsx)("div", {
                          className: tt.pz,
                          style: { height: e },
                          children: (0, s.jsxs)("div", {
                              className: tt.wp,
                              children: [
                                  (0, s.jsx)("div", { className: tt.jp, children: (0, s.jsx)(te, { loadId: t }) }),
                                  (0, s.jsx)(e2, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
var ti = l(488995),
    tc = l(877149);
function to() {
    let e,
        t,
        l,
        a = n.useRef((0, S.YP)()),
        { onScroll: r, scrollPosition: i, resetScrollPosition: c } = (0, h.G)(),
        {
            tabs: o,
            selectedTab: d,
            setSelectedTab: I,
        } = ((e = v.A.useField("selectedTab")),
        (t = n.useMemo(
            () =>
                [T.o.FEATURED, T.o.GAMING, T.o.MUSIC, T.o.ENTERTAINMENT, T.o.TECH, T.o.EDUCATION, T.o.HUBS].map(
                    (e) => ({ id: e, label: (0, S.jR)(e) }),
                ),
            [],
        )),
        (l = n.useCallback((e) => {
            v.A.setState({ selectedTab: e });
        }, [])),
        n.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || l(t[0].id);
        }, [e, t, l]),
        { tabs: t, selectedTab: e ?? t[0].id, setSelectedTab: l }),
        R = (0, S.Ub)(d),
        G = !T.R0.has(d),
        {
            searchQuery: k,
            onSearchTextChange: L,
            onClearSearch: D,
            onSearchSubmit: w,
            isSearchVisible: P,
        } = (function (e) {
            let { loadId: t } = e,
                l = v.A.useField("isSearchVisible"),
                a = y.A.useField("query");
            n.useEffect(() => {
                (0, U.Mu)();
            }, []);
            let s = n.useCallback((e) => {
                y.A.setState({ query: e });
            }, []);
            return {
                searchQuery: a,
                onSearchTextChange: s,
                onClearSearch: n.useCallback(() => {
                    (b.gp(t),
                        F(),
                        _(),
                        y.A.setState({
                            query: "",
                            fetchedQuery: "",
                            resultsQuery: "",
                            categoryId: -1,
                            resultsInitialCategoryId: null,
                            scrollPosition: null,
                        }),
                        v.A.setState({ isSearchVisible: !1 }));
                }, [t]),
                onSearchSubmit: n.useCallback(() => {
                    let e = y.A.getField("query"),
                        l = y.A.getField("fetchedQuery");
                    if ("" === e.trim() || e === l) return;
                    F();
                    let a = y.A.getField("languageCode"),
                        s = y.A.getField("categoryId");
                    (y.A.setState({ resultsInitialCategoryId: s }),
                        v.A.setState({ isSearchVisible: !0 }),
                        O.loadCategoryResultsAndCounts({ loadId: t, categoryId: s, query: e, languageCode: a }));
                }, [t]),
                isSearchVisible: l,
            };
        })({ loadId: a.current }),
        M = v.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: H,
            onCollapsedSearchBarClick: V,
            onSearchBarBlur: Q,
            tabsClassName: q,
        } = (0, x.p)({
            isSearchBarVisible: G,
            isSearchBarEmpty: "" === k.trim(),
            searchBarState: M,
            setSearchBarState: (e) => v.A.setState({ searchBarState: e }),
        }),
        B = y.A.useField("fetchedQuery"),
        Y = n.useCallback(
            (e) => {
                (I(e), P && D());
            },
            [P, D, I],
        ),
        z = n.useMemo(
            () =>
                P
                    ? o.filter((e) => {
                          let { id: t } = e;
                          return !T.R0.has(t);
                      })
                    : o,
            [o, P],
        ),
        K = n.useRef(new C(R)),
        { onGuildCardSeen: Z, onGuildCardClick: W } = (function (e) {
            let { guildDiscoveryCardSeenManager: t, loadId: l } = e,
                a = n.useCallback(
                    (e, a) => {
                        t.markAsSeen(a, e, l);
                    },
                    [t, l],
                ),
                s = n.useCallback(
                    async (e, t, a, s) => {
                        try {
                            await (0, S.Wl)({ loadId: l, guildId: e, index: t, categoryId: a, analyticsLocation: s });
                        } catch (e) {
                            switch (e?.body?.code) {
                                case p.t02.INVITES_DISABLED:
                                    (0, N.P0)({ text: E.intl.string(E.t["2LLbj9"]), variant: "critical" });
                                    return;
                                case p.t02.USER_BANNED:
                                    (0, N.P0)({ text: E.intl.string(E.t["GzD/aa"]), variant: "critical" });
                                    return;
                            }
                            throw e;
                        }
                    },
                    [l],
                );
            return n.useMemo(() => ({ onGuildCardSeen: a, onGuildCardClick: s }), [s, a]);
        })({ guildDiscoveryCardSeenManager: K.current, loadId: a.current });
    return (
        n.useEffect(() => {
            K.current.flushSeenGuilds(a.current);
        }, [R]),
        n.useEffect(() => {
            c();
        }, [d, c]),
        n.useEffect(() => {
            P || y.A.setState({ scrollPosition: null });
        }, [P]),
        (0, s.jsxs)("div", {
            className: tc.kL,
            children: [
                (0, s.jsxs)(f.Ay, {
                    variant: P ? f.Z5.RELATIVE : f.Z5.OVERLAY,
                    children: [
                        !P && (0, s.jsx)(f.ns, { scrollPosition: i }),
                        P
                            ? (0, s.jsx)(f.XQ, {
                                  icon: u.ArrowLargeLeftIcon,
                                  "aria-label": E.intl.string(E.t["13/7kX"]),
                                  onClick: D,
                              })
                            : (0, s.jsx)(f.T4, { icon: m.ServerIcon }),
                        !P &&
                            (0, s.jsx)(j.A, {
                                className: q,
                                tabs: z,
                                selectedTab: d,
                                onTabSelect: Y,
                                onAvailableWidthChange: H,
                            }),
                        P &&
                            (0, s.jsx)(g.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: tc.ov,
                                children: E.intl.format(E.t.zHdzqW, { query: B }),
                            }),
                        G &&
                            (0, s.jsx)(A.A, {
                                query: k,
                                placeholder: E.intl.string(E.t["5h0QOP"]),
                                onTextChange: L,
                                onClear: D,
                                onSubmit: w,
                                onCollapsedClick: V,
                                state: P ? ti.Um.DEFAULT : M,
                                onBlur: Q,
                            }),
                    ],
                }),
                P
                    ? (0, s.jsx)(tr, { loadId: a.current, onGuildCardClick: W, onGuildCardSeen: Z })
                    : (0, s.jsx)(eH, { selectedTab: d, onScroll: r, onGuildCardClick: W, onGuildCardSeen: Z }),
            ],
        })
    );
}
var td = l(570749),
    tu = l(976860),
    tm = l(726845),
    tg = l(285395),
    th = l(185951),
    tx = l(621466),
    tf = l(687966),
    tj = l(567272),
    tA = l(116903),
    ty = l(602034),
    tb = l(651188),
    tC = l(311043),
    tS = l(778747),
    tv = l(518805),
    tN = l(929396);
function tp(e) {
    let { query: t, filterGroup: l, genres: a = [], platformAvailability: s = [] } = e;
    return {
        q: (0, tN.C7)(t) ?? void 0,
        filter_group: l,
        genres: [...new Set(a)].sort((e, t) => e - t),
        platform_availability: [...new Set(s)].sort(),
    };
}
function tE(e) {
    let t = tp(e);
    return [
        ...(null != t.q ? [`q=${encodeURIComponent(t.q)}`] : []),
        `filter_group=${t.filter_group}`,
        ...t.genres.map((e) => `genres=${e}`),
        ...t.platform_availability.map((e) => `platform_availability=${e}`),
    ].join("&");
}
var tI = l(635377),
    tR = l.n(tI),
    tG = l(927813);
let tT = tG.A.Millis.HOUR;
function tk(e, t) {
    return `offset=${t}&${e}`;
}
let tF = new (tR())({ max: 50, maxAge: tT });
class t_ extends i.Ay.Store {
    static displayName = "GameSearchStore";
    initialize() {
        this.waitFor(tC.A);
    }
    getPage(e, t) {
        return tF.peek(tk(e, t));
    }
}
let tL = new t_(G.h, {
        LOGOUT: function () {
            tF.reset();
        },
        GAME_SEARCH_FETCH_SUCCESS: function (e) {
            let { searchKey: t, offset: l, games: a, totalCount: s, facets: n } = e;
            tF.set(tk(t, l), { gameIds: a.map((e) => e.id), totalCount: s, facets: n });
        },
    }),
    tD = (0, i.UT)(tL, {
        getQueryId: (e, t) => (null != e ? p.fic.GAME_SEARCH_PAGE(`offset=${t}&${e.key}`) : null),
        get: (e, t) => (null != e ? (tL.getPage(e.key, t) ?? null) : null),
        load: (e, t) =>
            null != e
                ? (async function (e, t) {
                      let { body: l } = await I.Bo.get({
                          url: p.Rsh.GAMES_SEARCH,
                          query: { ...tp(e), offset: t, limit: 25 },
                          rejectWithError: !1,
                      });
                      G.h.dispatch({
                          type: "GAME_SEARCH_FETCH_SUCCESS",
                          searchKey: tE(e),
                          offset: t,
                          games: l.games,
                          totalCount: l.total_count,
                          facets: { genres: l.facets.genres, platformAvailability: l.facets.platform_availability },
                      });
                  })(e.params, t)
                : Promise.resolve(),
        retryConfig: { retryableErrors: tN.f_ },
        staleAfter: 3600,
        failureStaleAfter: 60,
    });
var tw = l(523754);
let tO = tb.m.SHOWCASE,
    tU = [];
function tP() {
    return Promise.resolve();
}
var tM = l(331322),
    tH = l(661439),
    tV = l(409626),
    tQ = l(692969),
    tq = l(459746),
    tB = l(799699),
    tY = l(326369),
    tz = l(422069),
    tK = l(49491),
    tZ = l(459778),
    tW = l(281018),
    tX = l(202163),
    t$ = l(153488),
    tJ = l(287809),
    t0 = l(90165),
    t1 = l(277450);
let t2 = 30 * tG.A.Seconds.MINUTE,
    t5 = [],
    t6 = [];
var t9 = l(151869),
    t3 = l(585205);
function t4(e) {
    let { children: t, skeletonTitleWidth: l } = e;
    return (0, s.jsxs)(tM.B, {
        gap: 12,
        "aria-busy": !0,
        children: [(0, s.jsx)(tB.Ay, { className: t3.K, width: l }), t],
    });
}
function t7(e) {
    let { items: t, getItemKey: l, renderItem: a, "aria-label": n } = e;
    return (0, s.jsx)(t9.A, { items: t, getItemKey: l, renderItem: a, gap: 16, "aria-label": n });
}
function t8(e) {
    let { title: t, children: l } = e;
    return (0, s.jsxs)(tM.B, {
        as: "section",
        gap: 12,
        children: [(0, s.jsx)(g.D, { variant: "heading-lg/semibold", lineClamp: 1, children: t }), l],
    });
}
var le = l(142553);
function lt(e) {
    return e.id;
}
function ll() {
    return (0, s.jsx)(tY.A, {
        gap: 16,
        children: eQ()
            .range(0, 8)
            .map((e) =>
                (0, s.jsxs)(
                    tB.qT,
                    {
                        className: le.Nr,
                        children: [(0, s.jsx)(tq.gr, { className: le.Iv }), (0, s.jsx)(tB.Ay, { className: le.UU })],
                    },
                    e,
                ),
            ),
    });
}
function la() {
    return (0, s.jsx)(t4, { skeletonTitleWidth: 240, children: (0, s.jsx)(ll, {}) });
}
function ls(e) {
    let { game: t, listItemProps: l } = e,
        a = (0, tQ.A)({
            location: "GlobalDiscoveryGamesBecauseYouPlayedCard",
            gameId: t.id,
            source: tV.GameProfileSources.GlobalDiscoveryGamesBecauseYouPlayed,
        });
    return (0, s.jsxs)(eh.D, {
        ...l,
        className: K()(le.Nr, { [le.vk]: null != a }),
        onClick: a,
        "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
        children: [
            (0, s.jsx)("div", {
                className: le.Iv,
                children: (0, s.jsx)(tq.Ay, {
                    game: t,
                    className: le.xe,
                    size: tq.wu.LARGE,
                    imageSize: 512,
                    loadingPlaceholder: (0, s.jsx)(tq.gr, { className: le.XE }),
                }),
            }),
            (0, s.jsx)($.E, { variant: "body-md/medium", lineClamp: 1, children: t.name }),
        ],
    });
}
function ln(e, t) {
    return (0, s.jsx)(ls, { game: e, listItemProps: t });
}
function lr() {
    let {
        isFetching: e,
        seedGame: t,
        games: l,
    } = (function () {
        let e = (0, i.bG)([t$.A], () => t$.A.hasConsented(p.YAq.PERSONALIZATION)),
            t = (0, i.bG)([t0.A], () => null == t0.A.lastFetched && !t0.A.hasFetchFailed),
            l = (0, i.yK)(
                [t0.A],
                () =>
                    e
                        ? Object.values(t0.A.applicationStatistics)
                              .filter((e) => e.total_duration >= t2)
                              .sort((e, t) => Date.parse(t.last_played_at) - Date.parse(e.last_played_at))
                              .slice(0, 5)
                              .map((e) => e.application_id)
                        : t5,
                [e],
            ),
            a = (0, tX.iE)(l),
            s = (0, i.cf)(
                [tC.A, tz.A, tJ.default],
                () => {
                    let e = tJ.default.getCurrentUser()?.nsfwAllowed;
                    for (let { gameRecord: t, isLoading: l } of a) {
                        if (l) return { isFetching: !0 };
                        if (null == t || t1.b.has(t.id) || !(0, tZ.T_)(t) || (0, tK.b)(t, e)) continue;
                        let a = tz.A.getSimilarGames(t.id);
                        if (
                            null == a ||
                            a.some((t) => {
                                let l = tC.A.getGame(t);
                                return null == l ? !tC.A.hasNoData(t) && !tC.A.didFetchingFail(t) : (0, tW.n)(l, e);
                            })
                        )
                            return { isFetching: !1, seedGame: t };
                    }
                    return { isFetching: !1 };
                },
                [a],
            ),
            { isFetching: r, similarGames: c } = (0, tW.A)(s.seedGame?.id),
            o = n.useMemo(() => c.slice(0, 8), [c]);
        return e
            ? { isFetching: t || s.isFetching || r, seedGame: s.seedGame, games: o }
            : { isFetching: !1, games: t6 };
    })();
    if (e) return (0, s.jsx)(la, {});
    if (null == t || 0 === l.length) return null;
    let a = E.intl.formatToPlainString(E.t.E5vkHs, { gameName: t.name });
    return (0, s.jsx)(t8, {
        title: a,
        children: (0, s.jsx)(t7, { items: l, getItemKey: lt, renderItem: ln, "aria-label": a }),
    });
}
var li = l(457346);
function lc() {
    return (0, s.jsx)(tY.A, {
        gap: 16,
        children: eQ()
            .range(0, 8)
            .map((e) =>
                (0, s.jsxs)(
                    tB.qT,
                    {
                        className: li.Nr,
                        children: [
                            (0, s.jsx)(tB.Ay, { className: li.Tp }),
                            (0, s.jsx)(tq.gr, { className: li.Iv }),
                            (0, s.jsxs)("div", {
                                className: li.pq,
                                children: [
                                    (0, s.jsx)(tB.Ay, { className: li.UU }),
                                    (0, s.jsx)(tB.Ay, { className: li.yz }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function lo() {
    return (0, s.jsx)(t8, { title: E.intl.string(E.t.JMTGC3), children: (0, s.jsx)(lc, {}) });
}
var ld = l(595305);
function lu() {
    return (0, s.jsx)(tY.A, {
        gap: 16,
        children: eQ()
            .range(0, 5)
            .map((e) =>
                (0, s.jsxs)(
                    tB.qT,
                    {
                        className: ld.Nr,
                        children: [
                            (0, s.jsx)(tB.Ay, { className: ld.Tp }),
                            (0, s.jsx)(tq.gr, { className: ld.Iv }),
                            (0, s.jsxs)("div", {
                                className: ld.pq,
                                children: [
                                    (0, s.jsx)(tB.Ay, { className: ld.UU }),
                                    (0, s.jsx)(tB.Ay, { className: ld.h5 }),
                                    (0, s.jsx)(tB.Ay, { className: ld.vL }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function lm() {
    return (0, s.jsx)(t8, { title: E.intl.string(E.t.Pc6FRV), children: (0, s.jsx)(lu, {}) });
}
function lg() {
    return (0, s.jsx)(t8, { title: E.intl.string(E.t.qpGTIa), children: (0, s.jsx)(lc, {}) });
}
var lh = l(541830);
let lx = null;
class lf extends i.Ay.Store {
    static displayName = "GlobalDiscoveryGamesStore";
    getTrendingGames() {
        return lx;
    }
}
let lj = new lf(G.h, {
    LOGOUT: function () {
        if (null == lx) return !1;
        lx = null;
    },
    GLOBAL_DISCOVERY_GAMES_TRENDING_FETCH_SUCCESS: function (e) {
        let { data: t } = e;
        lx = {
            week: t.week,
            games: t.games.map((e) => {
                let { game: t, ...l } = e;
                return l;
            }),
        };
    },
});
var lA = l(201989),
    ly = l(864202),
    lb = l(602999),
    lC =
        (((a = {})[(a.ADVENTURE = 1)] = "ADVENTURE"),
        (a[(a.CRAFTING = 2)] = "CRAFTING"),
        (a[(a.FANTASY = 3)] = "FANTASY"),
        (a[(a.FPS = 4)] = "FPS"),
        (a[(a.HORROR = 5)] = "HORROR"),
        (a[(a.INDIE = 6)] = "INDIE"),
        (a[(a.MMO = 7)] = "MMO"),
        (a[(a.OPEN_WORLD = 8)] = "OPEN_WORLD"),
        (a[(a.RPG = 9)] = "RPG"),
        (a[(a.SANDBOX = 10)] = "SANDBOX"),
        (a[(a.SCI_FI = 11)] = "SCI_FI"),
        (a[(a.SHOOTER = 12)] = "SHOOTER"),
        (a[(a.SIMULATION = 13)] = "SIMULATION"),
        (a[(a.SPORTS = 14)] = "SPORTS"),
        (a[(a.STORY_RICH = 15)] = "STORY_RICH"),
        (a[(a.STRATEGY = 16)] = "STRATEGY"),
        (a[(a.SURVIVAL = 17)] = "SURVIVAL"),
        (a[(a.TACTICAL = 18)] = "TACTICAL"),
        a),
    lS = l(749519);
let lv = {
        [lC.ADVENTURE]: lS.default.iscHqp,
        [lC.CRAFTING]: lS.default.xwhzzz,
        [lC.FANTASY]: lS.default["C/c3om"],
        [lC.FPS]: lS.default.k5Z9iC,
        [lC.HORROR]: lS.default.kPg4Tj,
        [lC.INDIE]: lS.default.GrAPLS,
        [lC.MMO]: lS.default.eCCPlU,
        [lC.OPEN_WORLD]: lS.default.Tf238f,
        [lC.RPG]: lS.default.JnJaJN,
        [lC.SANDBOX]: lS.default.HhlHYu,
        [lC.SCI_FI]: lS.default["3CQ9xv"],
        [lC.SHOOTER]: lS.default.wFZTLt,
        [lC.SIMULATION]: lS.default.LhKG5r,
        [lC.SPORTS]: lS.default.OwI6rQ,
        [lC.STORY_RICH]: lS.default.lKH6Ua,
        [lC.STRATEGY]: lS.default["3lGUb7"],
        [lC.SURVIVAL]: lS.default["9MM6LP"],
        [lC.TACTICAL]: lS.default.DnEG4n,
    },
    lN = [],
    lp = (0, i.UT)(lj, {
        getQueryId: (e) => (null != e ? `global-discovery-games-trending:${e}` : null),
        staleAfter: 6 * tG.A.Seconds.HOUR,
        failureStaleAfter: 5 * tG.A.Seconds.MINUTE,
        get: () => lj.getTrendingGames(),
        load: async (e) => {
            let t = await I.Bo.get({ url: p.Rsh.GAMES_TRENDING, rejectWithError: !0 });
            tJ.default.getCurrentUser()?.id === e &&
                G.h.dispatch({ type: "GLOBAL_DISCOVERY_GAMES_TRENDING_FETCH_SUCCESS", data: t.body });
        },
    });
function lE() {
    var e;
    let t,
        l,
        a,
        s,
        r = lp((0, i.bG)([tJ.default], () => tJ.default.getCurrentUser()?.id)),
        c =
            ((e = r.data),
            (t = e?.games ?? lN),
            (l = e?.week ?? null),
            (a = (0, i.yK)([tC.A], () => t.map((e) => tC.A.getGame(e.game_id)), [t])),
            (s = (0, i.bG)([tJ.default], () => tJ.default.getCurrentUser()?.nsfwAllowed)),
            n.useMemo(
                () =>
                    t
                        .map((e, t) =>
                            (function (e, t, l, a) {
                                if (!(0, lA.R)(t, a)) return null;
                                let s =
                                    null != l &&
                                    (function (e, t, l) {
                                        if (0 !== e || null == t) return !1;
                                        let a = (0, ly.default)(t.slice(0, 10)),
                                            s = (0, ly.default)(l);
                                        return a > (0, lb.default)(s, 7) && a <= s;
                                    })(e.total_players_pct_change, t.firstReleaseDate, l);
                                return { entry: e, game: t, isNewRelease: s };
                            })(e, a[t], l, s),
                        )
                        .filter(M.Vq),
                [t, a, l, s],
            )),
        o = null == r.data && (r.isLoading || null == r.error);
    return { data: r.data, error: r.error, loading: o, rows: c };
}
var lI = l(2014);
function lR(e) {
    let { game: t } = e;
    return t.id;
}
function lG(e) {
    let {
            row: { game: t, entry: l },
            listItemProps: a,
        } = e,
        r = (0, tQ.A)({
            location: "GlobalDiscoveryGamesTrendingCard",
            gameId: t.id,
            source: tV.GameProfileSources.GlobalDiscoveryGamesTrendingShelf,
        }),
        i = n.useMemo(() => t.genres.slice(0, 2).map(lh.du).join(" \u2022 "), [t]);
    return (0, s.jsxs)(eh.D, {
        ...a,
        className: K()(lI.Nr, { [lI.vk]: null != r }),
        onClick: r,
        "aria-label": E.intl.formatToPlainString(lS.default.EdG6vh, { rank: l.rank, gameName: t.name }),
        children: [
            (0, s.jsxs)("div", {
                className: lI.Iv,
                children: [
                    (0, s.jsx)(tq.Ay, { game: t, size: tq.wu.SMALL, className: lI.xe, imageSize: 512 }),
                    (0, s.jsx)("div", {
                        className: K()(lI.Tm, lI.Vf),
                        "aria-hidden": !0,
                        children: (0, s.jsx)($.E, {
                            variant: "display-lg",
                            color: "text-overlay-light",
                            tag: "span",
                            children: l.rank,
                        }),
                    }),
                    "" !== i &&
                        (0, s.jsx)("div", {
                            className: K()(lI.bh, lI.Vf),
                            children: (0, s.jsx)($.E, {
                                variant: "body-xs/medium",
                                color: "text-overlay-light",
                                lineClamp: 2,
                                children: i,
                            }),
                        }),
                ],
            }),
            (0, s.jsx)($.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t.name }),
        ],
    });
}
function lT(e, t) {
    return (0, s.jsx)(lG, { row: e, listItemProps: t });
}
function lk() {
    return (0, s.jsx)(tY.A, {
        gap: 16,
        children: eQ()
            .range(0, 10)
            .map((e) =>
                (0, s.jsxs)(
                    tB.qT,
                    {
                        className: lI.Nr,
                        children: [(0, s.jsx)(tq.gr, { className: lI.Iv }), (0, s.jsx)(tB.Ay, { className: lI.UU })],
                    },
                    e,
                ),
            ),
    });
}
function lF() {
    let { loading: e, rows: t } = lE();
    if (!e && 0 === t.length) return null;
    let l = E.intl.string(E.t.raRLQb);
    return (0, s.jsx)(t8, {
        title: l,
        children: e
            ? (0, s.jsx)(lk, {})
            : (0, s.jsx)(t7, { items: t, getItemKey: lR, renderItem: lT, "aria-label": l }),
    });
}
let l_ = { top: 32, bottom: 24 };
function lL() {
    return (
        n.useEffect(() => {
            (0, tH.X)();
        }, []),
        (0, s.jsx)(V.F, {
            children: (0, s.jsxs)(tM.B, {
                gap: 48,
                padding: l_,
                children: [
                    (0, s.jsx)(lF, {}),
                    (0, s.jsx)(lm, {}),
                    (0, s.jsx)(lr, {}),
                    (0, s.jsx)(lg, {}),
                    (0, s.jsx)(lo, {}),
                ],
            }),
        })
    );
}
var lD = l(837381),
    lw = l(516521),
    lO = l(769015),
    lU = l(715498);
let lP = n.memo(function (e) {
    let { game: t, isHighlighted: l, onSelect: a } = e,
        r = (0, lD.rm)(t.id),
        i = n.useCallback(() => a(t.id), [t.id, a]),
        c = (0, tQ.A)(
            {
                location: "GlobalDiscoveryGamesSearchDropdownRow",
                gameId: t.id,
                source: tV.GameProfileSources.GlobalDiscoveryGamesSearch,
            },
            { onOpened: i },
        );
    return (0, s.jsxs)(eh.D, {
        ...r,
        id: r["data-list-item-id"],
        role: "option",
        "aria-selected": l,
        className: K()(lU.nM, { [lU.vk]: null != c, [lU.mr]: l }),
        onClick: c,
        "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
        children: [
            (0, s.jsx)(lO.A, { game: t, size: lO.M.SMALL }),
            (0, s.jsx)($.E, { variant: "body-md/medium", lineClamp: 1, children: t.name }),
        ],
    });
});
function lM(e) {
    let { results: t, navigator: l, highlightedGameId: a, onSelect: r } = e,
        { ref: i } = l.containerProps,
        c = n.useCallback(
            (e) => {
                i.current = e?.getScrollerNode() ?? null;
            },
            [i],
        );
    return 0 === t.length
        ? (0, s.jsx)("div", {
              role: "status",
              className: lU.Wm,
              children: (0, s.jsx)($.E, {
                  className: lU.Ie,
                  variant: "body-sm/normal",
                  color: "text-subtle",
                  children: E.intl.string(E.t["+p0UgM"]),
              }),
          })
        : (0, s.jsx)(lD.hD, {
              navigator: l,
              children: (0, s.jsx)("div", {
                  className: lU.Wm,
                  children: (0, s.jsx)(lw.Ch, {
                      ref: c,
                      id: tw.O,
                      role: "listbox",
                      className: lU.XG,
                      children: t.map((e) => (0, s.jsx)(lP, { game: e, isHighlighted: e.id === a, onSelect: r }, e.id)),
                  }),
              }),
          });
}
var lH = l(662203),
    lV = l(574211),
    lQ = l(150934),
    lq = l(431527),
    lB = l(305866),
    lY = l(265872),
    lz = l(783977),
    lK = l(418151),
    lZ = l(221132);
let lW = Object.values(lV.Z);
function lX(e, t, l) {
    let a = e.map((e) => {
        let { value: t } = e;
        return t;
    });
    return [...a, ...t.filter((e) => !a.includes(e))].sort(l);
}
function l$(e) {
    return `${e}`;
}
function lJ(e, t, l) {
    let a = t.find((e) => e.value === l)?.count ?? 0;
    return E.intl.formatToPlainString(lS.default["2mZpw5"], { name: e, count: a });
}
function l0(e, t) {
    return lW.indexOf(e) - lW.indexOf(t);
}
function l1(e, t) {
    return (0, lh.du)(e).localeCompare((0, lh.du)(t));
}
function l2(e) {
    let { platform: t, checked: l, label: a } = e,
        r = n.useCallback(() => (0, tj.ei)(t), [t]);
    return (0, s.jsx)(lQ.S, { checked: l, onChange: r, label: a });
}
function l5(e) {
    let { genreCounts: t, platformCounts: l, searchGenres: a, searchPlatforms: r } = e,
        i = n.useId(),
        c = n.useMemo(() => lX(l, r, l0), [l, r]),
        o = n.useMemo(() => lX(t, a, l1), [t, a]),
        d = n.useMemo(() => o.map((e) => ({ id: l$(e), label: lJ((0, lh.du)(e), t, e) })), [o, t]),
        u = n.useMemo(() => new Set(a.map(l$)), [a]),
        m = n.useCallback(
            (e) => {
                "all" !== e && (0, tj.xc)(o.filter((t) => e.has(l$(t))));
            },
            [o],
        ),
        h = E.intl.string(E.t.pDgwYB);
    return (0, s.jsxs)("div", {
        className: lZ.uW,
        children: [
            c.length > 0
                ? (0, s.jsxs)("div", {
                      className: lZ.bz,
                      children: [
                          (0, s.jsx)(g.D, {
                              variant: "heading-sm/semibold",
                              id: i,
                              children: E.intl.string(E.t.PNqxNe),
                          }),
                          (0, s.jsx)("div", {
                              role: "group",
                              "aria-labelledby": i,
                              className: lZ.mM,
                              children: c.map((e) =>
                                  (0, s.jsx)(
                                      l2,
                                      { platform: e, checked: r.includes(e), label: lJ((0, lK.n7)(e), l, e) },
                                      e,
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            o.length > 0
                ? (0, s.jsxs)("div", {
                      className: lZ.bz,
                      children: [
                          (0, s.jsx)(g.D, { variant: "heading-sm/semibold", children: h }),
                          (0, s.jsx)(lq.C, {
                              variant: "filter",
                              selectionMode: "multiple",
                              label: h,
                              items: d,
                              selectedKeys: u,
                              onSelectionChange: m,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function l6(e) {
    let { genreCounts: t, platformCounts: l, searchGenres: a, searchPlatforms: r } = e,
        i = n.useRef(null),
        c = E.intl.string(E.t.UdhTtk),
        o = n.useCallback(
            (e) => {
                let { setPopoutRef: n } = e;
                return (0, s.jsx)(lB.l, {
                    ref: n,
                    "aria-label": c,
                    className: lZ.SW,
                    children: (0, s.jsx)(lw.Ch, {
                        className: lZ.yZ,
                        children: (0, s.jsx)(l5, {
                            genreCounts: t,
                            platformCounts: l,
                            searchGenres: a,
                            searchPlatforms: r,
                        }),
                    }),
                });
            },
            [c, t, l, a, r],
        );
    return (0, s.jsx)(lY.Y, {
        targetElementRef: i,
        renderPopout: o,
        position: "bottom",
        align: "right",
        children: (e) =>
            (0, s.jsx)(eF.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                text: c,
                icon: lz.FiltersHorizontalIcon,
                iconPosition: "end",
            }),
    });
}
var l9 = l(432601);
function l3() {
    return (0, s.jsx)("div", {
        className: l9.Vg,
        "aria-busy": !0,
        children: eQ()
            .range(0, 25)
            .map((e) =>
                (0, s.jsxs)(
                    tB.qT,
                    {
                        className: l9.Vs,
                        children: [(0, s.jsx)(tq.gr, { className: l9.Iv }), (0, s.jsx)(tB.Ay, { className: l9.Zk })],
                    },
                    e,
                ),
            ),
    });
}
function l4() {
    return (0, s.jsx)($.E, { variant: "body-md/normal", color: "text-subtle", children: E.intl.string(E.t.uvDZBZ) });
}
let l7 = n.memo(function (e) {
    let { game: t } = e,
        l = (0, tQ.A)({
            location: "GlobalDiscoveryGamesSearchResultTile",
            gameId: t.id,
            source: tV.GameProfileSources.GlobalDiscoveryGamesSearch,
        });
    return (0, s.jsxs)(eh.D, {
        className: K()(l9.Vs, { [l9.vk]: null != l }),
        onClick: l,
        "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
        children: [
            (0, s.jsx)("div", {
                className: l9.Iv,
                children: (0, s.jsx)(tq.FQ, {
                    coverUrl: t.getCoverURL(512),
                    iconUrl: t.getIconURL(256),
                    gameName: t.name,
                    firstReleaseDate: t.firstReleaseDate,
                    size: tq.wu.LARGE,
                    className: l9.xe,
                    loadingPlaceholder: (0, s.jsx)(tq.gr, { className: l9.XE }),
                }),
            }),
            (0, s.jsx)($.E, { variant: "body-md/medium", lineClamp: 1, children: t.name }),
        ],
    });
});
function l8(e) {
    let { games: t, isLoading: l, error: a } = e;
    return 0 === t.length
        ? l
            ? (0, s.jsx)(l3, {})
            : null != a
              ? (0, s.jsx)(l4, {})
              : (0, s.jsx)($.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: E.intl.string(E.t["+p0UgM"]),
                })
        : (0, s.jsx)("div", { className: l9.Vg, children: t.map((e) => (0, s.jsx)(l7, { game: e }, e.id)) });
}
function ae(e) {
    let { query: t, scrollerRef: l } = e,
        {
            games: a,
            isLoading: r,
            error: c,
            filterCounts: o,
            searchGenres: d,
            searchPlatforms: u,
            searchPage: m,
        } = (function (e) {
            var t, l;
            let a = tj.Ay.useField("searchGenres"),
                s = tj.Ay.useField("searchPlatforms"),
                r = tj.Ay.useField("searchPage"),
                {
                    data: c,
                    isLoading: o,
                    error: d,
                } = ((t = { query: e, filterGroup: tO, genres: a, platformAvailability: s }),
                (l = (r - 1) * 25),
                tD(
                    (function (e) {
                        let t = null != e ? tE(e) : null,
                            [l, a] = n.useState(() => (null != e && null != t ? { key: t, params: e } : null));
                        if ((l?.key ?? null) === t) return l;
                        let s = null != e && null != t ? { key: t, params: e } : null;
                        return (a(s), s);
                    })(t),
                    l,
                )),
                u = c?.gameIds ?? tU,
                m = (0, i.yK)([tC.A], () => u.map((e) => tC.A.getGame(e)).filter(M.Vq), [u]),
                g = c?.totalCount,
                h = c?.facets,
                x = n.useMemo(
                    () =>
                        null != h && null != g
                            ? { query: e, genreCounts: h.genres, platformCounts: h.platformAvailability, totalCount: g }
                            : null,
                    [e, h, g],
                ),
                [f, j] = n.useState(null);
            return (
                null != x && x !== f && j(x),
                {
                    games: m,
                    isLoading: o,
                    error: d,
                    filterCounts: x ?? (f?.query === e ? f : null),
                    searchGenres: a,
                    searchPlatforms: s,
                    searchPage: r,
                }
            );
        })(t);
    if (
        (n.useEffect(() => {
            l.current?.scrollTo({ to: 0 });
        }, [l, t, d, u, m]),
        null == o && !r && null == c)
    )
        return null;
    let g = (0, s.jsx)(l8, { games: a, isLoading: r, error: c }),
        h = null != o && (o.platformCounts.length > 0 || o.genreCounts.length > 0 || u.length > 0 || d.length > 0);
    return (0, s.jsx)("div", {
        className: l9.kL,
        children:
            null == o
                ? g
                : (0, s.jsxs)("div", {
                      className: l9.Zp,
                      children: [
                          (0, s.jsxs)(tM.B, {
                              gap: 16,
                              className: l9.iW,
                              children: [
                                  h
                                      ? (0, s.jsx)("div", {
                                            className: l9.OJ,
                                            children: (0, s.jsx)(l6, {
                                                genreCounts: o.genreCounts,
                                                platformCounts: o.platformCounts,
                                                searchGenres: d,
                                                searchPlatforms: u,
                                            }),
                                        })
                                      : null,
                                  g,
                                  (0, s.jsx)(lH.m, {
                                      className: l9.JV,
                                      totalCount: Math.min(o.totalCount, 500),
                                      pageSize: 25,
                                      disablePaginationGap: !0,
                                      hideMaxPage: !0,
                                      currentPage: m,
                                      onPageChange: tj.kG,
                                  }),
                              ],
                          }),
                          h
                              ? (0, s.jsx)("div", {
                                    className: l9.mc,
                                    children: (0, s.jsx)(l5, {
                                        genreCounts: o.genreCounts,
                                        platformCounts: o.platformCounts,
                                        searchGenres: d,
                                        searchPlatforms: u,
                                    }),
                                })
                              : null,
                      ],
                  }),
    });
}
var at = l(123292);
function al(e) {
    let { game: t } = e,
        l = (0, tQ.A)({ gameId: t.id, source: tV.GameProfileSources.GlobalDiscoveryGamesTrendingTab });
    return null != l
        ? (0, s.jsx)(at.Q, {
              text: t.name,
              textVariant: "body-md/semibold",
              variant: "secondary",
              lineClamp: 1,
              "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: t.name }),
              onClick: l,
          })
        : (0, s.jsx)($.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t.name });
}
var aa = l(564508),
    as = l(184989),
    an = l(20112);
function ar(e) {
    let { guild: t } = e,
        l = (0, i.bG)([as.A], () => as.A.isMember(t.id), [t.id]),
        a = null != t.invite_link_url ? (0, aa.default)(t.invite_link_url) : void 0,
        n = {
            id: t.id,
            name: t.name,
            icon: null,
            features: [
                ...(t.is_verified ? [p.GuildFeatures.VERIFIED] : []),
                ...(t.is_partnered ? [p.GuildFeatures.PARTNERED] : []),
            ],
        };
    return (0, s.jsxs)("div", {
        className: an.AY,
        children: [
            null != t.icon_url && (0, s.jsx)("img", { src: t.icon_url, alt: "", className: an.bQ }),
            (0, s.jsxs)("div", {
                className: an.SE,
                children: [
                    (0, s.jsxs)("div", {
                        className: an.oH,
                        children: [
                            (0, s.jsx)($.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, s.jsx)(eu.A, { guild: n, size: 16 }),
                        ],
                    }),
                    null != t.approximate_online_count &&
                        (0, s.jsx)($.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: E.intl.format(E.t["LC+S+m"], { membersOnline: t.approximate_online_count }),
                        }),
                ],
            }),
            (l || null != a) &&
                (0, s.jsx)(eF.$, {
                    size: "sm",
                    variant: "primary",
                    text: l ? E.intl.string(lS.default.aZbg3l) : E.intl.string(E.t.VJlc0S),
                    onClick: l ? () => (0, tu.pX)(p.BVt.CHANNEL(t.id)) : a,
                }),
        ],
    });
}
function ai() {
    return (0, s.jsx)($.E, { variant: "body-sm/normal", color: "text-subtle", lineClamp: 1, children: "-" });
}
let ac = n.memo(function (e) {
        let { entry: t, game: l, isNewRelease: a, percentFormatter: n } = e,
            r = t.total_players_pct_change,
            i = t.categories
                .slice()
                .sort((e, t) => e.rank - t.rank)
                .flatMap((e) => {
                    let { id: t } = e,
                        l = lv[t];
                    return null != l ? [E.intl.string(l)] : [];
                })
                .slice(0, 2);
        return (0, s.jsxs)("tr", {
            className: an.nM,
            children: [
                (0, s.jsx)("th", {
                    scope: "row",
                    className: an.Hn,
                    children: (0, s.jsx)($.E, {
                        tag: "span",
                        variant: "body-md/semibold",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: t.rank,
                    }),
                }),
                (0, s.jsx)("td", {
                    className: an.Hn,
                    children: (0, s.jsxs)("div", {
                        className: an.AY,
                        children: [
                            (0, s.jsx)("div", {
                                "aria-hidden": !0,
                                children: (0, s.jsx)(tq.Ay, { game: l, size: tq.wu.COMPACT, className: an.xn }),
                            }),
                            (0, s.jsx)("div", { className: an.t1, children: (0, s.jsx)(al, { game: l }) }),
                        ],
                    }),
                }),
                (0, s.jsx)("td", {
                    className: an.Hn,
                    children: (0, s.jsx)($.E, {
                        variant: "body-sm/semibold",
                        color: r > 0 ? "text-feedback-positive" : r < 0 ? "text-feedback-critical" : "text-brand",
                        tabularNumbers: !0,
                        children: a ? E.intl.string(lS.default.oLMJSu) : n.format(r),
                    }),
                }),
                (0, s.jsx)("td", {
                    className: an.Hn,
                    children:
                        i.length > 0
                            ? (0, s.jsx)($.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  lineClamp: 1,
                                  children: i.join(", "),
                              })
                            : (0, s.jsx)(ai, {}),
                }),
                (0, s.jsx)("td", {
                    className: an.Hn,
                    children:
                        null != t.official_guild ? (0, s.jsx)(ar, { guild: t.official_guild }) : (0, s.jsx)(ai, {}),
                }),
            ],
        });
    }),
    ao = { top: 32, bottom: 48 };
function ad(e) {
    let { label: t, ariaLabel: l } = e;
    return (0, s.jsx)("th", {
        scope: "col",
        className: an.k4,
        "aria-label": l,
        children: (0, s.jsx)($.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
    });
}
function au(e) {
    let { message: t } = e;
    return (0, s.jsx)("tr", {
        children: (0, s.jsx)("td", {
            colSpan: 5,
            className: an.Hn,
            children: (0, s.jsx)("div", {
                className: an.h5,
                role: "status",
                children: (0, s.jsx)($.E, { variant: "body-sm/normal", color: "text-subtle", children: t }),
            }),
        }),
    });
}
function am() {
    return (0, s.jsx)("tbody", {
        "aria-hidden": !0,
        children: eQ()
            .range(0, 10)
            .map((e) =>
                (0, s.jsxs)(
                    "tr",
                    {
                        className: an.nM,
                        children: [
                            (0, s.jsx)("td", { className: an.Hn, children: (0, s.jsx)(tB.Ay, { className: an.Tm }) }),
                            (0, s.jsx)("td", {
                                className: an.Hn,
                                children: (0, s.jsxs)("div", {
                                    className: an.AY,
                                    children: [
                                        (0, s.jsx)(tq.gr, { className: an.xn }),
                                        (0, s.jsx)(tB.Ay, { className: K()(an.Qq, an.mO) }),
                                    ],
                                }),
                            }),
                            (0, s.jsx)("td", {
                                className: an.Hn,
                                children: (0, s.jsx)(tB.Ay, { className: K()(an.Qq, an.Mx) }),
                            }),
                            (0, s.jsx)("td", {
                                className: an.Hn,
                                children: (0, s.jsx)(tB.Ay, { className: K()(an.Qq, an.L1) }),
                            }),
                            (0, s.jsx)("td", {
                                className: an.Hn,
                                children: (0, s.jsxs)("div", {
                                    className: an.AY,
                                    children: [
                                        (0, s.jsx)(tB.Ay, { className: an.bQ }),
                                        (0, s.jsxs)("div", {
                                            className: an.SE,
                                            children: [
                                                (0, s.jsx)(tB.Ay, { className: K()(an.Qq, an.L5) }),
                                                (0, s.jsx)(tB.Ay, { className: K()(an.Qq, an.Z4) }),
                                            ],
                                        }),
                                        (0, s.jsx)(tB.Ay, { className: an.x6 }),
                                    ],
                                }),
                            }),
                        ],
                    },
                    e,
                ),
            ),
    });
}
function ag() {
    let { data: e, error: t, loading: l, rows: a } = lE(),
        r = e?.week ?? null,
        i = n.useId(),
        c = E.intl.currentLocale,
        { percentFormatter: o, weekFormatter: d } = n.useMemo(
            () => ({
                percentFormatter: new Intl.NumberFormat(c, {
                    style: "percent",
                    maximumFractionDigits: 0,
                    signDisplay: "exceptZero",
                }),
                weekFormatter: new Intl.DateTimeFormat(c, { month: "short", day: "numeric", timeZone: "UTC" }),
            }),
            [c],
        ),
        u =
            null != r
                ? E.intl.formatToPlainString(lS.default["/EED9C"], { week: d.format(new Date(`${r}T00:00:00Z`)) })
                : null;
    return (0, s.jsxs)(tM.B, {
        gap: 16,
        padding: ao,
        children: [
            (0, s.jsxs)("div", {
                className: an.wx,
                children: [
                    (0, s.jsx)(g.D, {
                        id: i,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: E.intl.string(E.t["7ff2Gs"]),
                    }),
                    l && (0, s.jsx)(tB.Ay, { className: K()(an.Qq, an.HH) }),
                    !l &&
                        null != u &&
                        (0, s.jsx)($.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                ],
            }),
            (0, s.jsx)("div", {
                className: an.CZ,
                role: "region",
                tabIndex: 0,
                "aria-labelledby": i,
                children: (0, s.jsxs)("table", {
                    className: an.tp,
                    "aria-busy": l,
                    children: [
                        (0, s.jsxs)("colgroup", {
                            children: [
                                (0, s.jsx)("col", { className: an.PX }),
                                (0, s.jsx)("col", { className: an.hK }),
                                (0, s.jsx)("col", { className: an.iH }),
                                (0, s.jsx)("col", { className: an.dv }),
                                (0, s.jsx)("col", {}),
                            ],
                        }),
                        (0, s.jsx)("thead", {
                            children: (0, s.jsxs)("tr", {
                                children: [
                                    (0, s.jsx)(ad, { label: "#", ariaLabel: E.intl.string(E.t.fi04zk) }),
                                    (0, s.jsx)(ad, { label: E.intl.string(E.t.SVexhg) }),
                                    (0, s.jsx)(ad, { label: E.intl.string(E.t["9BIezJ"]) }),
                                    (0, s.jsx)(ad, { label: E.intl.string(E.t.vHCZwr) }),
                                    (0, s.jsx)(ad, { label: E.intl.string(E.t.fBsbex) }),
                                ],
                            }),
                        }),
                        l
                            ? (0, s.jsx)(am, {})
                            : (0, s.jsxs)("tbody", {
                                  children: [
                                      a.map((e) => {
                                          let { entry: t, game: l, isNewRelease: a } = e;
                                          return (0, s.jsx)(
                                              ac,
                                              { entry: t, game: l, isNewRelease: a, percentFormatter: o },
                                              l.id,
                                          );
                                      }),
                                      0 === a.length &&
                                          (0, s.jsx)(au, {
                                              message: E.intl.string(null != t ? lS.default.xuDHiG : lS.default.HxbFsz),
                                          }),
                                  ],
                              }),
                    ],
                }),
            }),
        ],
    });
}
var ah = l(798292);
function ax(e) {
    tj.Ay.setState({ selectedView: e });
}
function af(e) {
    tj.Ay.setState({ searchBarState: e });
}
function aj() {
    let e = tj.Ay.useField("selectedView"),
        t = tj.Ay.useField("searchBarState"),
        l = n.useRef(null),
        {
            searchQuery: a,
            submittedQuery: r,
            isSearchVisible: i,
            isDropdownVisible: c,
            dropdownResults: o,
            dropdownNavigator: d,
            highlightedGameId: m,
            searchInputProps: h,
            onSearchTextChange: y,
            onClearSearch: b,
            onSearchSubmit: C,
            onSearchKeyDown: S,
            closeDropdown: v,
            onSelectDropdownResult: N,
        } = (function () {
            let e = tj.Ay.useField("searchQuery"),
                t = tj.Ay.useField("submittedQuery"),
                [l, a] = n.useState(!1),
                [s, r] = n.useState(),
                i = l && "" !== e.trim(),
                {
                    results: c,
                    isLoading: o,
                    onSelect: d,
                    endSession: u,
                } = (0, tv.J)(e, { surface: tS.K.GLOBAL_DISCOVERY_GAMES, filterGroup: tO }),
                m = i && null != c,
                g = m && (c?.length ?? 0) > 0,
                h = n.useCallback((e, t) => {
                    (r(t), document.querySelector(e)?.scrollIntoView({ block: "nearest" }));
                }, []),
                x = (0, tA.Ay)({
                    id: tw.O,
                    isEnabled: g,
                    wrap: !0,
                    useVirtualFocus: !0,
                    disableClickOnSpace: !0,
                    setFocus: h,
                    scrollToStart: tP,
                    scrollToEnd: tP,
                }),
                f = n.useCallback(() => {
                    (a(!1), r(void 0), x.setFocus(null));
                }, [x]),
                j = n.useCallback(
                    (e) => {
                        ((0, tj.pR)(e), a(!0), r(void 0), x.setFocus(null));
                    },
                    [x],
                ),
                A = n.useCallback(() => {
                    ((0, tj.Ch)(), f(), u());
                }, [f, u]),
                y = n.useCallback(() => {
                    var e;
                    let t,
                        l = tj.Ay.getField("searchQuery").trim();
                    if ("" === l) return;
                    let a = tj.Ay.getState();
                    (l === a.submittedQuery &&
                        0 === a.searchGenres.length &&
                        0 === a.searchPlatforms.length &&
                        1 === a.searchPage &&
                        ((t = tE((e = { query: l, filterGroup: tO }))),
                        null != tL.getPage(t, 0) ? Promise.resolve() : tD.refetch({ key: t, params: e }, 0)),
                        (0, tj.P4)(l),
                        f(),
                        u());
                }, [f, u]),
                b = n.useCallback(
                    (e) => {
                        if (m) {
                            if ("Escape" === e.key) {
                                (e.preventDefault(), e.stopPropagation(), f());
                                return;
                            }
                            x.containerProps.onKeyDown(e);
                        }
                    },
                    [f, x, m],
                ),
                C = n.useMemo(
                    () => ({
                        role: "combobox",
                        "aria-autocomplete": "list",
                        "aria-expanded": g,
                        "aria-controls": g ? tw.O : void 0,
                        "aria-busy": i && o,
                        "aria-activedescendant": g && null != s ? (0, ty.t$)(tw.O, s) : void 0,
                    }),
                    [s, i, g, o],
                ),
                S = n.useCallback(
                    (e) => {
                        (d(e), f());
                    },
                    [f, d],
                );
            return {
                searchQuery: e,
                submittedQuery: t,
                isSearchVisible: "" !== t,
                isDropdownVisible: m,
                dropdownResults: c,
                isDropdownLoading: o,
                dropdownNavigator: x,
                highlightedGameId: s,
                searchInputProps: C,
                onSearchTextChange: j,
                onClearSearch: A,
                onSearchSubmit: y,
                onSearchKeyDown: b,
                closeDropdown: f,
                onSelectDropdownResult: S,
            };
        })(),
        {
            onTabsAvailableWidthChange: p,
            onCollapsedSearchBarClick: I,
            onSearchBarBlur: R,
            tabsClassName: G,
        } = (0, x.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === a.trim(),
            searchBarState: t,
            setSearchBarState: af,
        }),
        T = n.useMemo(
            () => [
                { id: tw.y.FEATURED, label: E.intl.string(E.t.Rism7w) },
                { id: tw.y.TRENDING, label: E.intl.string(E.t.TsWCdW) },
            ],
            [],
        ),
        k = n.useCallback(
            (e) => {
                ((0, tx.vq)(e.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) || v();
            },
            [v],
        );
    return (0, s.jsxs)("div", {
        className: ah.kL,
        children: [
            (0, s.jsxs)("div", {
                className: ah.wx,
                onBlur: k,
                children: [
                    (0, s.jsxs)(f.Ay, {
                        variant: f.Z5.RELATIVE,
                        children: [
                            i
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(f.XQ, {
                                              icon: u.ArrowLargeLeftIcon,
                                              "aria-label": E.intl.string(E.t["13/7kX"]),
                                              onClick: b,
                                          }),
                                          (0, s.jsx)(g.D, {
                                              variant: "heading-lg/semibold",
                                              color: "text-strong",
                                              className: ah.ov,
                                              children: E.intl.format(lS.default.LpAJ4R, { query: r }),
                                          }),
                                      ],
                                  })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(f.T4, { icon: tf.GameControllerIcon }),
                                          (0, s.jsx)(j.A, {
                                              className: G,
                                              tabs: T,
                                              selectedTab: e,
                                              onTabSelect: ax,
                                              onAvailableWidthChange: p,
                                          }),
                                      ],
                                  }),
                            (0, s.jsx)(A.A, {
                                query: a,
                                placeholder: E.intl.string(E.t["5h0QOP"]),
                                onTextChange: y,
                                onClear: b,
                                onSubmit: C,
                                onCollapsedClick: I,
                                state: i ? ti.Um.DEFAULT : t,
                                onBlur: R,
                                onKeyDown: S,
                                inputProps: h,
                            }),
                        ],
                    }),
                    c && null != o
                        ? (0, s.jsx)(lM, { results: o, navigator: d, highlightedGameId: m, onSelect: N })
                        : null,
                ],
            }),
            (0, s.jsx)(Y.A, {
                ref: l,
                children: (0, s.jsx)("div", {
                    className: ah.Qs,
                    children: i
                        ? (0, s.jsx)(ae, { query: r, scrollerRef: l })
                        : e === tw.y.FEATURED
                          ? (0, s.jsx)(lL, {})
                          : (0, s.jsx)(ag, {}),
                }),
            }),
        ],
    });
}
var aA = l(272030);
let ay = function () {
    let e = (0, i.bG)([o.A], () => o.A.hasLoadedExperiments),
        t = (0, th.f)("GlobalDiscovery"),
        l = tm.A.useField("selectedTab"),
        a = l !== ti.GlobalDiscoveryTab.GAMES || t ? l : ti.Pd,
        u = (function (e) {
            switch (e) {
                case ti.GlobalDiscoveryTab.SERVERS:
                    return (0, s.jsx)(to, {});
                case ti.GlobalDiscoveryTab.APPS:
                    return (0, s.jsx)(d.default, {});
                case ti.GlobalDiscoveryTab.QUESTS:
                    return (0, s.jsx)(td.default, { topLevelRoute: !1 });
                case ti.GlobalDiscoveryTab.GAMES:
                    return (0, s.jsx)(aj, {});
                default:
                    (0, M.xb)(e);
            }
        })(a),
        m = (0, r.zy)();
    return (
        n.useEffect(() => {
            let l = m.pathname,
                a = (0, tg.j)(l);
            a === ti.GlobalDiscoveryTab.GAMES && e && !t
                ? (0, tu.bG)(p.BVt.GLOBAL_DISCOVERY_SERVERS)
                : a !== tm.A.getField("selectedTab") && tm.A.setState({ selectedTab: a });
        }, [m.pathname, e, t]),
        n.useEffect(() => {
            e && (0, P.tx)({ selectedTab: a });
        }, [a, e]),
        (0, s.jsxs)("section", {
            className: aA.k,
            children: [(0, s.jsx)(c.HI, { location: (0, tg.t)(a) }), (0, s.jsx)("div", { className: aA.T }), u],
        })
    );
};
