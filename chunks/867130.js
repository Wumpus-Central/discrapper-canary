(t.r(l), t.d(l, { default: () => ez }));
var s = t(477900),
    n = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(115560),
    o = t(192308),
    c = t(944791),
    d = t(444927),
    u = t(840251),
    h = t(688151);
let m = new u.E([], h.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var I = t(611924),
    C = t(744082),
    p = t(634110),
    g = t(371794),
    x = t(857512),
    j = t(662829),
    E = t(821816),
    L = t(806163),
    b = t(95362),
    N = t(516521),
    f = t(688810),
    A = t(354328),
    _ = t(12678),
    k = t(706113),
    T = t(841702),
    O = t(983545),
    v = t(685491),
    S = t(235939);
(t(323874), t(14289), t(35956), t(321073));
var y = t(575593),
    R = t(651162),
    B = t(855986),
    P = t(534514),
    G = t(821609),
    D = t(40474),
    F = t(151869),
    M = t(287809),
    U = t(129230),
    w = t(161918),
    H = t(945810);
let V = { enabled: !1 },
    X = (0, H.mj)({
        name: "2026-10-shop-twelve-days-promo",
        kind: "user",
        defaultConfig: V,
        variations: { 0: V, 1: { enabled: !0 } },
    });
var K = t(511265),
    W = t(304210),
    Y = t(350172),
    z = t(730202),
    $ = t(510801),
    Z = t(652215),
    J = t(812760),
    q = t(442036),
    Q = t(454688),
    ee = t(758836),
    el = t(521420);
function et(e) {
    return e.id;
}
function es(e) {
    let { block: l, listItemProps: t } = e,
        a = (0, x.uM)(),
        { onCtaClick: i } = l,
        r = n.useCallback(
            (e) => {
                (U.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: a?.sessionId,
                    page_type: ee.G2.COLLECTION_INDEX,
                    page_section: a?.pageSection,
                    page_category: a?.pageCategory,
                    tile_type: "MARKETING_BLOCK",
                    tile_position: String(a?.tilePosition),
                    cta_name: e,
                }),
                    i());
            },
            [a?.sessionId, a?.pageSection, a?.pageCategory, a?.tilePosition, i],
        ),
        o = n.useCallback(() => {
            r("Take me there button");
        }, [r]),
        c = n.useCallback(() => {
            r(null);
        }, [r]);
    return (0, s.jsx)(Q.Ay, {
        layout: Q.uf.CAROUSEL,
        backgroundImageUrl: l.assetUrl,
        title: { text: l.title, variant: "heading-lg/semibold", className: el.D },
        ctaText: l.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: t,
    });
}
function en(e) {
    let { block: l, index: t, listItemProps: a } = e,
        i = n.useMemo(
            () => ({
                categoryPosition: t,
                pageCategory: l.id,
                pageSection: "collection_marketing_blocks",
                tilePosition: t,
            }),
            [l.id, t],
        );
    return (0, s.jsx)(x.R9, { newValue: i, children: (0, s.jsx)(es, { block: l, listItemProps: a }) });
}
function ea(e, l, t) {
    return (0, s.jsx)(en, { block: e, index: t, listItemProps: l });
}
function ei(e) {
    let { section: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(P.D, { variant: "heading-lg/semibold", className: el.R, children: l.title }),
            (0, s.jsx)(F.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: et, renderItem: ea }),
        ],
    });
}
var er = t(987421),
    eo = t(484469),
    ec = t(834730),
    ed = t(683421);
function eu(e) {
    let { day: l, skuId: t, tilePosition: n, aspectRatio: a, className: r } = e;
    return (0, s.jsxs)("li", {
        className: i()(ed.Vs, ed.Ml, r),
        style: { "--custom-calendar-tile-aspect-ratio": a },
        children: [
            (0, s.jsx)(x.R9, { newValue: { tilePosition: n }, children: (0, s.jsx)(er.A, { skuId: t }) }),
            (0, s.jsx)(ec.E, {
                className: ed.vg,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: l,
            }),
        ],
    });
}
var eh = t(517352),
    em = t(462887),
    eI = t(736653),
    eC = t(775602),
    ep = t(412260),
    eg = t(498470),
    ex = t(807098),
    ej = t(223311),
    eE = t(65238),
    eL = t(792996),
    eb = t(196231),
    eN = t(64018),
    ef = t(215894),
    eA = t(785941);
