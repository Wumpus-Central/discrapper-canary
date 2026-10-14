n.d(t, {
    h$: () => e_,
    CK: () => ei,
    rh: () => el,
    JJ: () => ed,
    RE: () => es,
    Or: () => eE,
    FH: () => eu,
    Jp: () => ea,
    Sw: () => ee,
    Cz: () => J,
    iJ: () => eo,
    RD: () => et,
    ue: () => eh,
    gB: () => er,
    T2: () => ef,
    gn: () => en,
    Aq: () => eA,
    LX: () => ec,
});
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    a = n(148803),
    s = n(635358),
    l = n(636537),
    o = n(73153);
n(398590);
var d = n(913122),
    c = n(865116),
    u = n(39418);
n(250953);
var _ = n(976860),
    E = n(38145),
    A = n(773669),
    h = n(590180);
let f = (0, n(196765).v)((e) => ({
    logs: [],
    addLog: (t) => e((e) => ({ logs: [...e.logs, `[${new Date().toISOString().split("T")[0]}] ${t}`] })),
    clearLogs: () => e({ logs: [] }),
}));
function I(e) {
    let t = new Date().toLocaleTimeString("en-US", { hour12: !1 }),
        n = `[${t}] ${e}`;
    f.getState().addLog(n);
}
var p = n(457421),
    T = n(4227),
    m = n(870216),
    g = n(993408),
    S = n(442007),
    N = n(510801);
class C {
    categories;
    collections;
    constructor(e) {
        ((this.categories = e.categories.map((e) => N.A.fromServer(e))),
            (this.collections = e.collections.map((e) => S.A.fromServer(e))));
    }
    static fromServer(e) {
        return new C(e);
    }
}
var O = n(488430);
class R {
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    badgeCountdownEndsAt;
    showHoverGradient;
    constructor(e) {
        ((this.type = O.G.BADGE),
            (this.dismissibleContent = e.dismissibleContent),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.badgeCountdownEndsAt = e.badgeCountdownEndsAt),
            (this.showHoverGradient = e.showHoverGradient));
    }
    static fromServer(e) {
        return new R({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            badgeCountdownEndsAt: null != e.badge_countdown_ends_at ? new Date(e.badge_countdown_ends_at) : void 0,
            showHoverGradient: e.show_hover_gradient,
        });
    }
    static fromPersisted(e) {
        return new R({
            ...e,
            badgeCountdownEndsAt: null != e.badgeCountdownEndsAt ? new Date(e.badgeCountdownEndsAt) : void 0,
        });
    }
}
class L {
    title;
    body;
    asset;
    popoutAsset;
    version;
    revertTextColor;
    constructor(e) {
        ((this.type = O.G.BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.popoutAsset = e.popout_asset),
            (this.version = e.version),
            (this.revertTextColor = e.revert_text_color));
    }
    static fromServer(e) {
        return new L(e);
    }
    static fromPersisted(e) {
        return new L({ ...e, popout_asset: e.popoutAsset, revert_text_color: e.revertTextColor });
    }
}
class y {
    title;
    body;
    assetDark;
    assetLight;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    badgeCountdownEndsAt;
    buttonLabel;
    showHoverGradient;
    displayType;
    constructor(e) {
        ((this.type = O.G.COACHMARK),
            (this.title = e.title),
            (this.body = e.body),
            (this.assetDark = e.assetDark),
            (this.assetLight = e.assetLight),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.badgeCountdownEndsAt = e.badgeCountdownEndsAt),
            (this.buttonLabel = e.buttonLabel),
            (this.showHoverGradient = e.showHoverGradient),
            (this.displayType = e.displayType));
    }
    static fromServer(e) {
        return new y({
            ...e,
            assetDark: e.asset_dark,
            assetLight: e.asset_light,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            badgeCountdownEndsAt: null != e.badge_countdown_ends_at ? new Date(e.badge_countdown_ends_at) : void 0,
            buttonLabel: e.button_label,
            showHoverGradient: e.show_hover_gradient,
            displayType: e.display_type,
        });
    }
    static fromPersisted(e) {
        return new y({
            ...e,
            badgeCountdownEndsAt: null != e.badgeCountdownEndsAt ? new Date(e.badgeCountdownEndsAt) : void 0,
        });
    }
}
class D {
    title;
    body;
    asset;
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    badgeCountdownEndsAt;
    showHoverGradient;
    constructor(e) {
        ((this.type = O.G.TAB_TOOLTIP),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.dismissibleContent = e.dismissibleContent),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.badgeCountdownEndsAt = e.badgeCountdownEndsAt),
            (this.showHoverGradient = e.showHoverGradient));
    }
    static fromServer(e) {
        return new D({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            badgeCountdownEndsAt: null != e.badge_countdown_ends_at ? new Date(e.badge_countdown_ends_at) : void 0,
            showHoverGradient: e.show_hover_gradient,
        });
    }
    static fromPersisted(e) {
        return new D({
            ...e,
            badgeCountdownEndsAt: null != e.badgeCountdownEndsAt ? new Date(e.badgeCountdownEndsAt) : void 0,
        });
    }
}
class v {
    marketingsBySurfaces;
    constructor(e) {
        this.marketingsBySurfaces = e;
    }
    static fromServer(e) {
        return new v(
            Object.fromEntries(
                Object.entries(e?.marketings ?? {}).map((e) => {
                    let [t, n] = e;
                    switch (n?.type) {
                        case O.G.BADGE:
                            return [t, R.fromServer(n)];
                        case O.G.BANNER:
                            return [t, L.fromServer(n)];
                        case O.G.COACHMARK:
                            return [t, y.fromServer(n)];
                        case O.G.TAB_TOOLTIP:
                            return [t, D.fromServer(n)];
                        default:
                            return [t, void 0];
                    }
                }),
            ),
        );
    }
}
var b = n(986630),
    M = n(384726),
    P = n(696444),
    U = n(474012),
    w = n(758836),
    G = n(652215);
