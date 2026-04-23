n.d(t, {
    Cv: () => h,
    NE: () => L,
    OY: () => U,
    Ox: () => v,
    Q6: () => P,
    Ri: () => R,
    Ye: () => M,
    bF: () => C,
    fq: () => g,
    jd: () => f,
    jz: () => m,
    mC: () => N,
    nG: () => G,
    pV: () => S,
    sq: () => D,
    wH: () => y,
    xf: () => b,
    y8: () => O,
    zf: () => p,
}),
    n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    s = n(429913),
    _ = n(723090),
    l = n(310209),
    o = n(395671),
    E = n(71393),
    d = n(371794),
    c = n(998218),
    u = n(832163),
    I = n(188275),
    A = n(652215),
    T = n(818348);
let S = d.QB ? "webp" : "jpg";
function N(e) {
    return null != e.price || null != e.prices[A.lid.DEFAULT];
}
function O(e, t) {
    return null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
        ? e.prices[t].countryPrices.prices[0]
        : null != e.prices[A.lid.DEFAULT] && e.prices[A.lid.DEFAULT].countryPrices.prices.length > 0
          ? e.prices[A.lid.DEFAULT].countryPrices.prices[0]
          : null != e.price
            ? e.price
            : null;
}
function R(e) {
    let t = O(e, A.lid.DEFAULT) ?? { amount: 0, currency: T.Yr.USD },
        n = O(e, A.lid.GIFT) ?? { amount: 0, currency: T.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
}
function f(e) {
    let t = new Set(),
        n = [];
    for (let i of e.pages) {
        for (let e of i.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of i.sections ?? []) for (let i of e.skuIds) t.has(i) || (t.add(i), n.push(i));
    }
    return n;
}
function C(e) {
    return null != e && e.productLine === A.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function p() {
    let e = E.A.getGuild(I.v8);
    return null != e && e.features.has(A.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : I.Kf;
}
function m(e) {
    return !!u.A.getStorefrontGuildIds().has(e.id) || (e.features?.has(A.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function L(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function D(e) {
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
        application: null != e.application ? o.Ay.createFromServer(e.application) : void 0,
        storefrontPricing: null != e.storefront_pricing ? (0, _.Oj)(e.storefront_pricing) : void 0,
    };
}
function h(e, t) {
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
              primaryIconAsset: c.A.toURLSafe((0, d.YE)(t, n.labelIconAssetId, 512, "webp")) ?? void 0,
              primaryIconLabel: n.label,
          };
}
function g(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return c.A.toURLSafe((0, d.YE)(t, n, 512, "webp"));
}
function b(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return c.A.toURLSafe(
            (0, d.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, S),
        );
}
function U(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${A.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function P(e, t) {
    return `${U(e, t)}

`;
}
function M(e) {
    let t = E.A.getGuild(e);
    return null != t && m(t);
}
function y(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) =>
                  Object.entries(t[e.id] ?? {}).some((e) => {
                      let [t, i] = e;
                      return i === l.j.WISHLIST && n.has(t);
                  }),
              ),
              hasPopular: e.some((e) => {
                  let i = t[e.id];
                  return (
                      null == i ||
                      Object.entries(i).every((e) => {
                          let [t, i] = e;
                          return (i === l.j.RECOMMENDATION && n.has(t)) || !n.has(t);
                      })
                  );
              }),
          };
}
function G(e) {
    let t = (0, a.bG)([u.A], () => u.A.getGuildIdFromApplicationId(e)),
        n = (0, s.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function v(e) {
    return r().mapValues(e, (e) => ({ isEligible: e.is_eligible }));
}
