n.r(t), n.d(t, { default: () => sj });
var s,
    l,
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
    b = n(475073),
    _ = n(611924),
    S = n(758445),
    j = n(561794),
    v = n(287809),
    A = n(440938),
    L = n(590180),
    I = n(161918),
    N = n(945810);
let O = (0, N.mj)({
    name: "2026-07-collectibles-promotion-endpoint-reference",
    kind: "user",
    defaultConfig: { useEndpoint: !1 },
    variations: { 0: { useEndpoint: !1 }, 1: { useEndpoint: !0 } },
});
var k = n(790297),
    T = n(17928),
    R = n(773669),
    y = n(248352);
let M = (0, N.mj)({
    name: "2026-01-valentines-day-drop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
var B = n(758836),
    P = n(202541),
    D = n(375708),
    H = n(841702),
    w = n(621653),
    F = n(983545),
    G = n(23161);
n(323874), n(14289), n(35956), n(321073);
var U = n(873263),
    z = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    V = n(775602),
    K = n(578797),
    W = n(140218),
    Y = n(38405),
    $ = n(4227),
    q = n(50920),
    Z = n(856686),
    X = n(689175),
    J = n(364522),
    Q = n(834730),
    ee = n(821609),
    et = n(783977),
    en = n(59520),
    es = n(174459),
    el = n(652215);
function ei(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = s;
    if (a > 0) {
        let s = (l + i) / a;
        s > 0 &&
            es.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function ea(e, t) {
    let { analyticsSource: n } = (0, k.lC)(t),
        s = (0, en.I)(ei, 5e3, [], { trailing: !0 }),
        l = (0, A.uM)(),
        i = l?.sessionId;
    return {
        handleScroll: c.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(el.HAw.COLLECTIBLES_SHOP_SCROLLED, null != i ? i : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [s, n, i, e]),
    };
}
var er = n(354328),
    eo = n(356118),
    ec = n(619835),
    ed = n(641150),
    eu = n(297264);
function eg() {
    let { itemTypeFilters: e, searchQuery: t } = (0, G.v)((e) => e),
        { totalCount: n, isFetchingResults: s } = (0, Z.S)(),
        l = (0, G.v)((e) => e.hasFilters()),
        i = c.useCallback(() => {
            if (!l) return "";
            if (s) return D.intl.string(D.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return D.intl.format(D.t.KJMJOz, { count: n, search: e });
            }
            return 1 === e.size && e.has(ed.q.AVATAR_DECORATION)
                ? D.intl.format(D.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(ed.q.NAMEPLATE)
                  ? D.intl.format(D.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(ed.q.PROFILE_EFFECT)
                    ? D.intl.format(D.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(ed.q.PROFILE_FRAME)
                      ? D.intl.format(D.t.eu4eRy, { count: n })
                      : 1 === e.size && e.has(ed.q.BUNDLE)
                        ? D.intl.format(D.t.fZ1rdk, { count: n })
                        : D.intl.format(D.t["/rPvmQ"], { count: n });
        }, [e, n, l, t, s]);
    return (0, o.jsx)(eu.D, { variant: "heading-lg/semibold", children: i() });
}
var em = n(172218),
    eh = n(932793),
    eE = n(511265),
    ex = n(206077),
    ef = n(100057),
    ep = n(828515),
    eC = n(484469),
    eb = n(346448),
    e_ = n(195261),
    eS = n(132866);
let ej = function () {
    return (0, o.jsx)("div", {
        className: eS.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: e_.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(eb.sW, eS.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(eC.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var ev = n(828614),
    eA = n(159439),
    eL = n(998694);
let eI = null;
function eN(e) {
    let { category: t } = e,
        n = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        s = (0, ex.X)(t.products),
        l = (0, eE.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, o.jsx)("div", {
              className: e_.vY,
              children: l.map((e, t) =>
                  (0, o.jsx)(
                      A.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, o.jsx)(ev.A, { skuId: e.skuId, skipLimitedTimeCheck: !0 }, e.skuId),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function eO(e) {
    let { category: t } = e,
        [n, s] = c.useState(!1),
        l = (0, em.K)(function (e) {
            s(e);
        }, 0.15),
        i = (0, U.W6)(),
        a = (0, q.a)("CollectiblesCatalogContent"),
        r = (0, A.uM)(),
        d = c.useCallback(() => {
            es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: B.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (eI = t.skuId),
                i.push(el.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, i]);
    return (0, o.jsxs)("div", {
        className: e_.EF,
        ref: l,
        children: [(0, o.jsx)(ep.A, { category: t, onSelect: a ? d : void 0 }), (0, o.jsx)(eN, { category: t })],
    });
}
function ek(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: i } = e,
        a = (0, A.uM)(),
        r = (0, eA.U)(),
        d = a?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eL.A)(),
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
        let t = Math.floor(e / B.l5) + 1;
        t !== s && l(t), (h.current = i);
    }, [i, m, l, s]);
    let E = c.useMemo(() => {
        let e = (s - 1) * B.l5;
        return m.slice(e, e + B.l5);
    }, [m, s]);
    return (c.useEffect(() => {
        (0, ef.z)({
            sessionId: d,
            checkpoint: ef.t.SHOP_MOUNTED,
            tab: B.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === E.length ||
            (0, ef.z)({
                sessionId: d,
                checkpoint: ef.t.SHOP_RENDERED,
                tab: B.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [d, g, u, r, E.length]),
    r)
        ? (0, o.jsx)(ej, {})
        : (0, o.jsxs)("div", {
              className: e_.LZ,
              children: [
                  E.map((e, t) =>
                      (0, o.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": D.intl.formatToPlainString(D.t.FNtLb3, { category: e.name }),
                              children: (0, o.jsx)(A.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, o.jsx)(eO, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: e_.Ej,
                      children: (0, o.jsx)(eh.m, {
                          currentPage: s,
                          totalCount: m.length,
                          pageSize: B.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var eT = n(177366),
    eR = n(401864),
    ey = n(124987),
    eM = n(691885),
    eB = n(146919),
    eP = n(858733);
let eD = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, G.v)(),
        s = (0, A.uM)(),
        l = (0, eB.yB)("CollectiblesSortSelect"),
        i = n(),
        a = c.useMemo(() => B.QB.filter((e) => e.sortType !== ey.$.RELEVANCE || i), [i]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === ey.$.RECENCY
                ? { label: D.intl.string(D.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === ey.$.PRICE
                  ? n === eR.A.ASC
                      ? { label: D.intl.string(D.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: D.intl.string(D.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === ey.$.RELEVANCE
                    ? { label: D.intl.string(D.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: D.intl.string(D.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
            (e) =>
                ({
                    recent: { sortType: ey.$.RECENCY, sortDirection: eR.A.DESC },
                    "price-asc": { sortType: ey.$.PRICE, sortDirection: eR.A.ASC },
                    "price-desc": { sortType: ey.$.PRICE, sortDirection: eR.A.DESC },
                    popularity: { sortType: ey.$.POPULARITY, sortDirection: eR.A.DESC },
                    relevance: { sortType: ey.$.RELEVANCE, sortDirection: eR.A.DESC },
                })[e],
            [],
        ),
        g = c.useCallback(
            (e) => {
                let n = r(d(e));
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(d(e));
            },
            [s, r, d, t],
        ),
        m = r(e);
    return (0, o.jsx)("div", {
        className: u()(eP.k, { [eB.jP]: l }),
        children: (0, o.jsx)(eM.l, {
            label: D.intl.string(D.t.uaX705),
            hideLabel: !0,
            options: a.map(r),
            onSelectionChange: g,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var eH =
        (((l = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (l.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (l.PINK = "COLLECTIBLES_COLOR_PINK"),
        (l.RED = "COLLECTIBLES_COLOR_RED"),
        (l.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (l.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (l.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (l.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (l.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (l.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        l),
    ew =
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
    eF = n(150934),
    eG = n(508770),
    eU = n(602853),
    ez = n(661531),
    eV = n(866665),
    eK = n(939249),
    eW = n(947641),
    eY = n(604338),
    e$ = n(785866),
    eq = n(373846),
    eZ = n(308323),
    eX = n(608599),
    eJ = n(685761),
    eQ = n(157225),
    e0 = n(413249),
    e1 = n(510241),
    e2 = n(601198),
    e5 = n(736653),
    e4 = n(223311),
    e3 = n(7250);
let e6 = (0, N.mj)({
    name: "2026-07-collectibles-collabs-filter",
    kind: "user",
    defaultConfig: { collabsFilterEnabled: !1 },
    variations: { 0: { collabsFilterEnabled: !1 }, 1: { collabsFilterEnabled: !0 } },
});
var e7 = n(13875),
    e9 = n(818348),
    e8 = n(967339);
function te() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            reset: l,
            hasFilters: i,
        } = (0, G.v)(),
        a = e6.useConfig({ location: "FilterBar" }).collabsFilterEnabled,
        r = i(),
        d = (0, e7.sk)("FilterBar"),
        g = (0, A.uM)(),
        m = c.useRef(null),
        h = (0, e4.A)(el.FYj),
        [E, x] = c.useState(!1),
        f = c.useMemo(() => B._6.filter((e) => d || e !== ed.q.PROFILE_FRAME), [d]),
        p = c.useCallback(
            (e) => {
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    page_index: g?.pageIndex,
                    page_size: g?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [g],
        ),
        C = c.useCallback(() => {
            p(`filter 3p only ${!1 === s ? "on" : "off"}`), n();
        }, [n, s, p]);
    return (0, o.jsxs)("div", {
        className: e8.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(e8.KZ, e8.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: m,
                        tabIndex: -1,
                        children: (0, o.jsx)(Q.E, {
                            variant: "text-md/semibold",
                            className: e8.hr,
                            children: D.intl.string(D.t.Qk6r1a),
                        }),
                    }),
                    f.map((e) => (0, o.jsx)(tt, { filter: e, trackFilterAction: p }, e)),
                    (0, o.jsx)(eF.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: D.intl.string(D.t.AHHHgG),
                    }),
                    a && (0, o.jsx)(eF.S, { checked: s, onChange: C, label: D.intl.string(D.t["+W8gb+"]) }),
                    null != h &&
                        (0, o.jsx)(eF.S, {
                            checked: E,
                            onChange: () => {
                                p(`filter offer eligible ${!1 === E ? "on" : "off"}`), x((e) => !e);
                            },
                            label: D.intl.string(D.t.hY8Ft1),
                        }),
                ],
            }),
            (0, o.jsx)(tn, { trackFilterAction: p }),
            (0, o.jsx)(ti, { trackFilterAction: p }),
            r &&
                (0, o.jsx)(ee.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), l(), requestAnimationFrame(() => m.current?.focus());
                    },
                    text: D.intl.string(D.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function tt(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [ed.q.AVATAR_DECORATION]: D.intl.string(D.t.dRZYNE),
            [ed.q.PROFILE_EFFECT]: D.intl.string(D.t["1cNjtx"]),
            [ed.q.NAMEPLATE]: D.intl.string(D.t.V68Fqz),
            [ed.q.PROFILE_FRAME]: D.intl.string(D.t.ecTJkR),
            [ed.q.BUNDLE]: D.intl.string(D.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, G.v)(),
        a = (0, o.jsx)(eF.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t);
            },
            label: s[t] ?? "",
        });
    return t === ed.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: e8.Ym, children: [a, (0, o.jsx)(eG.E, { type: "new" })] })
        : a;
}
function tn(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: D.intl.string(D.t.kqUD4P), enum: eH.PURPLE },
                { color: "#3498DB", label: D.intl.string(D.t.qQTRae), enum: eH.BLUE },
                { color: "#2ECC71", label: D.intl.string(D.t["f/Ylk6"]), enum: eH.GREEN },
                { color: "#A0522D", label: D.intl.string(D.t["Sd/BMa"]), enum: eH.BROWN },
                { color: "#F1C40F", label: D.intl.string(D.t["0fevYz"]), enum: eH.YELLOW },
            ],
            [],
        ),
        s = c.useMemo(
            () => [
                { color: "#E67E22", label: D.intl.string(D.t.ZE7weD), enum: eH.ORANGE },
                { color: "#E74C3C", label: D.intl.string(D.t.hKJGOM), enum: eH.RED },
                { color: "#EC407A", label: D.intl.string(D.t.HvLEGM), enum: eH.PINK },
                { color: "#FFFFFF", label: D.intl.string(D.t["CB+lNO"]), enum: eH.WHITE },
                { color: "#262626", label: D.intl.string(D.t["dMey+v"]), enum: eH.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: e8.KZ,
        children: [
            (0, o.jsx)(Q.E, { variant: "text-md/semibold", className: e8.hr, children: D.intl.string(D.t.K1xGoG) }),
            (0, o.jsx)(ts, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(ts, { colors: s, trackFilterAction: t }),
        ],
    });
}
function ts(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, G.v)();
    return (0, o.jsx)("div", {
        className: e8.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: a } = e;
            return (0, o.jsx)(
                tl,
                { color: t, label: i, enum: a, isToggled: s.has(a), onToggleColor: l, trackFilterAction: n },
                a,
            );
        }),
    });
}
function tl(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: i, trackFilterAction: a } = e,
        r = (0, eU.r)(ez.A.unsafe_rawColors.WHITE).hex(),
        c = (0, eU.r)(ez.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        eV.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                eK.D,
                {
                    className: u()(e8.n1, { [e8.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        a(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), i(s);
                    },
                    children:
                        l &&
                        (0, o.jsx)("div", {
                            className: e8.oE,
                            children: (0, o.jsx)(eW.r, {
                                size: "xs",
                                color: (0, e3.j)({ backgroundColor: t, colors: [r, c] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function ti(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, G.v)(),
        l = (0, e5.Ay)() === e9.NJ.DARK,
        i = c.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        a = c.useCallback((e) => (n.has(e) || l ? ez.A.colors.WHITE : ez.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        r = c.useMemo(
            () => [
                {
                    name: D.intl.string(D.t.aVBOKh),
                    icon: (0, o.jsx)(eY.E, { size: "xs", color: a(ew.ANIME) }),
                    enum: ew.ANIME,
                },
                {
                    name: D.intl.string(D.t["3WoZBc"]),
                    icon: (0, o.jsx)(e$._, { size: "xs", color: a(ew.GAMING) }),
                    enum: ew.GAMING,
                },
                {
                    name: D.intl.string(D.t.yuEmLj),
                    icon: (0, o.jsx)(eq.C, { size: "xs", color: a(ew.CUTE_COZY) }),
                    enum: ew.CUTE_COZY,
                },
                {
                    name: D.intl.string(D.t.mMvCHo),
                    icon: (0, o.jsx)(eZ.L, { size: "xs", color: a(ew.SCI_FI) }),
                    enum: ew.SCI_FI,
                },
                {
                    name: D.intl.string(D.t.TlhOQC),
                    icon: (0, o.jsx)(eX.L, { size: "xs", color: a(ew.FOOD_DRINKS) }),
                    enum: ew.FOOD_DRINKS,
                },
                {
                    name: D.intl.string(D.t["4IaUIM"]),
                    icon: (0, o.jsx)(eJ.f, { size: "xs", color: a(ew.FANTASY) }),
                    enum: ew.FANTASY,
                },
                {
                    name: D.intl.string(D.t["w0nSG/"]),
                    icon: (0, o.jsx)(eQ.N, { size: "xs", color: a(ew.ANIMALS_PETS) }),
                    enum: ew.ANIMALS_PETS,
                },
                {
                    name: D.intl.string(D.t.cJng7v),
                    icon: (0, o.jsx)(e0.p, { size: "xs", color: a(ew.NATURE) }),
                    enum: ew.NATURE,
                },
                {
                    name: D.intl.string(D.t["5mUvyM"]),
                    icon: (0, o.jsx)(e1.T, { size: "xs", color: a(ew.MOVIES_TV_SHOWS) }),
                    enum: ew.MOVIES_TV_SHOWS,
                },
                {
                    name: D.intl.string(D.t.MB9H5Z),
                    icon: (0, o.jsx)(e2.e, { size: "xs", color: a(ew.DARK_MOODY) }),
                    enum: ew.DARK_MOODY,
                },
            ],
            [a],
        );
    return (0, o.jsxs)("div", {
        className: e8.KZ,
        children: [
            (0, o.jsx)(Q.E, { variant: "text-md/semibold", className: e8.hr, children: D.intl.string(D.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: e8.Ot,
                children: r.map((e) => {
                    let { name: l, icon: a, enum: r } = e;
                    return (0, o.jsxs)(
                        eK.D,
                        {
                            className: u()(e8.w4, { [e8.C7]: n.has(r) }),
                            "aria-label": l,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(r);
                            },
                            children: [a, (0, o.jsx)(Q.E, { color: i(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var ta = n(561769),
    tr = n(882443);
function to() {
    return (0, o.jsxs)("div", {
        className: tr.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: D.intl.string(D.t.oezC3x),
                className: tr._,
            }),
            (0, o.jsx)(eu.D, { variant: "heading-xl/semibold", children: D.intl.string(D.t.oezC3x) }),
            (0, o.jsx)(Q.E, { variant: "text-md/medium", children: D.intl.string(D.t["Tc/Ndl"]) }),
        ],
    });
}
var tc = n(996824);
let td = { flattenProductVariants: !0 };
function tu(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, A.uM)(),
        i = l?.sessionId ?? "",
        { noCache: a, includeUnpublished: r } = (0, eL.A)(),
        d = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: g, currentPage: h, totalCount: E, isFetchingResults: x } = (0, Z.S)(),
        f = (0, m.yK)([L.A], () => L.A.getProductsBySkus(g)),
        p = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        C = g?.join("");
    c.useEffect(() => {
        p();
    }, [C, p]);
    let b = (0, eE.p)(),
        _ = c.useMemo(() => b(f), [b, f]);
    c.useEffect(() => {
        t ||
            (0, ef.z)({
                sessionId: i,
                checkpoint: ef.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
    }, [i, r, a, t, s]);
    let S = c.useRef(null),
        { setQueryPageSize: j, setQueryPageOffset: I, queryPageSize: N } = (0, G.v)(),
        [O, k] = c.useState(!1),
        T = t || x || null == d;
    c.useEffect(() => {
        T ? k(!1) : _.length > 0 && k(!0);
    }, [T, _.length]);
    let R = N > 0 && !T && 0 === _.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == S.current || j(Math.floor(5 * getComputedStyle(S.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != S.current) return e.observe(S.current), () => e.disconnect();
    }, [j]);
    let y = c.useCallback(
        (e) => {
            es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: N,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                I((e - 1) * N);
        },
        [l, N, I],
    );
    return (0, o.jsxs)(ta.v3.Provider, {
        value: td,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [tc.oE]: R }),
                children: [
                    R && (0, o.jsx)(to, {}),
                    (0, o.jsxs)("div", {
                        className: u()(tc.ZE, { [tc.Kp]: O }),
                        ref: S,
                        children: [
                            T && [...Array(N)].map((e, t) => (0, o.jsx)(eC.A, {}, t)),
                            !T &&
                                _.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              A.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      ev.A,
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
                    className: tc.Ej,
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(eh.m, {
                            currentPage: h,
                            totalCount: E,
                            pageSize: N,
                            onPageChange: y,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var tg = n(328539);
function tm(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: i } = e,
        a = (0, er.A)("shop_include_unpublished");
    (0, G.S)(a);
    let r = c.useRef(null),
        { handleScroll: d } = ea(r, t),
        u = (0, K.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, eT.k0)(r.current),
        [h, E] = c.useState(l),
        [x, f] = c.useState(!1);
    return (
        c.useEffect(() => {
            null != s && m(s);
        }, [s, m]),
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
            className: tg.VM,
            children: (0, o.jsxs)("main", {
                className: tg.MY,
                children: [
                    (0, o.jsx)(X.Gt, {
                        className: tg.OW,
                        ref: r,
                        onScroll: d,
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: tg.en,
                                  children: (0, o.jsx)("div", {
                                      className: tg.pf,
                                      children: (0, o.jsx)(eo.Z_, { tenantId: el.FYj, templateId: ec.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(th, {
                                  isSmallScreen: x,
                                  filterBarOpen: h,
                                  setFilterBarOpen: E,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: g,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !x && (0, o.jsx)("div", { className: tg.yF }),
                    h && !x && (0, o.jsx)(J.Ip, { className: tg.kT, children: (0, o.jsx)(te, {}) }),
                ],
            }),
        })
    );
}
function th(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: i,
            categories: a,
            setCategoryRef: r,
            initialCategoryId: d,
        } = e,
        g = c.useRef(null),
        m = (0, G.v)((e) => e.hasDefaultFilters()),
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
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            }
        }, [t, n, s, h]),
        (0, o.jsx)("div", {
            className: tg.en,
            children: (0, o.jsxs)("div", {
                className: tg.pf,
                children: [
                    (0, o.jsxs)("div", {
                        className: tg.ne,
                        children: [
                            (0, o.jsx)("div", { className: tg.lQ, children: (0, o.jsx)(eg, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(tg.wR, { [tg.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: tg.Ul,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-md/semibold",
                                                children: D.intl.string(D.t.uaX705),
                                            }),
                                            (0, o.jsx)(eD, {}),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        ref: p,
                                        children: (0, o.jsx)(ee.$, {
                                            onClick: function () {
                                                let e = !n;
                                                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    s(e);
                                            },
                                            variant: "secondary",
                                            text: D.intl.string(n ? D.t.fYtm6f : D.t["TeTYE+"]),
                                            icon: et.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, o.jsx)("div", {
                                    className: tg.Dh,
                                    ref: g,
                                    children: (0, o.jsx)(X.Ch, { className: tg.Qo, children: (0, o.jsx)(te, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, o.jsx)(A.R9, {
                              newValue: { pageIndex: x },
                              children: (0, o.jsx)(ek, {
                                  categories: a,
                                  setCategoryRef: r,
                                  currentPage: x,
                                  handlePageChange: f,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(tu, { scrollerRef: i, tab: l }, l),
                ],
            }),
        })
    );
}
var tE = n(599062),
    tx = n(651162),
    tf = n(554146),
    tp = n(367727);
let tC = c.createContext(null);
function tb(e) {
    let { blockType: t, children: n } = e,
        s = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(tC.Provider, { value: s, children: n });
}
var t_ = n(755172),
    tS = n(325595),
    tj = n(893998),
    tv = n(110629),
    tA = n(617498),
    tL = n(607399),
    tI = n(946015),
    tN = n(717421),
    tO = n(140735),
    tk = n(496431),
    tT = n(324145);
function tR(e) {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: i, hours: a, minutes: r, seconds: c } = (0, tk.A)(t),
        d = (function (e, t, n, s, l) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [i(e), i(t), i(n)];
            return l && a.push(i(s)), a.join(":");
        })(i, a, r, c, l);
    return (0, o.jsxs)("div", {
        className: u()(tT.kL, s),
        role: "timer",
        children: [
            d
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, o.jsx)(
                              Q.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: tT.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, o.jsx)(
                              Q.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: tT.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, o.jsx)(tO.A, { children: D.intl.format(D.t.j6IyVe, { days: i, hours: a, minutes: r }) }),
        ],
    });
}
var ty = n(63776);
let tM = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, tN.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(tA.animated.div, {
        className: u()([ty.lP, tL.Fr && ty.yJ]),
        role: "status",
        style: {
            ...s,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, o.jsxs)(tI.s, {
                direction: tI.s.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(Q.E, {
                        variant: "text-md/medium",
                        className: ty.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(Q.E, {
                            variant: "text-sm/medium",
                            className: ty.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, o.jsx)(tR, { endDate: t.endTime }),
        ],
    });
});
var tB = n(424918),
    tP = n(793574),
    tD = n(993408),
    tH = n(196231),
    tw = n(459550);
function tF(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(tw.n9, tw.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === tB.u.CATEGORY
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
                              tH.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, tD.HF)(e.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
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
function tG(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [s, l] = n;
    return (0, o.jsx)("div", {
        className: u()(tw.n9, tw.YB),
        children: (0, o.jsxs)(A.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != s ? s.name : l?.name,
                pageSection: "featured_block",
                tilePosition: +(null == s),
            },
            children: [
                null != s &&
                    (0, o.jsx)(tH.S, {
                        category: s,
                        enablePreview: !0,
                        badgeText: (0, tD.HF)(s.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, o.jsx)(tH.S, {
                        category: l,
                        badgeText: (0, tD.HF)(l.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let tU = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: i } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, o.jsxs)("div", {
              className: u()(tw.n9, tw.YB),
              children: [
                  (0, o.jsx)("div", {
                      className: u()(tw.Jn, tw.oT),
                      children: (0, o.jsx)("div", { className: tw.uy }),
                  }),
                  (0, o.jsx)("div", {
                      className: u()(tw.Jn, tw.oT),
                      children: (0, o.jsx)("div", { className: tw.uy }),
                  }),
              ],
          })
        : null != l
          ? (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(tF, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(tG, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var tz = n(531685),
    tV = n(428262),
    tK = n(621466),
    tW =
        (((a = {}).MOUNTED = "mounted"),
        (a.SORT_OUT = "sort-out"),
        (a.SORT_IN = "sort-in"),
        (a.SHUFFLE_OUT = "shuffle-out"),
        (a.SHUFFLE_IN = "shuffle-in"),
        (a.FINISHED = "finished"),
        a);
n(667532);
var tY = n(435558),
    t$ = n.n(tY),
    tq =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    tZ = n(153488),
    tX = n(313276),
    tJ = n(623373),
    tQ = n(885574),
    t0 = n(975807),
    t1 = n(975571),
    t2 = n(938682);
let t5 = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? D.intl.string(D.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: t2.L,
            children: [
                (0, o.jsx)(eu.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, o.jsx)(eV.m, {
                        text: D.intl.string(D.t["3taPdj"]),
                        position: "top",
                        "aria-label": D.intl.string(D.t["3taPdj"]),
                        children: (0, o.jsx)(eK.D, {
                            onClick: () => (0, t0.A)(t1.A.getArticleURL(el.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: t2.s,
                            children: (0, o.jsx)(tQ.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    t4 = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: s,
                numVisibleItems: l,
                prioritizeUserDiscounts: i,
                tab: a,
                buttonContainerClassName: r,
                orbsSupportedOnly: d,
            } = e,
            g = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
            m = tV.Ay.canUseShopDiscounts(g),
            h = (0, ta.Mk)(a),
            E = (0, eB.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                sortedItems: C,
                sortOptions: b,
                shuffleProducts: _,
                showRecommendationOption: S,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, prioritizeUserDiscounts: s, orbsSupportedOnly: l } = e,
                    i = (0, T.bG)([tZ.A], () => tZ.A.hasConsented(el.YAq.PERSONALIZATION)),
                    a = c.useMemo(() => t?.[tq.RECOMMENDED] ?? [], [t]),
                    r = c.useMemo(() => t?.[tq.POPULAR] ?? [], [t]),
                    o = a.length > 0 && i,
                    [d, u] = c.useState(o ? tq.RECOMMENDED : tq.POPULAR),
                    g = (0, T.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    m = c.useMemo(() => (0, tD.CE)(g), [g]),
                    h = (0, T.bG)([y.A], () => y.A.getUserDiscounts()),
                    E = (0, tX.A)(),
                    x = (0, eE.p)(),
                    [f, p] = c.useState([]),
                    C = c.useCallback(() => {
                        u(tq.RANDOM), p(t$().shuffle(m));
                    }, [m]);
                c.useEffect(() => {
                    p(t$().shuffle(m));
                }, [m]);
                let b = c.useMemo(() => {
                    let e = [];
                    switch (d) {
                        case tq.RECENT:
                            e = m;
                            break;
                        case tq.PRICE_LOW_TO_HIGH:
                            e = (0, tD.bf)([...m], n, l);
                            break;
                        case tq.RECOMMENDED: {
                            let t = E(a);
                            e = s ? (0, tD.Bs)(t, h) : t;
                            break;
                        }
                        case tq.POPULAR: {
                            let t = E(r);
                            e = s ? (0, tD.Bs)(t, h) : t;
                            break;
                        }
                        case tq.RANDOM:
                            e = f;
                    }
                    return l ? (0, tJ.ex)(x(e)) : x(e);
                }, [d, l, x, n, m, E, a, s, h, r, f]);
                return {
                    sortType: d,
                    setSortType: u,
                    sortedItems: (0, ex.X)(b),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: tq.POPULAR, label: D.intl.string(D.t.Y68e5p) },
                            { value: tq.RECENT, label: D.intl.string(D.t["51Bhiz"]) },
                            { value: tq.PRICE_LOW_TO_HIGH, label: D.intl.string(D.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: tq.RECOMMENDED, label: D.intl.string(D.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: C,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, prioritizeUserDiscounts: i, orbsSupportedOnly: d }),
            j = (0, T.bG)([V.Ay], () => V.Ay.useReducedMotion),
            I = (0, T.bG)([tz.A], () => tz.A.isFocused()),
            N = !j && I,
            { animationPhase: O, startAnimation: k } = (() => {
                let [e, t] = c.useState("mounted"),
                    [n, s] = c.useState(!1),
                    l = c.useRef(null);
                return (
                    c.useEffect(() => {
                        if (n && "finished" === e) {
                            if (null !== l.current) {
                                let e = l.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, tK.vq)(e, HTMLButtonElement) ||
                                    (0, tK.vq)(e, HTMLAnchorElement) ||
                                    (0, tK.vq)(e, HTMLInputElement) ||
                                    (0, tK.vq)(e, HTMLSelectElement) ||
                                    (0, tK.vq)(e, HTMLTextAreaElement)
                                )
                                    e.focus();
                                else {
                                    let t = e.querySelector(
                                        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                    );
                                    t?.focus();
                                }
                            }
                            s(!1);
                        }
                    }, [e, n]),
                    {
                        animationPhase: e,
                        startAnimation: c.useCallback((e) => {
                            let { isShuffling: n, onOutroComplete: i, returnRef: a } = e;
                            a?.current != null && ((l.current = a.current), s(!0)),
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
            R = (0, A.uM)(),
            M = R?.sessionId ?? "",
            { analyticsLocations: B } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            P = c.useRef(null),
            H = c.useRef(null),
            [w, F] = c.useState(!1),
            G = c.useCallback(
                (e) => {
                    F(!1),
                        k({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: H }),
                        es.default.track(el.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: M,
                            sort_type: e,
                        });
                },
                [k, f, M],
            );
        return null == g
            ? null
            : (0, o.jsx)(p.f5, {
                  value: B,
                  children: (0, o.jsxs)("div", {
                      className: u()(tw.lD, tw.YB),
                      children: [
                          (0, o.jsxs)("div", {
                              className: tw.$6,
                              children: [
                                  (0, o.jsx)(t5, { label: n, personalizedResults: S }),
                                  (0, o.jsxs)("div", {
                                      className: u()(tw.IE, { [eB.jP]: E }),
                                      children: [
                                          (0, o.jsxs)("div", {
                                              className: tw.gd,
                                              children: [
                                                  (0, o.jsx)(Q.E, {
                                                      variant: "text-md/medium",
                                                      children: D.intl.string(D.t.uaX705),
                                                  }),
                                                  (0, o.jsx)("div", {
                                                      className: u()(r, tw.pI),
                                                      ref: H,
                                                      children: (0, o.jsx)(eM.l, {
                                                          label: D.intl.string(D.t.uaX705),
                                                          hideLabel: !0,
                                                          options: b,
                                                          onSelectionChange: G,
                                                          formatOption: (e) => {
                                                              let { label: t, value: n } = e;
                                                              return { id: n, label: t, value: n };
                                                          },
                                                          value: x,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, o.jsx)("div", {
                                              className: r,
                                              children: (0, o.jsx)(ee.$, {
                                                  variant: "secondary",
                                                  text: D.intl.string(D.t.X3tnc4),
                                                  buttonRef: P,
                                                  onClick: function () {
                                                      F(!0),
                                                          k({ isShuffling: !0, onOutroComplete: _, returnRef: P }),
                                                          es.default.track(
                                                              el.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: M },
                                                          );
                                                  },
                                                  disabled: O !== tW.MOUNTED && O !== tW.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(tO.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: w && O === tW.FINISHED ? D.intl.string(D.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: tw.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(eC.A, {}, t + 1)),
                                    })
                                  : C.slice(0, l).map((e, t) => {
                                        let n,
                                            s = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (N)
                                            if (O === tW.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: tw.Z2,
                                                        children: (0, o.jsx)(eC.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                O === tW.SORT_OUT
                                                    ? (n = tw.MW)
                                                    : O === tW.SHUFFLE_IN
                                                      ? (n = tw.aS)
                                                      : O === tW.SORT_IN && (n = tw.F7);
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
                                                    children: (0, o.jsx)(ev.A, {
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
var t3 = n(449543),
    t6 = n(843793);
let t7 = function (e) {
    let { block: t, handleTransition: n, tab: s } = e,
        l = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, ta.Mk)(s),
        a = (0, tX.A)(),
        r = c.useMemo(() => a(t.rankedSkuIds), [t.rankedSkuIds, a]),
        d = (0, ex.X)(r),
        { analyticsLocations: g } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_SHELF),
        m = c.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == l || 0 === d.length
        ? null
        : (0, o.jsx)(p.f5, {
              value: g,
              children: (0, o.jsxs)("div", {
                  className: u()(t6.kL, tw.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, o.jsx)("img", {
                              className: t6.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, o.jsxs)("div", {
                          className: t6.Qs,
                          children: [
                              (0, o.jsxs)("div", {
                                  className: t6.wx,
                                  children: [
                                      (0, o.jsxs)("div", {
                                          className: t6.Jb,
                                          children: [
                                              (0, o.jsx)(tv.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, o.jsx)(eu.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, o.jsx)(ee.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: m,
                                          }),
                                  ],
                              }),
                              (0, o.jsx)(t3.A, {
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
                                                    children: (0, o.jsx)(ev.A, {
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
var t9 = n(269115),
    t8 = n(43990),
    ne = n(408278),
    nt = n(789645),
    nn = n(976860),
    ns = n(49999),
    nl = n(576709),
    ni = n(48093);
let na = "GAME_SERVER_HOSTING_BANNER";
function nr(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        s = (0, A.uM)(),
        l = c.useRef(null),
        i = c.useRef(!1),
        a = c.useRef(null),
        [r, d] = c.useState(!1),
        g = c.useCallback(
            (e) => {
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_type: n,
                    page_category: s?.pageCategory,
                    page_section: s?.pageSection,
                    tile_type: na,
                    cta_name: e,
                });
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        ),
        m = c.useCallback(() => {
            g("go_to_game_server_hosting"), (0, nn.pX)(el.BVt.COLLECTIBLES_SHOP_WITH_TAB(B.G2.GAME_SERVERS));
        }, [g]),
        h = c.useCallback(() => {
            g("dismiss"),
                d(!0),
                !0 === t.isDismissible &&
                    (0, tp.d6)(tf.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, { dismissAction: ns.i.USER_DISMISS });
        }, [g, t.isDismissible]),
        E = c.useCallback(
            (e) => {
                !i.current &&
                    (e && null === a.current
                        ? (a.current = setTimeout(() => {
                              (i.current = !0),
                                  (a.current = null),
                                  es.default.track(el.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: s?.sessionId,
                                      page_type: n,
                                      page_category: s?.pageCategory,
                                      page_section: s?.pageSection,
                                      type: na,
                                  });
                          }, 1e3))
                        : e || null === a.current || (clearTimeout(a.current), (a.current = null)));
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        );
    return (c.useEffect(
        () => () => {
            null !== a.current && (clearTimeout(a.current), (a.current = null));
        },
        [],
    ),
    r)
        ? null
        : (0, o.jsx)(t8.N, {
              theme: e9.NJ.DARKER,
              children: (e) =>
                  (0, o.jsx)(t9.L, {
                      innerRef: l,
                      onChange: E,
                      threshold: 0,
                      children: (0, o.jsx)("div", {
                          ref: l,
                          className: u()(ni.YB, e),
                          children: (0, o.jsxs)("div", {
                              className: ni.kL,
                              children: [
                                  (0, o.jsx)("img", {
                                      className: ni.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, o.jsx)("div", { className: ni.uX }),
                                  !0 === t.isDismissible &&
                                      (0, o.jsx)("div", {
                                          className: ni.b,
                                          children: (0, o.jsx)(ne.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: nt.P,
                                              onClick: h,
                                              "aria-label": D.intl.string(D.t.WAI6xu),
                                          }),
                                      }),
                                  (0, o.jsx)("div", {
                                      className: ni.jE,
                                      children: (0, o.jsxs)("div", {
                                          className: ni.rF,
                                          children: [
                                              (0, o.jsxs)("div", {
                                                  className: ni.Z,
                                                  children: [
                                                      (0, o.jsx)(eu.D, {
                                                          className: ni.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: D.intl.string(nl.default["34GMP9"]),
                                                      }),
                                                      (0, o.jsx)(Q.E, {
                                                          className: ni.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: D.intl.string(nl.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, o.jsx)(ee.$, {
                                                  variant: "overlay-primary",
                                                  size: "sm",
                                                  text: D.intl.string(D.t.jVcuVY),
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
var no = n(337183),
    nc = n(349288),
    nd = n(212407),
    nu = n(815280),
    ng = n(10675);
let nm = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, em.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: i } = (0, nd.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: s,
        className: ng.BX,
        children: [
            (0, o.jsx)("div", {
                className: ng.vK,
                children: null != l && (0, o.jsx)(nu.A, { bannerStatic: l, bannerAnimated: i }),
            }),
            (0, o.jsx)("div", {
                className: ng.HQ,
                children: (0, o.jsxs)("div", {
                    className: ng.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(tR, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(eu.D, {
                            variant: "heading-xxl/bold",
                            className: ng.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        r || c
                            ? (0, o.jsxs)(Q.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      r && t.body,
                                      r && c && " ",
                                      c &&
                                          (0, o.jsx)(nc.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: ng.CU,
                                              style: { ...a },
                                              children: D.intl.string(D.t.O7ADgv),
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
var nh = n(189213),
    nE = n(290136),
    nx = n(478016),
    nf = n(825484),
    np = n(812993),
    nC = n(713517),
    nb = n(914410),
    n_ = n(34332),
    nS = n(597783),
    nj = n(61750);
function nv(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, T.bG)([$.A], () => $.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var nA = n(162945),
    nL = n(858708);
let nI = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, nS.Z)(n),
            l = c.useRef(null),
            { isHoveringOrFocusing: i } = (0, nC.A)(l),
            { readyToClaim: a, collectibleProductSkuIds: r, collectedSkuIds: d } = nv(t, n),
            g = (0, T.bG)([$.A], () => $.A.isClaiming === n);
        return (0, o.jsx)(t9.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, o.jsx)("div", {
                ref: l,
                className: u()(nA.ty, nL.Q3, { [nA.yo]: i }),
                "aria-label": D.intl.formatToPlainString(D.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: nA.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nL.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: nA.N1,
                            children: (0, o.jsx)(np.Lp, {
                                text: D.intl.string(D.t.rykAJ9),
                                disableColor: !0,
                                className: nL.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: nA.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: nL.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: nL.cs,
                                            children: [
                                                (0, o.jsx)(eu.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: nA.tZ,
                                                    children: D.intl.string(D.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(eV.m, {
                                                    text: a
                                                        ? D.intl.string(D.t.cKH3tk)
                                                        : D.intl.formatToPlainString(D.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: nL.ZB,
                                                        children: (0, o.jsx)(nE.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: nA.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: nL.L$,
                                                children: [
                                                    (0, o.jsx)(nb.Ay, {
                                                        variant: nb.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(nL.__, { [nL.gF]: a }),
                                                        children: [
                                                            a
                                                                ? (0, o.jsx)(nx.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, o.jsx)(Q.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: D.intl.formatToPlainString(D.t["5TwASM"], {
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
                                    className: nA.Vs,
                                    children: (0, o.jsx)(nf.e, {
                                        wrap: !1,
                                        className: nA.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(ee.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    a &&
                                                        (0, n_.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = L.A.getProduct(n);
                                                                null != e &&
                                                                    (0, nj.A)({
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
                                                                        (0, o.jsx)(nh.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: D.intl.string(D.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: D.intl.string(D.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, o.jsx)("div", {
                                                                                children: D.intl.string(D.t["0YpIF/"]),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: D.intl.string(D.t.VnVTNc),
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
    nN = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: i, tab: a } = e,
            r = (0, ta.Mk)(a),
            d = c.useMemo(() => L.A.getCategoryForProduct(i.rewardSkuId), [i.rewardSkuId]),
            u = (0, T.bG)([$.A], () => $.A.getPurchase(i.rewardSkuId)),
            { products: g } =
                ((t = (0, tX.A)()),
                (n = c.useMemo(
                    () => (l ? [] : t(i.rankedSkuIds).filter((e) => e.skuId !== i.rewardSkuId || null != u)),
                    [l, t, i.rankedSkuIds, u, i.rewardSkuId],
                )),
                (s = (0, eE.p)()(n)),
                { products: (0, ex.X)(s) }),
            m = c.useMemo(
                () =>
                    !l &&
                    0 !== i.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    i.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, i.rankedSkuIds, g.length],
            ),
            h = l || m,
            { readyToClaim: E } = nv(d, i.rewardSkuId),
            x = null == u && null != i.rewardSkuId && null != d;
        return (0, o.jsx)(t3.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(eC.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          x &&
                              E &&
                              (0, o.jsx)(
                                  A.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(nI, { category: d, rewardSkuId: i.rewardSkuId }),
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
                                            children: (0, o.jsx)(ev.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, tD.$b)(90);
let nO = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tx.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nk = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            i = (0, em.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            a = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: g,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, nd.Kk)(n),
            E = c?.responsive ?? !1,
            x = c?.backgroundStyle;
        return null != a && (t || n !== nO)
            ? (0, o.jsx)(p.f5, {
                  value: r,
                  children: (0, o.jsxs)("div", {
                      ref: i,
                      className: tw.os,
                      children: [
                          (0, o.jsx)("div", {
                              className: u()(tw.vK, { [tw.no]: E }),
                              style: null != x ? { background: x } : void 0,
                              children:
                                  null != m &&
                                  (0, o.jsx)(nu.A, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
                          }),
                          (0, o.jsxs)("div", {
                              className: tw.xX,
                              children: [
                                  (0, o.jsx)("div", {
                                      className: u()(tw.bC, { [tw.no]: E }),
                                      children: t
                                          ? (0, o.jsx)("div", { className: tw.Hw })
                                          : (0, o.jsx)("div", {
                                                className: tw.Hw,
                                                children: (0, o.jsxs)("div", {
                                                    className: tw.Wq,
                                                    children: [
                                                        null != g &&
                                                            (0, o.jsx)("img", {
                                                                className: tw.rm,
                                                                src: g,
                                                                alt: n.name,
                                                                style: d?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, o.jsx)(eu.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: tw.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, o.jsx)(Q.E, {
                                                                variant: "text-md/normal",
                                                                className: tw.Tm,
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
                                  (0, o.jsx)(nN, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nT = n(222884);
let nR = function (e) {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, ta.Mk)(s),
        a = (0, T.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, tX.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        g = (0, ex.X)(d),
        { analyticsLocations: m } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_SHELF),
        h = c.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: a?.isOrbsExclusive === !0 && s !== B.G2.ORBS,
            });
        }, [t.categorySkuId, a, n, s]);
    if (null == l || 0 === g.length) return null;
    let E = t.buttonText ?? D.intl.formatToPlainString(D.t.bc9RBE, { category_name: t.name }),
        x = t.showButton,
        f = t.desktopBackgroundImage,
        C = null != f;
    return (0, o.jsx)(p.f5, {
        value: m,
        children: (0, o.jsxs)("div", {
            className: u()(nT.mu, tw.YB, C ? nT.VA : nT.Ti),
            children: [
                C && (0, o.jsx)("img", { className: nT.iL, src: f, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: nT.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nT.wx,
                            children: [
                                (0, o.jsx)(eu.D, {
                                    variant: "heading-lg/semibold",
                                    style: C ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                x &&
                                    (0, o.jsx)(ee.$, {
                                        variant: C ? "overlay-primary" : "secondary",
                                        text: E,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, o.jsx)(t3.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            children: g.map((e, n) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, o.jsx)(
                                          A.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(ev.A, { skuId: e.skuId, prioritizedCurrency: i }),
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
var ny = n(465794),
    nM = n(69236),
    nB = n(44724),
    nP = n(421108),
    nD = n(873297);
let nH = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: s,
            gradientAngle: l,
            skuIds: i,
            tab: a,
            endTime: r,
            ctaType: d = "storefront",
            logoUrl: u,
        } = e,
        g = (0, nP.u)(r) ?? void 0,
        m = (0, nM.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || m
                    ? {
                          kind: "button",
                          text: D.intl.string(D.t.apFNLU),
                          onClick: () => (0, nB.default)({ applicationId: t }),
                          onMouseDown: () => (0, nB.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(ny.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: P.pe.TIER_2,
                              buttonTextOverride: D.intl.string(D.t.pj0XBN),
                          }),
                      },
            [d, t, m],
        );
    return (0, o.jsx)(nD.A, {
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
        backgroundGradient: `linear-gradient(${l}deg, ${s.join(", ")})`,
    });
};
var nw = n(575593),
    nF = n(770178),
    nG = n(929283),
    nU = n(273411);
let nz = [
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
function nV(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        i = L.A.getProduct(t.skuId),
        a = i?.items[0],
        r = i?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: nU.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != a && r === nw.R.AVATAR_DECORATION && (0, o.jsx)(nG.i, { item: a }),
    });
}
let nK = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, i] = c.useState(!1),
            [a, r] = c.useState([]),
            [d] = c.useState(() =>
                [...nz]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${B.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            c.useEffect(() => {
                if (null != s && s > 0) {
                    let e = Math.max(1, Math.floor(s / 130)),
                        t = s / e;
                    r(Array.from({ length: e }, (e, n) => ({ config: d[n % d.length], baseLeft: n * t })));
                }
            }, [s, d]),
            c.useEffect(() => {
                n && setTimeout(() => i(!0), B.H1);
            }, [n]),
            (0, o.jsx)("div", {
                className: u()(nU.rA, { [nU.Kb]: t, [nU.pp]: l }),
                children: a.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, o.jsx)(nV, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nW = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = c.useRef(null),
            [l, i] = c.useState(0),
            a = c.useCallback(() => {
                null != s.current && i(s.current.offsetWidth);
            }, []);
        return (
            (0, nF.g)(s, a),
            (0, o.jsx)("div", {
                ref: s,
                className: nU.eL,
                children: (0, o.jsx)(nK, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var nY = n(815021);
let n$ = function (e) {
    let { wideBannerBlock: t, tab: n } = e,
        s = L.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        l = c.useRef(null),
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
    let m = s?.skuId ?? "",
        { handleCardVisibilityChange: h } = (0, nS.Z)(m, "home", "marketing wide banner"),
        E = (0, A.uM)(),
        { bannerURL: x } = (0, nd.w$)(t),
        f = n === B.G2.ORBS,
        p = null != t.ctaRoute && "" !== t.ctaRoute,
        C = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
        b = null != t.logoURL && "" !== t.logoURL,
        _ = c.useCallback(() => {
            if ((g(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, tp.$l)(tf.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: ns.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        S = c.useCallback(
            (e) => {
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                            (0, nB.default)({ guildId: e, pageIndex: n });
                        }
                    } else (0, nn.pX)(e);
                }
            },
            [t.ctaRoute, S],
        );
    if (null == x || d) return null;
    let v = u()(tw.nM, tw.Tq, tw.TS, tw.YB, { [tw._1]: f, [tw.vb]: p }),
        I = (0, o.jsxs)(o.Fragment, {
            children: [
                t.isDismissible &&
                    (0, o.jsx)("div", {
                        className: tw.Mh,
                        children: (0, o.jsx)(nY.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), _();
                            },
                            "aria-label": D.intl.string(D.t.WAI6xu),
                        }),
                    }),
                (0, o.jsx)("div", {
                    className: u()(tw.zK, { [tw._1]: f }),
                    style: null != a ? { height: `${a}px` } : void 0,
                    children: (0, o.jsx)("img", {
                        ref: i,
                        src: x,
                        alt: t.title,
                        className: u()(tw.LN, { [tw.d5]: f }),
                    }),
                }),
                (0, o.jsx)("div", {
                    className: u()(tw.Ep, { [tw.Qq]: C }),
                    style: { maxHeight: null != a ? `${a}px` : "auto" },
                    children: (0, o.jsxs)("div", {
                        className: tw.E8,
                        children: [
                            (0, o.jsx)(eu.D, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: f ? tw.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, o.jsx)(Q.E, {
                                style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                lineClamp: 2,
                                variant: f ? "text-md/medium" : "text-sm/medium",
                                children: f
                                    ? D.intl.format(D.t.SFFP7K, {
                                          helpdeskArticle: t1.A.getArticleURL(el.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            C &&
                                (0, o.jsxs)("div", {
                                    className: tw.nP,
                                    children: [
                                        (0, o.jsx)(ee.$, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), j(t.ctaText ?? D.intl.string(D.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? D.intl.string(D.t.jVcuVY),
                                            "aria-label":
                                                null == t.ctaText && null != t.title
                                                    ? D.intl.formatToPlainString(D.t.frSHlf, { destination: t.title })
                                                    : void 0,
                                        }),
                                        b && (0, o.jsx)("img", { src: t.logoURL, alt: "", className: tw.bU }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, o.jsx)(t8.N, {
        theme: f ? void 0 : e9.NJ.DARK,
        children: (e) =>
            (0, o.jsx)(t9.L, {
                innerRef: l,
                onChange: h,
                threshold: 0,
                children: p
                    ? (0, o.jsx)(eK.D, { innerRef: l, onClick: () => j(null), className: u()(e, v), children: I })
                    : (0, o.jsx)("div", { ref: l, className: u()(e, v), children: I }),
            }),
    });
};
var nq = n(757036),
    nZ = n(212739);
let nX = (0, N.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var nJ = n(462887),
    nQ = n(765671),
    n0 = n(303136),
    n1 = n(792656),
    n2 = n(363195),
    n5 = n(901123),
    n4 = n(894865),
    n3 = n(909340);
let n6 = function (e) {
        let { category: t, tab: n } = e,
            { ref: s, width: l } = (0, nQ.Ay)(),
            i = null != l && l <= 560,
            a = (0, m.bG)([n2.A], () => (0, nJ.q)(n2.A.theme)),
            r = t?.skuId ?? "",
            { handleCardVisibilityChange: d } = (0, nS.Z)(r, "home", "marketing orbs upsell banner"),
            g = (0, A.uM)(),
            { analyticsLocations: h } = (0, p.Ay)(tP.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
            E = c.useCallback(() => {
                es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    sku_id: r,
                    page_type: n,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    tile_type: "PREMIUM_UPSELL_BANNER",
                    tile_position: String(g?.tilePosition),
                    cta_name: "nitro_home",
                    location_stack: h,
                });
            }, [g, h, r, n]);
        return (0, o.jsx)(p.f5, {
            value: h,
            children: (0, o.jsx)(t8.N, {
                theme: el.NJ8.DARKER,
                children: (e) =>
                    (0, o.jsx)(t9.L, {
                        innerRef: s,
                        onChange: d,
                        threshold: 0,
                        children: (0, o.jsxs)("div", {
                            ref: s,
                            className: u()(e, n4.kL),
                            children: [
                                (0, o.jsx)(n0.A, { className: n4.Ki, src: n3.A }),
                                (0, o.jsxs)("div", {
                                    className: n4.Qs,
                                    children: [
                                        (0, o.jsx)(eu.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: n4.R_,
                                            children: D.intl.string(D.t["50J7mj"]),
                                        }),
                                        (0, o.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: n4.rf,
                                            children: D.intl.format(D.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: n4.R$,
                                            children: [
                                                (0, o.jsx)(n1.A, {
                                                    subscriptionTier: P.pe.TIER_2,
                                                    variantOverride: "expressive",
                                                    size: "md",
                                                    fullWidth: i,
                                                }),
                                                (0, o.jsx)(ee.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    fullWidth: i,
                                                    text: D.intl.string(D.t.PcTCB7),
                                                    onClick: () => {
                                                        E(), (0, nn.pX)(n5.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("img", {
                                    className: n4.Qw,
                                    src: a
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
    n7 = function (e) {
        let { index: t, wideBannerBlock: n, tab: s } = e,
            l = nX.useConfig({ location: "CollectiblesShopBannerSelector" }),
            i = (0, nq.L)(P.PremiumTypes.TIER_2),
            a = (0, nZ.O)();
        if (l && !i && !a && s === B.G2.ORBS) {
            let e = L.A.getCategoryByStoreListingId(n.categoryStoreListingId);
            return (0, o.jsx)(n6, { category: e, tab: s }, t);
        }
        return (0, o.jsx)(n$, { wideBannerBlock: n, tab: s }, t);
    },
    n9 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: i, includeUnpublished: a } = (0, eL.A)(),
            [r, d] = c.useState(!1),
            g = (0, A.uM)(),
            m = g?.sessionId ?? "",
            h = (0, W.H)({ location: "collectibles_shop_feed" });
        c.useEffect(() => {
            (0, ef.z)({
                sessionId: m,
                checkpoint: ef.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: a,
                cacheDisabled: i,
            });
        }, [l]);
        let {
                isFetchingShopHome: E,
                fetchShopHomeError: x,
                shopBlocks: f,
                refreshShopHome: p,
            } = (0, t_.y)(l, { noCache: i, includeUnpublished: a, logPerf: !0 }, { sessionId: m, tab: l }),
            C = c.useCallback(() => {
                p();
            }, [p]),
            b = c.useMemo(() => f.some((e) => e instanceof tS.p), [f])
                ? (0, o.jsx)(tv.A, { location: "CollectiblesShop" })
                : null;
        return (c.useEffect(() => {
            null != x ||
                E ||
                0 === f.length ||
                (0, ef.z)({
                    sessionId: m,
                    checkpoint: ef.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: i,
                });
        }, [x, E, f.length, a, i, m, l]),
        null != x)
            ? (0, o.jsx)(tE.h, { onRetry: C, errorOrigin: tE.A.SHOP_PAGE, errorMessage: x.message })
            : E || 0 === f.length
              ? (0, o.jsxs)("div", {
                    className: u()(tw.g4, tw.Of),
                    children: [
                        (0, o.jsx)(no.A, { isLoading: E, handleTransition: t, tab: l }),
                        (0, o.jsx)(tU, { isLoading: E, handleTransition: t, categories: [] }),
                        (0, o.jsx)(t4, {
                            isLoading: E,
                            title: l === B.G2.ORBS ? D.intl.string(D.t.dFgeuZ) : D.intl.string(D.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
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
                                case tx.g.HERO:
                                    c = (0, o.jsx)(
                                        no.A,
                                        { isLoading: E, handleTransition: t, heroBlock: e, tab: l, badge: b },
                                        a,
                                    );
                                    break;
                                case tx.g.FEATURED:
                                    c = (0, o.jsx)(
                                        tU,
                                        { isLoading: E, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case tx.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        t4,
                                        {
                                            title:
                                                l === B.G2.ORBS ? D.intl.string(D.t.dFgeuZ) : D.intl.string(D.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: i?.type === tx.g.IMMERSIVE_BANNER ? tw.w : void 0,
                                            prioritizeUserDiscounts: l === B.G2.HOME,
                                            tab: l,
                                            orbsSupportedOnly: l === B.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case tx.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, tp.En)(tf.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(n7, { index: a, wideBannerBlock: e, tab: l }, a);
                                    break;
                                case tx.g.FRAMES_BANNER:
                                    c = (0, o.jsx)(
                                        n$,
                                        {
                                            wideBannerBlock: tj.y.fromServer({
                                                type: tx.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: l,
                                        },
                                        a,
                                    );
                                    break;
                                case tx.g.FRAMES_PRODUCT_SHELF:
                                    c = (0, o.jsx)(t7, { block: e, handleTransition: t, tab: l }, a);
                                    break;
                                case tx.g.SHELF:
                                    c = (0, o.jsx)(nR, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case tx.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(tM, { countdownTimerBlock: e, isVisible: r }, a)), (g = !0);
                                    break;
                                case tx.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        nm,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        a,
                                    );
                                    break;
                                case tx.g.REWARD_HERO:
                                    c = (0, o.jsx)(nk, { isLoading: E, handleTransition: t, heroBlock: e, tab: l }, a);
                                    break;
                                case tx.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, tp.En)(tf.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, o.jsx)(
                                        tb,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nr, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case tx.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        tb,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nH, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: l,
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
                                tb,
                                {
                                    blockType: e.type,
                                    children: (0, o.jsx)("div", {
                                        className: u()(tw.v1, tw.Of, { [tw.J1]: 0 === a || g }),
                                        children: c,
                                    }),
                                },
                                a,
                            );
                        })(e, i > 0 ? f[i - 1] : null, i),
                    ),
                });
    },
    n8 = function (e) {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = c.useRef(null),
            { handleScroll: i } = ea(l, n),
            a = (0, eA.U)(),
            r = (0, A.uM)(),
            [d, u] = c.useState(B.md),
            [g, m] = c.useState(!1);
        return (
            c.useEffect(() => {
                if (null != l.current) {
                    function e() {
                        if (null == l.current) return;
                        let e = l.current.getDistanceFromBottom();
                        d >= 36 ? m(e < 20) : e <= 200 && u((e) => e + B.md);
                    }
                    let t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, d, u, m]),
            (0, o.jsx)(X.Ch, {
                className: tw.OW,
                ref: l,
                onScroll: i,
                children: (0, o.jsxs)("div", {
                    className: tw.bx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: tw.rb,
                            children: [
                                (0, o.jsx)(n9, {
                                    handleTransition: t,
                                    numVisibleItems: d,
                                    isFetchingCategories: a,
                                    tab: n,
                                }),
                                n !== B.G2.CATALOG &&
                                    d >= 36 &&
                                    (0, o.jsxs)("div", {
                                        className: tw.R$,
                                        children: [
                                            (0, o.jsx)(eu.D, {
                                                variant: "heading-md/semibold",
                                                children: D.intl.string(D.t.Yr70c4),
                                            }),
                                            (0, o.jsx)(ee.$, {
                                                variant: "primary",
                                                text: D.intl.string(D.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === B.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, o.jsx)(nW, { peaking: g, transitioning: s === B.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var se = n(154323),
    st = n(295811),
    sn = n(870216);
let ss = { "Any:personalization-header": t5 },
    sl = { [ec.b.SHOP_HOME]: ss },
    si = { "1465939725649973269": ss, "1478495181551440044": ss },
    sa = function () {
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
    sr = { prioritizedCurrency: ta.Hi.ORBS };
function so(e) {
    let { tab: t } = e,
        [n, s, l] = (0, T.yK)([sn.A], () => [sn.A.getLayout(t), sn.A.isFetchingLayout(t), sn.A.getLayoutFetchError(t)]),
        i = (0, T.bG)([se.A], () => se.A.get("shop_include_unpublished")),
        a = (0, T.bG)([L.A], () => L.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === i && (e.include_unpublished = !0), null != a && a > 0 && (e.skip_num_categories = a), e;
        }, [i, a]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, n_.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== z.HOME || d || s
            ? null
            : (0, o.jsx)(eo.Z_, {
                  tenantId: el.FYj,
                  templateId: ec.b.SHOP_HOME,
                  requestParams: r,
                  overrides: sl[ec.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(eo.Qs, { tenantId: el.FYj, layoutId: n, overrides: si[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === z.ORBS && (0, o.jsx)(sa, {}),
            t === z.ORBS ? (0, o.jsx)(ta.v3.Provider, { value: sr, children: u }) : u,
        ],
    });
}
function sc(e) {
    let { url: t } = e,
        [n, s] = c.useState(null);
    return (c.useEffect(() => {
        !(async function () {
            try {
                let e = await fetch(t),
                    n = await e.json();
                s(n);
            } catch (e) {
                s(null);
            }
        })();
    }, [t]),
    null == n)
        ? null
        : (0, o.jsx)(eo.Ay, { layout: n });
}
let sd = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, A.uM)(),
        i = (0, T.bG)([st.A], () => st.A.getShopLayoutUrlOverride()),
        a = c.useRef(null),
        { handleScroll: r } = ea(a, n),
        [d, g] = c.useState(B.md),
        [m, h] = c.useState(!1);
    return (
        c.useEffect(() => {
            if (null != a.current) {
                function e() {
                    if (null == a.current) return;
                    let e = a.current.getDistanceFromBottom();
                    d >= 36 ? h(e < 20) : e <= 200 && g((e) => e + B.md);
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
        (0, o.jsx)(X.Ch, {
            className: tw.OW,
            ref: a,
            onScroll: r,
            children: (0, o.jsxs)("div", {
                className: tw.bx,
                children: [
                    (0, o.jsxs)("div", {
                        className: u()(tw.rb, tw.GS),
                        children: [
                            null != i && "" !== i ? (0, o.jsx)(sc, { url: i }) : (0, o.jsx)(so, { tab: n }),
                            n !== z.CATALOG &&
                                d >= 36 &&
                                (0, o.jsxs)("div", {
                                    className: tw.R$,
                                    children: [
                                        (0, o.jsx)(eu.D, {
                                            variant: "heading-md/semibold",
                                            children: D.intl.string(D.t.Yr70c4),
                                        }),
                                        (0, o.jsx)(ee.$, {
                                            variant: "primary",
                                            text: D.intl.string(D.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === z.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, o.jsx)(nW, { peaking: m, transitioning: s === B.Pf.OUT }),
                ],
            }),
        })
    );
};
var su = n(564027);
let sg = function () {
        return (0, o.jsxs)("div", {
            className: su.z,
            children: [
                (0, o.jsx)("img", {
                    className: su.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: D.intl.string(D.t["p8+qtU"]),
                }),
                (0, o.jsx)(eu.D, { variant: "heading-xl/semibold", children: D.intl.string(D.t["p8+qtU"]) }),
                (0, o.jsx)(Q.E, { variant: "text-md/medium", children: D.intl.string(D.t.UEiyvs) }),
            ],
        });
    },
    sm = [B.G2.HOME, B.G2.ORBS];
function sh(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: i,
            refreshCategories: a,
        } = e,
        r = (0, T.bG)([L.A, $.A], () =>
            null != L.A.error
                ? `shop load fetch categories error: ${L.A.error.message}`
                : null != $.A.claimError
                  ? `shop load claim error: ${$.A.claimError.message}`
                  : null != $.A.fetchError
                    ? `shop load fetch purchase error: ${$.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, eL.A)();
        c.useEffect(() => {
            null != e &&
                Y.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(r);
    let d = (0, W.H)({ location: "collectibles_content" }),
        u = (0, T.bG)([V.Ay], () => V.Ay.useReducedMotion),
        g = (0, U.W6)(),
        m = (0, U.zy)(),
        [h] = c.useState(() => {
            if ("POP" === g.action) {
                let e;
                return (e = eI), (eI = null), e ?? void 0;
            }
        }),
        [E, x] = c.useState(h),
        [f, p] = c.useState(null == h),
        C = c.useMemo(() => {
            let e = new URLSearchParams(m.search).get(B.P1);
            return null != e && "" !== e ? e : void 0;
        }, [m.search]),
        b = c.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !B.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        _ = (0, K.U)("CollectiblesContent"),
        S = (0, q.a)("CollectiblesContent"),
        j = c.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: a,
                    isOrbsExclusive: r,
                } = e;
                if ((i(t, n), S && null != n && a && !r))
                    return void g.push(el.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = l && !u,
                    c = r ? B.G2.ORBS : B.G2.CATALOG;
                x(n), p(!a), s(c, o);
            },
            [u, s, i, S, g],
        ),
        { searchError: A } = (0, Z.S)();
    return null != A
        ? (0, o.jsx)(sg, {})
        : null != r
          ? (0, o.jsx)(tE.h, { onRetry: a, errorMessage: r, errorOrigin: tE.A.SHOP_PAGE })
          : t === B.G2.HOME && _
            ? (0, o.jsx)(sd, { tab: z.HOME, transitionState: l, handleTransition: j })
            : t === B.G2.ORBS && _
              ? (0, o.jsx)(sd, { tab: z.ORBS, transitionState: l, handleTransition: j })
              : sm.includes(t)
                ? (0, o.jsx)(n8, { handleTransition: j, tab: t, transitionState: l })
                : t === B.G2.GAME_SERVERS && d
                  ? (0, o.jsx)("div", {})
                  : (0, o.jsx)(tm, {
                        tab: t,
                        categories: b,
                        initialCategoryId: E ?? C,
                        showFilterInitially: f && null == C,
                        onUnmount: () => {
                            x(void 0), p(!0);
                        },
                    });
}
var sE = n(956123),
    sx = n(766075),
    sf = n(667785);
let sp = { pink: "pinkCountdown" },
    sC = c.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: s, variant: l } = e,
            i = c.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            a = (0, tk.A)(i ?? 0, 1e3, void 0, null == i);
        if (null != i && Object.values(a).every((e) => 0 === e)) return null;
        let r = null != l ? sf[l] : void 0,
            d = null != l ? sf[sp[l]] : void 0;
        return (0, o.jsx)(eK.D, {
            className: u()(sf.nagBar, r),
            onClick: n,
            "aria-label": D.intl.string(D.t["wjws+K"]),
            children: (0, o.jsxs)("div", {
                className: sf.content,
                children: [
                    (0, o.jsx)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        className: sf.message,
                        children: t,
                    }),
                    null != i && (0, o.jsx)(tR, { endDate: i, size: "md", className: d, showSeconds: !0 }),
                ],
            }),
        });
    });
var sb = n(870308),
    s_ = n(650583);
function sS(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === s_.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let sj = function (e) {
    var t;
    let { tab: n = B.G2.HOME } = e;
    (0, _.P)(b.a), (0, w.g)();
    let s = (0, f.A)((0, g.A)()),
        l = (0, m.bG)([v.default], () => v.default.getCurrentUser());
    (0, j.pE)();
    let i = (0, eB.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, U.zy)(),
                t = (0, U.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === s) {
                        (0, nn.aX)(), (0, sx.openUserSettings)();
                        return;
                    }
                    (0, nn.EL)() ? (0, nn.aX)() : (0, nn.pX)(el.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: r, hasFilters: d } = (0, G.v)(),
        N = c.useMemo(() => (n === B.G2.HOME && null != r && d() ? r : n), [n, r, d]);
    (t = O.useConfig({ location: "CollectiblesShop" }).useEndpoint ? el.FYj : void 0),
        c.useEffect(() => {
            null != t && (0, S.tx)([t]);
        }, [t]);
    let { categories: z, refreshCategories: V } = (0, H.Ay)({ logPerf: !0 }, { sessionId: s, tab: N }),
        K = c.useMemo(() => [...z.values()], [z]),
        [W, Y] = c.useState(),
        $ = (0, m.bG)([L.A], () => L.A.getCategory(W)?.name),
        [q, Z] = c.useState();
    (0, eT.XU)(s);
    let X = c.useCallback((e, t) => {
            Z(e), Y(t);
        }, []),
        { selectedTab: J, transitionState: Q, transitionToTab: ee } = (0, F.o)(N);
    (0, C.HU)({ location: D.intl.string(D.t.pWG4ze) }), (0, k.uS)(s, J, $, Q, q), (0, k.N0)(J, l);
    let { dismissShopButtonDC: et } = (0, sb.A)();
    c.useEffect(() => {
        et();
    }, [et]),
        c.useEffect(() => {
            (0, x.I)(el.BVt.COLLECTIBLES_SHOP);
        }, []);
    let en = c.useRef(null),
        es = c.useRef(null);
    (0, E.tj)(en);
    let ei = (0, h.useHasAnyModalOpen)();
    c.useEffect(() => {
        es.current?.focus();
    }, []),
        (0, eB.gB)();
    let { analyticsLocations: ea } = (0, k.lC)(J),
        er = (function (e, t) {
            let n = (0, T.bG)([y.A], () => y.A.getUserDiscount(P.tU)),
                s = (0, T.bG)([R.default], () => R.default.locale),
                l = M.useConfig({ location: t }).enabled;
            if (c.useMemo(() => null != n && l && e !== B.G2.ORBS, [n, l, e])) {
                let e =
                    null != n && null != n.expiresAt
                        ? new Date(n.expiresAt).toLocaleDateString(s, { day: "numeric", month: "numeric" })
                        : void 0;
                return { type: 0, countdownEndDate: n?.expiresAt, message: D.intl.format(D.t.RCo9MF, { date: e }) };
            }
        })(J, "collectibles_shop");
    return (0, o.jsx)(p.f5, {
        value: ea,
        children: (0, o.jsx)(A.R9, {
            newValue: { sessionId: s, pageCategory: $, pageSize: B.l5 },
            children: (0, o.jsx)(I.iM, {
                tab: J,
                children: (0, o.jsx)(sS, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(e_.bx, { [eB.jP]: i }),
                        ref: es,
                        inert: ei,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(sE.G, { handleTransition: ee, selectedTab: J }),
                            null != er &&
                                (0, o.jsx)(sC, {
                                    message: er.message,
                                    onClick: () => ee(B.G2.HOME),
                                    variant: "pink",
                                    countdownEndDate: er.countdownEndDate,
                                }),
                            (0, o.jsx)("div", {
                                className: u()(e_.td, {
                                    [e_.RK]: Q === B.Pf.VISIBLE,
                                    [e_.in]: Q === B.Pf.IN,
                                    [e_.FD]: Q === B.Pf.OUT,
                                }),
                                children: (0, o.jsx)(sh, {
                                    tab: J,
                                    refreshCategories: V,
                                    transitionToTab: ee,
                                    transitionState: Q,
                                    categories: K,
                                    updateAnalyticsState: X,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
