(n(321073), n(323874), n(14289), n(35956));
var i = n(435558),
    r = n.n(i),
    a = n(492462),
    s = n(855986),
    l = n(587895),
    o = n(429913),
    d = n(993046),
    c = n(310209),
    u = n(327891),
    _ = n(71393),
    E = n(967198),
    A = n(371794),
    f = n(998218),
    h = n(832163),
    I = n(79871),
    p = n(188275),
    m = n(652215),
    T = n(758836);
let g = A.QB ? "webp" : "jpg";
function S(e) {
    if (h.A.getStorefrontGuildIds().has(e.id)) return !0;
    if ("type" in e) return !1;
    let t = P(e, h.A.getApplicationIdFromGuildId(e.id));
    return !!h.A.hasStorefrontForApplicationId(t) || (e.features?.has(m.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ?? !1);
}
function N(e) {
    return null == e ? null : { label: e.label, tooltip: e.tooltip, icon: e.icon };
}
function C(e) {
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
function O(e) {
    let t = e.id === p.ZX ? "nitro" : "default";
    return {
        id: e.id,
        endsAt: e.ends_at ?? null,
        flavor: e.flavor ?? t,
        pdp: N(e.pdp),
        storefront: null != e.storefront ? { headerText: e.storefront.header_text } : null,
        checkout: N(e.checkout),
        vcStream: N(e.vc_stream),
        rewardStatus: e.reward_status ?? null,
        rewardRequirements: (e.reward_requirements ?? []).map(C).filter((e) => null != e),
    };
}
function R(e) {
    return e.type === I.X.SUBSCRIPTION;
}
function L(e) {
    let t = e.find(R);
    return null != t && t.planIds.length > 0 ? t.planIds : null;
}
function y(e) {
    if (null == e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function D(e, t, n, i) {
    let { tab: r, applicationId: s, skuId: l } = (0, a.qg)(t);
    return e.indexOf(m.BVt.COLLECTIBLES_SHOP) >= 0 && r === T.G2.GAME_SHOPS && s === n && (null == i || l === i);
}
function b(e, t) {
    return null == e || D(location.pathname, location.search, t.applicationId)
        ? `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${m.BVt.COLLECTIBLES_SHOP_GAME_SHOP(t.applicationId, void 0, t.id, t.slug)}`
        : `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${m.BVt.GAME_SHOP(e, t.id, t.slug)}`;
}
function v(e, t) {
    let n = E.A.getGuildId(),
        i =
            null != n && location.pathname.indexOf((0, p.Ny)(n)) >= 0
                ? m.BVt.GAME_SHOP(n)
                : m.BVt.COLLECTIBLES_SHOP_GAME_SHOP(e),
        r = new URL(`${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${i}`);
    return (r.searchParams.set("skuIds", t.join(",")), r.toString());
}
function P(e, t) {
    return t ?? (e?.gameApplicationIds?.length === 1 ? e.gameApplicationIds[0] : void 0);
}
n.d(
    t,
    {},
    {
        Cv: function (e, t) {
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
                      primaryIconAsset: f.A.toURLSafe((0, A.YE)(t, r.labelIconAssetId, i, "webp")) ?? void 0,
                      primaryIconLabel: r.label,
                  };
        },
        NE: function (e) {
            return { logoAssetId: e.logo_asset_id ?? null, lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null };
        },
        NH: function (e) {
            let t = e.pages.find((e) => e.leaderboard?.backgroundImageAssetId != null)?.leaderboard
                ?.backgroundImageAssetId;
            return null != t ? (0, A.YE)(e.applicationId, t, 1024, g) : null;
        },
        OY: b,
        Q6: function (e, t) {
            return `${b(e, t)}

`;
        },
        S4: function (e) {
            return {
                id: e.id,
                publishedAt: y(e.published_at),
                title: e.title,
                logoAssetId: e.logo_asset_id ?? null,
                lightThemeLogoAssetId: e.light_theme_logo_asset_id ?? null,
            };
        },
        Ww: function (e) {
            return e.type === I.X.OWNS_MIN_SKUS;
        },
        Ye: function (e) {
            let t = _.A.getGuild(e);
            return null != t && S(t);
        },
        aU: v,
        bF: function (e) {
            return null != e && e.productLine === m.EZt.SOCIAL_LAYER_GAME_ITEM;
        },
        c2: function (e, t) {
            return `${v(e, t)}

`;
        },
        eV: L,
        fq: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { size: n = 512 } = t,
                i = e?.applicationId,
                r = e?.tenantMetadata?.socialLayer?.cardImageAssetId ?? e?.thumbnailAssetId;
            if (null != r && null != i) return f.A.toURLSafe((0, A.YE)(i, r, n, "webp"));
        },
        jz: S,
        mq: function (e) {
            let t = h.A.getApplicationIdFromGuildId(e);
            return P(_.A.getGuild(e), t);
        },
        n5: function (e) {
            if (null != e) return h.A.getGuildIdFromApplicationId(e) ?? l.A.getApplication(e)?.guildId;
        },
        nG: function (e) {
            let t = (0, s.bG)([h.A], () => h.A.getGuildIdFromApplicationId(e)),
                n = (0, o.h)(e);
            return { guildId: t ?? n?.guildId, application: n };
        },
        nY: function (e) {
            let t = (0, s.bG)([h.A], () => h.A.getApplicationIdFromGuildId(e));
            return P(
                (0, s.bG)([_.A], () => _.A.getGuild(e), [e]),
                t,
            );
        },
        pV: g,
        rG: function (e, t, n, i) {
            return D(e, t, n) || (null != i && e.indexOf((0, p.Ny)(i)) >= 0);
        },
        sq: function (e) {
            return {
                id: e.id,
                publishedAt: y(e.published_at),
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
                    sections:
                        null != e.sections ? e.sections.map((e) => ({ title: e.title, skuIds: e.sku_ids })) : void 0,
                })),
                assets: r().keyBy(e.assets, "id"),
                application: null != e.application ? u.Ay.createFromServer(e.application) : void 0,
                storefrontPricing: null != e.storefront_pricing ? (0, d.Oj)(e.storefront_pricing) : void 0,
                promotions: r().mapValues(e.promotions ?? {}, O),
            };
        },
        uV: function (e) {
            let { pathname: t, search: n, pageIndex: i = 0, applicationId: r, guildId: a, skuId: s } = e;
            return D(t, n, r, s) || (null != a && t.includes(m.BVt.CHANNELS_GAME_SHOP(a, i, s)));
        },
        wH: function (e, t, n) {
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
        },
        xf: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { size: n = 1024 } = t;
            if (e?.tenantMetadata?.socialLayer?.cardBackgroundImageAssetId != null && e?.applicationId != null)
                return f.A.toURLSafe(
                    (0, A.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, n, g),
                );
        },
        zl: function (e) {
            let t = L(e);
            return null == t || 1 !== t.length ? {} : { initialPlanId: t[0], shouldDisallowPlanSelection: !0 };
        },
    },
);
