"use strict";
n.d(t, {
    h$: () => eA,
    CK: () => e_,
    BX: () => eN,
    JJ: () => em,
    RE: () => ep,
    Or: () => eI,
    ue: () => eS,
    Jp: () => eh,
    Sw: () => eu,
    Cz: () => el,
    iJ: () => eE,
    RD: () => ec,
    gB: () => ef,
    T2: () => ey,
    gn: () => ed,
    Aq: () => eT,
    LX: () => eg,
});
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    s = n(148803),
    a = n(635358),
    o = n(636537),
    l = n(228366);
n(398590);
var u = n(913122),
    c = n(865116);
n(250953),
    (0, n(240921).Ay)({
        name: "2026-01-you-bar",
        kind: "user",
        defaultConfig: { enabled: !1, animateBetweenServers: !1, questDockEnabled: !1, largeAvatarEnabled: !1 },
        variations: {
            1: { enabled: !0, animateBetweenServers: !1, questDockEnabled: !0, largeAvatarEnabled: !1 },
            2: { enabled: !0, animateBetweenServers: !1, questDockEnabled: !0, largeAvatarEnabled: !0 },
            3: { enabled: !0, animateBetweenServers: !1, questDockEnabled: !1, largeAvatarEnabled: !0 },
        },
    });
var d = n(976860),
    _ = n(773669),
    f = n(590180);
let h = (0, n(353640).v)((e) => ({
        logs: [],
        addLog: (t) => e((e) => ({ logs: [...e.logs, `[${new Date().toISOString().split("T")[0]}] ${t}`] })),
        clearLogs: () => e({ logs: [] }),
    })),
    p = (e) => {
        let t = new Date().toLocaleTimeString("en-US", { hour12: !1 }),
            n = `[${t}] ${e}`;
        h.getState().addLog(n);
    };
var E = n(4227),
    m = n(870216),
    g = n(440745),
    A = n.n(g),
    I = n(317097),
    T = n(315069);
class S extends T.A {
    backgroundColors;
    buttonColors;
    confettiColors;
    constructor(e) {
        super(),
            (this.backgroundColors = e.backgroundColors),
            (this.buttonColors = e.buttonColors),
            (this.confettiColors = e.confettiColors);
    }
    static fromServer(e) {
        let { background_colors: t, button_colors: n, confetti_colors: i } = e;
        return new S({
            backgroundColors: t.map((e) => A()((0, I.Hl)(e))),
            buttonColors: n.map((e) => A()((0, I.Hl)(e))),
            confettiColors: i.map((e) => A()((0, I.Hl)(e))),
        });
    }
}
var N = n(719986),
    y = n(32731);
