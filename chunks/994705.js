n.r(t), n.d(t, { default: () => sv });
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
    F = n(621653),
    w = n(983545),
    G = n(23161);
n(323874), n(14289), n(35956), n(321073);
var U = n(873263),
    z = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    V = n(775602),
    W = n(578797),
    K = n(140218),
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
    eE = n(940980),
    ex = n(511265),
    ef = n(206077),
    ep = n(100057),
    eC = n(828515),
    eb = n(484469),
    e_ = n(346448),
    eS = n(195261),
    ej = n(132866);
let ev = function () {
    return (0, o.jsx)("div", {
        className: ej.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, o.jsxs)(
                "div",
                {
                    className: eS.vY,
                    children: [
                        (0, o.jsx)("div", { className: u()(e_.sW, ej.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, o.jsx)(eb.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var eA = n(828614),
    eL = n(561769),
    eI = n(159439),
    eN = n(998694);
let eO = null;
function ek(e) {
    let { category: t } = e,
        n = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        s = (0, ef.X)(t.products),
        l = (0, ex.p)()(s),
        i = (0, eE.W)("CollectiblesCatalogContent");
    return null == n || 0 === l.length
        ? null
        : (0, o.jsx)("div", {
              className: eS.vY,
              children: l.map((e, t) =>
                  (0, o.jsx)(
                      A.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, o.jsx)(
                              eA.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: i ? eL.Hi.FIAT : void 0,
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function eT(e) {
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
                (eO = t.skuId),
                i.push(el.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, i]);
    return (0, o.jsxs)("div", {
        className: eS.EF,
        ref: l,
        children: [(0, o.jsx)(eC.A, { category: t, onSelect: a ? d : void 0 }), (0, o.jsx)(ek, { category: t })],
    });
}
function eR(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: i } = e,
        a = (0, A.uM)(),
        r = (0, eI.U)(),
        d = a?.sessionId ?? "",
        { noCache: u, includeUnpublished: g } = (0, eN.A)(),
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
        (0, ep.z)({
            sessionId: d,
            checkpoint: ep.t.SHOP_MOUNTED,
            tab: B.G2.CATALOG,
            unpublishedCategoriesShown: g,
            cacheDisabled: u,
        });
    }, []),
    c.useEffect(() => {
        r ||
            0 === E.length ||
            (0, ep.z)({
                sessionId: d,
                checkpoint: ep.t.SHOP_RENDERED,
                tab: B.G2.CATALOG,
                unpublishedCategoriesShown: g,
                cacheDisabled: u,
            });
    }, [d, g, u, r, E.length]),
    r)
        ? (0, o.jsx)(ev, {})
        : (0, o.jsxs)("div", {
              className: eS.LZ,
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
                                  children: (0, o.jsx)(eT, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, o.jsx)("div", {
                      className: eS.Ej,
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
var ey = n(177366),
    eM = n(401864),
    eB = n(124987),
    eP = n(691885),
    eD = n(146919),
    eH = n(858733);
let eF = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, G.v)(),
        s = (0, A.uM)(),
        l = (0, eD.yB)("CollectiblesSortSelect"),
        i = n(),
        a = c.useMemo(() => B.QB.filter((e) => e.sortType !== eB.$.RELEVANCE || i), [i]),
        r = c.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === eB.$.RECENCY
                ? { label: D.intl.string(D.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === eB.$.PRICE
                  ? n === eM.A.ASC
                      ? { label: D.intl.string(D.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: D.intl.string(D.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === eB.$.RELEVANCE
                    ? { label: D.intl.string(D.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: D.intl.string(D.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = c.useCallback(
            (e) =>
                ({
                    recent: { sortType: eB.$.RECENCY, sortDirection: eM.A.DESC },
                    "price-asc": { sortType: eB.$.PRICE, sortDirection: eM.A.ASC },
                    "price-desc": { sortType: eB.$.PRICE, sortDirection: eM.A.DESC },
                    popularity: { sortType: eB.$.POPULARITY, sortDirection: eM.A.DESC },
                    relevance: { sortType: eB.$.RELEVANCE, sortDirection: eM.A.DESC },
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
        className: u()(eH.k, { [eD.jP]: l }),
        children: (0, o.jsx)(eP.l, {
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
var ew =
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
    eG =
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
    eU = n(150934),
    ez = n(508770),
    eV = n(602853),
    eW = n(661531),
    eK = n(866665),
    eY = n(939249),
    e$ = n(947641),
    eq = n(604338),
    eZ = n(785866),
    eX = n(373846),
    eJ = n(308323),
    eQ = n(608599),
    e0 = n(685761),
    e1 = n(157225),
    e2 = n(413249),
    e5 = n(510241),
    e4 = n(601198),
    e3 = n(736653),
    e6 = n(223311),
    e7 = n(7250);
let e9 = (0, N.mj)({
    name: "2026-07-collectibles-collabs-filter",
    kind: "user",
    defaultConfig: { collabsFilterEnabled: !1 },
    variations: { 0: { collabsFilterEnabled: !1 }, 1: { collabsFilterEnabled: !0 } },
});
var e8 = n(13875),
    te = n(818348),
    tt = n(967339);
function tn() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            reset: l,
            hasFilters: i,
        } = (0, G.v)(),
        a = e9.useConfig({ location: "FilterBar" }).collabsFilterEnabled,
        r = i(),
        d = (0, e8.sk)("FilterBar"),
        g = (0, A.uM)(),
        m = c.useRef(null),
        h = (0, e6.A)(el.FYj),
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
        className: tt.kT,
        children: [
            (0, o.jsxs)("div", {
                className: u()(tt.KZ, tt.YG),
                children: [
                    (0, o.jsx)("div", {
                        ref: m,
                        tabIndex: -1,
                        children: (0, o.jsx)(Q.E, {
                            variant: "text-md/semibold",
                            className: tt.hr,
                            children: D.intl.string(D.t.Qk6r1a),
                        }),
                    }),
                    f.map((e) => (0, o.jsx)(ts, { filter: e, trackFilterAction: p }, e)),
                    (0, o.jsx)(eU.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: D.intl.string(D.t.AHHHgG),
                    }),
                    a && (0, o.jsx)(eU.S, { checked: s, onChange: C, label: D.intl.string(D.t["+W8gb+"]) }),
                    null != h &&
                        (0, o.jsx)(eU.S, {
                            checked: E,
                            onChange: () => {
                                p(`filter offer eligible ${!1 === E ? "on" : "off"}`), x((e) => !e);
                            },
                            label: D.intl.string(D.t.hY8Ft1),
                        }),
                ],
            }),
            (0, o.jsx)(tl, { trackFilterAction: p }),
            (0, o.jsx)(tr, { trackFilterAction: p }),
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
function ts(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [ed.q.AVATAR_DECORATION]: D.intl.string(D.t.dRZYNE),
            [ed.q.PROFILE_EFFECT]: D.intl.string(D.t["1cNjtx"]),
            [ed.q.NAMEPLATE]: D.intl.string(D.t.V68Fqz),
            [ed.q.PROFILE_FRAME]: D.intl.string(D.t.ecTJkR),
            [ed.q.BUNDLE]: D.intl.string(D.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, G.v)(),
        a = (0, o.jsx)(eU.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t);
            },
            label: s[t] ?? "",
        });
    return t === ed.q.PROFILE_FRAME
        ? (0, o.jsxs)("div", { className: tt.Ym, children: [a, (0, o.jsx)(ez.E, { type: "new" })] })
        : a;
}
function tl(e) {
    let { trackFilterAction: t } = e,
        n = c.useMemo(
            () => [
                { color: "#9B59B6", label: D.intl.string(D.t.kqUD4P), enum: ew.PURPLE },
                { color: "#3498DB", label: D.intl.string(D.t.qQTRae), enum: ew.BLUE },
                { color: "#2ECC71", label: D.intl.string(D.t["f/Ylk6"]), enum: ew.GREEN },
                { color: "#A0522D", label: D.intl.string(D.t["Sd/BMa"]), enum: ew.BROWN },
                { color: "#F1C40F", label: D.intl.string(D.t["0fevYz"]), enum: ew.YELLOW },
            ],
            [],
        ),
        s = c.useMemo(
            () => [
                { color: "#E67E22", label: D.intl.string(D.t.ZE7weD), enum: ew.ORANGE },
                { color: "#E74C3C", label: D.intl.string(D.t.hKJGOM), enum: ew.RED },
                { color: "#EC407A", label: D.intl.string(D.t.HvLEGM), enum: ew.PINK },
                { color: "#FFFFFF", label: D.intl.string(D.t["CB+lNO"]), enum: ew.WHITE },
                { color: "#262626", label: D.intl.string(D.t["dMey+v"]), enum: ew.BLACK },
            ],
            [],
        );
    return (0, o.jsxs)("div", {
        className: tt.KZ,
        children: [
            (0, o.jsx)(Q.E, { variant: "text-md/semibold", className: tt.hr, children: D.intl.string(D.t.K1xGoG) }),
            (0, o.jsx)(ti, { colors: n, trackFilterAction: t }),
            (0, o.jsx)(ti, { colors: s, trackFilterAction: t }),
        ],
    });
}
function ti(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, G.v)();
    return (0, o.jsx)("div", {
        className: tt.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: a } = e;
            return (0, o.jsx)(
                ta,
                { color: t, label: i, enum: a, isToggled: s.has(a), onToggleColor: l, trackFilterAction: n },
                a,
            );
        }),
    });
}
function ta(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: i, trackFilterAction: a } = e,
        r = (0, eV.r)(eW.A.unsafe_rawColors.WHITE).hex(),
        c = (0, eV.r)(eW.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, o.jsx)(
        eK.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, o.jsx)(
                eY.D,
                {
                    className: u()(tt.n1, { [tt.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        a(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), i(s);
                    },
                    children:
                        l &&
                        (0, o.jsx)("div", {
                            className: tt.oE,
                            children: (0, o.jsx)(e$.r, {
                                size: "xs",
                                color: (0, e7.j)({ backgroundColor: t, colors: [r, c] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function tr(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, G.v)(),
        l = (0, e3.Ay)() === te.NJ.DARK,
        i = c.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        a = c.useCallback((e) => (n.has(e) || l ? eW.A.colors.WHITE : eW.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        r = c.useMemo(
            () => [
                {
                    name: D.intl.string(D.t.aVBOKh),
                    icon: (0, o.jsx)(eq.E, { size: "xs", color: a(eG.ANIME) }),
                    enum: eG.ANIME,
                },
                {
                    name: D.intl.string(D.t["3WoZBc"]),
                    icon: (0, o.jsx)(eZ._, { size: "xs", color: a(eG.GAMING) }),
                    enum: eG.GAMING,
                },
                {
                    name: D.intl.string(D.t.yuEmLj),
                    icon: (0, o.jsx)(eX.C, { size: "xs", color: a(eG.CUTE_COZY) }),
                    enum: eG.CUTE_COZY,
                },
                {
                    name: D.intl.string(D.t.mMvCHo),
                    icon: (0, o.jsx)(eJ.L, { size: "xs", color: a(eG.SCI_FI) }),
                    enum: eG.SCI_FI,
                },
                {
                    name: D.intl.string(D.t.TlhOQC),
                    icon: (0, o.jsx)(eQ.L, { size: "xs", color: a(eG.FOOD_DRINKS) }),
                    enum: eG.FOOD_DRINKS,
                },
                {
                    name: D.intl.string(D.t["4IaUIM"]),
                    icon: (0, o.jsx)(e0.f, { size: "xs", color: a(eG.FANTASY) }),
                    enum: eG.FANTASY,
                },
                {
                    name: D.intl.string(D.t["w0nSG/"]),
                    icon: (0, o.jsx)(e1.N, { size: "xs", color: a(eG.ANIMALS_PETS) }),
                    enum: eG.ANIMALS_PETS,
                },
                {
                    name: D.intl.string(D.t.cJng7v),
                    icon: (0, o.jsx)(e2.p, { size: "xs", color: a(eG.NATURE) }),
                    enum: eG.NATURE,
                },
                {
                    name: D.intl.string(D.t["5mUvyM"]),
                    icon: (0, o.jsx)(e5.T, { size: "xs", color: a(eG.MOVIES_TV_SHOWS) }),
                    enum: eG.MOVIES_TV_SHOWS,
                },
                {
                    name: D.intl.string(D.t.MB9H5Z),
                    icon: (0, o.jsx)(e4.e, { size: "xs", color: a(eG.DARK_MOODY) }),
                    enum: eG.DARK_MOODY,
                },
            ],
            [a],
        );
    return (0, o.jsxs)("div", {
        className: tt.KZ,
        children: [
            (0, o.jsx)(Q.E, { variant: "text-md/semibold", className: tt.hr, children: D.intl.string(D.t.t1Ztrp) }),
            (0, o.jsx)("div", {
                className: tt.Ot,
                children: r.map((e) => {
                    let { name: l, icon: a, enum: r } = e;
                    return (0, o.jsxs)(
                        eY.D,
                        {
                            className: u()(tt.w4, { [tt.C7]: n.has(r) }),
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
var to = n(882443);
function tc() {
    return (0, o.jsxs)("div", {
        className: to.k,
        children: [
            (0, o.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: D.intl.string(D.t.oezC3x),
                className: to._,
            }),
            (0, o.jsx)(eu.D, { variant: "heading-xl/semibold", children: D.intl.string(D.t.oezC3x) }),
            (0, o.jsx)(Q.E, { variant: "text-md/medium", children: D.intl.string(D.t["Tc/Ndl"]) }),
        ],
    });
}
var td = n(996824);
let tu = { flattenProductVariants: !0 };
function tg(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, A.uM)(),
        i = l?.sessionId ?? "",
        { noCache: a, includeUnpublished: r } = (0, eN.A)(),
        d = (0, eE.W)("CollectiblesFilterResults"),
        g = (0, m.bG)([v.default], () => v.default.getCurrentUser()),
        { skus: h, currentPage: E, totalCount: x, isFetchingResults: f } = (0, Z.S)(),
        p = (0, m.yK)([L.A], () => L.A.getProductsBySkus(h)),
        C = c.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        b = h?.join("");
    c.useEffect(() => {
        C();
    }, [b, C]);
    let _ = (0, ex.p)(),
        S = c.useMemo(() => _(p), [_, p]);
    c.useEffect(() => {
        t ||
            (0, ep.z)({
                sessionId: i,
                checkpoint: ep.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
    }, [i, r, a, t, s]);
    let j = c.useRef(null),
        { setQueryPageSize: I, setQueryPageOffset: N, queryPageSize: O } = (0, G.v)(),
        [k, T] = c.useState(!1),
        R = t || f || null == g;
    c.useEffect(() => {
        R ? T(!1) : S.length > 0 && T(!0);
    }, [R, S.length]);
    let y = O > 0 && !R && 0 === S.length;
    c.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == j.current || I(Math.floor(5 * getComputedStyle(j.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != j.current) return e.observe(j.current), () => e.disconnect();
    }, [I]);
    let M = c.useCallback(
        (e) => {
            es.default.track(el.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: O,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                N((e - 1) * O);
        },
        [l, O, N],
    );
    return (0, o.jsxs)(eL.v3.Provider, {
        value: tu,
        children: [
            (0, o.jsxs)("div", {
                className: u()({ [td.oE]: y }),
                children: [
                    y && (0, o.jsx)(tc, {}),
                    (0, o.jsxs)("div", {
                        className: u()(td.ZE, { [td.Kp]: k }),
                        ref: j,
                        children: [
                            R && [...Array(O)].map((e, t) => (0, o.jsx)(eb.A, {}, t)),
                            !R &&
                                S.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, o.jsx)(
                                              A.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, o.jsx)(
                                                      eA.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: d ? eL.Hi.FIAT : void 0,
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
            x > O &&
                (0, o.jsx)("div", {
                    className: td.Ej,
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(eh.m, {
                            currentPage: E,
                            totalCount: x,
                            pageSize: O,
                            onPageChange: M,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var tm = n(328539);
function th(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: i } = e,
        a = (0, er.A)("shop_include_unpublished");
    (0, G.S)(a);
    let r = c.useRef(null),
        { handleScroll: d } = ea(r, t),
        u = (0, W.U)("Shop Browse"),
        { setCategoryRef: g, handleScrollToCategory: m } = (0, ey.k0)(r.current),
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
            className: tm.VM,
            children: (0, o.jsxs)("main", {
                className: tm.MY,
                children: [
                    (0, o.jsx)(X.Gt, {
                        className: tm.OW,
                        ref: r,
                        onScroll: d,
                        children: u
                            ? (0, o.jsx)("div", {
                                  className: tm.en,
                                  children: (0, o.jsx)("div", {
                                      className: tm.pf,
                                      children: (0, o.jsx)(eo.Z_, { tenantId: el.FYj, templateId: ec.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, o.jsx)(tE, {
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
                    h && !x && (0, o.jsx)("div", { className: tm.yF }),
                    h && !x && (0, o.jsx)(J.Ip, { className: tm.kT, children: (0, o.jsx)(tn, {}) }),
                ],
            }),
        })
    );
}
function tE(e) {
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
            className: tm.en,
            children: (0, o.jsxs)("div", {
                className: tm.pf,
                children: [
                    (0, o.jsxs)("div", {
                        className: tm.ne,
                        children: [
                            (0, o.jsx)("div", { className: tm.lQ, children: (0, o.jsx)(eg, {}) }),
                            (0, o.jsxs)("div", {
                                className: u()(tm.wR, { [tm.Im]: t }),
                                children: [
                                    (0, o.jsxs)("div", {
                                        className: tm.Ul,
                                        children: [
                                            (0, o.jsx)(Q.E, {
                                                variant: "text-md/semibold",
                                                children: D.intl.string(D.t.uaX705),
                                            }),
                                            (0, o.jsx)(eF, {}),
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
                                    className: tm.Dh,
                                    ref: g,
                                    children: (0, o.jsx)(X.Ch, { className: tm.Qo, children: (0, o.jsx)(tn, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, o.jsx)(A.R9, {
                              newValue: { pageIndex: x },
                              children: (0, o.jsx)(eR, {
                                  categories: a,
                                  setCategoryRef: r,
                                  currentPage: x,
                                  handlePageChange: f,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, o.jsx)(tg, { scrollerRef: i, tab: l }, l),
                ],
            }),
        })
    );
}
var tx = n(599062),
    tf = n(651162),
    tp = n(554146),
    tC = n(367727);
let tb = c.createContext(null);
function t_(e) {
    let { blockType: t, children: n } = e,
        s = c.useMemo(() => ({ blockType: t }), [t]);
    return (0, o.jsx)(tb.Provider, { value: s, children: n });
}
var tS = n(755172),
    tj = n(325595),
    tv = n(893998),
    tA = n(110629),
    tL = n(617498),
    tI = n(607399),
    tN = n(946015),
    tO = n(717421),
    tk = n(140735),
    tT = n(496431),
    tR = n(324145);
function ty(e) {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: i, hours: a, minutes: r, seconds: c } = (0, tT.A)(t),
        d = (function (e, t, n, s, l) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [i(e), i(t), i(n)];
            return l && a.push(i(s)), a.join(":");
        })(i, a, r, c, l);
    return (0, o.jsxs)("div", {
        className: u()(tR.kL, s),
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
                                  className: tR.eC,
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
                                  className: tR.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, o.jsx)(tk.A, { children: D.intl.format(D.t.j6IyVe, { days: i, hours: a, minutes: r }) }),
        ],
    });
}
var tM = n(63776);
let tB = c.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, tO.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsxs)(tL.animated.div, {
        className: u()([tM.lP, tI.Fr && tM.yJ]),
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
            (0, o.jsxs)(tN.s, {
                direction: tN.s.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(Q.E, {
                        variant: "text-md/medium",
                        className: tM.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, o.jsx)(Q.E, {
                            variant: "text-sm/medium",
                            className: tM.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, o.jsx)(ty, { endDate: t.endTime }),
        ],
    });
});
var tP = n(424918),
    tD = n(793574),
    tH = n(993408),
    tF = n(196231),
    tw = n(459550);
function tG(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, o.jsx)("div", {
        className: u()(tw.n9, tw.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === tP.u.CATEGORY
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
                              tF.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, tH.HF)(e.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
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
function tU(e) {
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
                    (0, o.jsx)(tF.S, {
                        category: s,
                        enablePreview: !0,
                        badgeText: (0, tH.HF)(s.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, o.jsx)(tF.S, {
                        category: l,
                        badgeText: (0, tH.HF)(l.unpublishedAt) ? D.intl.string(D.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let tz = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: i } = (0, p.Ay)(tD.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
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
                children: (0, o.jsx)(tG, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, o.jsx)(p.f5, {
                value: i,
                children: (0, o.jsx)(tU, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var tV = n(531685),
    tW = n(428262),
    tK = n(621466),
    tY =
        (((a = {}).MOUNTED = "mounted"),
        (a.SORT_OUT = "sort-out"),
        (a.SORT_IN = "sort-in"),
        (a.SHUFFLE_OUT = "shuffle-out"),
        (a.SHUFFLE_IN = "shuffle-in"),
        (a.FINISHED = "finished"),
        a);
n(667532);
var t$ = n(435558),
    tq = n.n(t$),
    tZ =
        (((r = {}).RECOMMENDED = "recommended"),
        (r.POPULAR = "popular"),
        (r.RECENT = "recent"),
        (r.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (r.RANDOM = "random"),
        r),
    tX = n(153488),
    tJ = n(313276),
    tQ = n(623373),
    t0 = n(885574),
    t1 = n(975807),
    t2 = n(975571),
    t5 = n(938682);
let t4 = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? D.intl.string(D.t.NSv5KV);
        return (0, o.jsxs)("div", {
            className: t5.L,
            children: [
                (0, o.jsx)(eu.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, o.jsx)(eK.m, {
                        text: D.intl.string(D.t["3taPdj"]),
                        position: "top",
                        "aria-label": D.intl.string(D.t["3taPdj"]),
                        children: (0, o.jsx)(eY.D, {
                            onClick: () => (0, t1.A)(t2.A.getArticleURL(el.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: t5.s,
                            children: (0, o.jsx)(t0.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    t3 = function (e) {
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
            m = tW.Ay.canUseShopDiscounts(g),
            h = (0, eL.Mk)(a, "FeedBlock"),
            E = (0, eD.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                sortedItems: C,
                sortOptions: b,
                shuffleProducts: _,
                showRecommendationOption: S,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, prioritizeUserDiscounts: s, orbsSupportedOnly: l } = e,
                    i = (0, T.bG)([tX.A], () => tX.A.hasConsented(el.YAq.PERSONALIZATION)),
                    a = c.useMemo(() => t?.[tZ.RECOMMENDED] ?? [], [t]),
                    r = c.useMemo(() => t?.[tZ.POPULAR] ?? [], [t]),
                    o = a.length > 0 && i,
                    [d, u] = c.useState(o ? tZ.RECOMMENDED : tZ.POPULAR),
                    g = (0, T.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    m = c.useMemo(() => (0, tH.CE)(g), [g]),
                    h = (0, T.bG)([y.A], () => y.A.getUserDiscounts()),
                    E = (0, tJ.A)(),
                    x = (0, ex.p)(),
                    [f, p] = c.useState([]),
                    C = c.useCallback(() => {
                        u(tZ.RANDOM), p(tq().shuffle(m));
                    }, [m]);
                c.useEffect(() => {
                    p(tq().shuffle(m));
                }, [m]);
                let b = c.useMemo(() => {
                    let e = [];
                    switch (d) {
                        case tZ.RECENT:
                            e = m;
                            break;
                        case tZ.PRICE_LOW_TO_HIGH:
                            e = (0, tH.bf)([...m], n, l);
                            break;
                        case tZ.RECOMMENDED: {
                            let t = E(a);
                            e = s ? (0, tH.Bs)(t, h) : t;
                            break;
                        }
                        case tZ.POPULAR: {
                            let t = E(r);
                            e = s ? (0, tH.Bs)(t, h) : t;
                            break;
                        }
                        case tZ.RANDOM:
                            e = f;
                    }
                    return l ? (0, tQ.ex)(x(e)) : x(e);
                }, [d, l, x, n, m, E, a, s, h, r, f]);
                return {
                    sortType: d,
                    setSortType: u,
                    sortedItems: (0, ef.X)(b),
                    sortOptions: c.useMemo(() => {
                        let e = [
                            { value: tZ.POPULAR, label: D.intl.string(D.t.Y68e5p) },
                            { value: tZ.RECENT, label: D.intl.string(D.t["51Bhiz"]) },
                            { value: tZ.PRICE_LOW_TO_HIGH, label: D.intl.string(D.t.m8RVU2) },
                        ];
                        return o && e.unshift({ value: tZ.RECOMMENDED, label: D.intl.string(D.t.zPWgFG) }), e;
                    }, [o]),
                    showRecommendationOption: o,
                    shuffleProducts: C,
                };
            })({ sortedSkuIds: s, hasShopDiscount: m, prioritizeUserDiscounts: i, orbsSupportedOnly: d }),
            j = (0, T.bG)([V.Ay], () => V.Ay.useReducedMotion),
            I = (0, T.bG)([tV.A], () => tV.A.isFocused()),
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
            { analyticsLocations: B } = (0, p.Ay)(tD.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            P = c.useRef(null),
            H = c.useRef(null),
            [F, w] = c.useState(!1),
            G = c.useCallback(
                (e) => {
                    w(!1),
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
                                  (0, o.jsx)(t4, { label: n, personalizedResults: S }),
                                  (0, o.jsxs)("div", {
                                      className: u()(tw.IE, { [eD.jP]: E }),
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
                                                      children: (0, o.jsx)(eP.l, {
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
                                                      w(!0),
                                                          k({ isShuffling: !0, onOutroComplete: _, returnRef: P }),
                                                          es.default.track(
                                                              el.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: M },
                                                          );
                                                  },
                                                  disabled: O !== tY.MOUNTED && O !== tY.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(tk.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: F && O === tY.FINISHED ? D.intl.string(D.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, o.jsx)("div", {
                              className: tw.hm,
                              children: t
                                  ? (0, o.jsx)(o.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, o.jsx)(eb.A, {}, t + 1)),
                                    })
                                  : C.slice(0, l).map((e, t) => {
                                        let n,
                                            s = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (N)
                                            if (O === tY.SHUFFLE_OUT)
                                                return (0, o.jsx)(
                                                    "div",
                                                    {
                                                        className: tw.Z2,
                                                        children: (0, o.jsx)(eb.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                O === tY.SORT_OUT
                                                    ? (n = tw.MW)
                                                    : O === tY.SHUFFLE_IN
                                                      ? (n = tw.aS)
                                                      : O === tY.SORT_IN && (n = tw.F7);
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
                                                    children: (0, o.jsx)(eA.A, {
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
var t6 = n(449543),
    t7 = n(843793);
let t9 = function (e) {
    let { block: t, handleTransition: n, tab: s } = e,
        l = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, eL.Mk)(s, "FramesProductShelfBlock"),
        a = (0, tJ.A)(),
        r = c.useMemo(() => a(t.rankedSkuIds), [t.rankedSkuIds, a]),
        d = (0, ef.X)(r),
        { analyticsLocations: g } = (0, p.Ay)(tD.A.COLLECTIBLES_SHOP_SHELF),
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
                  className: u()(t7.kL, tw.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, o.jsx)("img", {
                              className: t7.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, o.jsxs)("div", {
                          className: t7.Qs,
                          children: [
                              (0, o.jsxs)("div", {
                                  className: t7.wx,
                                  children: [
                                      (0, o.jsxs)("div", {
                                          className: t7.Jb,
                                          children: [
                                              (0, o.jsx)(tA.A, {
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
                              (0, o.jsx)(t6.A, {
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
                                                    children: (0, o.jsx)(eA.A, {
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
var t8 = n(269115),
    ne = n(43990),
    nt = n(408278),
    nn = n(789645),
    ns = n(976860),
    nl = n(49999),
    ni = n(576709),
    na = n(48093);
let nr = "GAME_SERVER_HOSTING_BANNER";
function no(e) {
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
                    tile_type: nr,
                    cta_name: e,
                });
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        ),
        m = c.useCallback(() => {
            g("go_to_game_server_hosting"), (0, ns.pX)(el.BVt.COLLECTIBLES_SHOP_WITH_TAB(B.G2.GAME_SERVERS));
        }, [g]),
        h = c.useCallback(() => {
            g("dismiss"),
                d(!0),
                !0 === t.isDismissible &&
                    (0, tC.d6)(tp.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, { dismissAction: nl.i.USER_DISMISS });
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
                                      type: nr,
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
        : (0, o.jsx)(ne.N, {
              theme: te.NJ.DARKER,
              children: (e) =>
                  (0, o.jsx)(t8.L, {
                      innerRef: l,
                      onChange: E,
                      threshold: 0,
                      children: (0, o.jsx)("div", {
                          ref: l,
                          className: u()(na.YB, e),
                          children: (0, o.jsxs)("div", {
                              className: na.kL,
                              children: [
                                  (0, o.jsx)("img", {
                                      className: na.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, o.jsx)("div", { className: na.uX }),
                                  !0 === t.isDismissible &&
                                      (0, o.jsx)("div", {
                                          className: na.b,
                                          children: (0, o.jsx)(nt.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: nn.P,
                                              onClick: h,
                                              "aria-label": D.intl.string(D.t.WAI6xu),
                                          }),
                                      }),
                                  (0, o.jsx)("div", {
                                      className: na.jE,
                                      children: (0, o.jsxs)("div", {
                                          className: na.rF,
                                          children: [
                                              (0, o.jsxs)("div", {
                                                  className: na.Z,
                                                  children: [
                                                      (0, o.jsx)(eu.D, {
                                                          className: na.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: D.intl.string(ni.default["34GMP9"]),
                                                      }),
                                                      (0, o.jsx)(Q.E, {
                                                          className: na.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: D.intl.string(ni.default.xMpGuO),
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
var nc = n(337183),
    nd = n(349288),
    nu = n(212407),
    ng = n(815280),
    nm = n(10675);
let nh = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, em.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: i } = (0, nu.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        c = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, o.jsxs)("div", {
        ref: s,
        className: nm.BX,
        children: [
            (0, o.jsx)("div", {
                className: nm.vK,
                children: null != l && (0, o.jsx)(ng.A, { bannerStatic: l, bannerAnimated: i }),
            }),
            (0, o.jsx)("div", {
                className: nm.HQ,
                children: (0, o.jsxs)("div", {
                    className: nm.Yn,
                    children: [
                        null != t.endTime ? (0, o.jsx)(ty, { endDate: t.endTime, size: "lg" }) : null,
                        (0, o.jsx)(eu.D, {
                            variant: "heading-xxl/bold",
                            className: nm.DD,
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
                                          (0, o.jsx)(nd.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: nm.CU,
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
var nE = n(189213),
    nx = n(290136),
    nf = n(478016),
    np = n(825484),
    nC = n(812993),
    nb = n(713517),
    n_ = n(914410),
    nS = n(34332),
    nj = n(597783),
    nv = n(61750);
function nA(e, t) {
    let n = c.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, T.bG)([$.A], () => $.A.getPurchases(n));
    return {
        readyToClaim: c.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var nL = n(162945),
    nI = n(858708);
let nN = c.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, nj.Z)(n),
            l = c.useRef(null),
            { isHoveringOrFocusing: i } = (0, nb.A)(l),
            { readyToClaim: a, collectibleProductSkuIds: r, collectedSkuIds: d } = nA(t, n),
            g = (0, T.bG)([$.A], () => $.A.isClaiming === n);
        return (0, o.jsx)(t8.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, o.jsx)("div", {
                ref: l,
                className: u()(nL.ty, nI.Q3, { [nL.yo]: i }),
                "aria-label": D.intl.formatToPlainString(D.t.Ez6aHE, { category: t.name }),
                children: (0, o.jsxs)("div", {
                    className: nL.qt,
                    children: [
                        (0, o.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: nI.L8,
                        }),
                        (0, o.jsx)("div", {
                            className: nL.N1,
                            children: (0, o.jsx)(nC.Lp, {
                                text: D.intl.string(D.t.rykAJ9),
                                disableColor: !0,
                                className: nI.HZ,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: nL.xQ,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: nI.xE,
                                    children: [
                                        (0, o.jsxs)("div", {
                                            className: nI.cs,
                                            children: [
                                                (0, o.jsx)(eu.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: nL.tZ,
                                                    children: D.intl.string(D.t["0mDmg/"]),
                                                }),
                                                (0, o.jsx)(eK.m, {
                                                    text: a
                                                        ? D.intl.string(D.t.cKH3tk)
                                                        : D.intl.formatToPlainString(D.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, o.jsx)("span", {
                                                        className: nI.ZB,
                                                        children: (0, o.jsx)(nx.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, o.jsx)("div", {
                                            className: nL.oh,
                                            "aria-hidden": !0,
                                            children: (0, o.jsxs)("div", {
                                                className: nI.L$,
                                                children: [
                                                    (0, o.jsx)(n_.Ay, {
                                                        variant: n_.qP.BLUE,
                                                        progress: d.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, o.jsxs)("div", {
                                                        className: u()(nI.__, { [nI.gF]: a }),
                                                        children: [
                                                            a
                                                                ? (0, o.jsx)(nf.U, {
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
                                    className: nL.Vs,
                                    children: (0, o.jsx)(np.e, {
                                        wrap: !1,
                                        className: nL.Ld,
                                        fullWidth: !0,
                                        children: (0, o.jsx)(ee.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    a &&
                                                        (0, nS.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = L.A.getProduct(n);
                                                                null != e &&
                                                                    (0, nv.A)({
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
                                                                        (0, o.jsx)(nE.Modal, {
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
    nO = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: i, tab: a } = e,
            r = (0, eL.Mk)(a, "RewardHeroBlockCards"),
            d = c.useMemo(() => L.A.getCategoryForProduct(i.rewardSkuId), [i.rewardSkuId]),
            u = (0, T.bG)([$.A], () => $.A.getPurchase(i.rewardSkuId)),
            { products: g } =
                ((t = (0, tJ.A)()),
                (n = c.useMemo(
                    () => (l ? [] : t(i.rankedSkuIds).filter((e) => e.skuId !== i.rewardSkuId || null != u)),
                    [l, t, i.rankedSkuIds, u, i.rewardSkuId],
                )),
                (s = (0, ex.p)()(n)),
                { products: (0, ef.X)(s) }),
            m = c.useMemo(
                () =>
                    !l &&
                    0 !== i.rankedSkuIds.length &&
                    !(g.length > 0) &&
                    i.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, i.rankedSkuIds, g.length],
            ),
            h = l || m,
            { readyToClaim: E } = nA(d, i.rewardSkuId),
            x = null == u && null != i.rewardSkuId && null != d;
        return (0, o.jsx)(t6.A, {
            gap: "xl",
            children: h
                ? (0, o.jsx)(o.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, o.jsx)(eb.A, {}, t)),
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          x &&
                              E &&
                              (0, o.jsx)(
                                  A.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, o.jsx)(nN, { category: d, rewardSkuId: i.rewardSkuId }),
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
                                            children: (0, o.jsx)(eA.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, tH.$b)(90);
let nk = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: tf.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    nT = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            i = (0, em.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            a = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
            { analyticsLocations: r } = (0, p.Ay)(tD.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: c,
                logoDisplayConfig: d,
                heroLogo: g,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, nu.Kk)(n),
            E = c?.responsive ?? !1,
            x = c?.backgroundStyle;
        return null != a && (t || n !== nk)
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
                                  (0, o.jsx)(ng.A, { bannerStatic: m, bannerAnimated: h, isResponsive: E }),
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
                                  (0, o.jsx)(nO, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var nR = n(222884);
let ny = function (e) {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, T.bG)([v.default], () => v.default.getCurrentUser()),
        i = (0, eL.Mk)(s, "ShelfBlock"),
        a = (0, T.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, tJ.A)(),
        d = c.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        g = (0, ef.X)(d),
        { analyticsLocations: m } = (0, p.Ay)(tD.A.COLLECTIBLES_SHOP_SHELF),
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
            className: u()(nR.mu, tw.YB, C ? nR.VA : nR.Ti),
            children: [
                C && (0, o.jsx)("img", { className: nR.iL, src: f, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: nR.Qs,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nR.wx,
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
                        (0, o.jsx)(t6.A, {
                            gap: "xl",
                            edgeFade: C ? "sm" : void 0,
                            children: g.map((e, n) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, o.jsx)(
                                          A.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, o.jsx)(eA.A, { skuId: e.skuId, prioritizedCurrency: i }),
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
var nM = n(465794),
    nB = n(69236),
    nP = n(44724),
    nD = n(421108),
    nH = n(873297);
let nF = function (e) {
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
        g = (0, nD.u)(r) ?? void 0,
        m = (0, nB.W8)(),
        h = c.useMemo(
            () =>
                "nitro" !== d || m
                    ? {
                          kind: "button",
                          text: D.intl.string(D.t.apFNLU),
                          onClick: () => (0, nP.default)({ applicationId: t }),
                          onMouseDown: () => (0, nP.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, o.jsx)(nM.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: P.pe.TIER_2,
                              buttonTextOverride: D.intl.string(D.t.pj0XBN),
                          }),
                      },
            [d, t, m],
        );
    return (0, o.jsx)(nH.A, {
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
    nG = n(770178),
    nU = n(929283),
    nz = n(273411);
let nV = [
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
function nW(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        i = L.A.getProduct(t.skuId),
        a = i?.items[0],
        r = i?.type,
        c = n + t.horizontalJitter;
    return (0, o.jsx)("div", {
        className: nz.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? c + t.transitionOffsetLeft : c,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != a && r === nw.R.AVATAR_DECORATION && (0, o.jsx)(nU.i, { item: a }),
    });
}
let nK = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, i] = c.useState(!1),
            [a, r] = c.useState([]),
            [d] = c.useState(() =>
                [...nV]
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
                className: u()(nz.rA, { [nz.Kb]: t, [nz.pp]: l }),
                children: a.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, o.jsx)(nW, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    nY = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = c.useRef(null),
            [l, i] = c.useState(0),
            a = c.useCallback(() => {
                null != s.current && i(s.current.offsetWidth);
            }, []);
        return (
            (0, nG.g)(s, a),
            (0, o.jsx)("div", {
                ref: s,
                className: nz.eL,
                children: (0, o.jsx)(nK, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var n$ = n(815021);
let nq = function (e) {
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
        { handleCardVisibilityChange: h } = (0, nj.Z)(m, "home", "marketing wide banner"),
        E = (0, A.uM)(),
        { bannerURL: x } = (0, nu.w$)(t),
        f = n === B.G2.ORBS,
        p = null != t.ctaRoute && "" !== t.ctaRoute,
        C = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
        b = null != t.logoURL && "" !== t.logoURL,
        _ = c.useCallback(() => {
            if ((g(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, tC.$l)(tp.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: nl.i.USER_DISMISS });
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
                            (0, nP.default)({ guildId: e, pageIndex: n });
                        }
                    } else (0, ns.pX)(e);
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
                        children: (0, o.jsx)(n$.J, {
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
                                          helpdeskArticle: t2.A.getArticleURL(el.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
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
    return (0, o.jsx)(ne.N, {
        theme: f ? void 0 : te.NJ.DARK,
        children: (e) =>
            (0, o.jsx)(t8.L, {
                innerRef: l,
                onChange: h,
                threshold: 0,
                children: p
                    ? (0, o.jsx)(eY.D, { innerRef: l, onClick: () => j(null), className: u()(e, v), children: I })
                    : (0, o.jsx)("div", { ref: l, className: u()(e, v), children: I }),
            }),
    });
};
var nZ = n(757036),
    nX = n(212739);
let nJ = (0, N.mj)({ name: "2026-05-orbs-shop-upsell-banner", kind: "user", defaultConfig: !1, variations: { 1: !0 } });
var nQ = n(462887),
    n0 = n(765671),
    n1 = n(303136),
    n2 = n(792656),
    n5 = n(363195),
    n4 = n(901123),
    n3 = n(894865),
    n6 = n(909340);
let n7 = function (e) {
        let { category: t, tab: n } = e,
            { ref: s, width: l } = (0, n0.Ay)(),
            i = null != l && l <= 560,
            a = (0, m.bG)([n5.A], () => (0, nQ.q)(n5.A.theme)),
            r = t?.skuId ?? "",
            { handleCardVisibilityChange: d } = (0, nj.Z)(r, "home", "marketing orbs upsell banner"),
            g = (0, A.uM)(),
            { analyticsLocations: h } = (0, p.Ay)(tD.A.COLLECTIBLES_SHOP_ORBS_UPSELL_BANNER),
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
            children: (0, o.jsx)(ne.N, {
                theme: el.NJ8.DARKER,
                children: (e) =>
                    (0, o.jsx)(t8.L, {
                        innerRef: s,
                        onChange: d,
                        threshold: 0,
                        children: (0, o.jsxs)("div", {
                            ref: s,
                            className: u()(e, n3.kL),
                            children: [
                                (0, o.jsx)(n1.A, { className: n3.Ki, src: n6.A }),
                                (0, o.jsxs)("div", {
                                    className: n3.Qs,
                                    children: [
                                        (0, o.jsx)(eu.D, {
                                            variant: "heading-xl/normal",
                                            color: "text-strong",
                                            className: n3.R_,
                                            children: D.intl.string(D.t["50J7mj"]),
                                        }),
                                        (0, o.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: n3.rf,
                                            children: D.intl.format(D.t.NU5ZId, { monthlyOrbsAmount: 250 }),
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: n3.R$,
                                            children: [
                                                (0, o.jsx)(n2.A, {
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
                                                        E(), (0, ns.pX)(n4.BV.NITRO_HOME);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, o.jsx)("img", {
                                    className: n3.Qw,
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
    n9 = function (e) {
        let { index: t, wideBannerBlock: n, tab: s } = e,
            l = nJ.useConfig({ location: "CollectiblesShopBannerSelector" }),
            i = (0, nZ.L)(P.PremiumTypes.TIER_2),
            a = (0, nX.O)();
        if (l && !i && !a && s === B.G2.ORBS) {
            let e = L.A.getCategoryByStoreListingId(n.categoryStoreListingId);
            return (0, o.jsx)(n7, { category: e, tab: s }, t);
        }
        return (0, o.jsx)(nq, { wideBannerBlock: n, tab: s }, t);
    },
    n8 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: i, includeUnpublished: a } = (0, eN.A)(),
            [r, d] = c.useState(!1),
            g = (0, A.uM)(),
            m = g?.sessionId ?? "",
            h = (0, K.H)({ location: "collectibles_shop_feed" });
        c.useEffect(() => {
            (0, ep.z)({
                sessionId: m,
                checkpoint: ep.t.SHOP_MOUNTED,
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
            } = (0, tS.y)(l, { noCache: i, includeUnpublished: a, logPerf: !0 }, { sessionId: m, tab: l }),
            C = c.useCallback(() => {
                p();
            }, [p]),
            b = c.useMemo(() => f.some((e) => e instanceof tj.p), [f])
                ? (0, o.jsx)(tA.A, { location: "CollectiblesShop" })
                : null;
        return (c.useEffect(() => {
            null != x ||
                E ||
                0 === f.length ||
                (0, ep.z)({
                    sessionId: m,
                    checkpoint: ep.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: i,
                });
        }, [x, E, f.length, a, i, m, l]),
        null != x)
            ? (0, o.jsx)(tx.h, { onRetry: C, errorOrigin: tx.A.SHOP_PAGE, errorMessage: x.message })
            : E || 0 === f.length
              ? (0, o.jsxs)("div", {
                    className: u()(tw.g4, tw.Of),
                    children: [
                        (0, o.jsx)(nc.A, { isLoading: E, handleTransition: t, tab: l }),
                        (0, o.jsx)(tz, { isLoading: E, handleTransition: t, categories: [] }),
                        (0, o.jsx)(t3, {
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
                                case tf.g.HERO:
                                    c = (0, o.jsx)(
                                        nc.A,
                                        { isLoading: E, handleTransition: t, heroBlock: e, tab: l, badge: b },
                                        a,
                                    );
                                    break;
                                case tf.g.FEATURED:
                                    c = (0, o.jsx)(
                                        tz,
                                        { isLoading: E, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case tf.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, o.jsx)(
                                        t3,
                                        {
                                            title:
                                                l === B.G2.ORBS ? D.intl.string(D.t.dFgeuZ) : D.intl.string(D.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: i?.type === tf.g.IMMERSIVE_BANNER ? tw.w : void 0,
                                            prioritizeUserDiscounts: l === B.G2.HOME,
                                            tab: l,
                                            orbsSupportedOnly: l === B.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case tf.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, tC.En)(tp.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, o.jsx)(n9, { index: a, wideBannerBlock: e, tab: l }, a);
                                    break;
                                case tf.g.FRAMES_BANNER:
                                    c = (0, o.jsx)(
                                        nq,
                                        {
                                            wideBannerBlock: tv.y.fromServer({
                                                type: tf.g.WIDE_BANNER,
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
                                case tf.g.FRAMES_PRODUCT_SHELF:
                                    c = (0, o.jsx)(t9, { block: e, handleTransition: t, tab: l }, a);
                                    break;
                                case tf.g.SHELF:
                                    c = (0, o.jsx)(ny, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case tf.g.COUNTDOWN_TIMER:
                                    (c = (0, o.jsx)(tB, { countdownTimerBlock: e, isVisible: r }, a)), (g = !0);
                                    break;
                                case tf.g.IMMERSIVE_BANNER:
                                    c = (0, o.jsx)(
                                        nh,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => d(!e) },
                                        a,
                                    );
                                    break;
                                case tf.g.REWARD_HERO:
                                    c = (0, o.jsx)(nT, { isLoading: E, handleTransition: t, heroBlock: e, tab: l }, a);
                                    break;
                                case tf.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, tC.En)(tp.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, o.jsx)(
                                        t_,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(no, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case tf.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, o.jsx)(
                                        t_,
                                        {
                                            blockType: e.type,
                                            children: (0, o.jsx)(nF, {
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
                                t_,
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
    se = function (e) {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = c.useRef(null),
            { handleScroll: i } = ea(l, n),
            a = (0, eI.U)(),
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
                                (0, o.jsx)(n8, {
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
                        (0, o.jsx)(nY, { peaking: g, transitioning: s === B.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var st = n(154323),
    sn = n(295811),
    ss = n(870216);
let sl = { "Any:personalization-header": t4 },
    si = { [ec.b.SHOP_HOME]: sl },
    sa = { "1465939725649973269": sl, "1478495181551440044": sl },
    sr = function () {
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
    so = { prioritizedCurrency: eL.Hi.ORBS };
function sc(e) {
    let { tab: t } = e,
        [n, s, l] = (0, T.yK)([ss.A], () => [ss.A.getLayout(t), ss.A.isFetchingLayout(t), ss.A.getLayoutFetchError(t)]),
        i = (0, T.bG)([st.A], () => st.A.get("shop_include_unpublished")),
        a = (0, T.bG)([L.A], () => L.A.skipNumCategories),
        r = c.useMemo(() => {
            let e = {};
            return !0 === i && (e.include_unpublished = !0), null != a && a > 0 && (e.skip_num_categories = a), e;
        }, [i, a]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (c.useEffect(() => {
            d && (0, nS.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== z.HOME || d || s
            ? null
            : (0, o.jsx)(eo.Z_, {
                  tenantId: el.FYj,
                  templateId: ec.b.SHOP_HOME,
                  requestParams: r,
                  overrides: si[ec.b.SHOP_HOME],
              });
    let u = (0, o.jsx)(eo.Qs, { tenantId: el.FYj, layoutId: n, overrides: sa[n] });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            t === z.ORBS && (0, o.jsx)(sr, {}),
            t === z.ORBS ? (0, o.jsx)(eL.v3.Provider, { value: so, children: u }) : u,
        ],
    });
}
function sd(e) {
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
let su = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, A.uM)(),
        i = (0, T.bG)([sn.A], () => sn.A.getShopLayoutUrlOverride()),
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
                            null != i && "" !== i ? (0, o.jsx)(sd, { url: i }) : (0, o.jsx)(sc, { tab: n }),
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
                    (0, o.jsx)(nY, { peaking: m, transitioning: s === B.Pf.OUT }),
                ],
            }),
        })
    );
};
var sg = n(564027);
let sm = function () {
        return (0, o.jsxs)("div", {
            className: sg.z,
            children: [
                (0, o.jsx)("img", {
                    className: sg.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: D.intl.string(D.t["p8+qtU"]),
                }),
                (0, o.jsx)(eu.D, { variant: "heading-xl/semibold", children: D.intl.string(D.t["p8+qtU"]) }),
                (0, o.jsx)(Q.E, { variant: "text-md/medium", children: D.intl.string(D.t.UEiyvs) }),
            ],
        });
    },
    sh = [B.G2.HOME, B.G2.ORBS];
function sE(e) {
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
            { noCache: n, includeUnpublished: s } = (0, eN.A)();
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
    let d = (0, K.H)({ location: "collectibles_content" }),
        u = (0, T.bG)([V.Ay], () => V.Ay.useReducedMotion),
        g = (0, U.W6)(),
        m = (0, U.zy)(),
        [h] = c.useState(() => {
            if ("POP" === g.action) {
                let e;
                return (e = eO), (eO = null), e ?? void 0;
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
        _ = (0, W.U)("CollectiblesContent"),
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
        ? (0, o.jsx)(sm, {})
        : null != r
          ? (0, o.jsx)(tx.h, { onRetry: a, errorMessage: r, errorOrigin: tx.A.SHOP_PAGE })
          : t === B.G2.HOME && _
            ? (0, o.jsx)(su, { tab: z.HOME, transitionState: l, handleTransition: j })
            : t === B.G2.ORBS && _
              ? (0, o.jsx)(su, { tab: z.ORBS, transitionState: l, handleTransition: j })
              : sh.includes(t)
                ? (0, o.jsx)(se, { handleTransition: j, tab: t, transitionState: l })
                : t === B.G2.GAME_SERVERS && d
                  ? (0, o.jsx)("div", {})
                  : (0, o.jsx)(th, {
                        tab: t,
                        categories: b,
                        initialCategoryId: E ?? C,
                        showFilterInitially: f && null == C,
                        onUnmount: () => {
                            x(void 0), p(!0);
                        },
                    });
}
var sx = n(956123),
    sf = n(766075),
    sp = n(667785);
let sC = { pink: "pinkCountdown" },
    sb = c.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: s, variant: l } = e,
            i = c.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            a = (0, tT.A)(i ?? 0, 1e3, void 0, null == i);
        if (null != i && Object.values(a).every((e) => 0 === e)) return null;
        let r = null != l ? sp[l] : void 0,
            d = null != l ? sp[sC[l]] : void 0;
        return (0, o.jsx)(eY.D, {
            className: u()(sp.nagBar, r),
            onClick: n,
            "aria-label": D.intl.string(D.t["wjws+K"]),
            children: (0, o.jsxs)("div", {
                className: sp.content,
                children: [
                    (0, o.jsx)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        className: sp.message,
                        children: t,
                    }),
                    null != i && (0, o.jsx)(ty, { endDate: i, size: "md", className: d, showSeconds: !0 }),
                ],
            }),
        });
    });
var s_ = n(870308),
    sS = n(650583);
function sj(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, h.useHasAnyModalOpen)();
    return (
        c.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === sS.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let sv = function (e) {
    var t;
    let { tab: n = B.G2.HOME } = e;
    (0, _.P)(b.a), (0, F.g)();
    let s = (0, f.A)((0, g.A)()),
        l = (0, m.bG)([v.default], () => v.default.getCurrentUser());
    (0, j.pE)();
    let i = (0, eD.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, U.zy)(),
                t = (0, U.g)(),
                n = c.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: c.useCallback(() => {
                    if (0 === s) {
                        (0, ns.aX)(), (0, sf.openUserSettings)();
                        return;
                    }
                    (0, ns.EL)() ? (0, ns.aX)() : (0, ns.pX)(el.BVt.APP);
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
        W = c.useMemo(() => [...z.values()], [z]),
        [K, Y] = c.useState(),
        $ = (0, m.bG)([L.A], () => L.A.getCategory(K)?.name),
        [q, Z] = c.useState();
    (0, ey.XU)(s);
    let X = c.useCallback((e, t) => {
            Z(e), Y(t);
        }, []),
        { selectedTab: J, transitionState: Q, transitionToTab: ee } = (0, w.o)(N);
    (0, C.HU)({ location: D.intl.string(D.t.pWG4ze) }), (0, k.uS)(s, J, $, Q, q), (0, k.N0)(J, l);
    let { dismissShopButtonDC: et } = (0, s_.A)();
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
        (0, eD.gB)();
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
                children: (0, o.jsx)(sj, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, o.jsxs)("div", {
                        className: u()(eS.bx, { [eD.jP]: i }),
                        ref: es,
                        inert: ei,
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(sx.G, { handleTransition: ee, selectedTab: J }),
                            null != er &&
                                (0, o.jsx)(sb, {
                                    message: er.message,
                                    onClick: () => ee(B.G2.HOME),
                                    variant: "pink",
                                    countdownEndDate: er.countdownEndDate,
                                }),
                            (0, o.jsx)("div", {
                                className: u()(eS.td, {
                                    [eS.RK]: Q === B.Pf.VISIBLE,
                                    [eS.in]: Q === B.Pf.IN,
                                    [eS.FD]: Q === B.Pf.OUT,
                                }),
                                children: (0, o.jsx)(sE, {
                                    tab: J,
                                    refreshCategories: V,
                                    transitionToTab: ee,
                                    transitionState: Q,
                                    categories: W,
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
