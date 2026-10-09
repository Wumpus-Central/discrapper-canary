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
    E = r(331322),
    m = r(834730),
    p = r(821609),
    _ = r(793574),
    h = r(688810),
    C = r(617986),
    v = r(773669),
    L = r(318346),
    S = r(287809),
    f = r(174459),
    I = r(440938),
    A = r(993408);
let x = (0, r(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var O = r(304210),
    y = r(39196),
    k = r(480750),
    N = r(808598),
    T = r(320089),
    b = r(212407),
    j = r(521e3),
    B = r(783857),
    w = r(815280),
    R = r(60140),
    P = r(602051),
    D = r(758836),
    H = r(652215),
    G = r(660183),
    M = r(105499);
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
        l = x.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, n.jsx)(R.A, { heroBlockRecord: t, tab: D.G2.ORBS, isBlockLoading: r, layout: l ? "hscroll" : "feed" });
}
let K = (e) => {
    let {
            isLoading: t,
            handleTransition: r,
            category: s,
            heroBlock: x,
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
        q = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        J = (0, c.bG)([v.default], () => v.default.locale),
        Q = (0, I.uM)(),
        { analyticsLocations: ee } = (0, h.Ay)(_.A.COLLECTIBLES_SHOP_HERO),
        et = (0, O.S)(),
        er = l.useMemo(
            () =>
                null != x
                    ? x
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
            [x, s],
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
        } = (0, b.Kk)(ea),
        eE = ei?.responsive ?? !1,
        em = ei?.backgroundStyle,
        ep = null != eg && !es,
        e_ = K === D.G2.ORBS,
        eh = null != s && s.isOrbsExclusive,
        eC = K === D.G2.COLLECTION_INDEX ? P.S.COLLECTION_INDEX : P.S.HOME,
        ev = e_ ? G.intl.string(G.t["1CdL8d"]) : G.intl.string(G.t.xYKa1T);
    function eL() {
        e_
            ? ((0, L.Y)({
                  pageType: H.liQ.SHOP_ORBS_TAB,
                  sectionType: H.JJy.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: H.ZSU.CTA_TO_QUEST_HOME,
              }),
              (0, C.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
            : (r?.({
                  sourceButton: "shop latest category hero",
                  categorySkuId: ea.categorySkuId,
                  isInternalShopDeeplink: !0,
                  isOrbsExclusive: eh,
              }),
              f.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: Q?.sessionId,
                  sku_id: ea.categorySkuId,
                  page_type: K,
                  page_section: Q?.pageSection,
                  page_category: Q?.pageCategory,
                  cta_name: "shop latest category hero button",
              }));
    }
    if (null == q || (!t && ea === U)) return null;
    function eS() {
        return t || X ? null : (0, n.jsx)(p.$, { variant: "overlay-primary", onClick: eL, text: ev });
    }
    return (0, n.jsx)(h.f5, {
        value: ee,
        children: (0, n.jsxs)("div", {
            ref: z,
            className: M.os,
            children: [
                ep ? (0, j.VA)({ isCustomCursorEnabled: Z, className: M.Xt, riveEventTargetRef: Y }) : null,
                (0, n.jsx)("div", {
                    className: a()(M.vK, { [M.cN]: ep, [M.no]: eE }),
                    style: null != em ? { background: em } : void 0,
                    children:
                        null != ec &&
                        (0, n.jsx)(w.A, {
                            bannerStatic: ec,
                            bannerAnimated: ed,
                            bannerRive: ep ? eg : void 0,
                            isResponsive: eE,
                            eventTargetRef: Y,
                        }),
                }),
                (0, n.jsxs)("div", {
                    className: a()(M.xX, { [M.ub]: es && K === D.G2.COLLECTION_INDEX }),
                    children: [
                        ep
                            ? (0, n.jsx)("div", { className: M.fy, children: eS() })
                            : (0, n.jsxs)("div", {
                                  className: a()(M.bC, { [M.no]: eE, [M.RD]: es && K === D.G2.COLLECTION_INDEX }),
                                  children: [
                                      t
                                          ? (0, n.jsx)("div", { className: M.Hw })
                                          : (0, n.jsxs)("div", {
                                                className: M.Hw,
                                                children: [
                                                    (0, A.HF)(ea.unpublishedAt) &&
                                                        (0, n.jsx)(d.Lp, {
                                                            disableColor: !0,
                                                            text: G.intl.string(G.t["h/uBCR"]),
                                                            className: M.v0,
                                                        }),
                                                    (0, n.jsxs)("div", {
                                                        className: M.Wq,
                                                        children: [
                                                            null != W &&
                                                                (0, n.jsx)("div", { className: M._I, children: W }),
                                                            null != eu &&
                                                                (0, n.jsx)("img", {
                                                                    className: M.rm,
                                                                    src: eu,
                                                                    alt: ea.name,
                                                                    style: eo?.toDesktopStyles(),
                                                                }),
                                                            null != ea.title &&
                                                                (0, n.jsx)(g.D, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: e_ ? M.DD : void 0,
                                                                    color: "text-strong",
                                                                    children: ea.title,
                                                                }),
                                                            null != ea.summary &&
                                                                "" !== ea.summary &&
                                                                (0, n.jsx)(E.B, {
                                                                    onClick:
                                                                        null != et && es
                                                                            ? (e) => (0, k.h)(e, et, eC)
                                                                            : void 0,
                                                                    children: (0, n.jsx)(m.E, {
                                                                        variant: es
                                                                            ? "text-sm/normal"
                                                                            : "text-md/normal",
                                                                        className: a()(e_ ? M.h4 : M.Tm, {
                                                                            [M.vd]: es,
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
                                                            className: M.Zz,
                                                            children: (0, n.jsx)(T.A, {
                                                                collectionId: ea.categorySkuId,
                                                                variant: "full",
                                                                surface: eC,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                      !X && !t && (0, n.jsx)("div", { className: M.IS, children: eS() }),
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
