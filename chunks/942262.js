a.r(t), a.d(t, { default: () => th });
var s = a(627968),
    l = a(64700),
    r = a(873263),
    i = a(17928),
    n = a(726249),
    c = a(736056),
    o = a(919760),
    d = a(664121),
    u = a(548411),
    h = a(534514),
    g = a(711111),
    _ = a(770472),
    m = a(737823),
    A = (a(749638), a(876622)),
    C = a(299593),
    f = a(282026),
    y = a(449054);
class I {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, a) {
        this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(a)), this.guildIds.add(t);
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (y.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
var E = a(965660),
    b = a(601193);
a(321073);
var S = a(636537),
    p = a(319400),
    x = a(228366),
    j = a(324580),
    R = a(652215);
async function D(e, t) {
    let { categoryId: a, languageCode: s, offset: l, limit: r, withCounts: i } = t;
    x.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: a, languageCode: s });
    try {
        let t = await S.Bo.get({
                url: R.Rsh.GUILD_DISCOVERY_SEARCH,
                query: {
                    query: e,
                    category_id: a === j.Iq ? null : a,
                    offset: l,
                    limit: r,
                    language_code: s,
                    with_counts: i,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = t.body.guilds.map(E.uk),
            c = t.body.total_count;
        if (i) {
            let a = [];
            t.body.categories?.slice(0, 8).forEach((e) => {
                let { id: t, count: s } = e;
                a.push([Number(t), s]);
            }),
                x.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: a });
        }
        x.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            query: e,
            categoryId: a,
            languageCode: s,
            guilds: n,
            total: c,
        });
    } catch (l) {
        let t = new p.LG(l);
        y.jb({ categoryId: a, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
            i && x.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: [] }),
            x.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                query: e,
                categoryId: a,
                languageCode: s,
                error: l,
            });
    }
}
let v = function (e) {
        x.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    T = function () {
        x.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var G = a(823448),
    L = a(351022);
class N {}
let U = new (class extends N {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: a, languageCode: s, offset: l } = e;
        L.A.getIsFetching({ query: t, categoryId: a, languageCode: s }) ||
            (L.A.getIsInitialFetchComplete({ query: t, categoryId: a, languageCode: s }) &&
                (y.br({ withCounts: !1, offset: l }),
                await D(t, { categoryId: a, languageCode: s, offset: l, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: a, languageCode: s } = e,
            l = L.A.getIsFetching({ query: t, categoryId: a, languageCode: s }),
            r = L.A.getIsInitialFetchComplete({ query: t, categoryId: a, languageCode: s });
        l ||
            r ||
            (y.br({ withCounts: !1, offset: 0 }),
            await D(t, { categoryId: a, languageCode: s, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: a, categoryId: s, languageCode: l } = e;
        if ("" === t.trim()) return;
        let r = G.A.getIsFetchingCounts(t),
            i = G.A.getIsFetchingCounts(t);
        r ||
            i ||
            (f.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            y.fd(a, s),
            y.br({ withCounts: !0, offset: 0 }),
            await D(t, { categoryId: s, languageCode: l, offset: 0, limit: 12, withCounts: !0 }),
            f.A.setState({ resultsQuery: t }));
    };
})();
var k = a(460760),
    F = a(533129),
    O = a(403362),
    w = a(688713),
    V = a(902119),
    M = a(701508),
    Y = a(979590),
    q = a(783531),
    H = a(503698),
    P = a.n(H),
    Q = a(230109),
    B = a(289873),
    z = a(781696),
    K = a(834730),
    W = a(518009),
    Z = a(442433),
    J = a(736653),
    X = a(573435),
    $ = a(635350),
    ee = a(503469);
let et = l.memo(function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: P()(t, ee.En) });
});
var ea = a(419354),
    es = a(717421),
    el = a(775602);
let er = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    ei = function (e) {
        let { animate: t, state: a, cleanUp: r, children: n } = e,
            c = (0, i.bG)([el.A], () => el.A.useReducedMotion),
            o = l.useMemo(
                () =>
                    !1 === t || c
                        ? { opacity: 1 }
                        : a === W.wL.ENTERED || a === W.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: er }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: er,
                                onRest: () => {
                                    r();
                                },
                            },
                [t, r, c, a],
            ),
            d = (0, es.z)(o);
        return (0, s.jsx)(ea.animated.div, { style: d, className: ee.Hp, children: n });
    };
var en = a(714991),
    ec = a(776231),
    eo = a(486020),
    ed = a(939249),
    eu = a(26430),
    eh = a(517905),
    eg = a(889452);
