(t.r(l), t.d(l, { default: () => e$ }));
var s = t(477900),
    n = t(582128),
    i = t(503698),
    a = t.n(i),
    r = t(115560),
    o = t(192308),
    c = t(944791),
    d = t(444927),
    u = t(840251),
    h = t(688151);
let m = new u.E([], h.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var I = t(611924),
    p = t(744082),
    C = t(634110),
    g = t(371794),
    x = t(857512),
    j = t(662829),
    E = t(724874),
    L = t(821816),
    b = t(806163),
    N = t(95362),
    f = t(516521),
    A = t(688810),
    _ = t(354328),
    k = t(12678),
    O = t(706113),
    v = t(841702),
    T = t(983545),
    S = t(685491),
    y = t(235939);
(t(323874), t(14289), t(35956), t(321073));
var R = t(575593),
    B = t(651162),
    P = t(855986),
    D = t(534514),
    G = t(821609),
    F = t(40474),
    M = t(151869),
    U = t(287809),
    w = t(129230),
    H = t(161918),
    V = t(945810);
let X = { enabled: !1 },
    K = (0, V.mj)({
        name: "2026-10-shop-twelve-days-promo",
        kind: "user",
        defaultConfig: X,
        variations: { 0: X, 1: { enabled: !0 } },
    });
var W = t(511265),
    Y = t(304210),
    z = t(350172),
    $ = t(730202),
    Z = t(510801),
    J = t(652215),
    q = t(812760),
    Q = t(442036),
    ee = t(454688),
    el = t(758836),
    et = t(521420);
function es(e) {
    return e.id;
}
function en(e) {
    let { block: l, listItemProps: t } = e,
        i = (0, x.uM)(),
        { onCtaClick: a } = l,
        r = n.useCallback(
            (e) => {
                (w.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: i?.sessionId,
                    page_type: el.G2.COLLECTION_INDEX,
                    page_section: i?.pageSection,
                    page_category: i?.pageCategory,
                    tile_type: "MARKETING_BLOCK",
                    tile_position: String(i?.tilePosition),
                    cta_name: e,
                }),
                    a());
            },
            [i?.sessionId, i?.pageSection, i?.pageCategory, i?.tilePosition, a],
        ),
        o = n.useCallback(() => {
            r("Take me there button");
        }, [r]),
        c = n.useCallback(() => {
            r(null);
        }, [r]);
    return (0, s.jsx)(ee.Ay, {
        layout: ee.uf.CAROUSEL,
        backgroundImageUrl: l.assetUrl,
        title: { text: l.title, variant: "heading-lg/semibold", className: et.D },
        ctaText: l.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: t,
    });
}
function ei(e) {
    let { block: l, index: t, listItemProps: i } = e,
        a = n.useMemo(
            () => ({
                categoryPosition: t,
                pageCategory: l.id,
                pageSection: "collection_marketing_blocks",
                tilePosition: t,
            }),
            [l.id, t],
        );
    return (0, s.jsx)(x.R9, { newValue: a, children: (0, s.jsx)(en, { block: l, listItemProps: i }) });
}
function ea(e, l, t) {
    return (0, s.jsx)(ei, { block: e, index: t, listItemProps: l });
}
function er(e) {
    let { section: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(D.D, { variant: "heading-lg/semibold", className: et.R, children: l.title }),
            (0, s.jsx)(M.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: es, renderItem: ea }),
        ],
    });
}
var eo = t(987421),
    ec = t(484469),
    ed = t(834730),
    eu = t(683421);
