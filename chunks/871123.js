"use strict";
n.d(t, {
    Cv: () => O,
    NE: () => v,
    OY: () => D,
    Ox: () => x,
    Q6: () => L,
    Ri: () => I,
    Ye: () => w,
    bF: () => S,
    fq: () => R,
    jd: () => T,
    jz: () => N,
    mC: () => g,
    nG: () => P,
    pV: () => m,
    sq: () => C,
    wH: () => M,
    xf: () => b,
    y8: () => A,
    zf: () => y,
}),
    n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(429913),
    o = n(993046),
    l = n(310209),
    u = n(611010),
    c = n(71393),
    d = n(371794),
    _ = n(998218),
    f = n(832163),
    p = n(188275),
    h = n(652215),
    E = n(818348);
let m = d.QB ? "webp" : "jpg";
function g(e) {
    return null != e.price || null != e.prices[h.lid.DEFAULT];
}
function A(e, t) {
    return null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
        ? e.prices[t].countryPrices.prices[0]
        : null != e.prices[h.lid.DEFAULT] && e.prices[h.lid.DEFAULT].countryPrices.prices.length > 0
          ? e.prices[h.lid.DEFAULT].countryPrices.prices[0]
          : null != e.price
            ? e.price
            : null;
}
function I(e) {
    let t = A(e, h.lid.DEFAULT) ?? { amount: 0, currency: E.Yr.USD },
        n = A(e, h.lid.GIFT) ?? { amount: 0, currency: E.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
}
function T(e) {
    let t = new Set(),
        n = [];
    for (let r of e.pages) {
        for (let e of r.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of r.sections ?? []) for (let r of e.skuIds) t.has(r) || (t.add(r), n.push(r));
    }
    return n;
}
function S(e) {
    return null != e && e.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function y() {
    let e = c.A.getGuild(p.v8);
    return null != e && e.features.has(h.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : p.Kf;
}
function N(e) {
    return !!f.A.getStorefrontGuildIds().has(e.id) || (e.features?.has(h.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function v(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function C(e) {
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
        application: null != e.application ? u.Ay.createFromServer(e.application) : void 0,
        storefrontPricing: null != e.storefront_pricing ? (0, o.Oj)(e.storefront_pricing) : void 0,
    };
}
function O(e, t) {
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
              primaryIconAsset: _.A.toURLSafe((0, d.YE)(t, n.labelIconAssetId, 512, "webp")) ?? void 0,
              primaryIconLabel: n.label,
          };
}
function R(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return _.A.toURLSafe((0, d.YE)(t, n, 512, "webp"));
}
function b(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return _.A.toURLSafe(
            (0, d.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, m),
        );
}
function D(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${h.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function L(e, t) {
    return `${D(e, t)}

`;
}
function w(e) {
    let t = c.A.getGuild(e);
    return null != t && N(t);
}
function M(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) =>
                  Object.entries(t[e.id] ?? {}).some((e) => {
                      let [t, r] = e;
                      return r === l.j.WISHLIST && n.has(t);
                  }),
              ),
              hasPopular: e.some((e) => {
                  let r = t[e.id];
                  return (
                      null == r ||
                      Object.entries(r).every((e) => {
                          let [t, r] = e;
                          return (r === l.j.RECOMMENDATION && n.has(t)) || !n.has(t);
                      })
                  );
              }),
          };
}
function P(e) {
    let t = (0, s.bG)([f.A], () => f.A.getGuildIdFromApplicationId(e)),
        n = (0, a.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function x(e) {
    return i().mapValues(e, (e) => ({ isEligible: e.is_eligible }));
}
