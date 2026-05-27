"use strict";
n.d(t, {
    Cv: () => b,
    NE: () => R,
    OY: () => M,
    Ox: () => F,
    Q6: () => P,
    Ri: () => S,
    Ye: () => x,
    bF: () => N,
    fq: () => D,
    jd: () => y,
    jz: () => C,
    mC: () => I,
    nG: () => G,
    pV: () => A,
    rG: () => U,
    sq: () => O,
    wH: () => k,
    xf: () => L,
    y8: () => T,
    zf: () => v,
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
    h = n(998218),
    f = n(832163),
    p = n(188275),
    E = n(652215),
    m = n(758836),
    g = n(818348);
let A = _.QB ? "webp" : "jpg";
function I(e) {
    return null != e.price || null != e.prices[E.lid.DEFAULT];
}
function T(e, t) {
    let n =
        null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
            ? e.prices[t].countryPrices
            : null != e.prices[E.lid.DEFAULT] && e.prices[E.lid.DEFAULT].countryPrices.prices.length > 0
              ? e.prices[E.lid.DEFAULT].countryPrices
              : null;
    return null != n ? n.prices[0] : null != e.price ? e.price : null;
}
function S(e) {
    let t = T(e, E.lid.DEFAULT) ?? { amount: 0, currency: g.Yr.USD },
        n = T(e, E.lid.GIFT) ?? { amount: 0, currency: g.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
}
function y(e) {
    let t = new Set(),
        n = [];
    for (let i of e.pages) {
        for (let e of i.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of i.sections ?? []) for (let i of e.skuIds) t.has(i) || (t.add(i), n.push(i));
    }
    return n;
}
function N(e) {
    return null != e && e.productLine === E.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function v() {
    let e = d.A.getGuild(p.v8);
    return null != e && e.features.has(E.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : p.Kf;
}
function C(e) {
    if (f.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = e.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0,
        n = f.A.getStorefrontApplicationIds();
    return !!(null != t && n.has(t)) || (e.features?.has(E.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function R(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function O(e) {
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
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { size: i = 512 } = n;
    if (
        null == t ||
        e?.tenantMetadata?.socialLayer?.carouselItems == null ||
        0 === e.tenantMetadata.socialLayer.carouselItems.length
    )
        return { primaryIconAsset: void 0, primaryIconLabel: void 0 };
    let r = e.tenantMetadata.socialLayer.carouselItems[0];
    return null == r.labelIconAssetId
        ? { primaryIconAsset: void 0, primaryIconLabel: void 0 }
        : {
              primaryIconAsset: h.A.toURLSafe((0, _.YE)(t, r.labelIconAssetId, i, "webp")) ?? void 0,
              primaryIconLabel: r.label,
          };
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 512 } = t,
        i = e?.applicationId,
        r = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != r && null != i) return h.A.toURLSafe((0, _.YE)(i, r, n, "webp"));
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 1024 } = t;
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return h.A.toURLSafe((0, _.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, n, A));
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
    return null != t && C(t);
}
function k(e, t, n) {
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
function U(e, t, n, i) {
    return w(e, t, n) || (null != i && e.indexOf((0, p.Ny)(i)) >= 0);
}
function G(e) {
    let t = (0, a.bG)([f.A], () => f.A.getGuildIdFromApplicationId(e)),
        n = (0, o.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function F(e) {
    return r().mapValues(e, (e) => ({ isEligible: e.is_eligible }));
}
