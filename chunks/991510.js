n.r(t), n.d(t, { default: () => lc });
var l,
    s,
    i,
    a,
    r,
    o = n(627968),
    c = n(64700),
    d = n(503698),
    u = n.n(d),
    g = n(132500),
    m = n(702841),
    h = n(192308),
    E = n(315710),
    x = n(944791),
    f = n(444927),
    p = n(688810),
    C = n(726249),
    _ = n(475073),
    b = n(611924),
    S = n(744082),
    j = n(561794),
    v = n(287809),
    A = n(440938),
    L = n(590180),
    I = n(161918),
    N = n(71604),
    O = n(790297),
    T = n(841702),
    k = n(983545),
    R = n(23161);
n(323874), n(14289), n(35956), n(321073);
var y = n(873263),
    M = (((l = {}).HOME = "home"), (l.CATALOG = "catalog"), (l.ORBS = "orbs"), l),
    P = n(17928),
    B = n(775602),
    D = n(578797),
    H = n(140218),
    F = n(38405),
    w = n(4227),
    G = n(50920),
    U = n(856686),
    z = n(689175),
    V = n(364522),
    Y = n(834730),
    W = n(821609),
    K = n(783977),
    $ = n(59520),
    q = n(174459),
    Z = n(652215);
function X(e, t, n, l) {
    let { scrollTop: s = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = l;
    if (a > 0) {
        let l = (s + i) / a;
        l > 0 &&
            q.default.track(e, {
                scroll_visible_percent: l,
                source: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function J(e, t) {
    let { analyticsSource: n } = (0, O.lC)(t),
        l = (0, $.I)(X, 5e3, [], { trailing: !0 }),
        s = (0, A.uM)(),
        i = s?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    l(Z.HAw.COLLECTIBLES_SHOP_SCROLLED, null != i ? i : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [l, n, i, e]),
    };
}
var Q = n(354328),
    ee = n(356118),
    et = n(619835),
    en = n(641150),
    el = n(297264),
    es = n(375708);
function ei() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: l } = (0, R.v)((e) => e),
        { totalCount: s, isFetchingResults: i } = (0, U.S)(),
        a = (0, R.v)((e) => e.hasFilters()),
        r = c.useCallback(() => {
            if (!a) return "";
            if (i) return es.intl.string(es.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return es.intl.format(es.t.KJMJOz, { count: s, search: e });
            }
            if (!n && !l && 1 === e.size) {
                if (e.has(en.q.AVATAR_DECORATION)) return es.intl.format(es.t.s1UzGQ, { count: s });
                if (e.has(en.q.NAMEPLATE)) return es.intl.format(es.t.ZWGN9T, { count: s });
                if (e.has(en.q.PROFILE_EFFECT)) return es.intl.format(es.t["v/7apu"], { count: s });
                if (e.has(en.q.PROFILE_FRAME)) return es.intl.format(es.t.eu4eRy, { count: s });
                if (e.has(en.q.BUNDLE)) return es.intl.format(es.t.fZ1rdk, { count: s });
            }
            return 0 === e.size && n && !l
                ? es.intl.format(es.t.TxoTTj, { count: s })
                : 0 === e.size && l && !n
                  ? es.intl.format(es.t.TLso50, { count: s })
                  : es.intl.format(es.t["/rPvmQ"], { count: s });
        }, [e, s, a, t, i, n, l]);
    return (0, o.jsx)(el.D, { variant: "heading-lg/semibold", children: r() });
}
var ea = n(172218),
    er = n(932793),
    eo = n(511265),
    ec = n(206077),
    ed = n(100057),
    eu = n(828515),
    eg = n(484469),
    em = n(346448),
    eh = n(195261),
    eE = n(132866);
let ex = function () {
    return (0, o.jsx)("div", {
        className: eE.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: eh.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(em.sW, eE.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(eg.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var ef = n(828614),
    ep = n(159439),
    eC = n(998694);
let e_ = null;
var eb = n(758836);
function eS(e) {
    let { category: t } = e,
        n = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        l = (0, ec.X)(t.products),
        s = (0, eo.p)()(l);
    return null == n || 0 === s.length
        ? null
        : (0, o.jsx)("div", {
              className: eh.vY,
              children: s.map((e, t) =>
                  (0, o.jsx)(
                      A.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, o.jsx)(ef.A, { skuId: e.skuId, skipLimitedTimeCheck: !0 }, e.skuId),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function ej(e) {
    let { category: t } = e,
        [n, l] = c.useState(!1),
        s = (0, ea.K)(function (e) {
            l(e);
        }, 0.15),
        i = (0, y.W6)(),
        a = (0, G.a)("CollectiblesCatalogContent"),
        r = (0, A.uM)(),
        d = c.useCallback(() => {
            q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: eb.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (e_ = t.skuId),
                i.push(Z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, i]);
    return (0, o.jsxs)("div", {
        className: eh.EF,
        ref: s,
        children: [(0, o.jsx)(eu.A, { category: t, onSelect: a ? d : void 0 }), (0, o.jsx)(eS, { category: t })],
    });
}
function ev(e) {
    let { categories: t, setCategoryRef: n, currentPage: l, handlePageChange: s, initialCategoryId: i } = e,
        a = (0, A.uM)(),
        r = (0, ep.U)(),
        d = a?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eC.A)(),
        m = c.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        h = c.useRef(void 0);
    c.useEffect(() => {
        if (null == i || 0 === m.length) {
            h.current = void 0;
            return;
        }
        if (i === h.current) return;
        let e = m.findIndex((e) => e.skuId === i);
        if (-1 === e) return;
        let t = Math.floor(e / eb.l5) + 1;
        t !== l && s(t), (h.current = i);
    }, [i, m, s, l]);
    let E = c.useMemo(() => {
        let e = (l - 1) * eb.l5;
        return m.slice(e, e + eb.l5);
    }, [m, l]);
    return (c.useEffect(() => {
        (0, ed.z)({
            sessionId: d,
            checkpoint: ed.t.SHOP_MOUNTED,
            tab: eb.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === E.length ||
            (0, ed.z)({
                sessionId: d,
                checkpoint: ed.t.SHOP_RENDERED,
                tab: eb.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [d, g, u, r, E.length]),
    r)
        ? (0, o.jsx)(ex, {})
        : (0, o.jsxs)("div", {
              className: eh.LZ,
              children: [
                  E.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": es.intl.formatToPlainString(es.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(A.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(ej, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: eh.Ej,
                      children: (0, o.jsx)(er.m, {
                          currentPage: l,
                          totalCount: m.length,
                          pageSize: eb.l5,
                          onPageChange: s,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eA = n(177366),
    eL = n(401864),
    eI = n(124987),
    eN = n(691885),
    eO = n(146919),
    eT = n(858733);
let ek = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, R.v)(),
        l = (0, A.uM)(),
        s = (0, eO.yB)("CollectiblesSortSelect"),
        i = n(),
        a = c.useMemo(() => eb.QB.filter((e) => e.sortType !== eI.$.RELEVANCE || i), [i]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === eI.$.RECENCY
                ? { label: es.intl.string(es.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eI.$.PRICE
                  ? n === eL.A.ASC
                      ? { label: es.intl.string(es.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: es.intl.string(es.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eI.$.RELEVANCE
                    ? { label: es.intl.string(es.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: es.intl.string(es.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
            (e) =>
                ({
                    recent: { sortType: eI.$.RECENCY, sortDirection: eL.A.DESC },
                    "price-asc": { sortType: eI.$.PRICE, sortDirection: eL.A.ASC },
                    "price-desc": { sortType: eI.$.PRICE, sortDirection: eL.A.DESC },
                    popularity: { sortType: eI.$.POPULARITY, sortDirection: eL.A.DESC },
                    relevance: { sortType: eI.$.RELEVANCE, sortDirection: eL.A.DESC },
                })[e],
            [],
        ),
        g = c.useCallback(
            (e) => {
                let n = r(d(e));
                q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(d(e));
            },
            [l, r, d, t],
        ),
        m = r(e);
    return (0, o.jsx)("div", {
        className: u()(eT.k, { [eO.jP]: s }),
        children: (0, o.jsx)(eN.l, {
            label: es.intl.string(es.t.uaX705),
            hideLabel: !0,
            options: a.map(r),
            onSelectionChange: g,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eR =
        (((s = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (s.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (s.PINK = "COLLECTIBLES_COLOR_PINK"),
        (s.RED = "COLLECTIBLES_COLOR_RED"),
        (s.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (s.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (s.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (s.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (s.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (s.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        s),
    ey =
        (((i = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (i.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (i.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (i.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (i.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (i.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (i.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (i.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (i.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (i.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        i),
    eM = n(150934),
    eP = n(508770),
    eB = n(278416),
    eD = n(602853),
    eH = n(661531),
    eF = n(866665),
    ew = n(939249),
    eG = n(947641),
    eU = n(604338),
    ez = n(785866),
    eV = n(373846),
    eY = n(308323),
    eW = n(608599),
    eK = n(685761),
    e$ = n(157225),
    eq = n(413249),
    eZ = n(510241),
    eX = n(601198),
    eJ = n(736653),
    eQ = n(223311),
    e0 = n(7250),
    e1 = n(623655),
    e2 = n(13875),
    e5 = n(818348),
    e4 = n(967339);
function e3() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: l,
            onToggleOfferEligible: s,
            offerEligible: i,
            reset: a,
            hasFilters: r,
        } = (0, R.v)(),
        d = (0, e1.z)("FilterBar"),
        g = r(),
        m = (0, e2.sk)("FilterBar"),
        h = (0, A.uM)(),
        E = c.useRef(null),
        x = (0, eQ.A)(Z.FYj),
        f = c.useMemo(() => eb._6.filter((e) => m || e !== en.q.PROFILE_FRAME), [m]),
        p = c.useCallback(
            (e) => {
                q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: h?.pageIndex,
                    page_size: h?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [h],
        ),
        C = c.useCallback(() => {
            p(`filter 3p only ${!1 === l ? "on" : "off"}`), n();
        }, [n, l, p]);
    return (0, o.jsxs)("div", {
        className: e4.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(e4.KZ, e4.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: E,
                        tabIndex: -1,
                        children: (0, o.jsx)(Y.E, {
                            variant: "text-md/semibold",
                            className: e4.hr,
                            children: es.intl.string(es.t.Qk6r1a),
                        }),
                    }),
                    null != x &&
                        (0, o.jsxs)("div", {
                            className: e4.Ym,
                            children: [
                                (0, o.jsx)(eM.S, {
                                    checked: i,
                                    onChange: () => {
                                        p(`filter offer eligible ${!1 === i ? "on" : "off"}`), s();
                                    },
                                    label: es.intl.string(es.t.hY8Ft1),
                                }),
                                (0, o.jsx)(eP.E, { type: { text: es.intl.string(es.t["nb5PC/"]) }, icon: eB.g }),
                            ],
                        }),
                    f.map((e) => (0, o.jsx)(e9, { filter: e, trackFilterAction: p }, e)),
                    (0, o.jsx)(eM.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: es.intl.string(es.t.AHHHgG),
                    }),
                    d && (0, o.jsx)(eM.S, { checked: l, onChange: C, label: es.intl.string(es.t["+W8gb+"]) }),
                ],
            }),
            (0, o.jsx)(e6, { trackFilterAction: p }),
            (0, o.jsx)(te, { trackFilterAction: p }),
            g &&
                (0, o.jsx)(W.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), a(), requestAnimationFrame(() => E.current?.focus());
                    },
                    text: es.intl.string(es.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function e9(e) {
    let { filter: t, trackFilterAction: n } = e,
        l = {
            [en.q.AVATAR_DECORATION]: es.intl.string(es.t.dRZYNE),
            [en.q.PROFILE_EFFECT]: es.intl.string(es.t["1cNjtx"]),
            [en.q.NAMEPLATE]: es.intl.string(es.t.V68Fqz),
            [en.q.PROFILE_FRAME]: es.intl.string(es.t.ecTJkR),
            [en.q.BUNDLE]: es.intl.string(es.t.FYFpps),
        },
        { itemTypeFilters: s, onToggleItemType: i } = (0, R.v)(),
        a = (0, o.jsx)(eM.S, {
            checked: s.has(t),
            onChange: () => {
                let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === s.has(t) ? "on" : "off"}`), i(t);
            },
            label: l[t] ?? "",
        });
    return t === en.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: e4.Ym, children: [a, (0, o.jsx)(eP.E, { type: "new" })] })
        : a;
}
function e6(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: es.intl.string(es.t.kqUD4P), enum: eR.PURPLE },
                { color: "#3498DB", label: es.intl.string(es.t.qQTRae), enum: eR.BLUE },
                { color: "#2ECC71", label: es.intl.string(es.t["f/Ylk6"]), enum: eR.GREEN },
                { color: "#A0522D", label: es.intl.string(es.t["Sd/BMa"]), enum: eR.BROWN },
                { color: "#F1C40F", label: es.intl.string(es.t["0fevYz"]), enum: eR.YELLOW },
            ],
            [],
        ),
        l = c.useMemo(
            () => [
                { color: "#E67E22", label: es.intl.string(es.t.ZE7weD), enum: eR.ORANGE },
                { color: "#E74C3C", label: es.intl.string(es.t.hKJGOM), enum: eR.RED },
                { color: "#EC407A", label: es.intl.string(es.t.HvLEGM), enum: eR.PINK },
                { color: "#FFFFFF", label: es.intl.string(es.t["CB+lNO"]), enum: eR.WHITE },
                { color: "#262626", label: es.intl.string(es.t["dMey+v"]), enum: eR.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: e4.KZ,
        children: [
            (0, o.jsx)(Y.E, { variant: "text-md/semibold", className: e4.hr, children: es.intl.string(es.t.K1xGoG) }),
            (0, o.jsx)(e7, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(e7, { colors: l, trackFilterAction: t }),
        ],
    });
}
function e7(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: l, onToggleColor: s } = (0, R.v)();
    return (0, o.jsx)("div", {
        className: e4.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: a } = e;
            return (0, o.jsx)(
                e8,
                { color: t, label: i, enum: a, isToggled: l.has(a), onToggleColor: s, trackFilterAction: n },
                a,
            );
        }),
    });
}
function e8(e) {
    let { color: t, label: n, enum: l, isToggled: s, onToggleColor: i, trackFilterAction: a } = e,
        r = (0, eD.r)(eH.A.unsafe_rawColors.WHITE).hex(),
        c = (0, eD.r)(eH.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        eF.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                ew.D,
                {
                    className: u()(e4.n1, { [e4.lx]: s }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": s,
                    onClick: () => {
                        a(`filter color ${n.toLowerCase()} ${!s ? "on" : "off"}`), i(l);
                    },
                    children:
                        s &&
                        (0, o.jsx)("div", {
                            className: e4.oE,
                            children: (0, o.jsx)(eG.r, {
                                size: "xs",
                                color: (0, e0.j)({ backgroundColor: t, colors: [r, c] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function te(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, R.v)(),
        s = (0, eJ.Ay)() === e5.NJ.DARK,
        i = c.useCallback(
            (e) => {
                if (n.has(e) || s) return "control-primary-text-default";
            },
            [n, s],
        ),
        a = c.useCallback((e) => (n.has(e) || s ? eH.A.colors.WHITE : eH.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, s]),
        r = c.useMemo(
            () => [
                {
                    name: es.intl.string(es.t.aVBOKh),
                    icon: (0, o.jsx)(eU.E, { size: "xs", color: a(ey.ANIME) }),
                    enum: ey.ANIME,
                },
                {
                    name: es.intl.string(es.t["3WoZBc"]),
                    icon: (0, o.jsx)(ez._, { size: "xs", color: a(ey.GAMING) }),
                    enum: ey.GAMING,
                },
                {
                    name: es.intl.string(es.t.yuEmLj),
                    icon: (0, o.jsx)(eV.C, { size: "xs", color: a(ey.CUTE_COZY) }),
                    enum: ey.CUTE_COZY,
                },
                {
                    name: es.intl.string(es.t.mMvCHo),
                    icon: (0, o.jsx)(eY.L, { size: "xs", color: a(ey.SCI_FI) }),
                    enum: ey.SCI_FI,
                },
                {
                    name: es.intl.string(es.t.TlhOQC),
                    icon: (0, o.jsx)(eW.L, { size: "xs", color: a(ey.FOOD_DRINKS) }),
                    enum: ey.FOOD_DRINKS,
                },
                {
                    name: es.intl.string(es.t["4IaUIM"]),
                    icon: (0, o.jsx)(eK.f, { size: "xs", color: a(ey.FANTASY) }),
                    enum: ey.FANTASY,
                },
                {
                    name: es.intl.string(es.t["w0nSG/"]),
                    icon: (0, o.jsx)(e$.N, { size: "xs", color: a(ey.ANIMALS_PETS) }),
                    enum: ey.ANIMALS_PETS,
                },
                {
                    name: es.intl.string(es.t.cJng7v),
                    icon: (0, o.jsx)(eq.p, { size: "xs", color: a(ey.NATURE) }),
                    enum: ey.NATURE,
                },
                {
                    name: es.intl.string(es.t["5mUvyM"]),
                    icon: (0, o.jsx)(eZ.T, { size: "xs", color: a(ey.MOVIES_TV_SHOWS) }),
                    enum: ey.MOVIES_TV_SHOWS,
                },
                {
                    name: es.intl.string(es.t.MB9H5Z),
                    icon: (0, o.jsx)(eX.e, { size: "xs", color: a(ey.DARK_MOODY) }),
                    enum: ey.DARK_MOODY,
                },
            ],
            [a],
        );
    return (0, o.jsxs)("div", {
        className: e4.KZ,
        children: [
            (0, o.jsx)(Y.E, { variant: "text-md/semibold", className: e4.hr, children: es.intl.string(es.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: e4.Ot,
                children: r.map((e) => {
                    let { name: s, icon: a, enum: r } = e;
                    return (0, o.jsxs)(
                        ew.D,
                        {
                            className: u()(e4.w4, { [e4.C7]: n.has(r) }),
                            "aria-label": s,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${s.toLowerCase()} ${!e ? "on" : "off"}`), l(r);
                            },
                            children: [a, (0, o.jsx)(Y.E, { color: i(r), variant: "text-md/medium", children: s })],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
var tt = n(561769),
    tn = n(882443);
function tl() {
    return (0, o.jsxs)("div", {
        className: tn.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: es.intl.string(es.t.oezC3x),
                className: tn._,
            }),
            (0, o.jsx)(el.D, { variant: "heading-xl/semibold", children: es.intl.string(es.t.oezC3x) }),
            (0, o.jsx)(Y.E, { variant: "text-md/medium", children: es.intl.string(es.t["Tc/Ndl"]) }),
        ],
    });
}
var ts = n(996824);
let ti = { flattenProductVariants: !0 };
function ta(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: l } = e,
        s = (0, A.uM)(),
        i = s?.sessionId ?? "",
        { noCache: a, includeUnpublished: r } = (0, eC.A)(),
        d = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: g, currentPage: h, totalCount: E, isFetchingResults: x } = (0, U.S)(),
        f = (0, m.yK)([L.A], () => L.A.getProductsBySkus(g)),
        p = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        C = g?.join("");
    c.useEffect(() => {
        p();
    }, [C, p]);
    let _ = (0, eo.p)(),
        b = c.useMemo(() => _(f), [_, f]);
    c.useEffect(() => {
        t ||
            (0, ed.z)({
                sessionId: i,
                checkpoint: ed.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
    }, [i, r, a, t, l]);
    let S = c.useRef(null),
        { setQueryPageSize: j, setQueryPageOffset: I, queryPageSize: N } = (0, R.v)(),
        [O, T] = c.useState(!1),
        k = t || x || null == d;
    c.useEffect(() => {
        k ? T(!1) : b.length > 0 && T(!0);
    }, [k, b.length]);
    let y = N > 0 && !k && 0 === b.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == S.current || j(Math.floor(5 * getComputedStyle(S.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != S.current) return e.observe(S.current), () => e.disconnect();
    }, [j]);
    let M = c.useCallback(
        (e) => {
            q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: s?.sessionId,
                page_section: s?.pageSection,
                page_category: s?.pageCategory,
                page_index: e,
                page_size: N,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                I((e - 1) * N);
        },
        [s, N, I],
    );
    return (0, o.jsxs)(tt.v3.Provider, {
        value: ti,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [ts.oE]: y }),
                children: [
                    y && (0, o.jsx)(tl, {}),
                    (0, o.jsxs)("div", {
                        className: u()(ts.ZE, { [ts.Kp]: O }),
                        ref: S,
                        children: [
                            k && [...Array(N)].map((e, t) => (0, o.jsx)(eg.A, {}, t)),
                            !k &&
                                b.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              A.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      ef.A,
                                                      { skuId: e.skuId, hideStaticBundleBackgroundAsset: !0 },
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
            E > N &&
                (0, o.jsx)("div", {
                    className: ts.Ej,
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(er.m, {
                            currentPage: h,
                            totalCount: E,
                            pageSize: N,
                            onPageChange: M,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var tr = n(328539);
function to(e) {
    let { tab: t, categories: n, initialCategoryId: l, showFilterInitially: s = !0, onUnmount: i } = e,
        a = (0, Q.A)("shop_include_unpublished");
    (0, R.S)(a);
    let r = c.useRef(null),
        { handleScroll: d } = J(r, t),
        u = (0, D.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, eA.k0)(r.current),
        [h, E] = c.useState(s),
        [x, f] = c.useState(!1);
    return (
        c.useEffect(() => {
            null != l && m(l);
        }, [l, m]),
        c.useEffect(
            () => () => {
                null != i && i();
            },
            [],
        ),
        c.useEffect(() => {
            function e() {
                f(window.innerWidth < 1400);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, o.jsx)("div", {
            className: tr.VM,
            children: (0, o.jsxs)("main", {
                className: tr.MY,
                children: [
                    (0, o.jsx)(z.Gt, {
                        className: tr.OW,
                        ref: r,
                        onScroll: d,
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: tr.en,
                                  children: (0, o.jsx)("div", {
                                      className: tr.pf,
                                      children: (0, o.jsx)(ee.Z_, { tenantId: Z.FYj, templateId: et.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(tc, {
                                  isSmallScreen: x,
                                  filterBarOpen: h,
                                  setFilterBarOpen: E,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: g,
                                  initialCategoryId: l,
                              }),
                    }),
                    h && !x && (0, o.jsx)("div", { className: tr.yF }),
                    h && !x && (0, o.jsx)(V.Ip, { className: tr.kT, children: (0, o.jsx)(e3, {}) }),
                ],
            }),
        })
    );
}
function tc(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: l,
            tab: s,
            scrollerRef: i,
            categories: a,
            setCategoryRef: r,
            initialCategoryId: d,
        } = e,
        g = c.useRef(null),
        m = (0, R.v)((e) => e.hasDefaultFilters()),
        h = (0, A.uM)(),
        { handlePageChange: E, currentPage: x } = (function (e) {
            let [t, n] = c.useState(1);
            return {
                currentPage: t,
                handlePageChange: c.useCallback(
                    (t) => {
                        n(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, n],
                ),
            };
        })(i),
        f = c.useCallback(
            (e) => {
                q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        p = c.useRef(null);
    return (
        c.useEffect(() => {
            if (t && n)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === g.current ||
                    null === p.current ||
                    g.current.contains(t) ||
                    p.current.contains(t) ||
                    (q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    l(!1));
            }
        }, [t, n, l, h]),
        (0, o.jsx)("div", {
            className: tr.en,
            children: (0, o.jsxs)("div", {
                className: tr.pf,
                children: [
                    (0, o.jsxs)("div", {
                        className: tr.ne,
                        children: [
                            (0, o.jsx)("div", { className: tr.lQ, children: (0, o.jsx)(ei, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(tr.wR, { [tr.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: tr.Ul,
                                        children: [
                                            (0, o.jsx)(Y.E, {
                                                variant: "text-md/semibold",
                                                children: es.intl.string(es.t.uaX705),
                                            }),
                                            (0, o.jsx)(ek, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: p,
                                        children: (0, o.jsx)(W.$, {
                                            onClick: function () {
                                                let e = !n;
                                                q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: es.intl.string(n ? es.t.fYtm6f : es.t["TeTYE+"]),
                                            icon: K.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, o.jsx)("div", {
                                    className: tr.Dh,
                                    ref: g,
                                    children: (0, o.jsx)(z.Ch, { className: tr.Qo, children: (0, o.jsx)(e3, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, o.jsx)(A.R9, {
                              newValue: { pageIndex: x },
                              children: (0, o.jsx)(ev, {
                                  categories: a,
                                  setCategoryRef: r,
                                  currentPage: x,
                                  handlePageChange: f,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(ta, { scrollerRef: i, tab: s }, s),
                ],
            }),
        })
    );
}
var td = n(599062),
    tu = n(651162),
    tg = n(554146),
    tm = n(367727);
let th = c.createContext(null);
function tE(e) {
    let { blockType: t, children: n } = e,
        l = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(th.Provider, { value: l, children: n });
}
var tx = n(755172),
    tf = n(325595),
    tp = n(893998),
    tC = n(110629),
    t_ = n(4798),
    tb = n(607399),
    tS = n(946015),
    tj = n(717421),
    tv = n(140735),
    tA = n(496431),
    tL = n(324145);
function tI(e) {
    let { endDate: t, size: n = "md", className: l, showSeconds: s = !1 } = e,
        { days: i, hours: a, minutes: r, seconds: c } = (0, tA.A)(t),
        d = (function (e, t, n, l, s) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [i(e), i(t), i(n)];
            return s && a.push(i(l)), a.join(":");
        })(i, a, r, c, s);
    return (0, o.jsxs)("div", {
        className: u()(tL.kL, l),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, o.jsx)(
                              Y.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: tL.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, o.jsx)(
                              Y.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: tL.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, o.jsx)(tv.A, { children: es.intl.format(es.t.j6IyVe, { days: i, hours: a, minutes: r }) }),
        ],
    });
}
var tN = n(63776);
let tO = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        l = (0, tj.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(t_.animated.div, {
        className: u()([tN.lP, tb.Fr && tN.yJ]),
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
            (0, o.jsxs)(tS.s, {
                direction: tS.s.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(Y.E, {
                        variant: "text-md/medium",
                        className: tN.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(Y.E, {
                            variant: "text-sm/medium",
                            className: tN.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, o.jsx)(tI, { endDate: t.endTime }),
        ],
    });
});
var tT = n(424918),
    tk = n(793574),
    tR = n(993408),
    ty = n(196231),
    tM = n(459550);
function tP(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(tM.n9, tM.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === tT.u.CATEGORY
                ? (0, o.jsx)(
                      A.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, o.jsx)(
                              ty.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, tR.HF)(e.unpublishedAt) ? es.intl.string(es.t["h/uBCR"]) : void 0,
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
}
function tB(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [l, s] = n;
    return (0, o.jsx)("div", {
        className: u()(tM.n9, tM.YB),
        children: (0, o.jsxs)(A.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != l ? l.name : s?.name,
                pageSection: "featured_block",
                tilePosition: +(null == l),
            },
            children: [
                null != l &&
                    (0, o.jsx)(ty.S, {
                        category: l,
                        enablePreview: !0,
                        badgeText: (0, tR.HF)(l.unpublishedAt) ? es.intl.string(es.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != s &&
                    (0, o.jsx)(ty.S, {
                        category: s,
                        badgeText: (0, tR.HF)(s.unpublishedAt) ? es.intl.string(es.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let tD = function (e) {
    let { isLoading: t, handleTransition: n, categories: l, featuredBlockRecord: s } = e,
        { analyticsLocations: i } = (0, p.Ay)(tk.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, o.jsxs)("div", {
              className: u()(tM.n9, tM.YB),
              children: [
                  (0, o.jsx)("div", {
                      className: u()(tM.Jn, tM.oT),
                      children: (0, o.jsx)("div", { className: tM.uy }),
                  }),
                  (0, o.jsx)("div", {
                      className: u()(tM.Jn, tM.oT),
                      children: (0, o.jsx)("div", { className: tM.uy }),
                  }),
              ],
          })
        : null != s
          ? (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(tP, { featuredBlockRecord: s, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(tB, { categories: l, handleTransition: n, isLoading: !1 }),
            });
};
var tH = n(531685),
    tF = n(428262),
    tw = n(621466),
    tG =
        (((a = {}).MOUNTED = "mounted"),
        (a.SORT_OUT = "sort-out"),
        (a.SORT_IN = "sort-in"),
        (a.SHUFFLE_OUT = "shuffle-out"),
        (a.SHUFFLE_IN = "shuffle-in"),
        (a.FINISHED = "finished"),
        a);
n(667532);
var tU = n(435558),
    tz = n.n(tU),
    tV =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    tY = n(153488),
    tW = n(313276),
    tK = n(623373),
    t$ = n(885574),
    tq = n(975807),
    tZ = n(975571),
    tX = n(938682);
let tJ = function (e) {
        let { personalizedResults: t, label: n } = e,
            l = n ?? es.intl.string(es.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: tX.L,
            children: [
                (0, o.jsx)(el.D, { variant: "heading-lg/semibold", children: l }),
                t &&
                    (0, o.jsx)(eF.m, {
                        text: es.intl.string(es.t["3taPdj"]),
                        position: "top",
                        "aria-label": es.intl.string(es.t["3taPdj"]),
                        children: (0, o.jsx)(ew.D, {
                            onClick: () => (0, tq.A)(tZ.A.getArticleURL(Z.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: tX.s,
                            children: (0, o.jsx)(t$.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    tQ = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: l,
                numVisibleItems: s,
                tab: i,
                buttonContainerClassName: a,
                orbsSupportedOnly: r,
            } = e,
            d = (0, P.bG)([v.default], () => v.default.getCurrentUser()),
            g = tF.Ay.canUseShopDiscounts(d),
            m = (0, tt.Mk)(i),
            h = (0, eO.yB)("FeedBlock"),
            {
                sortType: E,
                setSortType: x,
                sortedItems: f,
                sortOptions: C,
                shuffleProducts: _,
                showRecommendationOption: b,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: l } = e,
                    s = (0, P.bG)([tY.A], () => tY.A.hasConsented(Z.YAq.PERSONALIZATION)),
                    i = c.useMemo(() => t?.[tV.RECOMMENDED] ?? [], [t]),
                    a = c.useMemo(() => t?.[tV.POPULAR] ?? [], [t]),
                    r = i.length > 0 && s,
                    [o, d] = c.useState(r ? tV.RECOMMENDED : tV.POPULAR),
                    u = (0, P.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    g = c.useMemo(() => (0, tR.CE)(u), [u]),
                    m = (0, tW.A)(),
                    h = (0, eo.p)(),
                    [E, x] = c.useState([]),
                    f = c.useCallback(() => {
                        d(tV.RANDOM), x(tz().shuffle(g));
                    }, [g]);
                c.useEffect(() => {
                    x(tz().shuffle(g));
                }, [g]);
                let p = c.useMemo(() => {
                    let e = [];
                    switch (o) {
                        case tV.RECENT:
                            e = g;
                            break;
                        case tV.PRICE_LOW_TO_HIGH:
                            e = (0, tR.bf)([...g], n, l);
                            break;
                        case tV.RECOMMENDED:
                            e = m(i);
                            break;
                        case tV.POPULAR:
                            e = m(a);
                            break;
                        case tV.RANDOM:
                            e = E;
                    }
                    return l ? (0, tK.ex)(h(e)) : h(e);
                }, [o, l, h, n, g, m, i, a, E]);
                return {
                    sortType: o,
                    setSortType: d,
                    sortedItems: (0, ec.X)(p),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: tV.POPULAR, label: es.intl.string(es.t.Y68e5p) },
                            { value: tV.RECENT, label: es.intl.string(es.t["51Bhiz"]) },
                            { value: tV.PRICE_LOW_TO_HIGH, label: es.intl.string(es.t.m8RVU2) },
                        ];
                        return r && e.unshift({ value: tV.RECOMMENDED, label: es.intl.string(es.t.zPWgFG) }), e;
                    }, [r]),
                    showRecommendationOption: r,
                    shuffleProducts: f,
                };
            })({ sortedSkuIds: l, hasShopDiscount: g, orbsSupportedOnly: r }),
            S = (0, P.bG)([B.Ay], () => B.Ay.useReducedMotion),
            j = (0, P.bG)([tH.A], () => tH.A.isFocused()),
            I = !S && j,
            { animationPhase: N, startAnimation: O } = (() => {
                let [e, t] = c.useState("mounted"),
                    [n, l] = c.useState(!1),
                    s = c.useRef(null);
                return (
                    c.useEffect(() => {
                        if (n && "finished" === e) {
                            if (null !== s.current) {
                                let e = s.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, tw.vq)(e, HTMLButtonElement) ||
                                    (0, tw.vq)(e, HTMLAnchorElement) ||
                                    (0, tw.vq)(e, HTMLInputElement) ||
                                    (0, tw.vq)(e, HTMLSelectElement) ||
                                    (0, tw.vq)(e, HTMLTextAreaElement)
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
                    }, [e, n]),
                    {
                        animationPhase: e,
                        startAnimation: c.useCallback((e) => {
                            let { isShuffling: n, onOutroComplete: i, returnRef: a } = e;
                            a?.current != null && ((s.current = a.current), l(!0)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        i(),
                                            t(n ? "shuffle-in" : "sort-in"),
                                            setTimeout(
                                                () => {
                                                    t("finished");
                                                },
                                                n ? 200 : 300,
                                            );
                                    },
                                    n ? 250 : 300,
                                );
                        }, []),
                    }
                );
            })(),
            T = (0, A.uM)(),
            k = T?.sessionId ?? "",
            { analyticsLocations: R } = (0, p.Ay)(tk.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            y = c.useRef(null),
            M = c.useRef(null),
            [D, H] = c.useState(!1),
            F = c.useCallback(
                (e) => {
                    H(!1),
                        O({ isShuffling: !1, onOutroComplete: () => x(e), returnRef: M }),
                        q.default.track(Z.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: k,
                            sort_type: e,
                        });
                },
                [O, x, k],
            );
        return null == d
            ? null
            : (0, o.jsx)(p.f5, {
                  value: R,
                  children: (0, o.jsxs)("div", {
                      className: u()(tM.lD, tM.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: tM.$6,
                              children: [
                                  (0, o.jsx)(tJ, { label: n, personalizedResults: b }),
                                  (0, o.jsxs)("div", {
                                      className: u()(tM.IE, { [eO.jP]: h }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: tM.gd,
                                              children: [
                                                  (0, o.jsx)(Y.E, {
                                                      variant: "text-md/medium",
                                                      children: es.intl.string(es.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(a, tM.pI),
                                                      ref: M,
                                                      children: (0, o.jsx)(eN.l, {
                                                          label: es.intl.string(es.t.uaX705),
                                                          hideLabel: !0,
                                                          options: C,
                                                          onSelectionChange: F,
                                                          formatOption: (e) => {
                                                              let { label: t, value: n } = e;
                                                              return { id: n, label: t, value: n };
                                                          },
                                                          value: E,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, o.jsx)("div", {
                                              className: a,
                                              children: (0, o.jsx)(W.$, {
                                                  variant: "secondary",
                                                  text: es.intl.string(es.t.X3tnc4),
                                                  buttonRef: y,
                                                  onClick: function () {
                                                      H(!0),
                                                          O({ isShuffling: !0, onOutroComplete: _, returnRef: y }),
                                                          q.default.track(
                                                              Z.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: k },
                                                          );
                                                  },
                                                  disabled: N !== tG.MOUNTED && N !== tG.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(tv.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: D && N === tG.FINISHED ? es.intl.string(es.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: tM.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(eg.A, {}, t + 1)),
                                    })
                                  : f.slice(0, s).map((e, t) => {
                                        let n,
                                            l = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == l) return null;
                                        if (I)
                                            if (N === tG.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: tM.Z2,
                                                        children: (0, o.jsx)(eg.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                N === tG.SORT_OUT
                                                    ? (n = tM.MW)
                                                    : N === tG.SHUFFLE_IN
                                                      ? (n = tM.aS)
                                                      : N === tG.SORT_IN && (n = tM.F7);
                                        return (0, o.jsx)(
                                            A.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, o.jsx)("div", {
                                                    className: n,
                                                    children: (0, o.jsx)(ef.A, {
                                                        skuId: e.skuId,
                                                        hideStaticBundleBackgroundAsset: !0,
                                                        prioritizedCurrency: m,
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
var t0 = n(449543),
    t1 = n(843793);
let t2 = function (e) {
    let { block: t, handleTransition: n, tab: l } = e,
        s = (0, P.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, tt.Mk)(l),
        a = (0, tW.A)(),
        r = c.useMemo(() => a(t.rankedSkuIds), [t.rankedSkuIds, a]),
        d = (0, ec.X)(r),
        { analyticsLocations: g } = (0, p.Ay)(tk.A.COLLECTIBLES_SHOP_SHELF),
        m = c.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == s || 0 === d.length
        ? null
        : (0, o.jsx)(p.f5, {
              value: g,
              children: (0, o.jsxs)("div", {
                  className: u()(t1.kL, tM.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, o.jsx)("img", {
                              className: t1.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, o.jsxs)("div", {
                          className: t1.Qs,
                          children: [
                              (0, o.jsxs)("div", {
                                  className: t1.wx,
                                  children: [
                                      (0, o.jsxs)("div", {
                                          className: t1.Jb,
                                          children: [
                                              (0, o.jsx)(tC.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, o.jsx)(el.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, o.jsx)(W.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: m,
                                          }),
                                  ],
                              }),
                              (0, o.jsx)(t0.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: d.map((e, n) =>
                                      null == L.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, o.jsx)(
                                                A.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: n,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, o.jsx)(ef.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency: i,
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
var t5 = n(269115),
    t4 = n(43990),
    t3 = n(408278),
    t9 = n(789645),
    t6 = n(976860),
    t7 = n(49999),
    t8 = n(576709),
    ne = n(48093);
let nt = "GAME_SERVER_HOSTING_BANNER";
function nn(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        l = (0, A.uM)(),
        s = c.useRef(null),
        i = c.useRef(!1),
        a = c.useRef(null),
        [r, d] = c.useState(!1),
        g = c.useCallback(
            (e) => {
                q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: n,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: nt,
                    cta_name: e,
                });
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        ),
        m = c.useCallback(() => {
            g("go_to_game_server_hosting"), (0, t6.pX)(Z.BVt.COLLECTIBLES_SHOP_WITH_TAB(eb.G2.GAME_SERVERS));
        }, [g]),
        h = c.useCallback(() => {
            g("dismiss"),
                d(!0),
                !0 === t.isDismissible &&
                    (0, tm.d6)(tg.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, { dismissAction: t7.i.USER_DISMISS });
        }, [g, t.isDismissible]),
        E = c.useCallback(
            (e) => {
                !i.current &&
                    (e && null === a.current
                        ? (a.current = setTimeout(() => {
                              (i.current = !0),
                                  (a.current = null),
                                  q.default.track(Z.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: l?.sessionId,
                                      page_type: n,
                                      page_category: l?.pageCategory,
                                      page_section: l?.pageSection,
                                      type: nt,
                                  });
                          }, 1e3))
                        : e || null === a.current || (clearTimeout(a.current), (a.current = null)));
            },
            [l?.sessionId, l?.pageCategory, l?.pageSection, n],
        );
    return (c.useEffect(
        () => () => {
            null !== a.current && (clearTimeout(a.current), (a.current = null));
        },
        [],
    ),
    r)
        ? null
        : (0, o.jsx)(t4.N, {
              theme: e5.NJ.DARKER,
              children: (e) =>
                  (0, o.jsx)(t5.L, {
                      innerRef: s,
                      onChange: E,
                      threshold: 0,
                      children: (0, o.jsx)("div", {
                          ref: s,
                          className: u()(ne.YB, e),
                          children: (0, o.jsxs)("div", {
                              className: ne.kL,
                              children: [
                                  (0, o.jsx)("img", {
                                      className: ne.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, o.jsx)("div", { className: ne.uX }),
                                  !0 === t.isDismissible &&
                                      (0, o.jsx)("div", {
                                          className: ne.b,
                                          children: (0, o.jsx)(t3.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: t9.P,
                                              onClick: h,
                                              "aria-label": es.intl.string(es.t.WAI6xu),
                                          }),
                                      }),
                                  (0, o.jsx)("div", {
                                      className: ne.jE,
                                      children: (0, o.jsxs)("div", {
                                          className: ne.rF,
                                          children: [
                                              (0, o.jsxs)("div", {
                                                  className: ne.Z,
                                                  children: [
                                                      (0, o.jsx)(el.D, {
                                                          className: ne.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: es.intl.string(t8.default["34GMP9"]),
                                                      }),
                                                      (0, o.jsx)(Y.E, {
                                                          className: ne.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: es.intl.string(t8.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, o.jsx)(W.$, {
                                                  variant: "overlay-primary",
                                                  size: "sm",
                                                  text: es.intl.string(es.t.jVcuVY),
                                                  onClick: m,
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
}
var nl = n(337183),
    ns = n(349288),
    ni = n(212407),
    na = n(815280),
    nr = n(10675);
let no = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        l = (0, ea.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: s, bannerAnimatedUrl: i } = (0, ni.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: l,
        className: nr.BX,
        children: [
            (0, o.jsx)("div", {
                className: nr.vK,
                children: null != s && (0, o.jsx)(na.A, { bannerStatic: s, bannerAnimated: i }),
            }),
            (0, o.jsx)("div", {
                className: nr.HQ,
                children: (0, o.jsxs)("div", {
                    className: nr.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(tI, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(el.D, {
                            variant: "heading-xxl/bold",
                            className: nr.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(Y.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(ns.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: nr.CU,
                                              style: { ...a },
                                              children: es.intl.string(es.t.O7ADgv),
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
var nc = n(189213),
    nd = n(290136),
    nu = n(478016),
    ng = n(825484),
    nm = n(812993),
    nh = n(713517),
    nE = n(914410),
    nx = n(34332),
    nf = n(597783),
    np = n(61750);
function nC(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        l = (0, P.bG)([w.A], () => w.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => l.length === n.length, [l, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: l,
    };
}
var n_ = n(162945),
    nb = n(858708);
let nS = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: l } = (0, nf.Z)(n),
            s = c.useRef(null),
            { isHoveringOrFocusing: i } = (0, nh.A)(s),
            { readyToClaim: a, collectibleProductSkuIds: r, collectedSkuIds: d } = nC(t, n),
            g = (0, P.bG)([w.A], () => w.A.isClaiming === n);
        return (0, o.jsx)(t5.L, {
            onChange: l,
            threshold: 0,
            innerRef: s,
            children: (0, o.jsx)("div", {
                ref: s,
                className: u()(n_.ty, nb.Q3, { [n_.yo]: i }),
                "aria-label": es.intl.formatToPlainString(es.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: n_.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nb.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: n_.N1,
                            children: (0, o.jsx)(nm.Lp, {
                                text: es.intl.string(es.t.rykAJ9),
                                disableColor: !0,
                                className: nb.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: n_.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: nb.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: nb.cs,
                                            children: [
                                                (0, o.jsx)(el.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: n_.tZ,
                                                    children: es.intl.string(es.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(eF.m, {
                                                    text: a
                                                        ? es.intl.string(es.t.cKH3tk)
                                                        : es.intl.formatToPlainString(es.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: nb.ZB,
                                                        children: (0, o.jsx)(nd.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: n_.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: nb.L$,
                                                children: [
                                                    (0, o.jsx)(nE.Ay, {
                                                        variant: nE.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(nb.__, { [nb.gF]: a }),
                                                        children: [
                                                            a
                                                                ? (0, o.jsx)(nu.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(Y.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: es.intl.formatToPlainString(es.t["5TwASM"], {
                                                                    collectedCount: d.length,
                                                                    totalCount: r.length,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("div", {
                                    className: n_.Vs,
                                    children: (0, o.jsx)(ng.e, {
                                        wrap: !1,
                                        className: n_.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(W.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    a &&
                                                        (0, nx.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = L.A.getProduct(n);
                                                                null != e &&
                                                                    (0, np.A)({
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
                                                                (0, h.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, o.jsx)(nc.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: es.intl.string(es.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: es.intl.string(es.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: es.intl.string(
                                                                                    es.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: es.intl.string(es.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !a,
                                            loading: g,
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
    nj = function (e) {
        let t,
            n,
            l,
            { isBlockLoading: s = !1, heroBlock: i, tab: a } = e,
            r = (0, tt.Mk)(a),
            d = c.useMemo(() => L.A.getCategoryForProduct(i.rewardSkuId), [i.rewardSkuId]),
            u = (0, P.bG)([w.A], () => w.A.getPurchase(i.rewardSkuId)),
            { products: g } =
                ((t = (0, tW.A)()),
                (n = c.useMemo(
                    () => (s ? [] : t(i.rankedSkuIds).filter((e) => e.skuId !== i.rewardSkuId || null != u)),
                    [s, t, i.rankedSkuIds, u, i.rewardSkuId],
                )),
                (l = (0, eo.p)()(n)),
                { products: (0, ec.X)(l) }),
            m = c.useMemo(
                () =>
                    !s &&
                    0 !== i.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    i.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [s, i.rankedSkuIds, g.length],
            ),
            h = s || m,
            { readyToClaim: E } = nC(d, i.rewardSkuId),
            x = null == u && null != i.rewardSkuId && null != d;
        return (0, o.jsx)(t0.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(eg.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          x &&
                              E &&
                              (0, o.jsx)(
                                  A.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(nS, { category: d, rewardSkuId: i.rewardSkuId }),
                                  },
                                  i.rewardSkuId,
                              ),
                          g.map((e, t) => {
                              let n = L.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, o.jsx)(
                                        A.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, o.jsx)(ef.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, tR.$b)(90);
let nv = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tu.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nA = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: l, onVisibilityChange: s } = e,
            i = (0, ea.K)(
                (e) => {
                    s?.(e);
                },
                0.1,
                null != s,
            ),
            a = (0, P.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(tk.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: g,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, ni.Kk)(n),
            E = c?.responsive ?? !1,
            x = c?.backgroundStyle;
        return null != a && (t || n !== nv)
            ? (0, o.jsx)(p.f5, {
                  value: r,
                  children: (0, o.jsxs)("div", {
                      ref: i,
                      className: tM.os,
                      children: [
                          (0, o.jsx)("div", {
                              className: u()(tM.vK, { [tM.no]: E }),
                              style: null != x ? { background: x } : void 0,
                              children:
                                  null != m &&
                                  (0, o.jsx)(na.A, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
                          }),
                          (0, o.jsxs)("div", {
                              className: tM.xX,
                              children: [
                                  (0, o.jsx)("div", {
                                      className: u()(tM.bC, { [tM.no]: E }),
                                      children: t
                                          ? (0, o.jsx)("div", { className: tM.Hw })
                                          : (0, o.jsx)("div", {
                                                className: tM.Hw,
                                                children: (0, o.jsxs)("div", {
                                                    className: tM.Wq,
                                                    children: [
                                                        null != g &&
                                                            (0, o.jsx)("img", {
                                                                className: tM.rm,
                                                                src: g,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, o.jsx)(el.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tM.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(Y.E, {
                                                                variant: "text-md/normal",
                                                                className: tM.Tm,
                                                                style:
                                                                    null != n.bannerTextColor
                                                                        ? { color: n.bannerTextColor }
                                                                        : void 0,
                                                                children: n.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, o.jsx)(nj, { isBlockLoading: t, heroBlock: n, tab: l }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nL = n(222884);
let nI = function (e) {
    let { shelf: t, handleTransition: n, tab: l } = e,
        s = (0, P.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, tt.Mk)(l),
        a = (0, P.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, tW.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        g = (0, ec.X)(d),
        { analyticsLocations: m } = (0, p.Ay)(tk.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: a?.isOrbsExclusive === !0 && l !== eb.G2.ORBS,
            });
        }, [t.categorySkuId, a, n, l]);
    if (null == s || 0 === g.length) return null;
    let E = t.buttonText ?? es.intl.formatToPlainString(es.t.bc9RBE, { category_name: t.name }),
        x = t.showButton,
        f = t.desktopBackgroundImage,
        C = null != f;
    return (0, o.jsx)(p.f5, {
        value: m,
        children: (0, o.jsxs)("div", {
            className: u()(nL.mu, tM.YB, C ? nL.VA : nL.Ti),
            children: [
                C && (0, o.jsx)("img", { className: nL.iL, src: f, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: nL.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nL.wx,
                            children: [
                                (0, o.jsx)(el.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                x &&
                                    (0, o.jsx)(W.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: E,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, o.jsx)(t0.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            children: g.map((e, n) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, o.jsx)(
                                          A.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(ef.A, { skuId: e.skuId, prioritizedCurrency: i }),
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
var nN = n(465794),
    nO = n(69236),
    nT = n(44724),
    nk = n(421108),
    nR = n(873297),
    ny = n(202541);
let nM = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: l,
            gradientAngle: s,
            skuIds: i,
            tab: a,
            endTime: r,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        g = (0, nk.u)(r) ?? void 0,
        m = (0, nO.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || m
                    ? {
                          kind: "button",
                          text: es.intl.string(es.t.apFNLU),
                          onClick: () => (0, nT.default)({ applicationId: t }),
                          onMouseDown: () => (0, nT.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(nN.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: ny.pe.TIER_2,
                              buttonTextOverride: es.intl.string(es.t.pj0XBN),
                          }),
                      },
            [d, t, m],
        );
    return (0, o.jsx)(nR.A, {
        skuIds: i,
        tab: a,
        applicationId: t,
        headerText: n,
        logoUrl: u,
        cta: h,
        timeLeftText: g,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${s}deg, ${l.join(", ")})`,
    });
};
var nP = n(575593),
    nB = n(770178),
    nD = n(929283),
    nH = n(273411);
let nF = [
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
];
function nw(e) {
    let { config: t, baseLeft: n, transitioning: l } = e,
        s = window.innerHeight,
        i = L.A.getProduct(t.skuId),
        a = i?.items[0],
        r = i?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: nH.LY,
        style: {
            top: l ? -s - 384 : t.top,
            left: l ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != a && r === nP.R.AVATAR_DECORATION && (0, o.jsx)(nD.i, { item: a }),
    });
}
let nG = (e) => {
        let { peaking: t, transitioning: n, parentWidth: l } = e,
            [s, i] = c.useState(!1),
            [a, r] = c.useState([]),
            [d] = c.useState(() =>
                [...nF]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${eb.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            c.useEffect(() => {
                if (null != l && l > 0) {
                    let e = Math.max(1, Math.floor(l / 130)),
                        t = l / e;
                    r(Array.from({ length: e }, (e, n) => ({ config: d[n % d.length], baseLeft: n * t })));
                }
            }, [l, d]),
            c.useEffect(() => {
                n && setTimeout(() => i(!0), eb.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(nH.rA, { [nH.Kb]: t, [nH.pp]: s }),
                children: a.map((e, t) => {
                    let { config: l, baseLeft: s } = e;
                    return (0, o.jsx)(nw, { config: l, baseLeft: s, transitioning: n }, l.skuId + t);
                }),
            })
        );
    },
    nU = function (e) {
        let { peaking: t, transitioning: n } = e,
            l = c.useRef(null),
            [s, i] = c.useState(0),
            a = c.useCallback(() => {
                null != l.current && i(l.current.offsetWidth);
            }, []);
        return (
            (0, nB.g)(l, a),
            (0, o.jsx)("div", {
                ref: l,
                className: nH.eL,
                children: (0, o.jsx)(nG, { peaking: t, transitioning: n, parentWidth: s }),
            })
        );
    };
var nz = n(815021);
let nV = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            l = L.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            s = c.useRef(null),
            i = c.useRef(null),
            [a, r] = c.useState(),
            [d, g] = c.useState(!1);
        c.useEffect(() => {
            let e = i.current;
            if (null != e)
                return (
                    e.complete ? t() : (e.onload = t),
                    () => {
                        e.onload = null;
                    }
                );
            function t() {
                null != e && e.naturalWidth > 0 && e.naturalHeight > 0 && r(1080 * (e.naturalHeight / e.naturalWidth));
            }
        }, []);
        let m = l?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, nf.Z)(m, "home", "marketing wide banner"),
            E = (0, A.uM)(),
            { bannerURL: x } = (0, ni.w$)(t),
            f = n === eb.G2.ORBS,
            p = null != t.ctaRoute && "" !== t.ctaRoute,
            C = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
            _ = null != t.logoURL && "" !== t.logoURL,
            b = c.useCallback(() => {
                if ((g(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, tm.$l)(tg.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: t7.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            S = c.useCallback(
                (e) => {
                    q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: E?.sessionId,
                        sku_id: m,
                        page_type: n,
                        page_section: E?.pageSection,
                        page_category: E?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(E?.tilePosition),
                        cta_name: e,
                    });
                },
                [E, m, n],
            ),
            j = c.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((S(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, nT.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, t6.pX)(e);
                    }
                },
                [t.ctaRoute, S],
            );
        if (null == x || d) return null;
        let v = u()(tM.nM, tM.Tq, tM.TS, tM.YB, { [tM._1]: f, [tM.vb]: p }),
            I = (0, o.jsxs)(o.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, o.jsx)("div", {
                            className: tM.Mh,
                            children: (0, o.jsx)(nz.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), b();
                                },
                                "aria-label": es.intl.string(es.t.WAI6xu),
                            }),
                        }),
                    (0, o.jsx)("div", {
                        className: u()(tM.zK, { [tM._1]: f }),
                        style: null != a ? { height: `${a}px` } : void 0,
                        children: (0, o.jsx)("img", {
                            ref: i,
                            src: x,
                            alt: t.title,
                            className: u()(tM.LN, { [tM.d5]: f }),
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: u()(tM.Ep, { [tM.Qq]: C }),
                        style: { maxHeight: null != a ? `${a}px` : "auto" },
                        children: (0, o.jsxs)("div", {
                            className: tM.E8,
                            children: [
                                (0, o.jsx)(el.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: f ? tM.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, o.jsx)(Y.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: f ? "text-md/medium" : "text-sm/medium",
                                    children: f
                                        ? es.intl.format(es.t.SFFP7K, {
                                              helpdeskArticle: tZ.A.getArticleURL(Z.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                C &&
                                    (0, o.jsxs)("div", {
                                        className: tM.nP,
                                        children: [
                                            (0, o.jsx)(W.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), j(t.ctaText ?? es.intl.string(es.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? es.intl.string(es.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? es.intl.formatToPlainString(es.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            _ && (0, o.jsx)("img", { src: t.logoURL, alt: "", className: tM.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, o.jsx)(t4.N, {
            theme: f ? void 0 : e5.NJ.DARK,
            children: (e) =>
                (0, o.jsx)(t5.L, {
                    innerRef: s,
                    onChange: h,
                    threshold: 0,
                    children: p
                        ? (0, o.jsx)(ew.D, { innerRef: s, onClick: () => j(null), className: u()(e, v), children: I })
                        : (0, o.jsx)("div", { ref: s, className: u()(e, v), children: I }),
                }),
        });
    },
    nY = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: l, tab: s } = e,
            { noCache: i, includeUnpublished: a } = (0, eC.A)(),
            [r, d] = c.useState(!1),
            g = (0, A.uM)(),
            m = g?.sessionId ?? "",
            h = (0, H.H)({ location: "collectibles_shop_feed" });
        c.useEffect(() => {
            (0, ed.z)({
                sessionId: m,
                checkpoint: ed.t.SHOP_MOUNTED,
                tab: s,
                unpublishedCategoriesShown: a,
                cacheDisabled: i,
            });
        }, [s]);
        let {
                isFetchingShopHome: E,
                fetchShopHomeError: x,
                shopBlocks: f,
                refreshShopHome: p,
            } = (0, tx.y)(s, { noCache: i, includeUnpublished: a, logPerf: !0 }, { sessionId: m, tab: s }),
            C = c.useCallback(() => {
                p();
            }, [p]),
            _ = c.useMemo(() => f.some((e) => e instanceof tf.p), [f])
                ? (0, o.jsx)(tC.A, { location: "CollectiblesShop" })
                : null;
        return (c.useEffect(() => {
            null != x ||
                E ||
                0 === f.length ||
                (0, ed.z)({
                    sessionId: m,
                    checkpoint: ed.t.SHOP_RENDERED,
                    tab: s,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: i,
                });
        }, [x, E, f.length, a, i, m, s]),
        null != x)
            ? (0, o.jsx)(td.h, { onRetry: C, errorOrigin: td.A.SHOP_PAGE, errorMessage: x.message })
            : E || 0 === f.length
              ? (0, o.jsxs)("div", {
                    className: u()(tM.g4, tM.Of),
                    children: [
                        (0, o.jsx)(nl.A, { isLoading: E, handleTransition: t, tab: s }),
                        (0, o.jsx)(tD, { isLoading: E, handleTransition: t, categories: [] }),
                        (0, o.jsx)(tQ, {
                            isLoading: E,
                            title: s === eb.G2.ORBS ? es.intl.string(es.t.dFgeuZ) : es.intl.string(es.t.NSv5KV),
                            numVisibleItems: n,
                            tab: s,
                        }),
                    ],
                })
              : (0, o.jsx)(o.Fragment, {
                    children: f.map((e, i) =>
                        (function (e, i, a) {
                            if (null == e) return null;
                            let c = null,
                                g = !1;
                            switch (e.type) {
                                case tu.g.HERO:
                                    c = (0, o.jsx)(
                                        nl.A,
                                        { isLoading: E, handleTransition: t, heroBlock: e, tab: s, badge: _ },
                                        a,
                                    );
                                    break;
                                case tu.g.FEATURED:
                                    c = (0, o.jsx)(
                                        tD,
                                        { isLoading: E, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case tu.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        tQ,
                                        {
                                            title:
                                                s === eb.G2.ORBS
                                                    ? es.intl.string(es.t.dFgeuZ)
                                                    : es.intl.string(es.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: i?.type === tu.g.IMMERSIVE_BANNER ? tM.w : void 0,
                                            tab: s,
                                            orbsSupportedOnly: s === eb.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case tu.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, tm.En)(tg.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(nV, { wideBannerBlock: e, tab: s }, a);
                                    break;
                                case tu.g.FRAMES_BANNER:
                                    c = (0, o.jsx)(
                                        nV,
                                        {
                                            wideBannerBlock: tp.y.fromServer({
                                                type: tu.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: s,
                                        },
                                        a,
                                    );
                                    break;
                                case tu.g.FRAMES_PRODUCT_SHELF:
                                    c = (0, o.jsx)(t2, { block: e, handleTransition: t, tab: s }, a);
                                    break;
                                case tu.g.SHELF:
                                    c = (0, o.jsx)(nI, { handleTransition: t, shelf: e, tab: s }, a);
                                    break;
                                case tu.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(tO, { countdownTimerBlock: e, isVisible: r }, a)), (g = !0);
                                    break;
                                case tu.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        no,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        a,
                                    );
                                    break;
                                case tu.g.REWARD_HERO:
                                    c = (0, o.jsx)(nA, { isLoading: E, handleTransition: t, heroBlock: e, tab: s }, a);
                                    break;
                                case tu.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, tm.En)(tg.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, o.jsx)(
                                        tE,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nn, { gameServerHostingBannerBlock: e, tab: s }),
                                        },
                                        a,
                                    );
                                case tu.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        tE,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nM, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: s,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                            }),
                                        },
                                        a,
                                    );
                                default:
                                    return null;
                            }
                            return (0, o.jsx)(
                                tE,
                                {
                                    blockType: e.type,
                                    children: (0, o.jsx)("div", {
                                        className: u()(tM.v1, tM.Of, { [tM.J1]: 0 === a || g }),
                                        children: c,
                                    }),
                                },
                                a,
                            );
                        })(e, i > 0 ? f[i - 1] : null, i),
                    ),
                });
    },
    nW = function (e) {
        let { handleTransition: t, tab: n, transitionState: l } = e,
            s = c.useRef(null),
            { handleScroll: i } = J(s, n),
            a = (0, ep.U)(),
            r = (0, A.uM)(),
            [d, u] = c.useState(eb.md),
            [g, m] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != s.current) {
                    function e() {
                        if (null == s.current) return;
                        let e = s.current.getDistanceFromBottom();
                        d >= 36 ? m(e < 20) : e <= 200 && u((e) => e + eb.md);
                    }
                    let t = s.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, d, u, m]),
            (0, o.jsx)(z.Ch, {
                className: tM.OW,
                ref: s,
                onScroll: i,
                children: (0, o.jsxs)("div", {
                    className: tM.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: tM.rb,
                            children: [
                                (0, o.jsx)(nY, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: a,
                                    tab: n,
                                }),
                                n !== eb.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: tM.R$,
                                        children: [
                                            (0, o.jsx)(el.D, {
                                                variant: "heading-md/semibold",
                                                children: es.intl.string(es.t.Yr70c4),
                                            }),
                                            (0, o.jsx)(W.$, {
                                                variant: "primary",
                                                text: es.intl.string(es.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === eb.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(nU, { peaking: g, transitioning: l === eb.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var nK = n(154323),
    n$ = n(295811),
    nq = n(870216);
let nZ = { "Any:personalization-header": tJ },
    nX = { [et.b.SHOP_HOME]: nZ },
    nJ = { "1465939725649973269": nZ, "1478495181551440044": nZ },
    nQ = function () {
        return (0, o.jsx)("div", {
            style: {
                background: "linear-gradient(rgba(39, 30, 173, 0.3), transparent)",
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
            },
            children: (0, o.jsx)("div", {
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
        });
    },
    n0 = { prioritizedCurrency: tt.Hi.ORBS };
function n1(e) {
    let { tab: t } = e,
        [n, l, s] = (0, P.yK)([nq.A], () => [nq.A.getLayout(t), nq.A.isFetchingLayout(t), nq.A.getLayoutFetchError(t)]),
        i = (0, P.bG)([nK.A], () => nK.A.get("shop_include_unpublished")),
        a = (0, P.bG)([L.A], () => L.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === i && (e.include_unpublished = !0), null != a && a > 0 && (e.skip_num_categories = a), e;
        }, [i, a]),
        d = null == n && !l && s?.status !== 404 && s?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, nx.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== M.HOME || d || l
            ? null
            : (0, o.jsx)(ee.Z_, {
                  tenantId: Z.FYj,
                  templateId: et.b.SHOP_HOME,
                  requestParams: r,
                  overrides: nX[et.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(ee.Qs, { tenantId: Z.FYj, layoutId: n, overrides: nJ[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === M.ORBS && (0, o.jsx)(nQ, {}),
            t === M.ORBS ? (0, o.jsx)(tt.v3.Provider, { value: n0, children: u }) : u,
        ],
    });
}
function n2(e) {
    let { url: t } = e,
        [n, l] = c.useState(null);
    return (c.useEffect(() => {
        !(async function () {
            try {
                let e = await fetch(t),
                    n = await e.json();
                l(n);
            } catch (e) {
                l(null);
            }
        })();
    }, [t]),
    null == n)
        ? null
        : (0, o.jsx)(ee.Ay, { layout: n });
}
let n5 = function (e) {
    let { handleTransition: t, tab: n, transitionState: l } = e,
        s = (0, A.uM)(),
        i = (0, P.bG)([n$.A], () => n$.A.getShopLayoutUrlOverride()),
        a = c.useRef(null),
        { handleScroll: r } = J(a, n),
        [d, g] = c.useState(eb.md),
        [m, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != a.current) {
                function e() {
                    if (null == a.current) return;
                    let e = a.current.getDistanceFromBottom();
                    d >= 36 ? h(e < 20) : e <= 200 && g((e) => e + eb.md);
                }
                let t = a.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [a, d, g, h]),
        (0, o.jsx)(z.Ch, {
            className: tM.OW,
            ref: a,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: tM.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(tM.rb, tM.GS),
                        children: [
                            null != i && "" !== i ? (0, o.jsx)(n2, { url: i }) : (0, o.jsx)(n1, { tab: n }),
                            n !== M.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: tM.R$,
                                    children: [
                                        (0, o.jsx)(el.D, {
                                            variant: "heading-md/semibold",
                                            children: es.intl.string(es.t.Yr70c4),
                                        }),
                                        (0, o.jsx)(W.$, {
                                            variant: "primary",
                                            text: es.intl.string(es.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    q.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: s?.sessionId,
                                                        page_type: n,
                                                        page_category: n === M.HOME ? void 0 : s?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, o.jsx)(nU, { peaking: m, transitioning: l === eb.Pf.OUT }),
                ],
            }),
        })
    );
};
var n4 = n(564027);
let n3 = function () {
        return (0, o.jsxs)("div", {
            className: n4.z,
            children: [
                (0, o.jsx)("img", {
                    className: n4.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: es.intl.string(es.t["p8+qtU"]),
                }),
                (0, o.jsx)(el.D, { variant: "heading-xl/semibold", children: es.intl.string(es.t["p8+qtU"]) }),
                (0, o.jsx)(Y.E, { variant: "text-md/medium", children: es.intl.string(es.t.UEiyvs) }),
            ],
        });
    },
    n9 = [eb.G2.HOME, eb.G2.ORBS];
function n6(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: l,
            transitionState: s,
            updateAnalyticsState: i,
            refreshCategories: a,
        } = e,
        r = (0, P.bG)([L.A, w.A], () =>
            null != L.A.error
                ? `shop load fetch categories error: ${L.A.error.message}`
                : null != w.A.claimError
                  ? `shop load claim error: ${w.A.claimError.message}`
                  : null != w.A.fetchError
                    ? `shop load fetch purchase error: ${w.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, P.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: n, includeUnpublished: l } = (0, eC.A)();
        c.useEffect(() => {
            null != e &&
                F.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, n, l]);
    })(r);
    let d = (0, H.H)({ location: "collectibles_content" }),
        u = (0, P.bG)([B.Ay], () => B.Ay.useReducedMotion),
        g = (0, y.W6)(),
        m = (0, y.zy)(),
        [h] = c.useState(() => {
            if ("POP" === g.action) {
                let e;
                return (e = e_), (e_ = null), e ?? void 0;
            }
        }),
        [E, x] = c.useState(h),
        [f, p] = c.useState(null == h),
        C = c.useMemo(() => {
            let e = new URLSearchParams(m.search).get(eb.P1);
            return null != e && "" !== e ? e : void 0;
        }, [m.search]),
        _ = c.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !eb.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        b = (0, D.U)("CollectiblesContent"),
        S = (0, G.a)("CollectiblesContent"),
        j = c.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: s,
                    isInternalShopDeeplink: a,
                    isOrbsExclusive: r,
                } = e;
                if ((i(t, n), S && null != n && a && !r))
                    return void g.push(Z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = s && !u,
                    c = r ? eb.G2.ORBS : eb.G2.CATALOG;
                x(n), p(!a), l(c, o);
            },
            [u, l, i, S, g],
        ),
        { searchError: A } = (0, U.S)();
    return null != A
        ? (0, o.jsx)(n3, {})
        : null != r
          ? (0, o.jsx)(td.h, { onRetry: a, errorMessage: r, errorOrigin: td.A.SHOP_PAGE })
          : t === eb.G2.HOME && b
            ? (0, o.jsx)(n5, { tab: M.HOME, transitionState: s, handleTransition: j })
            : t === eb.G2.ORBS && b
              ? (0, o.jsx)(n5, { tab: M.ORBS, transitionState: s, handleTransition: j })
              : n9.includes(t)
                ? (0, o.jsx)(nW, { handleTransition: j, tab: t, transitionState: s })
                : t === eb.G2.GAME_SERVERS && d
                  ? (0, o.jsx)("div", {})
                  : (0, o.jsx)(to, {
                        tab: t,
                        categories: _,
                        initialCategoryId: E ?? C,
                        showFilterInitially: f && null == C,
                        onUnmount: () => {
                            x(void 0), p(!0);
                        },
                    });
}
var n7 = n(956123),
    n8 = n(812095),
    le = n(151115),
    lt = n(456670);
let ln = { default: lt.Hk, nitro: lt.O5 };
function ll(e) {
    let {
            promotionTheme: t = "default",
            icon: n,
            headerText: l,
            helpCenterId: s,
            ctaText: i,
            onCtaClick: a,
            hideCta: r,
        } = e,
        d = c.useMemo(() => (null == s ? null : tZ.A.getArticleURL(s)), [s]),
        g = (0, le.s)(n);
    return (0, o.jsx)(t4.N, {
        theme: Z.NJ8.DARKER,
        children: (e) =>
            (0, o.jsxs)("div", {
                className: u()(lt.kL, e),
                children: [
                    (0, o.jsx)("div", { className: u()(lt.D7, ln[t]) }),
                    (0, o.jsxs)("div", {
                        className: lt.Qs,
                        children: [
                            (0, o.jsxs)("div", {
                                className: lt.hu,
                                children: [
                                    null != g && (0, o.jsx)(g, { size: "sm", colorClass: lt.Kk }),
                                    (0, o.jsxs)(Y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-overlay-light",
                                        children: [
                                            null != l ? (0, n8.U)(l) : null,
                                            null != d &&
                                                (0, o.jsxs)(o.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, o.jsx)(ns.Anchor, {
                                                            href: d,
                                                            target: "_blank",
                                                            className: lt.nf,
                                                            children: es.intl.string(es.t.WQdkbb),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            !r && null != i && (0, o.jsx)(W.$, { variant: "overlay-primary", text: i, onClick: a }),
                        ],
                    }),
                ],
            }),
    });
}
let ls = function (e) {
    let { tab: t, handleTransition: n } = e,
        l = (0, eQ.A)(Z.FYj),
        s = (0, R.v)((e) => e.offerEligible),
        i = l?.tenantMetadata?.collectibles?.reward?.storefront?.nagbar,
        a = c.useCallback(() => {
            n(eb.G2.OFFER_ELIGIBLE);
        }, [n]);
    if (t === eb.G2.ORBS || null == i) return null;
    let r = t === eb.G2.CATALOG && s;
    return (0, o.jsx)(ll, {
        promotionTheme: void 0,
        icon: i.icon,
        headerText: i.headerText,
        ctaText: i.cta?.text,
        hideCta: r,
        helpCenterId: i.helpCenterId,
        onCtaClick: a,
    });
};
var li = n(766075),
    la = n(870308),
    lr = n(650583);
function lo(e) {
    let { children: t, shouldAddEventListener: n, onClose: l } = e,
        s = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !s) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === lr.N$.Escape && l();
            }
        }, [n, s, l]),
        t
    );
}
let lc = function (e) {
    let { tab: t = eb.G2.HOME } = e;
    (0, b.P)(_.a);
    let n = (0, f.A)((0, g.A)()),
        l = (0, m.bG)([v.default], () => v.default.getCurrentUser());
    (0, j.pE)();
    let s = (0, eO.yB)("CollectiblesShop"),
        { onClose: i } = (function () {
            let { search: e } = (0, y.zy)(),
                t = (0, y.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                l = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === l) {
                        (0, t6.aX)(), (0, li.openUserSettings)();
                        return;
                    }
                    (0, t6.EL)() ? (0, t6.aX)() : (0, t6.pX)(Z.BVt.APP);
                }, [l]),
                source: l,
                ...t,
            };
        })(),
        { currentTab: a, hasFilters: r } = (0, R.v)(),
        d = c.useMemo(() => (t === eb.G2.HOME && null != a && r() ? a : t), [t, a, r]),
        M = (0, N.M)("CollectiblesShop");
    (0, S.A)(M ? Z.FYj : void 0);
    let { categories: P, refreshCategories: B } = (0, T.Ay)({ logPerf: !0 }, { sessionId: n, tab: d }),
        D = c.useMemo(() => [...P.values()], [P]),
        [H, F] = c.useState(),
        w = (0, m.bG)([L.A], () => L.A.getCategory(H)?.name),
        [G, U] = c.useState();
    (0, eA.XU)(n);
    let z = c.useCallback((e, t) => {
            U(e), F(t);
        }, []),
        { selectedTab: V, transitionState: Y, transitionToTab: W } = (0, k.o)(d);
    (0, C.HU)({ location: es.intl.string(es.t.pWG4ze) }), (0, O.uS)(n, V, w, Y, G), (0, O.N0)(V, l);
    let { dismissShopButtonDC: K } = (0, la.A)();
    c.useEffect(() => {
        K();
    }, [K]),
        c.useEffect(() => {
            (0, x.I)(Z.BVt.COLLECTIBLES_SHOP);
        }, []);
    let $ = c.useRef(null),
        q = c.useRef(null);
    (0, E.tj)($);
    let X = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        q.current?.focus();
    }, []),
        (0, eO.gB)();
    let { analyticsLocations: J } = (0, O.lC)(V);
    return (0, o.jsx)(p.f5, {
        value: J,
        children: (0, o.jsx)(A.R9, {
            newValue: { sessionId: n, pageCategory: w, pageSize: eb.l5 },
            children: (0, o.jsx)(I.iM, {
                tab: V,
                children: (0, o.jsx)(lo, {
                    onClose: i,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(eh.bx, { [eO.jP]: s }),
                        ref: q,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(n7.G, { handleTransition: W, selectedTab: V }),
                            (0, o.jsx)(ls, { tab: V, handleTransition: W }),
                            (0, o.jsx)("div", {
                                className: u()(eh.td, {
                                    [eh.RK]: Y === eb.Pf.VISIBLE,
                                    [eh.in]: Y === eb.Pf.IN,
                                    [eh.FD]: Y === eb.Pf.OUT,
                                }),
                                children: (0, o.jsx)(n6, {
                                    tab: V,
                                    refreshCategories: B,
                                    transitionToTab: W,
                                    transitionState: Y,
                                    categories: D,
                                    updateAnalyticsState: z,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
