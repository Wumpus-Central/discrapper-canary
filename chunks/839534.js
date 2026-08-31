"use strict";
n.d(t, {
    rh: () => es,
    CK: () => en,
    h$: () => ec,
    BX: () => eA,
    JJ: () => eo,
    RE: () => ea,
    Or: () => eu,
    ue: () => eE,
    Jp: () => er,
    Sw: () => J,
    Cz: () => Q,
    iJ: () => el,
    RD: () => ee,
    gB: () => ei,
    T2: () => eh,
    gn: () => et,
    Aq: () => e_,
    LX: () => ed,
});
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    a = n(148803),
    s = n(635358),
    l = n(636537),
    o = n(228366);
n(398590);
var d = n(913122),
    c = n(865116),
    u = n(39418);
n(250953);
var _ = n(976860),
    E = n(773669),
    A = n(590180);
let h = (0, n(196765).v)((e) => ({
    logs: [],
    addLog: (t) => e((e) => ({ logs: [...e.logs, `[${new Date().toISOString().split("T")[0]}] ${t}`] })),
    clearLogs: () => e({ logs: [] }),
}));
function I(e) {
    let t = new Date().toLocaleTimeString("en-US", { hour12: !1 }),
        n = `[${t}] ${e}`;
    h.getState().addLog(n);
}
var f = n(4227),
    p = n(870216),
    T = n(993408),
    m = n(442007),
    g = n(510801);
class S {
    categories;
    collections;
    constructor(e) {
        (this.categories = e.categories.map((e) => g.A.fromServer(e))),
            (this.collections = e.collections.map((e) => m.A.fromServer(e)));
    }
    static fromServer(e) {
        return new S(e);
    }
}
var N = n(488430);
class C {
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    showHoverGradient;
    constructor(e) {
        (this.type = N.G.BADGE),
            (this.dismissibleContent = e.dismissibleContent),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.showHoverGradient = e.showHoverGradient);
    }
    static fromServer(e) {
        return new C({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            showHoverGradient: e.show_hover_gradient,
        });
    }
}
class O {
    title;
    body;
    asset;
    popoutAsset;
    version;
    revertTextColor;
    constructor(e) {
        (this.type = N.G.BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.popoutAsset = e.popout_asset),
            (this.version = e.version),
            (this.revertTextColor = e.revert_text_color);
    }
    static fromServer(e) {
        return new O(e);
    }
}
class R {
    title;
    body;
    assetDark;
    assetLight;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    buttonLabel;
    constructor(e) {
        (this.type = N.G.COACHMARK),
            (this.title = e.title),
            (this.body = e.body),
            (this.assetDark = e.assetDark),
            (this.assetLight = e.assetLight),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.buttonLabel = e.buttonLabel);
    }
    static fromServer(e) {
        return new R({
            ...e,
            assetDark: e.asset_dark,
            assetLight: e.asset_light,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            buttonLabel: e.button_label,
        });
    }
}
class L {
    title;
    body;
    asset;
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    showHoverGradient;
    constructor(e) {
        (this.type = N.G.TAB_TOOLTIP),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.dismissibleContent = e.dismissibleContent),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.showHoverGradient = e.showHoverGradient);
    }
    static fromServer(e) {
        return new L({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            showHoverGradient: e.show_hover_gradient,
        });
    }
}
class y {
    marketingsBySurfaces;
    constructor(e) {
        this.marketingsBySurfaces = e;
    }
    static fromServer(e) {
        return new y(
            Object.fromEntries(
                Object.entries(e?.marketings ?? {}).map((e) => {
                    let [t, n] = e;
                    switch (n?.type) {
                        case N.G.BADGE:
                            return [t, C.fromServer(n)];
                        case N.G.BANNER:
                            return [t, O.fromServer(n)];
                        case N.G.COACHMARK:
                            return [t, R.fromServer(n)];
                        case N.G.TAB_TOOLTIP:
                            return [t, L.fromServer(n)];
                        default:
                            return [t, void 0];
                    }
                }),
            ),
        );
    }
}
var D = n(986630),
    v = n(384726),
    b = n(696444),
    M = n(474012),
    P = n(758836),
    U = n(652215);
