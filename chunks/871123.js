n.d(t, {
    Cv: () => L,
    NE: () => R,
    OY: () => M,
    Ox: () => G,
    Q6: () => P,
    Ri: () => f,
    Ye: () => U,
    bF: () => m,
    fq: () => D,
    jd: () => p,
    jz: () => C,
    mC: () => S,
    nG: () => y,
    pV: () => h,
    sq: () => g,
    wH: () => v,
    xf: () => b,
    y8: () => N,
    zf: () => O,
}),
    n(321073);
var i = n(735438),
    a = n.n(i),
    r = n(17928),
    s = n(429913),
    l = n(723090),
    o = n(310209),
    d = n(395671),
    c = n(71393),
    _ = n(371794),
    E = n(998218),
    u = n(832163),
    A = n(188275),
    I = n(652215),
    T = n(818348);
let h = _.QB ? "webp" : "jpg";
function S(e) {
    return null != e.price || null != e.prices[I.lid.DEFAULT];
}
function N(e, t) {
    return null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
        ? e.prices[t].countryPrices.prices[0]
        : null != e.prices[I.lid.DEFAULT] && e.prices[I.lid.DEFAULT].countryPrices.prices.length > 0
          ? e.prices[I.lid.DEFAULT].countryPrices.prices[0]
          : null != e.price
            ? e.price
            : null;
}
function f(e) {
    let t = N(e, I.lid.DEFAULT) ?? { amount: 0, currency: T.Yr.USD },
        n = N(e, I.lid.GIFT) ?? { amount: 0, currency: T.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
}
function p(e) {
    let t = new Set(),
        n = [];
    for (let i of e.pages) {
        for (let e of i.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of i.sections ?? []) for (let i of e.skuIds) t.has(i) || (t.add(i), n.push(i));
    }
    return n;
}
function m(e) {
    return null != e && e.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function O() {
    let e = c.A.getGuild(A.v8);
    return null != e && e.features.has(I.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : A.Kf;
}
function C(e) {
    if (u.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = e.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0,
        n = u.A.getStorefrontApplicationIds();
    return !!(null != t && n.has(t)) || (e.features?.has(I.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function R(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
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
        assets: a().keyBy(e.assets, "id"),
        application: null != e.application ? d.Ay.createFromServer(e.application) : void 0,
        storefrontPricing: null != e.storefront_pricing ? (0, l.Oj)(e.storefront_pricing) : void 0,
    };
}
function L(e, t) {
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
              primaryIconAsset: E.A.toURLSafe((0, _.YE)(t, n.labelIconAssetId, 512, "webp")) ?? void 0,
              primaryIconLabel: n.label,
          };
}
function D(e) {
    let t = e?.applicationId,
        n = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != n && null != t) return E.A.toURLSafe((0, _.YE)(t, n, 512, "webp"));
}
function b(e) {
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return E.A.toURLSafe(
            (0, _.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, h),
        );
}
function M(e, t) {
    return `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${I.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function P(e, t) {
    return `${M(e, t)}

`;
}
function U(e) {
    let t = c.A.getGuild(e);
    return null != t && C(t);
}
function v(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) =>
                  Object.entries(t[e.id] ?? {}).some((e) => {
                      let [t, i] = e;
                      return i === o.j.WISHLIST && n.has(t);
                  }),
              ),
              hasPopular: e.some((e) => {
                  let i = t[e.id];
                  return (
                      null == i ||
                      Object.entries(i).every((e) => {
                          let [t, i] = e;
                          return (i === o.j.RECOMMENDATION && n.has(t)) || !n.has(t);
                      })
                  );
              }),
          };
}
function y(e) {
    let t = (0, r.bG)([u.A], () => u.A.getGuildIdFromApplicationId(e)),
        n = (0, s.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function G(e) {
    return a().mapValues(e, (e) => ({ isEligible: e.is_eligible }));
}