class C {
    id;
    skuIds;
    name;
    summary;
    options;
    createdAt;
    updatedAt;
    skus;
    primaryCollectionId;
    primaryCollectionStyles;
    primaryCollectionPdpBgUrl;
    primaryCollectionWillUnpublishAt;
    constructor(e) {
        (this.id = e.id),
            (this.skuIds = e.skuIds),
            (this.name = e.name),
            (this.summary = e.summary),
            (this.options = e.options),
            (this.createdAt = e.createdAt),
            (this.updatedAt = e.updatedAt),
            (this.skus = e.skus),
            (this.primaryCollectionId = e.primaryCollectionId),
            (this.primaryCollectionStyles = e.primaryCollectionStyles),
            (this.primaryCollectionPdpBgUrl = e.primaryCollectionPdpBgUrl),
            (this.primaryCollectionWillUnpublishAt = e.primaryCollectionWillUnpublishAt);
    }
    static fromServer(e) {
        let { sku_ids: t, options: n, created_at: i, updated_at: r, skus: s, tenant_metadata: a, ...o } = e;
        return new C({
            ...o,
            skuIds: t,
            options: n.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(i),
            updatedAt: new Date(r),
            skus: s.map((e) => y.A.createFromServer(e)),
            primaryCollectionId: a.collectibles.primary_collection_id,
            primaryCollectionStyles:
                null != a.collectibles.primary_collection_styles
                    ? S.fromServer(a.collectibles.primary_collection_styles)
                    : void 0,
            primaryCollectionPdpBgUrl: a.collectibles.primary_collection_pdp_bg_url,
            primaryCollectionWillUnpublishAt:
                null != a.collectibles.primary_collection_will_unpublish_at
                    ? new Date(a.collectibles.primary_collection_will_unpublish_at)
                    : void 0,
        });
    }
}
class v {
    id;
    applicationId;
    name;
    description;
    products;
    createdAt;
    updatedAt;
    unpublishedAt;
    willUnpublishAt;
    styles;
    bannerTextColor;
    heroRanking;
    heroDisplayConfig;
    heroLogoDisplayConfig;
    heroUrl;
    heroRiveUrl;
    heroAnimatedUrl;
    heroLogoUrl;
    heroBannerUrl;
    heroBannerAnimatedUrl;
    catalogBannerUrl;
    catalogBannerRiveUrl;
    catalogBannerAnimatedUrl;
    featuredBlockUrl;
    logoUrl;
    pdpBgUrl;
    wideBannerUrl;
    wideBannerAnimatedUrl;
    mobileHeroUrl;
    mobileHeroAnimatedUrl;
    mobileBannerUrl;
    mobileBgUrl;
    shopButtonBgHoverUrl;
    upsellBannerPopoutUrl;
    upsellBannerUrl;
    heroBlockTitle;
    featuredBlockBody;
    mobileHeroBlockTitle;
    mobileProductsTitle;
    mobileSummary;
    wideBannerTitle;
    wideBannerBody;
    constructor(e) {
        (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.name = e.name),
            (this.description = e.description),
            (this.products = e.products),
            (this.createdAt = e.createdAt),
            (this.updatedAt = e.updatedAt),
            (this.unpublishedAt = e.unpublishedAt),
            (this.willUnpublishAt = e.willUnpublishAt),
            (this.styles = e.styles),
            (this.bannerTextColor = e.bannerTextColor),
            (this.heroRanking = e.heroRanking),
            (this.heroDisplayConfig = e.heroDisplayConfig),
            (this.heroLogoDisplayConfig = e.heroLogoDisplayConfig),
            (this.heroUrl = e.heroUrl),
            (this.heroRiveUrl = e.heroRiveUrl),
            (this.heroAnimatedUrl = e.heroAnimatedUrl),
            (this.heroLogoUrl = e.heroLogoUrl),
            (this.heroBannerUrl = e.heroBannerUrl),
            (this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl),
            (this.catalogBannerUrl = e.catalogBannerUrl),
            (this.catalogBannerRiveUrl = e.catalogBannerRiveUrl),
            (this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl),
            (this.featuredBlockUrl = e.featuredBlockUrl),
            (this.logoUrl = e.logoUrl),
            (this.pdpBgUrl = e.pdpBgUrl),
            (this.wideBannerUrl = e.wideBannerUrl),
            (this.wideBannerAnimatedUrl = e.wideBannerAnimatedUrl),
            (this.mobileHeroUrl = e.mobileHeroUrl),
            (this.mobileHeroAnimatedUrl = e.mobileHeroAnimatedUrl),
            (this.mobileBannerUrl = e.mobileBannerUrl),
            (this.mobileBgUrl = e.mobileBgUrl),
            (this.shopButtonBgHoverUrl = e.shopButtonBgHoverUrl),
            (this.upsellBannerPopoutUrl = e.upsellBannerPopoutUrl),
            (this.upsellBannerUrl = e.upsellBannerUrl),
            (this.heroBlockTitle = e.heroBlockTitle),
            (this.featuredBlockBody = e.featuredBlockBody),
            (this.mobileHeroBlockTitle = e.mobileHeroBlockTitle),
            (this.mobileProductsTitle = e.mobileProductsTitle),
            (this.mobileSummary = e.mobileSummary),
            (this.wideBannerTitle = e.wideBannerTitle),
            (this.wideBannerBody = e.wideBannerBody);
    }
    static fromServer(e) {
        let {
            application_id: t,
            created_at: n,
            updated_at: i,
            unpublished_at: r,
            unpublish_settings: s,
            tenant_metadata: a,
            ...o
        } = e;
        return new v({
            ...o,
            applicationId: t,
            products: o.products.map(C.fromServer),
            createdAt: new Date(n),
            updatedAt: new Date(i),
            unpublishedAt: null != r ? new Date(r) : void 0,
            willUnpublishAt: s?.will_unpublish_at != null ? new Date(s.will_unpublish_at) : void 0,
            styles: null != a.collectibles.styles ? S.fromServer(a.collectibles.styles) : void 0,
            bannerTextColor: a.collectibles.banner_text_color,
            heroRanking: a.collectibles.hero_ranking,
            heroDisplayConfig:
                null != a.collectibles.hero_display_config
                    ? N.M.fromServer(a.collectibles.hero_display_config)
                    : void 0,
            heroLogoDisplayConfig:
                null != a.collectibles.hero_logo_display_config
                    ? N.M.fromServer(a.collectibles.hero_logo_display_config)
                    : void 0,
            heroUrl: a.collectibles.hero_url,
            heroRiveUrl: a.collectibles.hero_rive_url,
            heroAnimatedUrl: a.collectibles.hero_animated_url,
            heroLogoUrl: a.collectibles.hero_logo_url,
            heroBannerUrl: a.collectibles.hero_banner_url,
            heroBannerAnimatedUrl: a.collectibles.hero_banner_animated_url,
            catalogBannerUrl: a.collectibles.catalog_banner_url,
            catalogBannerRiveUrl: a.collectibles.catalog_banner_rive_url,
            catalogBannerAnimatedUrl: a.collectibles.catalog_banner_animated_url,
            featuredBlockUrl: a.collectibles.featured_block_url,
            logoUrl: a.collectibles.logo_url,
            pdpBgUrl: a.collectibles.pdp_bg_url,
            wideBannerUrl: a.collectibles.wide_banner_url,
            wideBannerAnimatedUrl: a.collectibles.wide_banner_animated_url,
            mobileHeroUrl: a.collectibles.mobile_hero_url,
            mobileHeroAnimatedUrl: a.collectibles.mobile_hero_animated_url,
            mobileBannerUrl: a.collectibles.mobile_banner_url,
            mobileBgUrl: a.collectibles.mobile_bg_url,
            shopButtonBgHoverUrl: a.collectibles.shop_button_bg_hover_url,
            upsellBannerPopoutUrl: a.collectibles.upsell_banner_popout_url,
            upsellBannerUrl: a.collectibles.upsell_banner_url,
            heroBlockTitle: a.collectibles.hero_block_title,
            featuredBlockBody: a.collectibles.featured_block_body,
            mobileHeroBlockTitle: a.collectibles.mobile_hero_block_title,
            mobileProductsTitle: a.collectibles.mobile_products_title,
            mobileSummary: a.collectibles.mobile_summary,
            wideBannerTitle: a.collectibles.wide_banner_title,
            wideBannerBody: a.collectibles.wide_banner_body,
        });
    }
}
var O = n(510801),
    R = n(419709);