class w {
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
        (this.skuId = e.skuId),
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
            (this.expiresAt = e.expiresAt);
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
            ...I
        } = e;
        return new w({
            type: t,
            name: i,
            skuId: n,
            premiumType: r === U.oA2 ? null : r,
            categorySkuId: a,
            isCategoryReward: P.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, v.A)(s),
            items: (0, M.K)(I.items),
            bundledProducts: l?.map(b.A.fromServer),
            variants: o?.map(D.x.fromServer),
            googleSkuIds: I.google_sku_ids,
            eligibleOffers: I.eligible_offers,
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
var G = n(651162);
class x {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        (this.type = G.g.COUNTDOWN_TIMER),
            (this.title = e.title),
            (this.body = e.body),
            (this.bannerUrl = e.banner_url),
            (this.endTime = new Date(e.end_time)),
            (this.textColor = e.text_color);
    }
    static fromServer(e) {
        return new x(e);
    }
}
var k = n(424918);
class F {
    categoryStoreListingId;
    categorySkuId;
    name;
    unpublishedAt;
    bodyText;
    bannerTextColor;
    bannerUrl;
    assetUrl;
    constructor(e) {
        (this.type = k.u.CATEGORY),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.categorySkuId = e.category_sku_id),
            (this.name = e.name),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bodyText = e.body_text),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerUrl = e.banner_url),
            (this.assetUrl = e.asset_url);
    }
    static fromServer(e) {
        return new F(e);
    }
}
class V {
    subblocks;
    constructor(e) {
        (this.type = G.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === k.u.CATEGORY ? F.fromServer(e) : (e.type, e))));
    }
    static fromServer(e) {
        return new V(e);
    }
}
class B {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        (this.type = G.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids);
    }
    static fromServer(e) {
        return new B(e);
    }
}
class H {
    isDismissible;
    constructor(e) {
        (this.type = G.g.GAME_SERVER_HOSTING_BANNER), (this.isDismissible = e.is_dismissible);
    }
    static fromServer(e) {
        return new H(e);
    }
}
class j {
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
        (this.type = G.g.HERO),
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
            (this.bannerDisplayConfig = (0, T.f6)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, T.f6)(e.logo_display_config));
    }
    static fromServer(e) {
        return new j(e);
    }
}
class W {
    title;
    body;
    helpCenterUrl;
    textColor;
    endTime;
    bannerUrl;
    bannerAnimatedUrl;
    constructor(e) {
        (this.type = G.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url);
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
    rewardSkuId;
    heroBannerUrl;
    heroBannerAnimatedUrl;
    heroRiveUrl;
    heroLogoUrl;
    mobileHeroUrl;
    mobileHeroAnimatedUrl;
    bannerDisplayConfig;
    logoDisplayConfig;
    constructor(e) {
        (this.type = G.g.REWARD_HERO),
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
            (this.rewardSkuId = e.reward_sku_id),
            (this.heroBannerUrl = e.hero_banner_url),
            (this.heroBannerAnimatedUrl = e.hero_banner_animated_url),
            (this.heroRiveUrl = e.hero_rive_url),
            (this.heroLogoUrl = e.hero_logo_url),
            (this.mobileHeroUrl = e.mobile_hero_url),
            (this.mobileHeroAnimatedUrl = e.mobile_hero_animated_url),
            (this.logoDisplayConfig = (0, T.f6)(e.logo_display_config)),
            (this.bannerDisplayConfig = (0, T.f6)(e.banner_display_config));
    }
    static fromServer(e) {
        return new Y(e);
    }
}
class K {
    name;
    rankedSkuIds;
    categorySkuId;
    showButton;
    buttonText;
    titleColor;
    desktopBackgroundImage;
    mobileBackgroundImage;
    constructor(e) {
        (this.type = G.g.SHELF),
            (this.name = e.name),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.categorySkuId = e.category_sku_id ?? null),
            (this.showButton = !1 !== e.show_button),
            (this.buttonText = e.button_text ?? null),
            (this.titleColor = e.title_color ?? null),
            (this.desktopBackgroundImage = e.desktop_background_image ?? null),
            (this.mobileBackgroundImage = e.mobile_background_image ?? null);
    }
    static fromServer(e) {
        return new K(e);
    }
}
class $ {
    applicationId;
    headerText;
    gradientColors;
    gradientAngle;
    skuIds;
    endTime;
    ctaType;
    logoUrl;
    constructor(e) {
        (this.type = G.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER),
            (this.applicationId = e.application_id),
            (this.headerText = e.header_text),
            (this.gradientColors = e.gradient_colors),
            (this.gradientAngle = e.gradient_angle),
            (this.skuIds = e.sku_ids),
            (this.endTime = e.end_time),
            (this.ctaType = e.cta_type),
            (this.logoUrl = e.logo_url);
    }
    static fromServer(e) {
        return new $(e);
    }
}
class z {
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
        (this.type = G.g.WIDE_BANNER),
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
            (this.dismissibleContentVersion = e.dismissible_content_version);
    }
    static fromServer(e) {
        return new z(e);
    }
}
class q {
    shopBlocks;
    categories;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case G.g.HERO:
                        return j.fromServer(e);
                    case G.g.FEATURED:
                        return V.fromServer(e);
                    case G.g.FEED:
                        return B.fromServer(e);
                    case G.g.WIDE_BANNER:
                        return z.fromServer(e);
                    case G.g.SHELF:
                        return K.fromServer(e);
                    case G.g.COUNTDOWN_TIMER:
                        return x.fromServer(e);
                    case G.g.IMMERSIVE_BANNER:
                        return W.fromServer(e);
                    case G.g.REWARD_HERO:
                        return Y.fromServer(e);
                    case G.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return $.fromServer(e);
                    case G.g.GAME_SERVER_HOSTING_BANNER:
                        return H.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => g.A.fromServer(e)));
    }
    static fromServer(e) {
        return new q(e);
    }
}
var Z = n(100057),
    X = n(181774);
