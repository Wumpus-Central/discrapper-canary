(n.d(t, {
    Cv: () => U,
    NE: () => C,
    OY: () => k,
    Q6: () => F,
    S4: () => M,
    Ye: () => H,
    aU: () => B,
    bF: () => S,
    c2: () => V,
    eV: () => D,
    fq: () => w,
    jz: () => N,
    mq: () => z,
    n5: () => Z,
    nG: () => K,
    nY: () => X,
    pV: () => g,
    rG: () => W,
    sq: () => P,
    uV: () => Y,
    wH: () => j,
    xf: () => G,
    zl: () => v,
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
    I = n(832163),
    f = n(79871),
    p = n(188275),
    T = n(652215),
    m = n(758836);
let g = A.QB ? "webp" : "jpg";
function S(e) {
    return null != e && e.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM;
}
function N(e) {
    if (I.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = $(e, I.A.getApplicationIdFromGuildId(e.id));
    return !!I.A.hasStorefrontForApplicationId(t) || (e.features?.has(T.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function C(e) {
    return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
}
function O(e) {
    return null == e ? null : { label: e.label, tooltip: e.tooltip, icon: e.icon };
}
function R(e) {
    return e.type === f.X.SUBSCRIPTION ? { type: e.type, planIds: e.plan_ids, progress: e.progress ?? null } : null;
}
function L(e) {
    return {
        id: e.id,
        endsAt: e.ends_at ?? null,
        flavor: e.flavor ?? "default",
        pdp: O(e.pdp),
        storefront: null != e.storefront ? { headerText: e.storefront.header_text } : null,
        checkout: O(e.checkout),
        vcStream: O(e.vc_stream),
        rewardRequirements: (e.reward_requirements ?? []).map(R).filter((e) => null != e),
    };
}
function y(e) {
    return e.type === f.X.SUBSCRIPTION;
}
function D(e) {
    let t = e.find(y);
    return null != t && t.planIds.length > 0 ? t.planIds : null;
}
function v(e) {
    let t = D(e);
    return null == t || 1 !== t.length ? {} : { initialPlanId: t[0], shouldDisallowPlanSelection: !0 };
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
        promotions: r().mapValues(e.promotions ?? {}, L),
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
              primaryIconAsset: h.A.toURLSafe((0, A.YE)(t, r.labelIconAssetId, i, "webp")) ?? void 0,
              primaryIconLabel: r.label,
          };
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 512 } = t,
        i = e?.applicationId,
        r = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
    if (null != r && null != i) return h.A.toURLSafe((0, A.YE)(i, r, n, "webp"));
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { size: n = 1024 } = t;
    if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
        return h.A.toURLSafe((0, A.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, n, g));
}
function x(e, t, n, i) {
    let { tab: r, applicationId: s, skuId: l } = (0, a.parse)(t);
    return e.indexOf(T.BVt.COLLECTIBLES_SHOP) >= 0 && r === m.G2.GAME_SHOPS && s === n && (null == i || l === i);
}
function k(e, t) {
    return null == e || x(location.pathname, location.search, t.applicationId)
        ? `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${T.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, void 0, t.id, t.slug)}`
        : `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${T.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function F(e, t) {
    return `${k(e, t)}

`;
}
function B(e, t) {
    let n = E.A.getGuildId(),
        i =
            null != n && location.pathname.indexOf((0, p.Ny)(n)) >= 0
                ? T.BVt.GAME_SHOP(n)
                : T.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e),
        r = new URL(`${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${i}`);
    return (r.searchParams.set("skuIds", t.join(",")), r.toString());
}
function V(e, t) {
    return `${B(e, t)}

`;
}
function H(e) {
    let t = _.A.getGuild(e);
    return null != t && N(t);
}
function j(e, t, n) {
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
function W(e, t, n, i) {
    return x(e, t, n) || (null != i && e.indexOf((0, p.Ny)(i)) >= 0);
}
function Y(e) {
    let { pathname: t, search: n, pageIndex: i = 0, applicationId: r, guildId: a, skuId: s } = e;
    return x(t, n, r, s) || (null != a && t.includes(T.BVt.CHANNELS_GAME_SHOP(a, i, s)));
}
function K(e) {
    let t = (0, s.bG)([I.A], () => I.A.getGuildIdFromApplicationId(e)),
        n = (0, o.h)(e);
    return { guildId: t ?? n?.guildId, application: n };
}
function $(e, t) {
    return t ?? (e?.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0);
}
function z(e) {
    let t = I.A.getApplicationIdFromGuildId(e);
    return $(_.A.getGuild(e), t);
}
function X(e) {
    let t = (0, s.bG)([I.A], () => I.A.getApplicationIdFromGuildId(e));
    return $(
        (0, s.bG)([_.A], () => _.A.getGuild(e), [e]),
        t,
    );
}
function Z(e) {
    if (null != e) return I.A.getGuildIdFromApplicationId(e) ?? l.A.getApplication(e)?.guildId;
}