class b {
    categories;
    collections;
    userDiscounts;
    constructor(e) {
        (this.categories = e.categories.map((e) => O.A.fromServer(e))),
            (this.collections = e.collections.map((e) => v.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => R.T.fromServer(e)));
    }
    static fromServer(e) {
        return new b(e);
    }
}
var D = n(488430);
class L {
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    showHoverGradient;
    constructor(e) {
        (this.type = D.G.BADGE),
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
class w {
    title;
    body;
    asset;
    popoutAsset;
    version;
    revertTextColor;
    constructor(e) {
        (this.type = D.G.BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.popoutAsset = e.popout_asset),
            (this.version = e.version),
            (this.revertTextColor = e.revert_text_color);
    }
    static fromServer(e) {
        return new w(e);
    }
}
class M {
    title;
    body;
    assetDark;
    assetLight;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    constructor(e) {
        (this.type = D.G.COACHMARK),
            (this.title = e.title),
            (this.body = e.body),
            (this.assetDark = e.assetDark),
            (this.assetLight = e.assetLight),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText);
    }
    static fromServer(e) {
        return new M({
            ...e,
            assetDark: e.asset_dark,
            assetLight: e.asset_light,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
        });
    }
}
class P {
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
        (this.type = D.G.TAB_TOOLTIP),
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
        return new P({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            showHoverGradient: e.show_hover_gradient,
        });
    }
}
class x {
    marketingsBySurfaces;
    constructor(e) {
        this.marketingsBySurfaces = e;
    }
    static fromServer(e) {
        return new x(
            Object.fromEntries(
                Object.entries(e?.marketings ?? {}).map((e) => {
                    let [t, n] = e;
                    return n?.type === D.G.BADGE
                        ? [t, L.fromServer(n)]
                        : n?.type === D.G.BANNER
                          ? [t, w.fromServer(n)]
                          : n?.type === D.G.COACHMARK
                            ? [t, M.fromServer(n)]
                            : n?.type === D.G.TAB_TOOLTIP
                              ? [t, P.fromServer(n)]
                              : [t, void 0];
                }),
            ),
        );
    }
}
var U = n(986630),
    k = n(384726),
    G = n(696444),
    F = n(474012),
    V = n(758836),
    B = n(652215);
