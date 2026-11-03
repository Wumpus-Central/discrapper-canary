n.d(t, { A: () => F });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    i = n(696292),
    u = n(651162),
    c = n(17928),
    d = n(62010),
    p = n(534514),
    m = n(331322),
    g = n(834730),
    h = n(821609),
    E = n(793574),
    f = n(688810),
    C = n(617986),
    v = n(604913),
    _ = n(773669),
    x = n(318346),
    y = n(287809),
    A = n(174459),
    I = n(440938),
    L = n(993408);
let S = (0, n(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var k = n(304210),
    b = n(39196),
    O = n(480750),
    j = n(808598),
    N = n(192943),
    w = n(212407),
    T = n(521e3),
    R = n(783857),
    B = n(815280),
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
function K(e) {
    let { heroBlockRecord: t, isBlockLoading: n } = e,
        l = S.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, r.jsx)(P.A, { heroBlockRecord: t, tab: M.G2.ORBS, isBlockLoading: n, layout: l ? "hscroll" : "feed" });
}
let F = (e) => {
    let {
            isLoading: t,
            handleTransition: n,
            category: s,
            heroBlock: S,
            tab: F,
            onVisibilityChange: W,
            badge: V,
            hideButton: X = !1,
            hideCards: z = !1,
        } = e,
        Z = (0, o.K)(
            (e) => {
                W?.(e);
            },
            0.1,
            null != W,
        ),
        q = l.useRef(null),
        Y = (0, R.yB)("HeroBlock"),
        J = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        Q = (0, c.bG)([_.default], () => _.default.locale),
        ee = (0, I.uM)(),
        { analyticsLocations: et } = (0, f.Ay)(E.A.COLLECTIBLES_SHOP_HERO),
        en = (0, k.ST)(),
        er = l.useMemo(
            () =>
                null != S
                    ? S
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
            [S, s],
        ),
        el = l.useMemo(() => (0, b.HF)(en, er), [en, er]),
        es = el?.subtype === v.h5.TAKEOVER,
        ea = el?.subtype === v.h5.BASIC,
        eo = es && en?.endsAt != null && null == (0, j.X)(en.endsAt) && F === M.G2.HOME,
        ei = es && !eo,
        eu = (ei || ea) && F === M.G2.COLLECTION_INDEX,
        ec = l.useMemo(() => (null == en || eo ? er : (0, b.O8)(en, er, F, Q)), [en, er, eo, F, Q]),
        {
            bannerDisplayConfig: ed,
            logoDisplayConfig: ep,
            heroLogo: em,
            heroBannerStatic: eg,
            heroBannerAnimated: eh,
            heroBannerRive: eE,
        } = (0, w.Kk)(ec),
        ef = ed?.responsive ?? !1,
        eC = ed?.backgroundStyle,
        ev = null != eE && !ei,
        e_ = F === M.G2.ORBS,
        ex = null != s && s.isOrbsExclusive,
        ey = F === M.G2.COLLECTION_INDEX ? D.S.COLLECTION_INDEX : D.S.HOME,
        eA = e_ ? $.intl.string($.t["1CdL8d"]) : $.intl.string($.t.xYKa1T);
    function eI() {
        e_
            ? ((0, x.Y)({
                  pageType: H.liQ.SHOP_ORBS_TAB,
                  sectionType: H.JJy.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: H.ZSU.CTA_TO_QUEST_HOME,
              }),
              (0, C.mA)({ fromContent: i.u.ORBS_SHOP_HERO_CTA }))
            : (n?.({
                  sourceButton: "shop latest category hero",
                  categorySkuId: ec.categorySkuId,
                  isInternalShopDeeplink: !0,
                  isOrbsExclusive: ex,
              }),
              A.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: ee?.sessionId,
                  sku_id: ec.categorySkuId,
                  page_type: F,
                  page_section: ee?.pageSection,
                  page_category: ee?.pageCategory,
                  cta_name: "shop latest category hero button",
              }));
    }
    if (null == J || (!t && ec === U)) return null;
    function eL() {
        return t || X ? null : (0, r.jsx)(h.$, { variant: "overlay-primary", onClick: eI, text: eA });
    }
    return (0, r.jsx)(f.f5, {
        value: et,
        children: (0, r.jsxs)("div", {
            ref: Z,
            className: G.os,
            children: [
                ev ? (0, T.VA)({ isCustomCursorEnabled: Y, className: G.Xt, riveEventTargetRef: q }) : null,
                (0, r.jsx)("div", {
                    className: a()(G.vK, { [G.cN]: ev, [G.no]: ef }),
                    style: null != eC ? { background: eC } : void 0,
                    children:
                        null != eg &&
                        (0, r.jsx)(B.A, {
                            bannerStatic: eg,
                            bannerAnimated: eh,
                            bannerRive: ev ? eE : void 0,
                            isResponsive: ef,
                            eventTargetRef: q,
                        }),
                }),
                (0, r.jsxs)("div", {
                    className: a()(G.xX, { [G.ub]: eu }),
                    children: [
                        ev
                            ? (0, r.jsx)("div", { className: G.fy, children: eL() })
                            : (0, r.jsxs)("div", {
                                  className: a()(G.uZ, { [G.no]: ef, [G.RD]: eu }),
                                  children: [
                                      t
                                          ? (0, r.jsx)("div", { className: G.Hw })
                                          : (0, r.jsxs)("div", {
                                                className: G.Hw,
                                                children: [
                                                    (0, L.HF)(ec.unpublishedAt) &&
                                                        (0, r.jsx)("div", {
                                                            className: G.v0,
                                                            children: (0, r.jsx)(d.E, {
                                                                type: { text: $.intl.string($.t["h/uBCR"]) },
                                                                variant: "inverted",
                                                            }),
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: G.Wq,
                                                        children: [
                                                            null != V &&
                                                                (0, r.jsx)("div", { className: G._I, children: V }),
                                                            null != em &&
                                                                (0, r.jsx)("img", {
                                                                    className: G.rm,
                                                                    src: em,
                                                                    alt: ec.name,
                                                                    style: ep?.toDesktopStyles(),
                                                                }),
                                                            null != ec.title &&
                                                                (0, r.jsx)(p.D, {
                                                                    variant: "heading-xxl/semibold",
                                                                    className: e_ ? G.DD : void 0,
                                                                    color: "text-strong",
                                                                    children: ec.title,
                                                                }),
                                                            null != ec.summary &&
                                                                "" !== ec.summary &&
                                                                (0, r.jsx)(m.B, {
                                                                    onClick:
                                                                        null != en && ei
                                                                            ? (e) => (0, O.h)(e, en, ey)
                                                                            : void 0,
                                                                    children: (0, r.jsx)(g.E, {
                                                                        variant: ei
                                                                            ? "text-sm/normal"
                                                                            : "text-md/normal",
                                                                        className: a()(e_ ? G.h4 : G.Tm, {
                                                                            [G.vd]: ei || ea,
                                                                        }),
                                                                        style: { color: ec.bannerTextColor ?? void 0 },
                                                                        children: ec.summary,
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                    null != en &&
                                                        eu &&
                                                        (0, r.jsx)("div", {
                                                            className: G.Zz,
                                                            children: (0, r.jsx)(N.A, {
                                                                collectionId: ec.categorySkuId,
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
                            (F === M.G2.ORBS
                                ? (0, r.jsx)(K, { heroBlockRecord: ec, isBlockLoading: t })
                                : (0, r.jsx)(P.A, {
                                      heroBlockRecord: ec,
                                      tab: F,
                                      isBlockLoading: t,
                                      layout: F === M.G2.HOME ? "hscroll" : "feed",
                                  })),
                    ],
                }),
                !t &&
                    ea &&
                    F === M.G2.HOME &&
                    (0, r.jsx)("div", {
                        className: a()(G.xX, G.uC),
                        children: (0, r.jsx)(N.A, { collectionId: ec.categorySkuId, variant: "full", surface: ey }),
                    }),
            ],
        }),
    });
};
