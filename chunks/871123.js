"use strict";
n.d(t, {
    Cv: () => U,
    NE: () => D,
    OY: () => k,
    Q6: () => F,
    Ri: () => N,
    S4: () => M,
    Ye: () => V,
    bF: () => O,
    fq: () => w,
    jd: () => C,
    jz: () => L,
    mC: () => g,
    mq: () => K,
    n5: () => z,
    nG: () => W,
    nY: () => $,
    pV: () => m,
    rG: () => H,
    sq: () => P,
    uV: () => j,
    wH: () => B,
    xf: () => G,
    y8: () => S,
    zf: () => R,
}),
    n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(492462),
    s = n(17928),
    l = n(587895),
    o = n(429913),
    d = n(993046),
    c = n(310209),
    u = n(395671),
    _ = n(71393),
    E = n(371794),
    A = n(998218),
    h = n(832163),
    I = n(188275),
    f = n(652215),
    p = n(758836),
    T = n(818348);
let m = E.QB ? "webp" : "jpg";
function g(e) {
    return null != e.price || null != e.prices[f.lid.DEFAULT];
}
function S(e, t) {
    let n =
        null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
            ? e.prices[t].countryPrices
            : null != e.prices[f.lid.DEFAULT] && e.prices[f.lid.DEFAULT].countryPrices.prices.length > 0
              ? e.prices[f.lid.DEFAULT].countryPrices
              : null;
    return null != n ? n.prices[0] : null != e.price ? e.price : null;
}
function N(e) {
    let t = S(e, f.lid.DEFAULT) ?? { amount: 0, currency: T.Yr.USD },
        n = S(e, f.lid.GIFT) ?? { amount: 0, currency: T.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
}
function C(e) {
    let t = new Set(),
        n = [];
    for (let i of e.pages) {
        for (let e of i.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of i.sections ?? []) for (let i of e.skuIds) t.has(i) || (t.add(i), n.push(i));
    }
    return n;
}
function O(e) {
    return null != e && e.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function R() {
    let e = _.A.getGuild(I.v8);
    return null != e && e.features.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : I.Kf;
}
function L(e) {
    if (h.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = Y(e, h.A.getApplicationIdFromGuildId(e.id)),
        n = h.A.getStorefrontApplicationIds();
    return !!(null != t && n.has(t)) || (e.features?.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function D(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function y(e) {
    return null == e ? null : { label: e.label, tooltip: e.tooltip, icon: e.icon };
}
function v(e) {
    return {
        id: e.id,
        endsAt: e.ends_at ?? null,
        flavor: e.flavor ?? "default",
        pdp: y(e.pdp),
        storefront: null != e.storefront ? { headerText: e.storefront.header_text } : null,
        checkout: y(e.checkout),
        vcStream: y(e.vc_stream),
    };
}
function b(e) {
    if (null == e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function M(e) {
    return {
        id: e.id,
        publishedAt: b(e.published_at),
        title: e.title,
        logoAssetId: e.logo_asset_id ?? null,
        lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null,
    };
}
function P(e) {
    return {
        id: e.id,
        publishedAt: b(e.published_at),
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
        application: null != e.application ? u.Ay.createFromServer(e.application) : void 0,
        storefrontPricing: null != e.storefront_pricing ? (0, d.Oj)(e.storefront_pricing) : void 0,
        promotions: r().mapValues(e.promotions ?? {}, v),
    };
}
function U(e, t) {
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
              primaryIconAsset: A.A.toURLSafe((0, E.YE)(t, r.labelIconAssetId, i, "webp")) ?? void 0,
              primaryIconLabel: r.label,
          };
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 512 } = t,
        i = e?.applicationId,
        r = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != r && null != i) return A.A.toURLSafe((0, E.YE)(i, r, n, "webp"));
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 1024 } = t;
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return A.A.toURLSafe((0, E.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, n, m));
}
function x(e, t, n, i) {
    let { tab: r, applicationId: s, skuId: l } = (0, a.parse)(t);
    return e.indexOf(f.BVt.COLLECTIBLES_SHOP) >= 0 && r === p.G2.GAME_SHOPS && s === n && (null == i || l === i);
}
function k(e, t) {
    return null == e || x(location.pathname, location.search, t.applicationId)
        ? `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${f.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, void 0, t.id, t.slug)}`
        : `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${f.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function F(e, t) {
    return `${k(e, t)}

`;
}
function V(e) {
    let t = _.A.getGuild(e);
    return null != t && L(t);
}
function B(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) =>
                  Object.entries(t[e.id] ?? {}).some((e) => {
                      let [t, i] = e;
                      return i === c.j.WISHLIST && n.has(t);
                  }),
              ),
              hasPopular: e.some((e) => {
                  let i = t[e.id];
                  return (
                      null == i ||
                      Object.entries(i).every((e) => {
                          let [t, i] = e;
                          return (i === c.j.RECOMMENDATION && n.has(t)) || !n.has(t);
                      })
                  );
              }),
          };
}
function H(e, t, n, i) {
    return x(e, t, n) || (null != i && e.indexOf((0, I.Ny)(i)) >= 0);
}
function j(e) {
    let { pathname: t, search: n, pageIndex: i = 0, applicationId: r, guildId: a, skuId: s } = e;
    return x(t, n, r, s) || (null != a && t.includes(f.BVt.CHANNELS_GAME_SHOP(a, i, s)));
}
function W(e) {
    let t = (0, s.bG)([h.A], () => h.A.getGuildIdFromApplicationId(e)),
        n = (0, o.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function Y(e, t) {
    return t ?? (e?.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0);
}
function K(e) {
    let t = h.A.getApplicationIdFromGuildId(e);
    return Y(_.A.getGuild(e), t);
}
function $(e) {
    let t = (0, s.bG)([h.A], () => h.A.getApplicationIdFromGuildId(e));
    return Y(
        (0, s.bG)([_.A], () => _.A.getGuild(e), [e]),
        t,
    );
}
function z(e) {
    if (null != e) return h.A.getGuildIdFromApplicationId(e) ?? l.A.getApplication(e)?.guildId;
}