class H {
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
            category_sku_id: s,
            prices: a,
            bundled_products: o,
            variants: l,
            base_variant_name: u,
            base_variant_sku_id: c,
            variant_label: d,
            variant_value: _,
            purchased_at: f,
            purchase_type: h,
            expires_at: p,
            ...E
        } = e;
        return new H({
            type: t,
            name: i,
            skuId: n,
            premiumType: r === B.oA2 ? null : r,
            categorySkuId: s,
            isCategoryReward: V.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, k.A)(a),
            items: (0, F.K)(E.items),
            bundledProducts: o?.map(G.A.fromServer),
            variants: l?.map(U.x.fromServer),
            googleSkuIds: E.google_sku_ids,
            eligibleOffers: E.eligible_offers,
            baseVariantName: u,
            baseVariantSkuId: c,
            variantLabel: d,
            variantValue: _,
            purchaseType: h,
            purchasedAt: null != f ? new Date(f) : f,
            expiresAt: null != p ? new Date(p) : null,
        });
    }
}
var j = n(651162);
class Y {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        (this.type = j.g.COUNTDOWN_TIMER),
            (this.title = e.title),
            (this.body = e.body),
            (this.bannerUrl = e.banner_url),
            (this.endTime = new Date(e.end_time)),
            (this.textColor = e.text_color);
    }
    static fromServer(e) {
        return new Y(e);
    }
}
var W = n(424918);
class K {
    categoryStoreListingId;
    name;
    unpublishedAt;
    bodyText;
    bannerTextColor;
    bannerUrl;
    assetUrl;
    constructor(e) {
        (this.type = W.u.CATEGORY),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.name = e.name),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bodyText = e.body_text),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerUrl = e.banner_url),
            (this.assetUrl = e.asset_url);
    }
    static fromServer(e) {
        return new K(e);
    }
}
class z {
    subblocks;
    constructor(e) {
        (this.type = j.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === W.u.CATEGORY ? K.fromServer(e) : e)));
    }
    static fromServer(e) {
        return new z(e);
    }
}
class $ {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        (this.type = j.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids);
    }
    static fromServer(e) {
        return new $(e);
    }
}
var q = n(325595);
class Z {
    title;
    categorySkuId;
    categoryStoreListingId;
    rankedSkuIds;
    desktopBackgroundImage;
    mobileBackgroundImage;
    buttonText;
    constructor(e) {
        (this.type = j.g.FRAMES_PRODUCT_SHELF),
            (this.title = e.title),
            (this.categorySkuId = e.category_sku_id),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.rankedSkuIds = e.ranked_sku_ids ?? []),
            (this.desktopBackgroundImage = e.desktop_background_image ?? e.background_image),
            (this.mobileBackgroundImage = e.mobile_background_image ?? e.background_image),
            (this.buttonText = e.button_text);
    }
    static fromServer(e) {
        return new Z(e);
    }
}
var X = n(993408);
class Q {
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
        (this.type = j.g.HERO),
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
            (this.bannerDisplayConfig = (0, X.f6)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, X.f6)(e.logo_display_config));
    }
    static fromServer(e) {
        return new Q(e);
    }
}
class J {
    title;
    body;
    helpCenterUrl;
    textColor;
    endTime;
    bannerUrl;
    bannerAnimatedUrl;
    constructor(e) {
        (this.type = j.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url);
    }
    static fromServer(e) {
        return new J(e);
    }
}
class ee {
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
        (this.type = j.g.REWARD_HERO),
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
            (this.logoDisplayConfig = (0, X.f6)(e.logo_display_config)),
            (this.bannerDisplayConfig = (0, X.f6)(e.banner_display_config));
    }
    static fromServer(e) {
        return new ee(e);
    }
}
class et {
    name;
    categorySkuId;
    rankedSkuIds;
    constructor(e) {
        (this.type = j.g.SHELF),
            (this.name = e.name),
            (this.categorySkuId = e.category_sku_id),
            (this.rankedSkuIds = e.ranked_sku_ids);
    }
    static fromServer(e) {
        return new et(e);
    }
}
class en {
    applicationId;
    headerText;
    gradientColors;
    gradientAngle;
    skuIds;
    endTime;
    constructor(e) {
        (this.type = j.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER),
            (this.applicationId = e.application_id),
            (this.headerText = e.header_text),
            (this.gradientColors = e.gradient_colors),
            (this.gradientAngle = e.gradient_angle),
            (this.skuIds = e.sku_ids),
            (this.endTime = e.end_time);
    }
    static fromServer(e) {
        return new en(e);
    }
}
var ei = n(893998);
class er {
    shopBlocks;
    categories;
    userDiscounts;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case j.g.HERO:
                        return Q.fromServer(e);
                    case j.g.FEATURED:
                        return z.fromServer(e);
                    case j.g.FEED:
                        return $.fromServer(e);
                    case j.g.WIDE_BANNER:
                        return ei.y.fromServer(e);
                    case j.g.SHELF:
                        return et.fromServer(e);
                    case j.g.COUNTDOWN_TIMER:
                        return Y.fromServer(e);
                    case j.g.IMMERSIVE_BANNER:
                        return J.fromServer(e);
                    case j.g.REWARD_HERO:
                        return ee.fromServer(e);
                    case j.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return en.fromServer(e);
                    case j.g.FRAMES_BANNER:
                        return q.p.fromServer(e);
                    case j.g.FRAMES_PRODUCT_SHELF:
                        return Z.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => O.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => R.T.fromServer(e)));
    }
    static fromServer(e) {
        return new er(e);
    }
}
var es = n(100057),
    ea = n(181774),
    eo = n(18572);