class x {
    skuId;
    name;
    type;
    premiumType;
    items;
    categorySkuId;
    isCategoryReward;
    prices;
    bundledProducts;
    variants;
    variantGroupStoreListingId;
    googleSkuIds;
    eligibleOffers;
    baseVariantName;
    baseVariantSkuId;
    variantLabel;
    variantValue;
    purchaseType;
    purchasedAt;
    expiresAt;
    constructor(e) {
        ((this.skuId = e.skuId),
            (this.name = e.name),
            (this.type = e.type),
            (this.premiumType = e.premiumType),
            (this.items = e.items),
            (this.categorySkuId = e.categorySkuId),
            (this.isCategoryReward = e.isCategoryReward),
            (this.prices = e.prices),
            (this.bundledProducts = e.bundledProducts),
            (this.googleSkuIds = e.googleSkuIds),
            (this.variants = e.variants),
            (this.eligibleOffers = e.eligibleOffers),
            (this.baseVariantName = e.baseVariantName),
            (this.baseVariantSkuId = e.baseVariantSkuId),
            (this.variantLabel = e.variantLabel),
            (this.variantValue = e.variantValue),
            (this.purchasedAt = e.purchasedAt),
            (this.purchaseType = e.purchaseType),
            (this.expiresAt = e.expiresAt));
    }
    static fromServer(e) {
        let {
            type: t,
            sku_id: n,
            name: i,
            premium_type: r,
            category_sku_id: a,
            prices: s,
            bundled_products: l,
            variants: o,
            base_variant_name: d,
            base_variant_sku_id: c,
            variant_label: u,
            variant_value: _,
            purchased_at: E,
            purchase_type: A,
            expires_at: h,
            ...f
        } = e;
        return new x({
            type: t,
            name: i,
            skuId: n,
            premiumType: r === G.oA2 ? null : r,
            categorySkuId: a,
            isCategoryReward: w.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, M.A)(s),
            items: (0, U.Kh)(f.items),
            bundledProducts: l?.map(P.A.fromServer),
            variants: o?.map(b.x.fromServer),
            googleSkuIds: f.google_sku_ids,
            eligibleOffers: f.eligible_offers,
            baseVariantName: d,
            baseVariantSkuId: c,
            variantLabel: u,
            variantValue: _,
            purchaseType: A,
            purchasedAt: null != E ? new Date(E) : E,
            expiresAt: null != h ? new Date(h) : null,
        });
    }
}
var k = n(651162);
class F {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        ((this.type = k.g.COUNTDOWN_TIMER),
            (this.title = e.title),
            (this.body = e.body),
            (this.bannerUrl = e.banner_url),
            (this.endTime = new Date(e.end_time)),
            (this.textColor = e.text_color));
    }
    static fromServer(e) {
        return new F(e);
    }
}
var B = n(424918);
class V {
    categoryStoreListingId;
    categorySkuId;
    name;
    unpublishedAt;
    bodyText;
    bannerTextColor;
    bannerUrl;
    assetUrl;
    constructor(e) {
        ((this.type = B.u.CATEGORY),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.categorySkuId = e.category_sku_id),
            (this.name = e.name),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bodyText = e.body_text),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerUrl = e.banner_url),
            (this.assetUrl = e.asset_url));
    }
    static fromServer(e) {
        return new V(e);
    }
}
class H {
    subblocks;
    constructor(e) {
        ((this.type = k.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === B.u.CATEGORY ? V.fromServer(e) : (e.type, e)))));
    }
    static fromServer(e) {
        return new H(e);
    }
}
class j {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        ((this.type = k.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids));
    }
    static fromServer(e) {
        return new j(e);
    }
}
class W {
    isDismissible;
    constructor(e) {
        ((this.type = k.g.GAME_SERVER_HOSTING_BANNER), (this.isDismissible = e.is_dismissible));
    }
    static fromServer(e) {
        return new W(e);
    }
}
class Y {
    categorySkuId;
    name;
    summary;
    categoryStoreListingId;
    title;
    rankedSkuIds;
    unpublishedAt;
    bannerTextColor;
    mobileTitle;
    mobileSummary;
    mobileProductsTitle;
    heroBannerUrl;
    heroBannerAnimatedUrl;
    heroRiveUrl;
    heroLogoUrl;
    mobileHeroUrl;
    mobileHeroAnimatedUrl;
    bannerDisplayConfig;
    logoDisplayConfig;
    constructor(e) {
        ((this.type = k.g.HERO),
            (this.categorySkuId = e.category_sku_id),
            (this.name = e.name),
            (this.summary = e.summary.trim()),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.title = e.title),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bannerTextColor = e.banner_text_color),
            (this.mobileTitle = e.mobile_title),
            (this.mobileSummary = e.mobile_summary),
            (this.mobileProductsTitle = e.mobile_products_title),
            (this.heroBannerUrl = e.hero_banner_url),
            (this.heroBannerAnimatedUrl = e.hero_banner_animated_url),
            (this.heroRiveUrl = e.hero_rive_url),
            (this.heroLogoUrl = e.hero_logo_url),
            (this.mobileHeroUrl = e.mobile_hero_url),
            (this.mobileHeroAnimatedUrl = e.mobile_hero_animated_url),
            (this.bannerDisplayConfig = (0, g.f6)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, g.f6)(e.logo_display_config)));
    }
    static fromServer(e) {
        return new Y(e);
    }
}
class K {
    title;
    body;
    helpCenterUrl;
    textColor;
    endTime;
    bannerUrl;
    bannerAnimatedUrl;
    constructor(e) {
        ((this.type = k.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url));
    }
    static fromServer(e) {
        return new K(e);
    }
}
class $ {
    name;
    rankedSkuIds;
    categorySkuId;
    showButton;
    buttonText;
    titleColor;
    desktopBackgroundImage;
    mobileBackgroundImage;
    constructor(e) {
        ((this.type = k.g.SHELF),
            (this.name = e.name),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.categorySkuId = e.category_sku_id ?? null),
            (this.showButton = !1 !== e.show_button),
            (this.buttonText = e.button_text ?? null),
            (this.titleColor = e.title_color ?? null),
            (this.desktopBackgroundImage = e.desktop_background_image ?? null),
            (this.mobileBackgroundImage = e.mobile_background_image ?? null));
    }
    static fromServer(e) {
        return new $(e);
    }
}
class z {
    applicationId;
    headerText;
    subheaderText;
    gradientColors;
    gradientAngle;
    skuIds;
    endTime;
    ctaType;
    logoUrl;
    termsUrl;
    backgroundImageUrl;
    constructor(e) {
        ((this.type = k.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER),
            (this.applicationId = e.application_id),
            (this.headerText = e.header_text),
            (this.subheaderText = e.subheader_text),
            (this.gradientColors = e.gradient_colors),
            (this.gradientAngle = e.gradient_angle),
            (this.skuIds = e.sku_ids),
            (this.endTime = e.end_time),
            (this.ctaType = e.cta_type),
            (this.logoUrl = e.logo_url),
            (this.termsUrl = e.terms_url),
            (this.backgroundImageUrl = e.background_image_url));
    }
    static fromServer(e) {
        return new z(e);
    }
}
class X {
    title;
    body;
    categoryStoreListingId;
    bannerTextColor;
    bannerBodyTextColor;
    disableCta;
    bannerURL;
    bannerAnimatedURL;
    logoURL;
    ctaText;
    ctaRoute;
    isDismissible;
    dismissibleContentVersion;
    constructor(e) {
        ((this.type = k.g.WIDE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerBodyTextColor = e.banner_body_text_color),
            (this.disableCta = e.disable_cta),
            (this.bannerURL = e.wide_banner_url),
            (this.bannerAnimatedURL = e.wide_banner_animated_url),
            (this.logoURL = e.logo_url),
            (this.ctaText = e.cta_text),
            (this.ctaRoute = e.cta_route),
            (this.isDismissible = e.is_dismissible),
            (this.dismissibleContentVersion = e.dismissible_content_version));
    }
    static fromServer(e) {
        return new X(e);
    }
}
class q {
    shopBlocks;
    categories;
    constructor(e) {
        ((this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case k.g.HERO:
                        return Y.fromServer(e);
                    case k.g.FEATURED:
                        return H.fromServer(e);
                    case k.g.FEED:
                        return j.fromServer(e);
                    case k.g.WIDE_BANNER:
                        return X.fromServer(e);
                    case k.g.SHELF:
                        return $.fromServer(e);
                    case k.g.COUNTDOWN_TIMER:
                        return F.fromServer(e);
                    case k.g.IMMERSIVE_BANNER:
                        return K.fromServer(e);
                    case k.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return z.fromServer(e);
                    case k.g.GAME_SERVER_HOSTING_BANNER:
                        return W.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => N.A.fromServer(e))));
    }
    static fromServer(e) {
        return new q(e);
    }
}
var Z = n(100057),
    Q = n(181774);
