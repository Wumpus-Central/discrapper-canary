s.r(t), s.d(t, { default: () => lM });
var l,
    n,
    a,
    r,
    i,
    o,
    c = s(627968),
    d = s(64700),
    u = s(503698),
    g = s.n(u),
    m = s(835245),
    h = s(702841),
    E = s(192308),
    x = s(315710),
    p = s(944791),
    C = s(444927),
    f = s(688810),
    S = s(726249),
    _ = s(475073),
    b = s(611924),
    A = s(561794),
    L = s(287809),
    v = s(440938),
    j = s(590180),
    I = s(161918),
    O = s(17928),
    N = s(793574),
    y = s(174459),
    k = s(428262),
    T = s(870216),
    R = s(758836),
    B = s(652215),
    M = s(788868);
let P = (e) => {
    let { analyticsSource: t, analyticsLocations: s } = (0, O.cf)([T.A], () => T.A.getAnalytics()),
        l = ((e) => {
            switch (e) {
                case R.G2.ORBS:
                    return N.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case R.G2.HOME:
                    return N.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case R.G2.BUNDLES:
                    return N.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case R.G2.AVATAR_DECORATIONS:
                    return N.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case R.G2.PROFILE_EFFECTS:
                    return N.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case R.G2.NAMEPLATES:
                    return N.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case R.G2.PROFILE_FRAMES:
                    return N.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                case R.G2.CATALOG:
                case R.G2.COLLECTION_INDEX:
                case R.G2.LAYOUT:
                    return N.A.COLLECTIBLES_SHOP;
                case R.G2.GAME_SHOPS:
                    return N.A.SLAYER_STOREFRONT_SHOP_TAB;
            }
        })(e),
        { analyticsLocations: n, newestAnalyticsLocation: a } = (0, f.Ay)([...s, N.A.COLLECTIBLES_SHOP, l]);
    return { analyticsSource: t, analyticsLocations: n, newestAnalyticsLocation: a, currentTabLocation: l };
};
var D = s(773669),
    H = s(248352),
    w = s(945810);
let F = (0, w.mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var G = s(375708),
    U = (((l = {})[(l.COUNTDOWN = 0)] = "COUNTDOWN"), l),
    z = s(841702),
    V = s(621653),
    W = s(983545),
    K = s(23161),
    Y = (((n = {}).HOME = "home"), (n.CATALOG = "catalog"), (n.ORBS = "orbs"), n),
    $ = s(775602),
    q = s(578797),
    Z = s(38405),
    J = s(4227),
    Q = s(856686),
    X = s(689175),
    ee = s(364522),
    et = s(834730),
    es = s(821609),
    el = s(783977),
    en = s(59520);
let ea = (e, t, s, l) => {
        let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: r = 0, scrollWidth: i = 0 } = l;
        if (r > 0) {
            let l = (n + a) / r;
            l > 0 &&
                y.default.track(e, {
                    scroll_visible_percent: l,
                    source: s,
                    page_height: Math.round(r),
                    page_width: Math.round(i),
                    page_session_id: t,
                });
        }
    },
    er = (e, t) => {
        let { analyticsSource: s } = P(t),
            l = (0, en.I)(ea, 5e3, [], { trailing: !0 }),
            n = (0, v.uM)(),
            a = n?.sessionId;
        return {
            handleScroll: d.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        l(B.HAw.COLLECTIBLES_SHOP_SCROLLED, null != a ? a : "", s, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [l, s, a, e]),
        };
    };
var ei = s(354328),
    eo = s(356118),
    ec = s(619835),
    ed = s(641150),
    eu = s(534514);
function eg() {
    let { itemTypeFilters: e, searchQuery: t } = (0, K.v)((e) => e),
        { totalCount: s, isFetchingResults: l } = (0, Q.S)(),
        n = (0, K.v)((e) => e.hasFilters()),
        a = d.useCallback(() => {
            if (!n) return "";
            if (l) return G.intl.string(G.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return G.intl.format(G.t.KJMJOz, { count: s, search: e });
            }
            return 1 === e.size && e.has(ed.q.AVATAR_DECORATION)
                ? G.intl.format(G.t.s1UzGQ, { count: s })
                : 1 === e.size && e.has(ed.q.NAMEPLATE)
                  ? G.intl.format(G.t.ZWGN9T, { count: s })
                  : 1 === e.size && e.has(ed.q.PROFILE_EFFECT)
                    ? G.intl.format(G.t["v/7apu"], { count: s })
                    : 1 === e.size && e.has(ed.q.PROFILE_FRAME)
                      ? G.intl.format(G.t.eu4eRy, { count: s })
                      : 1 === e.size && e.has(ed.q.BUNDLE)
                        ? G.intl.format(G.t.fZ1rdk, { count: s })
                        : G.intl.format(G.t["/rPvmQ"], { count: s });
        }, [e, s, n, t, l]);
    return (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: a() });
}
var em = s(172218),
    eh = s(932793),
    eE = s(940980),
    ex = s(993408),
    ep = s(623373),
    eC = s(660653),
    ef = s(466459);
let eS = () => {
    let e = (0, h.bG)([L.default], () => L.default.getCurrentUser()),
        t = k.Ay.canUseShopDiscounts(e);
    return (0, d.useCallback)(
        (e) =>
            null == e || 0 === e.length
                ? e
                : e.filter((e) => {
                      let { isPurchased: s } = (0, ef.o)(J.A, e);
                      if (!(0, ex.aw)(e) || (0, ex.tt)(e) || s) return !0;
                      if (!(0, eC.uh)(e)) return !1;
                      if ((0, ep.Ab)(e)) return null != (0, ep.CW)({ product: e, hasShopDiscount: t });
                      let l = (0, ex.l8)(t),
                          n = (0, ex.yt)(e, l);
                      if (null == n || 0 === n.amount) return !0;
                      let a = 0;
                      return (
                          null != e.bundledProducts &&
                              (a = e.bundledProducts.reduce((e, t) => {
                                  let s = (0, ex.yt)(t, l);
                                  return e + (s?.amount ?? 0);
                              }, 0)),
                          n.amount < a
                      );
                  }),
        [t],
    );
};
var e_ = s(575593);
let eb = (e, t) =>
        e.type === e_.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
            ? 1
            : (0, ep.B1)(e)
              ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
              : 2 * !!t.includes(e.skuId),
    eA = (e) => {
        let t = (0, h.bG)([J.A], () => J.A.purchases),
            s = (0, d.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, d.useMemo)(() => [...e].sort((e, t) => eb(e, s) - eb(t, s)), [e, s]);
    };
var eL = s(100057),
    ev = s(126031),
    ej = s(653887),
    eI = s(607470),
    eO = s(531685),
    eN = s(812993),
    ey = s(616459);
let ek = (e) => {
    let { category: t, daysRemainingText: s = G.t.Io7ozn, className: l } = e;
    if (!(0, ex.HF)(t.unpublishedAt)) return null;
    let n = (0, ex.WU)(t.unpublishedAt),
        a = n > 1 ? G.intl.formatToPlainString(s, { days: n }) : G.intl.string(G.t.Bc13HF);
    return (0, c.jsx)(eN.Lp, { disableColor: !0, text: a, className: g()(ey.q, l) });
};
var eT = s(212407),
    eR = s(215688);
function eB(e) {
    let { category: t } = e,
        s = (0, h.bG)([$.Ay], () => $.Ay.useReducedMotion),
        l = (0, h.bG)([eO.A], () => eO.A.isFocused()),
        { catalogBannerStatic: n, catalogBannerAnimated: a, catalogBannerRive: r } = (0, eT.MV)(t),
        i = d.useRef(null),
        o = null != r;
    return (0, c.jsxs)("div", {
        ref: i,
        className: g()(eR.sW, { [eR.by]: o }),
        children: [
            (0, c.jsx)(ev.s, { children: (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: t.name }) }),
            o
                ? (0, c.jsx)(ej._, {
                      src: r,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: i,
                      autoplay: !0,
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)("img", { className: eR.ze, src: n, alt: "" }),
                          null != a &&
                              !s &&
                              l &&
                              (0, c.jsx)(eI.A, { src: a, className: eR.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, c.jsx)(ek, { category: t, className: eR.v0, daysRemainingText: G.t["8gsP5M"] }),
        ],
    });
}
(0, ex.$b)(90);
var eM = s(496569),
    eP = s(835090);
let eD = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, c.jsx)("div", {
        className: g()(eM.ty, eP.SQ, { [eP.aE]: !t }),
        children: (0, c.jsxs)("div", {
            className: g()(eM.qt, eP.yw),
            children: [(0, c.jsx)("div", { className: eP.Jr }), (0, c.jsx)("div", { className: eP.N9 })],
        }),
    });
};
var eH = s(647685),
    ew = s(10);
