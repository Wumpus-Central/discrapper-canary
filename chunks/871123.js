"use strict";
n.d(t, {
    Cv: () => b,
    NE: () => O,
    OY: () => M,
    Ox: () => F,
    Q6: () => P,
    Ri: () => S,
    Ye: () => x,
    bF: () => y,
    fq: () => D,
    jd: () => N,
    jz: () => v,
    mC: () => I,
    nG: () => G,
    pV: () => A,
    rG: () => k,
    sq: () => R,
    wH: () => U,
    xf: () => L,
    y8: () => T,
    zf: () => C,
}),
    n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(492462),
    a = n(17928),
    o = n(429913),
    l = n(723090),
    u = n(310209),
    c = n(395671),
    d = n(71393),
    _ = n(371794),
    f = n(998218),
    h = n(832163),
    p = n(188275),
    E = n(652215),
    m = n(758836),
    g = n(818348);
let A = _.QB ? "webp" : "jpg";
function I(e) {
    return null != e.price || null != e.prices[E.lid.DEFAULT];
}
function T(e, t) {
    return null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
        ? e.prices[t].countryPrices.prices[0]
        : null != e.prices[E.lid.DEFAULT] && e.prices[E.lid.DEFAULT].countryPrices.prices.length > 0
          ? e.prices[E.lid.DEFAULT].countryPrices.prices[0]
          : null != e.price
            ? e.price
            : null;
}
function S(e) {
    let t = T(e, E.lid.DEFAULT) ?? { amount: 0, currency: g.Yr.USD },
        n = T(e, E.lid.GIFT) ?? { amount: 0, currency: g.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
}
function N(e) {
    let t = new Set(),
        n = [];
    for (let i of e.pages) {
        for (let e of i.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of i.sections ?? []) for (let i of e.skuIds) t.has(i) || (t.add(i), n.push(i));
    }
    return n;
}
function y(e) {
    return null != e && e.productLine === E.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function C() {
    let e = d.A.getGuild(p.v8);
    return null != e && e.features.has(E.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : p.Kf;
}
function v(e) {
    if (h.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = e.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0,
        n = h.A.getStorefrontApplicationIds();
    return !!(null != t && n.has(t)) || (e.features?.has(E.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function O(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function R(e) {
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
        assets: r().keyBy(e.assets, "id"),
        application: null != e.application ? c.Ay.createFromServer(e.application) : void 0,
        storefrontPricing: null != e.storefront_pricing ? (0, l.Oj)(e.storefront_pricing) : void 0,
    };
}
function b(e, t) {
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
              primaryIconAsset: f.A.toURLSafe((0, _.YE)(t, n.labelIconAssetId, 512, "webp")) ?? void 0,
              primaryIconLabel: n.label,
          };
}
function D(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return f.A.toURLSafe((0, _.YE)(t, n, 512, "webp"));
}
function L(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return f.A.toURLSafe(
            (0, _.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, A),
        );
}
function w(e, t, n) {
    let { tab: i, applicationId: r } = (0, s.parse)(t);
    return e.indexOf(E.BVt.COLLECTIBLES_SHOP) >= 0 && i === m.G2.GAME_SHOPS && r === n;
}
function M(e, t) {
    return w(location.pathname, location.search, t.applicationId)
        ? `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${E.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, void 0, t.id, t.slug)}`
        : `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${E.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function P(e, t) {
    return `${M(e, t)}

`;
}
function x(e) {
    let t = d.A.getGuild(e);
    return null != t && v(t);
}
function U(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) =>
                  Object.entries(t[e.id] ?? {}).some((e) => {
                      let [t, i] = e;
                      return i === u.j.WISHLIST && n.has(t);
                  }),
              ),
              hasPopular: e.some((e) => {
                  let i = t[e.id];
                  return (
                      null == i ||
                      Object.entries(i).every((e) => {
                          let [t, i] = e;
                          return (i === u.j.RECOMMENDATION && n.has(t)) || !n.has(t);
                      })
                  );
              }),
          };
}
function k(e, t, n, i) {
    return w(e, t, n) || (null != i && e.indexOf((0, p.Ny)(i)) >= 0);
}
function G(e) {
    let t = (0, a.bG)([h.A], () => h.A.getGuildIdFromApplicationId(e)),
        n = (0, o.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function F(e) {
    return r().mapValues(e, (e) => ({ isEligible: e.is_eligible }));
}
