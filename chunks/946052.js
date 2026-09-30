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
    m = r(331322),
    _ = r(834730),
    E = r(821609),
    C = r(793574),
    p = r(688810),
    h = r(617986),
    I = r(773669),
    S = r(318346),
    L = r(287809),
    A = r(174459),
    x = r(440938),
    v = r(993408);
let f = (0, r(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var O = r(304210),
    y = r(39196),
    k = r(480750),
    N = r(808598),
    j = r(320089),
    T = r(212407),
    b = r(521e3),
    B = r(783857),
    R = r(815280),
    P = r(60140),
    w = r(602051),
    D = r(758836),
    G = r(652215),
    H = r(375708),
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
        l = f.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, n.jsx)(P.A, { heroBlockRecord: t, tab: D.G2.ORBS, isBlockLoading: r, layout: l ? "hscroll" : "feed" });
}
let K = (e) => {
    let {
            isLoading: t,
            handleTransition: r,
            category: s,
            heroBlock: f,
            tab: K,
            onVisibilityChange: V,
            badge: W,
            hideButton: X = !1,
            hideCards: z = !1,
        } = e,
        Y = (0, i.K)(
            (e) => {
                V?.(e);
            },
            0.1,
            null != V,
        ),
        Z = l.useRef(null),
        $ = (0, B.yB)("HeroBlock"),
        q = (0, c.bG)([L.default], () => L.default.getCurrentUser()),
        J = (0, c.bG)([I.default], () => I.default.locale),
        Q = (0, x.uM)(),
        { analyticsLocations: ee } = (0, p.Ay)(C.A.COLLECTIBLES_SHOP_HERO),
        et = (0, O.S)(),
        er = l.useMemo(
            () =>
                null != f
                    ? f
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
            [f, s],
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
        em = ei?.responsive ?? !1,
        e_ = ei?.backgroundStyle,
        eE = null != eg && !es,
        eC = K === D.G2.ORBS,
        ep = null != s && s.isOrbsExclusive,
        eh = K === D.G2.COLLECTION_INDEX ? w.S.COLLECTION_INDEX : w.S.HOME,
        eI = eC ? H.intl.string(H.t["1CdL8d"]) : H.intl.string(H.t.xYKa1T);
    function eS() {
        eC
            ? ((0, S.Y)({
                  pageType: G.liQ.SHOP_ORBS_TAB,
                  sectionType: G.JJy.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: G.ZSU.CTA_TO_QUEST_HOME,
              }),
              (0, h.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
            : (r?.({
                  sourceButton: "shop latest category hero",
                  categorySkuId: ea.categorySkuId,
                  isInternalShopDeeplink: !0,
                  isOrbsExclusive: ep,
              }),
              A.default.track(G.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: Q?.sessionId,
                  sku_id: ea.categorySkuId,
                  page_type: K,
                  page_section: Q?.pageSection,
                  page_category: Q?.pageCategory,
                  cta_name: "shop latest category hero button",
              }));
    }
    if (null == q || (!t && ea === U)) return null;
    function eL() {
        return t || X ? null : (0, n.jsx)(E.$, { variant: "overlay-primary", onClick: eS, text: eI });
    }
    return (0, n.jsx)(p.f5, {
        value: ee,
        children: (0, n.jsxs)("div", {
            ref: Y,
            className: M.os,
            children: [
                eE ? (0, b.VA)({ isCustomCursorEnabled: $, className: M.Xt, riveEventTargetRef: Z }) : null,
                (0, n.jsx)("div", {
                    className: a()(M.vK, { [M.cN]: eE, [M.no]: em }),
                    style: null != e_ ? { background: e_ } : void 0,
                    children:
                        null != ec &&
                        (0, n.jsx)(R.A, {
                            bannerStatic: ec,
                            bannerAnimated: ed,
                            bannerRive: eE ? eg : void 0,
                            isResponsive: em,
                            eventTargetRef: Z,
                        }),
                }),
                (0, n.jsxs)("div", {
                    className: a()(M.xX, { [M.ub]: es && K === D.G2.COLLECTION_INDEX }),
                    children: [
                        eE
                            ? (0, n.jsx)("div", { className: M.fy, children: eL() })
                            : (0, n.jsxs)("div", {
                                  className: a()(M.bC, { [M.no]: em, [M.RD]: es && K === D.G2.COLLECTION_INDEX }),
                                  children: [
                                      t
                                          ? (0, n.jsx)("div", { className: M.Hw })
                                          : (0, n.jsxs)("div", {
                                                className: M.Hw,
                                                children: [
                                                    (0, v.HF)(ea.unpublishedAt) &&
                                                        (0, n.jsx)(d.Lp, {
                                                            disableColor: !0,
                                                            text: H.intl.string(H.t["h/uBCR"]),
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
                                                                    className: eC ? M.DD : void 0,
                                                                    color: "text-strong",
                                                                    children: ea.title,
                                                                }),
                                                            null != ea.summary &&
                                                                "" !== ea.summary &&
                                                                (0, n.jsx)(m.B, {
                                                                    onClick:
                                                                        null != et && es
                                                                            ? (e) => (0, k.h)(e, et, eh)
                                                                            : void 0,
                                                                    children: (0, n.jsx)(_.E, {
                                                                        variant: es
                                                                            ? "text-sm/normal"
                                                                            : "text-md/normal",
                                                                        className: a()(eC ? M.h4 : M.Tm, {
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
                                                            children: (0, n.jsx)(j.A, {
                                                                collectionId: ea.categorySkuId,
                                                                variant: "full",
                                                                surface: eh,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                      !X && !t && (0, n.jsx)("div", { className: M.IS, children: eL() }),
                                  ],
                              }),
                        !z &&
                            (K === D.G2.ORBS
                                ? (0, n.jsx)(F, { heroBlockRecord: ea, isBlockLoading: t })
                                : (0, n.jsx)(P.A, {
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
