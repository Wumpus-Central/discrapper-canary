n.d(t, { A: () => K });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    i = n(696292),
    u = n(651162),
    c = n(17928),
    d = n(812993),
    p = n(297264),
    m = n(331322),
    g = n(834730),
    h = n(821609),
    C = n(793574),
    f = n(688810),
    E = n(617986),
    v = n(604913),
    x = n(773669),
    y = n(318346),
    _ = n(287809),
    I = n(174459),
    L = n(440938),
    A = n(993408);
let k = (0, n(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S = n(304210),
    b = n(39196),
    O = n(480750),
    j = n(808598),
    N = n(135517),
    w = n(212407),
    T = n(521e3),
    B = n(783857),
    R = n(815280),
    P = n(60140),
    D = n(602051),
    M = n(758836),
    H = n(652215),
    $ = n(105292),
    G = n(105499);
let U = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: void 0,
    categorySkuId: void 0,
    summary: void 0,
    type: u.g.HERO,
    categoryStoreListingId: "",
};
function F(e) {
    let { heroBlockRecord: t, isBlockLoading: n } = e,
        l = k.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, r.jsx)(P.A, { heroBlockRecord: t, tab: M.G2.ORBS, isBlockLoading: n, layout: l ? "hscroll" : "feed" });
}
let K = (e) => {
    let {
            isLoading: t,
            handleTransition: n,
            category: s,
            heroBlock: k,
            tab: K,
            onVisibilityChange: W,
            badge: V,
            hideButton: X = !1,
            hideCards: z = !1,
        } = e,
        q = (0, o.K)(
            (e) => {
                W?.(e);
            },
            0.1,
            null != W,
        ),
        Y = l.useRef(null),
        Z = (0, B.yB)("HeroBlock"),
        J = (0, c.bG)([_.default], () => _.default.getCurrentUser()),
        Q = (0, c.bG)([x.default], () => x.default.locale),
        ee = (0, L.uM)(),
        { analyticsLocations: et } = (0, f.Ay)(C.A.COLLECTIBLES_SHOP_HERO),
        en = (0, S.ST)(),
        er = l.useMemo(
            () =>
                null != k
                    ? k
                    : null == s
                      ? U
                      : {
                            rankedSkuIds: s.heroRanking ?? [],
                            name: s.name,
                            unpublishedAt: s.unpublishedAt,
                            categorySkuId: s.skuId,
                            summary: s.summary,
                            type: u.g.HERO,
                            categoryStoreListingId: s.storeListingId,
                            bannerDisplayConfig: s.heroBannerDisplayConfig,
                            logoDisplayConfig: s.heroLogoDisplayConfig,
                            heroLogoUrl: s.heroLogoUrl,
                            heroBannerUrl: s.heroBannerUrl,
                            heroBannerAnimatedUrl: s.heroBannerAnimatedUrl,
                        },
            [k, s],
        ),
        el = l.useMemo(() => (0, b.HF)(en, er), [en, er]),
        es = el?.subtype === v.h5.TAKEOVER,
        ea = el?.subtype === v.h5.BASIC,
        eo = es && en?.endsAt != null && null == (0, j.X)(en.endsAt) && K === M.G2.HOME,
        ei = es && !eo,
        eu = l.useMemo(() => (null == en || eo ? er : (0, b.O8)(en, er, K, Q)), [en, er, eo, K, Q]),
        {
            bannerDisplayConfig: ec,
            logoDisplayConfig: ed,
            heroLogo: ep,
            heroBannerStatic: em,
            heroBannerAnimated: eg,
            heroBannerRive: eh,
        } = (0, w.Kk)(eu),
        eC = ec?.responsive ?? !1,
        ef = ec?.backgroundStyle,
        eE = null != eh && !ei,
        ev = K === M.G2.ORBS,
        ex = null != s && s.isOrbsExclusive,
        ey = K === M.G2.COLLECTION_INDEX ? D.S.COLLECTION_INDEX : D.S.HOME,
        e_ = ev ? $.intl.string($.t["1CdL8d"]) : $.intl.string($.t.xYKa1T);
    function eI() {
        ev
            ? ((0, y.Y)({
                  pageType: H.liQ.SHOP_ORBS_TAB,
                  sectionType: H.JJy.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: H.ZSU.CTA_TO_QUEST_HOME,
              }),
              (0, E.mA)({ fromContent: i.u.ORBS_SHOP_HERO_CTA }))
            : (n?.({
                  sourceButton: "shop latest category hero",
                  categorySkuId: eu.categorySkuId,
                  isInternalShopDeeplink: !0,
                  isOrbsExclusive: ex,
              }),
              I.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: ee?.sessionId,
                  sku_id: eu.categorySkuId,
                  page_type: K,
                  page_section: ee?.pageSection,
                  page_category: ee?.pageCategory,
                  cta_name: "shop latest category hero button",
              }));
    }
    if (null == J || (!t && eu === U)) return null;
    function eL() {
        return t || X ? null : (0, r.jsx)(h.$, { variant: "overlay-primary", onClick: eI, text: e_ });
    }
    return (0, r.jsx)(f.f5, {
        value: et,
        children: (0, r.jsxs)("div", {
            ref: q,
            className: G.os,
            children: [
                eE ? (0, T.VA)({ isCustomCursorEnabled: Z, className: G.Xt, riveEventTargetRef: Y }) : null,
                (0, r.jsx)("div", {
                    className: a()(G.vK, { [G.cN]: eE, [G.no]: eC }),
                    style: null != ef ? { background: ef } : void 0,
                    children:
                        null != em &&
                        (0, r.jsx)(R.A, {
                            bannerStatic: em,
                            bannerAnimated: eg,
                            bannerRive: eE ? eh : void 0,
                            isResponsive: eC,
                            eventTargetRef: Y,
                        }),
                }),
                (0, r.jsxs)("div", {
                    className: a()(G.xX, { [G.ub]: ei && K === M.G2.COLLECTION_INDEX }),
                    children: [
                        eE
                            ? (0, r.jsx)("div", { className: G.fy, children: eL() })
                            : (0, r.jsxs)("div", {
                                  className: a()(G.bC, { [G.no]: eC, [G.RD]: ei && K === M.G2.COLLECTION_INDEX }),
                                  children: [
                                      t
                                          ? (0, r.jsx)("div", { className: G.Hw })
                                          : (0, r.jsxs)("div", {
                                                className: G.Hw,
                                                children: [
                                                    (0, A.HF)(eu.unpublishedAt) &&
                                                        (0, r.jsx)(d.Lp, {
                                                            disableColor: !0,
                                                            text: $.intl.string($.t["h/uBCR"]),
                                                            className: G.v0,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: G.Wq,
                                                        children: [
                                                            null != V &&
                                                                (0, r.jsx)("div", { className: G._I, children: V }),
                                                            null != ep &&
                                                                (0, r.jsx)("img", {
                                                                    className: G.rm,
                                                                    src: ep,
                                                                    alt: eu.name,
                                                                    style: ed?.toDesktopStyles(),
                                                                }),
                                                            null != eu.title &&
                                                                (0, r.jsx)(p.D, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: ev ? G.DD : void 0,
                                                                    color: "text-strong",
                                                                    children: eu.title,
                                                                }),
                                                            null != eu.summary &&
                                                                "" !== eu.summary &&
                                                                (0, r.jsx)(m.B, {
                                                                    onClick:
                                                                        null != en && ei
                                                                            ? (e) => (0, O.h)(e, en, ey)
                                                                            : void 0,
                                                                    children: (0, r.jsx)(g.E, {
                                                                        variant: ei
                                                                            ? "text-sm/normal"
                                                                            : "text-md/normal",
                                                                        className: a()(ev ? G.h4 : G.Tm, {
                                                                            [G.vd]: ei,
                                                                        }),
                                                                        style: { color: eu.bannerTextColor ?? void 0 },
                                                                        children: eu.summary,
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                    null != en &&
                                                        (ei || ea) &&
                                                        K === M.G2.COLLECTION_INDEX &&
                                                        (0, r.jsx)("div", {
                                                            className: G.Zz,
                                                            children: (0, r.jsx)(N.A, {
                                                                collectionId: eu.categorySkuId,
                                                                variant: "full",
                                                                surface: ey,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                      !X && !t && (0, r.jsx)("div", { className: G.IS, children: eL() }),
                                  ],
                              }),
                        !z &&
                            (K === M.G2.ORBS
                                ? (0, r.jsx)(F, { heroBlockRecord: eu, isBlockLoading: t })
                                : (0, r.jsx)(P.A, {
                                      heroBlockRecord: eu,
                                      tab: K,
                                      isBlockLoading: t,
                                      layout: K === M.G2.HOME ? "hscroll" : "feed",
                                  })),
                    ],
                }),
                !t &&
                    ea &&
                    K === M.G2.HOME &&
                    (0, r.jsx)("div", {
                        className: G.xX,
                        children: (0, r.jsx)(N.A, { collectionId: eu.categorySkuId, variant: "full", surface: ey }),
                    }),
            ],
        }),
    });
};
