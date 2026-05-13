l.r(t), l.d(t, { default: () => tg });
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
    C = (l(749638), l(876622)),
    A = l(521974),
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
    j = l(601193);
l(321073);
var b = l(636537),
    E = l(319400),
    v = l(228366),
    R = l(324580),
    N = l(652215);
async function p(e, t) {
    let { categoryId: l, languageCode: s, offset: a, limit: r, withCounts: i } = t;
    v.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: l, languageCode: s });
    try {
        let t = await b.Bo.get({
                url: N.Rsh.GUILD_DISCOVERY_SEARCH,
                query: {
                    query: e,
                    category_id: l === R.Iq ? null : l,
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
                v.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: l });
        }
        v.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            query: e,
            categoryId: l,
            languageCode: s,
            guilds: n,
            total: c,
        });
    } catch (a) {
        let t = new E.LG(a);
        S.jb({ categoryId: l, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
            i && v.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS", query: e, categoryCounts: [] }),
            v.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                query: e,
                categoryId: l,
                languageCode: s,
                error: a,
            });
    }
}
let k = function (e) {
        v.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    G = function () {
        v.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    };
var F = l(823448),
    L = l(351022);
class T {}
let w = new (class extends T {
    loadMoreCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: s, offset: a } = e;
        L.A.getIsFetching({ query: t, categoryId: l, languageCode: s }) ||
            (L.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: s }) &&
                (S.br({ withCounts: !1, offset: a }),
                await p(t, { categoryId: l, languageCode: s, offset: a, limit: 12, withCounts: !1 })));
    };
    loadCategoryResults = async (e) => {
        let { query: t, categoryId: l, languageCode: s } = e,
            a = L.A.getIsFetching({ query: t, categoryId: l, languageCode: s }),
            r = L.A.getIsInitialFetchComplete({ query: t, categoryId: l, languageCode: s });
        a ||
            r ||
            (S.br({ withCounts: !1, offset: 0 }),
            await p(t, { categoryId: l, languageCode: s, offset: 0, limit: 12, withCounts: !1 }));
    };
    loadCategoryResultsAndCounts = async (e) => {
        let { query: t, loadId: l, categoryId: s, languageCode: a } = e;
        if ("" === t.trim()) return;
        let r = F.A.getIsFetchingCounts(t),
            i = F.A.getIsFetchingCounts(t);
        r ||
            i ||
            (x.A.setState({ fetchedQuery: t, resultsQuery: "" }),
            S.fd(l, s),
            S.br({ withCounts: !0, offset: 0 }),
            await p(t, { categoryId: s, languageCode: a, offset: 0, limit: 12, withCounts: !0 }),
            x.A.setState({ resultsQuery: t }));
    };
})();
var _ = l(460760),
    D = l(533129),
    U = l(403362),
    q = l(688713),
    V = l(902119),
    M = l(701508),
    O = l(979590),
    Q = l(783531),
    H = l(503698),
    P = l.n(H),
    B = l(269115),
    Y = l(289873),
    z = l(781696),
    K = l(834730),
    Z = l(518009),
    W = l(442433),
    X = l(736653),
    J = l(573435),
    $ = l(635350),
    ee = l(503469);
let et = a.memo(function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: P()(t, ee.En) });
});
var el = l(873174),
    es = l(717421),
    ea = l(775602);
let er = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    ei = function (e) {
        let { animate: t, state: l, cleanUp: r, children: n } = e,
            c = (0, i.bG)([ea.A], () => ea.A.useReducedMotion),
            o = a.useMemo(
                () =>
                    !1 === t || c
                        ? { opacity: 1 }
                        : l === Z.wL.ENTERED || l === Z.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: er }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: er,
                                onRest: () => {
                                    r();
                                },
                            },
                [t, r, c, l],
            ),
            d = (0, es.z)(o);
        return (0, s.jsx)(el.animated.div, { style: d, className: ee.Hp, children: n });
    };
var en = l(714991),
    ec = l(776231),
    eo = l(486020),
    ed = l(939249),
    eu = l(26430),
    eg = l(517905),
    eh = l(889452);
