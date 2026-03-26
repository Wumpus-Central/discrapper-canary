"use strict";
n.d(t, {
    Cv: () => A,
    OY: () => S,
    Q6: () => y,
    Ye: () => v,
    bF: () => h,
    fq: () => I,
    jd: () => p,
    jz: () => E,
    pV: () => f,
    sq: () => g,
    wH: () => N,
    xf: () => T,
    zf: () => m,
}),
    n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(310209),
    a = n(611010),
    o = n(71393),
    l = n(371794),
    u = n(998218),
    c = n(832163),
    d = n(188275),
    _ = n(652215);
let f = l.QB ? "webp" : "jpg";
function p(e) {
    let t = new Set(),
        n = [];
    for (let r of e.pages) {
        for (let e of r.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of r.sections ?? []) for (let r of e.skuIds) t.has(r) || (t.add(r), n.push(r));
    }
    return n;
}
function h(e) {
    return null != e && e.productLine === _.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function m() {
    let e = o.A.getGuild(d.v8);
    return null != e && e.features.has(_.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : d.Kf;
}
function E(e) {
    return !!c.A.getStorefrontGuildIds().has(e.id) || (e.features?.has(_.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function g(e) {
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
function A(e, t) {
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
function I(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return u.A.toURLSafe((0, l.YE)(t, n, 512, "webp"));
}
function T(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return u.A.toURLSafe(
            (0, l.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, f),
        );
}
function S(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${_.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function y(e, t) {
    return `${S(e, t)}

`;
}
function v(e) {
    let t = o.A.getGuild(e);
    return null != t && E(t);
}
function N(e, t, n) {
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
