(l.r(t), l.d(t, { default: () => th }));
var s = l(477900),
    a = l(582128),
    r = l(806163),
    i = l(17928),
    n = l(726249),
    c = l(736056),
    o = l(869362),
    d = l(664121),
    u = l(548411),
    g = l(297264),
    h = l(711111),
    m = l(770472),
    f = l(737823),
    A = (l(749638), l(876622)),
    x = l(521974),
    C = l(282026),
    y = l(449054);
class S {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, l) {
        (this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(l)), this.guildIds.add(t));
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (y.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
var I = l(965660),
    j = l(601193),
    b = l(376357),
    E = l(652215),
    v = l(660183);
l(321073);
var R = l(636537),
    N = l(319400),
    p = l(73153),
    k = l(324580);
async function G(e, t) {
    let { categoryId: l, languageCode: s, offset: a, limit: r, withCounts: i } = t;
    p.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: l, languageCode: s });
    try {
        let t = await R.Bo.get({
                url: E.Rsh.GUILD_DISCOVERY_SEARCH,
                query: {
                    query: e,
                    category_id: l === k.Iq ? null : l,
                    offset: a,
                    limit: r,
                    language_code: s,
                    with_counts: i,
                },
                oldFormErrors: !0,
                rejectWithError: (0, R.fT)(),
            }),
            n = t.body.guilds.map(I.uk),
            c = t.body.total_count;
        if (i) {
            let l = [];
            (t.body.categories?.slice(0, 8).forEach((e) => {
                let { id: t, count: s } = e;
                l.push([Number(t), s]);
            }),
                p.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: l }));
        }
        p.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            query: e,
            categoryId: l,
            languageCode: s,
            guilds: n,
            total: c,
        });
    } catch (a) {
        let t = new N.LG(a);
        (y.jb({ categoryId: l, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
            i && p.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: [] }),
            p.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                query: e,
                categoryId: l,
                languageCode: s,
                error: a,
            }));
    }
}
let F = function (e) {
        p.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    L = function () {
        p.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var w = l(823448),
    T = l(351022);
class _ {}
let D = new (class extends _ {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: s, offset: a } = e;
        T.A.getIsFetching({ query: t, categoryId: l, languageCode: s }) ||
            (T.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: s }) &&
                (y.br({ withCounts: !1, offset: a }),
                await G(t, { categoryId: l, languageCode: s, offset: a, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: s } = e,
            a = T.A.getIsFetching({ query: t, categoryId: l, languageCode: s }),
            r = T.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: s });
        a ||
            r ||
            (y.br({ withCounts: !1, offset: 0 }),
            await G(t, { categoryId: l, languageCode: s, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: l, categoryId: s, languageCode: a } = e;
        if ("" === t.trim()) return;
        let r = w.A.getIsFetchingCounts(t),
            i = w.A.getIsFetchingCounts(t);
        r ||
            i ||
            (C.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            y.fd(l, s),
            y.br({ withCounts: !0, offset: 0 }),
            await G(t, { categoryId: s, languageCode: a, offset: 0, limit: 12, withCounts: !0 }),
            C.A.setState({ resultsQuery: t }));
    };
})();
var U = l(460760),
    q = l(533129),
    V = l(403362),
    M = l(688713),
    O = l(707554),
    Q = l(902119),
    H = l(701508),
    P = l(979590),
    B = l(783531),
    z = l(503698),
    Y = l.n(z),
    K = l(269115),
    Z = l(289873),
    W = l(900002),
    X = l(834730),
    J = l(232554),
    $ = l(442433),
    ee = l(736653),
    et = l(573435),
    el = l(635350),
    es = l(785970);
let ea = a.memo(function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: Y()(t, es.En) });
});
var er = l(202091),
    ei = l(717421),
    en = l(775602);
let ec = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    eo = function (e) {
        let { animate: t, state: l, cleanUp: r, children: n } = e,
            c = (0, i.bG)([en.Ay], () => en.Ay.useReducedMotion),
            o = a.useMemo(
                () =>
                    !1 === t || c
                        ? { opacity: 1 }
                        : l === J.wL.ENTERED || l === J.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: ec }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: ec,
                                onRest: () => {
                                    r();
                                },
                            },
                [t, r, c, l],
            ),
            d = (0, ei.z)(o);
        return (0, s.jsx)(er.animated.div, { style: d, className: es.Hp, children: n });
    };
