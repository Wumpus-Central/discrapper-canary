"use strict";
n.d(t, {
    Cv: () => S,
    M$: () => I,
    OY: () => N,
    Q6: () => C,
    Xg: () => h,
    Ye: () => b,
    bF: () => m,
    fq: () => y,
    jz: () => g,
    pV: () => p,
    sq: () => A,
    ty: () => T,
    wH: () => R,
    xf: () => v,
    zf: () => E,
});
var r = n(735438),
    i = n.n(r),
    s = n(611010),
    a = n(731935),
    o = n(71393),
    l = n(371794),
    u = n(998218),
    c = n(79871),
    d = n(916023),
    _ = n(188275),
    f = n(652215);
let p = l.QB ? "webp" : "jpg";
function h(e) {
    return null != e && _.Pc.has(e.id);
}
function m(e) {
    return null != e && e.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function E() {
    let e = o.A.getGuild(_.v8);
    return null != e && e.features.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : _.Kf;
}
function g(e) {
    return e.id === E() || (e.features?.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function A(e) {
    return {
        applicationId: e.application_id,
        title: e.title,
        logoAssetId: e.logo_asset_id,
        lightThemeLogoAssetId: e.light_theme_logo_asset_id,
        pages: e.pages.map((e) => ({
            title: e.title,
            leaderboard:
                null != e.leaderboard
                    ? {
                          title: e.leaderboard.title,
                          description: e.leaderboard.description,
                          backgroundImageAssetId: e.leaderboard.background_image_asset_id,
                      }
                    : void 0,
            skuIds: e.sku_ids,
            sections: null != e.sections ? e.sections.map((e) => ({ title: e.title, skuIds: e.sku_ids })) : void 0,
        })),
        assets: i().keyBy(e.assets, "id"),
        application: null != e.application ? s.Ay.createFromServer(e.application) : void 0,
    };
}
function I(e) {
    if (null != e)
        return {
            carouselItems: e.carousel_items.map((e) => ({
                thumbnailAssetId: e.thumbnail_asset_id,
                assetId: e.asset_id,
                backgroundAssetId: e.background_asset_id,
                youtubeVideoId: e.youtube_video_id,
                label: e.label,
                labelIconAssetId: e.label_icon_asset_id,
            })),
            label: e.label,
            expiresAt: null != e.expires_at ? new Date(e.expires_at) : void 0,
            cardImageAssetId: e.card_image_asset_id,
            cardBackgroundImageAssetId: e.card_background_image_asset_id,
        };
}
function T(e) {
    return {
        skus: e.skus.map((e) => a.A.createFromServer(e)),
        skusToRecommendationReasons: Object.fromEntries(
            Object.entries(e.skus_to_user_ids).map((e) => {
                let [t, n] = e;
                return [t, n.map((e) => ({ userId: e.user_id, reason: e.reason }))];
            }),
        ),
        application: s.Ay.createFromServer(e.application),
    };
}
function S(e, t) {
    if (
        null == t ||
        e?.tenantMetadata?.socialLayer?.carouselItems == null ||
        0 === e.tenantMetadata.socialLayer.carouselItems.length
    )
        return { primaryIconAsset: void 0, primaryIconLabel: void 0 };
    let n = e.tenantMetadata.socialLayer.carouselItems[0];
    return null == n.labelIconAssetId
        ? { primaryIconAsset: void 0, primaryIconLabel: void 0 }
        : {
              primaryIconAsset: u.A.toURLSafe((0, l.YE)(t, n.labelIconAssetId, 512, "webp")) ?? void 0,
              primaryIconLabel: n.label,
          };
}
function y(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return u.A.toURLSafe((0, l.YE)(t, n, 512, "webp"));
}
function v(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return u.A.toURLSafe(
            (0, l.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, p),
        );
}
function N(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${f.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function C(e, t) {
    return `${N(e, t)}

`;
}
function b(e, t) {
    let n = o.A.getGuild(e);
    return null != n && g(n) && (0, d.xD)({ location: t });
}
function R(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) => t[e.skuId]?.some((e) => e.reason === c.G.WISHLIST && n.has(e.userId))),
              hasPopular: e.some(
                  (e) =>
                      null == t[e.skuId] ||
                      t[e.skuId].every((e) => (e.reason === c.G.RECOMMENDATION && n.has(e.userId)) || !n.has(e.userId)),
              ),
          };
}
