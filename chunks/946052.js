r.d(t, { A: () => K });
var n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    i = r(172218),
    o = r(696292),
    u = r(651162),
    c = r(17928),
    d = r(812993),
    g = r(297264),
    h = r(331322),
    m = r(834730),
    E = r(821609),
    p = r(793574),
    _ = r(688810),
    C = r(617986),
    v = r(773669),
    L = r(318346),
    f = r(287809),
    S = r(174459),
    I = r(440938),
    x = r(993408);
let A = (0, r(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var k = r(304210),
    y = r(39196),
    O = r(480750),
    N = r(808598),
    j = r(135517),
    T = r(212407),
    b = r(521e3),
    B = r(783857),
    w = r(815280),
    R = r(60140),
    P = r(602051),
    D = r(758836),
    M = r(652215),
    H = r(105292),
    G = r(105499);
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
    let { heroBlockRecord: t, isBlockLoading: r } = e,
        l = A.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, n.jsx)(R.A, { heroBlockRecord: t, tab: D.G2.ORBS, isBlockLoading: r, layout: l ? "hscroll" : "feed" });
}
let K = (e) => {
    let {
            isLoading: t,
            handleTransition: r,
            category: s,
            heroBlock: A,
            tab: K,
            onVisibilityChange: V,
            badge: W,
            hideButton: X = !1,
            hideCards: $ = !1,
        } = e,
        z = (0, i.K)(
            (e) => {
                V?.(e);
            },
            0.1,
            null != V,
        ),
        Y = l.useRef(null),
        Z = (0, B.yB)("HeroBlock"),
        q = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
        J = (0, c.bG)([v.default], () => v.default.locale),
        Q = (0, I.uM)(),
        { analyticsLocations: ee } = (0, _.Ay)(p.A.COLLECTIBLES_SHOP_HERO),
        et = (0, k.S)(),
        er = l.useMemo(
            () =>
                null != A
                    ? A
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
            [A, s],
        ),
        en = null != l.useMemo(() => (0, y.HF)(et, er), [et, er]),
        el = en && et?.endsAt != null && null == (0, N.X)(et.endsAt) && K === D.G2.HOME,
        es = en && !el,
        ea = l.useMemo(() => (null == et || el ? er : (0, y.O8)(et, er, K, J)), [et, er, el, K, J]),
        {
            bannerDisplayConfig: ei,
            logoDisplayConfig: eo,
            heroLogo: eu,
            heroBannerStatic: ec,
            heroBannerAnimated: ed,
            heroBannerRive: eg,
        } = (0, T.Kk)(ea),
        eh = ei?.responsive ?? !1,
        em = ei?.backgroundStyle,
        eE = null != eg && !es,
        ep = K === D.G2.ORBS,
        e_ = null != s && s.isOrbsExclusive,
        eC = K === D.G2.COLLECTION_INDEX ? P.S.COLLECTION_INDEX : P.S.HOME,
        ev = ep ? H.intl.string(H.t["1CdL8d"]) : H.intl.string(H.t.xYKa1T);
    function eL() {
        ep
            ? ((0, L.Y)({
                  pageType: M.liQ.SHOP_ORBS_TAB,
                  sectionType: M.JJy.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: M.ZSU.CTA_TO_QUEST_HOME,
              }),
              (0, C.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
            : (r?.({
                  sourceButton: "shop latest category hero",
                  categorySkuId: ea.categorySkuId,
                  isInternalShopDeeplink: !0,
                  isOrbsExclusive: e_,
              }),
              S.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: Q?.sessionId,
                  sku_id: ea.categorySkuId,
                  page_type: K,
                  page_section: Q?.pageSection,
                  page_category: Q?.pageCategory,
                  cta_name: "shop latest category hero button",
              }));
    }
    if (null == q || (!t && ea === U)) return null;
    function ef() {
        return t || X ? null : (0, n.jsx)(E.$, { variant: "overlay-primary", onClick: eL, text: ev });
    }
    return (0, n.jsx)(_.f5, {
        value: ee,
        children: (0, n.jsxs)("div", {
            ref: z,
            className: G.os,
            children: [
                eE ? (0, b.VA)({ isCustomCursorEnabled: Z, className: G.Xt, riveEventTargetRef: Y }) : null,
                (0, n.jsx)("div", {
                    className: a()(G.vK, { [G.cN]: eE, [G.no]: eh }),
                    style: null != em ? { background: em } : void 0,
                    children:
                        null != ec &&
                        (0, n.jsx)(w.A, {
                            bannerStatic: ec,
                            bannerAnimated: ed,
                            bannerRive: eE ? eg : void 0,
                            isResponsive: eh,
                            eventTargetRef: Y,
                        }),
                }),
                (0, n.jsxs)("div", {
                    className: a()(G.xX, { [G.ub]: es && K === D.G2.COLLECTION_INDEX }),
                    children: [
                        eE
                            ? (0, n.jsx)("div", { className: G.fy, children: ef() })
                            : (0, n.jsxs)("div", {
                                  className: a()(G.bC, { [G.no]: eh, [G.RD]: es && K === D.G2.COLLECTION_INDEX }),
                                  children: [
                                      t
                                          ? (0, n.jsx)("div", { className: G.Hw })
                                          : (0, n.jsxs)("div", {
                                                className: G.Hw,
                                                children: [
                                                    (0, x.HF)(ea.unpublishedAt) &&
                                                        (0, n.jsx)(d.Lp, {
                                                            disableColor: !0,
                                                            text: H.intl.string(H.t["h/uBCR"]),
                                                            className: G.v0,
                                                        }),
                                                    (0, n.jsxs)("div", {
                                                        className: G.Wq,
                                                        children: [
                                                            null != W &&
                                                                (0, n.jsx)("div", { className: G._I, children: W }),
                                                            null != eu &&
                                                                (0, n.jsx)("img", {
                                                                    className: G.rm,
                                                                    src: eu,
                                                                    alt: ea.name,
                                                                    style: eo?.toDesktopStyles(),
                                                                }),
                                                            null != ea.title &&
                                                                (0, n.jsx)(g.D, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: ep ? G.DD : void 0,
                                                                    color: "text-strong",
                                                                    children: ea.title,
                                                                }),
                                                            null != ea.summary &&
                                                                "" !== ea.summary &&
                                                                (0, n.jsx)(h.B, {
                                                                    onClick:
                                                                        null != et && es
                                                                            ? (e) => (0, O.h)(e, et, eC)
                                                                            : void 0,
                                                                    children: (0, n.jsx)(m.E, {
                                                                        variant: es
                                                                            ? "text-sm/normal"
                                                                            : "text-md/normal",
                                                                        className: a()(ep ? G.h4 : G.Tm, {
                                                                            [G.vd]: es,
                                                                        }),
                                                                        style: { color: ea.bannerTextColor ?? void 0 },
                                                                        children: ea.summary,
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                    null != et &&
                                                        es &&
                                                        K === D.G2.COLLECTION_INDEX &&
                                                        (0, n.jsx)("div", {
                                                            className: G.Zz,
                                                            children: (0, n.jsx)(j.A, {
                                                                collectionId: ea.categorySkuId,
                                                                variant: "full",
                                                                surface: eC,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                      !X && !t && (0, n.jsx)("div", { className: G.IS, children: ef() }),
                                  ],
                              }),
                        !$ &&
                            (K === D.G2.ORBS
                                ? (0, n.jsx)(F, { heroBlockRecord: ea, isBlockLoading: t })
                                : (0, n.jsx)(R.A, {
                                      heroBlockRecord: ea,
                                      tab: K,
                                      isBlockLoading: t,
                                      layout: K === D.G2.HOME ? "hscroll" : "feed",
                                  })),
                    ],
                }),
            ],
        }),
    });
};
