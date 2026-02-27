"use strict";
n.d(t, {
    Cv: () => T,
    OY: () => v,
    Q6: () => N,
    Xg: () => h,
    Ye: () => C,
    bF: () => m,
    fq: () => S,
    jz: () => g,
    pV: () => p,
    sq: () => A,
    ty: () => I,
    wH: () => b,
    xf: () => y,
    zf: () => E,
});
var r = n(735438),
    i = n.n(r),
    s = n(260811),
    a = n(611010),
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
        application: null != e.application ? a.Ay.createFromServer(e.application) : void 0,
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
function S(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return u.A.toURLSafe((0, l.YE)(t, n, 512, "webp"));
}
function y(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return u.A.toURLSafe(
            (0, l.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, p),
        );
}
function v(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${f.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function N(e, t) {
    return `${v(e, t)}

`;
}
function C(e, t) {
    let n = o.A.getGuild(e);
    return null != n && g(n) && (0, d.xD)({ location: t });
}
function b(e, t, n) {
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
