"use strict";
n.d(t, {
    Cv: () => F,
    NE: () => D,
    OY: () => j,
    Q6: () => W,
    Ri: () => C,
    S4: () => x,
    Ye: () => Y,
    bF: () => R,
    eV: () => U,
    fq: () => V,
    jd: () => O,
    jz: () => y,
    mC: () => S,
    mq: () => X,
    n5: () => J,
    nG: () => Z,
    nY: () => Q,
    pV: () => g,
    rG: () => $,
    sq: () => k,
    uV: () => z,
    wH: () => K,
    xf: () => B,
    y8: () => N,
    zf: () => L,
    zl: () => w,
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
    I = n(79871),
    f = n(188275),
    p = n(652215),
    T = n(758836),
    m = n(818348);
let g = E.QB ? "webp" : "jpg";
function S(e) {
    return null != e.price || null != e.prices[p.lid.DEFAULT];
}
function N(e, t) {
    let n =
        null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
            ? e.prices[t].countryPrices
            : null != e.prices[p.lid.DEFAULT] && e.prices[p.lid.DEFAULT].countryPrices.prices.length > 0
              ? e.prices[p.lid.DEFAULT].countryPrices
              : null;
    return null != n ? n.prices[0] : null != e.price ? e.price : null;
}
function C(e) {
    let t = N(e, p.lid.DEFAULT) ?? { amount: 0, currency: m.Yr.USD },
        n = N(e, p.lid.GIFT) ?? { amount: 0, currency: m.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
}
function O(e) {
    let t = new Set(),
        n = [];
    for (let i of e.pages) {
        for (let e of i.skuIds) t.has(e) || (t.add(e), n.push(e));
        for (let e of i.sections ?? []) for (let i of e.skuIds) t.has(i) || (t.add(i), n.push(i));
    }
    return n;
}
function R(e) {
    return null != e && e.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function L() {
    let e = _.A.getGuild(f.v8);
    return null != e && e.features.has(p.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : f.Kf;
}
function y(e) {
    if (h.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = q(e, h.A.getApplicationIdFromGuildId(e.id)),
        n = h.A.getStorefrontApplicationIds();
    return !!(null != t && n.has(t)) || (e.features?.has(p.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function D(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function v(e) {
    return null == e ? null : { label: e.label, tooltip: e.tooltip, icon: e.icon };
}
function b(e) {
    return e.type === I.X.SUBSCRIPTION ? { type: e.type, planIds: e.plan_ids, progress: e.progress ?? null } : null;
}
function M(e) {
    return {
        id: e.id,
        endsAt: e.ends_at ?? null,
        flavor: e.flavor ?? "default",
        pdp: v(e.pdp),
        storefront: null != e.storefront ? { headerText: e.storefront.header_text } : null,
        checkout: v(e.checkout),
        vcStream: v(e.vc_stream),
        rewardRequirements: (e.reward_requirements ?? []).map(b).filter((e) => null != e),
    };
}
function P(e) {
    return e.type === I.X.SUBSCRIPTION;
}
function U(e) {
    let t = e.find(P);
    return null != t && t.planIds.length > 0 ? t.planIds : null;
}
function w(e) {
    let t = U(e);
    return null == t || 1 !== t.length ? {} : { initialPlanId: t[0], shouldDisallowPlanSelection: !0 };
}
function G(e) {
    if (null == e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function x(e) {
    return {
        id: e.id,
        publishedAt: G(e.published_at),
        title: e.title,
        logoAssetId: e.logo_asset_id ?? null,
        lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null,
    };
}
function k(e) {
    return {
        id: e.id,
        publishedAt: G(e.published_at),
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
        promotions: r().mapValues(e.promotions ?? {}, M),
    };
}
function F(e, t) {
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
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 512 } = t,
        i = e?.applicationId,
        r = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != r && null != i) return A.A.toURLSafe((0, E.YE)(i, r, n, "webp"));
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 1024 } = t;
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return A.A.toURLSafe((0, E.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, n, g));
}
function H(e, t, n, i) {
    let { tab: r, applicationId: s, skuId: l } = (0, a.parse)(t);
    return e.indexOf(p.BVt.COLLECTIBLES_SHOP) >= 0 && r === T.G2.GAME_SHOPS && s === n && (null == i || l === i);
}
function j(e, t) {
    return null == e || H(location.pathname, location.search, t.applicationId)
        ? `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${p.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, void 0, t.id, t.slug)}`
        : `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${p.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function W(e, t) {
    return `${j(e, t)}

`;
}
function Y(e) {
    let t = _.A.getGuild(e);
    return null != t && y(t);
}
function K(e, t, n) {
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
function $(e, t, n, i) {
    return H(e, t, n) || (null != i && e.indexOf((0, f.Ny)(i)) >= 0);
}
function z(e) {
    let { pathname: t, search: n, pageIndex: i = 0, applicationId: r, guildId: a, skuId: s } = e;
    return H(t, n, r, s) || (null != a && t.includes(p.BVt.CHANNELS_GAME_SHOP(a, i, s)));
}
function Z(e) {
    let t = (0, s.bG)([h.A], () => h.A.getGuildIdFromApplicationId(e)),
        n = (0, o.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function q(e, t) {
    return t ?? (e?.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0);
}
function X(e) {
    let t = h.A.getApplicationIdFromGuildId(e);
    return q(_.A.getGuild(e), t);
}
function Q(e) {
    let t = (0, s.bG)([h.A], () => h.A.getApplicationIdFromGuildId(e));
    return q(
        (0, s.bG)([_.A], () => _.A.getGuild(e), [e]),
        t,
    );
}
function J(e) {
    if (null != e) return h.A.getGuildIdFromApplicationId(e) ?? l.A.getApplication(e)?.guildId;
}
