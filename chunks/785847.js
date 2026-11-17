(t.r(l), t.d(l, { default: () => e2 }));
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
var p = t(611924),
    I = t(744082),
    C = t(634110),
    g = t(371794),
    x = t(857512),
    E = t(662829),
    j = t(724874),
    L = t(821816),
    A = t(806163),
    _ = t(95362),
    f = t(516521),
    N = t(688810),
    b = t(354328),
    k = t(790297),
    O = t(706113),
    T = t(841702),
    S = t(983545),
    v = t(685491),
    R = t(235939);
t(321073);
var y = t(690352),
    B = t(575593),
    P = t(651162),
    G = t(855986),
    D = t(534514),
    M = t(821609),
    F = t(40474),
    U = t(151869),
    H = t(287809),
    w = t(129230),
    V = t(161918),
    X = t(195271),
    W = t(924473),
    K = t(511265),
    Y = t(304210),
    $ = t(350172),
    z = t(730202),
    Q = t(510801),
    q = t(652215),
    Z = t(436912),
    J = t(654512),
    ee = t(812760),
    el = t(28875),
    et = t(454688),
    es = t(758836),
    en = t(521420);
function ea(e) {
    return e.id;
}
function ei(e) {
    let { block: l, listItemProps: t } = e,
        a = (0, x.uM)(),
        { onCtaClick: i } = l,
        r = n.useCallback(
            (e) => {
                (w.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: a?.sessionId,
                    page_type: es.G2.COLLECTION_INDEX,
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
    return (0, s.jsx)(et.Ay, {
        layout: et.uf.CAROUSEL,
        backgroundImageUrl: l.assetUrl,
        title: { text: l.title, variant: "heading-lg/semibold", className: en.D },
        ctaText: l.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: t,
    });
}
function er(e) {
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
    return (0, s.jsx)(x.R9, { newValue: i, children: (0, s.jsx)(ei, { block: l, listItemProps: a }) });
}
function eo(e, l, t) {
    return (0, s.jsx)(er, { block: e, index: t, listItemProps: l });
}
function ec(e) {
    let { section: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(D.D, { variant: "heading-lg/semibold", className: en.R, children: l.title }),
            (0, s.jsx)(U.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: ea, renderItem: eo }),
        ],
    });
}
var ed = t(987421),
    eu = t(484469),
    eh = t(687461),
    em = t(198329),
    ep = t(579720),
    eI = t(517352),
    eC = t(462887),
    eg = t(736653),
    ex = t(775602),
    eE = t(412260),
    ej = t(498470),
    eL = t(807098),
    eA = t(223311),
    e_ = t(65238),
    ef = t(792996),
    eN = t(196231),
    eb = t(64018),
    ek = t(643306),
    eO = t(200420);
let eT = (e) => {
    let { heroBlock: l, handleTransition: t } = e,
        { collectionPromotion: n, handlePromotionEnd: a } = (0, ek.A)(l.categorySkuId);
    return null != n
        ? (0, s.jsx)(eO.A, {
              heroBlock: l,
              collectionPromotion: n,
              handleTransition: t,
              tab: es.G2.COLLECTION_INDEX,
              onPromotionEnd: a,
              hideCards: !0,
              forceHideCountdownCta: !0,
          })
        : (0, s.jsx)(eb.A, { heroBlock: l, isLoading: !1, tab: es.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var eS = t(146053);
function ev(e) {
    return e.skuId;
}
function eR(e) {
    let l = (0, b.A)("shop_include_unpublished"),
        { category: t } = (0, O.A)(e, { includeUnpublished: l, includePricing: !0 });
    return t ?? void 0;
}
let ey = { aspectRatio: "1 / 1" },
    eB = {
        [B.R.PROFILE_EFFECT]: { className: eS.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: eS.kP, aspectRatio: "2 / 1" },
    },
    eP = {
        [y.G.SMALL_SQUARE]: ey,
        [y.G.TALL]: { className: eS.I5, aspectRatio: "1 / 2" },
        [y.G.WIDE]: { className: eS.kP, aspectRatio: "2 / 1" },
        [y.G.LARGE_SQUARE]: { className: eS.pr, aspectRatio: "1 / 1" },
    },
    eG = Array.from({ length: 8 }, (e, l) => l);
function eD(e) {
    return (0, s.jsx)(eu.A, {}, e);
}
let eM = () => (0, s.jsx)("div", { className: eS.fr, children: eG.map(eD) });
function eF(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: eS.fr,
        children: l.map((e, l) => {
            let { className: t, aspectRatio: n } =
                eB[
                    e.type === B.R.VARIANTS_GROUP &&
                    null != e.variants &&
                    e.variants.length > 0 &&
                    e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                        ? B.R.PROFILE_EFFECT
                        : e.type
                ] ?? ey;
            return (0, s.jsx)(
                x.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, s.jsx)(ed.A, { skuId: e.skuId, cardClassName: t, aspectRatio: n }),
                },
                e.skuId,
            );
        }),
    });
}
let eU = [4, 3, 2],
    eH = (e) => {
        let { sequencedOffers: l, products: t, openPosition: a } = e,
            r = (0, ep.A)(l, t, a, !0),
            o = n.useMemo(() => {
                var e;
                let l;
                return (
                    (e = r.map((e) => {
                        let { cardShape: l } = e;
                        return l;
                    })),
                    (l = eU.map((l) => (0, em.Vv)(e, l))),
                    e.map((e, t) => {
                        let s = {};
                        return (
                            eU.forEach((e, n) => {
                                ((s[`--custom-calendar-${e}-row`] = l[n][t].row),
                                    (s[`--custom-calendar-${e}-column`] = l[n][t].column));
                            }),
                            s
                        );
                    })
                );
            }, [r]);
        return (0, s.jsx)("div", {
            className: eS.aD,
            children: (0, s.jsx)("ol", {
                className: i()(eS.fr, eS.ZP),
                children: r.map((e, l) => {
                    let { cardShape: t, tileProps: n } = e,
                        { className: a, aspectRatio: r } = eP[t] ?? eP[y.G.SMALL_SQUARE];
                    return (0, s.jsx)(eh.A, { ...n, aspectRatio: r, className: i()(eS.Pu, a), style: o[l] }, n.day);
                }),
            }),
        });
    };
