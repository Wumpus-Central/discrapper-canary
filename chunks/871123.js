(n.d(t, {
    Cv: () => w,
    NE: () => C,
    OY: () => F,
    Q6: () => B,
    S4: () => P,
    Ww: () => v,
    Ye: () => j,
    aU: () => V,
    bF: () => S,
    c2: () => H,
    eV: () => D,
    fq: () => G,
    jz: () => N,
    mq: () => X,
    n5: () => Z,
    nG: () => $,
    nY: () => q,
    pV: () => g,
    rG: () => Y,
    sq: () => U,
    uV: () => K,
    wH: () => W,
    xf: () => x,
    zl: () => b,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956));
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
    E = n(967198),
    A = n(371794),
    h = n(998218),
    f = n(832163),
    I = n(79871),
    p = n(188275),
    T = n(652215),
    m = n(758836);
let g = A.QB ? "webp" : "jpg";
function S(e) {
    return null != e && e.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function N(e) {
    if (f.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = z(e, f.A.getApplicationIdFromGuildId(e.id));
    return !!f.A.hasStorefrontForApplicationId(t) || (e.features?.has(T.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function C(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function O(e) {
    return null == e ? null : { label: e.label, tooltip: e.tooltip, icon: e.icon };
}
function R(e) {
    switch (e.type) {
        case I.X.SUBSCRIPTION:
            return { type: e.type, planIds: e.plan_ids, progress: e.progress ?? null };
        case I.X.OWNS_MIN_SKUS:
            return {
                type: e.type,
                applicationId: e.application_id,
                skuIds: e.sku_ids,
                minCount: e.min_count,
                progress: e.progress ?? null,
            };
        default:
            return null;
    }
}
function L(e) {
    let t = e.id === p.ZX ? "nitro" : "default";
    return {
        id: e.id,
        endsAt: e.ends_at ?? null,
        flavor: e.flavor ?? t,
        pdp: O(e.pdp),
        storefront: null != e.storefront ? { headerText: e.storefront.header_text } : null,
        checkout: O(e.checkout),
        vcStream: O(e.vc_stream),
        rewardStatus: e.reward_status ?? null,
        rewardRequirements: (e.reward_requirements ?? []).map(R).filter((e) => null != e),
    };
}
function y(e) {
    return e.type === I.X.SUBSCRIPTION;
}
function D(e) {
    let t = e.find(y);
    return null != t && t.planIds.length > 0 ? t.planIds : null;
}
function v(e) {
    return e.type === I.X.OWNS_MIN_SKUS;
}
function b(e) {
    let t = D(e);
    return null == t || 1 !== t.length ? {} : { initialPlanId: t[0], shouldDisallowPlanSelection: !0 };
}
function M(e) {
    if (null == e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function P(e) {
    return {
        id: e.id,
        publishedAt: M(e.published_at),
        title: e.title,
        logoAssetId: e.logo_asset_id ?? null,
        lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null,
    };
}
function U(e) {
    return {
        id: e.id,
        publishedAt: M(e.published_at),
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
        promotions: r().mapValues(e.promotions ?? {}, L),
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
              primaryIconAsset: h.A.toURLSafe((0, A.YE)(t, r.labelIconAssetId, i, "webp")) ?? void 0,
              primaryIconLabel: r.label,
          };
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 512 } = t,
        i = e?.applicationId,
        r = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != r && null != i) return h.A.toURLSafe((0, A.YE)(i, r, n, "webp"));
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 1024 } = t;
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return h.A.toURLSafe((0, A.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, n, g));
}
function k(e, t, n, i) {
    let { tab: r, applicationId: s, skuId: l } = (0, a.parse)(t);
    return e.indexOf(T.BVt.COLLECTIBLES_SHOP) >= 0 && r === m.G2.GAME_SHOPS && s === n && (null == i || l === i);
}
function F(e, t) {
    return null == e || k(location.pathname, location.search, t.applicationId)
        ? `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${T.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, void 0, t.id, t.slug)}`
        : `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${T.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function B(e, t) {
    return `${F(e, t)}

`;
}
function V(e, t) {
    let n = E.A.getGuildId(),
        i =
            null != n && location.pathname.indexOf((0, p.Ny)(n)) >= 0
                ? T.BVt.GAME_SHOP(n)
                : T.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e),
        r = new URL(`${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${i}`);
    return (r.searchParams.set("skuIds", t.join(",")), r.toString());
}
function H(e, t) {
    return `${V(e, t)}

`;
}
function j(e) {
    let t = _.A.getGuild(e);
    return null != t && N(t);
}
function W(e, t, n) {
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
function Y(e, t, n, i) {
    return k(e, t, n) || (null != i && e.indexOf((0, p.Ny)(i)) >= 0);
}
function K(e) {
    let { pathname: t, search: n, pageIndex: i = 0, applicationId: r, guildId: a, skuId: s } = e;
    return k(t, n, r, s) || (null != a && t.includes(T.BVt.CHANNELS_GAME_SHOP(a, i, s)));
}
function $(e) {
    let t = (0, s.bG)([f.A], () => f.A.getGuildIdFromApplicationId(e)),
        n = (0, o.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function z(e, t) {
    return t ?? (e?.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0);
}
function X(e) {
    let t = f.A.getApplicationIdFromGuildId(e);
    return z(_.A.getGuild(e), t);
}
function q(e) {
    let t = (0, s.bG)([f.A], () => f.A.getApplicationIdFromGuildId(e));
    return z(
        (0, s.bG)([_.A], () => _.A.getGuild(e), [e]),
        t,
    );
}
function Z(e) {
    if (null != e) return f.A.getGuildIdFromApplicationId(e) ?? l.A.getApplication(e)?.guildId;
}