let em = function (e) {
    let { className: t, guildId: l } = e,
        r = a.useRef(null),
        i = a.useCallback((e, t) => {
            e.stopPropagation(), t.onClick(e);
        }, []);
    return (0, s.jsx)(eg.A, {
        guildId: l,
        position: "left",
        targetElementRef: r,
        children: (e) =>
            (0, s.jsx)(ed.D, {
                ...e,
                innerRef: r,
                className: t,
                onClick: (t) => i(t, e),
                children: (0, s.jsx)("div", {
                    className: eh.K,
                    children: (0, s.jsx)(eu._, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
var ef = l(375708),
    eC = l(302524),
    eA = l(937495),
    ex = l(517061);
function eS(e) {
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
        C = a.useCallback(
            (e) => {
                e && !n && (c(!0), i?.(t.id));
            },
            [t.id, n, i],
        ),
        A = a.useCallback(
            (e) => {
                (0, W.L3)(e, async () => {
                    let { default: e } = await l.e("39572").then(l.bind(l, 235327));
                    return (l) => (0, s.jsx)(e, { ...l, guild: t });
                });
            },
            [t],
        ),
        x = (0, X.Ay)(),
        S = t.features.has(N.GuildFeatures.HUB),
        y = a.useMemo(() => {
            let e = eo.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discoverySplash, size: 300 * (0, ec.mZ)() });
            if (null != e) return e;
            if (S) return "/assets/c47298d5d6eac3b2.svg";
            switch (x) {
                case N.NJ8.DARK:
                    return eA;
                case N.NJ8.LIGHT:
                    return ex;
            }
        }, [t.discoverySplash, t.id, S, x]),
        I = a.useMemo(() => eo.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }), [t.icon, t.id]);
    return (0, s.jsxs)("div", {
        className: eC.kL,
        children: [
            o &&
                (0, s.jsx)("div", {
                    className: eC.dc,
                    children: (0, s.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS, className: eC.u1 }),
                }),
            (0, s.jsx)(B.L, {
                innerRef: m,
                onChange: C,
                active: !n,
                threshold: 0.55,
                children: (0, s.jsxs)($.A, {
                    ref: m,
                    className: eC.Nr,
                    onClick: f,
                    disabled: o,
                    onContextMenu: A,
                    "aria-label": ef.intl.string(ef.t["M9wQ+f"]),
                    children: [
                        (0, s.jsxs)("div", {
                            className: eC.wx,
                            children: [
                                (0, s.jsx)("div", {
                                    className: P()(eC.vK, { [eC.Kc]: u }),
                                    children: (0, s.jsx)("img", {
                                        src: y,
                                        alt: "",
                                        className: eC._e,
                                        onLoad: () => h(!0),
                                    }),
                                }),
                                (0, s.jsx)(em, { className: eC.gw, guildId: t.id }),
                                (0, s.jsx)("div", {
                                    className: eC.Kk,
                                    children: (0, s.jsx)(J.Ay, {
                                        mask: J.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, s.jsx)("div", {
                                            className: eC.SA,
                                            children: (0, s.jsx)(J.Ay, {
                                                mask: J.Ay.Masks.SQUIRCLE,
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
                                        (0, s.jsx)(en.A, {
                                            className: eC.n2,
                                            guild: t,
                                            tooltipColor: z.ST.Colors.PRIMARY,
                                        }),
                                        (0, s.jsx)(g.D, {
                                            variant: "heading-md/semibold",
                                            className: eC.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(K.E, {
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
                                                    (0, s.jsx)(K.E, {
                                                        className: eC.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: ef.intl.format(ef.t["LC+S+m"], {
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
                                                    (0, s.jsx)(K.E, {
                                                        className: eC.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: ef.intl.format(ef.t.zRl6XR, { count: t.memberCount }),
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
function ey(e) {
    let { guildId: t, onClick: l, onView: a } = e,
        r = (0, i.bG)([L.A], () => L.A.getGuild(t));
    return null == r ? null : (0, s.jsx)(eS, { guild: r, onClick: l, onView: a });
}
function eI(e) {
    let { guildId: t, index: l, onClick: r, onView: i } = e,
        n = a.useRef(null == t),
        c = a.useCallback(
            (e, t, l, a) =>
                null == t.guildId
                    ? (0, s.jsx)(ei, { state: l, cleanUp: a, children: (0, s.jsx)(et, { className: eC.qf }) }, e)
                    : (0, s.jsx)(
                          ei,
                          {
                              state: l,
                              cleanUp: a,
                              animate: n.current,
                              children: (0, s.jsx)(ey, { guildId: t.guildId, onClick: r, onView: i }),
                          },
                          e,
                      ),
            [r, i],
        ),
        o = a.useCallback((e) => e.guildId ?? `${e.index}`, []),
        d = a.useMemo(() => [{ guildId: t, index: l }], [t, l]);
    return (0, s.jsx)("div", {
        className: eC.NK,
        children: (0, s.jsx)(Z.F, { items: d, renderItem: c, getItemKey: o }),
    });
}
let ej = a.memo(ey);
var eb = l(983917);
let eE = { page: N.liQ.GUILD_DISCOVERY, object: N.ZSU.CARD, section: N.JJy.DISCOVER_POPULAR };
function ev(e) {
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
                        eI,
                        { guildId: l[a] ?? null, index: a, onClick: (e) => n(e, a, h, eE), onView: (e) => c(e, h) },
                        l[a] ?? a,
                    ),
                );
            return t;
        }, [h, l, r, n, c]);
    return (0, s.jsxs)(Q.A, {
        onScroll: i,
        children: [
            (0, s.jsx)(M.A, { title: o, description: d, children: (0, s.jsx)(V.A, {}) }),
            (0, s.jsxs)(O.A, {
                children: [
                    (0, s.jsx)(g.D, {
                        className: eb.G,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: u,
                    }),
                    (0, s.jsx)("div", { className: eb.Q, children: m }),
                ],
            }),
        ],
    });
}
var eR = l(66834),
    eN = l(101277),
    ep = l(661531),
    ek = l(821609),
    eG = l(192308),
    eF = l(943586);
let eL = (e) => {
    let { hasHub: t } = e;
    return (0, s.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, s.jsx)("div", {
                className: eF.zc,
                children: (0, s.jsx)(eN.P, { size: "md", color: ep.A.colors.WHITE.css }),
            }),
            (0, s.jsx)(K.E, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: eF.wx,
                children: t ? ef.intl.string(ef.t.hsSHh8) : ef.intl.string(ef.t.Wf6iij),
            }),
            (0, s.jsx)(K.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eF.__invalid_description,
                children: t ? ef.intl.string(ef.t.FZ2J3Y) : ef.intl.string(ef.t.TvHcv6),
            }),
            (0, s.jsx)("div", { className: eF.rQ }),
            (0, s.jsx)(ek.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, eG.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            l.e("93010"),
                            l.e("97804"),
                            l.e("7265"),
                            l.e("97641"),
                            l.e("90496"),
                        ]).then(l.bind(l, 401155));
                        return (t) => (0, s.jsx)(e, { ...t });
                    }),
                text: t ? ef.intl.string(ef.t.IyjHD9) : ef.intl.string(ef.t["KU/aN4"]),
            }),
        ],
    });
};
var eT = l(71393),
    ew = l(275552);
let e_ = function (e) {
    let { onScroll: t } = e,
        l = (0, i.yK)([eT.A], () => eT.A.getGuildsArray().filter((e) => e.features.has(N.GuildFeatures.HUB))),
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
    return (0, s.jsxs)(Q.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(M.A, {
                title: ef.intl.string(ef.t.X5xPlb),
                description: ef.intl.string(ef.t["F/IQCI"]),
                children: (0, s.jsx)(V.A, {}),
            }),
            (0, s.jsxs)(O.A, {
                children: [
                    l.length > 0
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(g.D, {
                                      className: eb.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: ef.intl.string(ef.t["2DfZIQ"]),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: eb.Q,
                                      children: [
                                          r.map((e) =>
                                              (0, s.jsx)(
                                                  eS,
                                                  { guild: e, onClick: () => eR.A.transitionToGuildSync(e.id) },
                                                  e.id,
                                              ),
                                          ),
                                          (0, s.jsx)(eL, { hasHub: !0 }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, s.jsx)("div", { className: eb.Q, children: (0, s.jsx)(eL, { hasHub: !1 }) }),
                    (0, s.jsx)("div", { className: ew.yF }),
                    (0, s.jsxs)("div", {
                        className: ew.ed,
                        children: [
                            (0, s.jsxs)(K.E, {
                                className: ew.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [ef.intl.string(ef.t.O1k9XX), " "],
                            }),
                            (0, s.jsx)(K.E, {
                                className: ew.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: ef.intl.string(ef.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
function eD(e) {
    let { onScroll: t, onGuildCardSeen: l, onGuildCardClick: r } = e,
        n = (0, i.bG)([L.A], () => L.A.getGuildIds({ categoryId: R.Iq }) ?? R.VX),
        c = (0, i.bG)([L.A], () => L.A.getIsFetching({ categoryId: R.Iq }) ?? !0);
    return (
        a.useEffect(() => {
            q.A.fetchFeaturedGuilds();
        }, []),
        (0, s.jsx)(ev, {
            tab: R.o.FEATURED,
            guildIds: n,
            loading: c,
            onScroll: t,
            onGuildCardSeen: l,
            onGuildCardClick: r,
        })
    );
}
function eU(e) {
    let { tab: t, onScroll: l, onGuildCardSeen: r, onGuildCardClick: n } = e,
        c = (0, I.Ub)(t),
        o = (0, i.bG)([L.A], () => L.A.getGuildIds({ categoryId: c }) ?? R.VX),
        d = (0, i.bG)([L.A], () => L.A.getIsFetching({ categoryId: c }) ?? !0);
    return (
        a.useEffect(() => {
            q.A.fetchCategoryFeaturedGuilds({ categoryId: c });
        }, [c]),
        (0, s.jsx)(ev, { tab: t, guildIds: o, loading: d, onScroll: l, onGuildCardSeen: r, onGuildCardClick: n })
    );
}
function eq(e) {
    let { selectedTab: t, onScroll: l, onGuildCardSeen: r, onGuildCardClick: i } = e;
    switch (
        (a.useEffect(() => {
            let e = (0, I.Ub)(t);
            (0, D.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case R.o.FEATURED:
            return (0, s.jsx)(eD, { tab: t, onScroll: l, onGuildCardClick: i, onGuildCardSeen: r });
        case R.o.GAMING:
        case R.o.MUSIC:
        case R.o.ENTERTAINMENT:
        case R.o.TECH:
        case R.o.EDUCATION:
            return (0, s.jsx)(eU, { tab: t, onScroll: l, onGuildCardClick: i, onGuildCardSeen: r }, t);
        case R.o.HUBS:
            return (0, s.jsx)(e_, { onScroll: l });
        default:
            (0, U.xb)(t);
    }
}
var eV = l(735438),
    eM = l.n(eV),
    eO = l(92008),
    eQ = l(770178),
    eH = l(174459),
    eP = l(773669),
    eB = l(997590);
function eY(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eB.A];
    return e === R.Iq ? ef.intl.string(ef.t.Omu0fS) : t.getCategoryName(e);
}
function ez(e) {
    let { categoryId: t } = e;
    return (0, i.bG)([eB.A], () => eY(t, [eB.A]));
}
l(667532);
var eK = l(499118);
function eZ() {
    let e = x.A.useField("fetchedQuery"),
        t = x.A.useField("resultsInitialCategoryId"),
        l = x.A.useField("languageCode"),
        s = (0, i.bG)([L.A], () => (null == t ? 0 : (L.A.getTotal({ categoryId: t, query: e, languageCode: l }) ?? 0))),
        r = (0, i.bG)([L.A], () => L.A.getTotal({ categoryId: R.Iq, query: e, languageCode: l }) ?? 0),
        n = (0, i.bG)([eK.A], () => eK.A.getVisibleTabs());
    return a.useMemo(() => {
        if (null == n) return null;
        if (null == t) return n;
        let e = [],
            l = new Set();
        for (let [t, s] of n) l.add(t), e.push([t, s]);
        let a = !1;
        return (
            l.has(R.Iq) || (l.add(R.Iq), e.unshift([R.Iq, r]), (a = !0)),
            l.has(t) || (l.add(t), e.push([t, s]), (a = !0)),
            a ? e : n
        );
    }, [n, t, r, s]);
}
var eW = l(65283);
function eX(e) {
    let { categoryId: t, loadId: l } = e;
    x.A.setState({ categoryId: t }),
        w.loadCategoryResults({
            loadId: l,
            categoryId: t,
            query: x.A.getField("fetchedQuery"),
            languageCode: x.A.getField("languageCode"),
        });
}
function eJ(e) {
    let { loadId: t, categoryId: l, count: r } = e,
        i = a.useCallback(() => {
            eX({ categoryId: l, loadId: t });
        }, [l, t]),
        n = x.A.useField("categoryId") === l,
        c = r.toLocaleString(eP.default.locale),
        o = ez({ categoryId: l });
    return (0, s.jsxs)(ed.D, {
        onClick: i,
        className: P()(eW.L1, { [eW.wH]: n }),
        children: [
            (0, s.jsx)(K.E, { className: eW.UU, variant: "text-sm/medium", color: "text-strong", children: o }),
            (0, s.jsx)(K.E, { className: eW.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
let e$ = function (e) {
    let { loadId: t } = e,
        l = eZ();
    return null == l
        ? null
        : (0, s.jsx)("div", {
              className: eW.LZ,
              children: l.map((e) => {
                  let [l, a] = e;
                  return (0, s.jsx)(eJ, { loadId: t, categoryId: l, count: a }, l);
              }),
          });
};
var e0 = l(191711),
    e1 = l(429117);
function e2(e) {
    let { loadId: t } = e,
        l = x.A.useField("categoryId"),
        r = eZ(),
        n = ez({ categoryId: l }),
        c = a.useCallback(
            (e) => {
                eX({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        o = (function (e) {
            let { categoryIds: t } = e;
            return (0, i.cf)([eB.A], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        e[t] = eY(t, [eB.A]);
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
              className: e1.k,
              children: [
                  (0, s.jsx)(K.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: ef.intl.string(ef.t.f09BQJ),
                  }),
                  (0, s.jsx)(e0.A, {
                      items: d,
                      title: n,
                      onSelect: c,
                      selected: `${l}`,
                      "aria-label": ef.intl.string(ef.t.Ng5cTK),
                      variant: e0.H.FILLED,
                  }),
              ],
          });
}
var e3 = l(922985),
    e5 = l(842503);
let e6 = function (e) {
    let { loadId: t } = e,
        l = x.A.useField("categoryId"),
        r = (0, i.bG)([eB.A], () => eB.A.getCategoryName(l)),
        n = a.useCallback(() => {
            x.A.setState({ categoryId: R.Iq }),
                w.loadCategoryResults({
                    loadId: t,
                    categoryId: R.Iq,
                    query: x.A.getField("fetchedQuery"),
                    languageCode: x.A.getField("languageCode"),
                });
        }, [t]),
        c = l === R.Iq ? ef.intl.string(ef.t.Ivw1Is) : ef.intl.formatToPlainString(ef.t["+1WAFb"], { categoryName: r }),
        o = l === R.Iq ? ef.intl.string(ef.t.aXvEjd) : ef.intl.format(ef.t.XLioqn, { onClick: n });
    return (0, s.jsxs)("div", {
        className: e3.kL,
        children: [
            (0, s.jsx)("img", { alt: "", src: e5, className: e3.Sl }),
            (0, s.jsx)(g.D, { variant: "heading-xl/semibold", className: e3.wx, children: c }),
            (0, s.jsx)(K.E, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
};
var e4 = l(783878),
    e9 = l(843395);
function e7(e) {
    let { loadId: t } = e,
        l = (0, i.bG)([eP.default], () => (0, I.Kv)([eP.default])),
        r = x.A.useField("languageCode"),
        n = a.useCallback(
            (e) => {
                x.A.setState({ languageCode: e });
                let l = x.A.getField("fetchedQuery");
                k({ ignoreQueries: [l] }),
                    w.loadCategoryResults({
                        loadId: t,
                        categoryId: x.A.getField("categoryId"),
                        query: l,
                        languageCode: e,
                    });
            },
            [t],
        ),
        c = a.useMemo(() => (0, R.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, s.jsx)("div", {
        className: e9.k,
        children: (0, s.jsx)(e4.Z, {
            selectionMode: "single",
            label: ef.intl.string(ef.t.Ng5cTK),
            hideLabel: !0,
            value: r ?? l,
            options: c,
            onSelectionChange: n,
        }),
    });
}
var e8 = l(284402);
let te = Object.freeze({ top: 0, bottom: 0, left: 32, right: 202 }),
    tt = Object.freeze({ top: 0, bottom: 0, left: 32, right: 32 }),
    tl = { page: N.liQ.GUILD_DISCOVERY, object: N.ZSU.CARD, section: N.JJy.DISCOVER_SEARCH },
    ts = eM().throttle(S.Cf, 1e3, { leading: !1, trailing: !0 });
function ta(e) {
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
                c = (0, i.bG)([L.A], () => L.A.getGuildIds(n) ?? R.VX),
                o = (0, i.bG)([L.A], () => L.A.getIsFetching(n) ?? !1),
                d = x.A.useField("resultsQuery"),
                u = d !== l,
                g = a.useCallback(() => {
                    let e = L.A.getGuildIds(n),
                        l = L.A.getTotal(n);
                    if (null == e || null == l) return;
                    let s = L.A.getIsFetching(n),
                        a = L.A.getIsInitialFetchComplete(n);
                    s ||
                        !a ||
                        e.length >= l ||
                        w.loadMoreCategoryResults({
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
        h = a.useContext(eH.AnalyticsContext),
        [m, f] = a.useState((0, I.YP)()),
        [C, A] = a.useState(!0),
        S = a.useRef(C),
        [y, j] = a.useState(3),
        b = a.useRef(y),
        E = a.useRef(null),
        v = a.useCallback(
            (e) => {
                null == e || g || c || (336 * (n.length / y) <= e.height && d());
            },
            [g, c, n.length, y, d],
        ),
        N = a.useCallback(
            (e) => {
                let t = e.contentRect;
                if (null == t) return;
                let l = t.width;
                l < 1024 && S.current ? ((S.current = !1), A(!1)) : l > 1024 && !S.current && ((S.current = !0), A(!0));
                let s = 1;
                for (l -= 450 * !!C, l -= 280; l > 0; ) (l -= 264), (s += 1);
                s !== b.current && ((b.current = s), j(s)), v(t);
            },
            [C, v],
        ),
        p = (0, eQ.w)(N, [C, v]);
    a.useEffect(() => {
        f((0, I.YP)());
    }, [o]),
        a.useEffect(() => {
            ts({
                loadId: t,
                searchId: m,
                query: o,
                guildResults: n.map(L.A.getGuild).filter(U.Vq),
                analyticsContext: h,
                categoryId: u,
            });
        }, [h, n, t, u, m, o]);
    let k = a.useCallback((e) => l(e, u), [l, u]),
        G = a.useMemo(() => (c ? [n.length, 0] : [n.length]), [n.length, c]),
        F = a.useCallback(
            (e, l, a) => {
                switch (e) {
                    case 0:
                        return (0, s.jsxs)(
                            "div",
                            {
                                style: { paddingLeft: l.left, width: l.width - 16 },
                                className: P()(e8.R_, { [e8.Ze]: !C }),
                                children: [
                                    !C &&
                                        (0, s.jsxs)("div", {
                                            className: e8.eW,
                                            children: [(0, s.jsx)(e2, { loadId: t }), (0, s.jsx)(e7, { loadId: t })],
                                        }),
                                    g && (0, s.jsx)(e6, { loadId: t }),
                                ],
                            },
                            a,
                        );
                    case 1:
                        return (0, s.jsx)(Y.y, { className: P()(e8.u1, { [e8.qx]: C }) }, a);
                }
            },
            [g, C, t],
        ),
        T = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = C ? 16 : 68;
                        return g ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error(`[getSectionHeight] Failed for section: ${e}`);
                }
            },
            [g, C],
        ),
        _ = a.useCallback(
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
        D = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`);
            }
        }, []),
        q = a.useCallback(
            async (e, t, l, s) => {
                await r(e, t, l, s);
                let a = E.current?.getScrollerState()?.scrollTop;
                null != a && x.A.setState({ scrollPosition: a });
            },
            [r],
        ),
        V = a.useCallback(
            (e, t, l, a) => {
                if (0 !== e) return null;
                {
                    let e = n[t];
                    return (0, s.jsx)(
                        "div",
                        {
                            style: l,
                            children: (0, s.jsx)(ej, {
                                guildId: e,
                                onClick: async (e) => await q(e, t, u, tl),
                                onView: (e) => k(e),
                            }),
                        },
                        a,
                    );
                }
            },
            [n, q, k, u],
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
    let M = a.useMemo(
            () =>
                (0, eV.debounce)(
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
        O = C ? te : tt;
    return (0, s.jsx)("div", {
        className: e8.kL,
        ref: p,
        children: (0, s.jsx)(eO.f, {
            ref: E,
            className: e8.kf,
            sections: G,
            columns: y,
            itemGutter: 16,
            padding: O,
            renderItem: V,
            renderSection: F,
            getSectionHeight: T,
            getItemKey: _,
            getItemHeight: D,
            chunkSize: 24,
            onScroll: M,
            renderAccessory: (e) =>
                C
                    ? (0, s.jsx)("div", {
                          className: e8.pz,
                          style: { height: e },
                          children: (0, s.jsxs)("div", {
                              className: e8.wp,
                              children: [
                                  (0, s.jsx)("div", { className: e8.jp, children: (0, s.jsx)(e7, { loadId: t }) }),
                                  (0, s.jsx)(e$, { loadId: t }),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
var tr = l(488995),
    ti = l(595864);
function tn() {
    let e,
        t,
        l,
        r = a.useRef((0, I.YP)()),
        { onScroll: i, scrollPosition: n, resetScrollPosition: c } = (0, h.G)(),
        {
            tabs: o,
            selectedTab: b,
            setSelectedTab: E,
        } = ((e = j.A.useField("selectedTab")),
        (t = a.useMemo(
            () =>
                [R.o.FEATURED, R.o.GAMING, R.o.MUSIC, R.o.ENTERTAINMENT, R.o.TECH, R.o.EDUCATION, R.o.HUBS].map(
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
        v = (0, I.Ub)(b),
        N = !R.R0.has(b),
        {
            searchQuery: p,
            onSearchTextChange: F,
            onClearSearch: L,
            onSearchSubmit: T,
            isSearchVisible: D,
        } = (function (e) {
            let { loadId: t } = e,
                l = j.A.useField("isSearchVisible"),
                s = x.A.useField("query");
            a.useEffect(() => {
                (0, _.Mu)();
            }, []);
            let r = a.useCallback((e) => {
                x.A.setState({ query: e });
            }, []);
            return {
                searchQuery: s,
                onSearchTextChange: r,
                onClearSearch: a.useCallback(() => {
                    S.gp(t),
                        k(),
                        G(),
                        x.A.setState({
                            query: "",
                            fetchedQuery: "",
                            resultsQuery: "",
                            categoryId: R.Iq,
                            resultsInitialCategoryId: null,
                            scrollPosition: null,
                        }),
                        j.A.setState({ isSearchVisible: !1 });
                }, [t]),
                onSearchSubmit: a.useCallback(() => {
                    let e = x.A.getField("query"),
                        l = x.A.getField("fetchedQuery");
                    if ("" === e.trim() || e === l) return;
                    k();
                    let s = x.A.getField("languageCode"),
                        a = x.A.getField("categoryId");
                    x.A.setState({ resultsInitialCategoryId: a }),
                        j.A.setState({ isSearchVisible: !0 }),
                        w.loadCategoryResultsAndCounts({ loadId: t, categoryId: a, query: e, languageCode: s });
                }, [t]),
                isSearchVisible: l,
            };
        })({ loadId: r.current }),
        U = j.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: q,
            onCollapsedSearchBarClick: V,
            onSearchBarBlur: M,
            tabsClassName: O,
        } = (0, m.p)({
            isSearchBarVisible: N,
            isSearchBarEmpty: "" === p.trim(),
            searchBarState: U,
            setSearchBarState: (e) => j.A.setState({ searchBarState: e }),
        }),
        Q = x.A.useField("fetchedQuery"),
        H = a.useCallback(
            (e) => {
                E(e), D && L();
            },
            [D, L, E],
        ),
        P = a.useMemo(
            () =>
                D
                    ? o.filter((e) => {
                          let { id: t } = e;
                          return !R.R0.has(t);
                      })
                    : o,
            [o, D],
        ),
        B = a.useRef(new y(v)),
        { onGuildCardSeen: Y, onGuildCardClick: z } = (function (e) {
            let { guildDiscoveryCardSeenManager: t, loadId: l } = e,
                s = a.useCallback(
                    (e, s) => {
                        t.markAsSeen(s, e, l);
                    },
                    [t, l],
                ),
                r = a.useCallback(
                    (e, t, s, a) => (0, I.Wl)({ loadId: l, guildId: e, index: t, categoryId: s, analyticsLocation: a }),
                    [l],
                );
            return a.useMemo(() => ({ onGuildCardSeen: s, onGuildCardClick: r }), [r, s]);
        })({ guildDiscoveryCardSeenManager: B.current, loadId: r.current });
    return (
        a.useEffect(() => {
            B.current.flushSeenGuilds(r.current);
        }, [v]),
        a.useEffect(() => {
            c();
        }, [b, c]),
        a.useEffect(() => {
            D || x.A.setState({ scrollPosition: null });
        }, [D]),
        (0, s.jsxs)("div", {
            className: ti.kL,
            children: [
                (0, s.jsxs)(f.Ay, {
                    variant: D ? f.Z5.RELATIVE : f.Z5.OVERLAY,
                    children: [
                        !D && (0, s.jsx)(f.ns, { scrollPosition: n }),
                        D ? (0, s.jsx)(f.XQ, { icon: u.Z, onClick: L }) : (0, s.jsx)(f.T4, { icon: d.R }),
                        !D &&
                            (0, s.jsx)(C.A, {
                                className: O,
                                tabs: P,
                                selectedTab: b,
                                onTabSelect: H,
                                onAvailableWidthChange: q,
                            }),
                        D &&
                            (0, s.jsx)(g.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: ti.ov,
                                children: ef.intl.format(ef.t.zHdzqW, { query: Q }),
                            }),
                        N &&
                            (0, s.jsx)(A.A, {
                                query: p,
                                placeholder: ef.intl.string(ef.t["5h0QOP"]),
                                onTextChange: F,
                                onClear: L,
                                onSubmit: T,
                                onCollapsedClick: V,
                                state: D ? tr.GlobalDiscoverySearchBarState.DEFAULT : U,
                                onBlur: M,
                            }),
                    ],
                }),
                D
                    ? (0, s.jsx)(ta, { loadId: r.current, onGuildCardClick: z, onGuildCardSeen: Y })
                    : (0, s.jsx)(eq, { selectedTab: b, onScroll: i, onGuildCardClick: z, onGuildCardSeen: Y }),
            ],
        })
    );
}
var tc = l(743650),
    to = l(726845),
    td = l(285395),
    tu = l(649445);
let tg = function () {
    let e = (0, i.bG)([c.A], () => c.A.hasLoadedExperiments),
        t = to.A.useField("selectedTab"),
        l = (function (e) {
            switch (e) {
                case tr.GlobalDiscoveryTab.SERVERS:
                    return (0, s.jsx)(tn, {});
                case tr.GlobalDiscoveryTab.APPS:
                    return (0, s.jsx)(o.default, {});
                case tr.GlobalDiscoveryTab.QUESTS:
                    return (0, s.jsx)(tc.default, { topLevelRoute: !1 });
                default:
                    (0, U.xb)(e);
            }
        })(t),
        d = (0, r.zy)();
    return (
        a.useEffect(() => {
            let e = d.pathname,
                t = (0, td.j)(e);
            t !== to.A.getField("selectedTab") && to.A.setState({ selectedTab: t });
        }, [d.pathname]),
        a.useEffect(() => {
            e && (0, D.tx)({ selectedTab: t });
        }, [t, e]),
        (0, s.jsxs)("section", {
            className: tu.k,
            children: [(0, s.jsx)(n.HI, { location: (0, td.t)(t) }), (0, s.jsx)("div", { className: tu.T }), l],
        })
    );
};