let eF = () =>
    (0, c.jsx)("div", {
        className: ew.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, c.jsxs)(
                "div",
                {
                    className: eH.vY,
                    children: [
                        (0, c.jsx)("div", { className: g()(eR.sW, ew.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, c.jsx)(eD, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
var eG = s(828614),
    eU = s(561769),
    ez = s(159439),
    eV = s(998694);
function eW(e) {
    let { category: t } = e,
        s = (0, h.bG)([L.default], () => L.default.getCurrentUser()),
        l = eA(t.products),
        n = eS()(l),
        a = (0, eE.W)("CollectiblesCatalogContent");
    return null == s || 0 === n.length
        ? null
        : (0, c.jsx)("div", {
              className: eH.vY,
              children: n.map((e, t) =>
                  (0, c.jsx)(
                      v.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, c.jsx)(
                              eG.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: a ? eU.Hi.FIAT : void 0,
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function eK(e) {
    let { category: t } = e,
        [s, l] = d.useState(!1),
        n = (0, em.K)((e) => {
            l(e);
        }, 0.15);
    return (0, c.jsxs)("div", {
        className: eH.EF,
        ref: n,
        children: [(0, c.jsx)(eB, { category: t }), (0, c.jsx)(eW, { category: t })],
    });
}
function eY(e) {
    let { categories: t, setCategoryRef: s, currentPage: l, handlePageChange: n, initialCategoryId: a } = e,
        r = (0, v.uM)(),
        i = (0, ez.U)(),
        o = r?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eV.A)(),
        m = d.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        h = d.useRef(void 0);
    d.useEffect(() => {
        if (null == a || 0 === m.length) {
            h.current = void 0;
            return;
        }
        if (a === h.current) return;
        let e = m.findIndex((e) => e.skuId === a);
        if (-1 === e) return;
        let t = Math.floor(e / R.l5) + 1;
        t !== l && n(t), (h.current = a);
    }, [a, m, n, l]);
    let E = d.useMemo(() => {
        let e = (l - 1) * R.l5;
        return m.slice(e, e + R.l5);
    }, [m, l]);
    return (d.useEffect(() => {
        (0, eL.z)({
            sessionId: o,
            checkpoint: eL.t.SHOP_MOUNTED,
            tab: R.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    d.useEffect(() => {
        i ||
            0 === E.length ||
            (0, eL.z)({
                sessionId: o,
                checkpoint: eL.t.SHOP_RENDERED,
                tab: R.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [o, g, u, i, E.length]),
    i)
        ? (0, c.jsx)(eF, {})
        : (0, c.jsxs)("div", {
              className: eH.LZ,
              children: [
                  E.map((e, t) =>
                      (0, c.jsx)(
                          "div",
                          {
                              ref: (t) => s(e.skuId, t),
                              children: (0, c.jsx)(v.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, c.jsx)(eK, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, c.jsx)("div", {
                      className: eH.Ej,
                      children: (0, c.jsx)(eh.m, {
                          currentPage: l,
                          totalCount: m.length,
                          pageSize: R.l5,
                          onPageChange: n,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var e$ = s(177366),
    eq = s(401864),
    eZ = s(124987),
    eJ = s(691885),
    eQ = s(146919),
    eX = s(912853);
let e0 = () => {
    let { sort: e, onSetSort: t, hasRelevanceFilters: s } = (0, K.v)(),
        l = (0, v.uM)(),
        n = (0, eQ.yB)("CollectiblesSortSelect"),
        a = s(),
        r = d.useMemo(() => R.QB.filter((e) => e.sortType !== eZ.$.RELEVANCE || a), [a]),
        i = d.useCallback((e) => {
            let { sortType: t, sortDirection: s } = e;
            return t === eZ.$.RECENCY
                ? { label: G.intl.string(G.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eZ.$.PRICE
                  ? s === eq.A.ASC
                      ? { label: G.intl.string(G.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: G.intl.string(G.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eZ.$.RELEVANCE
                    ? { label: G.intl.string(G.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: G.intl.string(G.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = d.useCallback(
            (e) =>
                ({
                    recent: { sortType: eZ.$.RECENCY, sortDirection: eq.A.DESC },
                    "price-asc": { sortType: eZ.$.PRICE, sortDirection: eq.A.ASC },
                    "price-desc": { sortType: eZ.$.PRICE, sortDirection: eq.A.DESC },
                    popularity: { sortType: eZ.$.POPULARITY, sortDirection: eq.A.DESC },
                    relevance: { sortType: eZ.$.RELEVANCE, sortDirection: eq.A.DESC },
                })[e],
            [],
        ),
        u = d.useCallback(
            (e) => {
                let s = i(o(e));
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${s.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(o(e));
            },
            [l, i, o, t],
        ),
        m = i(e);
    return (0, c.jsx)("div", {
        className: g()(eX.k, { [eQ.jP]: n }),
        children: (0, c.jsx)(eJ.l, {
            label: G.intl.string(G.t.uaX705),
            hideLabel: !0,
            options: r.map(i),
            onSelectionChange: u,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var e1 =
        (((a = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (a.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (a.PINK = "COLLECTIBLES_COLOR_PINK"),
        (a.RED = "COLLECTIBLES_COLOR_RED"),
        (a.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (a.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (a.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (a.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (a.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (a.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        a),
    e2 =
        (((r = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (r.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (r.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (r.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (r.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (r.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (r.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (r.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (r.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (r.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        r),
    e5 = s(990078),
    e4 = s(150934),
    e9 = s(508770),
    e6 = s(602853),
    e3 = s(661531),
    e7 = s(939249),
    e8 = s(947641),
    te = s(604338),
    tt = s(785866),
    ts = s(373846),
    tl = s(308323),
    tn = s(608599),
    ta = s(685761),
    tr = s(157225),
    ti = s(413249),
    to = s(510241),
    tc = s(601198),
    td = s(736653),
    tu = s(7250),
    tg = s(13875),
    tm = s(818348),
    th = s(764915);
function tE() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: s, hasFilters: l } = (0, K.v)(),
        n = l(),
        a = (0, tg.sk)("FilterBar"),
        r = (0, v.uM)(),
        i = d.useRef(null),
        o = d.useMemo(() => R._6.filter((e) => a || e !== ed.q.PROFILE_FRAME), [a]),
        u = d.useCallback(
            (e) => {
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: r?.sessionId,
                    page_section: r?.pageSection,
                    page_category: r?.pageCategory,
                    page_index: r?.pageIndex,
                    page_size: r?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [r],
        );
    return (0, c.jsxs)("div", {
        className: th.kT,
        children: [
            (0, c.jsxs)("div", {
                className: g()(th.KZ, th.YG),
                children: [
                    (0, c.jsx)("div", {
                        ref: i,
                        tabIndex: -1,
                        children: (0, c.jsx)(et.E, {
                            variant: "text-md/semibold",
                            className: th.hr,
                            children: G.intl.string(G.t.Qk6r1a),
                        }),
                    }),
                    o.map((e) => (0, c.jsx)(tx, { filter: e, trackFilterAction: u }, e)),
                    (0, c.jsx)(e4.S, {
                        checked: t,
                        onChange: () => {
                            u(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: G.intl.string(G.t.AHHHgG),
                    }),
                ],
            }),
            (0, c.jsx)(tp, { trackFilterAction: u }),
            (0, c.jsx)(tS, { trackFilterAction: u }),
            n &&
                (0, c.jsx)(es.$, {
                    variant: "secondary",
                    onClick: () => {
                        u("filter reset"), s(), requestAnimationFrame(() => i.current?.focus());
                    },
                    text: G.intl.string(G.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let tx = (e) => {
        let { filter: t, trackFilterAction: s } = e,
            l = {
                [ed.q.AVATAR_DECORATION]: G.intl.string(G.t.dRZYNE),
                [ed.q.PROFILE_EFFECT]: G.intl.string(G.t["1cNjtx"]),
                [ed.q.NAMEPLATE]: G.intl.string(G.t.V68Fqz),
                [ed.q.PROFILE_FRAME]: G.intl.string(G.t.ecTJkR),
                [ed.q.BUNDLE]: G.intl.string(G.t.FYFpps),
            },
            { itemTypeFilters: n, onToggleItemType: a } = (0, K.v)(),
            r = (0, c.jsx)(e4.S, {
                checked: n.has(t),
                onChange: () => {
                    let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                    s(`filter item type ${e} ${!1 === n.has(t) ? "on" : "off"}`), a(t);
                },
                label: l[t] ?? "",
            });
        return t === ed.q.PROFILE_FRAME
            ? (0, c.jsxs)("div", { className: th.Ym, children: [r, (0, c.jsx)(e9.E, { type: "new" })] })
            : r;
    },
    tp = (e) => {
        let { trackFilterAction: t } = e,
            s = d.useMemo(
                () => [
                    { color: "#9B59B6", label: G.intl.string(G.t.kqUD4P), enum: e1.PURPLE },
                    { color: "#3498DB", label: G.intl.string(G.t.qQTRae), enum: e1.BLUE },
                    { color: "#2ECC71", label: G.intl.string(G.t["f/Ylk6"]), enum: e1.GREEN },
                    { color: "#A0522D", label: G.intl.string(G.t["Sd/BMa"]), enum: e1.BROWN },
                    { color: "#F1C40F", label: G.intl.string(G.t["0fevYz"]), enum: e1.YELLOW },
                ],
                [],
            ),
            l = d.useMemo(
                () => [
                    { color: "#E67E22", label: G.intl.string(G.t.ZE7weD), enum: e1.ORANGE },
                    { color: "#E74C3C", label: G.intl.string(G.t.hKJGOM), enum: e1.RED },
                    { color: "#EC407A", label: G.intl.string(G.t.HvLEGM), enum: e1.PINK },
                    { color: "#FFFFFF", label: G.intl.string(G.t["CB+lNO"]), enum: e1.WHITE },
                    { color: "#262626", label: G.intl.string(G.t["dMey+v"]), enum: e1.BLACK },
                ],
                [],
            );
        return (0, c.jsxs)("div", {
            className: th.KZ,
            children: [
                (0, c.jsx)(et.E, {
                    variant: "text-md/semibold",
                    className: th.hr,
                    children: G.intl.string(G.t.K1xGoG),
                }),
                (0, c.jsx)(tC, { colors: s, trackFilterAction: t }),
                (0, c.jsx)(tC, { colors: l, trackFilterAction: t }),
            ],
        });
    },
    tC = (e) => {
        let { colors: t, trackFilterAction: s } = e,
            { colorFilters: l, onToggleColor: n } = (0, K.v)();
        return (0, c.jsx)("div", {
            className: th.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: r } = e;
                return (0, c.jsx)(
                    tf,
                    { color: t, label: a, enum: r, isToggled: l.has(r), onToggleColor: n, trackFilterAction: s },
                    r,
                );
            }),
        });
    },
    tf = (e) => {
        let { color: t, label: s, enum: l, isToggled: n, onToggleColor: a, trackFilterAction: r } = e,
            i = (0, e6.r)(e3.A.unsafe_rawColors.WHITE).hex(),
            o = (0, e6.r)(e3.A.unsafe_rawColors.PRIMARY_530).hex();
        return (0, c.jsx)(
            e5.m,
            {
                text: s,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, c.jsx)(
                    e7.D,
                    {
                        className: g()(th.n1, { [th.lx]: n }),
                        style: { backgroundColor: t },
                        "aria-label": s,
                        "aria-pressed": n,
                        onClick: () => {
                            r(`filter color ${s.toLowerCase()} ${!n ? "on" : "off"}`), a(l);
                        },
                        children:
                            n &&
                            (0, c.jsx)("div", {
                                className: th.oE,
                                children: (0, c.jsx)(e8.r, {
                                    size: "xs",
                                    color: (0, tu.j)({ backgroundColor: t, colors: [i, o] }),
                                }),
                            }),
                    },
                    t,
                ),
            },
            s,
        );
    },
    tS = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: s, onToggleTheme: l } = (0, K.v)(),
            n = (0, td.Ay)() === tm.NJ.DARK,
            a = d.useCallback(
                (e) => {
                    if (s.has(e) || n) return "always-white";
                },
                [s, n],
            ),
            r = d.useCallback(
                (e) => (s.has(e) || n ? e3.A.colors.WHITE : e3.A.colors.INTERACTIVE_TEXT_DEFAULT),
                [s, n],
            ),
            i = d.useMemo(
                () => [
                    {
                        name: G.intl.string(G.t.aVBOKh),
                        icon: (0, c.jsx)(te.E, { size: "xs", color: r(e2.ANIME) }),
                        enum: e2.ANIME,
                    },
                    {
                        name: G.intl.string(G.t["3WoZBc"]),
                        icon: (0, c.jsx)(tt._, { size: "xs", color: r(e2.GAMING) }),
                        enum: e2.GAMING,
                    },
                    {
                        name: G.intl.string(G.t.yuEmLj),
                        icon: (0, c.jsx)(ts.C, { size: "xs", color: r(e2.CUTE_COZY) }),
                        enum: e2.CUTE_COZY,
                    },
                    {
                        name: G.intl.string(G.t.mMvCHo),
                        icon: (0, c.jsx)(tl.L, { size: "xs", color: r(e2.SCI_FI) }),
                        enum: e2.SCI_FI,
                    },
                    {
                        name: G.intl.string(G.t.TlhOQC),
                        icon: (0, c.jsx)(tn.L, { size: "xs", color: r(e2.FOOD_DRINKS) }),
                        enum: e2.FOOD_DRINKS,
                    },
                    {
                        name: G.intl.string(G.t["4IaUIM"]),
                        icon: (0, c.jsx)(ta.f, { size: "xs", color: r(e2.FANTASY) }),
                        enum: e2.FANTASY,
                    },
                    {
                        name: G.intl.string(G.t["w0nSG/"]),
                        icon: (0, c.jsx)(tr.N, { size: "xs", color: r(e2.ANIMALS_PETS) }),
                        enum: e2.ANIMALS_PETS,
                    },
                    {
                        name: G.intl.string(G.t.cJng7v),
                        icon: (0, c.jsx)(ti.p, { size: "xs", color: r(e2.NATURE) }),
                        enum: e2.NATURE,
                    },
                    {
                        name: G.intl.string(G.t["5mUvyM"]),
                        icon: (0, c.jsx)(to.T, { size: "xs", color: r(e2.MOVIES_TV_SHOWS) }),
                        enum: e2.MOVIES_TV_SHOWS,
                    },
                    {
                        name: G.intl.string(G.t.MB9H5Z),
                        icon: (0, c.jsx)(tc.e, { size: "xs", color: r(e2.DARK_MOODY) }),
                        enum: e2.DARK_MOODY,
                    },
                ],
                [r],
            );
        return (0, c.jsxs)("div", {
            className: th.KZ,
            children: [
                (0, c.jsx)(et.E, {
                    variant: "text-md/semibold",
                    className: th.hr,
                    children: G.intl.string(G.t.t1Ztrp),
                }),
                (0, c.jsx)("div", {
                    className: th.Ot,
                    children: i.map((e) => {
                        let { name: n, icon: r, enum: i } = e;
                        return (0, c.jsxs)(
                            e7.D,
                            {
                                className: g()(th.w4, { [th.C7]: s.has(i) }),
                                "aria-label": n,
                                "aria-pressed": s.has(i),
                                onClick: () => {
                                    let e = s.has(i);
                                    t(`filter theme ${n.toLowerCase()} ${!e ? "on" : "off"}`), l(i);
                                },
                                children: [
                                    r,
                                    (0, c.jsx)(et.E, { color: a(i), variant: "text-md/medium", children: n }),
                                ],
                            },
                            n,
                        );
                    }),
                }),
            ],
        });
    };
var t_ = s(687971);
function tb() {
    return (0, c.jsxs)("div", {
        className: t_.k,
        children: [
            (0, c.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: G.intl.string(G.t.oezC3x),
                className: t_._,
            }),
            (0, c.jsx)(eu.D, { variant: "heading-xl/semibold", children: G.intl.string(G.t.oezC3x) }),
            (0, c.jsx)(et.E, { variant: "text-md/medium", children: G.intl.string(G.t["Tc/Ndl"]) }),
        ],
    });
}
var tA = s(528096);
let tL = { flattenProductVariants: !0 };
function tv(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: l } = e,
        n = (0, v.uM)(),
        a = n?.sessionId ?? "",
        { noCache: r, includeUnpublished: i } = (0, eV.A)(),
        o = (0, eE.W)("CollectiblesFilterResults"),
        u = (0, h.bG)([L.default], () => L.default.getCurrentUser()),
        { skus: m, currentPage: E, totalCount: x, isFetchingResults: p } = (0, Q.S)(),
        C = (0, h.yK)([j.A], () => j.A.getProductsBySkus(m)),
        f = d.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        S = m?.join("");
    d.useEffect(() => {
        f();
    }, [S, f]);
    let _ = eS(),
        b = d.useMemo(() => _(C), [_, C]);
    d.useEffect(() => {
        t ||
            (0, eL.z)({
                sessionId: a,
                checkpoint: eL.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: i,
                cacheDisabled: r,
            });
    }, [a, i, r, t, l]);
    let A = d.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: O, queryPageSize: N } = (0, K.v)(),
        [k, T] = d.useState(!1),
        R = t || p || null == u;
    d.useEffect(() => {
        R ? T(!1) : b.length > 0 && T(!0);
    }, [R, b.length]);
    let M = N > 0 && !R && 0 === b.length;
    d.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == A.current || I(Math.floor(5 * getComputedStyle(A.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != A.current) return e.observe(A.current), () => e.disconnect();
    }, [I]);
    let P = d.useCallback(
        (e) => {
            y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: n?.sessionId,
                page_section: n?.pageSection,
                page_category: n?.pageCategory,
                page_index: e,
                page_size: N,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                O((e - 1) * N);
        },
        [n, N, O],
    );
    return (0, c.jsxs)(eU.v3.Provider, {
        value: tL,
        children: [
            (0, c.jsxs)("div", {
                className: g()({ [tA.oE]: M }),
                children: [
                    M && (0, c.jsx)(tb, {}),
                    (0, c.jsxs)("div", {
                        className: g()(tA.ZE, { [tA.Kp]: k }),
                        ref: A,
                        children: [
                            R && [...Array(N)].map((e, t) => (0, c.jsx)(eD, {}, t)),
                            !R &&
                                b.map((e, t) =>
                                    null == j.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, c.jsx)(
                                              v.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, c.jsx)(
                                                      eG.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: o ? eU.Hi.FIAT : void 0,
                                                      },
                                                      e.skuId,
                                                  ),
                                              },
                                              e.skuId,
                                          ),
                                ),
                        ],
                    }),
                ],
            }),
            x > N &&
                (0, c.jsx)("div", {
                    className: tA.Ej,
                    children: (0, c.jsx)("div", {
                        children: (0, c.jsx)(eh.m, {
                            currentPage: E,
                            totalCount: x,
                            pageSize: N,
                            onPageChange: P,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var tj = s(832179);
function tI(e) {
    let { tab: t, categories: s, initialCategoryId: l, showFilterInitially: n = !0, onUnmount: a } = e,
        r = (0, ei.A)("shop_include_unpublished");
    (0, K.S)(r);
    let i = d.useRef(null),
        { handleScroll: o } = er(i, t),
        u = (0, q.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, e$.k0)(i.current),
        [h, E] = d.useState(n),
        [x, p] = d.useState(!1);
    return (
        d.useEffect(() => {
            null != l && m(l);
        }, [l, m]),
        d.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        d.useEffect(() => {
            let e = () => {
                p(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, c.jsx)("div", {
            className: tj.VM,
            children: (0, c.jsxs)("main", {
                className: tj.MY,
                children: [
                    (0, c.jsx)(X.Gt, {
                        className: tj.OW,
                        ref: i,
                        onScroll: o,
                        children: u
                            ? (0, c.jsx)("div", {
                                  className: tj.en,
                                  children: (0, c.jsx)("div", {
                                      className: tj.pf,
                                      children: (0, c.jsx)(eo.Z_, { tenantId: B.FYj, templateId: ec.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, c.jsx)(tO, {
                                  isSmallScreen: x,
                                  filterBarOpen: h,
                                  setFilterBarOpen: E,
                                  tab: t,
                                  scrollerRef: i,
                                  categories: s,
                                  setCategoryRef: g,
                                  initialCategoryId: l,
                              }),
                    }),
                    h && !x && (0, c.jsx)("div", { className: tj.yF }),
                    h && !x && (0, c.jsx)(ee.Ip, { className: tj.kT, children: (0, c.jsx)(tE, {}) }),
                ],
            }),
        })
    );
}
let tO = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: s,
            setFilterBarOpen: l,
            tab: n,
            scrollerRef: a,
            categories: r,
            setCategoryRef: i,
            initialCategoryId: o,
        } = e,
        u = d.useRef(null),
        m = (0, K.v)((e) => e.hasDefaultFilters()),
        h = (0, v.uM)(),
        { handlePageChange: E, currentPage: x } = ((e) => {
            let [t, s] = d.useState(1);
            return {
                currentPage: t,
                handlePageChange: d.useCallback(
                    (t) => {
                        s(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, s],
                ),
            };
        })(a),
        p = d.useCallback(
            (e) => {
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    E(e);
            },
            [h, E],
        ),
        C = d.useRef(null);
    return (
        d.useEffect(() => {
            if (!t || !s) return;
            let e = (e) => {
                let t = e.target;
                null === u.current ||
                    null === C.current ||
                    u.current.contains(t) ||
                    C.current.contains(t) ||
                    (y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    l(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, s, l, h]),
        (0, c.jsx)("div", {
            className: tj.en,
            children: (0, c.jsxs)("div", {
                className: tj.pf,
                children: [
                    (0, c.jsxs)("div", {
                        className: tj.ne,
                        children: [
                            (0, c.jsx)("div", { className: tj.lQ, children: (0, c.jsx)(eg, {}) }),
                            (0, c.jsxs)("div", {
                                className: g()(tj.wR, { [tj.Im]: t }),
                                children: [
                                    (0, c.jsxs)("div", {
                                        className: tj.Ul,
                                        children: [
                                            (0, c.jsx)(et.E, {
                                                variant: "text-md/semibold",
                                                children: G.intl.string(G.t.uaX705),
                                            }),
                                            (0, c.jsx)(e0, {}),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        ref: C,
                                        children: (0, c.jsx)(es.$, {
                                            onClick: () => {
                                                let e = !s;
                                                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    l(e);
                                            },
                                            variant: "secondary",
                                            text: G.intl.string(s ? G.t.fYtm6f : G.t["TeTYE+"]),
                                            icon: el.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            s &&
                                t &&
                                (0, c.jsx)("div", {
                                    className: tj.Dh,
                                    ref: u,
                                    children: (0, c.jsx)(X.Ch, { className: tj.Qo, children: (0, c.jsx)(tE, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, c.jsx)(v.R9, {
                              newValue: { pageIndex: x },
                              children: (0, c.jsx)(eY, {
                                  categories: r,
                                  setCategoryRef: i,
                                  currentPage: x,
                                  handlePageChange: p,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, c.jsx)(tv, { scrollerRef: a, tab: n }, n),
                ],
            }),
        })
    );
};
var tN = s(599062),
    ty = s(651162),
    tk = s(554146),
    tT = s(367727);
let tR = d.createContext(null);
function tB(e) {
    let { blockType: t, children: s } = e,
        l = d.useMemo(() => ({ blockType: t }), [t]);
    return (0, c.jsx)(tR.Provider, { value: l, children: s });
}
var tM = s(755172),
    tP = s(325595),
    tD = s(893998),
    tH = s(110629),
    tw = s(308186),
    tF = s(607399),
    tG = s(946015),
    tU = s(717421);
s(321073);
var tz = s(140735),
    tV = s(496431),
    tW = s(467513);
let tK = (e) => {
    let t,
        s,
        { endDate: l, size: n = "md", className: a, showSeconds: r = !1 } = e,
        { days: i, hours: o, minutes: d, seconds: u } = (0, tV.A)(l),
        m = ((s = [(t = (e) => `${e.toString().padStart(2, "0")}`)(i), t(o), t(d)]), r && s.push(t(u)), s.join(":"));
    return (0, c.jsxs)("div", {
        className: g()(tW.kL, a),
        role: "timer",
        children: [
            m
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, c.jsx)(
                              et.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: tW.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, c.jsx)(
                              et.E,
                              {
                                  color: "always-white",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: tW.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, c.jsx)(tz.A, { children: G.intl.format(G.t.j6IyVe, { days: i, hours: o, minutes: d }) }),
        ],
    });
};
var tY = s(134264);
let t$ = d.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: s } = e,
        l = (0, tU.z)({
            transform: `translateX(-50%) ${s ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsxs)(tw.animated.div, {
        className: g()([tY.lP, tF.Fr && tY.yJ]),
        role: "status",
        style: {
            ...l,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, c.jsxs)(tG.s, {
                direction: tG.s.Direction.VERTICAL,
                children: [
                    (0, c.jsx)(et.E, {
                        variant: "text-md/medium",
                        className: tY.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, c.jsx)(et.E, {
                            variant: "text-sm/medium",
                            className: tY.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, c.jsx)(tK, { endDate: t.endTime }),
        ],
    });
});
var tq = s(424918),
    tZ = s(269115),
    tJ = s(597783),
    tQ = s(941734);
let tX = (e) => {
        let t,
            { category: s, subblock: l, badgeText: n, enablePreview: a, handleTransition: r } = e;
        null != l && (t = j.A.getCategoryByStoreListingId(l?.categoryStoreListingId)?.skuId);
        let i = t ?? s?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tJ.Z)(i, "home", "marketing featured block"),
            u = (0, eT.s4)(s, l, a),
            g = d.useRef(null),
            m = l?.bodyText,
            h = l?.name ?? s?.name,
            E = null != h ? G.intl.formatToPlainString(G.t.frSHlf, { destination: h }) : void 0,
            x = (0, v.uM)();
        return (0, c.jsx)(tZ.L, {
            innerRef: g,
            onChange: o,
            threshold: 0,
            children: (0, c.jsxs)(e7.D, {
                className: tQ.oT,
                innerRef: g,
                style: { ...(null != u && { backgroundImage: `url(${u})` }) },
                onClick: () => {
                    r({
                        sourceButton: "shop marketing tile",
                        categorySkuId: i,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: s?.isOrbsExclusive,
                    }),
                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: x?.sessionId,
                            sku_id: i,
                            page_type: "home",
                            page_section: x?.pageSection,
                            page_category: x?.pageCategory,
                            tile_type: "FEATURED_BLOCK",
                            tile_position: String(x?.tilePosition),
                            cta_name: null,
                        });
                },
                children: [
                    null != n && (0, c.jsx)(eN.Lp, { disableColor: !0, text: n, className: tQ.pv }),
                    (0, c.jsx)("div", {
                        className: tQ.Gh,
                        children:
                            null != m &&
                            (0, c.jsx)(eu.D, {
                                lineClamp: 4,
                                className: tQ.BN,
                                style: { color: l?.bannerTextColor ?? "white" },
                                variant: "heading-md/medium",
                                children: m,
                            }),
                    }),
                    (0, c.jsx)("div", {
                        className: tQ.b2,
                        children: (0, c.jsx)(es.$, {
                            variant: "overlay-primary",
                            text: G.intl.string(G.t.jVcuVY),
                            "aria-label": E,
                            onClick: (e) => {
                                r({
                                    sourceButton: "shop marketing take me there button",
                                    categorySkuId: i,
                                    isInternalShopDeeplink: !0,
                                    isOrbsExclusive: s?.isOrbsExclusive,
                                }),
                                    e.stopPropagation(),
                                    y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                        collectibles_shop_session_id: x?.sessionId,
                                        sku_id: i,
                                        page_type: "home",
                                        page_section: x?.pageSection,
                                        page_category: x?.pageCategory,
                                        tile_type: "FEATURED_BLOCK",
                                        tile_position: String(x?.tilePosition),
                                        cta_name: "Take me there button",
                                    });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    t0 = (e) => {
        let { handleTransition: t, featuredBlockRecord: s } = e;
        return (0, c.jsx)("div", {
            className: g()(tQ.n9, tQ.YB),
            children: s?.subblocks.map((e, s) =>
                e.type === tq.u.CATEGORY
                    ? (0, c.jsx)(
                          v.R9,
                          {
                              newValue: {
                                  categoryPosition: 1,
                                  pageCategory: e.name,
                                  pageSection: "featured_block",
                                  tilePosition: s,
                              },
                              children: (0, c.jsx)(
                                  tX,
                                  {
                                      subblock: e,
                                      enablePreview: 0 === s,
                                      badgeText: (0, ex.HF)(e.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                                      handleTransition: t,
                                  },
                                  e.categoryStoreListingId,
                              ),
                          },
                          e.categoryStoreListingId,
                      )
                    : (e.type, null),
            ),
        });
    },
    t1 = (e) => {
        let { handleTransition: t, categories: s } = e;
        if (null == s || s.length < 2) return null;
        let [l, n] = s;
        return (0, c.jsx)("div", {
            className: g()(tQ.n9, tQ.YB),
            children: (0, c.jsxs)(v.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : n?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == l),
                },
                children: [
                    null != l &&
                        (0, c.jsx)(tX, {
                            category: l,
                            enablePreview: !0,
                            badgeText: (0, ex.HF)(l.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                    null != n &&
                        (0, c.jsx)(tX, {
                            category: n,
                            badgeText: (0, ex.HF)(n.unpublishedAt) ? G.intl.string(G.t["h/uBCR"]) : void 0,
                            handleTransition: t,
                        }),
                ],
            }),
        });
    },
    t2 = (e) => {
        let { isLoading: t, handleTransition: s, categories: l, featuredBlockRecord: n } = e,
            { analyticsLocations: a } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
        return t
            ? (0, c.jsxs)("div", {
                  className: g()(tQ.n9, tQ.YB),
                  children: [
                      (0, c.jsx)("div", {
                          className: g()(tQ.Jn, tQ.oT),
                          children: (0, c.jsx)("div", { className: tQ.uy }),
                      }),
                      (0, c.jsx)("div", {
                          className: g()(tQ.Jn, tQ.oT),
                          children: (0, c.jsx)("div", { className: tQ.uy }),
                      }),
                  ],
              })
            : null != n
              ? (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(t0, { featuredBlockRecord: n, handleTransition: s, isLoading: !1 }),
                })
              : (0, c.jsx)(f.f5, {
                    value: a,
                    children: (0, c.jsx)(t1, { categories: l, handleTransition: s, isLoading: !1 }),
                });
    };
var t5 = s(621466),
    t4 =
        (((i = {}).MOUNTED = "mounted"),
        (i.SORT_OUT = "sort-out"),
        (i.SORT_IN = "sort-in"),
        (i.SHUFFLE_OUT = "shuffle-out"),
        (i.SHUFFLE_IN = "shuffle-in"),
        (i.FINISHED = "finished"),
        i);
s(667532);
var t9 = s(735438),
    t6 = s.n(t9),
    t3 =
        (((o = {}).RECOMMENDED = "recommended"),
        (o.POPULAR = "popular"),
        (o.RECENT = "recent"),
        (o.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (o.RANDOM = "random"),
        o),
    t7 = s(153488),
    t8 = s(155999),
    se = s.n(t8);
function st() {
    let e = (0, O.bG)([j.A], () => j.A.products);
    return (0, d.useCallback)(
        (t) =>
            se()(
                t
                    .map((t) => {
                        let s = e.get(t);
                        return null != s && null != s.variantGroupStoreListingId
                            ? j.A.getProductByStoreListingId(s.variantGroupStoreListingId)
                            : s;
                    })
                    .filter((e) => null != e),
                "storeListingId",
            ),
        [e],
    );
}
var ss = s(885574),
    sl = s(975807),
    sn = s(975571),
    sa = s(365714);
let sr = (e) => {
        let { personalizedResults: t, label: s } = e,
            l = s ?? G.intl.string(G.t.NSv5KV);
        return (0, c.jsxs)("div", {
            className: sa.L,
            children: [
                (0, c.jsx)(eu.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, c.jsx)(e5.m, {
                        text: G.intl.string(G.t["3taPdj"]),
                        position: "top",
                        "aria-label": G.intl.string(G.t["3taPdj"]),
                        children: (0, c.jsx)(e7.D, {
                            onClick: () => (0, sl.A)(sn.A.getArticleURL(B.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: sa.s,
                            children: (0, c.jsx)(ss.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    si = (e) => {
        let {
                isLoading: t,
                title: s,
                sortedSkuIds: l,
                numVisibleItems: n,
                prioritizeUserDiscounts: a,
                tab: r,
                buttonContainerClassName: i,
                orbsSupportedOnly: o,
            } = e,
            u = (0, O.bG)([L.default], () => L.default.getCurrentUser()),
            m = k.Ay.canUseShopDiscounts(u),
            h = (0, eU.Mk)(r, "FeedBlock"),
            E = (0, eQ.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: p,
                sortedItems: C,
                sortOptions: S,
                shuffleProducts: _,
                showRecommendationOption: b,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: s, prioritizeUserDiscounts: l, orbsSupportedOnly: n } = e,
                    a = (0, O.bG)([t7.A], () => t7.A.hasConsented(B.YAq.PERSONALIZATION)),
                    r = d.useMemo(() => t?.[t3.RECOMMENDED] ?? [], [t]),
                    i = d.useMemo(() => t?.[t3.POPULAR] ?? [], [t]),
                    o = r.length > 0 && a,
                    [c, u] = d.useState(o ? t3.RECOMMENDED : t3.POPULAR),
                    g = (0, O.bG)([j.A], () => j.A.productsWithVariantsAsGroup),
                    m = d.useMemo(() => (0, ex.CE)(g), [g]),
                    h = (0, O.bG)([H.A], () => H.A.getUserDiscounts()),
                    E = st(),
                    x = eS(),
                    [p, C] = d.useState([]),
                    f = d.useCallback(() => {
                        u(t3.RANDOM), C(t6().shuffle(m));
                    }, [m]);
                d.useEffect(() => {
                    C(t6().shuffle(m));
                }, [m]);
                let S = eA(
                    d.useMemo(() => {
                        let e = [];
                        switch (c) {
                            case t3.RECENT:
                                e = m;
                                break;
                            case t3.PRICE_LOW_TO_HIGH:
                                e = (0, ex.bf)([...m], s, n);
                                break;
                            case t3.RECOMMENDED: {
                                let t = E(r);
                                e = l ? (0, ex.Bs)(t, h) : t;
                                break;
                            }
                            case t3.POPULAR: {
                                let t = E(i);
                                e = l ? (0, ex.Bs)(t, h) : t;
                                break;
                            }
                            case t3.RANDOM:
                                e = p;
                        }
                        return n ? (0, ep.ex)(x(e)) : x(e);
                    }, [c, n, x, s, m, E, r, l, h, i, p]),
                );
                return {
                    sortType: c,
                    setSortType: u,
                    sortedItems: S,
                    sortOptions: d.useMemo(() => {
                        let e = [
                            { value: t3.POPULAR, label: G.intl.string(G.t.Y68e5p) },
                            { value: t3.RECENT, label: G.intl.string(G.t["51Bhiz"]) },
                            { value: t3.PRICE_LOW_TO_HIGH, label: G.intl.string(G.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: t3.RECOMMENDED, label: G.intl.string(G.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: f,
                };
            })({ sortedSkuIds: l, hasShopDiscount: m, prioritizeUserDiscounts: a, orbsSupportedOnly: o }),
            A = (0, O.bG)([$.Ay], () => $.Ay.useReducedMotion),
            I = (0, O.bG)([eO.A], () => eO.A.isFocused()),
            T = !A && I,
            { animationPhase: R, startAnimation: M } = (() => {
                let [e, t] = d.useState("mounted"),
                    [s, l] = d.useState(!1),
                    n = d.useRef(null);
                return (
                    d.useEffect(() => {
                        if (s && "finished" === e) {
                            if (null !== n.current) {
                                let e = n.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, t5.vq)(e, HTMLButtonElement) ||
                                    (0, t5.vq)(e, HTMLAnchorElement) ||
                                    (0, t5.vq)(e, HTMLInputElement) ||
                                    (0, t5.vq)(e, HTMLSelectElement) ||
                                    (0, t5.vq)(e, HTMLTextAreaElement)
                                )
                                    e.focus();
                                else {
                                    let t = e.querySelector(
                                        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                    );
                                    t?.focus();
                                }
                            }
                            l(!1);
                        }
                    }, [e, s]),
                    {
                        animationPhase: e,
                        startAnimation: d.useCallback((e) => {
                            let { isShuffling: s, onOutroComplete: a, returnRef: r } = e;
                            r?.current != null && ((n.current = r.current), l(!0)),
                                t(s ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        a(),
                                            t(s ? "shuffle-in" : "sort-in"),
                                            setTimeout(
                                                () => {
                                                    t("finished");
                                                },
                                                s ? 200 : 300,
                                            );
                                    },
                                    s ? 250 : 300,
                                );
                        }, []),
                    }
                );
            })(),
            P = (0, v.uM)(),
            D = P?.sessionId ?? "",
            { analyticsLocations: w } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            F = d.useRef(null),
            U = d.useRef(null),
            [z, V] = d.useState(!1),
            W = d.useCallback(
                (e) => {
                    V(!1),
                        M({ isShuffling: !1, onOutroComplete: () => p(e), returnRef: U }),
                        y.default.track(B.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: D,
                            sort_type: e,
                        });
                },
                [M, p, D],
            );
        return null == u
            ? null
            : (0, c.jsx)(f.f5, {
                  value: w,
                  children: (0, c.jsxs)("div", {
                      className: g()(tQ.lD, tQ.YB),
                      children: [
                          (0, c.jsxs)("div", {
                              className: tQ.$6,
                              children: [
                                  (0, c.jsx)(sr, { label: s, personalizedResults: b }),
                                  (0, c.jsxs)("div", {
                                      className: g()(tQ.IE, { [eQ.jP]: E }),
                                      children: [
                                          (0, c.jsxs)("div", {
                                              className: tQ.gd,
                                              children: [
                                                  (0, c.jsx)(et.E, {
                                                      variant: "text-md/medium",
                                                      children: G.intl.string(G.t.uaX705),
                                                  }),
                                                  (0, c.jsx)("div", {
                                                      className: g()(i, tQ.pI),
                                                      ref: U,
                                                      children: (0, c.jsx)(eJ.l, {
                                                          label: G.intl.string(G.t.uaX705),
                                                          hideLabel: !0,
                                                          options: S,
                                                          onSelectionChange: W,
                                                          formatOption: (e) => {
                                                              let { label: t, value: s } = e;
                                                              return { id: s, label: t, value: s };
                                                          },
                                                          value: x,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, c.jsx)("div", {
                                              className: i,
                                              children: (0, c.jsx)(es.$, {
                                                  variant: "secondary",
                                                  text: G.intl.string(G.t.X3tnc4),
                                                  buttonRef: F,
                                                  onClick: () => {
                                                      V(!0),
                                                          M({ isShuffling: !0, onOutroComplete: _, returnRef: F }),
                                                          y.default.track(
                                                              B.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: D },
                                                          );
                                                  },
                                                  disabled: R !== t4.MOUNTED && R !== t4.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(tz.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: z && R === t4.FINISHED ? G.intl.string(G.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, c.jsx)("div", {
                              className: tQ.hm,
                              children: t
                                  ? (0, c.jsx)(c.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, c.jsx)(eD, {}, t + 1)),
                                    })
                                  : C.slice(0, n).map((e, t) => {
                                        let s,
                                            l = j.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == l) return null;
                                        if (T)
                                            if (R === t4.SHUFFLE_OUT)
                                                return (0, c.jsx)(
                                                    "div",
                                                    {
                                                        className: tQ.Z2,
                                                        children: (0, c.jsx)(eD, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                R === t4.SORT_OUT
                                                    ? (s = tQ.MW)
                                                    : R === t4.SHUFFLE_IN
                                                      ? (s = tQ.aS)
                                                      : R === t4.SORT_IN && (s = tQ.F7);
                                        return (0, c.jsx)(
                                            v.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, c.jsx)("div", {
                                                    className: s,
                                                    children: (0, c.jsx)(eG.A, {
                                                        skuId: e.skuId,
                                                        hideStaticBundleBackgroundAsset: !0,
                                                        prioritizedCurrency: h,
                                                    }),
                                                }),
                                            },
                                            e.skuId,
                                        );
                                    }),
                          }),
                      ],
                  }),
              });
    };
var so = s(449543),
    sc = s(622697);
let sd = (e) => {
    let { block: t, handleTransition: s, tab: l } = e,
        n = (0, O.bG)([L.default], () => L.default.getCurrentUser()),
        a = (0, eU.Mk)(l, "FramesProductShelfBlock"),
        r = st(),
        i = eA(d.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r])),
        { analyticsLocations: o } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_SHELF),
        u = d.useCallback(() => {
            s({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [s, t.categorySkuId]);
    return null == n || 0 === i.length
        ? null
        : (0, c.jsx)(f.f5, {
              value: o,
              children: (0, c.jsxs)("div", {
                  className: g()(sc.kL, tQ.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, c.jsx)("img", {
                              className: sc.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, c.jsxs)("div", {
                          className: sc.Qs,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: sc.wx,
                                  children: [
                                      (0, c.jsxs)("div", {
                                          className: sc.Jb,
                                          children: [
                                              (0, c.jsx)(tH.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, c.jsx)(eu.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "always-white",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, c.jsx)(es.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: u,
                                          }),
                                  ],
                              }),
                              (0, c.jsx)(so.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: i.map((e, s) =>
                                      null == j.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, c.jsx)(
                                                v.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: s,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, c.jsx)(eG.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency: a,
                                                    }),
                                                },
                                                e.skuId,
                                            ),
                                  ),
                              }),
                          ],
                      }),
                  ],
              }),
          });
};
var su = s(696292),
    sg = s(617986),
    sm = s(318346),
    sh = s(521e3),
    sE = s(929955);
let sx = (e) => {
        let { bannerStatic: t, bannerAnimated: s, bannerRive: l, isResponsive: n = !1, eventTargetRef: a } = e,
            r = (0, O.bG)([$.Ay], () => $.Ay.useReducedMotion),
            i = (0, O.bG)([eO.A], () => eO.A.isFocused()),
            o = null != s && !r && i;
        return null != l
            ? (0, c.jsx)(ej._, { src: l, fit: "fit-width", eventTargetRef: a })
            : o
              ? (0, c.jsx)(eI.A, { className: g()({ [sE.no]: n }, sE.BW, sE.ud), src: s, autoPlay: !0, loop: !0 })
              : (0, c.jsx)("div", {
                    className: g()({ [sE.no]: n }, sE.BW, sE._e),
                    style: { backgroundImage: `url(${t})` },
                });
    },
    sp = (e) => (0, c.jsx)("div", { className: tQ.hm, children: (0, c.jsx)(sf, { ...e }) }),
    sC = (e) =>
        (0, c.jsx)(so.A, { gap: "xl", "aria-label": G.intl.string(G.t.HP8LNG), children: (0, c.jsx)(sf, { ...e }) }),
    sf = (e) => {
        let { isLoading: t, products: s, tab: l, totalCards: n } = e,
            a = (0, eU.Mk)(l, "HeroBlockCards");
        if (t) return (0, c.jsx)(c.Fragment, { children: [...Array(n ?? 4)].map((e, t) => (0, c.jsx)(eD, {}, t)) });
        let r = null != n ? s.slice(0, n) : s;
        return (0, c.jsx)(eU.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: r.map((e, t) => {
                let s = j.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, c.jsx)(
                          v.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, c.jsx)(eG.A, { skuId: e.skuId, prioritizedCurrency: a }),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    sS = (e) => {
        let t,
            s,
            { heroBlockRecord: l, layout: n, tab: a, isBlockLoading: r = !1 } = e,
            { products: i } =
                ((t = st()),
                (s = d.useMemo(() => (r ? [] : t(l.rankedSkuIds)), [r, t, l.rankedSkuIds])),
                { products: eA(eS()(s)) }),
            o = d.useMemo(
                () =>
                    !r &&
                    0 !== l.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    l.rankedSkuIds.every((e) => j.A.getProduct(e)?.variantGroupStoreListingId != null),
                [r, l.rankedSkuIds, i.length],
            ),
            u = r || o;
        switch (n) {
            case "feed":
                return (0, c.jsx)(sp, { heroBlockRecord: l, isLoading: u, products: i, tab: a });
            case "hscroll":
                return (0, c.jsx)(sC, { heroBlockRecord: l, isLoading: u, products: i, tab: a });
        }
    },
    s_ = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: ty.g.HERO,
        categoryStoreListingId: "",
    },
    sb = (e) => {
        let {
                isLoading: t,
                handleTransition: s,
                category: l,
                heroBlock: n,
                tab: a,
                onVisibilityChange: r,
                badge: i,
            } = e,
            o = (0, em.K)(
                (e) => {
                    r?.(e);
                },
                0.1,
                null != r,
            ),
            u = d.useRef(null),
            m = (0, eQ.yB)("HeroBlock"),
            h = (0, O.bG)([L.default], () => L.default.getCurrentUser()),
            E = (0, v.uM)(),
            { analyticsLocations: x } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            p = d.useMemo(
                () =>
                    null != n
                        ? n
                        : null == l
                          ? s_
                          : {
                                rankedSkuIds: l.heroRanking ?? [],
                                name: l.name,
                                unpublishedAt: l.unpublishedAt,
                                categorySkuId: l.skuId,
                                summary: l.summary,
                                type: ty.g.HERO,
                                categoryStoreListingId: l.storeListingId,
                                bannerDisplayConfig: l.heroBannerDisplayConfig,
                                logoDisplayConfig: l.heroLogoDisplayConfig,
                                heroLogoUrl: l.heroLogoUrl,
                                heroBannerUrl: l.heroBannerUrl,
                                heroBannerAnimatedUrl: l.heroBannerAnimatedUrl,
                            },
                [n, l],
            ),
            {
                bannerDisplayConfig: C,
                logoDisplayConfig: S,
                heroLogo: _,
                heroBannerStatic: b,
                heroBannerAnimated: A,
                heroBannerRive: j,
            } = (0, eT.Kk)(p),
            I = C?.responsive ?? !1,
            k = C?.backgroundStyle,
            T = null != j,
            M = a === R.G2.ORBS,
            P = null != l && l.isOrbsExclusive,
            D = M ? G.intl.string(G.t["1CdL8d"]) : G.intl.string(G.t.xYKa1T),
            H = () => {
                M
                    ? ((0, sm.Y)({
                          pageType: B.liQ.SHOP_ORBS_TAB,
                          sectionType: B.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: B.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, sg.navigateToQuestHome)({ fromContent: su.u.ORBS_SHOP_HERO_CTA }))
                    : (s({
                          sourceButton: "shop latest category hero",
                          categorySkuId: p.categorySkuId,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: P,
                      }),
                      y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: E?.sessionId,
                          sku_id: p.categorySkuId,
                          page_type: a,
                          page_section: E?.pageSection,
                          page_category: E?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != h && (t || p !== s_)
            ? (0, c.jsx)(f.f5, {
                  value: x,
                  children: (0, c.jsxs)("div", {
                      ref: o,
                      className: tQ.os,
                      children: [
                          T ? (0, sh.VA)({ isCustomCursorEnabled: m, className: tQ.Xt, riveEventTargetRef: u }) : null,
                          (0, c.jsx)("div", {
                              className: g()(tQ.vK, { [tQ.cN]: T, [tQ.no]: I }),
                              style: null != k ? { background: k } : void 0,
                              children:
                                  null != b &&
                                  (0, c.jsx)(sx, {
                                      bannerStatic: b,
                                      bannerAnimated: A,
                                      bannerRive: j,
                                      isResponsive: I,
                                      eventTargetRef: u,
                                  }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tQ.xX,
                              children: [
                                  T
                                      ? (0, c.jsx)("div", {
                                            className: tQ.fy,
                                            children:
                                                !t &&
                                                (0, c.jsx)(es.$, { variant: "overlay-primary", onClick: H, text: D }),
                                        })
                                      : (0, c.jsxs)("div", {
                                            className: g()(tQ.bC, { [tQ.no]: I }),
                                            children: [
                                                t
                                                    ? (0, c.jsx)("div", { className: tQ.Hw })
                                                    : (0, c.jsxs)("div", {
                                                          className: tQ.Hw,
                                                          children: [
                                                              (0, ex.HF)(p.unpublishedAt) &&
                                                                  (0, c.jsx)(eN.Lp, {
                                                                      disableColor: !0,
                                                                      text: G.intl.string(G.t["h/uBCR"]),
                                                                      className: tQ.v0,
                                                                  }),
                                                              (0, c.jsxs)("div", {
                                                                  className: tQ.Wq,
                                                                  children: [
                                                                      null != i &&
                                                                          (0, c.jsx)("div", {
                                                                              className: tQ._I,
                                                                              children: i,
                                                                          }),
                                                                      null != _ &&
                                                                          (0, c.jsx)("img", {
                                                                              className: tQ.rm,
                                                                              src: _,
                                                                              alt: p.name,
                                                                              style: S?.toDesktopStyles(),
                                                                          }),
                                                                      null != p.title &&
                                                                          (0, c.jsx)(eu.D, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: tQ.DD,
                                                                              color: "text-strong",
                                                                              children: p.title,
                                                                          }),
                                                                      null != p.summary &&
                                                                          "" !== p.summary &&
                                                                          (0, c.jsx)(et.E, {
                                                                              variant: "text-md/normal",
                                                                              className: M ? tQ.h4 : tQ.Tm,
                                                                              style:
                                                                                  null != p.bannerTextColor
                                                                                      ? { color: p.bannerTextColor }
                                                                                      : void 0,
                                                                              children: p.summary,
                                                                          }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                !t &&
                                                    (0, c.jsx)("div", {
                                                        className: tQ.IS,
                                                        children: (0, c.jsx)(es.$, {
                                                            variant: "overlay-primary",
                                                            onClick: H,
                                                            text: D,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                  (0, c.jsx)(sS, {
                                      heroBlockRecord: p,
                                      tab: a,
                                      isBlockLoading: t,
                                      layout: a === R.G2.HOME ? "hscroll" : "feed",
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var sA = s(349288),
    sL = s(537947);
let sv = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: s } = e,
        l = (0, em.K)(
            (e) => {
                s?.(e);
            },
            0.33,
            null != s,
        ),
        { bannerUrl: n, bannerAnimatedUrl: a } = (0, eT.qY)(t),
        r = null != t.textColor ? { color: t.textColor } : void 0,
        i = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, c.jsxs)("div", {
        ref: l,
        className: sL.BX,
        children: [
            (0, c.jsx)("div", {
                className: sL.vK,
                children: null != n && (0, c.jsx)(sx, { bannerStatic: n, bannerAnimated: a }),
            }),
            (0, c.jsx)("div", {
                className: sL.HQ,
                children: (0, c.jsxs)("div", {
                    className: sL.Yn,
                    children: [
                        null != t.endTime ? (0, c.jsx)(tK, { endDate: t.endTime, size: "lg" }) : null,
                        (0, c.jsx)(eu.D, {
                            variant: "heading-xxl/bold",
                            className: sL.DD,
                            color: "text-strong",
                            style: { ...r },
                            children: t.title,
                        }),
                        i || o
                            ? (0, c.jsxs)(et.E, {
                                  variant: "text-md/medium",
                                  style: { ...r },
                                  children: [
                                      i && t.body,
                                      i && o && " ",
                                      o &&
                                          (0, c.jsx)(sA.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: sL.CU,
                                              style: { ...r },
                                              children: G.intl.string(G.t.O7ADgv),
                                          }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
};
var sj = s(189213),
    sI = s(290136),
    sO = s(478016),
    sN = s(825484),
    sy = s(713517),
    sk = s(914410),
    sT = s(564064),
    sR = s(61750);
function sB(e, t) {
    let s = d.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, O.bG)([J.A], () => J.A.getPurchases(s));
    return {
        readyToClaim: d.useMemo(() => l.length === s.length, [l, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: l,
    };
}
var sM = s(498924);
let sP = d.memo(function (e) {
        let { category: t, rewardSkuId: s } = e,
            { handleCardVisibilityChange: l } = (0, tJ.Z)(s),
            n = d.useRef(null),
            { isHoveringOrFocusing: a } = (0, sy.A)(n),
            { readyToClaim: r, collectibleProductSkuIds: i, collectedSkuIds: o } = sB(t, s),
            u = (0, O.bG)([J.A], () => J.A.isClaiming === s);
        return (0, c.jsx)(tZ.L, {
            onChange: l,
            threshold: 0,
            innerRef: n,
            children: (0, c.jsx)("div", {
                ref: n,
                className: g()(eM.ty, sM.Q3, { [eM.yo]: a }),
                "aria-label": G.intl.formatToPlainString(G.t.Ez6aHE, { category: t.name }),
                children: (0, c.jsxs)("div", {
                    className: eM.qt,
                    children: [
                        (0, c.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: sM.L8,
                        }),
                        (0, c.jsx)("div", {
                            className: eM.N1,
                            children: (0, c.jsx)(eN.Lp, {
                                text: G.intl.string(G.t.rykAJ9),
                                disableColor: !0,
                                className: sM.HZ,
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: eM.xQ,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sM.xE,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: sM.cs,
                                            children: [
                                                (0, c.jsx)(eu.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: eM.tZ,
                                                    children: G.intl.string(G.t["0mDmg/"]),
                                                }),
                                                (0, c.jsx)(e5.m, {
                                                    text: r
                                                        ? G.intl.string(G.t.cKH3tk)
                                                        : G.intl.formatToPlainString(G.t["8aMDPc"], {
                                                              totalCount: i.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, c.jsx)("span", {
                                                        className: sM.ZB,
                                                        children: (0, c.jsx)(sI.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", {
                                            className: eM.oh,
                                            "aria-hidden": !0,
                                            children: (0, c.jsxs)("div", {
                                                className: sM.L$,
                                                children: [
                                                    (0, c.jsx)(sk.Ay, {
                                                        variant: sk.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: i.length,
                                                    }),
                                                    (0, c.jsxs)("div", {
                                                        className: g()(sM.__, { [sM.gF]: r }),
                                                        children: [
                                                            r
                                                                ? (0, c.jsx)(sO.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, c.jsx)(et.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: G.intl.formatToPlainString(G.t["5TwASM"], {
                                                                    collectedCount: o.length,
                                                                    totalCount: i.length,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, c.jsx)("div", {
                                    className: eM.Vs,
                                    children: (0, c.jsx)(sN.e, {
                                        wrap: !1,
                                        className: eM.Ld,
                                        fullWidth: !0,
                                        children: (0, c.jsx)(es.$, {
                                            variant: "primary",
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    r &&
                                                        (0, sT.BX)(t.skuId, s)
                                                            .then(() => {
                                                                let e = j.A.getProduct(s);
                                                                null != e &&
                                                                    (0, sR.A)({
                                                                        product: e,
                                                                        analyticsLocations: [],
                                                                        overrideGraphic: {
                                                                            type: "video",
                                                                            src: "https://cdn.discordapp.com/assets/content/0b8a43491ba8f130b2d07df54fb2b7582d7eb21af11491a58db2d440bb1a2c87.webm",
                                                                            fallbackImageSrc:
                                                                                "https://cdn.discordapp.com/assets/content/b01f9c900f0fd1f3be0846b6f5fc4feac072c377d6ceaf1e4157bccf44d2b6bf.png",
                                                                            loop: !0,
                                                                            loopAt: 6,
                                                                            aspectRatio: "16/9",
                                                                        },
                                                                    });
                                                            })
                                                            .catch(() => {
                                                                (0, E.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, c.jsx)(sj.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: G.intl.string(G.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: G.intl.string(G.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, c.jsx)("div", {
                                                                                children: G.intl.string(G.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: G.intl.string(G.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !r,
                                            loading: u,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    }),
    sD = (e) => {
        let t,
            s,
            { isBlockLoading: l = !1, heroBlock: n, tab: a } = e,
            r = (0, eU.Mk)(a, "RewardHeroBlockCards"),
            i = d.useMemo(() => j.A.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]),
            o = (0, O.bG)([J.A], () => J.A.getPurchase(n.rewardSkuId)),
            { products: u } =
                ((t = st()),
                (s = d.useMemo(
                    () => (l ? [] : t(n.rankedSkuIds).filter((e) => e.skuId !== n.rewardSkuId || null != o)),
                    [l, t, n.rankedSkuIds, o, n.rewardSkuId],
                )),
                { products: eA(eS()(s)) }),
            g = d.useMemo(
                () =>
                    !l &&
                    0 !== n.rankedSkuIds.length &&
                    !(u.length > 0) &&
                    n.rankedSkuIds.every((e) => j.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, n.rankedSkuIds, u.length],
            ),
            m = l || g,
            { readyToClaim: h } = sB(i, n.rewardSkuId),
            E = null == o && null != n.rewardSkuId && null != i;
        return (0, c.jsx)(so.A, {
            gap: "xl",
            children: m
                ? (0, c.jsx)(c.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, c.jsx)(eD, {}, t)),
                  })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          E &&
                              h &&
                              (0, c.jsx)(
                                  v.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, c.jsx)(sP, { category: i, rewardSkuId: n.rewardSkuId }),
                                  },
                                  n.rewardSkuId,
                              ),
                          u.map((e, t) => {
                              let s = j.A.getCategoryForProduct(e.skuId);
                              return null == e || null == s
                                  ? null
                                  : (0, c.jsx)(
                                        v.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, c.jsx)(eG.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, ex.$b)(90);
let sH = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: ty.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    sw = (e) => {
        let { isLoading: t = !1, heroBlock: s, tab: l, onVisibilityChange: n } = e,
            a = (0, em.K)(
                (e) => {
                    n?.(e);
                },
                0.1,
                null != n,
            ),
            r = (0, O.bG)([L.default], () => L.default.getCurrentUser()),
            { analyticsLocations: i } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: d,
                heroLogo: u,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, eT.Kk)(s),
            E = o?.responsive ?? !1,
            x = o?.backgroundStyle;
        return null != r && (t || s !== sH)
            ? (0, c.jsx)(f.f5, {
                  value: i,
                  children: (0, c.jsxs)("div", {
                      ref: a,
                      className: tQ.os,
                      children: [
                          (0, c.jsx)("div", {
                              className: g()(tQ.vK, { [tQ.no]: E }),
                              style: null != x ? { background: x } : void 0,
                              children:
                                  null != m && (0, c.jsx)(sx, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
                          }),
                          (0, c.jsxs)("div", {
                              className: tQ.xX,
                              children: [
                                  (0, c.jsx)("div", {
                                      className: g()(tQ.bC, { [tQ.no]: E }),
                                      children: t
                                          ? (0, c.jsx)("div", { className: tQ.Hw })
                                          : (0, c.jsx)("div", {
                                                className: tQ.Hw,
                                                children: (0, c.jsxs)("div", {
                                                    className: tQ.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, c.jsx)("img", {
                                                                className: tQ.rm,
                                                                src: u,
                                                                alt: s.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != s.title &&
                                                            (0, c.jsx)(eu.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tQ.DD,
                                                                color: "text-strong",
                                                                children: s.title,
                                                            }),
                                                        "" !== s.summary &&
                                                            (0, c.jsx)(et.E, {
                                                                variant: "text-md/normal",
                                                                className: tQ.Tm,
                                                                style:
                                                                    null != s.bannerTextColor
                                                                        ? { color: s.bannerTextColor }
                                                                        : void 0,
                                                                children: s.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, c.jsx)(sD, { isBlockLoading: t, heroBlock: s, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var sF = s(609196);
let sG = (e) => {
    let { shelf: t, handleTransition: s, tab: l } = e,
        n = (0, O.bG)([L.default], () => L.default.getCurrentUser()),
        a = (0, eU.Mk)(l, "ShelfBlock"),
        r = (0, O.bG)([j.A], () => (null != t.categorySkuId ? j.A.getCategory(t.categorySkuId) : void 0)),
        i = st(),
        o = eA(d.useMemo(() => i(t.rankedSkuIds), [t.rankedSkuIds, i])),
        { analyticsLocations: u } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_SHELF),
        m = d.useCallback(() => {
            s({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: r?.isOrbsExclusive === !0 && l !== R.G2.ORBS,
            });
        }, [t.categorySkuId, r, s, l]);
    if (null == n || 0 === o.length) return null;
    let h = t.buttonText ?? G.intl.formatToPlainString(G.t.bc9RBE, { category_name: t.name }),
        E = t.showButton,
        x = t.desktopBackgroundImage,
        p = null != x;
    return (0, c.jsx)(f.f5, {
        value: u,
        children: (0, c.jsxs)("div", {
            className: g()(sF.mu, tQ.YB, p ? sF.VA : sF.Ti),
            children: [
                p && (0, c.jsx)("img", { className: sF.iL, src: x, alt: "", "aria-hidden": !0 }),
                (0, c.jsxs)("div", {
                    className: sF.Qs,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sF.wx,
                            children: [
                                (0, c.jsx)(eu.D, {
                                    variant: "heading-lg/semibold",
                                    style: p ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                E &&
                                    (0, c.jsx)(es.$, {
                                        variant: p ? "overlay-primary" : "secondary",
                                        text: h,
                                        onClick: m,
                                    }),
                            ],
                        }),
                        (0, c.jsx)(so.A, {
                            gap: "xl",
                            edgeFade: p ? "sm" : void 0,
                            children: o.map((e, s) =>
                                null == j.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, c.jsx)(
                                          v.R9,
                                          {
                                              newValue: { tilePosition: s, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, c.jsx)(eG.A, { skuId: e.skuId, prioritizedCurrency: a }),
                                          },
                                          e.skuId,
                                      ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
var sU = s(465794),
    sz = s(44724),
    sV = s(421108),
    sW = s(873297);
let sK = (e) => {
    let {
            onDismiss: t,
            applicationId: s,
            headerText: l,
            gradientColors: n,
            gradientAngle: a,
            skuIds: r,
            tab: i,
            endTime: o,
            ctaType: u = "storefront",
            logoUrl: g,
        } = e,
        m = (0, sV.u)(o) ?? void 0,
        h = d.useMemo(
            () =>
                "nitro" === u
                    ? {
                          kind: "custom",
                          node: (0, c.jsx)(sU.A, {
                              size: "sm",
                              applicationId: s,
                              subscriptionTier: M.pe.TIER_2,
                              buttonTextOverride: G.intl.string(G.t.pj0XBN),
                          }),
                      }
                    : {
                          kind: "button",
                          text: G.intl.string(G.t.apFNLU),
                          onClick: () => (0, sz.default)({ applicationId: s }),
                          onMouseDown: () => (0, sz.G)({ applicationId: s }),
                      },
            [u, s],
        );
    return (0, c.jsx)(sW.A, {
        onDismiss: t,
        skuIds: r,
        tab: i,
        applicationId: s,
        headerText: l,
        logoUrl: g,
        cta: h,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${a}deg, ${n.join(", ")})`,
    });
};
var sY = s(770178),
    s$ = s(929283),
    sq = s(275483);
let sZ = [
        "1212569433839636530",
        "1144308439720394944",
        "1228251144065777765",
        "1343751620965564426",
        "1157407831348228141",
        "1197344326133502032",
        "1232071712695386162",
        "1144046002110738634",
        "1271174324375519273",
        "1237653964582031400",
        "1217625794382401577",
        "1462116613871636542",
        "1458472704469499965",
        "1447654091072344195",
        "1432550258839392376",
        "1409898407849365565",
        "1404558257065824347",
    ],
    sJ = (e) => {
        let { config: t, baseLeft: s, transitioning: l } = e,
            n = window.innerHeight,
            a = j.A.getProduct(t.skuId),
            r = a?.items[0],
            i = a?.type,
            o = s + t.horizontalJitter;
        return (0, c.jsx)("div", {
            className: sq.LY,
            style: {
                top: l ? -n - 384 : t.top,
                left: l ? o + t.transitionOffsetLeft : o,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != r && i === e_.R.AVATAR_DECORATION && (0, c.jsx)(s$.i, { item: r }),
        });
    },
    sQ = (e) => {
        let { peaking: t, transitioning: s, parentWidth: l } = e,
            [n, a] = d.useState(!1),
            [r, i] = d.useState([]),
            [o] = d.useState(() =>
                [...sZ]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${R.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            d.useEffect(() => {
                if (null != l && l > 0) {
                    let e = Math.max(1, Math.floor(l / 130)),
                        t = l / e;
                    i(Array.from({ length: e }, (e, s) => ({ config: o[s % o.length], baseLeft: s * t })));
                }
            }, [l, o]),
            d.useEffect(() => {
                s && setTimeout(() => a(!0), R.H1);
            }, [s]),
            (0, c.jsx)("div", {
                className: g()(sq.rA, { [sq.Kb]: t, [sq.pp]: n }),
                children: r.map((e, t) => {
                    let { config: l, baseLeft: n } = e;
                    return (0, c.jsx)(sJ, { config: l, baseLeft: n, transitioning: s }, l.skuId + t);
                }),
            })
        );
    },
    sX = (e) => {
        let { peaking: t, transitioning: s } = e,
            l = d.useRef(null),
            [n, a] = d.useState(0),
            r = d.useCallback(() => {
                null != l.current && a(l.current.offsetWidth);
            }, []);
        return (
            (0, sY.g)(l, r),
            (0, c.jsx)("div", {
                ref: l,
                className: sq.eL,
                children: (0, c.jsx)(sQ, { peaking: t, transitioning: s, parentWidth: n }),
            })
        );
    };
var s0 = s(815021),
    s1 = s(43990),
    s2 = s(976860),
    s5 = s(49999);
let s4 = (e) => {
    let { wideBannerBlock: t, tab: s } = e,
        l = j.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        n = d.useRef(null),
        a = d.useRef(null),
        [r, i] = d.useState(),
        [o, u] = d.useState(!1);
    d.useEffect(() => {
        let e = a.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && i(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let m = l?.skuId ?? "",
        { handleCardVisibilityChange: h } = (0, tJ.Z)(m, "home", "marketing wide banner"),
        E = (0, v.uM)(),
        { bannerURL: x } = (0, eT.w$)(t),
        p = s === R.G2.ORBS,
        C = null != t.ctaRoute && "" !== t.ctaRoute,
        f = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || C),
        S = null != t.logoURL && "" !== t.logoURL,
        _ = d.useCallback(() => {
            if ((u(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, tT.$l)(tk.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: s5.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        b = d.useCallback(
            (e) => {
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: E?.sessionId,
                    sku_id: m,
                    page_type: s,
                    page_section: E?.pageSection,
                    page_category: E?.pageCategory,
                    tile_type: "WIDE_BANNER",
                    tile_position: String(E?.tilePosition),
                    cta_name: e,
                });
            },
            [E, m, s],
        ),
        A = d.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((b(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                    let e = t.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                s = parseInt(t[2], 10);
                            (0, sz.default)({ guildId: e, pageIndex: s });
                        }
                    } else (0, s2.pX)(e);
                }
            },
            [t.ctaRoute, b],
        );
    if (null == x || o) return null;
    let L = g()(tQ.nM, tQ.Tq, tQ.TS, tQ.YB, { [tQ._1]: p, [tQ.vb]: C }),
        I = (0, c.jsxs)(c.Fragment, {
            children: [
                t.isDismissible &&
                    (0, c.jsx)("div", {
                        className: tQ.Mh,
                        children: (0, c.jsx)(s0.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), _();
                            },
                            "aria-label": G.intl.string(G.t.WAI6xu),
                        }),
                    }),
                (0, c.jsx)("div", {
                    className: g()(tQ.zK, { [tQ._1]: p }),
                    style: null != r ? { height: `${r}px` } : void 0,
                    children: (0, c.jsx)("img", {
                        ref: a,
                        src: x,
                        alt: t.title,
                        className: g()(tQ.LN, { [tQ.d5]: p }),
                    }),
                }),
                (0, c.jsx)("div", {
                    className: g()(tQ.Ep, { [tQ.Qq]: f }),
                    style: { maxHeight: null != r ? `${r}px` : "auto" },
                    children: (0, c.jsxs)("div", {
                        className: tQ.E8,
                        children: [
                            (0, c.jsx)(eu.D, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: p ? tQ.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, c.jsx)(et.E, {
                                style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                lineClamp: 2,
                                variant: p ? "text-md/medium" : "text-sm/medium",
                                children: p
                                    ? G.intl.format(G.t.SFFP7K, {
                                          helpdeskArticle: sn.A.getArticleURL(B.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            f &&
                                (0, c.jsxs)("div", {
                                    className: tQ.nP,
                                    children: [
                                        (0, c.jsx)(es.$, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), A(t.ctaText ?? G.intl.string(G.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? G.intl.string(G.t.jVcuVY),
                                            "aria-label":
                                                null == t.ctaText && null != t.title
                                                    ? G.intl.formatToPlainString(G.t.frSHlf, { destination: t.title })
                                                    : void 0,
                                        }),
                                        S && (0, c.jsx)("img", { src: t.logoURL, alt: "", className: tQ.bU }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, c.jsx)(s1.N, {
        theme: p ? void 0 : tm.NJ.DARK,
        children: (e) =>
            (0, c.jsx)(tZ.L, {
                innerRef: n,
                onChange: h,
                threshold: 0,
                children: C
                    ? (0, c.jsx)(e7.D, { innerRef: n, onClick: () => A(null), className: g()(e, L), children: I })
                    : (0, c.jsx)("div", { ref: n, className: g()(e, L), children: I }),
            }),
    });
};
var s9 = s(757036),
    s6 = s(212739);
let s3 = (0, w.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var s7 = s(462887),
    s8 = s(765671),
    le = s(303136),
    lt = s(792656),
    ls = s(363195),
    ll = s(901123),
    ln = s(314489),
    la = s(909340);
let lr = (e) => {
        let { category: t, tab: s } = e,
            { ref: l, width: n } = (0, s8.Ay)(),
            a = null != n && n <= 560,
            r = (0, h.bG)([ls.A], () => (0, s7.q)(ls.A.theme)),
            i = t?.skuId ?? "",
            { handleCardVisibilityChange: o } = (0, tJ.Z)(i, "home", "marketing orbs upsell banner"),
            u = (0, v.uM)(),
            { analyticsLocations: m } = (0, f.Ay)(N.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
            E = d.useCallback(() => {
                y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: u?.sessionId,
                    sku_id: i,
                    page_type: s,
                    page_section: u?.pageSection,
                    page_category: u?.pageCategory,
                    tile_type: "PREMIUM_UPSELL_BANNER",
                    tile_position: String(u?.tilePosition),
                    cta_name: "nitro_home",
                    location_stack: m,
                });
            }, [u, m, i, s]);
        return (0, c.jsx)(f.f5, {
            value: m,
            children: (0, c.jsx)(s1.N, {
                theme: B.NJ8.DARKER,
                children: (e) =>
                    (0, c.jsx)(tZ.L, {
                        innerRef: l,
                        onChange: o,
                        threshold: 0,
                        children: (0, c.jsxs)("div", {
                            ref: l,
                            className: g()(e, ln.kL),
                            children: [
                                (0, c.jsx)(le.A, { className: ln.Ki, src: la.A }),
                                (0, c.jsxs)("div", {
                                    className: ln.Qs,
                                    children: [
                                        (0, c.jsx)(eu.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: ln.R_,
                                            children: G.intl.string(G.t["50J7mj"]),
                                        }),
                                        (0, c.jsx)(et.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: ln.rf,
                                            children: G.intl.format(G.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, c.jsxs)("div", {
                                            className: ln.R$,
                                            children: [
                                                (0, c.jsx)(lt.A, {
                                                    subscriptionTier: M.pe.TIER_2,
                                                    variantOverride: "expressive",
                                                    size: "md",
                                                    fullWidth: a,
                                                }),
                                                (0, c.jsx)(es.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: a,
                                                    text: G.intl.string(G.t.PcTCB7),
                                                    onClick: () => {
                                                        E(), (0, s2.pX)(ll.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, c.jsx)("img", {
                                    className: ln.Qw,
                                    src: r
                                        ? "https://cdn.discordapp.com/assets/content/420a4e1cb9c1a54bd5776ac56e9de1d367b8c67e62bd32fe1d5700a5b4f7267a.png"
                                        : "https://cdn.discordapp.com/assets/content/d6da9b26d5c975c5f6777daed881adab32770303da1bbf6d63953a5b53456708.png",
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
            }),
        });
    },
    li = (e) => {
        let { index: t, wideBannerBlock: s, tab: l } = e,
            n = s3.useConfig({ location: "CollectiblesShopBannerSelector" }),
            a = (0, s9.L)(M.PremiumTypes.TIER_2),
            r = (0, s6.O)();
        if (n && !a && !r && l === R.G2.ORBS) {
            let e = j.A.getCategoryByStoreListingId(s.categoryStoreListingId);
            return (0, c.jsx)(lr, { category: e, tab: l }, t);
        }
        return (0, c.jsx)(s4, { wideBannerBlock: s, tab: l }, t);
    },
    lo = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: n } = e,
            { noCache: a, includeUnpublished: r } = (0, eV.A)(),
            [i, o] = d.useState(!1),
            u = (0, v.uM)(),
            m = u?.sessionId ?? "";
        d.useEffect(() => {
            (0, eL.z)({
                sessionId: m,
                checkpoint: eL.t.SHOP_MOUNTED,
                tab: n,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
        }, [n]);
        let {
                isFetchingShopHome: h,
                fetchShopHomeError: E,
                shopBlocks: x,
                refreshShopHome: p,
            } = (0, tM.y)(n, { noCache: a, includeUnpublished: r, logPerf: !0 }, { sessionId: m, tab: n }),
            C = d.useCallback(() => {
                p();
            }, [p]),
            f = d.useMemo(() => x.some((e) => e instanceof tP.p), [x])
                ? (0, c.jsx)(tH.A, { location: "CollectiblesShop" })
                : null;
        return (d.useEffect(() => {
            null != E ||
                h ||
                0 === x.length ||
                (0, eL.z)({
                    sessionId: m,
                    checkpoint: eL.t.SHOP_RENDERED,
                    tab: n,
                    unpublishedCategoriesShown: r,
                    cacheDisabled: a,
                });
        }, [E, h, x.length, r, a, m, n]),
        null != E)
            ? (0, c.jsx)(tN.h, { onRetry: C, errorOrigin: tN.A.SHOP_PAGE, errorMessage: E.message })
            : h || 0 === x.length
              ? (0, c.jsxs)("div", {
                    className: g()(tQ.g4, tQ.Of),
                    children: [
                        (0, c.jsx)(sb, { isLoading: h, handleTransition: t, tab: n }),
                        (0, c.jsx)(t2, { isLoading: h, handleTransition: t, categories: [] }),
                        (0, c.jsx)(si, {
                            isLoading: h,
                            title: n === R.G2.ORBS ? G.intl.string(G.t.dFgeuZ) : G.intl.string(G.t.NSv5KV),
                            numVisibleItems: s,
                            tab: n,
                        }),
                    ],
                })
              : (0, c.jsx)(c.Fragment, {
                    children: x.map((e, a) =>
                        ((e, a, r) => {
                            if (null == e) return null;
                            let d = null,
                                u = !1;
                            switch (e.type) {
                                case ty.g.HERO:
                                    d = (0, c.jsx)(
                                        sb,
                                        { isLoading: h, handleTransition: t, heroBlock: e, tab: n, badge: f },
                                        r,
                                    );
                                    break;
                                case ty.g.FEATURED:
                                    d = (0, c.jsx)(
                                        t2,
                                        { isLoading: h, handleTransition: t, featuredBlockRecord: e },
                                        r,
                                    );
                                    break;
                                case ty.g.FEED:
                                    let m = e.sortedSkuIds;
                                    d = (0, c.jsx)(
                                        si,
                                        {
                                            title:
                                                n === R.G2.ORBS ? G.intl.string(G.t.dFgeuZ) : G.intl.string(G.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: s,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: a?.type === ty.g.IMMERSIVE_BANNER ? tQ.w : void 0,
                                            prioritizeUserDiscounts: n === R.G2.HOME,
                                            tab: n,
                                            orbsSupportedOnly: n === R.G2.ORBS,
                                        },
                                        r,
                                    );
                                    break;
                                case ty.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, tT.En)(tk.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    d = (0, c.jsx)(li, { index: r, wideBannerBlock: e, tab: n }, r);
                                    break;
                                case ty.g.FRAMES_BANNER:
                                    d = (0, c.jsx)(
                                        s4,
                                        {
                                            wideBannerBlock: tD.y.fromServer({
                                                type: ty.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: n,
                                        },
                                        r,
                                    );
                                    break;
                                case ty.g.FRAMES_PRODUCT_SHELF:
                                    d = (0, c.jsx)(sd, { block: e, handleTransition: t, tab: n }, r);
                                    break;
                                case ty.g.SHELF:
                                    d = (0, c.jsx)(sG, { handleTransition: t, shelf: e, tab: n }, r);
                                    break;
                                case ty.g.COUNTDOWN_TIMER:
                                    (d = (0, c.jsx)(t$, { countdownTimerBlock: e, isVisible: i }, r)), (u = !0);
                                    break;
                                case ty.g.IMMERSIVE_BANNER:
                                    d = (0, c.jsx)(
                                        sv,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        r,
                                    );
                                    break;
                                case ty.g.REWARD_HERO:
                                    d = (0, c.jsx)(sw, { isLoading: h, handleTransition: t, heroBlock: e, tab: n }, r);
                                    break;
                                case ty.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, tT.En)(
                                        tk.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, c.jsx)(
                                        tB,
                                        {
                                            blockType: e.type,
                                            children: (0, c.jsx)(sK, {
                                                onDismiss: () => {
                                                    (0, tT.d6)(
                                                        tk.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                                        {},
                                                    );
                                                },
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: n,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                            }),
                                        },
                                        r,
                                    );
                                }
                                default:
                                    return null;
                            }
                            return (0, c.jsx)(
                                tB,
                                {
                                    blockType: e.type,
                                    children: (0, c.jsx)("div", {
                                        className: g()(tQ.v1, tQ.Of, { [tQ.J1]: 0 === r || u }),
                                        children: d,
                                    }),
                                },
                                r,
                            );
                        })(e, a > 0 ? x[a - 1] : null, a),
                    ),
                });
    },
    lc = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = d.useRef(null),
            { handleScroll: a } = er(n, s),
            r = (0, ez.U)(),
            i = (0, v.uM)(),
            [o, u] = d.useState(R.md),
            [g, m] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            o >= 36 ? m(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = n.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [n, o, u, m]),
            (0, c.jsx)(X.Ch, {
                className: tQ.OW,
                ref: n,
                onScroll: a,
                children: (0, c.jsxs)("div", {
                    className: tQ.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: tQ.rb,
                            children: [
                                (0, c.jsx)(lo, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: r,
                                    tab: s,
                                }),
                                s !== R.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tQ.R$,
                                        children: [
                                            (0, c.jsx)(eu.D, {
                                                variant: "heading-md/semibold",
                                                children: G.intl.string(G.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(es.$, {
                                                variant: "primary",
                                                text: G.intl.string(G.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: i?.sessionId,
                                                            page_type: s,
                                                            page_category: s === R.G2.HOME ? void 0 : i?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(sX, { peaking: g, transitioning: l === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var ld = s(154323),
    lu = s(295811);
let lg = { "Any:personalization-header": sr },
    lm = { [ec.b.SHOP_HOME]: lg },
    lh = { "1465939725649973269": lg, "1478495181551440044": lg },
    lE = () =>
        (0, c.jsx)("div", {
            style: {
                background: "linear-gradient(rgba(39, 30, 173, 0.3), transparent)",
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
            },
            children: (0, c.jsx)("div", {
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d")',
                    backgroundPosition: "center top",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.4,
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                },
            }),
        }),
    lx = { prioritizedCurrency: eU.Hi.ORBS },
    lp = (e) => {
        let { tab: t } = e,
            [s, l, n] = (0, O.yK)([T.A], () => [T.A.getLayout(t), T.A.isFetchingLayout(t), T.A.getLayoutFetchError(t)]),
            a = (0, O.bG)([ld.A], () => ld.A.get("shop_include_unpublished")),
            r = (0, O.bG)([j.A], () => j.A.skipNumCategories),
            i = d.useMemo(() => {
                let e = {};
                return !0 === a && (e.include_unpublished = !0), null != r && r > 0 && (e.skip_num_categories = r), e;
            }, [a, r]),
            o = null == s && !l && n?.status !== 404 && n?.status !== 429;
        if (
            (d.useEffect(() => {
                o && (0, sT.T2)({ tab: t });
            }, [o, t]),
            null == s)
        )
            return t !== Y.HOME || o || l
                ? null
                : (0, c.jsx)(eo.Z_, {
                      tenantId: B.FYj,
                      templateId: ec.b.SHOP_HOME,
                      requestParams: i,
                      overrides: lm[ec.b.SHOP_HOME],
                  });
        let u = (0, c.jsx)(eo.Qs, { tenantId: B.FYj, layoutId: s, overrides: lh[s] });
        return (0, c.jsxs)(c.Fragment, {
            children: [
                t === Y.ORBS && (0, c.jsx)(lE, {}),
                t === Y.ORBS ? (0, c.jsx)(eU.v3.Provider, { value: lx, children: u }) : u,
            ],
        });
    },
    lC = (e) => {
        let { url: t } = e,
            [s, l] = d.useState(null);
        return (d.useEffect(() => {
            (async () => {
                try {
                    let e = await fetch(t),
                        s = await e.json();
                    l(s);
                } catch (e) {
                    l(null);
                }
            })();
        }, [t]),
        null == s)
            ? null
            : (0, c.jsx)(eo.Ay, { layout: s });
    },
    lf = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            n = (0, v.uM)(),
            a = (0, O.bG)([lu.A], () => lu.A.getShopLayoutUrlOverride()),
            r = d.useRef(null),
            { handleScroll: i } = er(r, s),
            [o, u] = d.useState(R.md),
            [m, h] = d.useState(!1);
        return (
            d.useEffect(() => {
                if (null != r.current) {
                    let e = () => {
                            if (null == r.current) return;
                            let e = r.current.getDistanceFromBottom();
                            o >= 36 ? h(e < 20) : e <= 200 && u((e) => e + R.md);
                        },
                        t = r.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [r, o, u, h]),
            (0, c.jsx)(X.Ch, {
                className: tQ.OW,
                ref: r,
                onScroll: i,
                children: (0, c.jsxs)("div", {
                    className: tQ.bx,
                    children: [
                        (0, c.jsxs)("div", {
                            className: g()(tQ.rb, tQ.GS),
                            children: [
                                null != a && "" !== a ? (0, c.jsx)(lC, { url: a }) : (0, c.jsx)(lp, { tab: s }),
                                s !== Y.CATALOG &&
                                    o >= 36 &&
                                    (0, c.jsxs)("div", {
                                        className: tQ.R$,
                                        children: [
                                            (0, c.jsx)(eu.D, {
                                                variant: "heading-md/semibold",
                                                children: G.intl.string(G.t.Yr70c4),
                                            }),
                                            (0, c.jsx)(es.$, {
                                                variant: "primary",
                                                text: G.intl.string(G.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        y.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: n?.sessionId,
                                                            page_type: s,
                                                            page_category: s === Y.HOME ? void 0 : n?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, c.jsx)(sX, { peaking: m, transitioning: l === R.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var lS = s(256067);
let l_ = () =>
        (0, c.jsxs)("div", {
            className: lS.z,
            children: [
                (0, c.jsx)("img", {
                    className: lS.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: G.intl.string(G.t["p8+qtU"]),
                }),
                (0, c.jsx)(eu.D, { variant: "heading-xl/semibold", children: G.intl.string(G.t["p8+qtU"]) }),
                (0, c.jsx)(et.E, { variant: "text-md/medium", children: G.intl.string(G.t.UEiyvs) }),
            ],
        }),
    lb = [R.G2.HOME, R.G2.ORBS];
function lA(e) {
    let {
            tab: t,
            categories: s,
            transitionToTab: l,
            transitionState: n,
            updateAnalyticsState: a,
            refreshCategories: r,
        } = e,
        i = lL();
    lv(i);
    let o = (0, O.bG)([$.Ay], () => $.Ay.useReducedMotion),
        [u, g] = d.useState(void 0),
        [m, h] = d.useState(!0),
        E = d.useMemo(
            () =>
                s.filter(
                    (e) =>
                        !R.MS.some((t) => {
                            let { categorySkuId: s } = t;
                            return s === e.skuId;
                        }),
                ),
            [s],
        ),
        x = (0, q.U)("CollectiblesContent"),
        p = d.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: s,
                    shouldAnimate: n,
                    isInternalShopDeeplink: r,
                    isOrbsExclusive: i,
                } = e;
                a(t, s);
                let c = n && !o,
                    d = i ? R.G2.ORBS : R.G2.CATALOG;
                g(s), h(!r), l(d, c);
            },
            [o, l, a],
        ),
        { searchError: C } = (0, Q.S)();
    return null != C
        ? (0, c.jsx)(l_, {})
        : null != i
          ? (0, c.jsx)(tN.h, { onRetry: r, errorMessage: i, errorOrigin: tN.A.SHOP_PAGE })
          : t === R.G2.HOME && x
            ? (0, c.jsx)(lf, { tab: Y.HOME, transitionState: n, handleTransition: p })
            : t === R.G2.ORBS && x
              ? (0, c.jsx)(lf, { tab: Y.ORBS, transitionState: n, handleTransition: p })
              : lb.includes(t)
                ? (0, c.jsx)(lc, { handleTransition: p, tab: t, transitionState: n })
                : (0, c.jsx)(tI, {
                      tab: t,
                      categories: E,
                      initialCategoryId: u,
                      showFilterInitially: m,
                      onUnmount: () => {
                          g(void 0), h(!0);
                      },
                  });
}
let lL = () =>
        (0, O.bG)([j.A, J.A], () =>
            null != j.A.error
                ? `shop load fetch categories error: ${j.A.error.message}`
                : null != J.A.claimError
                  ? `shop load claim error: ${J.A.claimError.message}`
                  : null != J.A.fetchError
                    ? `shop load fetch purchase error: ${J.A.fetchError.message}`
                    : void 0,
        ),
    lv = (e) => {
        let t = (0, O.bG)([L.default], () => L.default.getCurrentUser()),
            { noCache: s, includeUnpublished: l } = (0, eV.A)();
        d.useEffect(() => {
            null != e &&
                Z.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: s.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, s, l]);
    };
var lj = s(956123);
s(323874), s(14289), s(35956);
var lI = s(873263),
    lO = s(766075),
    lN = s(893489);
let ly = { pink: "pinkCountdown" },
    lk = d.memo(function (e) {
        let { message: t, onClick: s, countdownEndDate: l, variant: n } = e,
            a = d.useMemo(() => {
                if (null == l) return null;
                let e = l instanceof Date ? l : new Date(l);
                return isNaN(e.getTime()) ? null : e;
            }, [l]),
            r = (0, tV.A)(a ?? 0, 1e3, void 0, null == a);
        if (null != a && Object.values(r).every((e) => 0 === e)) return null;
        let i = null != n ? lN[n] : void 0,
            o = null != n ? lN[ly[n]] : void 0;
        return (0, c.jsx)(e7.D, {
            className: g()(lN.nagBar, i),
            onClick: s,
            "aria-label": G.intl.string(G.t["wjws+K"]),
            children: (0, c.jsxs)("div", {
                className: lN.content,
                children: [
                    (0, c.jsx)(et.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: lN.message,
                        children: t,
                    }),
                    null != a && (0, c.jsx)(tK, { endDate: a, size: "md", className: o, showSeconds: !0 }),
                ],
            }),
        });
    });
var lT = s(870308),
    lR = s(650583);
let lB = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: l } = e,
            n = (0, E.useHasAnyModalOpen)();
        return (
            d.useEffect(() => {
                if (!s || n) return;
                let e = (e) => {
                    e.key === lR.N$.Escape && l();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [s, n, l]),
            t
        );
    },
    lM = function (e) {
        let { tab: t = R.G2.HOME } = e;
        (0, b.P)(_.a), (0, V.g)();
        let s = (0, C.A)((0, m.A)()),
            l = (0, h.bG)([L.default], () => L.default.getCurrentUser());
        (0, A.pE)();
        let n = (0, eQ.yB)("CollectiblesShop"),
            { onClose: a } = (function () {
                let { search: e } = (0, lI.zy)(),
                    t = (0, lI.g)(),
                    s = d.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                    l = null != s ? parseInt(s, 10) : null;
                return {
                    onClose: d.useCallback(() => {
                        if (0 === l) {
                            (0, s2.aX)(), (0, lO.openUserSettings)();
                            return;
                        }
                        (0, s2.EL)() ? (0, s2.aX)() : (0, s2.pX)(B.BVt.APP);
                    }, [l]),
                    source: l,
                    ...t,
                };
            })(),
            { currentTab: r, hasFilters: i } = (0, K.v)(),
            o = d.useMemo(() => (t === R.G2.HOME && null != r && i() ? r : t), [t, r, i]),
            { categories: u, refreshCategories: N } = (0, z.Ay)({ logPerf: !0 }, { sessionId: s, tab: o }),
            T = d.useMemo(() => [...u.values()], [u]),
            [w, Y] = d.useState(),
            $ = (0, h.bG)([j.A], () => j.A.getCategory(w)?.name),
            [q, Z] = d.useState();
        (0, e$.XU)(s);
        let J = d.useCallback((e, t) => {
                Z(e), Y(t);
            }, []),
            { selectedTab: Q, transitionState: X, transitionToTab: ee } = (0, W.o)(o);
        (0, S.HU)({ location: G.intl.string(G.t.pWG4ze) }),
            ((e, t, s, l, n) => {
                let {
                    analyticsLocations: a,
                    analyticsSource: r,
                    currentTabLocation: i,
                    newestAnalyticsLocation: o,
                } = P(t);
                d.useEffect(() => {
                    if (l !== R.Pf.VISIBLE || o !== i) return;
                    let c = t === R.G2.CATALOG ? n : r;
                    y.default.track(B.HAw.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: a,
                        source: c,
                        page_session_id: e,
                        page_type: t === R.G2.CATALOG ? "full" : t,
                        category: t === R.G2.HOME ? void 0 : s,
                    });
                }, [a, e, t, s, i, l, n, r, o]);
            })(s, Q, $, X, q),
            ((e, t) => {
                let { analyticsLocations: s } = P(e);
                d.useEffect(() => {
                    null == t ||
                        k.Ay.canUseCollectibles(t) ||
                        y.default.track(B.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: M.e.COLLECTIBLES_SHOP,
                            location_stack: s,
                        });
                }, [s, t]);
            })(Q, l);
        let { dismissShopButtonDC: et } = (0, lT.A)();
        d.useEffect(() => {
            et();
        }, [et]),
            d.useEffect(() => {
                (0, p.I)(B.BVt.COLLECTIBLES_SHOP);
            }, []);
        let es = d.useRef(null),
            el = d.useRef(null);
        (0, x.t)(es);
        let en = (0, E.useHasAnyModalOpen)();
        d.useEffect(() => {
            el.current?.focus();
        }, []),
            (0, eQ.gB)();
        let { analyticsLocations: ea } = P(Q),
            er = (function (e, t) {
                let s = (0, O.bG)([H.A], () => H.A.getUserDiscount(M.tU)),
                    l = (0, O.bG)([D.default], () => D.default.locale),
                    n = F.useConfig({ location: t }).enabled;
                if (d.useMemo(() => null != s && n && e !== R.G2.ORBS, [s, n, e])) {
                    let e =
                        null != s && null != s.expiresAt
                            ? new Date(s.expiresAt).toLocaleDateString(l, { day: "numeric", month: "numeric" })
                            : void 0;
                    return { type: 0, countdownEndDate: s?.expiresAt, message: G.intl.format(G.t.RCo9MF, { date: e }) };
                }
            })(Q, "collectibles_shop");
        return (0, c.jsx)(f.f5, {
            value: ea,
            children: (0, c.jsx)(v.R9, {
                newValue: { sessionId: s, pageCategory: $, pageSize: R.l5 },
                children: (0, c.jsx)(I.iM, {
                    tab: Q,
                    children: (0, c.jsx)(lB, {
                        onClose: a,
                        shouldAddEventListener: !1,
                        children: (0, c.jsxs)("div", {
                            className: g()(eH.bx, { [eQ.jP]: n }),
                            ref: el,
                            inert: en,
                            tabIndex: -1,
                            children: [
                                (0, c.jsx)(lj.G, { handleTransition: ee, selectedTab: Q }),
                                null != er &&
                                    er.type === U.COUNTDOWN &&
                                    (0, c.jsx)(lk, {
                                        message: er.message,
                                        onClick: () => ee(R.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: er.countdownEndDate,
                                    }),
                                (0, c.jsx)("div", {
                                    className: g()(eH.td, {
                                        [eH.RK]: X === R.Pf.VISIBLE,
                                        [eH.in]: X === R.Pf.IN,
                                        [eH.FD]: X === R.Pf.OUT,
                                    }),
                                    children: (0, c.jsx)(lA, {
                                        tab: Q,
                                        refreshCategories: N,
                                        transitionToTab: ee,
                                        transitionState: X,
                                        categories: T,
                                        updateAnalyticsState: J,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
