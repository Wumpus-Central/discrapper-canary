"use strict";
n.d(t, {
    Cv: () => C,
    NE: () => v,
    OY: () => b,
    Q6: () => D,
    Ri: () => A,
    Ye: () => L,
    bF: () => T,
    fq: () => R,
    jd: () => I,
    jz: () => y,
    mC: () => E,
    nG: () => M,
    pV: () => m,
    sq: () => N,
    wH: () => w,
    xf: () => O,
    y8: () => g,
    zf: () => S,
}),
    n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(429913),
    o = n(310209),
    l = n(611010),
    u = n(71393),
    c = n(371794),
    d = n(998218),
    _ = n(832163),
    f = n(188275),
    p = n(652215),
    h = n(818348);
let m = c.QB ? "webp" : "jpg";
function E(e) {
    return null != e.price || null != e.prices[p.lid.DEFAULT];
}
function g(e, t) {
    return null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
        ? e.prices[t].countryPrices.prices[0]
        : null != e.prices[p.lid.DEFAULT] && e.prices[p.lid.DEFAULT].countryPrices.prices.length > 0
          ? e.prices[p.lid.DEFAULT].countryPrices.prices[0]
          : null != e.price
            ? e.price
            : null;
}
function A(e) {
    let t = g(e, p.lid.DEFAULT) ?? { amount: 0, currency: h.Yr.USD },
        n = g(e, p.lid.GIFT) ?? { amount: 0, currency: h.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
}
function I(e) {
    let t = new Set(),
        n = [];
    for (let r of e.pages) {
        for (let e of r.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of r.sections ?? []) for (let r of e.skuIds) t.has(r) || (t.add(r), n.push(r));
    }
    return n;
}
function T(e) {
    return null != e && e.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function S() {
    let e = u.A.getGuild(f.v8);
    return null != e && e.features.has(p.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : f.Kf;
}
function y(e) {
    return !!_.A.getStorefrontGuildIds().has(e.id) || (e.features?.has(p.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function v(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function N(e) {
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
        application: null != e.application ? l.Ay.createFromServer(e.application) : void 0,
    };
}
function C(e, t) {
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
              primaryIconAsset: d.A.toURLSafe((0, c.YE)(t, n.labelIconAssetId, 512, "webp")) ?? void 0,
              primaryIconLabel: n.label,
          };
}
function R(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return d.A.toURLSafe((0, c.YE)(t, n, 512, "webp"));
}
function O(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return d.A.toURLSafe(
            (0, c.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, m),
        );
}
function b(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${p.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function D(e, t) {
    return `${b(e, t)}

`;
}
function L(e) {
    let t = u.A.getGuild(e);
    return null != t && y(t);
}
function w(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) =>
                  Object.entries(t[e.id] ?? {}).some((e) => {
                      let [t, r] = e;
                      return r === o.j.WISHLIST && n.has(t);
                  }),
              ),
              hasPopular: e.some((e) => {
                  let r = t[e.id];
                  return (
                      null == r ||
                      Object.entries(r).every((e) => {
                          let [t, r] = e;
                          return (r === o.j.RECOMMENDATION && n.has(t)) || !n.has(t);
                      })
                  );
              }),
          };
}
function M(e) {
    let t = (0, s.bG)([_.A], () => _.A.getGuildIdFromApplicationId(e)),
        n = (0, a.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
