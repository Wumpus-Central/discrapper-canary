n.d(t, { A: () => F });
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
    v = n(773669),
    x = n(318346),
    y = n(287809),
    _ = n(174459),
    L = n(440938),
    I = n(993408);
let A = (0, n(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var k = n(304210),
    S = n(39196),
    b = n(480750),
    O = n(808598),
    j = n(135517),
    N = n(212407),
    w = n(521e3),
    T = n(783857),
    B = n(815280),
    R = n(60140),
    P = n(602051),
    D = n(758836),
    M = n(652215),
    H = n(105292),
    $ = n(105499);
let G = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: void 0,
    categorySkuId: void 0,
    summary: void 0,
    type: u.g.HERO,
    categoryStoreListingId: "",
};
function U(e) {
    let { heroBlockRecord: t, isBlockLoading: n } = e,
        l = A.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, r.jsx)(R.A, { heroBlockRecord: t, tab: D.G2.ORBS, isBlockLoading: n, layout: l ? "hscroll" : "feed" });
}
let F = (e) => {
    let {
            isLoading: t,
            handleTransition: n,
            category: s,
            heroBlock: A,
            tab: F,
            onVisibilityChange: K,
            badge: W,
            hideButton: V = !1,
            hideCards: X = !1,
        } = e,
        z = (0, o.K)(
            (e) => {
                K?.(e);
            },
            0.1,
            null != K,
        ),
        q = l.useRef(null),
        Y = (0, T.yB)("HeroBlock"),
        Z = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        J = (0, c.bG)([v.default], () => v.default.locale),
        Q = (0, L.uM)(),
        { analyticsLocations: ee } = (0, f.Ay)(C.A.COLLECTIBLES_SHOP_HERO),
        et = (0, k.ST)(),
        en = l.useMemo(
            () =>
                null != A
                    ? A
                    : null == s
                      ? G
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
        er = null != l.useMemo(() => (0, S.HF)(et, en), [et, en]),
        el = er && et?.endsAt != null && null == (0, O.X)(et.endsAt) && F === D.G2.HOME,
        es = er && !el,
        ea = l.useMemo(() => (null == et || el ? en : (0, S.O8)(et, en, F, J)), [et, en, el, F, J]),
        {
            bannerDisplayConfig: eo,
            logoDisplayConfig: ei,
            heroLogo: eu,
            heroBannerStatic: ec,
            heroBannerAnimated: ed,
            heroBannerRive: ep,
        } = (0, N.Kk)(ea),
        em = eo?.responsive ?? !1,
        eg = eo?.backgroundStyle,
        eh = null != ep && !es,
        eC = F === D.G2.ORBS,
        ef = null != s && s.isOrbsExclusive,
        eE = F === D.G2.COLLECTION_INDEX ? P.S.COLLECTION_INDEX : P.S.HOME,
        ev = eC ? H.intl.string(H.t["1CdL8d"]) : H.intl.string(H.t.xYKa1T);
    function ex() {
        eC
            ? ((0, x.Y)({
                  pageType: M.liQ.SHOP_ORBS_TAB,
                  sectionType: M.JJy.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: M.ZSU.CTA_TO_QUEST_HOME,
              }),
              (0, E.mA)({ fromContent: i.u.ORBS_SHOP_HERO_CTA }))
            : (n?.({
                  sourceButton: "shop latest category hero",
                  categorySkuId: ea.categorySkuId,
                  isInternalShopDeeplink: !0,
                  isOrbsExclusive: ef,
              }),
              _.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: Q?.sessionId,
                  sku_id: ea.categorySkuId,
                  page_type: F,
                  page_section: Q?.pageSection,
                  page_category: Q?.pageCategory,
                  cta_name: "shop latest category hero button",
              }));
    }
    if (null == Z || (!t && ea === G)) return null;
    function ey() {
        return t || V ? null : (0, r.jsx)(h.$, { variant: "overlay-primary", onClick: ex, text: ev });
    }
    return (0, r.jsx)(f.f5, {
        value: ee,
        children: (0, r.jsxs)("div", {
            ref: z,
            className: $.os,
            children: [
                eh ? (0, w.VA)({ isCustomCursorEnabled: Y, className: $.Xt, riveEventTargetRef: q }) : null,
                (0, r.jsx)("div", {
                    className: a()($.vK, { [$.cN]: eh, [$.no]: em }),
                    style: null != eg ? { background: eg } : void 0,
                    children:
                        null != ec &&
                        (0, r.jsx)(B.A, {
                            bannerStatic: ec,
                            bannerAnimated: ed,
                            bannerRive: eh ? ep : void 0,
                            isResponsive: em,
                            eventTargetRef: q,
                        }),
                }),
                (0, r.jsxs)("div", {
                    className: a()($.xX, { [$.ub]: es && F === D.G2.COLLECTION_INDEX }),
                    children: [
                        eh
                            ? (0, r.jsx)("div", { className: $.fy, children: ey() })
                            : (0, r.jsxs)("div", {
                                  className: a()($.bC, { [$.no]: em, [$.RD]: es && F === D.G2.COLLECTION_INDEX }),
                                  children: [
                                      t
                                          ? (0, r.jsx)("div", { className: $.Hw })
                                          : (0, r.jsxs)("div", {
                                                className: $.Hw,
                                                children: [
                                                    (0, I.HF)(ea.unpublishedAt) &&
                                                        (0, r.jsx)(d.Lp, {
                                                            disableColor: !0,
                                                            text: H.intl.string(H.t["h/uBCR"]),
                                                            className: $.v0,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: $.Wq,
                                                        children: [
                                                            null != W &&
                                                                (0, r.jsx)("div", { className: $._I, children: W }),
                                                            null != eu &&
                                                                (0, r.jsx)("img", {
                                                                    className: $.rm,
                                                                    src: eu,
                                                                    alt: ea.name,
                                                                    style: ei?.toDesktopStyles(),
                                                                }),
                                                            null != ea.title &&
                                                                (0, r.jsx)(p.D, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: eC ? $.DD : void 0,
                                                                    color: "text-strong",
                                                                    children: ea.title,
                                                                }),
                                                            null != ea.summary &&
                                                                "" !== ea.summary &&
                                                                (0, r.jsx)(m.B, {
                                                                    onClick:
                                                                        null != et && es
                                                                            ? (e) => (0, b.h)(e, et, eE)
                                                                            : void 0,
                                                                    children: (0, r.jsx)(g.E, {
                                                                        variant: es
                                                                            ? "text-sm/normal"
                                                                            : "text-md/normal",
                                                                        className: a()(eC ? $.h4 : $.Tm, {
                                                                            [$.vd]: es,
                                                                        }),
                                                                        style: { color: ea.bannerTextColor ?? void 0 },
                                                                        children: ea.summary,
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                    null != et &&
                                                        es &&
                                                        F === D.G2.COLLECTION_INDEX &&
                                                        (0, r.jsx)("div", {
                                                            className: $.Zz,
                                                            children: (0, r.jsx)(j.A, {
                                                                collectionId: ea.categorySkuId,
                                                                variant: "full",
                                                                surface: eE,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                      !V && !t && (0, r.jsx)("div", { className: $.IS, children: ey() }),
                                  ],
                              }),
                        !X &&
                            (F === D.G2.ORBS
                                ? (0, r.jsx)(U, { heroBlockRecord: ea, isBlockLoading: t })
                                : (0, r.jsx)(R.A, {
                                      heroBlockRecord: ea,
                                      tab: F,
                                      isBlockLoading: t,
                                      layout: F === D.G2.HOME ? "hscroll" : "feed",
                                  })),
                    ],
                }),
            ],
        }),
    });
};