function ew(e) {
    var l;
    let t,
        n,
        { category: a } = e,
        i =
            ((l = a.skuId),
            null == (t = (0, G.bG)([Z.A], () => Z.A.getSequencedOffersForCollection(l))) || 0 === t.promotions.length
                ? null
                : t),
        r = (0, X.t)("collection_index_page", { autoTrackExposure: null != i }).enabled,
        o = (0, W.A)(),
        c = (0, J.A)(a.skuId),
        d = (0, G.bG)([H.default], () => H.default.getCurrentUser()),
        u = (0, K.p)(),
        h = null != (0, Y.ty)(a.skuId),
        m = u(a.products);
    return null == i && (null == d || 0 === m.length)
        ? null
        : ((n =
              r && !o
                  ? (0, s.jsx)(eM, {})
                  : null != i && r
                    ? (0, s.jsx)(eH, { sequencedOffers: i, products: a.products, openPosition: c })
                    : (0, s.jsx)(eF, { products: m })),
          (0, s.jsxs)("div", {
              className: eS.hd,
              children: [h && (0, s.jsx)(el.A, { title: ef.intl.string(ef.t.Pla5Vk), className: eS.aQ }), n],
          }));
}
function eV(e) {
    let { currentCategorySkuId: l, handleTransition: t } = e,
        { categories: a } = (function (e) {
            let { anchorCollectionId: l, limit: t } = e,
                s = n.useMemo(() => ({ applicationId: q.FYj, anchorCollectionId: l ?? "", limit: t }), [l, t]),
                a = null != l && "" !== l,
                i = (0, $.HX)(s);
            n.useEffect(() => {
                a && (0, $.Su)(s);
            }, [a, s]);
            let { collectionIds: r, fetchState: o } = (0, G.cf)(
                    [z.A],
                    () => ({
                        collectionIds: z.A.getCollectionsAfterIds(i),
                        fetchState: z.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                c = n.useMemo(() => (a ? (r ?? []) : []), [a, r]),
                d = c.join(","),
                u = (0, G.cf)(
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
                            .map((e) => Q.A.fromStorefrontCollectionRecord(e)),
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
                !es.MS.some((l) => {
                    let { categorySkuId: t } = l;
                    return t === e.skuId;
                }),
            [l],
        ),
        r = n.useMemo(() => a.filter(i).slice(0, 8), [a, i]);
    return 0 === r.length
        ? null
        : (0, s.jsxs)("div", {
              className: eS.t3,
              children: [
                  (0, s.jsx)("div", {
                      className: eS.bb,
                      children: (0, s.jsx)(D.D, {
                          variant: "heading-lg/semibold",
                          children: ef.intl.string(ef.t.EhRZ9o),
                      }),
                  }),
                  (0, s.jsx)(
                      U.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: ev,
                          renderItem: (e, l, n) =>
                              (0, s.jsx)(eX, { category: e, index: n, handleTransition: t, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eX(e) {
    let { category: l, index: t, handleTransition: n, listItemProps: a } = e;
    return (0, s.jsx)(x.R9, {
        newValue: { categoryPosition: t, pageCategory: l.name, pageSection: "related_drops", tilePosition: t },
        children: (0, s.jsx)(eN.S, {
            layout: et.uf.CAROUSEL,
            category: l,
            handleTransition: n,
            pageType: es.G2.COLLECTION_INDEX,
            listItemProps: a,
        }),
    });
}
let eW = [
    { tab: es.G2.AVATAR_DECORATIONS, label: () => ef.intl.string(ef.t.dRZYNE) },
    { tab: es.G2.PROFILE_EFFECTS, label: () => ef.intl.string(ef.t["1cNjtx"]) },
    { tab: es.G2.NAMEPLATES, label: () => ef.intl.string(ef.t.V68Fqz) },
    { tab: es.G2.PROFILE_FRAMES, label: () => ef.intl.string(ef.t.ecTJkR) },
    { tab: es.G2.BUNDLES, label: () => ef.intl.string(ef.t.FYFpps) },
];
function eK() {
    let e = (0, A.W6)();
    return (0, s.jsxs)("div", {
        className: eS.nb,
        children: [
            (0, s.jsx)(D.D, { variant: "heading-sm/semibold", children: ef.intl.string(ef.t.Yr70c4) }),
            (0, s.jsx)("div", {
                className: eS.J2,
                children: eW.map((l) => {
                    let { tab: t, label: n } = l;
                    return (0, s.jsx)(
                        M.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(q.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)) },
                        t,
                    );
                }),
            }),
        ],
    });
}
function eY(e) {
    let { collectionId: l } = e,
        t = (0, A.W6)(),
        a = (0, x.uM)(),
        r = eR(l)?.name,
        o = n.useMemo(
            () => [
                { id: "shop_all", label: ef.intl.string(ef.t.xFcotU) },
                { id: "collection", label: r ?? "" },
            ],
            [r],
        ),
        c = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (w.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: es.G2.COLLECTION_INDEX,
                        page_category: r,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    t.push(q.BVt.COLLECTIBLES_SHOP_WITH_TAB(es.G2.CATALOG)));
            },
            [t, a?.sessionId, l, r],
        ),
        d = n.useCallback(
            (e, l) =>
                (0, s.jsxs)("span", {
                    className: i()(eS.u, { [eS.kG]: l }),
                    children: [e.label, !l && (0, s.jsx)("span", { className: eS.Tl, children: "/" })],
                }),
            [],
        );
    return (0, s.jsx)(F.A, {
        className: eS.C2,
        separatorClassName: eS.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: d,
    });
}
function e$() {
    return (0, s.jsxs)("div", {
        className: eS.kL,
        children: [
            (0, s.jsx)(eb.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: es.G2.COLLECTION_INDEX }),
            (0, s.jsx)("div", { className: eS.hd, children: (0, s.jsx)(eM, {}) }),
            (0, s.jsxs)("div", {
                className: eS.t3,
                children: [
                    (0, s.jsx)("div", { className: eS.bb, children: (0, s.jsx)("div", { className: eS.M$ }) }),
                    (0, s.jsxs)("div", { className: eS.A9, children: [(0, s.jsx)(et.R3, {}), (0, s.jsx)(et.R3, {})] }),
                ],
            }),
        ],
    });
}
let ez = function (e) {
    var l;
    let t,
        a,
        i,
        r,
        o,
        c,
        { collectionId: d } = e,
        u = (0, A.W6)(),
        h = eR(d),
        m =
            ((t = (0, eA.A)(q.FYj)),
            (l = eI.oW.COLLECTION_PAGE_MARKETING_BLOCK),
            (a = (0, G.yK)([eE.A], () => eE.A.getMarketingComponentsBySurfaceAcrossPromotions(l), [l])),
            (i = (0, eC.M)((0, eg.Ay)())),
            (r = (0, G.bG)([ex.Ay], () => ex.Ay.useReducedMotion)),
            (o = n.useMemo(
                () =>
                    a.map((e) => {
                        let { title: l, art: t, button: s } = e.surface;
                        return {
                            id: e.id,
                            title: l,
                            assetUrl: (0, eL.c)(t, i, r) ?? "",
                            ctaText: s?.copy ?? "",
                            onCtaClick: (0, ej.h)({
                                buttonAction: s?.buttonAction,
                                deeplinkSection: s?.deeplinkSection,
                                applicationId: s?.navigableStorefrontApplicationId?.value,
                                shopCollectionId: s?.shopCollectionId?.value,
                                giftModalDestination: s?.giftModalDestination,
                            }),
                        };
                    }),
                [a, i, r],
            )),
            null == (c = (0, e_.NN)(t)) ||
            c.collectionId !== d ||
            !c.showUpsellBlocks ||
            (t?.endsAt != null && t.endsAt <= new Date()) ||
            0 === o.length
                ? null
                : { title: ef.intl.string(ef.t.IXKfvy), blocks: o }),
        p = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && u.push(q.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [u],
        ),
        I = n.useMemo(
            () =>
                null == h
                    ? null
                    : {
                          rankedSkuIds: h.heroRanking ?? [],
                          name: h.name,
                          unpublishedAt: h.unpublishedAt,
                          categorySkuId: h.skuId,
                          summary: h.summary,
                          type: P.g.HERO,
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
    return (0, s.jsx)(V.iM, {
        tab: es.G2.COLLECTION_INDEX,
        children: (0, s.jsxs)("div", {
            className: eS.kL,
            children: [
                C && null != I
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)("div", {
                                  className: eS.rz,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eS.zn,
                                          children: (0, s.jsx)(eY, { collectionId: d }),
                                      }),
                                      (0, s.jsx)(eT, { heroBlock: I, handleTransition: p }),
                                  ],
                              }),
                              (0, s.jsx)(ew, { category: h }),
                              null != m
                                  ? (0, s.jsx)("div", { className: eS.t3, children: (0, s.jsx)(ec, { section: m }) })
                                  : (0, s.jsx)(eV, { currentCategorySkuId: h.skuId, handleTransition: p }, h.skuId),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: eS.AW,
                          children: [
                              (0, s.jsx)("div", { className: eS.zn, children: (0, s.jsx)(eY, { collectionId: d }) }),
                              (0, s.jsx)("div", { className: eS.$T, children: (0, s.jsx)(ee.A, { category: h }) }),
                              (0, s.jsx)(ew, { category: h }),
                              null != m
                                  ? (0, s.jsx)("div", { className: eS.t3, children: (0, s.jsx)(ec, { section: m }) })
                                  : (0, s.jsx)(eV, { currentCategorySkuId: h.skuId, handleTransition: p }, h.skuId),
                          ],
                      }),
                (0, s.jsx)(eK, {}),
            ],
        }),
    });
};
var eQ = t(415926);
function eq(e) {
    let { scrollerRef: l, children: t } = e,
        { handleScroll: n } = (0, eQ.r)(l, es.G2.COLLECTION_INDEX);
    return (0, s.jsx)(f.Ch, { ref: l, onScroll: n, children: t });
}
let eZ = function (e) {
    let { collectionId: l, sessionId: t } = e,
        a = n.useRef(null),
        { selectedTab: i, transitionToTab: r, transitionState: o } = (0, S.oI)(es.G2.COLLECTION_INDEX);
    (0, T.Wg)(!0);
    let c = (0, b.A)("shop_include_unpublished"),
        { category: d, state: u } = (0, O.A)(l, { includeUnpublished: c, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: m } = (0, k.lC)(es.G2.COLLECTION_INDEX);
    return ((0, k.uS)(t, i, h?.name, o, { enabled: null != h }),
    n.useEffect(() => {
        a.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== u && null == h)
        ? (0, s.jsx)(A.rd, { to: q.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, s.jsx)(A.rd, { to: q.BVt.COLLECTIBLES_SHOP_WITH_TAB(es.G2.ORBS) })
          : (0, s.jsxs)(N.f5, {
                value: m,
                children: [
                    (0, s.jsx)(v.G, { handleTransition: r, selectedTab: i, selectedCollectionId: l }),
                    null == h
                        ? (0, s.jsx)(_.Ip, { children: (0, s.jsx)(e$, {}) })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(R.A, { tab: i, handleTransition: r }),
                                  (0, s.jsx)(eq, { scrollerRef: a, children: (0, s.jsx)(ez, { collectionId: l }) }),
                              ],
                          }),
                ],
            });
};
var eJ = t(460348),
    e0 = t(170522);
let e2 = (e) => {
    let { tab: l, collectionId: t } = e;
    (0, p.P)(m);
    let a = (0, d.A)(() => (0, r.A)()),
        u = (0, eJ.yB)("CollectiblesShop");
    ((0, eJ.gB)(u),
        (0, C.pE)(),
        (0, E.X_)(),
        (0, I.A)(q.FYj),
        n.useEffect(() => {
            (0, g.rW)();
        }, []),
        n.useEffect(() => {
            (0, c.I)(q.BVt.COLLECTIBLES_SHOP);
        }, []));
    let h = n.useMemo(() => ({ sessionId: a }), [a]),
        A = n.useRef(null),
        _ = (0, o.Rv)();
    return (0, s.jsx)(x.R9, {
        newValue: h,
        children: (0, s.jsx)("div", {
            className: i()(e0.bx, { [eJ.jP]: u }),
            ref: A,
            inert: _,
            tabIndex: -1,
            children: (0, s.jsx)(j.Y, {
                children:
                    null != t && "" !== t
                        ? (0, s.jsx)(eZ, { collectionId: t, sessionId: a })
                        : (0, s.jsx)(L.default, { tab: l, sessionId: a, containerRef: A }),
            }),
        }),
    });
};
