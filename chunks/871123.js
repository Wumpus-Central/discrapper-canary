"use strict";
n.d(t, {
    Cv: () => M,
    NE: () => O,
    OY: () => G,
    Q6: () => V,
    Ri: () => N,
    S4: () => P,
    Ye: () => F,
    bF: () => y,
    fq: () => x,
    jd: () => C,
    jz: () => R,
    mC: () => T,
    mq: () => K,
    n5: () => z,
    nG: () => W,
    nY: () => $,
    pV: () => I,
    rG: () => j,
    sq: () => w,
    uV: () => H,
    wH: () => B,
    xf: () => U,
    y8: () => S,
    zf: () => v,
}),
    n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(492462),
    a = n(17928),
    o = n(587895),
    l = n(429913),
    u = n(117218),
    d = n(310209),
    c = n(395671),
    _ = n(71393),
    h = n(371794),
    f = n(998218),
    E = n(832163),
    p = n(188275),
    m = n(652215),
    g = n(758836),
    A = n(818348);
let I = h.QB ? "webp" : "jpg";
function T(e) {
    return null != e.price || null != e.prices[m.lid.DEFAULT];
}
function S(e, t) {
    let n =
        null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
            ? e.prices[t].countryPrices
            : null != e.prices[m.lid.DEFAULT] && e.prices[m.lid.DEFAULT].countryPrices.prices.length > 0
              ? e.prices[m.lid.DEFAULT].countryPrices
              : null;
    return null != n ? n.prices[0] : null != e.price ? e.price : null;
}
function N(e) {
    let t = S(e, m.lid.DEFAULT) ?? { amount: 0, currency: A.Yr.USD },
        n = S(e, m.lid.GIFT) ?? { amount: 0, currency: A.Yr.USD };
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
function y(e) {
    return null != e && e.productLine === m.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function v() {
    let e = _.A.getGuild(p.v8);
    return null != e && e.features.has(m.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : p.Kf;
}
function R(e) {
    if (E.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = Y(e, E.A.getApplicationIdFromGuildId(e.id)),
        n = E.A.getStorefrontApplicationIds();
    return !!(null != t && n.has(t)) || (e.features?.has(m.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function O(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function b(e) {
    return null == e ? null : { label: e.label, tooltip: e.tooltip, icon: e.icon };
}
function L(e) {
    return {
        id: e.id,
        endsAt: e.ends_at ?? null,
        pdp: b(e.pdp),
        storefront: null != e.storefront ? { headerText: e.storefront.header_text } : null,
        checkout: b(e.checkout),
        vcStream: b(e.vc_stream),
    };
}
function D(e) {
    if (null == e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function P(e) {
    return {
        id: e.id,
        publishedAt: D(e.published_at),
        title: e.title,
        logoAssetId: e.logo_asset_id ?? null,
        lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null,
    };
}
function w(e) {
    return {
        id: e.id,
        publishedAt: D(e.published_at),
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
        storefrontPricing: null != e.storefront_pricing ? (0, u.Oj)(e.storefront_pricing) : void 0,
        promotions: r().mapValues(e.promotions ?? {}, L),
    };
}
function M(e, t) {
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
              primaryIconAsset: f.A.toURLSafe((0, h.YE)(t, r.labelIconAssetId, i, "webp")) ?? void 0,
              primaryIconLabel: r.label,
          };
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 512 } = t,
        i = e?.applicationId,
        r = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != r && null != i) return f.A.toURLSafe((0, h.YE)(i, r, n, "webp"));
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 1024 } = t;
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return f.A.toURLSafe((0, h.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, n, I));
}
function k(e, t, n, i) {
    let { tab: r, applicationId: a, skuId: o } = (0, s.parse)(t);
    return e.indexOf(m.BVt.COLLECTIBLES_SHOP) >= 0 && r === g.G2.GAME_SHOPS && a === n && (null == i || o === i);
}
function G(e, t) {
    return null == e || k(location.pathname, location.search, t.applicationId)
        ? `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${m.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, void 0, t.id, t.slug)}`
        : `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${m.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function V(e, t) {
    return `${G(e, t)}

`;
}
function F(e) {
    let t = _.A.getGuild(e);
    return null != t && R(t);
}
function B(e, t, n) {
    return 0 === e.length
        ? { hasWishlist: !1, hasPopular: !1 }
        : {
              hasWishlist: e.some((e) =>
                  Object.entries(t[e.id] ?? {}).some((e) => {
                      let [t, i] = e;
                      return i === d.j.WISHLIST && n.has(t);
                  }),
              ),
              hasPopular: e.some((e) => {
                  let i = t[e.id];
                  return (
                      null == i ||
                      Object.entries(i).every((e) => {
                          let [t, i] = e;
                          return (i === d.j.RECOMMENDATION && n.has(t)) || !n.has(t);
                      })
                  );
              }),
          };
}
function j(e, t, n, i) {
    return k(e, t, n) || (null != i && e.indexOf((0, p.Ny)(i)) >= 0);
}
function H(e) {
    let { pathname: t, search: n, pageIndex: i = 0, applicationId: r, guildId: s, skuId: a } = e;
    return k(t, n, r, a) || (null != s && t.includes(m.BVt.CHANNELS_GAME_SHOP(s, i, a)));
}
function W(e) {
    let t = (0, a.bG)([E.A], () => E.A.getGuildIdFromApplicationId(e)),
        n = (0, l.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function Y(e, t) {
    return t ?? (e?.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0);
}
function K(e) {
    let t = E.A.getApplicationIdFromGuildId(e);
    return Y(_.A.getGuild(e), t);
}
function $(e) {
    let t = (0, a.bG)([E.A], () => E.A.getApplicationIdFromGuildId(e));
    return Y(
        (0, a.bG)([_.A], () => _.A.getGuild(e), [e]),
        t,
    );
}
function z(e) {
    if (null != e) return E.A.getGuildIdFromApplicationId(e) ?? o.A.getApplication(e)?.guildId;
}
