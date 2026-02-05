"use strict";
n.d(t, {
    Cv: () => T,
    M$: () => A,
    OY: () => v,
    Q6: () => C,
    Xg: () => p,
    Ye: () => b,
    bF: () => h,
    fq: () => y,
    jz: () => g,
    pV: () => f,
    sq: () => E,
    ty: () => I,
    xf: () => S,
    zf: () => m,
});
var r = n(735438),
    i = n.n(r),
    a = n(611010),
    s = n(731935),
    o = n(71393),
    l = n(371794),
    u = n(998218),
    c = n(916023),
    d = n(188275),
    _ = n(652215);
let f = l.QB ? "webp" : "jpg";
function p(e) {
    return null != e && d.Pc.has(e.id);
}
function h(e) {
    return null != e && e.productLine === _.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function m() {
    let e = o.A.getGuild(d.v8);
    return null != e && e.features.has(_.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : d.Kf;
}
function g(e) {
    return e.id === m() || (e.features?.has(_.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function E(e) {
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
        application: null != e.application ? a.Ay.createFromServer(e.application) : void 0,
    };
}
function A(e) {
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
function I(e) {
    return {
        skus: e.skus.map((e) => s.A.createFromServer(e)),
        skusToRecommendationReasons: Object.fromEntries(
            Object.entries(e.skus_to_user_ids).map((e) => {
                let [t, n] = e;
                return [t, n.map((e) => ({ userId: e.user_id, reason: e.reason }))];
            }),
        ),
        application: a.Ay.createFromServer(e.application),
    };
}
function T(e, t) {
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
function S(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return u.A.toURLSafe(
            (0, l.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, f),
        );
}
function v(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${_.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function C(e, t) {
    return `${v(e, t)}

`;
}
function b(e, t) {
    let n = o.A.getGuild(e);
    return null != n && g(n) && (0, c.xD)({ location: t });
}
