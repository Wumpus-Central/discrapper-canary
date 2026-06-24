"use strict";
n.d(t, {
    Cv: () => w,
    NE: () => O,
    OY: () => k,
    Q6: () => U,
    Ri: () => y,
    Ye: () => G,
    bF: () => N,
    fq: () => M,
    jd: () => C,
    jz: () => R,
    mC: () => T,
    mq: () => Y,
    n5: () => K,
    nG: () => j,
    nY: () => W,
    pV: () => I,
    rG: () => V,
    sq: () => L,
    uV: () => B,
    wH: () => F,
    xf: () => P,
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
    c = n(310209),
    d = n(395671),
    _ = n(71393),
    h = n(371794),
    f = n(998218),
    p = n(832163),
    E = n(188275),
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
function y(e) {
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
function N(e) {
    return null != e && e.productLine === m.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function v() {
    let e = _.A.getGuild(E.v8);
    return null != e && e.features.has(m.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : E.Kf;
}
function R(e) {
    if (p.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = H(e, p.A.getApplicationIdFromGuildId(e.id)),
        n = p.A.getStorefrontApplicationIds();
    return !!(null != t && n.has(t)) || (e.features?.has(m.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function O(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function b(e) {
    return null == e ? null : { label: e.label, tooltip: e.tooltip, icon: e.icon };
}
function D(e) {
    return {
        id: e.id,
        endsAt: e.ends_at ?? null,
        pdp: b(e.pdp),
        storefront: null != e.storefront ? { headerText: e.storefront.header_text } : null,
        checkout: b(e.checkout),
        vcStream: b(e.vc_stream),
    };
}
function L(e) {
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
        application: null != e.application ? d.Ay.createFromServer(e.application) : void 0,
        storefrontPricing: null != e.storefront_pricing ? (0, u.Oj)(e.storefront_pricing) : void 0,
        promotions: r().mapValues(e.promotions ?? {}, D),
    };
}
function w(e, t) {
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
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 512 } = t,
        i = e?.applicationId,
        r = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != r && null != i) return f.A.toURLSafe((0, h.YE)(i, r, n, "webp"));
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 1024 } = t;
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return f.A.toURLSafe((0, h.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, n, I));
}
function x(e, t, n, i) {
    let { tab: r, applicationId: a, skuId: o } = (0, s.parse)(t);
    return e.indexOf(m.BVt.COLLECTIBLES_SHOP) >= 0 && r === g.G2.GAME_SHOPS && a === n && (null == i || o === i);
}
function k(e, t) {
    return null == e || x(location.pathname, location.search, t.applicationId)
        ? `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${m.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, void 0, t.id, t.slug)}`
        : `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${m.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function U(e, t) {
    return `${k(e, t)}

`;
}
function G(e) {
    let t = _.A.getGuild(e);
    return null != t && R(t);
}
function F(e, t, n) {
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
function V(e, t, n, i) {
    return x(e, t, n) || (null != i && e.indexOf((0, E.Ny)(i)) >= 0);
}
function B(e) {
    let { pathname: t, search: n, pageIndex: i = 0, applicationId: r, guildId: s, skuId: a } = e;
    return x(t, n, r, a) || (null != s && t.includes(m.BVt.CHANNELS_GAME_SHOP(s, i, a)));
}
function j(e) {
    let t = (0, a.bG)([p.A], () => p.A.getGuildIdFromApplicationId(e)),
        n = (0, l.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function H(e, t) {
    return t ?? (e?.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0);
}
function Y(e) {
    let t = p.A.getApplicationIdFromGuildId(e);
    return H(_.A.getGuild(e), t);
}
function W(e) {
    let t = (0, a.bG)([p.A], () => p.A.getApplicationIdFromGuildId(e));
    return H(
        (0, a.bG)([_.A], () => _.A.getGuild(e), [e]),
        t,
    );
}
function K(e) {
    if (null != e) return p.A.getGuildIdFromApplicationId(e) ?? o.A.getApplication(e)?.guildId;
}