function eh(e) {
    let { day: l, skuId: t, tilePosition: n, aspectRatio: i, className: r } = e;
    return (0, s.jsxs)("li", {
        className: a()(eu.Vs, eu.Ml, r),
        style: { "--custom-calendar-tile-aspect-ratio": i },
        children: [
            (0, s.jsx)(x.R9, { newValue: { tilePosition: n }, children: (0, s.jsx)(eo.A, { skuId: t }) }),
            (0, s.jsx)(ed.E, {
                className: eu.vg,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: l,
            }),
        ],
    });
}
var em = t(517352),
    eI = t(462887),
    ep = t(736653),
    eC = t(775602),
    eg = t(412260),
    ex = t(498470),
    ej = t(807098),
    eE = t(223311),
    eL = t(65238),
    eb = t(792996),
    eN = t(196231),
    ef = t(64018),
    eA = t(215894),
    e_ = t(785941);
let ek = (e) => {
    let { heroBlock: l, handleTransition: t } = e,
        { collectionSale: n, handleSaleEnd: i } = (0, eA.A)(l.categorySkuId);
    return null != n
        ? (0, s.jsx)(e_.A, {
              heroBlock: l,
              collectionSale: n,
              handleTransition: t,
              tab: el.G2.COLLECTION_INDEX,
              onSaleEnd: i,
              hideCards: !0,
              hideCountdownCTA: !0,
          })
        : (0, s.jsx)(ef.A, { heroBlock: l, isLoading: !1, tab: el.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var eO = t(146053);
function ev(e) {
    return e.skuId;
}
function eT(e) {
    let l = (0, _.A)("shop_include_unpublished"),
        { category: t } = (0, O.A)(e, { includeUnpublished: l, includePricing: !0 });
    return t ?? void 0;
}
function eS(e) {
    return e.type === R.R.VARIANTS_GROUP &&
        null != e.variants &&
        e.variants.length > 0 &&
        e.variants.every((e) => e.type === R.R.PROFILE_EFFECT)
        ? R.R.PROFILE_EFFECT
        : e.type;
}
let ey = { aspectRatio: "1 / 1" },
    eR = {
        [R.R.PROFILE_EFFECT]: { className: eO.I5, aspectRatio: "1 / 2" },
        [R.R.BUNDLE]: { className: eO.kP, aspectRatio: "2 / 1" },
    };
function eB(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: eO.fr,
        children: l.map((e, l) => {
            let { className: t, aspectRatio: n } = eR[eS(e)] ?? ey;
            return (0, s.jsx)(
                x.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, s.jsx)(eo.A, { skuId: e.skuId, cardClassName: t, aspectRatio: n }),
                },
                e.skuId,
            );
        }),
    });
}
function eP(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: eO.aD,
        children: (0, s.jsx)("ol", {
            className: a()(eO.fr, eO.ZP),
            children: l.map((e, t) => {
                if (e?.skuId == null) return null;
                let n = t + 1,
                    i = t === l.length - 1,
                    r = i ? ey : (eR[eS(e)] ?? ey);
                return (0, s.jsx)(
                    eh,
                    {
                        day: n,
                        skuId: e.skuId,
                        tilePosition: t,
                        aspectRatio: r.aspectRatio,
                        className: a()(eO.Pu, r.className, { [eO.pr]: i }),
                    },
                    n,
                );
            }),
        }),
    });
}
function eD(e) {
    let { category: l } = e;
    (0, b.zy)();
    let t = K.useConfig({ location: "collection_index_page" }).enabled && !1,
        n = (0, P.bG)([U.default], () => U.default.getCurrentUser()),
        i = (0, W.p)(),
        a = null != (0, Y.ty)(l.skuId),
        r = i(l.products);
    return t || (null != n && 0 !== r.length)
        ? (0, s.jsxs)("div", {
              className: eO.hd,
              children: [
                  a && (0, s.jsx)(Q.A, { className: eO.aQ }),
                  t ? (0, s.jsx)(eP, { products: l.products }) : (0, s.jsx)(eB, { products: r }),
              ],
          })
        : null;
}
function eG(e) {
    let { currentCategorySkuId: l, handleTransition: t } = e,
        { categories: i } = (function (e) {
            let { anchorCollectionId: l, limit: t } = e,
                s = n.useMemo(() => ({ applicationId: J.FYj, anchorCollectionId: l ?? "", limit: t }), [l, t]),
                i = null != l && "" !== l,
                a = (0, z.HX)(s);
            n.useEffect(() => {
                i && (0, z.Su)(s);
            }, [i, s]);
            let { collectionIds: r, fetchState: o } = (0, P.cf)(
                    [$.A],
                    () => ({
                        collectionIds: $.A.getCollectionsAfterIds(a),
                        fetchState: $.A.getCollectionsAfterFetchState(a),
                    }),
                    [a],
                ),
                c = n.useMemo(() => (i ? (r ?? []) : []), [i, r]),
                d = c.join(","),
                u = (0, P.cf)(
                    [$.A],
                    () => {
                        let e = {};
                        for (let l of c) e[l] = $.A.getCollectionOrSummary(l);
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
                            .map((e) => Z.A.fromStorefrontCollectionRecord(e)),
                    [d, u],
                ),
                isLoading: i && null == r && "error" !== o,
            };
        })({ anchorCollectionId: l, limit: 12 }),
        a = n.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !el.MS.some((l) => {
                    let { categorySkuId: t } = l;
                    return t === e.skuId;
                }),
            [l],
        ),
        r = n.useMemo(() => i.filter(a).slice(0, 8), [i, a]);
    return 0 === r.length
        ? null
        : (0, s.jsxs)("div", {
              className: eO.t3,
              children: [
                  (0, s.jsx)("div", {
                      className: eO.bb,
                      children: (0, s.jsx)(D.D, {
                          variant: "heading-lg/semibold",
                          children: eb.intl.string(eb.t.EhRZ9o),
                      }),
                  }),
                  (0, s.jsx)(
                      M.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: ev,
                          renderItem: (e, l, n) =>
                              (0, s.jsx)(eF, { category: e, index: n, handleTransition: t, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eF(e) {
    let { category: l, index: t, handleTransition: n, listItemProps: i } = e;
    return (0, s.jsx)(x.R9, {
        newValue: { categoryPosition: t, pageCategory: l.name, pageSection: "related_drops", tilePosition: t },
        children: (0, s.jsx)(eN.S, {
            layout: ee.uf.CAROUSEL,
            category: l,
            handleTransition: n,
            pageType: el.G2.COLLECTION_INDEX,
            listItemProps: i,
        }),
    });
}
let eM = [
    { tab: el.G2.AVATAR_DECORATIONS, label: () => eb.intl.string(eb.t.dRZYNE) },
    { tab: el.G2.PROFILE_EFFECTS, label: () => eb.intl.string(eb.t["1cNjtx"]) },
    { tab: el.G2.NAMEPLATES, label: () => eb.intl.string(eb.t.V68Fqz) },
    { tab: el.G2.PROFILE_FRAMES, label: () => eb.intl.string(eb.t.ecTJkR) },
    { tab: el.G2.BUNDLES, label: () => eb.intl.string(eb.t.FYFpps) },
];
function eU() {
    let e = (0, b.W6)();
    return (0, s.jsxs)("div", {
        className: eO.nb,
        children: [
            (0, s.jsx)(D.D, { variant: "heading-sm/semibold", children: eb.intl.string(eb.t.Yr70c4) }),
            (0, s.jsx)("div", {
                className: eO.J2,
                children: eM.map((l) => {
                    let { tab: t, label: n } = l;
                    return (0, s.jsx)(
                        G.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(J.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)) },
                        t,
                    );
                }),
            }),
        ],
    });
}
function ew(e) {
    let { collectionId: l } = e,
        t = (0, b.W6)(),
        i = (0, x.uM)(),
        r = eT(l)?.name,
        o = n.useMemo(
            () => [
                { id: "shop_all", label: eb.intl.string(eb.t.xFcotU) },
                { id: "collection", label: r ?? "" },
            ],
            [r],
        ),
        c = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (w.default.track(J.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: i?.sessionId,
                        sku_id: l,
                        page_type: el.G2.COLLECTION_INDEX,
                        page_category: r,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    t.push(J.BVt.COLLECTIBLES_SHOP_WITH_TAB(el.G2.CATALOG)));
            },
            [t, i?.sessionId, l, r],
        ),
        d = n.useCallback(
            (e, l) =>
                (0, s.jsxs)("span", {
                    className: a()(eO.u, { [eO.kG]: l }),
                    children: [e.label, !l && (0, s.jsx)("span", { className: eO.Tl, children: "/" })],
                }),
            [],
        );
    return (0, s.jsx)(F.A, {
        className: eO.C2,
        separatorClassName: eO.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: d,
    });
}
function eH() {
    return (0, s.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, s.jsx)(ef.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: el.G2.COLLECTION_INDEX }),
            (0, s.jsx)("div", {
                className: eO.hd,
                children: (0, s.jsx)("div", {
                    className: eO.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, s.jsx)(ec.A, {}, l)),
                }),
            }),
            (0, s.jsxs)("div", {
                className: eO.t3,
                children: [
                    (0, s.jsx)("div", { className: eO.bb, children: (0, s.jsx)("div", { className: eO.M$ }) }),
                    (0, s.jsxs)("div", { className: eO.A9, children: [(0, s.jsx)(ee.R3, {}), (0, s.jsx)(ee.R3, {})] }),
                ],
            }),
        ],
    });
}
let eV = function (e) {
    var l;
    let t,
        i,
        a,
        r,
        o,
        c,
        { collectionId: d } = e,
        u = (0, b.W6)(),
        h = eT(d),
        m =
            ((t = (0, eE.A)(J.FYj)),
            (l = em.oW.COLLECTION_PAGE_MARKETING_BLOCK),
            (i = (0, P.yK)([eg.A], () => eg.A.getMarketingComponentsBySurfaceAcrossPromotions(l), [l])),
            (a = (0, eI.M)((0, ep.Ay)())),
            (r = (0, P.bG)([eC.Ay], () => eC.Ay.useReducedMotion)),
            (o = n.useMemo(
                () =>
                    i.map((e) => {
                        let { title: l, art: t, button: s } = e.surface;
                        return {
                            id: e.id,
                            title: l,
                            assetUrl: (0, ej.c)(t, a, r) ?? "",
                            ctaText: s?.copy ?? "",
                            onCtaClick: (0, ex.h)({
                                buttonAction: s?.buttonAction,
                                deeplinkSection: s?.deeplinkSection,
                                applicationId: s?.navigableStorefrontApplicationId?.value,
                                shopCollectionId: s?.shopCollectionId?.value,
                            }),
                        };
                    }),
                [i, a, r],
            )),
            null == (c = (0, eL.NN)(t)) ||
            c.collectionId !== d ||
            !c.showUpsellBlocks ||
            (t?.endsAt != null && t.endsAt <= new Date()) ||
            0 === o.length
                ? null
                : { title: eb.intl.string(eb.t.IXKfvy), blocks: o }),
        I = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && u.push(J.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [u],
        ),
        p = n.useMemo(
            () =>
                null == h
                    ? null
                    : {
                          rankedSkuIds: h.heroRanking ?? [],
                          name: h.name,
                          unpublishedAt: h.unpublishedAt,
                          categorySkuId: h.skuId,
                          summary: h.summary,
                          type: B.g.HERO,
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
    let C = null != h.heroBannerUrl || null != h.heroRiveUrl;
    return (0, s.jsx)(H.iM, {
        tab: el.G2.COLLECTION_INDEX,
        children: (0, s.jsxs)("div", {
            className: eO.kL,
            children: [
                C && null != p
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)("div", {
                                  className: eO.rz,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eO.zn,
                                          children: (0, s.jsx)(ew, { collectionId: d }),
                                      }),
                                      (0, s.jsx)(ek, { heroBlock: p, handleTransition: I }),
                                  ],
                              }),
                              (0, s.jsx)(eD, { category: h }),
                              null != m
                                  ? (0, s.jsx)("div", { className: eO.t3, children: (0, s.jsx)(er, { section: m }) })
                                  : (0, s.jsx)(eG, { currentCategorySkuId: h.skuId, handleTransition: I }, h.skuId),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: eO.AW,
                          children: [
                              (0, s.jsx)("div", { className: eO.zn, children: (0, s.jsx)(ew, { collectionId: d }) }),
                              (0, s.jsx)("div", { className: eO.$T, children: (0, s.jsx)(q.A, { category: h }) }),
                              (0, s.jsx)(eD, { category: h }),
                              null != m
                                  ? (0, s.jsx)("div", { className: eO.t3, children: (0, s.jsx)(er, { section: m }) })
                                  : (0, s.jsx)(eG, { currentCategorySkuId: h.skuId, handleTransition: I }, h.skuId),
                          ],
                      }),
                (0, s.jsx)(eU, {}),
            ],
        }),
    });
};
var eX = t(415926);
function eK(e) {
    let { scrollerRef: l, children: t } = e,
        { handleScroll: n } = (0, eX.r)(l, el.G2.COLLECTION_INDEX);
    return (0, s.jsx)(f.Ch, { ref: l, onScroll: n, children: t });
}
let eW = function (e) {
    let { collectionId: l, sessionId: t } = e,
        i = n.useRef(null),
        { selectedTab: a, transitionToTab: r, transitionState: o } = (0, T.oI)(el.G2.COLLECTION_INDEX);
    (0, v.Wg)(!0);
    let c = (0, _.A)("shop_include_unpublished"),
        { category: d, state: u } = (0, O.A)(l, { includeUnpublished: c, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: m } = (0, k.lC)(el.G2.COLLECTION_INDEX);
    return ((0, k.uS)(t, a, h?.name, o, { enabled: null != h }),
    n.useEffect(() => {
        i.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== u && null == h)
        ? (0, s.jsx)(b.rd, { to: J.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, s.jsx)(b.rd, { to: J.BVt.COLLECTIBLES_SHOP_WITH_TAB(el.G2.ORBS) })
          : (0, s.jsxs)(A.f5, {
                value: m,
                children: [
                    (0, s.jsx)(S.G, { handleTransition: r, selectedTab: a, selectedCollectionId: l }),
                    null == h
                        ? (0, s.jsx)(N.Ip, { children: (0, s.jsx)(eH, {}) })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(y.A, { tab: a, handleTransition: r }),
                                  (0, s.jsx)(eK, { scrollerRef: i, children: (0, s.jsx)(eV, { collectionId: l }) }),
                              ],
                          }),
                ],
            });
};
var eY = t(460348),
    ez = t(170522);
let e$ = (e) => {
    let { tab: l, collectionId: t } = e;
    (0, I.P)(m);
    let i = (0, d.A)(() => (0, r.A)()),
        u = (0, eY.yB)("CollectiblesShop");
    ((0, eY.gB)(u),
        (0, C.pE)(),
        (0, j.X_)(),
        (0, p.A)(J.FYj),
        n.useEffect(() => {
            (0, g.rW)();
        }, []),
        n.useEffect(() => {
            (0, c.I)(J.BVt.COLLECTIBLES_SHOP);
        }, []));
    let h = n.useMemo(() => ({ sessionId: i }), [i]),
        b = n.useRef(null),
        N = (0, o.Rv)();
    return (0, s.jsx)(x.R9, {
        newValue: h,
        children: (0, s.jsx)("div", {
            className: a()(ez.bx, { [eY.jP]: u }),
            ref: b,
            inert: N,
            tabIndex: -1,
            children: (0, s.jsx)(E.Y, {
                children:
                    null != t && "" !== t
                        ? (0, s.jsx)(eW, { collectionId: t, sessionId: i })
                        : (0, s.jsx)(L.default, { tab: l, sessionId: i, containerRef: b }),
            }),
        }),
    });
};