n(457421), n(295811);
let el = (e) => {
        let { tab: t, ...i } = e;
        {
            let { default: e } = n(830543),
                { default: r } = n(408166);
            eu(i), e(), r(), (0, d.pX)(null != t ? B.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : B.BVt.COLLECTIBLES_SHOP);
        }
    },
    eu = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
    },
    ec = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
    },
    ed = (e, t) =>
        !!e?.noCache == !!t?.noCache &&
        !!e?.includeUnpublished == !!t?.includeUnpublished &&
        !!e?.includeBundles == !!t?.includeBundles &&
        !!e?.includeDynamicBlocks == !!t?.includeDynamicBlocks &&
        e?.countryCode === t?.countryCode &&
        e?.paymentGateway === t?.paymentGateway &&
        e?.shopHomeConfig === t?.shopHomeConfig &&
        e?.skipNumCategories === t?.skipNumCategories,
    e_ = async (e, t, n) => {
        l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
        let i = (0, ea.ao)(e),
            r = c.Ay.get("shop_show_debug_overlay");
        e?.logPerf &&
            (0, es.z)({
                sessionId: n?.sessionId,
                checkpoint: es.t.CATEGORIES_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            r && p(`fetchCollectiblesCategories started: ${JSON.stringify(i, null, 2)}`);
        try {
            let s = await o.Bo.get({ url: B.Rsh.COLLECTIBLES_CATEGORIES_V2, query: i, rejectWithError: !0 });
            e?.logPerf &&
                (0, es.z)({
                    sessionId: n?.sessionId,
                    checkpoint: es.t.CATEGORIES_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: e?.includeUnpublished,
                    cacheDisabled: e?.noCache,
                }),
                r && p(`fetchCollectiblesCategories completed ${s.body.categories.length} categories`),
                l.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: b.fromServer(s.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new u.LG(t);
            (0, eo.o)(e),
                l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
                r && p(`fetchCollectiblesCategories failed: ${e.message}`);
        }
    },
    ef = async () => {
        if (E.A.isFetching) return;
        l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let e = c.Ay.get("shop_show_debug_overlay");
        e && p("fetchCollectiblesPurchases started");
        try {
            let t = {
                url: B.Rsh.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
                query: { variants_return_style: a.g.VARIANTS_GROUP },
            };
            e && p(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
            let n = await o.Bo.get(t);
            e && p(`fetchCollectiblesPurchases completed with ${n.body.length} purchases`),
                l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: n.body.map(H.fromServer) });
        } catch (n) {
            let t = new u.LG(n);
            throw (
                ((0, eo.o)(t),
                e && p(`fetchCollectiblesPurchases failed: ${t.message}`),
                l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: t }),
                t)
            );
        }
    },
    eh = async (e, t) => {
        l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e, startedAt: Date.now() });
        try {
            let n = { locale: _.default.locale };
            t?.countryCode !== null && (n.country_code = t?.countryCode),
                t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
                t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
            let i = await o.Bo.get({ url: B.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
            l.h.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                skuId: e,
                product: U.A.fromServer(i.body),
                endedAt: Date.now(),
            });
        } catch (n) {
            let t = new u.LG(n);
            (0, eo.o)(t),
                l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t, endedAt: Date.now() });
        }
    },
    ep = async (e, t) => {
        f.A.isFetchingProduct(e) || (await eh(e, t));
    },
    eE = async (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
        try {
            let t = await o.Bo.put({ url: B.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
            l.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(H.fromServer) });
        } catch (n) {
            let t = new u.LG(n);
            throw (l.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
        }
    },
    em = async (e, t) => {
        try {
            return (
                await o.Bo.get({
                    url: B.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: { sku_id: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, eo.o)(new u.LG(e)), !1;
        }
    },
    eg = async (e) => {
        let { release: t = s.P.PROD } = e;
        l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.DESKTOP };
        t !== s.P.PROD && (n.release = t);
        try {
            let e = await o.Bo.get({ url: B.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
            l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: x.fromServer(e.body) });
        } catch (e) {
            (0, eo.o)(new u.LG(e)), l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    eA = async (e, t, n) => {
        l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
        let i = (0, ea.ao)(t, e);
        t?.logPerf &&
            (0, es.z)({
                sessionId: n?.sessionId,
                checkpoint: es.t.SHOP_HOME_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            });
        try {
            let r = await o.Bo.get({ url: B.Rsh.COLLECTIBLES_SHOP, query: i, rejectWithError: !0 });
            t?.logPerf &&
                (0, es.z)({
                    sessionId: n?.sessionId,
                    checkpoint: es.t.SHOP_HOME_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: t?.includeUnpublished,
                    cacheDisabled: t?.noCache,
                }),
                l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: e, shopHome: er.fromServer(r.body) });
        } catch (n) {
            let t = new u.LG(n);
            (0, eo.o)(t), l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
        }
    },
    eI = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
    },
    eT = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
    },
    eS = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
    },
    eN = async (e, t) => {
        l.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
        try {
            let n = await o.Bo.put({
                url: B.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: { category_id: e },
                rejectWithError: !0,
            });
            l.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(H.fromServer) });
        } catch (n) {
            let e = new u.LG(n);
            throw (l.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
        }
    },
    ey = async (e) => {
        let { tab: t, abortSignal: n } = e;
        if (m.A.isFetchingLayout(t)) return;
        let i = m.A.getLayoutFetchError(t);
        if (i?.status !== 404 && i?.status !== 429)
            try {
                l.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
                let e = await o.Bo.get({ url: B.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
                l.h.dispatch({
                    type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS",
                    tab: t,
                    layoutId: e.body.layout_id,
                });
            } catch (n) {
                let e = new u.LG(n);
                throw (l.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: t, apiError: e }), e);
            }
    };