function Q(e) {
    let { tab: t, ...i } = e;
    {
        let { default: e } = n(830543),
            { default: r } = n(408166),
            { closeUserProfileModal: a } = n(975732);
        J(i), e(), a(), r(), (0, _.pX)(null != t ? U.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : U.BVt.COLLECTIBLES_SHOP);
    }
}
function J(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
}
function ee(e) {
    o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
}
n(457421), n(295811);
function et(e, t) {
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
async function en(e, t, n) {
    o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
    let i = (0, X.ao)(e),
        r = c.Ay.get("shop_show_debug_overlay");
    e?.logPerf &&
        (0, Z.z)({
            sessionId: n?.sessionId,
            checkpoint: Z.t.CATEGORIES_FETCH_STARTED,
            tab: n?.tab,
            unpublishedCategoriesShown: e?.includeUnpublished,
            cacheDisabled: e?.noCache,
        }),
        r && I(`fetchCollectiblesCategories started: ${JSON.stringify(i, null, 2)}`);
    try {
        let a = await l.Bo.get({ url: U.Rsh.COLLECTIBLES_CATEGORIES_V2, query: i, rejectWithError: !0 });
        e?.logPerf &&
            (0, Z.z)({
                sessionId: n?.sessionId,
                checkpoint: Z.t.CATEGORIES_FETCH_COMPLETED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            r && I(`fetchCollectiblesCategories completed ${a.body.categories.length} categories`),
            o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: S.fromServer(a.body), noOp: t });
    } catch (t) {
        let e = new d.LG(t);
        (0, u.o)(e),
            o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
            r && I(`fetchCollectiblesCategories failed: ${e.message}`);
    }
}
async function ei() {
    if (f.A.isFetching) return;
    o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
    let e = c.Ay.get("shop_show_debug_overlay");
    e && I("fetchCollectiblesPurchases started");
    try {
        let t = {
            url: U.Rsh.COLLECTIBLES_PURCHASES,
            rejectWithError: !0,
            query: { variants_return_style: s.g.VARIANTS_GROUP },
        };
        e && I(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
        let n = await l.Bo.get(t);
        e && I(`fetchCollectiblesPurchases completed with ${n.body.length} purchases`),
            o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: n.body.map(w.fromServer) });
    } catch (n) {
        let t = new d.LG(n);
        throw (
            ((0, u.o)(t),
            e && I(`fetchCollectiblesPurchases failed: ${t.message}`),
            o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: t }),
            t)
        );
    }
}
async function er(e, t) {
    o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e, startedAt: Date.now() });
    try {
        let n = { locale: E.default.locale };
        t?.countryCode !== null && (n.country_code = t?.countryCode),
            t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
            t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
        let i = await l.Bo.get({ url: U.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
        o.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
            skuId: e,
            product: D.A.fromServer(i.body),
            endedAt: Date.now(),
        });
    } catch (n) {
        let t = new d.LG(n);
        (0, u.o)(t),
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t, endedAt: Date.now() });
    }
}
async function ea(e, t) {
    A.A.isFetchingProduct(e) || A.A.isProductFetchBackedOff(e) || (await er(e, t));
}
function es(e) {
    let t = Date.now();
    for (let n of (0, T.XS)([e]))
        null == A.A.getProduct(n.skuId) &&
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: n.skuId, product: n, endedAt: t });
}
async function el(e) {
    o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
    try {
        let t = await l.Bo.put({ url: U.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(w.fromServer) });
    } catch (n) {
        let t = new d.LG(n);
        throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
    }
}
async function eo(e, t) {
    try {
        return (
            await l.Bo.get({
                url: U.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                query: { sku_id: t, recipient_id: e },
                rejectWithError: !0,
            })
        ).body.valid;
    } catch (e) {
        return (0, u.o)(new d.LG(e)), !1;
    }
}
async function ed(e) {
    let { release: t = a.P.PROD } = e;
    o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
    let n = { platform: r.DESKTOP };
    t !== a.P.PROD && (n.release = t);
    try {
        let e = await l.Bo.get({ url: U.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
        o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: y.fromServer(e.body) });
    } catch (e) {
        (0, u.o)(new d.LG(e)), o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
    }
}
async function ec(e, t, n) {
    o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
    let i = (0, X.ao)(t, e);
    t?.logPerf &&
        (0, Z.z)({
            sessionId: n?.sessionId,
            checkpoint: Z.t.SHOP_HOME_FETCH_STARTED,
            tab: n?.tab,
            unpublishedCategoriesShown: t?.includeUnpublished,
            cacheDisabled: t?.noCache,
        });
    try {
        let r = await l.Bo.get({ url: U.Rsh.COLLECTIBLES_SHOP, query: i, rejectWithError: !0 });
        t?.logPerf &&
            (0, Z.z)({
                sessionId: n?.sessionId,
                checkpoint: Z.t.SHOP_HOME_FETCH_COMPLETED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            }),
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: e, shopHome: q.fromServer(r.body) });
    } catch (n) {
        let t = new d.LG(n);
        (0, u.o)(t), o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
    }
}
function eu(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
}
function e_(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
}
function eE(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
}
async function eA(e, t) {
    o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
    try {
        let n = await l.Bo.put({
            url: U.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
            body: { category_id: e },
            rejectWithError: !0,
        });
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(w.fromServer) });
    } catch (n) {
        let e = new d.LG(n);
        throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
    }
}
async function eh(e) {
    let { tab: t, abortSignal: n } = e;
    if (p.A.isFetchingLayout(t)) return;
    let i = p.A.getLayoutFetchError(t);
    if (i?.status !== 404 && i?.status !== 429)
        try {
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
            let e = await l.Bo.get({ url: U.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab: t, layoutId: e.body.layout_id });
        } catch (n) {
            let e = new d.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: t, apiError: e }), e);
        }
}