let e_ = (e) => {
    let { heroBlock: l, handleTransition: t } = e,
        { collectionSale: n, handleSaleEnd: a } = (0, ef.A)(l.categorySkuId);
    return null != n
        ? (0, s.jsx)(eA.A, {
              heroBlock: l,
              collectionSale: n,
              handleTransition: t,
              tab: ee.G2.COLLECTION_INDEX,
              onSaleEnd: a,
              hideCards: !0,
              hideCountdownCTA: !0,
          })
        : (0, s.jsx)(eN.A, { heroBlock: l, isLoading: !1, tab: ee.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var ek = t(146053);
function eT(e) {
    return e.skuId;
}
function eO(e) {
    let l = (0, A.A)("shop_include_unpublished"),
        { category: t } = (0, k.A)(e, { includeUnpublished: l, includePricing: !0 });
    return t ?? void 0;
}
function ev(e) {
    return e.type === y.R.VARIANTS_GROUP &&
        null != e.variants &&
        e.variants.length > 0 &&
        e.variants.every((e) => e.type === y.R.PROFILE_EFFECT)
        ? y.R.PROFILE_EFFECT
        : e.type;
}
let eS = { aspectRatio: "1 / 1" },
    ey = {
        [y.R.PROFILE_EFFECT]: { className: ek.I5, aspectRatio: "1 / 2" },
        [y.R.BUNDLE]: { className: ek.kP, aspectRatio: "2 / 1" },
    };
function eR(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: ek.fr,
        children: l.map((e, l) => {
            let { className: t, aspectRatio: n } = ey[ev(e)] ?? eS;
            return (0, s.jsx)(
                x.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, s.jsx)(er.A, { skuId: e.skuId, cardClassName: t, aspectRatio: n }),
                },
                e.skuId,
            );
        }),
    });
}
function eB(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: ek.aD,
        children: (0, s.jsx)("ol", {
            className: i()(ek.fr, ek.ZP),
            children: l.map((e, t) => {
                if (e?.skuId == null) return null;
                let n = t + 1,
                    a = t === l.length - 1,
                    r = a ? eS : (ey[ev(e)] ?? eS);
                return (0, s.jsx)(
                    eu,
                    {
                        day: n,
                        skuId: e.skuId,
                        tilePosition: t,
                        aspectRatio: r.aspectRatio,
                        className: i()(ek.Pu, r.className, { [ek.pr]: a }),
                    },
                    n,
                );
            }),
        }),
    });
}
function eP(e) {
    let { category: l } = e;
    (0, L.zy)();
    let t = X.useConfig({ location: "collection_index_page" }).enabled && !1,
        n = (0, B.bG)([M.default], () => M.default.getCurrentUser()),
        a = (0, K.p)(),
        i = null != (0, W.ty)(l.skuId),
        r = a(l.products);
    return t || (null != n && 0 !== r.length)
        ? (0, s.jsxs)("div", {
              className: ek.hd,
              children: [
                  i && (0, s.jsx)(q.A, { className: ek.aQ }),
                  t ? (0, s.jsx)(eB, { products: l.products }) : (0, s.jsx)(eR, { products: r }),
              ],
          })
        : null;
}
function eG(e) {
    let { currentCategorySkuId: l, handleTransition: t } = e,
        { categories: a } = (function (e) {
            let { anchorCollectionId: l, limit: t } = e,
                s = n.useMemo(() => ({ applicationId: Z.FYj, anchorCollectionId: l ?? "", limit: t }), [l, t]),
                a = null != l && "" !== l,
                i = (0, Y.HX)(s);
            n.useEffect(() => {
                a && (0, Y.Su)(s);
            }, [a, s]);
            let { collectionIds: r, fetchState: o } = (0, B.cf)(
                    [z.A],
                    () => ({
                        collectionIds: z.A.getCollectionsAfterIds(i),
                        fetchState: z.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                c = n.useMemo(() => (a ? (r ?? []) : []), [a, r]),
                d = c.join(","),
                u = (0, B.cf)(
                    [z.A],
                    () => {
                        let e = {};
                        for (let l of c) e[l] = z.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [c],
                );
            return {
                categories: n.useMemo(
                    () =>
                        c
                            .map((e) => u[e])
                            .filter((e) => null != e)
                            .map((e) => $.A.fromStorefrontCollectionRecord(e)),
                    [d, u],
                ),
                isLoading: a && null == r && "error" !== o,
            };
        })({ anchorCollectionId: l, limit: 12 }),
        i = n.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !ee.MS.some((l) => {
                    let { categorySkuId: t } = l;
                    return t === e.skuId;
                }),
            [l],
        ),
        r = n.useMemo(() => a.filter(i).slice(0, 8), [a, i]);
    return 0 === r.length
        ? null
        : (0, s.jsxs)("div", {
              className: ek.t3,
              children: [
                  (0, s.jsx)("div", {
                      className: ek.bb,
                      children: (0, s.jsx)(P.D, {
                          variant: "heading-lg/semibold",
                          children: eL.intl.string(eL.t.EhRZ9o),
                      }),
                  }),
                  (0, s.jsx)(
                      F.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: eT,
                          renderItem: (e, l, n) =>
                              (0, s.jsx)(eD, { category: e, index: n, handleTransition: t, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eD(e) {
    let { category: l, index: t, handleTransition: n, listItemProps: a } = e;
    return (0, s.jsx)(x.R9, {
        newValue: { categoryPosition: t, pageCategory: l.name, pageSection: "related_drops", tilePosition: t },
        children: (0, s.jsx)(eb.S, {
            layout: Q.uf.CAROUSEL,
            category: l,
            handleTransition: n,
            pageType: ee.G2.COLLECTION_INDEX,
            listItemProps: a,
        }),
    });
}
let eF = [
    { tab: ee.G2.AVATAR_DECORATIONS, label: () => eL.intl.string(eL.t.dRZYNE) },
    { tab: ee.G2.PROFILE_EFFECTS, label: () => eL.intl.string(eL.t["1cNjtx"]) },
    { tab: ee.G2.NAMEPLATES, label: () => eL.intl.string(eL.t.V68Fqz) },
    { tab: ee.G2.PROFILE_FRAMES, label: () => eL.intl.string(eL.t.ecTJkR) },
    { tab: ee.G2.BUNDLES, label: () => eL.intl.string(eL.t.FYFpps) },
];
function eM() {
    let e = (0, L.W6)();
    return (0, s.jsxs)("div", {
        className: ek.nb,
        children: [
            (0, s.jsx)(P.D, { variant: "heading-sm/semibold", children: eL.intl.string(eL.t.Yr70c4) }),
            (0, s.jsx)("div", {
                className: ek.J2,
                children: eF.map((l) => {
                    let { tab: t, label: n } = l;
                    return (0, s.jsx)(
                        G.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(Z.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)) },
                        t,
                    );
                }),
            }),
        ],
    });
}
function eU(e) {
    let { collectionId: l } = e,
        t = (0, L.W6)(),
        a = (0, x.uM)(),
        r = eO(l)?.name,
        o = n.useMemo(
            () => [
                { id: "shop_all", label: eL.intl.string(eL.t.xFcotU) },
                { id: "collection", label: r ?? "" },
            ],
            [r],
        ),
        c = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (U.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: ee.G2.COLLECTION_INDEX,
                        page_category: r,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    t.push(Z.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.CATALOG)));
            },
            [t, a?.sessionId, l, r],
        ),
        d = n.useCallback(
            (e, l) =>
                (0, s.jsxs)("span", {
                    className: i()(ek.u, { [ek.kG]: l }),
                    children: [e.label, !l && (0, s.jsx)("span", { className: ek.Tl, children: "/" })],
                }),
            [],
        );
    return (0, s.jsx)(D.A, {
        className: ek.C2,
        separatorClassName: ek.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: d,
    });
}
function ew() {
    return (0, s.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, s.jsx)(eN.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: ee.G2.COLLECTION_INDEX }),
            (0, s.jsx)("div", {
                className: ek.hd,
                children: (0, s.jsx)("div", {
                    className: ek.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, s.jsx)(eo.A, {}, l)),
                }),
            }),
            (0, s.jsxs)("div", {
                className: ek.t3,
                children: [
                    (0, s.jsx)("div", { className: ek.bb, children: (0, s.jsx)("div", { className: ek.M$ }) }),
                    (0, s.jsxs)("div", { className: ek.A9, children: [(0, s.jsx)(Q.R3, {}), (0, s.jsx)(Q.R3, {})] }),
                ],
            }),
        ],
    });
}
let eH = function (e) {
    var l;
    let t,
        a,
        i,
        r,
        o,
        c,
        { collectionId: d } = e,
        u = (0, L.W6)(),
        h = eO(d),
        m =
            ((t = (0, ej.A)(Z.FYj)),
            (l = eh.oW.COLLECTION_PAGE_MARKETING_BLOCK),
            (a = (0, B.yK)([ep.A], () => ep.A.getMarketingComponentsBySurfaceAcrossPromotions(l), [l])),
            (i = (0, em.M)((0, eI.Ay)())),
            (r = (0, B.bG)([eC.Ay], () => eC.Ay.useReducedMotion)),
            (o = n.useMemo(
                () =>
                    a.map((e) => {
                        let { title: l, art: t, button: s } = e.surface;
                        return {
                            id: e.id,
                            title: l,
                            assetUrl: (0, ex.c)(t, i, r) ?? "",
                            ctaText: s?.copy ?? "",
                            onCtaClick: (0, eg.h)({
                                buttonAction: s?.buttonAction,
                                deeplinkSection: s?.deeplinkSection,
                                applicationId: s?.navigableStorefrontApplicationId?.value,
                                shopCollectionId: s?.shopCollectionId?.value,
                            }),
                        };
                    }),
                [a, i, r],
            )),
            null == (c = (0, eE.NN)(t)) ||
            c.collectionId !== d ||
            !c.showUpsellBlocks ||
            (t?.endsAt != null && t.endsAt <= new Date()) ||
            0 === o.length
                ? null
                : { title: eL.intl.string(eL.t.IXKfvy), blocks: o }),
        I = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && u.push(Z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [u],
        ),
        C = n.useMemo(
            () =>
                null == h
                    ? null
                    : {
                          rankedSkuIds: h.heroRanking ?? [],
                          name: h.name,
                          unpublishedAt: h.unpublishedAt,
                          categorySkuId: h.skuId,
                          summary: h.summary,
                          type: R.g.HERO,
                          categoryStoreListingId: h.storeListingId,
                          bannerDisplayConfig: h.heroBannerDisplayConfig,
                          logoDisplayConfig: h.heroLogoDisplayConfig,
                          heroLogoUrl: h.heroLogoUrl,
                          heroBannerUrl: h.heroBannerUrl,
                          heroBannerAnimatedUrl: h.heroBannerAnimatedUrl,
                          heroRiveUrl: h.heroRiveUrl,
                      },
            [h],
        );
    if (null == h) return null;
    let p = null != h.heroBannerUrl || null != h.heroRiveUrl;
    return (0, s.jsx)(w.iM, {
        tab: ee.G2.COLLECTION_INDEX,
        children: (0, s.jsxs)("div", {
            className: ek.kL,
            children: [
                p && null != C
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)("div", {
                                  className: ek.rz,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: ek.zn,
                                          children: (0, s.jsx)(eU, { collectionId: d }),
                                      }),
                                      (0, s.jsx)(e_, { heroBlock: C, handleTransition: I }),
                                  ],
                              }),
                              (0, s.jsx)(eP, { category: h }),
                              null != m
                                  ? (0, s.jsx)("div", { className: ek.t3, children: (0, s.jsx)(ei, { section: m }) })
                                  : (0, s.jsx)(eG, { currentCategorySkuId: h.skuId, handleTransition: I }, h.skuId),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: ek.AW,
                          children: [
                              (0, s.jsx)("div", { className: ek.zn, children: (0, s.jsx)(eU, { collectionId: d }) }),
                              (0, s.jsx)("div", { className: ek.$T, children: (0, s.jsx)(J.A, { category: h }) }),
                              (0, s.jsx)(eP, { category: h }),
                              null != m
                                  ? (0, s.jsx)("div", { className: ek.t3, children: (0, s.jsx)(ei, { section: m }) })
                                  : (0, s.jsx)(eG, { currentCategorySkuId: h.skuId, handleTransition: I }, h.skuId),
                          ],
                      }),
                (0, s.jsx)(eM, {}),
            ],
        }),
    });
};
var eV = t(415926);
function eX(e) {
    let { scrollerRef: l, children: t } = e,
        { handleScroll: n } = (0, eV.r)(l, ee.G2.COLLECTION_INDEX);
    return (0, s.jsx)(N.Ch, { ref: l, onScroll: n, children: t });
}
let eK = function (e) {
    let { collectionId: l, sessionId: t } = e,
        a = n.useRef(null),
        { selectedTab: i, transitionToTab: r, transitionState: o } = (0, O.oI)(ee.G2.COLLECTION_INDEX);
    (0, T.Wg)(!0);
    let c = (0, A.A)("shop_include_unpublished"),
        { category: d, state: u } = (0, k.A)(l, { includeUnpublished: c, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: m } = (0, _.lC)(ee.G2.COLLECTION_INDEX);
    return ((0, _.uS)(t, i, h?.name, o, { enabled: null != h }),
    n.useEffect(() => {
        a.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== u && null == h)
        ? (0, s.jsx)(L.rd, { to: Z.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, s.jsx)(L.rd, { to: Z.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.ORBS) })
          : null == h
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(v.G, { handleTransition: r, selectedTab: i, selectedCollectionId: l }),
                      (0, s.jsx)(b.Ip, { children: (0, s.jsx)(ew, {}) }),
                  ],
              })
            : (0, s.jsxs)(f.f5, {
                  value: m,
                  children: [
                      (0, s.jsx)(v.G, { handleTransition: r, selectedTab: i, selectedCollectionId: l }),
                      (0, s.jsx)(S.A, { tab: i, handleTransition: r }),
                      (0, s.jsx)(eX, { scrollerRef: a, children: (0, s.jsx)(eH, { collectionId: l }) }),
                  ],
              });
};
var eW = t(460348),
    eY = t(170522);
let ez = (e) => {
    let { tab: l, collectionId: t } = e;
    (0, I.P)(m);
    let a = (0, d.A)(() => (0, r.A)()),
        u = (0, eW.yB)("CollectiblesShop");
    ((0, eW.gB)(u),
        (0, p.pE)(),
        (0, j.X_)(),
        (0, C.A)(Z.FYj),
        n.useEffect(() => {
            (0, g.rW)();
        }, []),
        n.useEffect(() => {
            (0, c.I)(Z.BVt.COLLECTIBLES_SHOP);
        }, []));
    let h = n.useMemo(() => ({ sessionId: a }), [a]),
        L = n.useRef(null),
        b = (0, o.Rv)();
    return (0, s.jsx)(x.R9, {
        newValue: h,
        children: (0, s.jsx)("div", {
            className: i()(eY.bx, { [eW.jP]: u }),
            ref: L,
            inert: b,
            tabIndex: -1,
            children:
                null != t && "" !== t
                    ? (0, s.jsx)(eK, { collectionId: t, sessionId: a })
                    : (0, s.jsx)(E.default, { tab: l, sessionId: a, containerRef: L }),
        }),
    });
};
