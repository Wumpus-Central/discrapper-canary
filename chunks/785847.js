(t.r(l), t.d(l, { default: () => eq }));
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
    x = t(371794),
    g = t(857512),
    E = t(662829),
    j = t(724874),
    L = t(821816),
    A = t(806163),
    _ = t(95362),
    N = t(516521),
    b = t(688810),
    f = t(354328),
    k = t(12678),
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
    F = t(821609),
    M = t(40474),
    U = t(151869),
    H = t(287809),
    w = t(129230),
    V = t(161918),
    X = t(195271),
    W = t(511265),
    K = t(304210),
    Y = t(350172),
    $ = t(730202),
    z = t(510801),
    Q = t(652215),
    q = t(436912),
    Z = t(654512),
    J = t(812760),
    ee = t(442036),
    el = t(454688),
    et = t(758836),
    es = t(521420);
function en(e) {
    return e.id;
}
function ea(e) {
    let { block: l, listItemProps: t } = e,
        a = (0, g.uM)(),
        { onCtaClick: i } = l,
        r = n.useCallback(
            (e) => {
                (w.default.track(Q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: a?.sessionId,
                    page_type: et.G2.COLLECTION_INDEX,
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
    return (0, s.jsx)(el.Ay, {
        layout: el.uf.CAROUSEL,
        backgroundImageUrl: l.assetUrl,
        title: { text: l.title, variant: "heading-lg/semibold", className: es.D },
        ctaText: l.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: t,
    });
}
function ei(e) {
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
    return (0, s.jsx)(g.R9, { newValue: i, children: (0, s.jsx)(ea, { block: l, listItemProps: a }) });
}
function er(e, l, t) {
    return (0, s.jsx)(ei, { block: e, index: t, listItemProps: l });
}
function eo(e) {
    let { section: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(D.D, { variant: "heading-lg/semibold", className: es.R, children: l.title }),
            (0, s.jsx)(U.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: en, renderItem: er }),
        ],
    });
}
var ec = t(987421),
    ed = t(484469),
    eu = t(687461),
    eh = t(198329),
    em = t(579720),
    ep = t(517352),
    eI = t(462887),
    eC = t(736653),
    ex = t(775602),
    eg = t(412260),
    eE = t(498470),
    ej = t(807098),
    eL = t(223311),
    eA = t(65238),
    e_ = t(792996),
    eN = t(196231),
    eb = t(64018),
    ef = t(643306),
    ek = t(945152);
let eO = (e) => {
    let { heroBlock: l, handleTransition: t } = e,
        { collectionPromotion: n, handlePromotionEnd: a } = (0, ef.A)(l.categorySkuId);
    return null != n
        ? (0, s.jsx)(ek.A, {
              heroBlock: l,
              collectionPromotion: n,
              handleTransition: t,
              tab: et.G2.COLLECTION_INDEX,
              onPromotionEnd: a,
              hideCards: !0,
              forceHideCountdownCta: !0,
          })
        : (0, s.jsx)(eb.A, { heroBlock: l, isLoading: !1, tab: et.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var eT = t(146053);
function eS(e) {
    return e.skuId;
}
function ev(e) {
    let l = (0, f.A)("shop_include_unpublished"),
        { category: t } = (0, O.A)(e, { includeUnpublished: l, includePricing: !0 });
    return t ?? void 0;
}
let eR = { aspectRatio: "1 / 1" },
    ey = {
        [B.R.PROFILE_EFFECT]: { className: eT.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: eT.kP, aspectRatio: "2 / 1" },
    },
    eB = {
        [y.G.SMALL_SQUARE]: eR,
        [y.G.TALL]: { className: eT.I5, aspectRatio: "1 / 2" },
        [y.G.WIDE]: { className: eT.kP, aspectRatio: "2 / 1" },
        [y.G.LARGE_SQUARE]: { className: eT.pr, aspectRatio: "1 / 1" },
    };
function eP(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: eT.fr,
        children: l.map((e, l) => {
            let { className: t, aspectRatio: n } =
                ey[
                    e.type === B.R.VARIANTS_GROUP &&
                    null != e.variants &&
                    e.variants.length > 0 &&
                    e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                        ? B.R.PROFILE_EFFECT
                        : e.type
                ] ?? eR;
            return (0, s.jsx)(
                g.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, s.jsx)(ec.A, { skuId: e.skuId, cardClassName: t, aspectRatio: n }),
                },
                e.skuId,
            );
        }),
    });
}
let eG = [4, 3, 2],
    eD = (e) => {
        let { sequencedOffers: l, products: t, openPosition: a } = e,
            r = (0, em.A)(l, t, a, !0),
            o = n.useMemo(() => {
                var e;
                let l;
                return (
                    (e = r.map((e) => {
                        let { cardShape: l } = e;
                        return l;
                    })),
                    (l = eG.map((l) => (0, eh.Vv)(e, l))),
                    e.map((e, t) => {
                        let s = {};
                        return (
                            eG.forEach((e, n) => {
                                ((s[`--custom-calendar-${e}-row`] = l[n][t].row),
                                    (s[`--custom-calendar-${e}-column`] = l[n][t].column));
                            }),
                            s
                        );
                    })
                );
            }, [r]);
        return (0, s.jsx)("div", {
            className: eT.aD,
            children: (0, s.jsx)("ol", {
                className: i()(eT.fr, eT.ZP),
                children: r.map((e, l) => {
                    let { cardShape: t, tileProps: n } = e,
                        { className: a, aspectRatio: r } = eB[t] ?? eB[y.G.SMALL_SQUARE];
                    return (0, s.jsx)(eu.A, { ...n, aspectRatio: r, className: i()(eT.Pu, a), style: o[l] }, n.day);
                }),
            }),
        });
    };
