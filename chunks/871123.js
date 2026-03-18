"use strict";
n.d(t, {
    Cv: () => g,
    OY: () => T,
    Q6: () => S,
    Xg: () => f,
    Ye: () => y,
    bF: () => p,
    fq: () => A,
    jz: () => m,
    pV: () => _,
    sq: () => E,
    wH: () => v,
    xf: () => I,
    zf: () => h,
});
var r = n(735438),
    i = n.n(r),
    s = n(310209),
    a = n(611010),
    o = n(71393),
    l = n(371794),
    u = n(998218),
    c = n(188275),
    d = n(652215);
let _ = l.QB ? "webp" : "jpg";
function f(e) {
    return null != e && c.Pc.has(e.id);
}
function p(e) {
    return null != e && e.productLine === d.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function h() {
    let e = o.A.getGuild(c.v8);
    return null != e && e.features.has(d.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : c.Kf;
}
function m(e) {
    return e.id === h() || (e.features?.has(d.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
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
function g(e, t) {
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
function A(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return u.A.toURLSafe((0, l.YE)(t, n, 512, "webp"));
}
function I(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return u.A.toURLSafe(
            (0, l.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, _),
        );
}
function T(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${d.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function S(e, t) {
    return `${T(e, t)}

`;
}
function y(e) {
    let t = o.A.getGuild(e);
    return null != t && m(t);
}
function v(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) =>
                  Object.entries(t[e.id] ?? {}).some((e) => {
                      let [t, r] = e;
                      return r === s.j.WISHLIST && n.has(t);
                  }),
              ),
              hasPopular: e.some((e) => {
                  let r = t[e.id];
                  return (
                      null == r ||
                      Object.entries(r).every((e) => {
                          let [t, r] = e;
                          return (r === s.j.RECOMMENDATION && n.has(t)) || !n.has(t);
                      })
                  );
              }),
          };
}