var ed = l(714991),
    eu = l(776231),
    eg = l(486020),
    eh = l(939249),
    em = l(26430),
    ef = l(517905),
    eA = l(421407);
let ex = function (e) {
    let { className: t, guildId: l } = e,
        r = a.useRef(null),
        i = a.useCallback((e, t) => {
            (e.stopPropagation(), t.onClick(e));
        }, []);
    return (0, s.jsx)(ef.A, {
        guildId: l,
        position: "left",
        targetElementRef: r,
        children: (e) =>
            (0, s.jsx)(eh.D, {
                ...e,
                innerRef: r,
                className: t,
                onClick: (t) => i(t, e),
                children: (0, s.jsx)("div", {
                    className: eA.K,
                    children: (0, s.jsx)(em._, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var eC = l(59329),
    ey = l(937495),
    eS = l(517061);
function eI(e) {
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
        x = a.useCallback(
            (e) => {
                (0, $.L3)(e, async () => {
                    let { default: e } = await l.e("239572").then(l.bind(l, 235327));
                    return (l) => (0, s.jsx)(e, { ...l, guild: t });
                });
            },
            [t],
        ),
        C = (0, ee.Ay)(),
        y = t.features.has(E.GuildFeatures.HUB),
        S = a.useMemo(() => {
            let e = eg.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, eu.mZ)() });
            if (null != e) return e;
            if (y) return "/assets/c47298d5d6eac3b2.svg";
            switch (C) {
                case E.NJ8.DARK:
                    return ey;
                case E.NJ8.LIGHT:
                    return eS;
            }
        }, [t.discoverySplash, t.id, y, C]),
        I = a.useMemo(() => eg.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, s.jsxs)("div", {
        className: eC.kL,
        children: [
            o &&
                (0, s.jsx)("div", {
                    className: eC.dc,
                    children: (0, s.jsx)(Z.y, { type: Z.y.Type.PULSING_ELLIPSIS, className: eC.u1 }),
                }),
            (0, s.jsx)(K.L, {
                innerRef: m,
                onChange: A,
                active: !n,
                threshold: 0.55,
                children: (0, s.jsxs)(el.A, {
                    ref: m,
                    className: eC.Nr,
                    onClick: f,
                    disabled: o,
                    onContextMenu: x,
                    "aria-label": v.intl.string(v.t["M9wQ+f"]),
                    children: [
                        (0, s.jsxs)("div", {
                            className: eC.wx,
                            children: [
                                (0, s.jsx)("div", {
                                    className: Y()(eC.vK, { [eC.Kc]: u }),
                                    children: (0, s.jsx)("img", {
                                        src: S,
                                        alt: "",
                                        className: eC._e,
                                        onLoad: () => h(!0),
                                    }),
                                }),
                                (0, s.jsx)(ex, { className: eC.gw, guildId: t.id }),
                                (0, s.jsx)("div", {
                                    className: eC.Kk,
                                    children: (0, s.jsx)(et.Ay, {
                                        mask: et.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, s.jsx)("div", {
                                            className: eC.SA,
                                            children: (0, s.jsx)(et.Ay, {
                                                mask: et.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, s.jsx)("img", { src: I, alt: "", className: eC.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eC.gI,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: eC.DD,
                                    children: [
                                        (0, s.jsx)(ed.A, {
                                            className: eC.n2,
                                            guild: t,
                                            tooltipColor: W.ST.Colors.PRIMARY,
                                        }),
                                        (0, s.jsx)(g.D, {
                                            variant: "heading-md/semibold",
                                            className: eC.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(X.E, {
                                    className: eC.h_,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, s.jsxs)("div", {
                                    className: eC.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, s.jsxs)("div", {
                                                className: eC.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: eC.SP }),
                                                    (0, s.jsx)(X.E, {
                                                        className: eC.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: v.intl.format(v.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, s.jsxs)("div", {
                                                className: eC.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: eC.PB }),
                                                    (0, s.jsx)(X.E, {
                                                        className: eC.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: v.intl.format(v.t.zRl6XR, { count: t.memberCount }),
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
function ej(e) {
    let { guildId: t, onClick: l, onView: a } = e,
        r = (0, i.bG)([T.A], () => T.A.getGuild(t));
    return null == r ? null : (0, s.jsx)(eI, { guild: r, onClick: l, onView: a });
}
function eb(e) {
    let { guildId: t, index: l, onClick: r, onView: i } = e,
        n = a.useRef(null == t),
        c = a.useCallback(
            (e, t, l, a) =>
                null == t.guildId
                    ? (0, s.jsx)(eo, { state: l, cleanUp: a, children: (0, s.jsx)(ea, { className: eC.qf }) }, e)
                    : (0, s.jsx)(
                          eo,
                          {
                              state: l,
                              cleanUp: a,
                              animate: n.current,
                              children: (0, s.jsx)(ej, { guildId: t.guildId, onClick: r, onView: i }),
                          },
                          e,
                      ),
            [r, i],
        ),
        o = a.useCallback((e) => e.guildId ?? `${e.index}`, []),
        d = a.useMemo(() => [{ guildId: t, index: l }], [t, l]);
    return (0, s.jsx)("div", {
        className: eC.NK,
        children: (0, s.jsx)(J.F, { items: d, renderItem: c, getItemKey: o }),
    });
}
let eE = a.memo(ej);
var ev = l(401034);
let eR = { page: E.liQ.GUILD_DISCOVERY, object: E.ZSU.CARD, section: E.JJy.DISCOVER_POPULAR };
function eN(e) {
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
                        eb,
                        { guildId: l[a] ?? null, index: a, onClick: (e) => n(e, a, h, eR), onView: (e) => c(e, h) },
                        l[a] ?? a,
                    ),
                );
            return t;
        }, [h, l, r, n, c]);
    return (0, s.jsxs)(B.A, {
        onScroll: i,
        children: [
            (0, s.jsx)(H.A, { title: o, description: d, children: (0, s.jsx)(Q.A, {}) }),
            (0, s.jsx)(P.A, {
                children: (0, s.jsxs)(O.F, {
                    children: [
                        (0, s.jsx)(g.D, {
                            className: ev.G,
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: u,
                        }),
                        (0, s.jsx)(O.F, { children: (0, s.jsx)("div", { className: ev.Q, children: m }) }),
                    ],
                }),
            }),
        ],
    });
}
var ep = l(66834),
    ek = l(101277),
    eG = l(661531),
    eF = l(821609),
    eL = l(192308),
    ew = l(792749);
let eT = function (e) {
    let { hasHub: t } = e;
    return (0, s.jsxs)("div", {
        className: ew.kL,
        children: [
            (0, s.jsx)("div", {
                className: ew.zc,
                children: (0, s.jsx)(ek.P, { size: "md", color: eG.A.colors.WHITE.css }),
            }),
            (0, s.jsx)(X.E, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: ew.wx,
                children: t ? v.intl.string(v.t.hsSHh8) : v.intl.string(v.t.Wf6iij),
            }),
            (0, s.jsx)(X.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: ew.__invalid_description,
                children: t ? v.intl.string(v.t.FZ2J3Y) : v.intl.string(v.t.TvHcv6),
            }),
            (0, s.jsx)("div", { className: ew.rQ }),
            (0, s.jsx)(eF.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, eL.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            l.e("638781"),
                            l.e("197804"),
                            l.e("807265"),
                            l.e("797641"),
                            l.e("890496"),
                        ]).then(l.bind(l, 401155));
                        return (t) => (0, s.jsx)(e, { ...t });
                    }),
                text: t ? v.intl.string(v.t.IyjHD9) : v.intl.string(v.t["KU/aN4"]),
            }),
        ],
    });
};
var e_ = l(71393),
    eD = l(118331);
let eU = function (e) {
    let { onScroll: t } = e,
        l = (0, i.yK)([e_.A], () => e_.A.getGuildsArray().filter((e) => e.features.has(E.GuildFeatures.HUB))),
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
    return (0, s.jsxs)(B.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(H.A, {
                title: v.intl.string(v.t.X5xPlb),
                description: v.intl.string(v.t["F/IQCI"]),
                children: (0, s.jsx)(Q.A, {}),
            }),
            (0, s.jsxs)(P.A, {
                children: [
                    l.length > 0
                        ? (0, s.jsxs)(O.F, {
                              children: [
                                  (0, s.jsx)(g.D, {
                                      className: ev.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: v.intl.string(v.t["2DfZIQ"]),
                                  }),
                                  (0, s.jsx)(O.F, {
                                      children: (0, s.jsxs)("div", {
                                          className: ev.Q,
                                          children: [
                                              r.map((e) =>
                                                  (0, s.jsx)(
                                                      eI,
                                                      { guild: e, onClick: () => ep.A.transitionToGuildSync(e.id) },
                                                      e.id,
                                                  ),
                                              ),
                                              (0, s.jsx)(eT, { hasHub: !0 }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, s.jsx)("div", { className: ev.Q, children: (0, s.jsx)(eT, { hasHub: !1 }) }),
                    (0, s.jsx)("div", { className: eD.yF }),
                    (0, s.jsxs)("div", {
                        className: eD.ed,
                        children: [
                            (0, s.jsxs)(X.E, {
                                className: eD.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [v.intl.string(v.t.O1k9XX), " "],
                            }),
                            (0, s.jsx)(X.E, {
                                className: eD.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: v.intl.string(v.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
function eq(e) {
    let { onScroll: t, onGuildCardSeen: l, onGuildCardClick: r } = e,
        n = (0, i.bG)([T.A], () => T.A.getGuildIds({ categoryId: k.Iq }) ?? k.VX),
        c = (0, i.bG)([T.A], () => T.A.getIsFetching({ categoryId: k.Iq }) ?? !0);
    return (
        a.useEffect(() => {
            M.A.fetchFeaturedGuilds();
        }, []),
        (0, s.jsx)(eN, {
            tab: k.o.FEATURED,
            guildIds: n,
            loading: c,
            onScroll: t,
            onGuildCardSeen: l,
            onGuildCardClick: r,
        })
    );
}
function eV(e) {
    let { tab: t, onScroll: l, onGuildCardSeen: r, onGuildCardClick: n } = e,
        c = (0, I.Ub)(t),
        o = (0, i.bG)([T.A], () => T.A.getGuildIds({ categoryId: c }) ?? k.VX),
        d = (0, i.bG)([T.A], () => T.A.getIsFetching({ categoryId: c }) ?? !0);
    return (
        a.useEffect(() => {
            M.A.fetchCategoryFeaturedGuilds({ categoryId: c });
        }, [c]),
        (0, s.jsx)(eN, { tab: t, guildIds: o, loading: d, onScroll: l, onGuildCardSeen: r, onGuildCardClick: n })
    );
}
function eM(e) {
    let { selectedTab: t, onScroll: l, onGuildCardSeen: r, onGuildCardClick: i } = e;
    switch (
        (a.useEffect(() => {
            let e = (0, I.Ub)(t);
            (0, q.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case k.o.FEATURED:
            return (0, s.jsx)(eq, { tab: t, onScroll: l, onGuildCardClick: i, onGuildCardSeen: r });
        case k.o.GAMING:
        case k.o.MUSIC:
        case k.o.ENTERTAINMENT:
        case k.o.TECH:
        case k.o.EDUCATION:
            return (0, s.jsx)(eV, { tab: t, onScroll: l, onGuildCardClick: i, onGuildCardSeen: r }, t);
        case k.o.HUBS:
            return (0, s.jsx)(eU, { onScroll: l });
        default:
            (0, V.xb)(t);
    }
}
var eO = l(435558),
    eQ = l.n(eO),
    eH = l(92008),
    eP = l(770178),
    eB = l(174459),
    ez = l(773669),
    eY = l(997590);
function eK(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eY.A];
    return e === k.Iq ? v.intl.string(v.t.Omu0fS) : t.getCategoryName(e);
}
function eZ(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([eY.A], () => eK(t, [eY.A]));
}
l(667532);
var eW = l(499118);
function eX() {
    let e = C.A.useField("fetchedQuery"),
        t = C.A.useField("resultsInitialCategoryId"),
        l = C.A.useField("languageCode"),
        s = (0, i.bG)([T.A], () => (null == t ? 0 : (T.A.getTotal({ categoryId: t, query: e, languageCode: l }) ?? 0))),
        r = (0, i.bG)([T.A], () => T.A.getTotal({ categoryId: k.Iq, query: e, languageCode: l }) ?? 0),
        n = (0, i.bG)([eW.A], () => eW.A.getVisibleTabs());
    return a.useMemo(() => {
        if (null == n) return null;
        if (null == t) return n;
        let e = [],
            l = new Set();
        for (let [t, s] of n) (l.add(t), e.push([t, s]));
        let a = !1;
        return (
            l.has(k.Iq) || (l.add(k.Iq), e.unshift([k.Iq, r]), (a = !0)),
            l.has(t) || (l.add(t), e.push([t, s]), (a = !0)),
            a ? e : n
        );
    }, [n, t, r, s]);
}
var eJ = l(166976);
function e$(e) {
    let { categoryId: t, loadId: l } = e;
    (C.A.setState({ categoryId: t }),
        D.loadCategoryResults({
            loadId: l,
            categoryId: t,
            query: C.A.getField("fetchedQuery"),
            languageCode: C.A.getField("languageCode"),
        }));
}
function e0(e) {
    let { loadId: t, categoryId: l, count: r } = e,
        i = a.useCallback(() => {
            e$({ categoryId: l, loadId: t });
        }, [l, t]),
        n = C.A.useField("categoryId") === l,
        c = r.toLocaleString(ez.default.locale),
        o = eZ({ categoryId: l });
    return (0, s.jsxs)(eh.D, {
        onClick: i,
        className: Y()(eJ.L1, { [eJ.wH]: n }),
        children: [
            (0, s.jsx)(X.E, { className: eJ.UU, variant: "text-sm/medium", color: "text-strong", children: o }),
            (0, s.jsx)(X.E, { className: eJ.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
let e1 = function (e) {
    let { loadId: t } = e,
        l = eX();
    return null == l
        ? null
        : (0, s.jsx)("div", {
              className: eJ.LZ,
              children: l.map((e) => {
                  let [l, a] = e;
                  return (0, s.jsx)(e0, { loadId: t, categoryId: l, count: a }, l);
              }),
          });
};
var e2 = l(191711),
    e3 = l(226658);
function e6(e) {
    let { loadId: t } = e,
        l = C.A.useField("categoryId"),
        r = eX(),
        n = eZ({ categoryId: l }),
        c = a.useCallback(
            (e) => {
                e$({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        o = (function (e) {
            let { categoryIds: t } = e;
            return (0, i.cf)([eY.A], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        e[t] = eK(t, [eY.A]);
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
              className: e3.k,
              children: [
                  (0, s.jsx)(X.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: v.intl.string(v.t.f09BQJ),
                  }),
                  (0, s.jsx)(e2.A, {
                      items: d,
                      title: n,
                      onSelect: c,
                      selected: `${l}`,
                      "aria-label": v.intl.string(v.t.Ng5cTK),
                      variant: e2.H.FILLED,
                  }),
              ],
          });
}
var e7 = l(468646);
let e4 = function (e) {
    let { loadId: t } = e,
        l = C.A.useField("categoryId"),
        r = (0, i.bG)([eY.A], () => eY.A.getCategoryName(l)),
        n = a.useCallback(() => {
            (C.A.setState({ categoryId: k.Iq }),
                D.loadCategoryResults({
                    loadId: t,
                    categoryId: k.Iq,
                    query: C.A.getField("fetchedQuery"),
                    languageCode: C.A.getField("languageCode"),
                }));
        }, [t]),
        c = l === k.Iq ? v.intl.string(v.t.Ivw1Is) : v.intl.formatToPlainString(v.t["+1WAFb"], { categoryName: r }),
        o = l === k.Iq ? v.intl.string(v.t.aXvEjd) : v.intl.format(v.t.XLioqn, { onClick: n });
    return (0, s.jsxs)("div", {
        className: e7.kL,
        children: [
            (0, s.jsx)("img", { alt: "", src: "/assets/025eea446d3b4403.svg", className: e7.Sl }),
            (0, s.jsx)(g.D, { variant: "heading-xl/semibold", className: e7.wx, children: c }),
            (0, s.jsx)(X.E, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
};
var e9 = l(890497),
    e5 = l(118216);
function e8(e) {
    let { loadId: t } = e,
        l = (0, i.bG)([ez.default], () => (0, I.Kv)([ez.default])),
        r = C.A.useField("languageCode"),
        n = a.useCallback(
            (e) => {
                C.A.setState({ languageCode: e });
                let l = C.A.getField("fetchedQuery");
                (F({ ignoreQueries: [l] }),
                    D.loadCategoryResults({
                        loadId: t,
                        categoryId: C.A.getField("categoryId"),
                        query: l,
                        languageCode: e,
                    }));
            },
            [t],
        ),
        c = a.useMemo(() => (0, k.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, s.jsx)("div", {
        className: e5.k,
        children: (0, s.jsx)(e9.Z, {
            selectionMode: "single",
            label: v.intl.string(v.t.Ng5cTK),
            hideLabel: !0,
            value: r ?? l,
            options: c,
            onSelectionChange: n,
        }),
    });
}
var te = l(413185);
let tt = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    tl = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    ts = { page: E.liQ.GUILD_DISCOVERY, object: E.ZSU.CARD, section: E.JJy.DISCOVER_SEARCH },
    ta = eQ().throttle(y.Cf, 1e3, { leading: !1, trailing: !0 });
function tr(e) {
    let { loadId: t, onGuildCardSeen: l, onGuildCardClick: r } = e,
        {
            guildIds: n,
            loading: c,
            searchResultsQuery: o,
            loadMore: d,
            searchCategoryId: u,
        } = (function (e) {
            let { loadId: t } = e,
                l = C.A.useField("fetchedQuery"),
                s = C.A.useField("categoryId"),
                r = C.A.useField("languageCode"),
                n = a.useMemo(() => ({ categoryId: s, query: l, languageCode: r }), [s, r, l]),
                c = (0, i.bG)([T.A], () => T.A.getGuildIds(n) ?? k.VX),
                o = (0, i.bG)([T.A], () => T.A.getIsFetching(n) ?? !1),
                d = C.A.useField("resultsQuery"),
                u = d !== l,
                g = a.useCallback(() => {
                    let e = T.A.getGuildIds(n),
                        l = T.A.getTotal(n);
                    if (null == e || null == l) return;
                    let s = T.A.getIsFetching(n),
                        a = T.A.getIsInitialFetchComplete(n);
                    s ||
                        !a ||
                        e.length >= l ||
                        D.loadMoreCategoryResults({
                            loadId: t,
                            offset: e.length,
                            categoryId: C.A.getField("categoryId"),
                            query: C.A.getField("fetchedQuery"),
                            languageCode: C.A.getField("languageCode"),
                        });
                }, [t, n]);
            return a.useMemo(
                () => ({ guildIds: c, loading: u || o, searchResultsQuery: d, loadMore: g, searchCategoryId: s }),
                [c, u, o, d, g, s],
            );
        })({ loadId: t }),
        g = 0 === n.length && !c,
        h = a.useContext(eB.AnalyticsContext),
        [m, f] = a.useState((0, I.YP)()),
        [A, x] = a.useState(!0),
        y = a.useRef(A),
        [S, j] = a.useState(3),
        b = a.useRef(S),
        E = a.useRef(null),
        v = a.useCallback(
            (e) => {
                null == e || g || c || (336 * (n.length / S) <= e.height && d());
            },
            [g, c, n.length, S, d],
        ),
        R = a.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let l = t.width;
                l < 1024 && y.current ? ((y.current = !1), x(!1)) : l > 1024 && !y.current && ((y.current = !0), x(!0));
                let s = 1;
                for (l -= 450 * !!A, l -= 280; l > 0;) ((l -= 264), (s += 1));
                (s !== b.current && ((b.current = s), j(s)), v(t));
            },
            [A, v],
        ),
        N = (0, eP.w)(R, [A, v]);
    (a.useEffect(() => {
        f((0, I.YP)());
    }, [o]),
        a.useEffect(() => {
            ta({
                loadId: t,
                searchId: m,
                query: o,
                guildResults: n.map(T.A.getGuild).filter(V.Vq),
                analyticsContext: h,
                categoryId: u,
            });
        }, [h, n, t, u, m, o]));
    let p = a.useCallback((e) => l(e, u), [l, u]),
        G = a.useMemo(() => (c ? [n.length, 0] : [n.length]), [n.length, c]),
        F = a.useCallback(
            (e, l, a) => {
                switch (e) {
                    case 0:
                        return (0, s.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: l.left, width: l.width - 16 },
                                className: Y()(te.R_, { [te.Ze]: !A }),
                                children: [
                                    !A &&
                                        (0, s.jsxs)("div", {
                                            className: te.eW,
                                            children: [(0, s.jsx)(e6, { loadId: t }), (0, s.jsx)(e8, { loadId: t })],
                                        }),
                                    g && (0, s.jsx)(e4, { loadId: t }),
                                ],
                            },
                            a,
                        );
                    case 1:
                        return (0, s.jsx)(Z.y, { className: Y()(te.u1, { [te.qx]: A }) }, a);
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
        _ = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`);
            }
        }, []),
        U = a.useCallback(
            async (e, t, l, s) => {
                await r(e, t, l, s);
                let a = E.current?.getScrollerState()?.scrollTop;
                null != a && C.A.setState({ scrollPosition: a });
            },
            [r],
        ),
        q = a.useCallback(
            (e, t, l, a) => {
                if (0 !== e) return null;
                {
                    let e = n[t];
                    return (0, s.jsx)(
                        "div",
                        {
                            style: l,
                            children: (0, s.jsx)(eE, {
                                guildId: e,
                                onClick: async (e) => await U(e, t, u, ts),
                                onView: (e) => p(e),
                            }),
                        },
                        a,
                    );
                }
            },
            [n, U, p, u],
        );
    (a.useEffect(() => {
        let e = E.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && C.A.setState({ scrollPosition: t });
        };
    }, []),
        a.useLayoutEffect(() => {
            let e = C.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    E.current?.scrollTo({
                        to: e,
                        animate: !1,
                        callback: () => {
                            C.A.setState({ scrollPosition: null });
                        },
                    });
                });
        }, []));
    let M = a.useMemo(
            () =>
                (0, eO.debounce)(
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
        O = A ? tt : tl;
    return (0, s.jsx)("div", {
        className: te.kL,
        ref: N,
        children: (0, s.jsx)(eH.f, {
            ref: E,
            className: te.kf,
            sections: G,
            columns: S,
            itemGutter: 16,
            padding: O,
            renderItem: q,
            renderSection: F,
            getSectionHeight: L,
            getItemKey: w,
            getItemHeight: _,
            chunkSize: 24,
            onScroll: M,
            renderAccessory: (e) =>
                A
                    ? (0, s.jsx)("div", {
                          className: te.pz,
                          style: { height: e },
                          children: (0, s.jsxs)("div", {
                              className: te.wp,
                              children: [
                                  (0, s.jsx)("div", { className: te.jp, children: (0, s.jsx)(e8, { loadId: t }) }),
                                  (0, s.jsx)(e1, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
var ti = l(488995),
    tn = l(877149);
function tc() {
    let e,
        t,
        l,
        r = a.useRef((0, I.YP)()),
        { onScroll: i, scrollPosition: n, resetScrollPosition: c } = (0, h.G)(),
        {
            tabs: o,
            selectedTab: R,
            setSelectedTab: N,
        } = ((e = j.A.useField("selectedTab")),
        (t = a.useMemo(
            () =>
                [k.o.FEATURED, k.o.GAMING, k.o.MUSIC, k.o.ENTERTAINMENT, k.o.TECH, k.o.EDUCATION, k.o.HUBS].map(
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
        p = (0, I.Ub)(R),
        G = !k.R0.has(R),
        {
            searchQuery: w,
            onSearchTextChange: T,
            onClearSearch: _,
            onSearchSubmit: q,
            isSearchVisible: V,
        } = (function (e) {
            let { loadId: t } = e,
                l = j.A.useField("isSearchVisible"),
                s = C.A.useField("query");
            a.useEffect(() => {
                (0, U.Mu)();
            }, []);
            let r = a.useCallback((e) => {
                C.A.setState({ query: e });
            }, []);
            return {
                searchQuery: s,
                onSearchTextChange: r,
                onClearSearch: a.useCallback(() => {
                    (y.gp(t),
                        F(),
                        L(),
                        C.A.setState({
                            query: "",
                            fetchedQuery: "",
                            resultsQuery: "",
                            categoryId: k.Iq,
                            resultsInitialCategoryId: null,
                            scrollPosition: null,
                        }),
                        j.A.setState({ isSearchVisible: !1 }));
                }, [t]),
                onSearchSubmit: a.useCallback(() => {
                    let e = C.A.getField("query"),
                        l = C.A.getField("fetchedQuery");
                    if ("" === e.trim() || e === l) return;
                    F();
                    let s = C.A.getField("languageCode"),
                        a = C.A.getField("categoryId");
                    (C.A.setState({ resultsInitialCategoryId: a }),
                        j.A.setState({ isSearchVisible: !0 }),
                        D.loadCategoryResultsAndCounts({ loadId: t, categoryId: a, query: e, languageCode: s }));
                }, [t]),
                isSearchVisible: l,
            };
        })({ loadId: r.current }),
        M = j.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: O,
            onCollapsedSearchBarClick: Q,
            onSearchBarBlur: H,
            tabsClassName: P,
        } = (0, m.p)({
            isSearchBarVisible: G,
            isSearchBarEmpty: "" === w.trim(),
            searchBarState: M,
            setSearchBarState: (e) => j.A.setState({ searchBarState: e }),
        }),
        B = C.A.useField("fetchedQuery"),
        z = a.useCallback(
            (e) => {
                (N(e), V && _());
            },
            [V, _, N],
        ),
        Y = a.useMemo(
            () =>
                V
                    ? o.filter((e) => {
                          let { id: t } = e;
                          return !k.R0.has(t);
                      })
                    : o,
            [o, V],
        ),
        K = a.useRef(new S(p)),
        { onGuildCardSeen: Z, onGuildCardClick: W } = (function (e) {
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
                                case E.t02.INVITES_DISABLED:
                                    (0, b.P0)((0, b.ox)(v.intl.string(v.t["2LLbj9"]), b.Ck.FAILURE));
                                    return;
                                case E.t02.USER_BANNED:
                                    (0, b.P0)((0, b.ox)(v.intl.string(v.t["GzD/aa"]), b.Ck.FAILURE));
                                    return;
                            }
                            throw e;
                        }
                    },
                    [l],
                );
            return a.useMemo(() => ({ onGuildCardSeen: s, onGuildCardClick: r }), [r, s]);
        })({ guildDiscoveryCardSeenManager: K.current, loadId: r.current });
    return (
        a.useEffect(() => {
            K.current.flushSeenGuilds(r.current);
        }, [p]),
        a.useEffect(() => {
            c();
        }, [R, c]),
        a.useEffect(() => {
            V || C.A.setState({ scrollPosition: null });
        }, [V]),
        (0, s.jsxs)("div", {
            className: tn.kL,
            children: [
                (0, s.jsxs)(f.Ay, {
                    variant: V ? f.Z5.RELATIVE : f.Z5.OVERLAY,
                    children: [
                        !V && (0, s.jsx)(f.ns, { scrollPosition: n }),
                        V ? (0, s.jsx)(f.XQ, { icon: u.Z, onClick: _ }) : (0, s.jsx)(f.T4, { icon: d.R }),
                        !V &&
                            (0, s.jsx)(A.A, {
                                className: P,
                                tabs: Y,
                                selectedTab: R,
                                onTabSelect: z,
                                onAvailableWidthChange: O,
                            }),
                        V &&
                            (0, s.jsx)(g.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: tn.ov,
                                children: v.intl.format(v.t.zHdzqW, { query: B }),
                            }),
                        G &&
                            (0, s.jsx)(x.A, {
                                query: w,
                                placeholder: v.intl.string(v.t["5h0QOP"]),
                                onTextChange: T,
                                onClear: _,
                                onSubmit: q,
                                onCollapsedClick: Q,
                                state: V ? ti.GlobalDiscoverySearchBarState.DEFAULT : M,
                                onBlur: H,
                            }),
                    ],
                }),
                V
                    ? (0, s.jsx)(tr, { loadId: r.current, onGuildCardClick: W, onGuildCardSeen: Z })
                    : (0, s.jsx)(eM, { selectedTab: R, onScroll: i, onGuildCardClick: W, onGuildCardSeen: Z }),
            ],
        })
    );
}
var to = l(870729),
    td = l(726845),
    tu = l(285395),
    tg = l(272030);
let th = function () {
    let e = (0, i.bG)([c.A], () => c.A.hasLoadedExperiments),
        t = td.A.useField("selectedTab"),
        l = (function (e) {
            switch (e) {
                case ti.GlobalDiscoveryTab.SERVERS:
                    return (0, s.jsx)(tc, {});
                case ti.GlobalDiscoveryTab.APPS:
                    return (0, s.jsx)(o.default, {});
                case ti.GlobalDiscoveryTab.QUESTS:
                    return (0, s.jsx)(to.default, { topLevelRoute: !1 });
                default:
                    (0, V.xb)(e);
            }
        })(t),
        d = (0, r.zy)();
    return (
        a.useEffect(() => {
            let e = d.pathname,
                t = (0, tu.j)(e);
            t !== td.A.getField("selectedTab") && td.A.setState({ selectedTab: t });
        }, [d.pathname]),
        a.useEffect(() => {
            e && (0, q.tx)({ selectedTab: t });
        }, [t, e]),
        (0, s.jsxs)("section", {
            className: tg.k,
            children: [(0, s.jsx)(n.HI, { location: (0, tu.t)(t) }), (0, s.jsx)("div", { className: tg.T }), l],
        })
    );
};