function eF(e) {
    var l;
    let t,
        { category: n } = e,
        a =
            ((l = n.skuId),
            null == (t = (0, G.bG)([q.A], () => q.A.getSequencedOffersForCollection(l))) || 0 === t.promotions.length
                ? null
                : t),
        i = (0, X.t)("collection_index_page", { autoTrackExposure: null != a }).enabled,
        r = (0, Z.A)(n.skuId),
        o = (0, G.bG)([H.default], () => H.default.getCurrentUser()),
        c = (0, W.p)(),
        d = null != (0, K.ty)(n.skuId),
        u = c(n.products);
    return null == a && (null == o || 0 === u.length)
        ? null
        : (0, s.jsxs)("div", {
              className: eT.hd,
              children: [
                  d && (0, s.jsx)(ee.A, { className: eT.aQ }),
                  null != a && i
                      ? (0, s.jsx)(eD, { sequencedOffers: a, products: n.products, openPosition: r })
                      : (0, s.jsx)(eP, { products: u }),
              ],
          });
}
function eM(e) {
    let { currentCategorySkuId: l, handleTransition: t } = e,
        { categories: a } = (function (e) {
            let { anchorCollectionId: l, limit: t } = e,
                s = n.useMemo(() => ({ applicationId: Q.FYj, anchorCollectionId: l ?? "", limit: t }), [l, t]),
                a = null != l && "" !== l,
                i = (0, Y.HX)(s);
            n.useEffect(() => {
                a && (0, Y.Su)(s);
            }, [a, s]);
            let { collectionIds: r, fetchState: o } = (0, G.cf)(
                    [$.A],
                    () => ({
                        collectionIds: $.A.getCollectionsAfterIds(i),
                        fetchState: $.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                c = n.useMemo(() => (a ? (r ?? []) : []), [a, r]),
                d = c.join(","),
                u = (0, G.cf)(
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
                            .map((e) => z.A.fromStorefrontCollectionRecord(e)),
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
                !et.MS.some((l) => {
                    let { categorySkuId: t } = l;
                    return t === e.skuId;
                }),
            [l],
        ),
        r = n.useMemo(() => a.filter(i).slice(0, 8), [a, i]);
    return 0 === r.length
        ? null
        : (0, s.jsxs)("div", {
              className: eT.t3,
              children: [
                  (0, s.jsx)("div", {
                      className: eT.bb,
                      children: (0, s.jsx)(D.D, {
                          variant: "heading-lg/semibold",
                          children: e_.intl.string(e_.t.EhRZ9o),
                      }),
                  }),
                  (0, s.jsx)(
                      U.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: eS,
                          renderItem: (e, l, n) =>
                              (0, s.jsx)(eU, { category: e, index: n, handleTransition: t, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eU(e) {
    let { category: l, index: t, handleTransition: n, listItemProps: a } = e;
    return (0, s.jsx)(g.R9, {
        newValue: { categoryPosition: t, pageCategory: l.name, pageSection: "related_drops", tilePosition: t },
        children: (0, s.jsx)(eN.S, {
            layout: el.uf.CAROUSEL,
            category: l,
            handleTransition: n,
            pageType: et.G2.COLLECTION_INDEX,
            listItemProps: a,
        }),
    });
}
let eH = [
    { tab: et.G2.AVATAR_DECORATIONS, label: () => e_.intl.string(e_.t.dRZYNE) },
    { tab: et.G2.PROFILE_EFFECTS, label: () => e_.intl.string(e_.t["1cNjtx"]) },
    { tab: et.G2.NAMEPLATES, label: () => e_.intl.string(e_.t.V68Fqz) },
    { tab: et.G2.PROFILE_FRAMES, label: () => e_.intl.string(e_.t.ecTJkR) },
    { tab: et.G2.BUNDLES, label: () => e_.intl.string(e_.t.FYFpps) },
];
function ew() {
    let e = (0, A.W6)();
    return (0, s.jsxs)("div", {
        className: eT.nb,
        children: [
            (0, s.jsx)(D.D, { variant: "heading-sm/semibold", children: e_.intl.string(e_.t.Yr70c4) }),
            (0, s.jsx)("div", {
                className: eT.J2,
                children: eH.map((l) => {
                    let { tab: t, label: n } = l;
                    return (0, s.jsx)(
                        F.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(Q.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)) },
                        t,
                    );
                }),
            }),
        ],
    });
}
function eV(e) {
    let { collectionId: l } = e,
        t = (0, A.W6)(),
        a = (0, g.uM)(),
        r = ev(l)?.name,
        o = n.useMemo(
            () => [
                { id: "shop_all", label: e_.intl.string(e_.t.xFcotU) },
                { id: "collection", label: r ?? "" },
            ],
            [r],
        ),
        c = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (w.default.track(Q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: et.G2.COLLECTION_INDEX,
                        page_category: r,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    t.push(Q.BVt.COLLECTIBLES_SHOP_WITH_TAB(et.G2.CATALOG)));
            },
            [t, a?.sessionId, l, r],
        ),
        d = n.useCallback(
            (e, l) =>
                (0, s.jsxs)("span", {
                    className: i()(eT.u, { [eT.kG]: l }),
                    children: [e.label, !l && (0, s.jsx)("span", { className: eT.Tl, children: "/" })],
                }),
            [],
        );
    return (0, s.jsx)(M.A, {
        className: eT.C2,
        separatorClassName: eT.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: d,
    });
}
function eX() {
    return (0, s.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, s.jsx)(eb.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: et.G2.COLLECTION_INDEX }),
            (0, s.jsx)("div", {
                className: eT.hd,
                children: (0, s.jsx)("div", {
                    className: eT.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, s.jsx)(ed.A, {}, l)),
                }),
            }),
            (0, s.jsxs)("div", {
                className: eT.t3,
                children: [
                    (0, s.jsx)("div", { className: eT.bb, children: (0, s.jsx)("div", { className: eT.M$ }) }),
                    (0, s.jsxs)("div", { className: eT.A9, children: [(0, s.jsx)(el.R3, {}), (0, s.jsx)(el.R3, {})] }),
                ],
            }),
        ],
    });
}
let eW = function (e) {
    var l;
    let t,
        a,
        i,
        r,
        o,
        c,
        { collectionId: d } = e,
        u = (0, A.W6)(),
        h = ev(d),
        m =
            ((t = (0, eL.A)(Q.FYj)),
            (l = ep.oW.COLLECTION_PAGE_MARKETING_BLOCK),
            (a = (0, G.yK)([eg.A], () => eg.A.getMarketingComponentsBySurfaceAcrossPromotions(l), [l])),
            (i = (0, eI.M)((0, eC.Ay)())),
            (r = (0, G.bG)([ex.Ay], () => ex.Ay.useReducedMotion)),
            (o = n.useMemo(
                () =>
                    a.map((e) => {
                        let { title: l, art: t, button: s } = e.surface;
                        return {
                            id: e.id,
                            title: l,
                            assetUrl: (0, ej.c)(t, i, r) ?? "",
                            ctaText: s?.copy ?? "",
                            onCtaClick: (0, eE.h)({
                                buttonAction: s?.buttonAction,
                                deeplinkSection: s?.deeplinkSection,
                                applicationId: s?.navigableStorefrontApplicationId?.value,
                                shopCollectionId: s?.shopCollectionId?.value,
                            }),
                        };
                    }),
                [a, i, r],
            )),
            null == (c = (0, eA.NN)(t)) ||
            c.collectionId !== d ||
            !c.showUpsellBlocks ||
            (t?.endsAt != null && t.endsAt <= new Date()) ||
            0 === o.length
                ? null
                : { title: e_.intl.string(e_.t.IXKfvy), blocks: o }),
        p = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && u.push(Q.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
        tab: et.G2.COLLECTION_INDEX,
        children: (0, s.jsxs)("div", {
            className: eT.kL,
            children: [
                C && null != I
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)("div", {
                                  className: eT.rz,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eT.zn,
                                          children: (0, s.jsx)(eV, { collectionId: d }),
                                      }),
                                      (0, s.jsx)(eO, { heroBlock: I, handleTransition: p }),
                                  ],
                              }),
                              (0, s.jsx)(eF, { category: h }),
                              null != m
                                  ? (0, s.jsx)("div", { className: eT.t3, children: (0, s.jsx)(eo, { section: m }) })
                                  : (0, s.jsx)(eM, { currentCategorySkuId: h.skuId, handleTransition: p }, h.skuId),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: eT.AW,
                          children: [
                              (0, s.jsx)("div", { className: eT.zn, children: (0, s.jsx)(eV, { collectionId: d }) }),
                              (0, s.jsx)("div", { className: eT.$T, children: (0, s.jsx)(J.A, { category: h }) }),
                              (0, s.jsx)(eF, { category: h }),
                              null != m
                                  ? (0, s.jsx)("div", { className: eT.t3, children: (0, s.jsx)(eo, { section: m }) })
                                  : (0, s.jsx)(eM, { currentCategorySkuId: h.skuId, handleTransition: p }, h.skuId),
                          ],
                      }),
                (0, s.jsx)(ew, {}),
            ],
        }),
    });
};
var eK = t(415926);
function eY(e) {
    let { scrollerRef: l, children: t } = e,
        { handleScroll: n } = (0, eK.r)(l, et.G2.COLLECTION_INDEX);
    return (0, s.jsx)(N.Ch, { ref: l, onScroll: n, children: t });
}
let e$ = function (e) {
    let { collectionId: l, sessionId: t } = e,
        a = n.useRef(null),
        { selectedTab: i, transitionToTab: r, transitionState: o } = (0, S.oI)(et.G2.COLLECTION_INDEX);
    (0, T.Wg)(!0);
    let c = (0, f.A)("shop_include_unpublished"),
        { category: d, state: u } = (0, O.A)(l, { includeUnpublished: c, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: m } = (0, k.lC)(et.G2.COLLECTION_INDEX);
    return ((0, k.uS)(t, i, h?.name, o, { enabled: null != h }),
    n.useEffect(() => {
        a.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== u && null == h)
        ? (0, s.jsx)(A.rd, { to: Q.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, s.jsx)(A.rd, { to: Q.BVt.COLLECTIBLES_SHOP_WITH_TAB(et.G2.ORBS) })
          : (0, s.jsxs)(b.f5, {
                value: m,
                children: [
                    (0, s.jsx)(v.G, { handleTransition: r, selectedTab: i, selectedCollectionId: l }),
                    null == h
                        ? (0, s.jsx)(_.Ip, { children: (0, s.jsx)(eX, {}) })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(R.A, { tab: i, handleTransition: r }),
                                  (0, s.jsx)(eY, { scrollerRef: a, children: (0, s.jsx)(eW, { collectionId: l }) }),
                              ],
                          }),
                ],
            });
};
var ez = t(460348),
    eQ = t(170522);
let eq = (e) => {
    let { tab: l, collectionId: t } = e;
    (0, p.P)(m);
    let a = (0, d.A)(() => (0, r.A)()),
        u = (0, ez.yB)("CollectiblesShop");
    ((0, ez.gB)(u),
        (0, C.pE)(),
        (0, E.X_)(),
        (0, I.A)(Q.FYj),
        n.useEffect(() => {
            (0, x.rW)();
        }, []),
        n.useEffect(() => {
            (0, c.I)(Q.BVt.COLLECTIBLES_SHOP);
        }, []));
    let h = n.useMemo(() => ({ sessionId: a }), [a]),
        A = n.useRef(null),
        _ = (0, o.Rv)();
    return (0, s.jsx)(g.R9, {
        newValue: h,
        children: (0, s.jsx)("div", {
            className: i()(eQ.bx, { [ez.jP]: u }),
            ref: A,
            inert: _,
            tabIndex: -1,
            children: (0, s.jsx)(j.Y, {
                children:
                    null != t && "" !== t
                        ? (0, s.jsx)(e$, { collectionId: t, sessionId: a })
                        : (0, s.jsx)(L.default, { tab: l, sessionId: a, containerRef: A }),
            }),
        }),
    });
};