let e_ = function (e) {
    let { className: t, guildId: a } = e,
        r = l.useRef(null),
        i = l.useCallback((e, t) => {
            e.stopPropagation(), t.onClick(e);
        }, []);
    return (0, s.jsx)(eh.A, {
        guildId: a,
        position: "left",
        targetElementRef: r,
        children: (e) =>
            (0, s.jsx)(ed.D, {
                ...e,
                innerRef: r,
                className: t,
                onClick: (t) => i(t, e),
                children: (0, s.jsx)("div", {
                    className: eg.K,
                    children: (0, s.jsx)(eu._, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var em = a(985018),
    eA = a(302524),
    eC = a(937495),
    ef = a(517061);
function ey(e) {
    let { guild: t, onClick: r, onView: i } = e,
        [n, c] = l.useState(!1),
        [o, d] = l.useState(!1),
        [u, g] = l.useState(!1),
        _ = l.useRef(null),
        m = l.useCallback(async () => {
            d(!0);
            try {
                await r(t.id);
            } finally {
                d(!1);
            }
        }, [t.id, r]),
        A = l.useCallback(
            (e) => {
                e && !n && (c(!0), i?.(t.id));
            },
            [t.id, n, i],
        ),
        C = l.useCallback(
            (e) => {
                (0, Z.L3)(e, async () => {
                    let { default: e } = await a.e("39572").then(a.bind(a, 235327));
                    return (a) => (0, s.jsx)(e, { ...a, guild: t });
                });
            },
            [t],
        ),
        f = (0, J.Ay)(),
        y = t.features.has(R.GuildFeatures.HUB),
        I = l.useMemo(() => {
            let e = eo.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, ec.mZ)() });
            if (null != e) return e;
            if (y) return "/assets/c47298d5d6eac3b2.svg";
            switch (f) {
                case R.NJ8.DARK:
                    return eC;
                case R.NJ8.LIGHT:
                    return ef;
            }
        }, [t.discoverySplash, t.id, y, f]),
        E = l.useMemo(() => eo.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, s.jsxs)("div", {
        className: eA.kL,
        children: [
            o &&
                (0, s.jsx)("div", {
                    className: eA.dc,
                    children: (0, s.jsx)(B.y, { type: B.y.Type.PULSING_ELLIPSIS, className: eA.u1 }),
                }),
            (0, s.jsx)(Q.L, {
                innerRef: _,
                onChange: A,
                active: !n,
                threshold: 0.55,
                children: (0, s.jsxs)($.A, {
                    ref: _,
                    className: eA.Nr,
                    onClick: m,
                    disabled: o,
                    onContextMenu: C,
                    "aria-label": em.intl.string(em.t["M9wQ+f"]),
                    children: [
                        (0, s.jsxs)("div", {
                            className: eA.wx,
                            children: [
                                (0, s.jsx)("div", {
                                    className: P()(eA.vK, { [eA.Kc]: u }),
                                    children: (0, s.jsx)("img", {
                                        src: I,
                                        alt: "",
                                        className: eA._e,
                                        onLoad: () => g(!0),
                                    }),
                                }),
                                (0, s.jsx)(e_, { className: eA.gw, guildId: t.id }),
                                (0, s.jsx)("div", {
                                    className: eA.Kk,
                                    children: (0, s.jsx)(X.Ay, {
                                        mask: X.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, s.jsx)("div", {
                                            className: eA.SA,
                                            children: (0, s.jsx)(X.Ay, {
                                                mask: X.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, s.jsx)("img", { src: E, alt: "", className: eA.my }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eA.gI,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: eA.DD,
                                    children: [
                                        (0, s.jsx)(en.A, {
                                            className: eA.n2,
                                            guild: t,
                                            tooltipColor: z.ST.Colors.PRIMARY,
                                        }),
                                        (0, s.jsx)(h.D, {
                                            variant: "heading-md/semibold",
                                            className: eA.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(K.E, {
                                    className: eA.h_,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, s.jsxs)("div", {
                                    className: eA.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, s.jsxs)("div", {
                                                className: eA.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: eA.SP }),
                                                    (0, s.jsx)(K.E, {
                                                        className: eA.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: em.intl.format(em.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, s.jsxs)("div", {
                                                className: eA.CV,
                                                children: [
                                                    (0, s.jsx)("div", { className: eA.PB }),
                                                    (0, s.jsx)(K.E, {
                                                        className: eA.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: em.intl.format(em.t.zRl6XR, { count: t.memberCount }),
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
function eI(e) {
    let { guildId: t, onClick: a, onView: l } = e,
        r = (0, i.bG)([L.A], () => L.A.getGuild(t));
    return null == r ? null : (0, s.jsx)(ey, { guild: r, onClick: a, onView: l });
}
function eE(e) {
    let { guildId: t, index: a, onClick: r, onView: i } = e,
        n = l.useRef(null == t),
        c = l.useCallback(
            (e, t, a, l) =>
                null == t.guildId
                    ? (0, s.jsx)(ei, { state: a, cleanUp: l, children: (0, s.jsx)(et, { className: eA.qf }) }, e)
                    : (0, s.jsx)(
                          ei,
                          {
                              state: a,
                              cleanUp: l,
                              animate: n.current,
                              children: (0, s.jsx)(eI, { guildId: t.guildId, onClick: r, onView: i }),
                          },
                          e,
                      ),
            [r, i],
        ),
        o = l.useCallback((e) => e.guildId ?? `${e.index}`, []),
        d = l.useMemo(() => [{ guildId: t, index: a }], [t, a]);
    return (0, s.jsx)("div", {
        className: eA.NK,
        children: (0, s.jsx)(W.F, { items: d, renderItem: c, getItemKey: o }),
    });
}
let eb = l.memo(eI);
var eS = a(983917);
let ep = { page: R.liQ.GUILD_DISCOVERY, object: R.ZSU.CARD, section: R.JJy.DISCOVER_POPULAR };
function ex(e) {
    let { tab: t, guildIds: a, loading: r, onScroll: i, onGuildCardClick: n, onGuildCardSeen: c } = e,
        o = (0, E.kc)(t),
        d = (0, E.Ot)(t),
        u = (0, E.UW)(t),
        g = (0, E.Ub)(t),
        _ = l.useMemo(() => {
            let e = r ? 30 : a.length,
                t = [];
            for (let l = 0; l < e; l++)
                t.push(
                    (0, s.jsx)(
                        eE,
                        { guildId: a[l] ?? null, index: l, onClick: (e) => n(e, l, g, ep), onView: (e) => c(e, g) },
                        a[l] ?? l,
                    ),
                );
            return t;
        }, [g, a, r, n, c]);
    return (0, s.jsxs)(q.A, {
        onScroll: i,
        children: [
            (0, s.jsx)(M.A, { title: o, description: d, children: (0, s.jsx)(V.A, {}) }),
            (0, s.jsxs)(Y.A, {
                children: [
                    (0, s.jsx)(h.D, {
                        className: eS.G,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: u,
                    }),
                    (0, s.jsx)("div", { className: eS.Q, children: _ }),
                ],
            }),
        ],
    });
}
var ej = a(686956),
    eR = a(101277),
    eD = a(661531),
    ev = a(821609),
    eT = a(192308),
    eG = a(943586);
let eL = (e) => {
    let { hasHub: t } = e;
    return (0, s.jsxs)("div", {
        className: eG.kL,
        children: [
            (0, s.jsx)("div", {
                className: eG.zc,
                children: (0, s.jsx)(eR.P, { size: "md", color: eD.A.colors.WHITE.css }),
            }),
            (0, s.jsx)(K.E, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: eG.wx,
                children: t ? em.intl.string(em.t.hsSHh8) : em.intl.string(em.t.Wf6iij),
            }),
            (0, s.jsx)(K.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eG.__invalid_description,
                children: t ? em.intl.string(em.t.FZ2J3Y) : em.intl.string(em.t.TvHcv6),
            }),
            (0, s.jsx)("div", { className: eG.rQ }),
            (0, s.jsx)(ev.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, eT.openModalLazy)(async () => {
                        let { default: e } = await a.e("90496").then(a.bind(a, 401155));
                        return (t) => (0, s.jsx)(e, { ...t });
                    }),
                text: t ? em.intl.string(em.t.IyjHD9) : em.intl.string(em.t["KU/aN4"]),
            }),
        ],
    });
};
var eN = a(71393),
    eU = a(275552);
let ek = function (e) {
    let { onScroll: t } = e,
        a = (0, i.yK)([eN.A], () => eN.A.getGuildsArray().filter((e) => e.features.has(R.GuildFeatures.HUB))),
        r = l.useMemo(
            () =>
                a.map((e) => ({
                    ...e,
                    presenceCount: void 0,
                    memberCount: void 0,
                    premiumSubscriptionCount: void 0,
                    emojis: void 0,
                })),
            [a],
        );
    return (0, s.jsxs)(q.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(M.A, {
                title: em.intl.string(em.t.X5xPlb),
                description: em.intl.string(em.t["F/IQCI"]),
                children: (0, s.jsx)(V.A, {}),
            }),
            (0, s.jsxs)(Y.A, {
                children: [
                    a.length > 0
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(h.D, {
                                      className: eS.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: em.intl.string(em.t["2DfZIQ"]),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: eS.Q,
                                      children: [
                                          r.map((e) =>
                                              (0, s.jsx)(
                                                  ey,
                                                  { guild: e, onClick: () => ej.A.transitionToGuildSync(e.id) },
                                                  e.id,
                                              ),
                                          ),
                                          (0, s.jsx)(eL, { hasHub: !0 }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, s.jsx)("div", { className: eS.Q, children: (0, s.jsx)(eL, { hasHub: !1 }) }),
                    (0, s.jsx)("div", { className: eU.yF }),
                    (0, s.jsxs)("div", {
                        className: eU.ed,
                        children: [
                            (0, s.jsxs)(K.E, {
                                className: eU.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [em.intl.string(em.t.O1k9XX), " "],
                            }),
                            (0, s.jsx)(K.E, {
                                className: eU.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: em.intl.string(em.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
function eF(e) {
    let { onScroll: t, onGuildCardSeen: a, onGuildCardClick: r } = e,
        n = (0, i.bG)([L.A], () => L.A.getGuildIds({ categoryId: j.Iq }) ?? j.VX),
        c = (0, i.bG)([L.A], () => L.A.getIsFetching({ categoryId: j.Iq }) ?? !0);
    return (
        l.useEffect(() => {
            w.A.fetchFeaturedGuilds();
        }, []),
        (0, s.jsx)(ex, {
            tab: j.o.FEATURED,
            guildIds: n,
            loading: c,
            onScroll: t,
            onGuildCardSeen: a,
            onGuildCardClick: r,
        })
    );
}
function eO(e) {
    let { tab: t, onScroll: a, onGuildCardSeen: r, onGuildCardClick: n } = e,
        c = (0, E.Ub)(t),
        o = (0, i.bG)([L.A], () => L.A.getGuildIds({ categoryId: c }) ?? j.VX),
        d = (0, i.bG)([L.A], () => L.A.getIsFetching({ categoryId: c }) ?? !0);
    return (
        l.useEffect(() => {
            w.A.fetchCategoryFeaturedGuilds({ categoryId: c });
        }, [c]),
        (0, s.jsx)(ex, { tab: t, guildIds: o, loading: d, onScroll: a, onGuildCardSeen: r, onGuildCardClick: n })
    );
}
function ew(e) {
    let { selectedTab: t, onScroll: a, onGuildCardSeen: r, onGuildCardClick: i } = e;
    switch (
        (l.useEffect(() => {
            let e = (0, E.Ub)(t);
            (0, F.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case j.o.FEATURED:
            return (0, s.jsx)(eF, { tab: t, onScroll: a, onGuildCardClick: i, onGuildCardSeen: r });
        case j.o.GAMING:
        case j.o.MUSIC:
        case j.o.ENTERTAINMENT:
        case j.o.TECH:
        case j.o.EDUCATION:
            return (0, s.jsx)(eO, { tab: t, onScroll: a, onGuildCardClick: i, onGuildCardSeen: r }, t);
        case j.o.HUBS:
            return (0, s.jsx)(ek, { onScroll: a });
        default:
            (0, O.xb)(t);
    }
}
var eV = a(735438),
    eM = a.n(eV),
    eY = a(92008),
    eq = a(770178),
    eH = a(954571),
    eP = a(773669),
    eQ = a(997590);
function eB(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eQ.A];
    return e === j.Iq ? em.intl.string(em.t.Omu0fS) : t.getCategoryName(e);
}
function ez(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([eQ.A], () => eB(t, [eQ.A]));
}
a(667532);
var eK = a(499118);
function eW() {
    let e = f.A.useField("fetchedQuery"),
        t = f.A.useField("resultsInitialCategoryId"),
        a = f.A.useField("languageCode"),
        s = (0, i.bG)([L.A], () => (null == t ? 0 : (L.A.getTotal({ categoryId: t, query: e, languageCode: a }) ?? 0))),
        r = (0, i.bG)([L.A], () => L.A.getTotal({ categoryId: j.Iq, query: e, languageCode: a }) ?? 0),
        n = (0, i.bG)([eK.A], () => eK.A.getVisibleTabs());
    return l.useMemo(() => {
        if (null == n) return null;
        if (null == t) return n;
        let e = [],
            a = new Set();
        for (let [t, s] of n) a.add(t), e.push([t, s]);
        let l = !1;
        return (
            a.has(j.Iq) || (a.add(j.Iq), e.unshift([j.Iq, r]), (l = !0)),
            a.has(t) || (a.add(t), e.push([t, s]), (l = !0)),
            l ? e : n
        );
    }, [n, t, r, s]);
}
var eZ = a(65283);
function eJ(e) {
    let { categoryId: t, loadId: a } = e;
    f.A.setState({ categoryId: t }),
        U.loadCategoryResults({
            loadId: a,
            categoryId: t,
            query: f.A.getField("fetchedQuery"),
            languageCode: f.A.getField("languageCode"),
        });
}
function eX(e) {
    let { loadId: t, categoryId: a, count: r } = e,
        i = l.useCallback(() => {
            eJ({ categoryId: a, loadId: t });
        }, [a, t]),
        n = f.A.useField("categoryId") === a,
        c = r.toLocaleString(eP.default.locale),
        o = ez({ categoryId: a });
    return (0, s.jsxs)(ed.D, {
        onClick: i,
        className: P()(eZ.L1, { [eZ.wH]: n }),
        children: [
            (0, s.jsx)(K.E, { className: eZ.UU, variant: "text-sm/medium", color: "text-strong", children: o }),
            (0, s.jsx)(K.E, { className: eZ.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
let e$ = function (e) {
    let { loadId: t } = e,
        a = eW();
    return null == a
        ? null
        : (0, s.jsx)("div", {
              className: eZ.LZ,
              children: a.map((e) => {
                  let [a, l] = e;
                  return (0, s.jsx)(eX, { loadId: t, categoryId: a, count: l }, a);
              }),
          });
};
var e0 = a(191711),
    e1 = a(429117);
function e4(e) {
    let { loadId: t } = e,
        a = f.A.useField("categoryId"),
        r = eW(),
        n = ez({ categoryId: a }),
        c = l.useCallback(
            (e) => {
                eJ({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        o = (function (e) {
            let { categoryIds: t } = e;
            return (0, i.cf)([eQ.A], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        e[t] = eB(t, [eQ.A]);
                    }),
                    e
                );
            });
        })({
            categoryIds: l.useMemo(
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
        d = l.useMemo(
            () =>
                null == r
                    ? []
                    : r.map((e) => {
                          let [t, a] = e;
                          return { id: `${t}`, name: o[t] ?? "", count: a };
                      }),
            [r, o],
        );
    return null == r
        ? null
        : (0, s.jsxs)("div", {
              className: e1.k,
              children: [
                  (0, s.jsx)(K.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: em.intl.string(em.t.f09BQJ),
                  }),
                  (0, s.jsx)(e0.A, {
                      items: d,
                      title: n,
                      onSelect: c,
                      selected: `${a}`,
                      "aria-label": em.intl.string(em.t.Ng5cTK),
                      variant: e0.H.FILLED,
                  }),
              ],
          });
}
var e5 = a(922985),
    e3 = a(842503);
let e2 = function (e) {
    let { loadId: t } = e,
        a = f.A.useField("categoryId"),
        r = (0, i.bG)([eQ.A], () => eQ.A.getCategoryName(a)),
        n = l.useCallback(() => {
            f.A.setState({ categoryId: j.Iq }),
                U.loadCategoryResults({
                    loadId: t,
                    categoryId: j.Iq,
                    query: f.A.getField("fetchedQuery"),
                    languageCode: f.A.getField("languageCode"),
                });
        }, [t]),
        c = a === j.Iq ? em.intl.string(em.t.Ivw1Is) : em.intl.formatToPlainString(em.t["+1WAFb"], { categoryName: r }),
        o = a === j.Iq ? em.intl.string(em.t.aXvEjd) : em.intl.format(em.t.XLioqn, { onClick: n });
    return (0, s.jsxs)("div", {
        className: e5.kL,
        children: [
            (0, s.jsx)("img", { alt: "", src: e3, className: e5.Sl }),
            (0, s.jsx)(h.D, { variant: "heading-xl/semibold", className: e5.wx, children: c }),
            (0, s.jsx)(K.E, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
};
var e8 = a(783878),
    e6 = a(843395);
function e7(e) {
    let { loadId: t } = e,
        a = (0, i.bG)([eP.default], () => (0, E.Kv)([eP.default])),
        r = f.A.useField("languageCode"),
        n = l.useCallback(
            (e) => {
                f.A.setState({ languageCode: e });
                let a = f.A.getField("fetchedQuery");
                v({ ignoreQueries: [a] }),
                    U.loadCategoryResults({
                        loadId: t,
                        categoryId: f.A.getField("categoryId"),
                        query: a,
                        languageCode: e,
                    });
            },
            [t],
        ),
        c = l.useMemo(() => (0, j.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, s.jsx)("div", {
        className: e6.k,
        children: (0, s.jsx)(e8.Z, {
            selectionMode: "single",
            label: em.intl.string(em.t.Ng5cTK),
            hideLabel: !0,
            value: r ?? a,
            options: c,
            onSelectionChange: n,
        }),
    });
}
var e9 = a(284402);
let te = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    tt = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    ta = { page: R.liQ.GUILD_DISCOVERY, object: R.ZSU.CARD, section: R.JJy.DISCOVER_SEARCH },
    ts = eM().throttle(y.Cf, 1e3, { leading: !1, trailing: !0 });
function tl(e) {
    let { loadId: t, onGuildCardSeen: a, onGuildCardClick: r } = e,
        {
            guildIds: n,
            loading: c,
            searchResultsQuery: o,
            loadMore: d,
            searchCategoryId: u,
        } = (function (e) {
            let { loadId: t } = e,
                a = f.A.useField("fetchedQuery"),
                s = f.A.useField("categoryId"),
                r = f.A.useField("languageCode"),
                n = l.useMemo(() => ({ categoryId: s, query: a, languageCode: r }), [s, r, a]),
                c = (0, i.bG)([L.A], () => L.A.getGuildIds(n) ?? j.VX),
                o = (0, i.bG)([L.A], () => L.A.getIsFetching(n) ?? !1),
                d = f.A.useField("resultsQuery"),
                u = d !== a,
                h = l.useCallback(() => {
                    let e = L.A.getGuildIds(n),
                        a = L.A.getTotal(n);
                    if (null == e || null == a) return;
                    let s = L.A.getIsFetching(n),
                        l = L.A.getIsInitialFetchComplete(n);
                    s ||
                        !l ||
                        e.length >= a ||
                        U.loadMoreCategoryResults({
                            loadId: t,
                            offset: e.length,
                            categoryId: f.A.getField("categoryId"),
                            query: f.A.getField("fetchedQuery"),
                            languageCode: f.A.getField("languageCode"),
                        });
                }, [t, n]);
            return l.useMemo(
                () => ({ guildIds: c, loading: u || o, searchResultsQuery: d, loadMore: h, searchCategoryId: s }),
                [c, u, o, d, h, s],
            );
        })({ loadId: t }),
        h = 0 === n.length && !c,
        g = l.useContext(eH.AnalyticsContext),
        [_, m] = l.useState((0, E.YP)()),
        [A, C] = l.useState(!0),
        y = l.useRef(A),
        [I, b] = l.useState(3),
        S = l.useRef(I),
        p = l.useRef(null),
        x = l.useCallback(
            (e) => {
                null == e || h || c || (336 * (n.length / I) <= e.height && d());
            },
            [h, c, n.length, I, d],
        ),
        R = l.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let a = t.width;
                a < 1024 && y.current ? ((y.current = !1), C(!1)) : a > 1024 && !y.current && ((y.current = !0), C(!0));
                let s = 1;
                for (a -= 450 * !!A, a -= 280; a > 0; ) (a -= 264), (s += 1);
                s !== S.current && ((S.current = s), b(s)), x(t);
            },
            [A, x],
        ),
        D = (0, eq.w)(R, [A, x]);
    l.useEffect(() => {
        m((0, E.YP)());
    }, [o]),
        l.useEffect(() => {
            ts({
                loadId: t,
                searchId: _,
                query: o,
                guildResults: n.map(L.A.getGuild).filter(O.Vq),
                analyticsContext: g,
                categoryId: u,
            });
        }, [g, n, t, u, _, o]);
    let v = l.useCallback((e) => a(e, u), [a, u]),
        T = l.useMemo(() => (c ? [n.length, 0] : [n.length]), [n.length, c]),
        G = l.useCallback(
            (e, a, l) => {
                switch (e) {
                    case 0:
                        return (0, s.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: a.left, width: a.width - 16 },
                                className: P()(e9.R_, { [e9.Ze]: !A }),
                                children: [
                                    !A &&
                                        (0, s.jsxs)("div", {
                                            className: e9.eW,
                                            children: [(0, s.jsx)(e4, { loadId: t }), (0, s.jsx)(e7, { loadId: t })],
                                        }),
                                    h && (0, s.jsx)(e2, { loadId: t }),
                                ],
                            },
                            l,
                        );
                    case 1:
                        return (0, s.jsx)(B.y, { className: P()(e9.u1, { [e9.qx]: A }) }, l);
                }
            },
            [h, A, t],
        ),
        N = l.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = A ? 16 : 68;
                        return h ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error(`[getSectionHeight] Failed for section: ${e}`);
                }
            },
            [h, A],
        ),
        k = l.useCallback(
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
        F = l.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`);
            }
        }, []),
        w = l.useCallback(
            async (e, t, a, s) => {
                await r(e, t, a, s);
                let l = p.current?.getScrollerState()?.scrollTop;
                null != l && f.A.setState({ scrollPosition: l });
            },
            [r],
        ),
        V = l.useCallback(
            (e, t, a, l) => {
                if (0 !== e) return null;
                {
                    let e = n[t];
                    return (0, s.jsx)(
                        "div",
                        {
                            style: a,
                            children: (0, s.jsx)(eb, {
                                guildId: e,
                                onClick: async (e) => await w(e, t, u, ta),
                                onView: (e) => v(e),
                            }),
                        },
                        l,
                    );
                }
            },
            [n, w, v, u],
        );
    l.useEffect(() => {
        let e = p.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && f.A.setState({ scrollPosition: t });
        };
    }, []),
        l.useLayoutEffect(() => {
            let e = f.A.getField("scrollPosition");
            null != e &&
                setTimeout(() => {
                    p.current?.scrollTo({
                        to: e,
                        animate: !1,
                        callback: () => {
                            f.A.setState({ scrollPosition: null });
                        },
                    });
                });
        }, []);
    let M = l.useMemo(
            () =>
                (0, eV.debounce)(
                    () => {
                        let e = p.current?.getScrollerState();
                        if (null == e) return;
                        let t = e.scrollTop + e.offsetHeight;
                        e.scrollHeight - t < 240 && d();
                    },
                    100,
                    { leading: !0 },
                ),
            [d],
        ),
        Y = A ? te : tt;
    return (0, s.jsx)("div", {
        className: e9.kL,
        ref: D,
        children: (0, s.jsx)(eY.f, {
            ref: p,
            className: e9.kf,
            sections: T,
            columns: I,
            itemGutter: 16,
            padding: Y,
            renderItem: V,
            renderSection: G,
            getSectionHeight: N,
            getItemKey: k,
            getItemHeight: F,
            chunkSize: 24,
            onScroll: M,
            renderAccessory: (e) =>
                A
                    ? (0, s.jsx)("div", {
                          className: e9.pz,
                          style: { height: e },
                          children: (0, s.jsxs)("div", {
                              className: e9.wp,
                              children: [
                                  (0, s.jsx)("div", { className: e9.jp, children: (0, s.jsx)(e7, { loadId: t }) }),
                                  (0, s.jsx)(e$, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
var tr = a(488995),
    ti = a(595864);
function tn() {
    let e,
        t,
        a,
        r = l.useRef((0, E.YP)()),
        { onScroll: i, scrollPosition: n, resetScrollPosition: c } = (0, g.G)(),
        {
            tabs: o,
            selectedTab: S,
            setSelectedTab: p,
        } = ((e = b.A.useField("selectedTab")),
        (t = l.useMemo(
            () =>
                [j.o.FEATURED, j.o.GAMING, j.o.MUSIC, j.o.ENTERTAINMENT, j.o.TECH, j.o.EDUCATION, j.o.HUBS].map(
                    (e) => ({ id: e, label: (0, E.jR)(e) }),
                ),
            [],
        )),
        (a = l.useCallback((e) => {
            b.A.setState({ selectedTab: e });
        }, [])),
        l.useEffect(() => {
            (null != e && t.some((t) => t.id === e)) || a(t[0].id);
        }, [e, t, a]),
        { tabs: t, selectedTab: e ?? t[0].id, setSelectedTab: a }),
        x = (0, E.Ub)(S),
        R = !j.R0.has(S),
        {
            searchQuery: D,
            onSearchTextChange: G,
            onClearSearch: L,
            onSearchSubmit: N,
            isSearchVisible: F,
        } = (function (e) {
            let { loadId: t } = e,
                a = b.A.useField("isSearchVisible"),
                s = f.A.useField("query");
            l.useEffect(() => {
                (0, k.Mu)();
            }, []);
            let r = l.useCallback((e) => {
                f.A.setState({ query: e });
            }, []);
            return {
                searchQuery: s,
                onSearchTextChange: r,
                onClearSearch: l.useCallback(() => {
                    y.gp(t),
                        v(),
                        T(),
                        f.A.setState({
                            query: "",
                            fetchedQuery: "",
                            resultsQuery: "",
                            categoryId: j.Iq,
                            resultsInitialCategoryId: null,
                            scrollPosition: null,
                        }),
                        b.A.setState({ isSearchVisible: !1 });
                }, [t]),
                onSearchSubmit: l.useCallback(() => {
                    let e = f.A.getField("query"),
                        a = f.A.getField("fetchedQuery");
                    if ("" === e.trim() || e === a) return;
                    v();
                    let s = f.A.getField("languageCode"),
                        l = f.A.getField("categoryId");
                    f.A.setState({ resultsInitialCategoryId: l }),
                        b.A.setState({ isSearchVisible: !0 }),
                        U.loadCategoryResultsAndCounts({ loadId: t, categoryId: l, query: e, languageCode: s });
                }, [t]),
                isSearchVisible: a,
            };
        })({ loadId: r.current }),
        O = b.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: w,
            onCollapsedSearchBarClick: V,
            onSearchBarBlur: M,
            tabsClassName: Y,
        } = (0, _.p)({
            isSearchBarVisible: R,
            isSearchBarEmpty: "" === D.trim(),
            searchBarState: O,
            setSearchBarState: (e) => b.A.setState({ searchBarState: e }),
        }),
        q = f.A.useField("fetchedQuery"),
        H = l.useCallback(
            (e) => {
                p(e), F && L();
            },
            [F, L, p],
        ),
        P = l.useMemo(
            () =>
                F
                    ? o.filter((e) => {
                          let { id: t } = e;
                          return !j.R0.has(t);
                      })
                    : o,
            [o, F],
        ),
        Q = l.useRef(new I(x)),
        { onGuildCardSeen: B, onGuildCardClick: z } = (function (e) {
            let { guildDiscoveryCardSeenManager: t, loadId: a } = e,
                s = l.useCallback(
                    (e, s) => {
                        t.markAsSeen(s, e, a);
                    },
                    [t, a],
                ),
                r = l.useCallback(
                    (e, t, s, l) => (0, E.Wl)({ loadId: a, guildId: e, index: t, categoryId: s, analyticsLocation: l }),
                    [a],
                );
            return l.useMemo(() => ({ onGuildCardSeen: s, onGuildCardClick: r }), [r, s]);
        })({ guildDiscoveryCardSeenManager: Q.current, loadId: r.current });
    return (
        l.useEffect(() => {
            Q.current.flushSeenGuilds(r.current);
        }, [x]),
        l.useEffect(() => {
            c();
        }, [S, c]),
        l.useEffect(() => {
            F || f.A.setState({ scrollPosition: null });
        }, [F]),
        (0, s.jsxs)("div", {
            className: ti.kL,
            children: [
                (0, s.jsxs)(m.Ay, {
                    variant: F ? m.Z5.RELATIVE : m.Z5.OVERLAY,
                    children: [
                        !F && (0, s.jsx)(m.ns, { scrollPosition: n }),
                        F ? (0, s.jsx)(m.XQ, { icon: u.Z, onClick: L }) : (0, s.jsx)(m.T4, { icon: d.R }),
                        !F &&
                            (0, s.jsx)(A.A, {
                                className: Y,
                                tabs: P,
                                selectedTab: S,
                                onTabSelect: H,
                                onAvailableWidthChange: w,
                            }),
                        F &&
                            (0, s.jsx)(h.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: ti.ov,
                                children: em.intl.format(em.t.zHdzqW, { query: q }),
                            }),
                        R &&
                            (0, s.jsx)(C.A, {
                                query: D,
                                placeholder: em.intl.string(em.t["5h0QOP"]),
                                onTextChange: G,
                                onClear: L,
                                onSubmit: N,
                                onCollapsedClick: V,
                                state: F ? tr.GlobalDiscoverySearchBarState.DEFAULT : O,
                                onBlur: M,
                            }),
                    ],
                }),
                F
                    ? (0, s.jsx)(tl, { loadId: r.current, onGuildCardClick: z, onGuildCardSeen: B })
                    : (0, s.jsx)(ew, { selectedTab: S, onScroll: i, onGuildCardClick: z, onGuildCardSeen: B }),
            ],
        })
    );
}
var tc = a(815237),
    to = a(726845),
    td = a(285395),
    tu = a(649445);
let th = function () {
    let e = (0, i.bG)([c.A], () => c.A.hasLoadedExperiments),
        t = to.A.useField("selectedTab"),
        a = (function (e) {
            switch (e) {
                case tr.GlobalDiscoveryTab.SERVERS:
                    return (0, s.jsx)(tn, {});
                case tr.GlobalDiscoveryTab.APPS:
                    return (0, s.jsx)(o.default, {});
                case tr.GlobalDiscoveryTab.QUESTS:
                    return (0, s.jsx)(tc.default, { topLevelRoute: !1 });
                default:
                    (0, O.xb)(e);
            }
        })(t),
        d = (0, r.zy)();
    return (
        l.useEffect(() => {
            let e = d.pathname,
                t = (0, td.j)(e);
            t !== to.A.getField("selectedTab") && to.A.setState({ selectedTab: t });
        }, [d.pathname]),
        l.useEffect(() => {
            e && (0, F.tx)({ selectedTab: t });
        }, [t, e]),
        (0, s.jsxs)("section", {
            className: tu.k,
            children: [(0, s.jsx)(n.HI, { location: (0, td.t)(t) }), (0, s.jsx)("div", { className: tu.T }), a],
        })
    );
};