function J(e) {
    let { tab: t, initialCollectionId: i, ...r } = e;
    {
        let { default: e } = n(830543),
            { default: a } = n(408166);
        (ee(r),
            e(),
            (0, E.M)(),
            a(),
            (0, _.pX)(
                null != i
                    ? G.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i)
                    : null != t
                      ? G.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)
                      : G.BVt.COLLECTIBLES_SHOP,
            ));
    }
}
function ee(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
}
function et(e) {
    o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
}
n(295811);
function en(e, t) {
    return (
        !!e?.noCache == !!t?.noCache &&
        !!e?.includeUnpublished == !!t?.includeUnpublished &&
        !!e?.includeBundles == !!t?.includeBundles &&
        !!e?.includeDynamicBlocks == !!t?.includeDynamicBlocks &&
        e?.countryCode === t?.countryCode &&
        e?.paymentGateway === t?.paymentGateway &&
        e?.shopHomeConfig === t?.shopHomeConfig &&
        e?.skipNumCategories === t?.skipNumCategories
    );
}
async function ei(e, t, n) {
    o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
    let i = (0, Q.ao)(e),
        r = c.Ay.get("shop_show_debug_overlay");
    (e?.logPerf &&
        (0, Z.z)({
            sessionId: n?.sessionId,
            checkpoint: Z.t.CATEGORIES_FETCH_STARTED,
            tab: n?.tab,
            unpublishedCategoriesShown: e?.includeUnpublished,
            cacheDisabled: e?.noCache,
        }),
        r && I(`fetchCollectiblesCategories started: ${JSON.stringify(i, null, 2)}`));
    try {
        let a = await l.Bo.get({ url: G.Rsh.COLLECTIBLES_CATEGORIES_V2, query: i, rejectWithError: !0 });
        (e?.logPerf &&
            (0, Z.z)({
                sessionId: n?.sessionId,
                checkpoint: Z.t.CATEGORIES_FETCH_COMPLETED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            r && I(`fetchCollectiblesCategories completed ${a.body.categories.length} categories`),
            o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: C.fromServer(a.body), noOp: t }));
    } catch (t) {
        let e = new d.LG(t);
        ((0, u.o)(e),
            o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
            r && I(`fetchCollectiblesCategories failed: ${e.message}`));
    }
}
async function er() {
    if (T.A.isFetching) return;
    o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
    let e = c.Ay.get("shop_show_debug_overlay");
    e && I("fetchCollectiblesPurchases started");
    try {
        let t = {
            url: G.Rsh.COLLECTIBLES_PURCHASES,
            rejectWithError: !0,
            query: { variants_return_style: s.g.VARIANTS_GROUP },
        };
        e && I(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
        let n = await l.Bo.get(t);
        (e && I(`fetchCollectiblesPurchases completed with ${n.body.length} purchases`),
            o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: n.body.map(x.fromServer) }));
    } catch (n) {
        let t = new d.LG(n);
        throw (
            (0, u.o)(t),
            e && I(`fetchCollectiblesPurchases failed: ${t.message}`),
            o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: t }),
            t
        );
    }
}
async function ea(e, t) {
    o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e, startedAt: Date.now() });
    try {
        let n = { locale: A.default.locale };
        (t?.countryCode !== null && (n.country_code = t?.countryCode),
            t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
            t?.includeBundles !== null && (n.include_bundles = t?.includeBundles));
        let i = await l.Bo.get({ url: G.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
        o.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
            skuId: e,
            product: b.A.fromServer(i.body),
            endedAt: Date.now(),
        });
    } catch (n) {
        let t = new d.LG(n);
        ((0, u.o)(t),
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t, endedAt: Date.now() }));
    }
}
async function es(e, t) {
    h.A.isFetchingProduct(e) || h.A.isProductFetchBackedOff(e) || (await ea(e, t));
}
function el(e) {
    let t = Date.now();
    for (let n of (0, g.XS)([e]))
        null == h.A.getProduct(n.skuId) &&
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: n.skuId, product: n, endedAt: t });
}
async function eo(e) {
    o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
    try {
        let t = await l.Bo.put({ url: G.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(x.fromServer) });
    } catch (n) {
        let t = new d.LG(n);
        throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
    }
}
async function ed(e, t) {
    try {
        return (
            await l.Bo.get({
                url: G.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                query: { sku_id: t, recipient_id: e },
                rejectWithError: !0,
            })
        ).body.valid;
    } catch (e) {
        return ((0, u.o)(new d.LG(e)), !1);
    }
}
async function ec(e) {
    let { release: t = a.P.PROD } = e;
    o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
    let n = { platform: r.DESKTOP };
    t !== a.P.PROD && (n.release = t);
    try {
        let e = await l.Bo.get({ url: G.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
        o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: v.fromServer(e.body) });
    } catch (e) {
        ((0, u.o)(new d.LG(e)), o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" }));
    }
}
function eu(e) {
    let { ttlMs: t } = e,
        n = p.A.getCachedMarketingsBySurfaces(t);
    return (
        null != n &&
        (o.h.dispatch({
            type: "COLLECTIBLES_MARKETING_CACHE_RESTORED",
            marketings: new v(
                Object.fromEntries(
                    Object.entries(n).map((e) => {
                        let [t, n] = e;
                        switch (n?.type) {
                            case O.G.BADGE:
                                return [t, R.fromPersisted(n)];
                            case O.G.BANNER:
                                return [t, L.fromPersisted(n)];
                            case O.G.COACHMARK:
                                return [t, y.fromPersisted(n)];
                            case O.G.TAB_TOOLTIP:
                                return [t, D.fromPersisted(n)];
                            default:
                                return [t, void 0];
                        }
                    }),
                ),
            ),
        }),
        !0)
    );
}
async function e_(e, t, n) {
    o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
    let i = (0, Q.ao)(t, e);
    t?.logPerf &&
        (0, Z.z)({
            sessionId: n?.sessionId,
            checkpoint: Z.t.SHOP_HOME_FETCH_STARTED,
            tab: n?.tab,
            unpublishedCategoriesShown: t?.includeUnpublished,
            cacheDisabled: t?.noCache,
        });
    try {
        let r = await l.Bo.get({ url: G.Rsh.COLLECTIBLES_SHOP, query: i, rejectWithError: !0 });
        (t?.logPerf &&
            (0, Z.z)({
                sessionId: n?.sessionId,
                checkpoint: Z.t.SHOP_HOME_FETCH_COMPLETED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            }),
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: e, shopHome: q.fromServer(r.body) }));
    } catch (n) {
        let t = new d.LG(n);
        ((0, u.o)(t), o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t }));
    }
}
function eE(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
}
function eA(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
}
function eh(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
}
async function ef(e) {
    let { tab: t, abortSignal: n } = e;
    if (m.A.isFetchingLayout(t)) return;
    let i = m.A.getLayoutFetchError(t);
    if (i?.status !== 404 && i?.status !== 429)
        try {
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
            let e = await l.Bo.get({ url: G.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab: t, layoutId: e.body.layout_id });
        } catch (n) {
            let e = new d.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: t, apiError: e }), e);
        }
}
